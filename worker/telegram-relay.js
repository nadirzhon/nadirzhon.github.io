/**
 * Заявки с сайта в Telegram + счётчик заявок.
 *
 * Зачем он нужен: чтобы токен бота не лежал в коде сайта. Сайт публичный,
 * и всё, что в нём есть, доступно любому. Токен живёт здесь, в секретах
 * Cloudflare, и наружу не выходит.
 *
 * Воркер делает две вещи:
 *   POST /      — заявка с сайта: уходит в Telegram и записывается в счётчик
 *   POST /tg    — сюда Telegram присылает команды боту, отвечает /stats
 *
 * Как развернуть — пошагово в worker/README.md.
 * Переменные окружения:
 *   BOT_TOKEN      — выдаёт @BotFather при создании бота          (Secret)
 *   CHAT_ID        — ваш числовой id, его сообщает бот @userinfobot (Secret)
 *   WEBHOOK_SECRET — любая строка, ею Telegram подписывает запросы  (Secret)
 *   ALLOWED_ORIGIN — адрес сайта, с которого принимаются заявки     (Text)
 * И одна привязка:
 *   LEADS — хранилище KV, в нём живёт журнал заявок для /stats
 *
 * Без привязки LEADS воркер работает: заявки приходят, но /stats скажет,
 * что журнал не подключён. Это сделано намеренно — чтобы можно было
 * запуститься сегодня, а счётчик добавить потом.
 */

const LOG_KEY = 'log';
const LOG_LIMIT = 1000; // столько последних заявок держим для статистики

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/tg') return handleTelegram(request, env);
    return handleLead(request, env);
  },
};

/* ---------------------------------------------------------------- заявка */

async function handleLead(request, env) {
  // Адресов может быть несколько через запятую: сайт живёт и на своём домене,
  // и на github.io, пока переезд не закончен
  const list = (env.ALLOWED_ORIGIN || '*').split(',').map((s) => s.trim()).filter(Boolean);
  const origin = request.headers.get('Origin');
  const open = list.includes('*');
  const allowed = open ? '*' : list.includes(origin) ? origin : list[0];
  const cors = {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };

  if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Только POST' }, 405, cors);
  }

  // Принимаем заявки лишь с вашего сайта
  if (!open && origin && !list.includes(origin)) {
    return json({ ok: false, error: 'Чужой источник' }, 403, cors);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'Тело запроса не разобрано' }, 400, cors);
  }

  // Ловушка для ботов: настоящий человек это поле не заполняет
  if (data.botcheck) return json({ ok: true }, 200, cors);

  const clean = (v) => String(v ?? '—').slice(0, 1500);
  // Направление стоит первым: по нему сразу понятно, о чём заявка
  const text = [
    `🔔 <b>Заявка</b> — ${esc(clean(data.service))}`,
    '',
    `<b>Имя:</b> ${esc(clean(data.name))}`,
    `<b>Связь:</b> ${esc(clean(data.contact))}`,
    `<b>Бюджет:</b> ${esc(clean(data.budget))}`,
    '',
    '<b>Задача:</b>',
    esc(clean(data.task)),
  ].join('\n');

  const res = await send(env, text);
  if (!res.ok) {
    const detail = await res.text();
    return json({ ok: false, error: 'Telegram отклонил сообщение', detail }, 502, cors);
  }

  // Журнал ведём после отправки: сбой счётчика не должен ронять заявку
  try {
    await remember(env, { s: clean(data.service), b: clean(data.budget) });
  } catch {
    /* статистика не критична — сообщение уже доставлено */
  }

  return json({ ok: true }, 200, cors);
}

/* ------------------------------------------------------------ команды бота */

async function handleTelegram(request, env) {
  // Telegram подписывает свои запросы этим заголовком — чужие отсекаем
  if (env.WEBHOOK_SECRET) {
    const got = request.headers.get('X-Telegram-Bot-Api-Secret-Token');
    if (got !== env.WEBHOOK_SECRET) return new Response('нет', { status: 403 });
  }

  let update;
  try {
    update = await request.json();
  } catch {
    return new Response('ok');
  }

  const msg = update.message || update.edited_message;
  const text = (msg?.text || '').trim();
  const chat = msg?.chat?.id;
  if (!chat || !text) return new Response('ok');

  // Бот отвечает только владельцу: посторонним он молчит
  if (String(chat) !== String(env.CHAT_ID)) return new Response('ok');

  if (text.startsWith('/stats')) {
    await send(env, await report(env));
  } else if (text.startsWith('/start') || text.startsWith('/help')) {
    await send(
      env,
      [
        '🤖 <b>Бот заявок AUTONOMA</b>',
        '',
        'Сюда падают заявки с сайта — направление, имя, связь, бюджет и текст.',
        '',
        '<b>/stats</b> — сколько заявок пришло и по каким направлениям',
      ].join('\n'),
    );
  }

  return new Response('ok');
}

/* -------------------------------------------------------------- статистика */

async function remember(env, lead) {
  if (!env.LEADS) return;
  const log = JSON.parse((await env.LEADS.get(LOG_KEY)) || '[]');
  log.push({ t: Math.floor(Date.now() / 1000), s: lead.s, b: lead.b });
  // Держим только хвост: журнал не должен расти без предела
  const trimmed = log.slice(-LOG_LIMIT);
  await env.LEADS.put(LOG_KEY, JSON.stringify(trimmed));
  const total = Number((await env.LEADS.get('total')) || 0) + 1;
  await env.LEADS.put('total', String(total));
}

async function report(env) {
  if (!env.LEADS) {
    return '📊 Журнал заявок не подключён — добавьте привязку KV с именем LEADS, и счётчик заработает.';
  }

  const log = JSON.parse((await env.LEADS.get(LOG_KEY)) || '[]');
  const total = Number((await env.LEADS.get('total')) || log.length);
  if (!log.length) return '📊 Заявок пока нет.';

  const now = Math.floor(Date.now() / 1000);
  const since = (days) => log.filter((l) => l.t >= now - days * 86400);
  const week = since(7);
  const month = since(30);

  const top = (rows, key) => {
    const acc = {};
    for (const r of rows) acc[r[key] || '—'] = (acc[r[key] || '—'] || 0) + 1;
    return Object.entries(acc)
      .sort((a, b) => b[1] - a[1])
      .map(([k, n]) => `  • ${esc(k)} — ${n}`)
      .join('\n');
  };

  const last = log[log.length - 1];
  const out = [
    '📊 <b>Заявки</b>',
    '',
    `Всего: <b>${total}</b>`,
    `За 7 дней: <b>${week.length}</b>`,
    `За 30 дней: <b>${month.length}</b>`,
  ];

  if (month.length) {
    out.push('', '<b>Направления за 30 дней</b>', top(month, 's'));
    out.push('', '<b>Бюджеты за 30 дней</b>', top(month, 'b'));
  }
  out.push('', `Последняя: ${msk(last.t)}`);
  return out.join('\n');
}

/* ------------------------------------------------------------ вспомогательное */

function send(env, text) {
  return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.CHAT_ID,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });
}

function json(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}

/** Время по Москве: воркер живёт в UTC, а читаете вы из своего часового пояса */
function msk(sec) {
  const d = new Date((sec + 3 * 3600) * 1000);
  const p = (n) => String(n).padStart(2, '0');
  return `${p(d.getUTCDate())}.${p(d.getUTCMonth() + 1)} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())} МСК`;
}

/** Экранирование под HTML — иначе Telegram отклонит сообщение с < или & */
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
