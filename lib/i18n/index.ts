/**
 * Barrel i18n (client-safe) : t, types, LOCALE_COOKIE_NAME.
 * Server-only : getLocaleFromRequest, createPageMetadata → import from '@/lib/i18n/server'.
 */

export { t } from './i18n';
export { LOCALE_COOKIE_NAME } from './locale/locale';
export type { Locale, TradKey } from './messages/messages';
