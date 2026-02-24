'use client';

import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BlurCard } from '@/components/blur-card/blur-card';
import { t } from '@/lib/i18n/i18n';
import type { Locale } from '@/lib/i18n/messages/messages';
import { EASE_POWER2_OUT_CUBIC_BEZIER, GALLERY_SCROLL_REVEAL } from '@/lib/config/animations';
import { portfolioByCategory } from '@/lib/images/images';
import type { PortfolioCategory } from '@/types/portfolio';
import { distributeInColumns } from '@/features/gallery/lib/distribute-in-columns';
import { GalleryColumn } from '@/features/gallery/components/gallery-full-images/gallery-column/gallery-column';
import { BlurCardModalImage } from './components/blur-card-modal-image/blur-card-modal-image';

const CARD_KEYS = [
  'gallery.modal.card.basketball',
  'gallery.modal.card.branding',
  'gallery.modal.card.captureMoment',
  'gallery.modal.card.fitness',
] as const;

const CARDS: {
  titleKey: (typeof CARD_KEYS)[number];
  imageSrc: string;
  category: PortfolioCategory;
}[] = [
  {
    titleKey: 'gallery.modal.card.basketball',
    imageSrc: '/images/basketball/4.jpeg',
    category: 'basketball',
  },
  { titleKey: 'gallery.modal.card.branding', imageSrc: '/images/brand/2.png', category: 'brand' },
  {
    titleKey: 'gallery.modal.card.captureMoment',
    imageSrc: '/images/lifestyle/1png.png',
    category: 'lifestyle',
  },
  {
    titleKey: 'gallery.modal.card.fitness',
    imageSrc: '/images/fitness/6.png',
    category: 'fitness',
  },
];

type BlurCardModalProps = {
  locale: Locale;
};

/**
 * Modale galerie : pleine page sous le header, 4 cards blur.
 * Clic sur une card (xl) → grille des images de la catégorie.
 */
export function BlurCardModal({ locale }: BlurCardModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | null>(null);

  const columns = useMemo(
    () => (selectedCategory ? distributeInColumns(portfolioByCategory[selectedCategory]) : null),
    [selectedCategory]
  );

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-50 flex min-h-full flex-col items-start justify-center overflow-y-auto bg-background/80 backdrop-blur-sm top-0 lg:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: GALLERY_SCROLL_REVEAL.modalFadeInDuration,
        ease: EASE_POWER2_OUT_CUBIC_BEZIER,
      }}
      aria-hidden
    >
      <AnimatePresence mode="wait">
        {selectedCategory ? (
          <motion.div
            key="grid"
            className="flex min-h-0 w-full flex-1 flex-col p-(--container-padding-x)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: GALLERY_SCROLL_REVEAL.categoryGridTransitionDuration,
              ease: EASE_POWER2_OUT_CUBIC_BEZIER,
            }}
          >
            <div className="mb-4 flex shrink-0 justify-end">
              <motion.button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="cursor-pointer text-sm font-medium uppercase tracking-wide text-foreground"
                whileTap={{ scale: 0.97 }}
              >
                {t('nav.close', locale)}
              </motion.button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <section
                className="grid w-full grid-cols-3 gap-0.5"
                aria-label={t(
                  CARDS.find((c) => c.category === selectedCategory)?.titleKey ??
                    'gallery.modal.card.basketball',
                  locale
                )}
              >
                {columns?.map((items, colIndex) => (
                  <GalleryColumn key={colIndex} items={items} />
                ))}
              </section>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="cards"
            className="grid w-full max-w-full grid-cols-1 gap-4 p-(--container-padding-x) lg:mt-6 xl:mt-0 md:max-w-xl lg:max-w-none lg:grid-cols-2 xl:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: GALLERY_SCROLL_REVEAL.categoryGridTransitionDuration,
              ease: EASE_POWER2_OUT_CUBIC_BEZIER,
            }}
          >
            {CARDS.map((card) => (
              <motion.button
                key={card.titleKey}
                type="button"
                onClick={() => setSelectedCategory(card.category)}
                className="block w-full min-w-0 cursor-default text-left xl:cursor-pointer [border:none] [background:transparent] p-0"
              >
                <motion.div className="h-full w-full" whileTap={{ scale: 0.97 }}>
                  <BlurCard className="flex min-h-0 flex-col">
                    <header className="shrink-0 px-4 py-3 text-foreground uppercase">
                      {t(card.titleKey, locale)}
                    </header>
                    <BlurCardModalImage src={card.imageSrc} alt={t(card.titleKey, locale)} />
                  </BlurCard>
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
