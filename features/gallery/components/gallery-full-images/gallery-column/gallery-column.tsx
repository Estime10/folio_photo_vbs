'use client';

import type { Locale } from '@/lib/i18n';
import {
  GALLERY_GRID_GAP,
  type GalleryColumnItem,
} from '@/features/gallery/lib/distribute-in-columns';
import { GalleryImageCell } from '../gallery-image-cell/gallery-image-cell';

type GalleryColumnProps = {
  items: GalleryColumnItem[];
  locale: Locale;
};

export function GalleryColumn({ items, locale }: GalleryColumnProps) {
  return (
    <div className={`flex flex-col ${GALLERY_GRID_GAP}`}>
      {items.map(({ image }) => (
        <GalleryImageCell key={`${image.src}-${image.name}`} image={image} locale={locale} />
      ))}
    </div>
  );
}
