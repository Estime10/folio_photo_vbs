'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useContext, forwardRef } from 'react';
import { PageTransitionContext } from '@/components/animations/page-transition-context/page-transition-context';

type TransitionLinkProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

/**
 * Lien qui déclenche l'animation de sortie (header remonte, container descend) avant la navigation.
 * Utilisé pour les liens internes du site.
 */
export const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  function TransitionLink({ href, onClick, ...rest }, ref) {
    const pathname = usePathname();
    const ctx = useContext(PageTransitionContext);

    const isInternal = href.startsWith('/') && !href.startsWith('//');
    const isSamePage = pathname === href;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      if (isInternal && !isSamePage && ctx) {
        e.preventDefault();
        ctx.runExitThenNavigate(href);
      }
    };

    return <Link ref={ref} href={href} onClick={handleClick} {...rest} />;
  }
);
