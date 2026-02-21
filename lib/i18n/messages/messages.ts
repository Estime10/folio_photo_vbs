import { fr } from '@/lib/i18n/messages/fr/fr';
import { nl } from '@/lib/i18n/messages/nl/nl';
import { en } from '@/lib/i18n/messages/en/en';

export { fr } from '@/lib/i18n/messages/fr/fr';
export { nl } from '@/lib/i18n/messages/nl/nl';
export { en } from '@/lib/i18n/messages/en/en';

export type TradKey = keyof typeof fr;

/** Vérification que nl et en ont les mêmes clés que fr */
const _nl: Record<TradKey, string> = nl;
const _en: Record<TradKey, string> = en;
void _nl;
void _en;

export const messages = {
  fr,
  nl,
  en,
} as const;

export type Locale = keyof typeof messages;
