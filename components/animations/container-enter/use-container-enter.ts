'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { PAGE_ENTER } from '@/lib/config/animations';

/**
 * Anime le container du bas vers le haut (y: 100% → 0).
 * Re-joué à chaque changement de route pour que l’animation soit visible sur toutes les pages.
 */
export function useContainerEnter(
  containerRef: React.RefObject<HTMLElement | null>,
  pathname: string
): void {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: '100%' },
      {
        y: 0,
        duration: PAGE_ENTER.duration,
        delay: PAGE_ENTER.delay,
        ease: PAGE_ENTER.ease,
        overwrite: true,
      }
    );
  }, [containerRef, pathname]);
}
