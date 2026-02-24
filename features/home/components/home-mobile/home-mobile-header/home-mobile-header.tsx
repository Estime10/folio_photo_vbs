import type { HomeContent } from '@/types/home';
import { TitleBlock } from '@/components/ui/title-block';

type HomeMobileHeaderProps = {
  content: HomeContent;
};

export function HomeMobileHeader({ content }: HomeMobileHeaderProps) {
  const { surtitle, title } = content;
  return (
    <header className="shrink-0 p-(--container-padding-x) pt-[calc(1rem+5px)]">
      <TitleBlock surtitle={surtitle} title={title} size="hero-mobile" theme="light" />
    </header>
  );
}
