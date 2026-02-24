'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/container/container';
import { FADE_SLIDE_UP } from '@/lib/config/animations';
import type { ContactContent } from '@/types/contact';
import { ContactChannelCard } from './components/contact-channel-card';

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
        initial={FADE_SLIDE_UP.initial}
        animate={FADE_SLIDE_UP.animate}
        transition={FADE_SLIDE_UP.transition}
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
