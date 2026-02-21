import type { Locale } from '@/lib/i18n/messages/messages';

export const LOCALE_COOKIE_NAME = 'locale';

const VALID_LOCALES: Locale[] = ['fr', 'nl', 'en'];

export function getLocale(
  cookieStore: { get: (name: string) => { value: string } | undefined }
): Locale {
  const value = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  if (value && VALID_LOCALES.includes(value as Locale)) {
    return value as Locale;
  }
  return 'fr';
}
