import type { PortfolioImage } from '@/types';

const PROFILE_FILE = 'profile.jpeg' as const;
const PROFILE_FILE_TOP = 'profile_top.jpg' as const;
const PROFILE_FILE_NO_BG = 'profile_no_bg.png' as const;
export const PROFILE_FILE_BG = 'DSC_0399.JPG' as const;

const BASE = '/images/profile';

export const profileImages: PortfolioImage = {
  src: `${BASE}/${PROFILE_FILE}`,
  name: PROFILE_FILE,
};

export const profileImagesTop: PortfolioImage = {
  src: `${BASE}/${PROFILE_FILE_TOP}`,
  name: PROFILE_FILE_TOP,
};

export const profileImagesNoBg: PortfolioImage = {
  src: `${BASE}/${PROFILE_FILE_NO_BG}`,
  name: PROFILE_FILE_NO_BG,
};

export const profileImagesBg: PortfolioImage = {
  src: `${BASE}/${PROFILE_FILE_BG}`,
  name: PROFILE_FILE_BG,
};
