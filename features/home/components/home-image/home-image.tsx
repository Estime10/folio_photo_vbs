import Image from 'next/image';
import { profileImages } from '@/lib/images/profile/profile';

export function HomeImage() {
  return (
    <div className="relative h-full w-full min-h-(--container-min-height)">
      <div className="absolute inset-0 z-10 bg-black/80" />
      <Image
        src={profileImages.src}
        alt=""
        fill
        className="object-center object-contain xl:object-cover"
        sizes="100vw"
        priority
      />
    </div>
  );
}
