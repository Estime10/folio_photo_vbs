import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import { HomeImage } from './components/home-image/home-image';
import { HomeFooter } from './components/home-hero/home-footer/home-footer';
import { HomeHero } from './components/home-hero/home-hero';
import { HomeMiniatures } from './components/home-miniatures/home-miniatures';

type HomeProps = {
  title: string;
  tagline: string;
  ctaGalleryLabel: string;
  ctaContactLabel: string;
};

export function Home({ title, tagline, ctaGalleryLabel, ctaContactLabel }: HomeProps) {
  return (
    <div className="relative h-full min-h-0 flex-1">
      <div className="absolute inset-0">
        <HomeImage />
      </div>
      <div className="absolute inset-0 z-50 hidden lg:block">
        <Container>
          <BlurCard
            className="flex h-full w-full flex-col"
            notchBottomLeft
            notchContent={<HomeFooter />}
          >
            <HomeHero
              title={title}
              tagline={tagline}
              ctaGalleryLabel={ctaGalleryLabel}
              ctaContactLabel={ctaContactLabel}
            />
            <HomeMiniatures />
          </BlurCard>
        </Container>
      </div>
    </div>
  );
}
