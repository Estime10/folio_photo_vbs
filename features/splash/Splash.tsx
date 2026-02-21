'use client';

import { SplashLogo } from '@/features/splash/SplashLogo';
import { logoNav } from '@/components/navigation/navigation-item/navigation-items';

/**
 * Splash — fond noir + logo qui remonte (opacité 0 → 1).
 */
export function Splash() {
  return (
    <>
      <div className="min-h-[100dvh] w-full flex-1 bg-black" />
      <SplashLogo text={logoNav.label} />
    </>
  );
}
