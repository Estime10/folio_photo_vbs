'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

const DURATION = 1.5;
const DELAY = 0.15;
const EASE = 'power2.out';

export function useContainerEnter(containerRef: React.RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: '100%', opacity: 0 },
      { y: 0, opacity: 1, duration: DURATION, delay: DELAY, ease: EASE, overwrite: true }
    );
  }, [containerRef]);
}
