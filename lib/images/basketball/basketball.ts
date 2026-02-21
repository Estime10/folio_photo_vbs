import type { PortfolioImage } from '@/types/portfolio';
import { run1Images } from '@/lib/images/basketball/run1';
import { run2Images } from '@/lib/images/basketball/run2';
import { run3Images } from '@/lib/images/basketball/run3';
import { run4Images } from '@/lib/images/basketball/run4';

export { run1Images } from '@/lib/images/basketball/run1';
export { run2Images } from '@/lib/images/basketball/run2';
export { run3Images } from '@/lib/images/basketball/run3';
export { run4Images } from '@/lib/images/basketball/run4';

export const basketballImages: readonly PortfolioImage[] = [
  ...run1Images,
  ...run2Images,
  ...run3Images,
  ...run4Images,
];
