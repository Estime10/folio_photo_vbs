'use client';

import { Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlurCard } from '@/components/blur-card/blur-card';
import { EASE_POWER2_OUT_CUBIC_BEZIER } from '@/lib/config/animations';

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_POWER2_OUT_CUBIC_BEZIER },
  },
} as const;

type ContactChannelCardProps = {
  variant: 'email' | 'instagram';
  href: string;
  label: string;
  external?: boolean;
};

/**
 * Carte cliquable pour un canal de contact (Email ou Instagram).
 * Lien externe ou mailto, style glass, whileTap scale.
 */
export function ContactChannelCard({
  variant,
  href,
  label,
  external = false,
}: ContactChannelCardProps) {
  const Icon = variant === 'email' ? Mail : Instagram;

  const linkProps = external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {};

  return (
    <motion.div variants={CARD_VARIANTS}>
      <a
        href={href}
        className="block h-full min-h-[120px] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
        aria-label={label}
        {...linkProps}
      >
        <motion.div whileTap={{ scale: 0.98 }} className="h-full">
          <BlurCard className="flex h-full flex-col items-center justify-center gap-3 px-6 py-8">
            <Icon className="size-8 shrink-0 text-foreground/90" aria-hidden />
            <span className="text-center text-sm font-medium uppercase tracking-wide text-foreground">
              {label}
            </span>
          </BlurCard>
        </motion.div>
      </a>
    </motion.div>
  );
}
