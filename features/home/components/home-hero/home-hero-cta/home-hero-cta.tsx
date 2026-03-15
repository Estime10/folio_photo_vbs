'use client';

import type { HomeContent } from '@/types';
import { HomeCtaButtons } from '@/features/home/components/home-cta-buttons/home-cta-buttons';

type HomeHeroCtaProps = {
  content: HomeContent;
  onContactClick?: () => void;
};

export function HomeHeroCta({ content, onContactClick }: HomeHeroCtaProps) {
  const { ctaGalleryLabel, ctaContactLabel } = content;
  return (
    <div className="mt-6 p-(--container-padding-x) lg:mt-8 xl:-mt-[1.25rem]">
      <HomeCtaButtons
        galleryLabel={ctaGalleryLabel}
        contactLabel={ctaContactLabel}
        onContactClick={onContactClick}
        variant="desktop"
      />
    </div>
  );
}
