'use client';

import { motion } from 'framer-motion';
import { EASE_POWER2_OUT_CUBIC_BEZIER, GALLERY_SCROLL_REVEAL } from '@/lib/config/animations';

/**
 * Modale pleine page sous le header (taille = viewport − header).
 * Apparaît en fade-in (à afficher après l'animation de scroll).
 */
export function BlurCardModal() {
  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-50 bg-background/80 backdrop-blur-sm top-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: GALLERY_SCROLL_REVEAL.modalFadeInDuration,
        ease: EASE_POWER2_OUT_CUBIC_BEZIER,
      }}
      aria-hidden
    />
  );
}
