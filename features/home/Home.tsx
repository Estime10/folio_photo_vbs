import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import { HomeImage } from './components/home-image/home-image';
import { HomeHero } from './components/home-hero/home-hero';
import { HomeMiniatures } from './components/home-miniatures/home-miniatures';

export function Home({ title }: { title: string }) {
  return (
    <div className="relative h-full min-h-0 flex-1">
      <div className="absolute inset-0">
        <HomeImage />
      </div>
      <div className="absolute inset-0 z-50 hidden xl:block">
        <Container>
          <BlurCard className="flex h-full w-full">
            <HomeHero />
            <HomeMiniatures />
          </BlurCard>
        </Container>
      </div>
    </div>
  );
}
