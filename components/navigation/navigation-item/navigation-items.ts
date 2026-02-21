import { ROUTES } from '@/lib/navigation-routes/routes/routes';

export const navigationItems = [
  { href: ROUTES.home, key: 'nav.home' },
  { href: ROUTES.about, key: 'nav.about' },
  { href: ROUTES.gallery, key: 'nav.gallery' },
  { href: ROUTES.contact, key: 'nav.contact' },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

/** Lien et libellé du logo (premier item de la nav, titre brand). */
export const logoNav = {
  href: navigationItems[0].href,
  titleKey: 'home.hero.title',
} as const;
