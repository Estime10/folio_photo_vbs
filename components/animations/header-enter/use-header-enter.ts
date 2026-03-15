'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { PAGE_ENTER } from '@/lib/config';

/**
 * Anime le header de haut vers le bas (y: -100% → 0) avec fade in (opacity 0 → 1).
 * Re-joué à chaque changement de route pour que l’animation soit visible sur toutes les pages.
 */
export function useHeaderEnter(
  headerRef: React.RefObject<HTMLElement | null>,
  pathname: string
): void {
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: '-100%', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: PAGE_ENTER.duration,
        delay: PAGE_ENTER.delay,
        ease: PAGE_ENTER.ease,
        overwrite: true,
      }
    );
  }, [headerRef, pathname]);
}
