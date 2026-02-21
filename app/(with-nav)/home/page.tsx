import type { Metadata } from 'next';
import { t } from '@/lib/i18n/i18n';
import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Home } from '@/features/home/Home';

export const metadata: Metadata = {
  title: t('meta.home.title'),
  description: t('meta.home.description'),
};

export default async function HomePage() {
  const locale = await getLocaleFromRequest();
  return <Home title={t('home.hero.title', locale)} />;
}
