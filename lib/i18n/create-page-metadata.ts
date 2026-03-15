import type { Metadata } from 'next';
import type { TradKey } from '@/lib/i18n/messages/messages';
import { t } from '@/lib/i18n/i18n';
import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';

/** Pages avec metadata i18n (clés meta.<page>.title / meta.<page>.description). */
export type PageWithMetadata = 'home' | 'gallery' | 'story' | 'contact';

const META_KEYS: Record<PageWithMetadata, { title: TradKey; description: TradKey }> = {
  home: { title: 'meta.home.title', description: 'meta.home.description' },
  gallery: { title: 'meta.gallery.title', description: 'meta.gallery.description' },
  story: { title: 'meta.story.title', description: 'meta.story.description' },
  contact: { title: 'meta.contact.title', description: 'meta.contact.description' },
};

/**
 * Génère title et description pour une page à partir des clés i18n meta.<page>.*.
 * À utiliser dans generateMetadata() des pages with-nav.
 */
export async function createPageMetadata(page: PageWithMetadata): Promise<Metadata> {
  const locale = await getLocaleFromRequest();
  const keys = META_KEYS[page];
  return {
    title: t(keys.title, locale),
    description: t(keys.description, locale),
  };
}
