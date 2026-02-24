'use client';

import { motion } from 'framer-motion';
import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import { EASE_POWER2_OUT_CUBIC_BEZIER } from '@/lib/config/animations';
import type { ContactContent } from '@/types/contact';
import { ContactChannelCard } from './components/ContactChannelCard';

const CONTACT_ANIMATION = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: EASE_POWER2_OUT_CUBIC_BEZIER },
} as const;

type ContactProps = {
  content: ContactContent;
};

/**
 * Page Contact : titre, sous-titre, deux canaux (Email + Instagram) en cartes cliquables.
 * Pas de formulaire — liens directs mailto et Instagram.
 */
export function Contact({ content }: ContactProps) {
  const { title, subtitle, emailLabel, instagramLabel, email, instagramUrl } = content;

  return (
    <Container className="flex flex-col items-center justify-center py-12 md:py-16">
      <motion.header
        className="w-full max-w-2xl text-center"
        initial={CONTACT_ANIMATION.initial}
        animate={CONTACT_ANIMATION.animate}
        transition={CONTACT_ANIMATION.transition}
      >
        <h1 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-base">{subtitle}</p>
      </motion.header>

      <motion.div
        className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        <ContactChannelCard variant="email" href={`mailto:${email}`} label={emailLabel} external />
        <ContactChannelCard
          variant="instagram"
          href={instagramUrl}
          label={instagramLabel}
          external
        />
      </motion.div>
    </Container>
  );
}
