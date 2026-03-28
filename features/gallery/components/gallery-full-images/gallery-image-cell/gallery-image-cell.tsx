'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import type { PortfolioImage } from '@/types';
import type { Locale } from '@/lib/i18n';
import { GalleryPhotoLightbox } from '@/features/gallery/components/gallery-photo-lightbox/gallery-photo-lightbox';

type GalleryImageCellProps = {
  image: PortfolioImage;
  locale: Locale;
};

export function GalleryImageCell({ image, locale }: GalleryImageCellProps) {
  const [aspectRatio, setAspectRatio] = useState<number>(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const onLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    }
  }, []);

  const frameClassName = 'relative w-full min-h-0 overflow-hidden rounded-lg';
  const style = { aspectRatio: `${aspectRatio}` } as const;
  const imageClassName = 'object-contain grayscale rounded-lg pointer-events-none';

  return (
    <>
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className={`${frameClassName} cursor-pointer [border:none] [background:transparent] p-0 text-left`}
        style={style}
        aria-label={image.name}
      >
        <Image
          src={image.src}
          alt=""
          fill
          className={imageClassName}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 50vw"
          onLoad={onLoad}
          aria-hidden
        />
      </button>
      {lightboxOpen && (
        <GalleryPhotoLightbox
          image={image}
          locale={locale}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
