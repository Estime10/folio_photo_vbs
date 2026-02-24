'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import type { PortfolioImage } from '@/types/portfolio';

type GalleryImageCellProps = {
  image: PortfolioImage;
};

export function GalleryImageCell({ image }: GalleryImageCellProps) {
  const [aspectRatio, setAspectRatio] = useState<number>(1);

  const onLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    }
  }, []);

  return (
    <article
      className="relative w-full min-h-0 overflow-hidden"
      style={{ aspectRatio: `${aspectRatio}` }}
    >
      <Image
        src={image.src}
        alt={image.name}
        fill
        className="object-contain grayscale rounded-lg"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 50vw"
        onLoad={onLoad}
      />
    </article>
  );
}
