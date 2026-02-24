import type { PortfolioCategory } from '@/types/portfolio';

/** Clé i18n pour le titre d'une card de la modale galerie. */
export const MODAL_CARD_TITLE_KEYS = [
  'gallery.modal.card.basketball',
  'gallery.modal.card.branding',
  'gallery.modal.card.captureMoment',
  'gallery.modal.card.fitness',
] as const;

export type ModalCardTitleKey = (typeof MODAL_CARD_TITLE_KEYS)[number];

export type ModalCardConfig = {
  titleKey: ModalCardTitleKey;
  imageSrc: string;
  category: PortfolioCategory;
};

export const BLUR_CARD_MODAL_CARDS: ModalCardConfig[] = [
  {
    titleKey: 'gallery.modal.card.basketball',
    imageSrc: '/images/basketball/4.jpeg',
    category: 'basketball',
  },
  {
    titleKey: 'gallery.modal.card.branding',
    imageSrc: '/images/brand/2.png',
    category: 'brand',
  },
  {
    titleKey: 'gallery.modal.card.captureMoment',
    imageSrc: '/images/lifestyle/1png.png',
    category: 'lifestyle',
  },
  {
    titleKey: 'gallery.modal.card.fitness',
    imageSrc: '/images/fitness/6.png',
    category: 'fitness',
  },
];
