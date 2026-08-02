/**
 * ЕДИНСТВЕННОЕ МЕСТО, где меняются название, контакты и цены.
 * Всё остальное на сайте читает значения отсюда.
 */
export const site = {
  brand: 'AUTONOMA',
  brandMark: 'AN',
  domain: 'autonoma.uk',
  email: 'anodirzon4@gmail.com',
  /**
   * Ник нигде не показывается на странице — только адрес ссылки.
   * Так его не собирают парсеры контактов и не растаскивают по спам-базам.
   */
  telegramUrl: 'https://t.me/NEF4R1US',
  phone: '', // необязательно
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
    inn: '',            // ЗАПОЛНИТЕ настоящим ИНН из приложения «Мой налог»
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
    {
      name: 'HEAN-META',
      url: 'https://github.com/nadirzhon/HEAN-META',
      note: { ru: 'Торговая система: 13 пакетов, Rust-ускорители, iOS и веб-панель', en: 'Trading system: 13 packages, Rust accelerators, iOS and web dashboard' },
    },
    {
      name: 'svetopis',
      url: 'https://github.com/nadirzhon/svetopis',
      note: { ru: 'Сайт фотографа: WebGL-шейдер, инерционная прокрутка, бронирование', en: 'Photographer site: WebGL shader, inertial scroll, booking flow' },
    },
    {
      name: 'nadirzhon.github.io',
      url: 'https://github.com/nadirzhon/nadirzhon.github.io',
      note: { ru: 'Этот сайт: Astro 5, Tailwind 4, three.js, GSAP', en: 'This site: Astro 5, Tailwind 4, three.js, GSAP' },
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
  metrika: '111228986',
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
