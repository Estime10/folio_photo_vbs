import type { Metadata } from 'next';
import { t } from '@/lib/i18n/i18n';
import { Container } from '@/components/container/container';

export const metadata: Metadata = {
  title: t('meta.home.title'),
  description: t('meta.home.description'),
};

export default function HomePage() {
  return (
    <Container>
      <h1 className="text-left text-2xl font-medium tracking-tight text-foreground md:text-3xl">
        {t('home.hero.title')}
      </h1>
    </Container>
  );
}
