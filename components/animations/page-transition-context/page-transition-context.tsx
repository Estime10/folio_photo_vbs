'use client';

import { createContext, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { PAGE_EXIT } from '@/lib/config';

export type PageTransitionContextValue = {
  runExitThenNavigate: (href: string) => void;
  registerHeaderRef: (el: HTMLElement | null) => void;
  registerContainerRef: (el: HTMLDivElement | null) => void;
};

export const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

type PageTransitionProviderProps = {
  children: React.ReactNode;
};

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const router = useRouter();
  const headerRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const registerHeaderRef = useCallback((el: HTMLElement | null) => {
    headerRef.current = el;
  }, []);

  const registerContainerRef = useCallback((el: HTMLDivElement | null) => {
    containerRef.current = el;
  }, []);

  const runExitThenNavigate = useCallback(
    (href: string) => {
      const header = headerRef.current;
      const container = containerRef.current;
      if (!header || !container) {
        router.push(href);
        return;
      }
      const tl = gsap.timeline({
        onComplete: () => router.push(href),
      });
      tl.to(
        header,
        {
          y: '-100%',
          opacity: 0,
          duration: PAGE_EXIT.duration,
          delay: PAGE_EXIT.delay,
          ease: PAGE_EXIT.ease,
          overwrite: true,
        },
        0
      ).to(
        container,
        {
          y: '100%',
          opacity: 0,
          duration: PAGE_EXIT.duration,
          delay: PAGE_EXIT.delay,
          ease: PAGE_EXIT.ease,
          overwrite: true,
        },
        0
      );
    },
    [router]
  );

  const value: PageTransitionContextValue = {
    runExitThenNavigate,
    registerHeaderRef,
    registerContainerRef,
  };

  return (
    <PageTransitionContext.Provider value={value}>
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </PageTransitionContext.Provider>
  );
}
