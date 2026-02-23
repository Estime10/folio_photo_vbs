import { HeroTitleBlock } from '@/features/home/components/hero-title-block/hero-title-block';

type HomeHeaderProps = {
  title: string;
  tagline: string;
};

export function HomeHeader({ title, tagline }: HomeHeaderProps) {
  return (
    <header className="p-(--container-padding-x)">
      <HeroTitleBlock title={title} tagline={tagline} variant="desktop" />
    </header>
  );
}
