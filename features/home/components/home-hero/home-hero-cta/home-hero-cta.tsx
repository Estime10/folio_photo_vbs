'use client';

import { HomeCtaButtons } from '@/features/home/components/home-cta-buttons/home-cta-buttons';

type HomeHeroCtaProps = {
  galleryLabel: string;
  contactLabel: string;
  onContactClick?: () => void;
};

export function HomeHeroCta({ galleryLabel, contactLabel, onContactClick }: HomeHeroCtaProps) {
  return (
    <div className="mt-6 p-(--container-padding-x) lg:mt-8">
      <HomeCtaButtons
        galleryLabel={galleryLabel}
        contactLabel={contactLabel}
        onContactClick={onContactClick}
        variant="desktop"
      />
    </div>
  );
}
