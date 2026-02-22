'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
      duration: 1.2,
      ease: 'power2.out',
    }).to(
      el,
      {
        opacity: 1,
        duration: 2.8,
        ease: 'sine.in',
      },
      0
    );
  }, [onAnimationComplete]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none"
      aria-hidden
    >
      <span className="font-medium tracking-tight text-white text-center px-4 whitespace-nowrap text-2xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase">
        {text}
      </span>
    </div>
  );
}
