'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { SplashLogo } from '@/features/splash/SplashLogo';
import { logoNav } from '@/components/navigation/navigation-item/navigation-items';
import { profileImagesTop } from '@/lib/images/profile/profile';

/**
 * Splash — image (object-contain) + overlay dark + zoom centré sur le point rouge, puis logo.
 */
export function Splash() {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const [showLogo, setShowLogo] = useState(false);

  const handleZoomComplete = useCallback(() => {
    setShowLogo(true);
  }, []);

  useEffect(() => {
    const wrapper = imageWrapperRef.current;
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
      scale: 100,
      duration: 8,
      delay: 3,
      ease: 'power2.in',
    });

    const logoDelayMs = (3 + 8 - 1.5) * 1000;
    const logoTimer = setTimeout(handleZoomComplete, logoDelayMs);
    return () => clearTimeout(logoTimer);
  }, [handleZoomComplete]);

  return (
    <div className="relative min-h-[100dvh] w-full flex-1 overflow-hidden bg-black">
      <div ref={imageWrapperRef} className="absolute inset-0">
        <Image
          src={profileImagesTop.src}
          alt=""
          fill
          className="object-contain object-center grayscale"
          priority
          sizes="100vw"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/50" aria-hidden />
      <span
        ref={dotRef}
        className="absolute left-[52.5%] md:left-[51.5%] lg:left-[51%] top-[28.6%] min-[375px]:top-[23.5%] z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 "
        aria-hidden
      />
      {showLogo && <SplashLogo text={logoNav.label} />}
    </div>
  );
}
