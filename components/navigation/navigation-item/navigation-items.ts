import { ROUTES } from '@/lib/navigation-routes';

export const navigationItems = [
  { href: ROUTES.home, key: 'nav.home' },
  { href: ROUTES.story, key: 'nav.story' },
  { href: ROUTES.gallery, key: 'nav.gallery' },
  { href: ROUTES.contact, key: 'nav.contact' },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

/** Logo : lien et libellé fixe (pas de traduction). */
export const logoNav = {
  href: navigationItems[0].href,
  label: 'Photo Vibes By Shana',
} as const;
