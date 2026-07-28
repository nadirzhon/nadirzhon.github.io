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
  priceFrom: number;
  stack: string[];
  /** Честная оговорка, если она нужна */
  caveat?: { ru: string; en: string };
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
    priceFrom: 250000,
    stack: ['Claude API', 'Python', 'LangGraph', 'Postgres', 'Redis', 'Docker'],
  },
  {
    slug: { ru: 'torgovye-sistemy', en: 'trading-systems' },
    code: 'S-02',
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
    priceFrom: 600000,
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
    priceFrom: 180000,
    stack: ['Astro', 'Next.js', 'TypeScript', 'Tailwind', 'Postgres', 'Vercel'],
  },
  {
    slug: { ru: 'po-i-backend', en: 'software' },
    code: 'S-04',
    title: { ru: 'ПО и бэкенд', en: 'Software & backend' },
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
    priceFrom: 300000,
    stack: ['Python', 'FastAPI', 'Rust', 'Postgres', 'Redis', 'Kafka', 'Docker'],
  },
  {
    slug: { ru: 'mobilnye-prilozheniya', en: 'mobile' },
    code: 'S-05',
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
    priceFrom: 700000,
    stack: ['React Native', 'Expo', 'Swift', 'Kotlin', 'FastAPI', 'Postgres'],
  },
];

export function getService(slug: string, locale: Locale) {
  return services.find((s) => s.slug[locale] === slug);
}
