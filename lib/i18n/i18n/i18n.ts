import type { Locale, TradKey } from '@/lib/i18n/messages/messages';
import { messages } from '@/lib/i18n/messages/messages';

/** Langue par défaut du site */
const defaultLocale: Locale = 'fr';

/**
 * Retourne la traduction pour une clé. Utilisable en server et client.
 * Langue par défaut : fr.
 */
export function t(key: TradKey, locale: Locale = defaultLocale): string {
  return messages[locale][key];
}

export type { Locale, TradKey } from '@/lib/i18n/messages/messages';
export { messages } from '@/lib/i18n/messages/messages';
