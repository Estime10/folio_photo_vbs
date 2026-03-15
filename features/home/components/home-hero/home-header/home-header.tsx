import type { HomeContent } from '@/types';
import { TitleBlock } from '@/components/ui/title-block';

type HomeHeaderProps = {
  content: HomeContent;
};

export function HomeHeader({ content }: HomeHeaderProps) {
  const { surtitle, title, tagline } = content;
  return (
    <header className="p-(--container-padding-x)">
      <TitleBlock
        surtitle={surtitle}
        title={title}
        tagline={tagline}
        size="hero-desktop"
        theme="light"
      />
    </header>
  );
}
