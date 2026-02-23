import { useMemo } from 'react';
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

/** Graine fixe pour que le shuffle soit identique côté serveur et client (évite le hydration mismatch). */
const SHUFFLE_SEED = 42;

/**
 * Générateur pseudo-aléatoire déterministe (Mulberry32).
 * Même seed → même séquence, donc même ordre SSR et client.
 */
function createSeededRandom(seed: number): () => number {
  let state = seed;
  return function next() {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0; // eslint-disable-line no-bitwise
    let t = Math.imul(state ^ (state >>> 15), state | 1); // eslint-disable-line no-bitwise
    t = (t + (t >>> 31)) | 0; // eslint-disable-line no-bitwise
    return (t >>> 0) / 4294967296;
  };
}

function pickDeterministicImages(limit: number, seed: number): PortfolioImage[] {
  const random = createSeededRandom(seed);
  const copy: PortfolioImage[] = [...ALL_IMAGES];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const a = copy[i];
    const b = copy[j];
    if (a != null && b != null) {
      copy[i] = b;
      copy[j] = a;
    }
  }
  return copy.slice(0, limit);
}

export function HomeMiniatureItems() {
  const images = useMemo(
    () => pickDeterministicImages(MINIATURE_LIMIT, SHUFFLE_SEED),
    []
  );

  return (
    <div className="flex h-full w-full items-center justify-center p-3 @container/size">
      <div className="h-[min(100cqh,100cqw)] w-[min(100cqh,100cqw)] shrink-0">
        <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-x-3 gap-y-2 2xl:gap-2">
          {images.slice(0, MINIATURE_LIMIT).map((img) => (
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
