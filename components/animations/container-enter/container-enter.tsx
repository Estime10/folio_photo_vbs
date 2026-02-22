'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import { useContainerEnter } from '@/components/animations/container-enter/use-container-enter';

type ContainerEnterProps = {
  children: ReactNode;
  className?: string;
};

export function ContainerEnter({ children, className = '' }: ContainerEnterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useContainerEnter(containerRef);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
