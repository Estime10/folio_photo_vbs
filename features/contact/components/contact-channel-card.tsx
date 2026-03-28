'use client';

import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlurCard } from '@/components/blur-card/blur-card';
import { FADE_SLIDE_UP_VARIANTS, TAP_SCALE } from '@/lib/config';

type IconProps = { className?: string; 'aria-hidden'?: boolean };

/** Icône Instagram (SVG) — Lucide a déprécié les icônes de marques. */
function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
  const Icon = variant === 'email' ? Mail : InstagramIcon;

  const linkProps = external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {};

  return (
    <motion.div variants={FADE_SLIDE_UP_VARIANTS}>
      <a
        href={href}
        className="focus-ring block h-full min-h-[120px] rounded-lg"
        aria-label={label}
        {...linkProps}
      >
        <motion.div whileTap={{ scale: TAP_SCALE }} className="h-full">
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
