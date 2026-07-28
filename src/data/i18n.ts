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
  navContact: { ru: 'Обсудить задачу', en: 'Start a project' } as Dict,

  // --- Герой ---
  heroPlate: { ru: 'Инженерная студия · с 2019', en: 'Engineering studio · since 2019' } as Dict,
  heroLine1: { ru: 'Ваша команда работает', en: 'Your team works' } as Dict,
  heroLine2: { ru: '40 часов в неделю.', en: '40 hours a week.' } as Dict,
  heroLine3: { ru: 'Система —', en: 'The system —' } as Dict,
  heroLine4: { ru: '168', en: '168' } as Dict,
  heroSub: {
    ru: 'Проектирую и собираю программные системы, которые делают рутинную работу сами: AI-агенты, торговые контуры, сайты, сервисы и мобильные приложения. Один инженер отвечает за результат от первого разговора до продакшена.',
    en: 'I design and build software that does the repetitive work on its own: AI agents, trading infrastructure, websites, services and mobile apps. One engineer owns the result from the first call to production.',
  } as Dict,
  heroCta: { ru: 'Обсудить задачу', en: 'Start a project' } as Dict,
  heroCta2: { ru: 'Посмотреть работы', en: 'See the work' } as Dict,

  // --- Шкала часов ---
  clockHuman: { ru: 'Человек', en: 'People' } as Dict,
  clockSystem: { ru: 'Система', en: 'System' } as Dict,
  clockCaption: {
    ru: 'Часы в неделе. Разница — это то, что вы сейчас не делаете, потому что некому.',
    en: 'Hours in a week. The gap is everything you don’t do because nobody is left to do it.',
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
    ru: 'Формула открыта: люди × часы × ставка × 47 рабочих недель. Окупаемость считается от нижней границы проекта в 250 000 ₽ и не учитывает налоги и то, что часть освободившегося времени уйдёт на другие задачи, а не в прибыль.',
    en: 'The formula is open: people × hours × rate × 47 working weeks. Payback is measured against the €2,500 project floor and ignores taxes and the fact that some freed time goes to other work rather than profit.',
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
    ru: 'Цены настоящие, а не «рассчитывается индивидуально». Точная сумма появляется после первого разговора и всегда фиксируется в договоре до старта.',
    en: 'Real numbers, not “contact us for pricing”. The exact figure comes after the first call and is fixed in the contract before work starts.',
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
    price: { ru: '60 000 ₽', en: '€600' },
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
    price: { ru: 'от 250 000 ₽', en: 'from €2,500' },
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
    price: { ru: 'от 350 000 ₽', en: 'from €3,500' },
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
