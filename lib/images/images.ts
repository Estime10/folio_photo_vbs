import type { PortfolioCategory, PortfolioImage } from '@/types/portfolio';
import { basketballImages } from '@/lib/images/basketball/basketball';
import { brandImages } from '@/lib/images/brand/brand';
import { fitnessImages } from '@/lib/images/fitness/fitness';
import { lifestyleImages } from '@/lib/images/lifestyle/lifestyle';

export {
  basketballImages,
  run1Images,
  run2Images,
  run3Images,
  run4Images,
} from '@/lib/images/basketball/basketball';
export { brandImages } from '@/lib/images/brand/brand';
export { fitnessImages } from '@/lib/images/fitness/fitness';
export { lifestyleImages } from '@/lib/images/lifestyle/lifestyle';

export const portfolioByCategory: Record<PortfolioCategory, readonly PortfolioImage[]> = {
  basketball: basketballImages,
  brand: brandImages,
  fitness: fitnessImages,
  lifestyle: lifestyleImages,
};

export const portfolioCategories: readonly PortfolioCategory[] = [
  'basketball',
  'brand',
  'fitness',
  'lifestyle',
];

/** Liste plate de toutes les images du portfolio (toutes catégories). Pour la galerie full. */
export const allPortfolioImages: readonly PortfolioImage[] = [
  ...basketballImages,
  ...brandImages,
  ...fitnessImages,
  ...lifestyleImages,
];
