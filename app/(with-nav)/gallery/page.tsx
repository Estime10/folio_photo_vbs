import { t } from '@/lib/i18n/i18n';
import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Gallery } from '@/features/gallery/Gallery';
import type { GalleryContent } from '@/types/gallery';

export default async function GalleryPage() {
  const locale = await getLocaleFromRequest();
  const content: GalleryContent = { title: t('nav.gallery', locale) };
  return <Gallery content={content} />;
}
