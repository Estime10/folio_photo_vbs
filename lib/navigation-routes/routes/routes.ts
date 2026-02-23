/** Routes de l'application (une seule source de vérité). */
export const ROUTES = {
  home: '/home',
  story: '/story',
  gallery: '/gallery',
  contact: '/contact',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

/** Ordre des routes pour la navigation (détermine "page suivante" / "page précédente"). */
export const ROUTE_ORDER: readonly RoutePath[] = [
  ROUTES.home,
  ROUTES.story,
  ROUTES.gallery,
  ROUTES.contact,
] as const;

export function getRouteIndex(path: string): number {
  const i = ROUTE_ORDER.indexOf(path as RoutePath);
  return i >= 0 ? i : 0;
}
