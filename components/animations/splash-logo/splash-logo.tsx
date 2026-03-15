'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SPLASH_LOGO } from '@/lib/config';

type SplashLogoProps = {
  text: string;
  onAnimationComplete?: () => void;
};

export function SplashLogo({ text, onAnimationComplete }: SplashLogoProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 120 });

    const tl = gsap.timeline({
      onComplete: () => onAnimationComplete?.(),
    });
    tl.to(el, {
      y: 0,
      duration: SPLASH_LOGO.duration,
      ease: SPLASH_LOGO.ease,
    }).to(
      el,
      {
        opacity: 1,
        duration: SPLASH_LOGO.strokeDuration,
        ease: SPLASH_LOGO.strokeEase,
      },
      0
    );
  }, [onAnimationComplete]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center"
      aria-hidden
    >
      <span className="whitespace-nowrap px-4 text-center text-2xl font-medium uppercase tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {text}
      </span>
    </div>
  );
}
