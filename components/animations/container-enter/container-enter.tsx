'use client';

import { useRef, useContext } from 'react';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useContainerEnter } from '@/components/animations/container-enter/use-container-enter';
import { PageTransitionContext } from '@/components/animations/page-transition-context/page-transition-context';

type ContainerEnterProps = {
  children: ReactNode;
  className?: string;
};

export function ContainerEnter({ children, className = '' }: ContainerEnterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const ctx = useContext(PageTransitionContext);
  useContainerEnter(containerRef, pathname);

  const setContainerRef = (el: HTMLDivElement | null) => {
    (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    ctx?.registerContainerRef(el);
  };

  return (
    <div ref={setContainerRef} className={className}>
      {children}
    </div>
  );
}
