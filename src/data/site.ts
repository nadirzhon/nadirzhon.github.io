/**
 * ЕДИНСТВЕННОЕ МЕСТО, где меняются название, контакты и цены.
 * Всё остальное на сайте читает значения отсюда.
 */
export const site = {
  brand: 'AUTONOMA',
  brandMark: 'AN',
  domain: 'autonoma.studio',
  email: 'hello@autonoma.studio', // ← заменить
  telegram: '@your_telegram', // ← заменить
  telegramUrl: 'https://t.me/your_telegram', // ← заменить
  phone: '', // необязательно
  city: 'Санкт-Петербург',
  cityEn: 'Saint Petersburg',
  founded: 2019,
  /** Курс для показа цен в EUR на английской версии */
  eurRate: 100,
  /**
   * Приём заявок с формы. Пока пусто — форма открывает почтовый клиент
   * с уже заполненным письмом, это работает без сервера.
   * Чтобы заявки приходили сами: заведите бесплатный ключ на web3forms.com
   * и вставьте его сюда — форма начнёт отправлять данные на почту без перезагрузки.
   */
  formEndpoint: '', // например 'https://api.web3forms.com/submit'
  formAccessKey: '', // ключ из web3forms
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
