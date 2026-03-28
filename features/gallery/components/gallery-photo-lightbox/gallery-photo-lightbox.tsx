'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import type { PortfolioImage } from '@/types';
import { type Locale, t } from '@/lib/i18n';
import { GALLERY_SCROLL_REVEAL, GALLERY_MODAL_VIEW_TRANSITION, TAP_SCALE } from '@/lib/config';

const LIGHTBOX_TRANSITION = {
  duration: GALLERY_SCROLL_REVEAL.modalFadeInDuration,
  ease: GALLERY_MODAL_VIEW_TRANSITION.ease,
} as const;

const LIGHTBOX_Z_INDEX = 'z-[10050]';

type GalleryPhotoLightboxProps = {
  image: PortfolioImage;
  locale: Locale;
  onClose: () => void;
};

export function GalleryPhotoLightbox({ image, locale, onClose }: GalleryPhotoLightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      className={`fixed inset-0 ${LIGHTBOX_Z_INDEX} relative flex h-dvh max-h-dvh flex-col overflow-hidden pointer-events-auto`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={LIGHTBOX_TRANSITION}
      role="dialog"
      aria-modal="true"
      aria-label={t('gallery.lightbox.ariaLabel', locale)}
    >
      {/* 1. Flou uniquement (page derrière), sans fond noir / sans voile coloré */}
      <div
        className="absolute inset-0 z-0 backdrop-blur-md lg:backdrop-blur-lg pointer-events-none"
        aria-hidden
      />
      {/* 2. Image au-dessus du flou */}
      <div className="absolute inset-0 z-[1] min-h-0 w-full">
        <Image
          src={image.src}
          alt={image.name}
          fill
          className="object-contain grayscale"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative z-10 flex shrink-0 justify-end p-(--container-padding-x) pt-[max(1rem,env(safe-area-inset-top,0px))] pb-4">
        <motion.button
          type="button"
          onClick={onClose}
          className="rounded-full bg-background/50 px-3 py-1.5 text-sm font-medium uppercase tracking-wide text-foreground backdrop-blur-sm"
          whileTap={{ scale: TAP_SCALE }}
        >
          {t('nav.close', locale)}
        </motion.button>
      </div>
    </motion.div>,
    document.body
  );
}
