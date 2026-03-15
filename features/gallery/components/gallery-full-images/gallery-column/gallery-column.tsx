'use client';

import {
  GALLERY_GRID_GAP,
  type GalleryColumnItem,
} from '@/features/gallery/lib/distribute-in-columns';
import { GalleryImageCell } from '../gallery-image-cell/gallery-image-cell';

type GalleryColumnProps = {
  items: GalleryColumnItem[];
};

export function GalleryColumn({ items }: GalleryColumnProps) {
  return (
    <div className={`flex flex-col ${GALLERY_GRID_GAP}`}>
      {items.map(({ image }) => (
        <GalleryImageCell key={`${image.src}-${image.name}`} image={image} />
      ))}
    </div>
  );
}
