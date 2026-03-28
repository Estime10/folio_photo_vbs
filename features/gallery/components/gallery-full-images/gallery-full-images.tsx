'use client';

import { useMemo } from 'react';
import type { Locale } from '@/lib/i18n';
import { allPortfolioImages } from '@/lib/images';
import {
  distributeInColumns,
  GALLERY_GRID_SECTION_CLASSES,
} from '@/features/gallery/lib/distribute-in-columns';
import { GalleryColumn } from './gallery-column/gallery-column';

type GalleryFullImagesProps = {
  locale: Locale;
};

export function GalleryFullImages({ locale }: GalleryFullImagesProps) {
  const columns = useMemo(() => distributeInColumns(allPortfolioImages), []);

  return (
    <section className={GALLERY_GRID_SECTION_CLASSES} aria-label="Galerie photos">
      {columns.map((items, colIndex) => (
        <GalleryColumn key={colIndex} items={items} locale={locale} />
      ))}
    </section>
  );
}
