'use client';

import { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { PAGE_ENTER, GALLERY_SCROLL_REVEAL } from '@/lib/config/animations';

type GalleryScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Appelé à la fin de l'animation de scroll (avant d'afficher la modale). */
  onRevealComplete?: () => void;
};

/** Durée totale de l'enter (délai + durée) en ms. */
const PAGE_ENTER_TOTAL_MS = (PAGE_ENTER.delay + PAGE_ENTER.duration) * 1000;

/**
 * Wrapper du conteneur scrollable de la galerie.
 * Une fois l'animation de page transition (enter) terminée, lance un scroll
 * vers le bas (2 hauteurs de viewport) puis remonte au top.
 */
export function GalleryScrollReveal({
  children,
  className,
  onRevealComplete,
}: GalleryScrollRevealProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || hasRunRef.current) return;

    const startDelay = PAGE_ENTER_TOTAL_MS + GALLERY_SCROLL_REVEAL.delayAfterEnterMs;

    const tween = gsap.delayedCall(startDelay / 1000, () => {
      hasRunRef.current = true;
      const scrollAmount = 3 * el.clientHeight;

      const tl = gsap.timeline({
        onComplete: () => {
          onRevealComplete?.();
        },
      });
      tl.to(el, {
        scrollTop: scrollAmount,
        duration: GALLERY_SCROLL_REVEAL.duration,
        ease: GALLERY_SCROLL_REVEAL.ease,
      }).to(el, {
        scrollTop: 0,
        duration: GALLERY_SCROLL_REVEAL.duration,
        ease: GALLERY_SCROLL_REVEAL.ease,
      });
    });

    return () => {
      tween.kill();
    };
  }, [onRevealComplete]);

  return (
    <div ref={scrollRef} className={className}>
      {children}
    </div>
  );
}
