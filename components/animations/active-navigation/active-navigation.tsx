'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ACTIVE_NAVIGATION } from '@/lib/config';

type ActiveNavigationProps = {
  linkRefs: React.RefObject<(HTMLElement | null)[]>;
  activeIndex: number;
};

export function ActiveNavigation({ linkRefs, activeIndex }: ActiveNavigationProps) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (activeIndex === -1 || !underlineRef.current) return;
    const activeEl = linkRefs.current[activeIndex];
    if (!activeEl) return;

    gsap.to(underlineRef.current, {
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
      duration: ACTIVE_NAVIGATION.duration,
      ease: ACTIVE_NAVIGATION.ease,
      overwrite: true,
    });
  }, [activeIndex, linkRefs]);

  return (
    <span
      ref={underlineRef}
      className="absolute bottom-0 left-0 z-0 h-px w-0 bg-foreground"
      aria-hidden
    />
  );
}
