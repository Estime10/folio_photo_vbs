import type { PortfolioImage } from '@/types/portfolio';

const PROFILE_FILE = 'profile.jpeg' as const;

const BASE = '/images/profile';

export const profileImages: PortfolioImage = {
  src: `${BASE}/${PROFILE_FILE}`,
  name: PROFILE_FILE,
};
