import type { ReactNode } from 'react';

type BlurCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Carte type liquid glass iOS : backdrop-blur + fond semi-transparent + bordure légère.
 * Réutilisable partout où un effet verre dépoli est souhaité.
 */
export function BlurCard({ children, className = '' }: BlurCardProps) {
  return (
    <div
      className={[
        'overflow-hidden rounded-lg',
        'bg-white/8 backdrop-blur-md backdrop-saturate-150',
        'border border-white/20',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
