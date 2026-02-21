import type { PortfolioImage } from '@/types/portfolio';

const LIFESTYLE_FILES = [
  '1png.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
] as const;

const BASE = '/images/lifestyle';

export const lifestyleImages: readonly PortfolioImage[] = LIFESTYLE_FILES.map((name) => ({
  src: `${BASE}/${name}`,
  name,
}));
