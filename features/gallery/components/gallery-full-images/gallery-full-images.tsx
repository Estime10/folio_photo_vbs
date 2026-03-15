'use client';

import { useMemo } from 'react';
import { allPortfolioImages } from '@/lib/images';
import {
  distributeInColumns,
  GALLERY_GRID_SECTION_CLASSES,
} from '@/features/gallery/lib/distribute-in-columns';
import { GalleryColumn } from './gallery-column/gallery-column';

export function GalleryFullImages() {
  const columns = useMemo(() => distributeInColumns(allPortfolioImages), []);

  return (
    <section className={GALLERY_GRID_SECTION_CLASSES} aria-label="Galerie photos">
      {columns.map((items, colIndex) => (
        <GalleryColumn key={colIndex} items={items} />
      ))}
    </section>
  );
}
