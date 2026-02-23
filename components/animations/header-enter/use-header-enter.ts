'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { PAGE_ENTER } from '@/lib/config/animations';

export function useHeaderEnter(headerRef: React.RefObject<HTMLElement | null>): void {
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
  }, [headerRef]);
}
