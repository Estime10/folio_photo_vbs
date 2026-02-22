'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

type UseSplashZoomParams = {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  dotRef: React.RefObject<HTMLElement | null>;
  delay?: number;
  duration?: number;
  scale?: number;
};

export function useSplashZoom({
  wrapperRef,
  dotRef,
  delay = 3,
  duration = 8,
  scale = 100,
}: UseSplashZoomParams): void {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const dot = dotRef.current;
    if (!wrapper || !dot) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
    const originX = dotRect.left - wrapperRect.left + dotRect.width / 2;
    const originY = dotRect.top - wrapperRect.top + dotRect.height / 2;

    gsap.set(wrapper, {
      transformOrigin: `${originX}px ${originY}px`,
    });
    gsap.to(wrapper, {
      scale,
      duration,
      delay,
      ease: 'power2.in',
    });
  }, [wrapperRef, dotRef, delay, duration, scale]);
}
