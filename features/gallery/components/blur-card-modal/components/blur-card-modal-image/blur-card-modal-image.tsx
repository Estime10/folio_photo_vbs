'use client';

import Image from 'next/image';

type BlurCardModalImageProps = {
  src: string;
  alt: string;
};

/**
 * Image pour une card de la modale galerie : grayscale, object-cover.
 */
export function BlurCardModalImage({ src, alt }: BlurCardModalImageProps) {
  return (
    <div className="relative aspect-4/5 w-full min-h-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale"
        sizes="(min-width: 1024px) 25vw, 50vw"
      />
    </div>
  );
}
