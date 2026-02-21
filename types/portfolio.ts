/**
 * Représente une image du portfolio (chemin public Next.js).
 */
export type PortfolioImage = {
  readonly src: string;
  readonly name: string;
};

/**
 * Catégories du portfolio.
 */
export type PortfolioCategory = 'basketball' | 'brand' | 'fitness' | 'lifestyle';
