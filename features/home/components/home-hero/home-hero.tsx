import type { HomeContent } from '@/types/home';
import { HomeHeader } from './home-header/home-header';
import { HomeHeroCta } from './home-hero-cta/home-hero-cta';

type HomeHeroProps = {
  content: HomeContent;
  onContactClick?: () => void;
};

export function HomeHero({ content, onContactClick }: HomeHeroProps) {
  return (
    <div className="flex h-full min-w-0 flex-1 flex-col">
      <HomeHeader content={content} />
      <HomeHeroCta content={content} onContactClick={onContactClick} />
    </div>
  );
}
