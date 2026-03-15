import { createPageMetadata, getLocaleFromRequest } from '@/lib/i18n/server';
import { t } from '@/lib/i18n';
import { Gallery } from '@/features/gallery/Gallery';
import type { GalleryContent } from '@/types';

export const generateMetadata = () => createPageMetadata('gallery');

export default async function GalleryPage() {
  const locale = await getLocaleFromRequest();
  const content: GalleryContent = {
    surtitle: t('gallery.surtitle', locale),
    title: t('nav.gallery', locale),
  };
  return <Gallery content={content} locale={locale} />;
}
