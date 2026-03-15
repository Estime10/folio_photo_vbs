import type { Locale } from '@/lib/i18n';
import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import { HomeImage } from './components/home-image/home-image';
import { HomeFooter } from './components/home-hero/home-footer/home-footer';
import { HomeHero } from './components/home-hero/home-hero';
import { HomeMobileFooter } from './components/home-mobile/home-mobile-footer/home-mobile-footer';
import { HomeMobileHeader } from './components/home-mobile/home-mobile-header/home-mobile-header';
import { HomeMiniatures } from './components/home-miniatures/home-miniatures';
import type { HomeContent } from '@/types';

type HomeProps = {
  locale: Locale;
  content: HomeContent;
  onContactClick?: () => void;
};

export function Home({ locale, content, onContactClick }: HomeProps) {
  return (
    <div className="relative h-full min-h-0 flex-1">
      <div className="absolute inset-0">
        <HomeImage />
      </div>
      {/* lg et en dessous : titre en haut, tagline + CTAs en bas */}
      <div className="absolute inset-0 z-50 flex flex-col xl:hidden">
        <HomeMobileHeader content={content} />
        <div className="min-h-0 flex-1" />
        <HomeMobileFooter content={content} />
      </div>
      {/* xl et au-dessus : BlurCard avec hero + miniatures */}
      <div className="absolute inset-0 z-50 hidden xl:block">
        <Container>
          <BlurCard
            className="flex h-full w-full flex-col"
            notchBottomLeft
            notchContent={<HomeFooter locale={locale} />}
          >
            <HomeHero content={content} onContactClick={onContactClick} />
            <HomeMiniatures />
          </BlurCard>
        </Container>
      </div>
    </div>
  );
}
