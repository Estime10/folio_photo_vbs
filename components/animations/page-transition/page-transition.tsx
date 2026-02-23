'use client';

import type { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Wrapper du contenu des pages. Pas d’animation horizontale :
 * seules les animations header (haut→bas) et container (bas→haut) sont utilisées.
 */
export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <div className={`h-full w-full min-h-0 overflow-hidden ${className}`.trim()}>{children}</div>
  );
}
