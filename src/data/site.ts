/**
 * ЕДИНСТВЕННОЕ МЕСТО, где меняются название, контакты и цены.
 * Всё остальное на сайте читает значения отсюда.
 */
export const site = {
  brand: 'AUTONOMA',
  brandMark: 'AN',
  domain: 'autonoma.uk',
  email: 'anodirzon4@gmail.com',
  /** Второй адрес — резервный канал. Тоже показывается обфусцированным. */
  email2: 'abduraxman_ov@outlook.com',
  /**
   * Ник нигде не показывается на странице — только адрес ссылки.
   * Так его не собирают парсеры контактов и не растаскивают по спам-базам.
   */
  telegramUrl: 'https://t.me/NEF4R1US',
  /** Телефон для звонка (tel:). Показывается открыто — так удобнее клиенту. */
  phone: '+79154025446',
  /** Имя владельца прямого номера — подписывается у телефона. */
  phoneOwner: 'Макс',
  /** WhatsApp — номер в международном формате без '+' для ссылки wa.me. */
  whatsapp: '996755337513',
  founded: 2019,

  /** Страница «Кто я». Пустые поля на странице не показываются. */
  person: {
    name: 'Надир Абдурахманов',
    nameEn: 'Nadir Abdurakhmanov',
    role: 'Инженер-разработчик',
    roleEn: 'Software engineer',
    photo: '/me.jpg',
  },
  /**
   * Рабочие реквизиты. ЗАПОЛНИТЕ по мере готовности — пустые поля
   * на странице не показываются, а не выводятся пустой строкой.
   */
  work: {
    /** Часы, когда вы реально отвечаете. Указывайте честно. */
    hours: 'Пн–Пт, 10:00–19:00',
    hoursEn: 'Mon–Fri, 10:00–19:00',
    /** Часовой пояс — без него часы бессмысленны для клиента из другой страны */
    tz: 'MSK (UTC+3)',
    /** Обещание по времени ответа. Не пишите то, чего не выдержите. */
    reply: 'в течение рабочего дня',
    replyEn: 'within one business day',
    /**
     * Форма работы и реквизиты — для юрлиц это вопрос доверия.
     * ИНН показывается только когда он настоящий: клиент проверит его
     * в сервисе ФНС, и неверный номер хуже отсутствующего.
     */
    legalForm: 'Самозанятый',
    legalFormEn: 'Self-employed',
    inn: '502424939507',
    /** ЗАПОЛНИТЕ: языки, на которых вы ведёте проект */
    languages: 'Русский, English',
  },

  /** Профиль и репозитории на GitHub — главное доказательство объёма работ. */
  github: 'https://github.com/nadirzhon',
  /**
   * Открытые репозитории, которые не стыдно показать клиенту.
   * Приватные сюда не добавляем: ссылка, которая ведёт на 404, хуже её отсутствия.
   */
  repos: [
    // ── Живые демо (можно открыть прямо в браузере) ──────────────────────
    {
      name: 'shadowmap', lang: 'JavaScript', group: 'web', url: 'https://github.com/nadirzhon/shadowmap', demo: 'https://autonoma.uk/shadowmap/',
      note: { ru: 'Живая карта кибератак в реальном времени: SSH/RDP/веб-угрозы, анимированные дуги по миру', en: 'Real-time global cyberattack map: live SSH/RDP/web threats with animated arcs' },
    },
    {
      name: 'crackvis', lang: 'JavaScript', group: 'web', url: 'https://github.com/nadirzhon/crackvis', demo: 'https://autonoma.uk/crackvis/',
      note: { ru: 'Интерактивный визуализатор взлома пароля: видно, как ваш пароль атакуют в реальном времени', en: 'Interactive password-cracking visualizer — watch a password get attacked live' },
    },
    {
      name: 'sora-sushi', lang: 'JavaScript', group: 'web', url: 'https://github.com/nadirzhon/sora-sushi', demo: 'https://autonoma.uk/sora-sushi/',
      note: { ru: 'Лендинг суши-кафе: 3D-герой, меню и доставка на three.js + GSAP', en: 'Sushi café landing: 3D hero, menu and delivery on three.js + GSAP' },
    },
    {
      name: 'svetopis', lang: 'JavaScript', group: 'web', url: 'https://github.com/nadirzhon/svetopis', demo: 'https://autonoma.uk/svetopis/',
      note: { ru: 'Сайт фотографа: WebGL-шейдер, инерционная прокрутка, онлайн-бронирование — без единой библиотеки', en: 'Photographer site: WebGL shader, inertial scroll, booking — zero libraries' },
    },
    {
      name: 'stroyflex', lang: 'JavaScript', group: 'web', url: 'https://github.com/nadirzhon/stroyflex', demo: 'https://autonoma.uk/stroyflex/',
      note: { ru: 'Оптовый каталог стройхимии: 617 позиций, мгновенная фильтрация прайса из Excel', en: 'Wholesale construction-chemistry catalog: 617 items, instant filtering from an Excel price list' },
    },
    {
      name: 'tools', lang: 'JavaScript', group: 'web', url: 'https://github.com/nadirzhon/tools', demo: 'https://autonoma.uk/tools/',
      note: { ru: 'Живой хаб security-инструментов: витрина проектов с встроенными демо', en: 'Live security-tooling hub — a showcase with embedded demos' },
    },

    // ── AI + безопасность (на Claude / MCP) ──────────────────────────────
    {
      name: 'agentstrike', lang: 'Python', group: 'ai', url: 'https://github.com/nadirzhon/agentstrike',
      note: { ru: '«Metasploit для AI-агентов»: red-team-фреймворк prompt injection с генетическим мутатором и canary-доказательством пробоя', en: 'A "Metasploit for AI agents" — prompt-injection red-team framework with a genetic mutator and canary-proven breaches' },
    },
    {
      name: 'poisondoc', lang: 'Python', group: 'ai', url: 'https://github.com/nadirzhon/poisondoc',
      note: { ru: 'Indirect injection с двух сторон: генерирует «отравленные» документы и детектирует скрытые инъекции до того, как их прочтёт LLM', en: 'Indirect injection, both ends — crafts poisoned documents and detects hidden injections before an LLM reads them' },
    },
    {
      name: 'vigil', lang: 'Python', group: 'ai', url: 'https://github.com/nadirzhon/vigil',
      note: { ru: 'AI-ревью безопасности для каждого pull request на Claude: инъекции, секреты, ошибки авторизации', en: 'AI security review for every pull request, powered by Claude — injection, secrets, authz bugs' },
    },
    {
      name: 'specter', lang: 'Python', group: 'ai', url: 'https://github.com/nadirzhon/specter',
      note: { ru: 'Автономный AI-агент разведки: Claude планирует и ведёт recon, затем пишет отчёт по важности находок', en: 'Autonomous AI recon agent — Claude plans and runs recon, then writes a severity-graded report' },
    },
    {
      name: 'offsec-mcp', lang: 'Python', group: 'ai', url: 'https://github.com/nadirzhon/offsec-mcp',
      note: { ru: 'MCP-сервер с наступательными инструментами для AI-агентов — только с явной авторизацией', en: 'MCP server giving AI agents authorized-only offensive-security tools' },
    },
    {
      name: 'mcpscan', lang: 'Python', group: 'ai', url: 'https://github.com/nadirzhon/mcpscan',
      note: { ru: 'Сканер безопасности MCP-серверов: отравление инструментов, лишние привилегии, скрытые инструкции', en: 'Security scanner for MCP servers — tool poisoning, over-privileged tools, hidden instructions' },
    },
    {
      name: 'state-of-mcp-security', lang: 'Python', group: 'ai', url: 'https://github.com/nadirzhon/state-of-mcp-security',
      note: { ru: 'Воспроизводимый аудит MCP-серверов: у 75% нашлись проблемы харденинга уровня medium и выше', en: 'Reproducible MCP-server audit — 75% had a medium+ hardening issue' },
    },
    {
      name: 'phantasm', lang: 'Python', group: 'ai', url: 'https://github.com/nadirzhon/phantasm',
      note: { ru: 'AI-анализатор фишинга и социальной инженерии: распознаёт тактики манипуляции в реальном времени', en: 'AI phishing & social-engineering analyzer — detects manipulation tactics in real time' },
    },

    // ── Безопасность (инструменты на чистом Python) ──────────────────────
    {
      name: 'pathfinder', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/pathfinder',
      note: { ru: 'Планировщик атаки: из данных recon строит цепочки атак от внешнего доступа до данных и ранжирует их с привязкой к MITRE ATT&CK', en: 'Attack-path planner — chains recon facts into end-to-end paths and ranks them, labelled with MITRE ATT&CK' },
    },
    {
      name: 'exploit-synth', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/exploit-synth',
      note: { ru: 'CVE → безопасный PoC: классифицирует уязвимость и генерирует неразрушающую проверку присутствия (детект, не оружие)', en: 'CVE → safe PoC — classifies the bug and generates a non-destructive presence check (detection, not weaponization)' },
    },
    {
      name: 'sentinel', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/sentinel',
      note: { ru: 'Единая security-сюита: recon, DAST, поиск утечек в git и статический анализ в одной команде, ноль зависимостей', en: 'Unified security suite — recon, DAST, git-leak hunting and static analysis in one command, zero deps' },
    },
    {
      name: 'argus', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/argus',
      note: { ru: 'Статический сканер безопасности с AST taint-анализом: доказывает поток данных, ноль зависимостей, HTML/SARIF', en: 'Static security scanner with AST taint analysis — proves dataflow, zero deps, HTML/SARIF' },
    },
    {
      name: 'web-vuln-scanner', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/web-vuln-scanner',
      note: { ru: 'Сканер веб-уязвимостей: SQLi, XSS, SSRF, open redirect, заголовки безопасности — по OWASP Top 10', en: 'Web vulnerability scanner: SQLi, XSS, SSRF, open redirect, security headers — OWASP Top 10' },
    },
    {
      name: 'reconwave', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/reconwave',
      note: { ru: 'Асинхронная разведка периметра: непрерывный мониторинг поддоменов, граф активов, диффы изменений', en: 'Async attack-surface recon: continuous subdomain monitoring, asset graph, diffing' },
    },
    {
      name: 'ssh-honeypot', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/ssh-honeypot',
      note: { ru: 'SSH-ловушка: логирует введённые креды, геолокация атакующих, алерты в Telegram, фейковый shell', en: 'SSH honeypot: logs credentials, geolocates attackers, Telegram alerts, fake shell' },
    },
    {
      name: 'jwt-security-analyzer', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/jwt-security-analyzer',
      note: { ru: 'Анализатор JWT: alg:none, слабые секреты, валидация claims, подделка подписи', en: 'JWT analyzer: alg:none, weak secrets, claim validation, signature forging' },
    },
    {
      name: 'password-auditor', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/password-auditor',
      note: { ru: 'Взлом хешей (MD5/SHA1/bcrypt), аудит парольной политики и движок мутаций', en: 'Hash cracker (MD5/SHA1/bcrypt), password-policy audit and a mutation engine' },
    },
    {
      name: 'cve-forge', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/cve-forge',
      note: { ru: 'Автоматизация CVE→эксплойт: мониторинг свежих CVE, матчинг с вашими активами, генерация Nuclei-шаблонов', en: 'CVE-to-exploit automation: monitors fresh CVEs, matches your assets, auto-generates Nuclei templates' },
    },
    {
      name: 'phishing-url-detector', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/phishing-url-detector',
      note: { ru: 'ML-классификатор фишинговых URL: инженерия признаков + Random Forest', en: 'ML-based phishing-URL classifier: feature engineering + Random Forest' },
    },
    {
      name: 'osint-aggregator', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/osint-aggregator',
      note: { ru: 'OSINT-автоматизация: Shodan, VirusTotal, WHOIS, DNS, перебор поддоменов → HTML-отчёт', en: 'OSINT automation: Shodan, VirusTotal, WHOIS, DNS, subdomain enum → HTML report' },
    },
    {
      name: 'jsintel', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/jsintel',
      note: { ru: 'Разведка по JS-бандлам: извлекает секреты, эндпоинты, параметры и карту API', en: 'JavaScript intelligence — extracts secrets, endpoints, params and API maps from JS bundles' },
    },
    {
      name: 'log-analyzer-siem', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/log-analyzer-siem',
      note: { ru: 'Мини-SIEM: разбор логов SSH/nginx/Apache, детект брутфорса, оповещения об аномалиях', en: 'Mini-SIEM: SSH/nginx/Apache log analysis, brute-force detection, anomaly alerts' },
    },
    {
      name: 'dossier', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/dossier',
      note: { ru: 'OSINT-отчёт одной командой: домен/IP/почта → красивый HTML-отчёт', en: 'One-command OSINT report: domain/IP/email → a clean HTML report' },
    },
    {
      name: 'network-anomaly-detector', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/network-anomaly-detector',
      note: { ru: 'Анализ сетевого трафика в реальном времени: сканы портов, ARP-спуфинг, DNS-туннели (Scapy)', en: 'Real-time traffic analysis: port scans, ARP spoofing, DNS tunneling (Scapy)' },
    },
    {
      name: 'custom-port-scanner', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/custom-port-scanner',
      note: { ru: 'Многопоточный TCP/UDP-сканер портов с фингерпринтом сервисов и выводом в JSON', en: 'Multithreaded TCP/UDP port scanner with service fingerprinting and JSON output' },
    },
    {
      name: 'ctf-writeups', lang: 'Python', group: 'sec', url: 'https://github.com/nadirzhon/ctf-writeups',
      note: { ru: 'Разборы CTF (HTB/TryHackMe) и PoC-инструменты — задокументированная методология пентеста', en: 'CTF writeups (HTB/TryHackMe) and PoC tools — documented penetration-testing methodology' },
    },
  ],

  /** Курс для показа цен в EUR на английской версии */
  eurRate: 100,
  /**
   * Приём заявок. Пока ключ пуст, форма открывает почтовый клиент
   * с готовым письмом — работает без сервера, но требует действия от посетителя.
   *
   * Чтобы заявки приходили на почту сами:
   *   1. Откройте web3forms.com, введите свою почту, нажмите Create Access Key
   *   2. Ключ придёт письмом — вставьте его сюда
   * Больше ничего менять не нужно: форма сама переключится на фоновую отправку.
   */
  formAccessKey: '53dc5b82-fa67-40b1-a143-509c185829c6',
  formEndpoint: 'https://api.web3forms.com/submit',
  /**
   * Яндекс.Метрика. Нужна рекламе: без неё Директ не видит заявок и не умеет
   * оптимизироваться. Вебвизор намеренно выключен — он записывал бы то, что
   * человек печатает в форме, а это персональные данные.
   * Пустая строка полностью отключает счётчик.
   */
  metrika: '111252930',
  /**
   * Дублирование заявок в Telegram: ретранслятор на Cloudflare Workers.
   * Токен бота живёт в секретах воркера, здесь только его адрес.
   * Как это устроено и как поднять заново: worker/README.md
   */
  telegramRelay: 'https://tg.autonoma.uk',
} as const;

export type Locale = 'ru' | 'en';

/**
 * Внутренняя ссылка с учётом того, где лежит сайт.
 * На своём домене BASE_URL = '/', на GitHub Pages — '/имя-репозитория/'.
 * Благодаря этому один и тот же код работает и там, и там.
 */
export function url(p: string): string {
  if (!p.startsWith('/')) return p;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${p}`;
}

/** Ссылка с учётом языка: /uslugi → /en/services */
export function path(locale: Locale, ruPath: string, enPath: string) {
  return locale === 'ru' ? ruPath : `/en${enPath}`;
}
