'use client';

import { motion } from 'framer-motion';
import { type Locale, t } from '@/lib/i18n';
import { GALLERY_MODAL_VIEW_TRANSITION, TAP_SCALE } from '@/lib/config';
import type { PortfolioCategory } from '@/types';
import type { GalleryColumnItem } from '@/features/gallery/lib/distribute-in-columns';
import { GALLERY_GRID_SECTION_CLASSES } from '@/features/gallery/lib/distribute-in-columns';
import { GalleryColumn } from '@/features/gallery/components/gallery-full-images/gallery-column/gallery-column';
import { BLUR_CARD_MODAL_CARDS } from '@/features/gallery/components/blur-card-modal/blur-card-modal.constants';

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
      transition={GALLERY_MODAL_VIEW_TRANSITION}
    >
      <div className="mb-4 flex shrink-0 justify-end">
        <motion.button
          type="button"
          onClick={onClose}
          className="cursor-pointer text-sm font-medium uppercase tracking-wide text-foreground"
          whileTap={{ scale: TAP_SCALE }}
        >
          {t('nav.close', locale)}
        </motion.button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <section className={GALLERY_GRID_SECTION_CLASSES} aria-label={t(titleKey, locale)}>
          {columns.map((items, colIndex) => (
            <GalleryColumn key={colIndex} items={items} />
          ))}
        </section>
      </div>
    </motion.div>
  );
}
