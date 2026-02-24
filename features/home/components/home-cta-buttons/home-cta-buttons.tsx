'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TAP_SCALE } from '@/lib/config/animations';
import { ROUTES } from '@/lib/navigation-routes/routes/routes';

type HomeCtaButtonsProps = {
  galleryLabel: string;
  contactLabel: string;
  onContactClick?: () => void;
  variant: 'desktop' | 'mobile';
};

/**
 * Boutons CTA partagés : Galerie (primaire) + Contact (lien ou bouton).
 * variant desktop = tailles réduites ; mobile = tailles plus grandes.
 */
export function HomeCtaButtons({
  galleryLabel,
  contactLabel,
  onContactClick,
  variant,
}: HomeCtaButtonsProps) {
  const isMobile = variant === 'mobile';
  const galleryClasses = isMobile
    ? 'rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90'
    : 'rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90';
  const contactClasses = isMobile
    ? 'text-base font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-foreground hover:underline'
    : 'cursor-pointer text-sm font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-foreground hover:underline';

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link href={ROUTES.gallery} className={galleryClasses}>
        <motion.span className="block" whileTap={{ scale: TAP_SCALE }}>
          {galleryLabel}
        </motion.span>
      </Link>
      {onContactClick != null ? (
        <button type="button" onClick={onContactClick} className={contactClasses}>
          <motion.span className="block" whileTap={{ scale: TAP_SCALE }}>
            {contactLabel}
          </motion.span>
        </button>
      ) : (
        <Link href={ROUTES.contact} className={contactClasses}>
          <motion.span className="block" whileTap={{ scale: TAP_SCALE }}>
            {contactLabel}
          </motion.span>
        </Link>
      )}
    </div>
  );
}
