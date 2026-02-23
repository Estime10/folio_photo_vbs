'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { PortfolioImage } from '@/types/portfolio';
import { basketballImages, brandImages, fitnessImages, lifestyleImages } from '@/lib/images/images';
import { shuffleRandom } from '@/lib/utils/seeded-shuffle';
import { HomeMiniatureGridSkeleton } from './home-miniature-grid-skeleton';

const ALL_IMAGES: readonly PortfolioImage[] = [
  ...basketballImages,
  ...brandImages,
  ...fitnessImages,
  ...lifestyleImages,
];

const MINIATURE_LIMIT = 9;

const GRID_CLASSES = 'grid h-full w-full grid-cols-3 grid-rows-3 gap-x-3 gap-y-2 2xl:gap-2';
const CELL_CLASSES = 'relative aspect-square min-h-0 overflow-hidden rounded';

export function HomeMiniatureItems() {
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);
  const loadedCountRef = useRef(0);

  useEffect(() => {
    setImages(shuffleRandom([...ALL_IMAGES]).slice(0, MINIATURE_LIMIT));
    loadedCountRef.current = 0;
    setAllLoaded(false);
  }, []);

  const handleImageLoad = useCallback(() => {
    loadedCountRef.current += 1;
    if (loadedCountRef.current === MINIATURE_LIMIT) {
      setAllLoaded(true);
    }
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center p-3 @container/size">
      <div className="relative h-[min(100cqh,100cqw)] w-[min(100cqh,100cqw)] shrink-0">
        <HomeMiniatureGridSkeleton visible={images.length === 0 || !allLoaded} />
        {images.length > 0 && (
          <div className={GRID_CLASSES}>
            {images.map((img) => (
              <div key={`${img.src}-${img.name}`} className={CELL_CLASSES}>
                <Image
                  src={img.src}
                  alt={img.name}
                  fill
                  className="object-cover grayscale"
                  sizes="(min-width: 1536px) 25vw, 33vw"
                  onLoad={handleImageLoad}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
