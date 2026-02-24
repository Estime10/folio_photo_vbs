import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import { GalleryHeader } from './components/gallery-header/gallery-header';
import type { GalleryContent } from '@/types/gallery';

type GalleryProps = {
  content: GalleryContent;
};

export function Gallery({ content }: GalleryProps) {
  return (
    <Container>
      <BlurCard className="flex h-full w-full min-h-0 flex-col">
        <div className="flex flex-col p-(--container-padding-x)">
          <GalleryHeader content={content} />
        </div>
      </BlurCard>
    </Container>
  );
}
