'use client';

import { motion } from 'framer-motion';
import { BlurCard } from '@/components/blur-card/blur-card';
import { t } from '@/lib/i18n/i18n';
import type { Locale } from '@/lib/i18n/messages/messages';
import { EASE_POWER2_OUT_CUBIC_BEZIER, GALLERY_SCROLL_REVEAL } from '@/lib/config/animations';
import type { PortfolioCategory } from '@/types/portfolio';
import { BlurCardModalImage } from '@/features/gallery/components/blur-card-modal/components/blur-card-modal-image/blur-card-modal-image';
import { BLUR_CARD_MODAL_CARDS } from '@/features/gallery/components/blur-card-modal/blur-card-modal.constants';

const TRANSITION = {
  duration: GALLERY_SCROLL_REVEAL.categoryGridTransitionDuration,
  ease: EASE_POWER2_OUT_CUBIC_BEZIER,
} as const;

type BlurCardModalCardsViewProps = {
  locale: Locale;
  onSelectCategory: (category: PortfolioCategory) => void;
};

/**
 * Vue 4 cards de la modale galerie (Basketball, Branding, Saisir l'instant, Fitness).
 */
export function BlurCardModalCardsView({ locale, onSelectCategory }: BlurCardModalCardsViewProps) {
  return (
    <motion.div
      key="cards"
      className="grid w-full max-w-full grid-cols-1 gap-4 p-(--container-padding-x) lg:mt-6 xl:mt-0 md:max-w-xl lg:max-w-none lg:grid-cols-2 xl:grid-cols-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={TRANSITION}
    >
      {BLUR_CARD_MODAL_CARDS.map((card) => (
        <motion.button
          key={card.titleKey}
          type="button"
          onClick={() => onSelectCategory(card.category)}
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
  );
}
