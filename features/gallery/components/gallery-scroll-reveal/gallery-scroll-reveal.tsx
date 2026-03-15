'use client';

import type { ReactNode } from 'react';
import { useGalleryScrollReveal } from './use-gallery-scroll-reveal';

type GalleryScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Appelé à la fin de l'animation de scroll (avant d'afficher la modale). */
  onRevealComplete?: () => void;
};

/**
 * Wrapper du conteneur scrollable de la galerie.
 * Une fois l'animation de page transition (enter) terminée, lance un scroll
 * vers le bas puis remonte au top (logique dans useGalleryScrollReveal).
 */
export function GalleryScrollReveal({
  children,
  className,
  onRevealComplete,
}: GalleryScrollRevealProps) {
  const scrollRef = useGalleryScrollReveal(onRevealComplete);

  return (
    <div ref={scrollRef} className={className}>
      {children}
    </div>
  );
}
