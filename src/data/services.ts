import type { Locale } from './site';

export type Service = {
  slug: { ru: string; en: string };
  code: string;
  title: { ru: string; en: string };
  tagline: { ru: string; en: string };
  intro: { ru: string; en: string };
  /** Что клиент получает на руки */
  deliverables: { ru: string[]; en: string[] };
  /** Кому подходит */
  forWhom: { ru: string; en: string };
  timeline: { ru: string; en: string };
  /** Нижняя граница базового пакета */
  priceFrom: number;
  /** Что входит в базовую цену — короткой строкой */
  baseScope: { ru: string; en: string };
  /** Допы: заказываются сверху базы, каждый со своей ценой */
  addons: { title: { ru: string; en: string }; price: number }[];
  stack: string[];
  /** Честная оговорка, если она нужна */
  caveat?: { ru: string; en: string };
  /**
   * Доказательство: то, что клиент может открыть и проверить сам.
   * Пустое поле лучше выдуманной цифры — если проверить нечего, строки нет.
   */
  proof?: { text: { ru: string; en: string }; href: string };
};

export const services: Service[] = [
  {
    slug: { ru: 'ai-avtomatizaciya', en: 'ai-automation' },
    code: 'S-01',
    title: { ru: 'AI-автоматизация', en: 'AI automation' },
    tagline: {
      ru: 'Забираю у команды повторяющуюся работу',
      en: 'Takes repetitive work off your team',
    },
    intro: {
      ru: 'Разбираю процесс на шаги, нахожу те, что человек делает одинаково каждый раз, и передаю их модели. Обработка заявок, разбор писем и документов, ответы на типовые вопросы, подготовка отчётов, перенос данных между системами. Человек остаётся там, где нужно решение, а не копирование.',
      en: 'I break the process into steps, find the ones a person repeats identically every time, and hand those to a model. Intake handling, parsing email and documents, answering routine questions, preparing reports, moving data between systems. People stay where judgement is needed, not where copying is.',
    },
    deliverables: {
      ru: [
        'Карта процесса с отмеченными шагами под автоматизацию и оценкой экономии часов',
        'Работающий агент или пайплайн, подключённый к вашим системам',
        'Панель контроля: что обработано, что ушло на ручную проверку, где ошибки',
        'Правила безопасности: что модель делает сама, а что только предлагает',
        'Инструкция для команды и месяц сопровождения после запуска',
      ],
      en: [
        'Process map with automatable steps marked and hours saved estimated',
        'A working agent or pipeline wired into your systems',
        'Control panel: what was processed, what went to manual review, where it failed',
        'Safety rules: what the model does on its own, what it only proposes',
        'Team handbook and one month of support after launch',
      ],
    },
    forWhom: {
      ru: 'Компаниям, где 2–15 человек тратят часы на однотипные операции: поддержка, документооборот, подбор, закупки, аналитика.',
      en: 'Companies where 2–15 people spend hours on identical operations: support, paperwork, recruiting, procurement, reporting.',
    },
    timeline: { ru: '3–6 недель до первого работающего контура', en: '3–6 weeks to the first working loop' },
    priceFrom: 120000,
    baseScope: {
      ru: 'Один процесс от начала до конца: разбор, сборка, запуск и месяц присмотра.',
      en: 'One process end to end: analysis, build, launch and a month of watching it.',
    },
    addons: [
      { title: { ru: 'Каждый следующий процесс в той же системе', en: 'Each additional process in the same system' }, price: 60000 },
      { title: { ru: 'Панель контроля с историей и выгрузкой', en: 'Control panel with history and exports' }, price: 35000 },
      { title: { ru: 'Интеграция с вашей CRM или 1С', en: 'Integration with your CRM or ERP' }, price: 40000 },
      { title: { ru: 'Обучение команды и регламент на бумаге', en: 'Team training and a written playbook' }, price: 20000 },
      { title: { ru: 'Присмотр и доработки после первого месяца', en: 'Support and tweaks beyond the first month' }, price: 25000 },
    ],
        proof: { text: { ru: 'HEAN: слой интеллекта из 36 модулей, 1632 теста', en: 'HEAN: 36 intelligence modules, 1632 tests' }, href: 'https://github.com/nadirzhon/HEAN-META' },
    stack: ['Claude API', 'Python', 'LangGraph', 'Postgres', 'Redis', 'Docker'],
  },
  {
    slug: { ru: 'chat-boty', en: 'chatbots' },
    code: 'S-02',
    title: { ru: 'Чат-боты и ассистенты', en: 'Chatbots & assistants' },
    tagline: {
      ru: 'Отвечает клиенту в три часа ночи так же, как вы днём',
      en: 'Answers at 3 a.m. the way you would at noon',
    },
    intro: {
      ru: 'Бот, который знает ваши товары, цены, сроки и правила — и отвечает на них словами, а не кнопками из меню. Принимает заявку, записывает на приём, считает стоимость, отправляет документы, а сложное передаёт человеку вместе с историей разговора. Живёт там, где ваши клиенты: на сайте, в Telegram, в WhatsApp, в почте.',
      en: 'A bot that knows your products, prices, lead times and rules — and answers in sentences, not menu buttons. It takes orders, books appointments, quotes prices, sends documents, and hands the hard cases to a human along with the conversation history. It lives where your customers already are: your site, Telegram, WhatsApp, email.',
    },
    deliverables: {
      ru: [
        'Бот, обученный на ваших материалах: прайсы, регламенты, переписка, сайт',
        'Приём заявок и запись с попаданием напрямую в CRM или Telegram',
        'Передача человеку в один клик, когда вопрос выходит за рамки',
        'Панель с историей диалогов: видно, о чём спрашивают и где бот не справился',
        'Ограничители: бот не выдумывает цены и не обещает того, чего вы не делаете',
      ],
      en: [
        'A bot trained on your material: price lists, policies, past correspondence, site content',
        'Order taking and booking that lands straight in your CRM or Telegram',
        'One-click handover to a human when the question goes out of scope',
        'A dashboard of conversations: what people ask and where the bot failed',
        'Guard rails: it never invents prices or promises things you do not offer',
      ],
    },
    forWhom: {
      ru: 'Услугам и рознице, где поток одинаковых вопросов съедает рабочий день, а ответ ночью решает, купят у вас или у соседа.',
      en: 'Service and retail businesses where repeat questions eat the working day, and a night-time reply decides whether the sale is yours.',
    },
    timeline: { ru: '2–4 недели до запуска', en: '2–4 weeks to launch' },
    priceFrom: 60000,
    baseScope: {
      ru: 'Бот в одном канале, обученный на ваших материалах, с приёмом заявок.',
      en: 'A bot in one channel, trained on your material, taking enquiries.',
    },
    addons: [
      { title: { ru: 'Каждый следующий канал: сайт, Telegram, WhatsApp', en: 'Each extra channel: site, Telegram, WhatsApp' }, price: 25000 },
      { title: { ru: 'Голосовой ответ на звонки', en: 'Voice answering for phone calls' }, price: 70000 },
      { title: { ru: 'Оплата и запись прямо в диалоге', en: 'Payments and booking inside the chat' }, price: 45000 },
      { title: { ru: 'Панель диалогов и отчёт о вопросах', en: 'Conversation dashboard and question report' }, price: 30000 },
      { title: { ru: 'Ежемесячное дообучение на новых диалогах', en: 'Monthly retraining on new conversations' }, price: 15000 },
    ],
    stack: ['Claude API', 'Python', 'RAG', 'Telegram Bot API', 'Postgres', 'Redis'],
  },
  {
    slug: { ru: 'torgovye-sistemy', en: 'trading-systems' },
    code: 'S-06',
    title: { ru: 'Торговые и финтех-системы', en: 'Trading & fintech systems' },
    tagline: {
      ru: 'Инфраструктура, которая держит рынок круглосуточно',
      en: 'Infrastructure that holds up around the clock',
    },
    intro: {
      ru: 'Строю то, на чём работает алгоритмическая торговля: сбор рыночных данных, исполнение заявок, учёт позиций и PnL, риск-контуры, бэктест на реальной истории, мониторинг и аварийная остановка. Пять лет живу внутри собственной торговой системы, поэтому знаю, где такие проекты обычно ломаются — на сверке позиций, на гонках при исполнении и на молчаливых отказах ночью.',
      en: 'I build what algorithmic trading actually runs on: market data collection, order execution, position and PnL accounting, risk layers, backtesting on real history, monitoring and a kill switch. I have spent five years inside my own trading system, so I know where these projects break — position reconciliation, execution races, and silent failures at night.',
    },
    deliverables: {
      ru: [
        'Подключение к биржам и брокерам: котировки, стакан, исполнение, сверка позиций',
        'Риск-контур: лимиты, просадка, аварийная остановка, защита депозита',
        'Бэктест на исторических данных с честным учётом комиссий и проскальзывания',
        'Учёт: сделки, комиссии, реализованный и нереализованный результат',
        'Мониторинг и оповещения: что упало, когда и почему',
      ],
      en: [
        'Exchange and broker connectivity: quotes, order book, execution, position reconciliation',
        'Risk layer: limits, drawdown control, kill switch, deposit protection',
        'Backtesting on historical data with fees and slippage counted honestly',
        'Accounting: trades, fees, realised and unrealised result',
        'Monitoring and alerts: what broke, when, and why',
      ],
    },
    forWhom: {
      ru: 'Трейдерам с собственной стратегией, небольшим фондам и финтех-командам, которым нужна инженерная часть, а не сигналы.',
      en: 'Traders with their own strategy, small funds, and fintech teams who need the engineering, not signals.',
    },
    timeline: { ru: '6–12 недель в зависимости от числа площадок', en: '6–12 weeks depending on venue count' },
    priceFrom: 300000,
    baseScope: {
      ru: 'Контур под одну площадку: данные, исполнение, учёт, риск-лимиты, мониторинг.',
      en: 'A loop for one venue: data, execution, accounting, risk limits, monitoring.',
    },
    addons: [
      { title: { ru: 'Каждая дополнительная биржа или брокер', en: 'Each additional exchange or broker' }, price: 120000 },
      { title: { ru: 'Бэктест на исторических данных', en: 'Backtesting on historical data' }, price: 90000 },
      { title: { ru: 'Панель наблюдения за системой', en: 'System observation dashboard' }, price: 60000 },
      { title: { ru: 'Перенос стратегии в код с нуля', en: 'Coding a strategy from scratch' }, price: 150000 },
      { title: { ru: 'Присмотр за продакшеном, помесячно', en: 'Production watch, per month' }, price: 50000 },
    ],
        proof: { text: { ru: 'HEAN в продакшене несколько лет — разбор кейса', en: 'HEAN in production for years — read the case' }, href: '/keysy/hean/' },
    stack: ['Python', 'Rust', 'ClickHouse', 'Postgres', 'Redis', 'Prometheus', 'Docker'],
    caveat: {
      ru: 'Я делаю инфраструктуру и исполнение вашей стратегии. Я не продаю сигналы, не управляю чужими деньгами и не обещаю доходность — прибыль зависит от стратегии и рынка, а не от кода.',
      en: 'I build the infrastructure and execution for your strategy. I do not sell signals, manage other people’s money, or promise returns — profit depends on the strategy and the market, not on the code.',
    },
  },
  {
    slug: { ru: 'sayty', en: 'web' },
    code: 'S-03',
    title: { ru: 'Сайты и веб-сервисы', en: 'Websites & web apps' },
    tagline: { ru: 'От лендинга до личного кабинета', en: 'From a landing page to a customer portal' },
    intro: {
      ru: 'Делаю сайты, которые продают, и веб-сервисы, которыми пользуются каждый день. Лендинг под запуск, корпоративный сайт с блогом, каталог, личный кабинет, внутренняя панель для сотрудников. Скорость загрузки и поисковая выдача считаются частью работы, а не «оптимизацией потом».',
      en: 'I build sites that sell and web apps people use daily. A launch landing page, a corporate site with a blog, a catalogue, a customer portal, an internal dashboard. Load speed and search visibility are part of the job, not an afterthought.',
    },
    deliverables: {
      ru: [
        'Дизайн под ваш продукт, а не шаблон из библиотеки',
        'Вёрстка от телефона до широкого монитора, доступность с клавиатуры',
        'Админка или подключение к CMS, чтобы менять тексты без разработчика',
        'Технический SEO, разметка, карта сайта, скорость по Core Web Vitals',
        'Аналитика и формы заявок, подключённые к вашей CRM или Telegram',
      ],
      en: [
        'Design made for your product, not pulled from a template library',
        'Layout from phone to wide desktop, keyboard accessible',
        'An admin panel or CMS so you can edit copy without a developer',
        'Technical SEO, structured data, sitemap, Core Web Vitals speed',
        'Analytics and lead forms wired into your CRM or Telegram',
      ],
    },
    forWhom: {
      ru: 'Компаниям, которые привлекают клиентов через сайт и устали от конструкторов, где всё выглядит одинаково.',
      en: 'Companies that acquire clients through their site and are tired of builders where everything looks the same.',
    },
    timeline: { ru: '2–5 недель для сайта, 6–10 для сервиса', en: '2–5 weeks for a site, 6–10 for an app' },
    priceFrom: 45000,
    baseScope: {
      ru: 'Лендинг: дизайн, вёрстка, форма заявки, публикация и базовое SEO.',
      en: 'A landing page: design, build, lead form, launch and baseline SEO.',
    },
    addons: [
      { title: { ru: 'Каждая дополнительная страница', en: 'Each additional page' }, price: 12000 },
      { title: { ru: 'Многостраничный сайт с блогом', en: 'Multi-page site with a blog' }, price: 60000 },
      { title: { ru: 'Вторая языковая версия', en: 'A second language version' }, price: 30000 },
      { title: { ru: 'Личный кабинет или каталог', en: 'Customer portal or catalogue' }, price: 90000 },
      { title: { ru: 'Наполнение текстами и фотографиями', en: 'Copywriting and imagery' }, price: 25000 },
      { title: { ru: 'Поддержка и правки, помесячно', en: 'Support and edits, per month' }, price: 12000 },
    ],
        proof: { text: { ru: 'Этот сайт и сайт фотографа — код открыт', en: 'This site and a photographer site — code is open' }, href: 'https://github.com/nadirzhon/svetopis' },
    stack: ['Astro', 'Next.js', 'TypeScript', 'Tailwind', 'Postgres', 'Vercel'],
  },
  {
    slug: { ru: 'po-i-backend', en: 'software' },
    code: 'S-05',
    title: { ru: 'ПО, бэкенд и интеграции', en: 'Software, backend & integrations' },
    tagline: { ru: 'Системы, которые держат нагрузку и не теряют данные', en: 'Systems that hold load and lose nothing' },
    intro: {
      ru: 'Серверная часть, интеграции и обработка данных. API для мобильного приложения, обмен с 1С и складом, очереди и фоновые задачи, миграция со старой системы, ускорение того, что уже работает, но еле дышит. Отдельная тема — вытащить проект из состояния «работает, но никто не знает как».',
      en: 'Server side, integrations and data processing. APIs for a mobile app, exchange with ERP and warehouse systems, queues and background jobs, migration off a legacy system, speeding up what already runs but barely. A separate specialty: rescuing projects that work but nobody understands how.',
    },
    deliverables: {
      ru: [
        'API с документацией, версиями и тестами',
        'Интеграции с внешними сервисами и защита от их отказов',
        'Развёртывание в Docker, автоматическая сборка, откат на прошлую версию',
        'Мониторинг, логи и оповещения — видно, что происходит внутри',
        'Нагрузочное тестирование и отчёт, где предел системы',
      ],
      en: [
        'An API with documentation, versioning and tests',
        'Integrations with external services and protection from their failures',
        'Docker deployment, automated builds, one-command rollback',
        'Monitoring, logs and alerts — you can see what happens inside',
        'Load testing and a report on where the system’s ceiling is',
      ],
    },
    forWhom: {
      ru: 'Продуктовым командам без своего бэкендера и бизнесам, где данные живут в трёх системах, которые не разговаривают.',
      en: 'Product teams without a backend engineer, and businesses whose data lives in three systems that never talk.',
    },
    timeline: { ru: '4–12 недель', en: '4–12 weeks' },
    priceFrom: 120000,
    baseScope: {
      ru: 'Один сервис или API: проектирование, разработка, тесты, развёртывание.',
      en: 'One service or API: design, build, tests, deployment.',
    },
    addons: [
      { title: { ru: 'Каждая интеграция с внешней системой', en: 'Each integration with an external system' }, price: 45000 },
      { title: { ru: 'Перенос данных со старой системы', en: 'Migration from a legacy system' }, price: 70000 },
      { title: { ru: 'Мониторинг и оповещения об отказах', en: 'Monitoring and failure alerts' }, price: 30000 },
      { title: { ru: 'Нагрузочное тестирование с отчётом', en: 'Load testing with a report' }, price: 40000 },
      { title: { ru: 'Дежурство по инцидентам, помесячно', en: 'Incident duty, per month' }, price: 35000 },
    ],
        proof: { text: { ru: 'HEAN: 13 пакетов, 11 контейнеров, ускорители на Rust', en: 'HEAN: 13 packages, 11 containers, Rust accelerators' }, href: 'https://github.com/nadirzhon/HEAN-META' },
    stack: ['Python', 'FastAPI', 'Rust', 'Postgres', 'Redis', 'Kafka', 'Docker'],
  },
  {
    slug: { ru: 'mobilnye-prilozheniya', en: 'mobile' },
    code: 'S-04',
    title: { ru: 'Мобильные приложения', en: 'Mobile apps' },
    tagline: { ru: 'iOS и Android из одной кодовой базы', en: 'iOS and Android from one codebase' },
    intro: {
      ru: 'Приложение для клиентов или для своей команды: заказы, запись, доставка, учёт, панель управления вашим сервисом. Одна кодовая база на две платформы, когда это оправдано, и нативно там, где нужна производительность или системные возможности. Публикацию в App Store и Google Play беру на себя.',
      en: 'An app for your customers or your own team: orders, bookings, delivery, inventory, a control panel for your service. One codebase for both platforms where that makes sense, native where performance or system access demands it. I handle App Store and Google Play submission.',
    },
    deliverables: {
      ru: [
        'Приложение для iOS и Android с офлайн-режимом и push-уведомлениями',
        'Серверная часть и синхронизация данных между устройствами',
        'Публикация в App Store и Google Play, включая ответы ревьюерам',
        'Сборка обновлений в один клик и отслеживание сбоев у пользователей',
        'Материалы для страницы в сторах: скриншоты, описание, иконка',
      ],
      en: [
        'An iOS and Android app with offline mode and push notifications',
        'Backend and data sync across devices',
        'App Store and Google Play submission, including replies to reviewers',
        'One-click update builds and crash tracking from real users',
        'Store listing assets: screenshots, description, icon',
      ],
    },
    forWhom: {
      ru: 'Сервисам, у которых клиенты уже на телефоне, и компаниям, где сотрудники работают в полях.',
      en: 'Services whose customers already live on their phone, and companies whose staff work in the field.',
    },
    timeline: { ru: '8–14 недель до релиза в сторах', en: '8–14 weeks to store release' },
    priceFrom: 250000,
    baseScope: {
      ru: 'Приложение на две платформы: до восьми экранов, серверная часть, публикация.',
      en: 'An app on both platforms: up to eight screens, backend, store submission.',
    },
    addons: [
      { title: { ru: 'Каждый экран сверх восьми', en: 'Each screen beyond eight' }, price: 25000 },
      { title: { ru: 'Оплата внутри приложения', en: 'In-app payments' }, price: 60000 },
      { title: { ru: 'Офлайн-режим и синхронизация', en: 'Offline mode and sync' }, price: 55000 },
      { title: { ru: 'Push-уведомления и сегменты', en: 'Push notifications and segments' }, price: 35000 },
      { title: { ru: 'Ведение и обновления, помесячно', en: 'Maintenance and updates, per month' }, price: 40000 },
    ],
    stack: ['React Native', 'Expo', 'Swift', 'Kotlin', 'FastAPI', 'Postgres'],
  },
];

export const orderedServices = [...services].sort((a, b) => a.code.localeCompare(b.code));

export function getService(slug: string, locale: Locale) {
  return services.find((s) => s.slug[locale] === slug);
}
