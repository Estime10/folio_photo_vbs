'use client';

import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { getRouteIndex } from '@/lib/navigation-routes/routes/routes';
import { PAGE_TRANSITION } from '@/lib/config/animations';

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

function getDirection(prevPath: string | null, nextPath: string): 'initial' | 'forward' | 'back' {
  if (prevPath == null) return 'initial';
  const prevIndex = getRouteIndex(prevPath);
  const nextIndex = getRouteIndex(nextPath);
  if (nextIndex > prevIndex) return 'forward';
  if (nextIndex < prevIndex) return 'back';
  return 'initial';
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  const pathname = usePathname();
  const previousPathRef = useRef<string | null>(null);
  const directionRef = useRef<'initial' | 'forward' | 'back'>('initial');

  if (pathname !== previousPathRef.current) {
    directionRef.current = getDirection(previousPathRef.current, pathname);
    previousPathRef.current = pathname;
  }

  const direction = directionRef.current;
  const initialX =
    direction === 'initial' ? 0 : direction === 'forward' ? '-100%' : '100%';

  return (
    <motion.div
      key={pathname}
      className={`h-full w-full min-h-0 overflow-hidden ${className}`.trim()}
      initial={{ x: initialX }}
      animate={{ x: 0 }}
      transition={{
        duration: PAGE_TRANSITION.duration,
        delay: PAGE_TRANSITION.delay,
        ease: PAGE_TRANSITION.easeCubicBezier,
      }}
    >
      {children}
    </motion.div>
  );
}
