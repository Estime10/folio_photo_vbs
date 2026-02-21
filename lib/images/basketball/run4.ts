import type { PortfolioImage } from '@/types/portfolio';

const RUN4_FILES = [
  '31.jpeg',
  '32.jpeg',
  '33.jpeg',
  '34.jpeg',
  '35.jpeg',
  '36.jpeg',
  '37.jpeg',
  '38.jpeg',
  '39.jpeg',
  '40.jpeg',
] as const;

const BASE = '/images/basketball';

export const run4Images: readonly PortfolioImage[] = RUN4_FILES.map((name) => ({
  src: `${BASE}/${name}`,
  name,
}));
