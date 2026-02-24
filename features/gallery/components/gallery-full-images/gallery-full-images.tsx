'use client';

import { useMemo } from 'react';
import { allPortfolioImages } from '@/lib/images/images';
import { distributeInColumns } from '@/features/gallery/lib/distribute-in-columns';
import { GalleryColumn } from './gallery-column/gallery-column';

const GAP = 'gap-0.5';

export function GalleryFullImages() {
  const columns = useMemo(() => distributeInColumns(allPortfolioImages), []);

  return (
    <section className={`grid w-full grid-cols-3 ${GAP}`} aria-label="Galerie photos">
      {columns.map((items, colIndex) => (
        <GalleryColumn key={colIndex} items={items} />
      ))}
    </section>
  );
}
