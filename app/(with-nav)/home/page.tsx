import { createPageMetadata, getLocaleFromRequest } from '@/lib/i18n/server';
import { t } from '@/lib/i18n';
import { Home } from '@/features/home/Home';
import type { HomeContent } from '@/types';

export const generateMetadata = () => createPageMetadata('home');

export default async function HomePage() {
  const locale = await getLocaleFromRequest();
  const content: HomeContent = {
    surtitle: t('home.title', locale),
    title: t('home.hero.title', locale),
    tagline: t('home.hero.tagline', locale),
    ctaGalleryLabel: t('home.hero.cta.gallery', locale),
    ctaContactLabel: t('home.hero.cta.contact', locale),
  };
  return <Home locale={locale} content={content} />;
}
