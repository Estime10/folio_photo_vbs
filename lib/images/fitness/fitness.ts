import type { PortfolioImage } from '@/types';

const FITNESS_FILES = [
  '1.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
] as const;

const BASE = '/images/fitness';

export const fitnessImages: readonly PortfolioImage[] = FITNESS_FILES.map((name) => ({
  src: `${BASE}/${name}`,
  name,
}));
