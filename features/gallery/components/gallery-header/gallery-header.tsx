import type { GalleryContent } from '@/types/gallery';
import { TitleBlock } from '@/components/ui/title-block';

type GalleryHeaderProps = {
  content: GalleryContent;
};

export function GalleryHeader({ content }: GalleryHeaderProps) {
  const { surtitle, title } = content;
  return (
    <>
      <p className="text-left text-sm font-medium uppercase tracking-wider text-foreground/70">
        {surtitle}
      </p>
      <TitleBlock title={title} size="page" theme="light" className="mt-2" />
    </>
  );
}
