'use client';

import { useRef, useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { PAGE_ENTER, GALLERY_SCROLL_REVEAL } from '@/lib/config';

/** Durée totale de l'enter (délai + durée) en ms. */
const PAGE_ENTER_TOTAL_MS = (PAGE_ENTER.delay + PAGE_ENTER.duration) * 1000;

/**
 * Hook : après l’animation d’entrée de page, scroll vers le bas puis remonte au top.
 * Appelle onRevealComplete à la fin de l’animation.
 * Retourne le ref à attacher au conteneur scrollable.
 */
export function useGalleryScrollReveal(
  onRevealComplete?: () => void
): RefObject<HTMLDivElement | null> {
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasRunRef = useRef(false);
  const onRevealCompleteRef = useRef(onRevealComplete);
  onRevealCompleteRef.current = onRevealComplete;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || hasRunRef.current) return;

    const startDelay = PAGE_ENTER_TOTAL_MS + GALLERY_SCROLL_REVEAL.delayAfterEnterMs;

    const tween = gsap.delayedCall(startDelay / 1000, () => {
      hasRunRef.current = true;
      const scrollAmount = 3 * el.clientHeight;

      const tl = gsap.timeline({
        onComplete: () => {
          onRevealCompleteRef.current?.();
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
  }, []);

  return scrollRef;
}
