import type { PortfolioImage } from '@/types/portfolio';

const BRAND_FILES = ['1.jpeg', '2.png'] as const;

const BASE = '/images/brand';

export const brandImages: readonly PortfolioImage[] = BRAND_FILES.map((name) => ({
  src: `${BASE}/${name}`,
  name,
}));
