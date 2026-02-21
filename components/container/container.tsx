import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Container : hauteur = viewport − header (pas de scroll page), padding horizontal 0.625rem.
 * Le contenu qui dépasse scroll dans le container (overflow-y-auto).
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`h-full w-full overflow-y-auto px-(--container-padding-x) pt-5.5 ${className ?? ''}`.trim()}
    >
      {children}
    </div>
  );
}
