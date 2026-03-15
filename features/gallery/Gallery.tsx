'use client';

import { useState } from 'react';
import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import { BlurCardModal } from './components/blur-card-modal/blur-card-modal';
import { GalleryFullImages } from './components/gallery-full-images/gallery-full-images';
import { GalleryHeader } from './components/gallery-header/gallery-header';
import { GalleryScrollReveal } from './components/gallery-scroll-reveal/gallery-scroll-reveal';
import type { Locale } from '@/lib/i18n';
import type { GalleryContent } from '@/types';

type GalleryProps = {
  content: GalleryContent;
  locale: Locale;
};

export function Gallery({ content, locale }: GalleryProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <div className="h-full w-full min-h-0">
        <BlurCard className="flex h-full w-full min-h-0 flex-col">
          <div className="flex min-h-0 flex-1 flex-col p-(--container-padding-x)">
            <GalleryHeader content={content} />
            <GalleryScrollReveal
              className="mt-6 min-h-0 flex-1 overflow-y-auto"
              onRevealComplete={() => setShowModal(true)}
            >
              <GalleryFullImages />
            </GalleryScrollReveal>
          </div>
        </BlurCard>
      </div>
      {showModal && <BlurCardModal locale={locale} />}
    </Container>
  );
}
