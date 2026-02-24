import { shuffleDeterministic } from '@/lib/utils/seeded-shuffle';
import type { PortfolioImage } from '@/types/portfolio';

export type GalleryColumnItem = {
  image: PortfolioImage;
};

export const GALLERY_GRID_COLUMNS = 3;

/** Seed fixe pour un ordre mélangé reproductible (évite les séquences type basketball/basketball/basketball). */
const GALLERY_SHUFFLE_SEED = 42;

/**
 * Répartition type Explore : mélange pour varier les tailles, puis distribution
 * en colonnes pour un rendu équilibré et varié (pas deux mêmes formats côte à côte).
 */
export function distributeInColumns(images: readonly PortfolioImage[]): GalleryColumnItem[][] {
  const shuffled = shuffleDeterministic(images, GALLERY_SHUFFLE_SEED);
  const columns: GalleryColumnItem[][] = [[], [], []];

  shuffled.forEach((image) => {
    const shortest = columns.reduce<number>(
      (idx, col, i) => (col.length < (columns[idx]?.length ?? Infinity) ? i : idx),
      0
    );
    const col = columns[shortest];
    if (col) col.push({ image });
  });

  return columns;
}
