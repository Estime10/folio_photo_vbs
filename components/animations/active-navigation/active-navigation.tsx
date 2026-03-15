'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ACTIVE_NAVIGATION } from '@/lib/config';

type ActiveNavigationProps = {
  linkRefs: React.RefObject<(HTMLElement | null)[]>;
  activeIndex: number;
};

/**
 * Mesure l’élément à souligner : le span texte (firstElementChild) si présent,
 * sinon le lien entier, pour que la largeur corresponde au texte.
 */
function getMeasureEl(link: HTMLElement): HTMLElement {
  const textEl = link.firstElementChild;
  return (textEl instanceof HTMLElement ? textEl : link) as HTMLElement;
}

export function ActiveNavigation({ linkRefs, activeIndex }: ActiveNavigationProps) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const underline = underlineRef.current;
    if (activeIndex === -1 || !underline) return;
    const activeLink = linkRefs.current[activeIndex];
    if (!activeLink) return;

    const container = underline.offsetParent;
    if (!container) return;

    const toMeasure = getMeasureEl(activeLink);
    const containerEl = container as HTMLElement;
    const containerRect = containerEl.getBoundingClientRect();
    const targetRect = toMeasure.getBoundingClientRect();

    gsap.to(underline, {
      left: targetRect.left - containerRect.left,
      width: targetRect.width,
      duration: ACTIVE_NAVIGATION.duration,
      ease: ACTIVE_NAVIGATION.ease,
      overwrite: true,
    });

    const resizeObserver = new ResizeObserver(() => {
      if (!underlineRef.current || linkRefs.current[activeIndex] !== activeLink) return;
      const c = underlineRef.current.offsetParent as HTMLElement | null;
      if (!c) return;
      const el = getMeasureEl(activeLink);
      const cr = c.getBoundingClientRect();
      const tr = el.getBoundingClientRect();
      gsap.set(underlineRef.current, { left: tr.left - cr.left, width: tr.width });
    });
    resizeObserver.observe(toMeasure);
    return () => resizeObserver.disconnect();
  }, [activeIndex, linkRefs]);

  return (
    <span
      ref={underlineRef}
      className="absolute bottom-0 left-0 z-0 h-px w-0 bg-foreground"
      aria-hidden
    />
  );
}
