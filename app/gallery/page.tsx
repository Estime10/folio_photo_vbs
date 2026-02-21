import { t } from '@/lib/i18n/i18n';
import { Container } from '@/components/container/container';

export default function GalleryPage() {
  return (
    <Container>
      <h1 className="text-left text-2xl font-medium tracking-tight text-foreground md:text-3xl">
        {t('nav.gallery')}
      </h1>
    </Container>
  );
}
