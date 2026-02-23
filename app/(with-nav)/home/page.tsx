import type { Metadata } from 'next';
import { t } from '@/lib/i18n/i18n';
import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Home } from '@/features/home/Home';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromRequest();
  return {
    title: t('meta.home.title', locale),
    description: t('meta.home.description', locale),
  };
}

export default async function HomePage() {
  const locale = await getLocaleFromRequest();
  return (
    <Home
      locale={locale}
      title={t('home.hero.title', locale)}
      tagline={t('home.hero.tagline', locale)}
      ctaGalleryLabel={t('home.hero.cta.gallery', locale)}
      ctaContactLabel={t('home.hero.cta.contact', locale)}
    />
  );
}
