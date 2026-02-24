'use client';

import { motion } from 'framer-motion';
import { t } from '@/lib/i18n/i18n';
import type { Locale } from '@/lib/i18n/messages/messages';
import { EASE_POWER2_OUT_CUBIC_BEZIER, GALLERY_SCROLL_REVEAL } from '@/lib/config/animations';
import type { PortfolioCategory } from '@/types/portfolio';
import type { GalleryColumnItem } from '@/features/gallery/lib/distribute-in-columns';
import { GalleryColumn } from '@/features/gallery/components/gallery-full-images/gallery-column/gallery-column';
import { BLUR_CARD_MODAL_CARDS } from '@/features/gallery/components/blur-card-modal/blur-card-modal.constants';

const TRANSITION = {
  duration: GALLERY_SCROLL_REVEAL.categoryGridTransitionDuration,
  ease: EASE_POWER2_OUT_CUBIC_BEZIER,
} as const;

type BlurCardModalCategoryGridProps = {
  selectedCategory: PortfolioCategory;
  columns: GalleryColumnItem[][];
  locale: Locale;
  onClose: () => void;
};

/**
 * Vue grille d'une catégorie dans la modale galerie : bouton Fermer + colonnes d'images.
 */
export function BlurCardModalCategoryGrid({
  selectedCategory,
  columns,
  locale,
  onClose,
}: BlurCardModalCategoryGridProps) {
  const titleKey =
    BLUR_CARD_MODAL_CARDS.find((c) => c.category === selectedCategory)?.titleKey ??
    'gallery.modal.card.basketball';

  return (
    <motion.div
      key="grid"
      className="flex min-h-0 w-full flex-1 flex-col p-(--container-padding-x)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={TRANSITION}
    >
      <div className="mb-4 flex shrink-0 justify-end">
        <motion.button
          type="button"
          onClick={onClose}
          className="cursor-pointer text-sm font-medium uppercase tracking-wide text-foreground"
          whileTap={{ scale: 0.97 }}
        >
          {t('nav.close', locale)}
        </motion.button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <section className="grid w-full grid-cols-3 gap-0.5" aria-label={t(titleKey, locale)}>
          {columns.map((items, colIndex) => (
            <GalleryColumn key={colIndex} items={items} />
          ))}
        </section>
      </div>
    </motion.div>
  );
}
