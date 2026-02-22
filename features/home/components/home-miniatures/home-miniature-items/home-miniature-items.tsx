import Image from 'next/image';
import type { PortfolioImage } from '@/types/portfolio';
import { basketballImages, brandImages, fitnessImages, lifestyleImages } from '@/lib/images/images';

const ALL_IMAGES: readonly PortfolioImage[] = [
  ...basketballImages,
  ...brandImages,
  ...fitnessImages,
  ...lifestyleImages,
];

const MINIATURE_LIMIT = 9;

function pickRandomImages(limit: number): PortfolioImage[] {
  const shuffled = [...ALL_IMAGES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, limit);
}

export function HomeMiniatureItems() {
  const images = pickRandomImages(MINIATURE_LIMIT);

  return (
    <div className="flex h-full w-full items-center justify-center p-3 @container/size">
      <div className="h-[min(100cqh,100cqw)] w-[min(100cqh,100cqw)] shrink-0">
        <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-x-3 gap-y-2 2xl:gap-2">
          {images.map((img) => (
            <div
              key={`${img.src}-${img.name}`}
              className="relative aspect-square min-h-0 overflow-hidden rounded"
            >
              <Image
                src={img.src}
                alt={img.name}
                fill
                className="object-cover grayscale"
                sizes="(min-width: 1536px) 25vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
