'use client';

import { motion } from 'framer-motion';
import { BlurCard } from '@/components/blur-card/blur-card';
import { t } from '@/lib/i18n/i18n';
import type { Locale } from '@/lib/i18n/messages/messages';
import { EASE_POWER2_OUT_CUBIC_BEZIER, GALLERY_SCROLL_REVEAL } from '@/lib/config/animations';
import { BlurCardModalImage } from './components/blur-card-modal-image/blur-card-modal-image';

const CARD_KEYS = [
  'gallery.modal.card.basketball',
  'gallery.modal.card.branding',
  'gallery.modal.card.captureMoment',
  'gallery.modal.card.fitness',
] as const;

const CARDS: { titleKey: (typeof CARD_KEYS)[number]; imageSrc: string }[] = [
  { titleKey: 'gallery.modal.card.basketball', imageSrc: '/images/basketball/4.jpeg' },
  { titleKey: 'gallery.modal.card.branding', imageSrc: '/images/brand/2.png' },
  { titleKey: 'gallery.modal.card.captureMoment', imageSrc: '/images/lifestyle/1png.png' },
  { titleKey: 'gallery.modal.card.fitness', imageSrc: '/images/fitness/6.png' },
];

type BlurCardModalProps = {
  locale: Locale;
};

/**
 * Modale galerie : pleine page sous le header, 4 cards blur.
 * Apparaît en fade-in après l'animation de scroll. Utilisée uniquement par Gallery.
 */
export function BlurCardModal({ locale }: BlurCardModalProps) {
  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-50 flex items-start justify-center overflow-y-auto bg-background/80 backdrop-blur-sm top-0 lg:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: GALLERY_SCROLL_REVEAL.modalFadeInDuration,
        ease: EASE_POWER2_OUT_CUBIC_BEZIER,
      }}
      aria-hidden
    >
      <div className="grid w-full max-w-full grid-cols-1 gap-4 p-(--container-padding-x) lg:mt-6 xl:mt-0 md:max-w-xl lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
        {CARDS.map((card) => (
          <BlurCard key={card.titleKey} className="flex min-h-0 flex-col">
            <header className="shrink-0 px-4 py-3 text-foreground uppercase">
              {t(card.titleKey, locale)}
            </header>
            <BlurCardModalImage src={card.imageSrc} alt={t(card.titleKey, locale)} />
          </BlurCard>
        ))}
      </div>
    </motion.div>
  );
}
