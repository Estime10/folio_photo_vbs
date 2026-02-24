'use client';

import Image from 'next/image';
import { useState, useCallback, useMemo } from 'react';
import { allPortfolioImages } from '@/lib/images/images';
import { shuffleDeterministic } from '@/lib/utils/seeded-shuffle';
import type { PortfolioImage } from '@/types/portfolio';

const COLUMNS = 3;
const GAP = 'gap-0.5';

/** Seed fixe pour un ordre mélangé reproductible (évite les séquences type basketball/basketball/basketball). */
const GALLERY_SHUFFLE_SEED = 42;

type ColumnItem = { image: PortfolioImage };

/**
 * Répartition type Explore : mélange pour varier les tailles, puis distribution
 * en colonnes pour un rendu équilibré et varié (pas deux mêmes formats côte à côte).
 */
function distributeInColumns(images: readonly PortfolioImage[]): ColumnItem[][] {
  const shuffled = shuffleDeterministic(images, GALLERY_SHUFFLE_SEED);
  const columns: ColumnItem[][] = [[], [], []];

  shuffled.forEach((image) => {
    const shortest = columns.reduce<number>(
      (idx, col, i) => (col.length < (columns[idx]?.length ?? Infinity) ? i : idx),
      0
    );
    const col = columns[shortest];
    if (col) col.push({ image });
  });

  return columns;
}

function GalleryImageCell({ image }: { image: PortfolioImage }) {
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
        className="object-contain grayscale"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 50vw"
        onLoad={onLoad}
      />
    </article>
  );
}

function GalleryColumn({ items }: { items: ColumnItem[] }) {
  return (
    <div className={`flex flex-col ${GAP}`}>
      {items.map(({ image }) => (
        <GalleryImageCell key={`${image.src}-${image.name}`} image={image} />
      ))}
    </div>
  );
}

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
