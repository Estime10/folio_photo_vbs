import type { PortfolioImage } from '@/types/portfolio';

const RUN1_FILES = [
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
  '7.jpeg',
  '8.jpeg',
  '9.jpeg',
  '10.jpeg',
] as const;

const BASE = '/images/basketball';

export const run1Images: readonly PortfolioImage[] = RUN1_FILES.map((name) => ({
  src: `${BASE}/${name}`,
  name,
}));
