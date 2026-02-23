import { HeroTitleBlock } from '@/features/home/components/hero-title-block/hero-title-block';

type HomeMobileHeaderProps = {
  title: string;
};

export function HomeMobileHeader({ title }: HomeMobileHeaderProps) {
  return (
    <header className="shrink-0 p-(--container-padding-x) pt-[calc(1rem+5px)]">
      <HeroTitleBlock title={title} variant="mobile" />
    </header>
  );
}
