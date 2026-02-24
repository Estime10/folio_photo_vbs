'use client';

import type { GalleryColumnItem } from '@/features/gallery/lib/distribute-in-columns';
import { GalleryImageCell } from '../gallery-image-cell/gallery-image-cell';

const GAP = 'gap-0.5';

type GalleryColumnProps = {
  items: GalleryColumnItem[];
};

export function GalleryColumn({ items }: GalleryColumnProps) {
  return (
    <div className={`flex flex-col ${GAP}`}>
      {items.map(({ image }) => (
        <GalleryImageCell key={`${image.src}-${image.name}`} image={image} />
      ))}
    </div>
  );
}
