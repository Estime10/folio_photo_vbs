/**
 * Langues supportées pour les témoignages (aligné sur l'i18n).
 */
export type TestimonialLocale = 'fr' | 'en' | 'nl';

/**
 * Témoignage client : auteur, rôle et citation par locale, note sur 5.
 */
export type Testimonial = {
  readonly id: string;
  readonly username: string;
  readonly job: Record<TestimonialLocale, string>;
  readonly description: Record<TestimonialLocale, string>;
  /** Note entière de 1 à 5. */
  readonly rating: 1 | 2 | 3 | 4 | 5;
};
