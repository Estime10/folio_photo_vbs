'use client';

import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Locale } from '@/lib/i18n/messages/messages';
import { GALLERY_MODAL_VIEW_TRANSITION, GALLERY_SCROLL_REVEAL } from '@/lib/config/animations';
import { portfolioByCategory } from '@/lib/images/images';
import type { PortfolioCategory } from '@/types/portfolio';
import { distributeInColumns } from '@/features/gallery/lib/distribute-in-columns';
import { BlurCardModalCategoryGrid } from './components/blur-card-modal-category-grid';
import { BlurCardModalCardsView } from './components/blur-card-modal-cards-view';

const MODAL_TRANSITION = {
  duration: GALLERY_SCROLL_REVEAL.modalFadeInDuration,
  ease: GALLERY_MODAL_VIEW_TRANSITION.ease,
} as const;

type BlurCardModalProps = {
  locale: Locale;
};

/**
 * Modale galerie : pleine page, 4 cards blur.
 * Clic sur une card → grille des images de la catégorie.
 */
export function BlurCardModal({ locale }: BlurCardModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | null>(null);

  const columns = useMemo(
    () => (selectedCategory ? distributeInColumns(portfolioByCategory[selectedCategory]) : null),
    [selectedCategory]
  );

  return (
    <motion.div
      className="fixed inset-0 z-50 flex h-dvh max-h-dvh flex-col items-start justify-start overflow-y-auto bg-background/80 backdrop-blur-sm lg:items-center lg:justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={MODAL_TRANSITION}
      aria-hidden
    >
      <AnimatePresence mode="wait">
        {selectedCategory && columns ? (
          <BlurCardModalCategoryGrid
            selectedCategory={selectedCategory}
            columns={columns}
            locale={locale}
            onClose={() => setSelectedCategory(null)}
          />
        ) : (
          <BlurCardModalCardsView locale={locale} onSelectCategory={setSelectedCategory} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
