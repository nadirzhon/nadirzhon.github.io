import type { Locale } from './site';

type Dict = Record<Locale, string>;
type DictList = Record<Locale, string[]>;

export const t = {
  // --- Навигация ---
  navServices: { ru: 'Услуги', en: 'Services' } as Dict,
  navCases: { ru: 'Кейсы', en: 'Work' } as Dict,
  navMethod: { ru: 'Как работаю', en: 'Method' } as Dict,
  navPrices: { ru: 'Цены', en: 'Pricing' } as Dict,
  navBlog: { ru: 'Блог', en: 'Journal' } as Dict,
  navAbout: { ru: 'Кто я', en: 'About' } as Dict,
  navContact: { ru: 'Обсудить задачу', en: 'Start a project' } as Dict,

  // --- Герой ---
  heroPlate: { ru: 'Инженерная студия · с 2019', en: 'Engineering studio · since 2019' } as Dict,
  heroLine1: { ru: 'Рутина съедает', en: 'Routine is eating' } as Dict,
  heroLine2: { ru: 'вашу прибыль.', en: 'your profit.' } as Dict,
  heroLine3: { ru: 'Тихо и каждый день.', en: 'Quietly, every day.' } as Dict,
  heroSub: {
    ru: 'Кто-то в вашей команде прямо сейчас делает работу, которую должна делать машина. Я строю системы, которые забирают её себе: AI-агенты, боты, сайты, приложения, интеграции, торговые контуры. От первого разговора до продакшена отвечает один инженер.',
    en: 'Someone on your team is doing work a machine should be doing right now. I build the systems that take it over: AI agents, bots, websites, apps, integrations, trading infrastructure. From the first call to production, one engineer owns it.',
  } as Dict,
  heroCta: { ru: 'Посчитать мои потери', en: 'Calculate my losses' } as Dict,
  heroCta2: { ru: 'Что я делаю', en: 'What I build' } as Dict,

  // --- Шкала часов ---
  clockHuman: { ru: 'Человек', en: 'People' } as Dict,
  clockSystem: { ru: 'Система', en: 'System' } as Dict,
  clockCaption: {
    ru: 'Часы в неделе. Разница — это то, что вы сейчас не делаете, потому что некому.',
    en: 'Hours in a week. The gap is everything you don’t do because nobody is left to do it.',
  } as Dict,

  // --- Боль ---
  painPlate: { ru: 'Диагноз', en: 'Diagnosis' } as Dict,
  painTitle: { ru: 'Узнаёте?', en: 'Sound familiar?' } as Dict,
  painLead: {
    ru: 'Ни один из этих пунктов не выглядит катастрофой по отдельности. Вместе они забирают у бизнеса больше, чем любая неудачная рекламная кампания — просто медленно и без счёта, который можно предъявить.',
    en: 'None of these looks like a catastrophe on its own. Together they take more out of a business than any failed ad campaign — just slowly, and with no invoice you can point at.',
  } as Dict,
  painFooter: {
    ru: 'Если отметили хотя бы три — вы уже платите за автоматизацию. Только пока зарплатой, а не разработкой.',
    en: 'If three or more landed, you are already paying for automation. Just in salaries rather than in software.',
  } as Dict,

  // --- Почему я ---
  proofPlate: { ru: 'Основание', en: 'Why me' } as Dict,
  proofTitle: { ru: 'Почему это сработает', en: 'Why this works' } as Dict,
  proofLead: {
    ru: 'Не потому что я так говорю. Потому что риск снят там, где обычно горит у заказчика.',
    en: 'Not because I say so. Because the risk is removed exactly where clients usually get burned.',
  } as Dict,

  // --- Ещё умею ---
  extraPlate: { ru: 'Сверх того', en: 'Also' } as Dict,
  extraTitle: { ru: 'Что ещё заказывают', en: 'What else gets ordered' } as Dict,
  extraLead: {
    ru: 'Задачи поменьше, которые не требуют отдельного проекта, но закрывают дыру за неделю-другую. Считаются по той же фиксированной смете.',
    en: 'Smaller jobs that do not need a full project but close a gap in a week or two. Same fixed-quote logic.',
  } as Dict,

  // --- Услуги ---
  servicesPlate: { ru: 'Направления', en: 'Disciplines' } as Dict,
  servicesTitle: { ru: 'Что я делаю', en: 'What I build' } as Dict,
  servicesLead: {
    ru: 'Пять направлений. Обычно проект начинается с одного и прирастает остальными — потому что делает их один человек и они стыкуются без переговоров между подрядчиками.',
    en: 'Five disciplines. A project usually starts with one and grows into the others — one person builds them, so they fit together without vendor negotiations.',
  } as Dict,
  serviceMore: { ru: 'Подробно', en: 'Details' } as Dict,
  serviceFrom: { ru: 'от', en: 'from' } as Dict,
  serviceTerm: { ru: 'Срок', en: 'Timeline' } as Dict,
  serviceGet: { ru: 'Что вы получаете', en: 'What you get' } as Dict,
  serviceWho: { ru: 'Кому подходит', en: 'Who it’s for' } as Dict,
  serviceStack: { ru: 'Стек', en: 'Stack' } as Dict,
  serviceBase: { ru: 'Входит в базовую цену', en: 'Included in the base price' } as Dict,
  serviceAddons: { ru: 'Допы по необходимости', en: 'Add-ons if you need them' } as Dict,
  serviceAddonsLead: {
    ru: 'Каждый доп считается отдельно и берётся только если он вам нужен. Ничего не включается «по умолчанию», чтобы раздуть смету.',
    en: 'Each add-on is priced separately and taken only if you need it. Nothing is bundled in by default to inflate the quote.',
  } as Dict,
  serviceTotal: { ru: 'Ваша смета', en: 'Your quote' } as Dict,
  serviceTotalHint: {
    ru: 'Отметьте нужное — увидите порядок суммы до разговора.',
    en: 'Tick what you need and see the ballpark before we talk.',
  } as Dict,
  serviceHonest: { ru: 'Честно о границах', en: 'Where I draw the line' } as Dict,

  // --- Калькулятор ---
  calcPlate: { ru: 'Расчёт', en: 'Calculator' } as Dict,
  calcTitle: { ru: 'Сколько стоит ваша рутина', en: 'What your routine costs' } as Dict,
  calcLead: {
    ru: 'Автоматизация окупается или не окупается — это арифметика, а не вера. Подставьте свои цифры и увидите годовую стоимость ручной работы и срок возврата вложений.',
    en: 'Automation either pays back or it doesn’t — that’s arithmetic, not faith. Put in your numbers and see the annual cost of manual work and the payback period.',
  } as Dict,
  calcPeople: { ru: 'Сотрудников на рутине', en: 'People on routine work' } as Dict,
  calcHours: { ru: 'Часов рутины в неделю на каждого', en: 'Routine hours per week, each' } as Dict,
  calcRate: { ru: 'Стоимость часа сотрудника', en: 'Cost per hour, per person' } as Dict,
  calcAuto: { ru: 'Доля, которую можно автоматизировать', en: 'Share that can be automated' } as Dict,
  calcResultYear: { ru: 'Ручная работа обходится в год', en: 'Manual work costs per year' } as Dict,
  calcResultSaved: { ru: 'Освобождается в год', en: 'Freed up per year' } as Dict,
  calcResultHours: { ru: 'Часов возвращается команде', en: 'Hours returned to the team' } as Dict,
  calcResultPayback: { ru: 'Проект окупается за', en: 'Project pays back in' } as Dict,
  calcMonths: { ru: 'мес.', en: 'mo' } as Dict,
  calcFormula: {
    ru: 'Формула открыта: люди × часы × ставка × 47 рабочих недель. Окупаемость считается от нижней границы проекта в 90 000 ₽ и не учитывает налоги и то, что часть освободившегося времени уйдёт на другие задачи, а не в прибыль.',
    en: 'The formula is open: people × hours × rate × 47 working weeks. Payback is measured against the €900 project floor and ignores taxes and the fact that some freed time goes to other work rather than profit.',
  } as Dict,
  calcCta: { ru: 'Проверить расчёт на моём процессе', en: 'Check this against my process' } as Dict,

  // --- Метод ---
  methodPlate: { ru: 'Порядок работы', en: 'How it runs' } as Dict,
  methodTitle: { ru: 'Как устроен проект', en: 'How a project works' } as Dict,
  methodLead: {
    ru: 'Порядок один и тот же для лендинга и для торговой системы — меняется только длина этапов. Каждый этап заканчивается тем, что можно посмотреть и потрогать.',
    en: 'The sequence is the same for a landing page and for a trading system — only the length of each stage changes. Every stage ends with something you can look at and touch.',
  } as Dict,

  // --- Кейсы ---
  casesPlate: { ru: 'Работы', en: 'Selected work' } as Dict,
  casesTitle: { ru: 'Что уже собрано', en: 'What’s already built' } as Dict,
  casesAll: { ru: 'Все работы', en: 'All work' } as Dict,
  caseYear: { ru: 'Год', en: 'Year' } as Dict,
  caseRole: { ru: 'Роль', en: 'Role' } as Dict,
  caseResult: { ru: 'Результат', en: 'Outcome' } as Dict,
  caseRead: { ru: 'Разбор', en: 'Read' } as Dict,

  // --- Цены ---
  pricePlate: { ru: 'Деньги', en: 'Money' } as Dict,
  priceTitle: { ru: 'Форматы работы', en: 'Ways to work' } as Dict,
  priceLead: {
    ru: 'Цены настоящие, а не «рассчитывается индивидуально». Работает так: есть базовый пакет с понятной границей и есть допы, которые вы берёте только если они вам нужны. Итог фиксируется в договоре до старта и дальше не растёт.',
    en: 'Real numbers, not “contact us for pricing”. It works like this: a base package with a clear boundary, plus add-ons you take only if you need them. The total is fixed in the contract before work starts and does not grow afterwards.',
  } as Dict,
  priceCta: { ru: 'Выбрать формат', en: 'Choose this' } as Dict,

  // --- FAQ ---
  faqPlate: { ru: 'Вопросы', en: 'Questions' } as Dict,
  faqTitle: { ru: 'То, что спрашивают до старта', en: 'Asked before we start' } as Dict,

  // --- Контакты ---
  contactPlate: { ru: 'Связь', en: 'Contact' } as Dict,
  contactTitle: { ru: 'Расскажите, что болит', en: 'Tell me what hurts' } as Dict,
  contactLead: {
    ru: 'Опишите задачу в двух абзацах. Отвечаю в течение рабочего дня и на первом созвоне честно говорю, берусь я или нет и сколько это будет стоить.',
    en: 'Describe the task in two paragraphs. I reply within one business day and tell you on the first call whether I take it and what it costs.',
  } as Dict,
  formName: { ru: 'Как к вам обращаться', en: 'Your name' } as Dict,
  formContact: { ru: 'Почта или Telegram', en: 'Email or Telegram' } as Dict,
  formBudget: { ru: 'Ориентир по бюджету', en: 'Budget range' } as Dict,
  formTask: { ru: 'Задача', en: 'The task' } as Dict,
  formTaskHint: {
    ru: 'Что происходит сейчас, что должно происходить вместо этого и к какому сроку.',
    en: 'What happens now, what should happen instead, and by when.',
  } as Dict,
  formSend: { ru: 'Отправить', en: 'Send' } as Dict,
  formOr: { ru: 'Или напрямую', en: 'Or reach me directly' } as Dict,
  formPrivacy: {
    ru: 'Отправляя форму, вы соглашаетесь на обработку контактных данных для ответа на заявку. Никаких рассылок.',
    en: 'By sending this you agree that your contact details are used to reply. No mailing lists.',
  } as Dict,
  formSent: { ru: 'Отправлено. Отвечу в течение рабочего дня.', en: 'Sent. I’ll reply within one business day.' } as Dict,
  formError: {
    ru: 'Не удалось отправить. Напишите напрямую — контакты ниже.',
    en: 'Sending failed. Write to me directly — contacts below.',
  } as Dict,

  // --- Блог ---
  blogPlate: { ru: 'Записи', en: 'Journal' } as Dict,
  blogTitle: { ru: 'Инженерный журнал', en: 'Engineering journal' } as Dict,
  blogLead: {
    ru: 'Разборы задач, на которых я обжигался, и решений, которые оказались рабочими. Без новостей индустрии и списков «10 трендов».',
    en: 'Write-ups of problems that burned me and solutions that held. No industry news, no “10 trends” lists.',
  } as Dict,
  blogRead: { ru: 'Читать', en: 'Read' } as Dict,
  blogBack: { ru: 'Все записи', en: 'All entries' } as Dict,
  minRead: { ru: 'мин чтения', en: 'min read' } as Dict,

  // --- Подвал ---
  footerLine: {
    ru: 'Инженерная студия полного цикла. Работаю с командами в России, СНГ и Европе.',
    en: 'Full-cycle engineering studio. Working with teams across Europe, Russia and the CIS.',
  } as Dict,
  footerRights: { ru: 'Все права защищены', en: 'All rights reserved' } as Dict,
  langSwitch: { ru: 'EN', en: 'RU' } as Dict,
  backHome: { ru: 'На главную', en: 'Home' } as Dict,
} satisfies Record<string, Dict | DictList>;

export function tr(key: keyof typeof t, locale: Locale): string {
  return (t[key] as Dict)[locale];
}

// --- Этапы работы (реальная последовательность — нумерация оправдана) ---
export const method = [
  {
    n: '01',
    title: { ru: 'Разговор', en: 'The call' },
    dur: { ru: '60 минут, бесплатно', en: '60 minutes, free' },
    text: {
      ru: 'Смотрим на процесс как он есть. Часто выясняется, что задача решается настройкой того, что уже куплено, — тогда я так и говорю и мы расходимся.',
      en: 'We look at the process as it actually runs. Often it turns out the problem is solved by configuring what you already pay for — I say so and we part ways.',
    },
  },
  {
    n: '02',
    title: { ru: 'Границы и смета', en: 'Scope and quote' },
    dur: { ru: '3–5 дней', en: '3–5 days' },
    text: {
      ru: 'Пишу, что входит в работу, а что нет, с фиксированной ценой и сроком. Читается за десять минут и не содержит слова «доработка».',
      en: 'I write down what is in and what is out, with a fixed price and date. It reads in ten minutes and never uses the word “iteration”.',
    },
  },
  {
    n: '03',
    title: { ru: 'Первый рабочий контур', en: 'First working loop' },
    dur: { ru: '2–4 недели', en: '2–4 weeks' },
    text: {
      ru: 'Собираю самую узкую версию, которая уже приносит пользу, и отдаю вам в руки. Дальше вы правите курс, глядя на живую систему, а не на макет.',
      en: 'I build the narrowest version that already helps and put it in your hands. From there you steer by looking at a live system, not a mockup.',
    },
  },
  {
    n: '04',
    title: { ru: 'Достройка', en: 'Build-out' },
    dur: { ru: 'по объёму', en: 'scope-dependent' },
    text: {
      ru: 'Наращиваю функции неделя за неделей. Каждую пятницу — короткий отчёт: что сделано, что дальше, где я ошибся в оценке.',
      en: 'Features grow week by week. Every Friday a short report: what shipped, what’s next, where my estimate was wrong.',
    },
  },
  {
    n: '05',
    title: { ru: 'Передача', en: 'Handover' },
    dur: { ru: '1 неделя', en: '1 week' },
    text: {
      ru: 'Код, доступы, документация и запись разбора системы переходят к вам. Ничего не остаётся у меня на серверах и в личных аккаунтах.',
      en: 'Code, access, documentation and a recorded walkthrough go to you. Nothing stays on my servers or in my personal accounts.',
    },
  },
  {
    n: '06',
    title: { ru: 'Присмотр', en: 'Watch' },
    dur: { ru: 'месяц включён', en: 'first month included' },
    text: {
      ru: 'Первый месяц слежу за системой и чиню свои ошибки бесплатно. Дальше — по желанию, помесячно и без обязательств.',
      en: 'For the first month I watch the system and fix my own mistakes for free. After that it’s monthly, optional, no lock-in.',
    },
  },
];

// --- Пакеты ---
export const packages = [
  {
    code: 'P-01',
    name: { ru: 'Разведка', en: 'Recon' },
    price: { ru: '15 000 ₽', en: '€150' },
    unit: { ru: 'фиксированно', en: 'fixed' },
    for: {
      ru: 'Когда непонятно, стоит ли вообще браться',
      en: 'When it’s unclear whether the thing is worth building',
    },
    items: {
      ru: [
        'Разбор процесса или аудит существующей системы',
        'Документ: что автоматизируется, что нет, в каком порядке',
        'Оценка сроков и стоимости по каждому куску',
        'Часовой созвон с ответами на вопросы',
        'Стоимость вычитается из проекта, если он состоится',
      ],
      en: [
        'Process breakdown or audit of an existing system',
        'A document: what can be automated, what can’t, in what order',
        'Timeline and cost estimate per piece',
        'A one-hour call to answer questions',
        'The fee is deducted from the project if it goes ahead',
      ],
    },
    accent: false,
  },
  {
    code: 'P-02',
    name: { ru: 'Проект', en: 'Project' },
    price: { ru: 'от 90 000 ₽', en: 'from €900' },
    unit: { ru: 'фиксированная смета', en: 'fixed quote' },
    for: { ru: 'Когда есть понятная задача с конечным результатом', en: 'When the task has a definite end state' },
    items: {
      ru: [
        'Всё из «Разведки» плюс сама разработка',
        'Фиксированная цена и дата — риск переработки на мне',
        'Демонстрация каждые две недели',
        'Исходный код и все доступы ваши с первого дня',
        'Месяц сопровождения после запуска включён',
      ],
      en: [
        'Everything in Recon plus the build itself',
        'Fixed price and date — overrun risk is mine',
        'A demo every two weeks',
        'Source code and all access yours from day one',
        'One month of post-launch support included',
      ],
    },
    accent: true,
  },
  {
    code: 'P-03',
    name: { ru: 'Инженер рядом', en: 'Embedded' },
    price: { ru: 'от 150 000 ₽', en: 'from €1,500' },
    unit: { ru: 'в месяц', en: 'per month' },
    for: { ru: 'Когда работа не кончается и нужен свой человек', en: 'When the work never ends and you need your own engineer' },
    items: {
      ru: [
        'Выделенное время каждую неделю под ваши задачи',
        'Приоритеты меняете вы, без пересогласования сметы',
        'Дежурство по инцидентам и мониторинг систем',
        'Участие в планировании продукта, а не только исполнение',
        'Отказ в любой момент с предупреждением за месяц',
      ],
      en: [
        'Dedicated hours every week for your queue',
        'You reset priorities without renegotiating a quote',
        'Incident duty and system monitoring',
        'A voice in product planning, not just execution',
        'Cancel any time with one month’s notice',
      ],
    },
    accent: false,
  },
];

// --- FAQ ---
export const faq = [
  {
    q: { ru: 'Вы один или команда?', en: 'Are you one person or a team?' },
    a: {
      ru: 'Проект веду я и отвечаю за него лично. На дизайн, вёрстку под нагрузкой и мобильную часть подключаю проверенных людей, с которыми работаю годами. Клиент всегда общается со мной, а не с менеджером, который передаёт слова.',
      en: 'I run the project and answer for it personally. For design, heavy front-end and mobile I bring in people I have worked with for years. You always talk to me, not to a manager relaying messages.',
    },
  },
  {
    q: { ru: 'Почему не студия с сорока людьми?', en: 'Why not a forty-person agency?' },
    a: {
      ru: 'В большой студии половина сметы уходит на менеджеров, продажников и офис. Здесь вы платите за инженерные часы. Обратная сторона честная: я беру два-три проекта одновременно, и иногда очередь занята на месяц вперёд.',
      en: 'In a large agency half the quote pays for managers, sales and an office. Here you pay for engineering hours. The honest downside: I take two or three projects at a time, and the queue is sometimes a month deep.',
    },
  },
  {
    q: { ru: 'Кому принадлежит код?', en: 'Who owns the code?' },
    a: {
      ru: 'Вам, с первого коммита. Репозиторий заводится в вашем аккаунте, серверы оформляются на вашу компанию, ключи и доступы тоже ваши. Если мы расстанемся посреди проекта, вы уйдёте со всем, что сделано.',
      en: 'You do, from the first commit. The repository lives in your account, servers are registered to your company, keys and access are yours. If we part mid-project, you leave with everything built so far.',
    },
  },
  {
    q: { ru: 'Что если бюджет меньше вашей нижней границы?', en: 'What if my budget is below your floor?' },
    a: {
      ru: 'Скажу об этом сразу, а не после трёх встреч. Часто можно вырезать половину задуманного и получить работающий контур в бюджет — с этого честнее начинать. Если и так не сходится, посоветую, к кому обратиться.',
      en: 'I say so immediately, not after three meetings. Often you can cut half the plan and still get a working loop within budget — that is the more honest place to start. If it still doesn’t fit, I point you to someone else.',
    },
  },
  {
    q: { ru: 'Работаете с зарубежными клиентами?', en: 'Do you work with clients abroad?' },
    a: {
      ru: 'Да. Договор и оплата в рублях или евро, созвоны в вашем часовом поясе, переписка на русском или английском. Пересечение рабочих часов обсуждаем на первом звонке.',
      en: 'Yes. Contract and payment in euros or roubles, calls in your timezone, correspondence in English or Russian. We agree on overlapping hours on the first call.',
    },
  },
  {
    q: { ru: 'Гарантируете рост выручки или доходность?', en: 'Do you guarantee revenue growth or returns?' },
    a: {
      ru: 'Нет, и никто честный не гарантирует. Я отвечаю за то, что система работает так, как записано в договоре, в срок и без потери данных. Что вы с ней сделаете дальше — зона вашего бизнеса и рынка.',
      en: 'No, and nobody honest does. I answer for the system doing what the contract says, on time and without losing data. What you do with it afterwards belongs to your business and your market.',
    },
  },
];

// --- Симптомы: то, что клиент узнаёт в себе ---
export const painPoints = [
  {
    ru: 'Сотрудник каждый день переносит данные из почты в таблицу, а из таблицы в CRM',
    en: 'Someone moves data from email to a spreadsheet, and from the spreadsheet to the CRM, every day',
  },
  {
    ru: 'На одни и те же вопросы клиентов вы отвечаете десятки раз в неделю',
    en: 'You answer the same customer questions dozens of times a week',
  },
  {
    ru: 'Отчёт, который нужен руководителю к понедельнику, кто-то собирает руками полдня',
    en: 'The report your boss needs by Monday takes half a day to assemble by hand',
  },
  {
    ru: 'Заявки теряются между мессенджером, почтой и записками, и никто не знает сколько',
    en: 'Leads vanish between messenger, email and sticky notes, and nobody knows how many',
  },
  {
    ru: 'Сайт есть, но клиенты приходят откуда угодно, только не с него',
    en: 'You have a website, and customers come from anywhere except it',
  },
  {
    ru: 'Данные живут в трёх системах, которые не разговаривают друг с другом',
    en: 'Your data lives in three systems that never talk to each other',
  },
  {
    ru: 'Есть идея продукта, но нет никого, кто доведёт её до работающей версии',
    en: 'You have a product idea and nobody to take it to a working version',
  },
  {
    ru: 'Что-то уже написано подрядчиком, работает через раз, и трогать страшно',
    en: 'A contractor built something, it half-works, and nobody dares to touch it',
  },
];

// --- Снятие рисков: причины поверить до первого платежа ---
export const proofPoints = [
  {
    n: '01',
    title: { ru: 'Цена не поплывёт', en: 'The price will not drift' },
    text: {
      ru: 'Смета фиксируется до старта. Если я ошибся в оценке — это мой убыток, а не ваш счёт на доплату. Поэтому оценку я делаю дольше, чем принято.',
      en: 'The quote is fixed before work starts. If I misjudged the effort, that is my loss, not your change order. Which is why my estimates take longer than usual.',
    },
  },
  {
    n: '02',
    title: { ru: 'Вы не попадаете в зависимость', en: 'You do not get locked in' },
    text: {
      ru: 'Репозиторий в вашем аккаунте, серверы на вашу компанию, ключи ваши с первого дня. Уйти от меня можно в любой момент, забрав всё сделанное.',
      en: 'The repository is in your account, servers registered to your company, keys yours from day one. You can walk away at any point and take everything with you.',
    },
  },
  {
    n: '03',
    title: { ru: 'Результат видно через две недели', en: 'You see results in two weeks' },
    text: {
      ru: 'Первым делом собирается самая узкая работающая версия. Вы правите курс, глядя на живую систему, а не на макет и не на отчёт о процентах готовности.',
      en: 'The narrowest working version comes first. You steer by looking at a live system, not a mockup and not a percentage-complete report.',
    },
  },
  {
    n: '04',
    title: { ru: 'Я говорю «не берусь»', en: 'I say no' },
    text: {
      ru: 'Если задача решается настройкой того, что у вас уже куплено, я скажу это на первом созвоне и не возьму денег. Мне дешевле потерять проект, чем репутацию.',
      en: 'If the problem is solved by configuring what you already pay for, I say so on the first call and take nothing. Losing a project is cheaper for me than losing a reputation.',
    },
  },
];

// --- Задачи поменьше, без отдельных страниц ---
export const extraServices = [
  { ru: 'Telegram-боты и мини-приложения', en: 'Telegram bots and mini apps' },
  { ru: 'База знаний с поиском по вашим документам', en: 'Knowledge base with search across your documents' },
  { ru: 'Распознавание счетов, договоров, накладных', en: 'Invoice, contract and waybill recognition' },
  { ru: 'Голосовой робот для приёма звонков', en: 'A voice bot that answers calls' },
  { ru: 'Дашборды и отчётность вместо ручных таблиц', en: 'Dashboards and reporting instead of manual spreadsheets' },
  { ru: 'Прогноз спроса и остатков по вашей истории', en: 'Demand and stock forecasting from your history' },
  { ru: 'Мониторинг цен и предложений конкурентов', en: 'Competitor price and offer monitoring' },
  { ru: 'Интернет-магазин и подключение к маркетплейсам', en: 'Online store with marketplace integrations' },
  { ru: 'Интеграция с 1С, CRM, складом, банком', en: 'Integration with ERP, CRM, warehouse, banking' },
  { ru: 'Обработка фото и видео в потоке', en: 'Bulk photo and video processing' },
  { ru: 'MVP продукта за три недели', en: 'A product MVP in three weeks' },
  { ru: 'Аудит и спасение проекта после подрядчика', en: 'Audit and rescue after another contractor' },
];
