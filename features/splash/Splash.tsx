'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { SplashLogo } from '@/components/animations/splash-logo/splash-logo';
import { useSplashZoom } from '@/components/animations/splash-zoom/use-splash-zoom';
import { logoNav } from '@/components/navigation/navigation-item/navigation-items';
import { ROUTES } from '@/lib/navigation-routes';
import { profileImagesBg } from '@/lib/images';
import { SPLASH } from '@/lib/config';

export function Splash() {
  const router = useRouter();
  const splashRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const [showLogo, setShowLogo] = useState(false);

  useSplashZoom({
    wrapperRef: imageWrapperRef,
    dotRef,
    delay: SPLASH.zoomDelayS,
    duration: SPLASH.zoomDurationS,
  });

  const handleLogoComplete = useCallback(() => {
    const el = splashRef.current;
    if (!el) {
      router.push(ROUTES.home);
      return;
    }
    gsap.to(el, {
      opacity: 0,
      duration: SPLASH.fadeoutDuration,
      ease: SPLASH.fadeoutEase,
      onComplete: () => router.push(ROUTES.home),
    });
  }, [router]);

  const handleZoomComplete = useCallback(() => setShowLogo(true), []);
  const logoDelayMs = (SPLASH.zoomDelayS + SPLASH.zoomDurationS - SPLASH.logoShowBeforeEndS) * 1000;

  useEffect(() => {
    const t = setTimeout(handleZoomComplete, logoDelayMs);
    return () => clearTimeout(t);
  }, [handleZoomComplete, logoDelayMs]);

  return (
    <div ref={splashRef} className="relative min-h-dvh w-full flex-1 overflow-hidden">
      <div ref={imageWrapperRef} className="absolute inset-0 grayscale">
        <Image
          src={profileImagesBg.src}
          alt=""
          fill
          className="object-cover lg:object-[10%_10%] md:object-[15%_15%]"
          priority
          sizes="100vw"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/50" aria-hidden />
      <span
        ref={dotRef}
        className="absolute left-[53%] top-[23.6%] md:top-[25.5%] lg:top-[25%] xl:top-[44%] 2xl:top-[46.5%] z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />
      {showLogo && <SplashLogo text={logoNav.label} onAnimationComplete={handleLogoComplete} />}
    </div>
  );
}
