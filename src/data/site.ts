/**
 * ЕДИНСТВЕННОЕ МЕСТО, где меняются название, контакты и цены.
 * Всё остальное на сайте читает значения отсюда.
 */
export const site = {
  brand: 'AUTONOMA',
  brandMark: 'AN',
  domain: 'nadirzhon.github.io',
  email: 'anodirzon4@gmail.com',
  /**
   * Ник нигде не показывается на странице — только адрес ссылки.
   * Так его не собирают парсеры контактов и не растаскивают по спам-базам.
   */
  telegramUrl: 'https://t.me/NEF4R1US',
  phone: '', // необязательно
  /** ЗАПОЛНИТЕ: город стоит наугад, поставьте свой */
  city: 'Санкт-Петербург',
  cityEn: 'Saint Petersburg',
  founded: 2019,

  /** Страница «Кто я». Пустые поля на странице не показываются. */
  person: {
    /** ЗАПОЛНИТЕ: имя и фамилия — без них страница выглядит анонимной */
    name: '',
    nameEn: '',
    role: 'Инженер-разработчик',
    roleEn: 'Software engineer',
    /** ЗАПОЛНИТЕ: положите фото в public/ и укажите путь, например '/me.jpg' */
    photo: '',
  },
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
   * Дублирование заявок в Telegram. Пока пусто — заявки идут только на почту.
   * Как включить за десять минут: worker/README.md
   */
  telegramRelay: '',
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
