import type { PortfolioImage } from '@/types/portfolio';

const RUN2_FILES = [
  '11.jpeg',
  '12.jpeg',
  '13.jpeg',
  '14.jpeg',
  '15.jpeg',
  '16.jpeg',
  '17.jpeg',
  '18.jpeg',
  '19.jpeg',
  '20.jpeg',
] as const;

const BASE = '/images/basketball';

export const run2Images: readonly PortfolioImage[] = RUN2_FILES.map((name) => ({
  src: `${BASE}/${name}`,
  name,
}));
