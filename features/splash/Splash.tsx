'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { SplashLogo } from '@/features/splash/SplashLogo';
import { logoNav } from '@/components/navigation/navigation-item/navigation-items';

/**
 * Splash — logo qui remonte, puis flash plein écran, puis redirect /home.
 */
export function Splash() {
  const router = useRouter();
  const [phase, setPhase] = useState<'logo' | 'flash'>('logo');
  const flashRef = useRef<HTMLDivElement>(null);

  const handleLogoComplete = useCallback(() => {
    setPhase('flash');
  }, []);

  useEffect(() => {
    if (phase !== 'flash' || !flashRef.current) return;

    const el = flashRef.current;
    gsap.set(el, { opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => router.push('/home'),
    });
    tl.to(el, { opacity: 0.85, duration: 0.08, ease: 'power2.out' }).to(el, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
    });
  }, [phase, router]);

  return (
    <>
      <div className="min-h-[100dvh] w-full flex-1 bg-black" />
      {phase === 'logo' && (
        <SplashLogo text={logoNav.label} onAnimationComplete={handleLogoComplete} />
      )}
      {phase === 'flash' && (
        <div
          ref={flashRef}
          className="pointer-events-none fixed inset-0 z-30 bg-white"
          aria-hidden
        />
      )}
    </>
  );
}
