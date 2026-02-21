import { cookies } from 'next/headers';
import type { Locale } from '@/lib/i18n/messages/messages';
import { getLocale } from '@/lib/i18n/locale/locale';

/** Lit la locale depuis les cookies (layout root uniquement). */
export async function getLocaleFromRequest(): Promise<Locale> {
  const cookieStore = await cookies();
  return getLocale(cookieStore);
}
