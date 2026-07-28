/**
 * Ретранслятор заявок с сайта в Telegram.
 *
 * Зачем он нужен: чтобы токен бота не лежал в коде сайта. Сайт публичный,
 * и всё, что в нём есть, доступно любому. Токен живёт здесь, в секретах
 * Cloudflare, и наружу не выходит.
 *
 * Как развернуть — пошагово в worker/README.md.
 * Нужны две переменные окружения:
 *   BOT_TOKEN — выдаёт @BotFather при создании бота
 *   CHAT_ID   — ваш числовой id, его сообщает бот @userinfobot
 * И одна необязательная:
 *   ALLOWED_ORIGIN — адрес сайта, с которого принимаются заявки
 */

export default {
  async fetch(request, env) {
    const allowed = env.ALLOWED_ORIGIN || '*';
    const cors = {
      'Access-Control-Allow-Origin': allowed,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'POST') {
      return json({ ok: false, error: 'Только POST' }, 405, cors);
    }

    // Принимаем заявки лишь с вашего сайта
    const origin = request.headers.get('Origin');
    if (allowed !== '*' && origin && origin !== allowed) {
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
    const text = [
      '🔔 *Заявка с сайта*',
      '',
      `*Имя:* ${escape(clean(data.name))}`,
      `*Связь:* ${escape(clean(data.contact))}`,
      `*Бюджет:* ${escape(clean(data.budget))}`,
      '',
      `*Задача:*`,
      escape(clean(data.task)),
    ].join('\n');

    const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.CHAT_ID,
        text,
        parse_mode: 'MarkdownV2',
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return json({ ok: false, error: 'Telegram отклонил сообщение', detail }, 502, cors);
    }

    return json({ ok: true }, 200, cors);
  },
};

function json(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}

/** Экранирование под MarkdownV2 — иначе Telegram отклонит сообщение со спецсимволами */
function escape(s) {
  return s.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}
