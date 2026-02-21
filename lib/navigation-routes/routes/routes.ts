/** Routes de l'application (une seule source de vérité). */
export const ROUTES = {
  home: '/home',
  story: '/story',
  gallery: '/gallery',
  contact: '/contact',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
