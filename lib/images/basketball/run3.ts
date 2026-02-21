import type { PortfolioImage } from '@/types/portfolio';

const RUN3_FILES = [
  '21.jpeg',
  '22.jpeg',
  '23.jpeg',
  '24.jpeg',
  '25.jpeg',
  '26.jpeg',
  '27.jpeg',
  '28.jpeg',
  '29.jpeg',
  '30.jpeg',
] as const;

const BASE = '/images/basketball';

export const run3Images: readonly PortfolioImage[] = RUN3_FILES.map((name) => ({
  src: `${BASE}/${name}`,
  name,
}));
