import { HomeHeader } from './home-header/home-header';
import { HomeHeroCta } from './home-hero-cta/home-hero-cta';

type HomeHeroProps = {
  title: string;
  tagline: string;
  ctaGalleryLabel: string;
  ctaContactLabel: string;
};

export function HomeHero({ title, tagline, ctaGalleryLabel, ctaContactLabel }: HomeHeroProps) {
  return (
    <div className="flex h-full min-w-0 flex-1 flex-col">
      <HomeHeader title={title} tagline={tagline} />
      <HomeHeroCta galleryLabel={ctaGalleryLabel} contactLabel={ctaContactLabel} />
    </div>
  );
}
