import type { Locale } from '@/lib/i18n/messages/messages';
import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import { HomeImage } from './components/home-image/home-image';
import { HomeFooter } from './components/home-hero/home-footer/home-footer';
import { HomeHero } from './components/home-hero/home-hero';
import { HomeMiniatures } from './components/home-miniatures/home-miniatures';

type HomeProps = {
  locale: Locale;
  title: string;
  tagline: string;
  ctaGalleryLabel: string;
  ctaContactLabel: string;
  onContactClick?: () => void;
};

export function Home({
  locale,
  title,
  tagline,
  ctaGalleryLabel,
  ctaContactLabel,
  onContactClick,
}: HomeProps) {
  return (
    <div className="relative h-full min-h-0 flex-1">
      <div className="absolute inset-0">
        <HomeImage />
      </div>
      <div className="absolute inset-0 z-50 hidden xl:block">
        <Container>
          <BlurCard
            className="flex h-full w-full flex-col"
            notchBottomLeft
            notchContent={<HomeFooter locale={locale} />}
          >
            <HomeHero
              title={title}
              tagline={tagline}
              ctaGalleryLabel={ctaGalleryLabel}
              ctaContactLabel={ctaContactLabel}
              onContactClick={onContactClick}
            />
            <HomeMiniatures />
          </BlurCard>
        </Container>
      </div>
    </div>
  );
}
