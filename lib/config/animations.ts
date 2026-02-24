/**
 * Constantes d'animation centralisées (durées, délais, easings).
 * GSAP utilise les chaînes (ex. 'power2.out'), Framer Motion utilise les cubic-bezier.
 */

// ─── Easing (GSAP) ─────────────────────────────────────────────────────────
export const EASE_POWER2_OUT = 'power2.out';
export const EASE_POWER2_IN = 'power2.in';
export const EASE_SINE_IN = 'sine.in';

// ─── Easing (Framer Motion : cubic-bezier) ───────────────────────────────────
/** Équivalent de power2.out pour Framer Motion. */
export const EASE_POWER2_OUT_CUBIC_BEZIER = [0.33, 1, 0.68, 1] as const;

// ─── Entrée de page / container / header ────────────────────────────────────
/** Première animation (container enter, header enter) et transition entre pages. */
export const PAGE_ENTER = {
  duration: 1.5,
  delay: 0.15,
  ease: EASE_POWER2_OUT,
  easeCubicBezier: EASE_POWER2_OUT_CUBIC_BEZIER,
} as const;

/** Sortie de page (inverse de l’entrée) avant navigation. */
export const PAGE_EXIT = {
  duration: PAGE_ENTER.duration,
  delay: PAGE_ENTER.delay,
  ease: EASE_POWER2_OUT,
} as const;

// ─── Transition entre pages (slide gauche/droite) ───────────────────────────
export const PAGE_TRANSITION = {
  duration: PAGE_ENTER.duration,
  delay: PAGE_ENTER.delay,
  easeCubicBezier: PAGE_ENTER.easeCubicBezier,
} as const;

// ─── Carousel témoignages ───────────────────────────────────────────────────
export const TESTIMONIAL_CAROUSEL = {
  autoPlayIntervalMs: 5000,
  transitionDuration: 0.4,
  ease: EASE_POWER2_OUT,
  transitionOffsetX: 24,
} as const;

// ─── Splash (écran d'accueil) ───────────────────────────────────────────────
export const SPLASH = {
  zoomDelayS: 3,
  zoomDurationS: 8,
  zoomEase: EASE_POWER2_IN,
  logoShowBeforeEndS: 1.5,
  fadeoutDuration: 0.6,
  fadeoutEase: EASE_POWER2_IN,
} as const;

// ─── Splash logo (animation du texte) ───────────────────────────────────────
export const SPLASH_LOGO = {
  duration: 1.2,
  ease: EASE_POWER2_OUT,
  strokeDuration: 2.8,
  strokeEase: EASE_SINE_IN,
} as const;

// ─── Menu mobile (dropdown) ─────────────────────────────────────────────────
export const MOBILE_MENU = {
  duration: 0.6,
  easeIn: EASE_POWER2_IN,
  easeOut: EASE_POWER2_OUT,
} as const;

// ─── Indicateur de lien actif (navigation) ──────────────────────────────────
export const ACTIVE_NAVIGATION = {
  duration: 0.3,
  ease: EASE_POWER2_OUT,
} as const;

// ─── Galerie : scroll reveal après enter ─────────────────────────────────────
/** Défile vers le bas (2 "scrolls") puis remonte au top, après la fin de PAGE_ENTER. */
export const GALLERY_SCROLL_REVEAL = {
  /** Délai après la fin de PAGE_ENTER avant de lancer le scroll (ms). */
  delayAfterEnterMs: 200,
  /** Durée d’un sens (vers le bas ou vers le haut). */
  duration: 1.2,
  ease: EASE_POWER2_OUT,
  modalFadeInDuration: 0.5,
} as const;
