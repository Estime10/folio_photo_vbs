'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

type ActiveNavigationProps = {
  linkRefs: React.RefObject<(HTMLAnchorElement | null)[]>;
  activeIndex: number;
};

export function ActiveNavigation({ linkRefs, activeIndex }: ActiveNavigationProps) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (activeIndex === -1 || !underlineRef.current) return;
    const activeLink = linkRefs.current[activeIndex];
    if (!activeLink) return;

    gsap.to(underlineRef.current, {
      left: activeLink.offsetLeft,
      width: activeLink.offsetWidth,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: true,
    });
  }, [activeIndex, linkRefs]);

  return (
    <span
      ref={underlineRef}
      className="absolute bottom-0 z-0 h-px bg-foreground"
      aria-hidden
      style={{ left: 0, width: 0 }}
    />
  );
}
