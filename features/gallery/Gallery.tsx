import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import { GalleryFullImages } from './components/gallery-full-images/gallery-full-images';
import { GalleryHeader } from './components/gallery-header/gallery-header';
import type { GalleryContent } from '@/types/gallery';

type GalleryProps = {
  content: GalleryContent;
};

export function Gallery({ content }: GalleryProps) {
  return (
    <Container>
      <BlurCard className="flex h-full w-full min-h-0 flex-col">
        <div className="flex min-h-0 flex-1 flex-col p-(--container-padding-x)">
          <GalleryHeader content={content} />
          <div className="mt-6 min-h-0 flex-1 overflow-y-auto">
            <GalleryFullImages />
          </div>
        </div>
      </BlurCard>
    </Container>
  );
}
