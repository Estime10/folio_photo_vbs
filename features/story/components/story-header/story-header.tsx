import type { StoryContent } from '@/types/story';
import { TitleBlock } from '@/components/ui/title-block';
import { GLASS_CLASSES } from '@/components/blur-card/blur-card';
import { StoryBodyText } from '../story-body-text/story-body-text';

const STORY_CARD_CLASSES = `${GLASS_CLASSES} flex min-w-0 flex-col p-(--container-padding-x) lg:min-h-0 lg:flex-1 lg:overflow-hidden`;

type StoryHeaderProps = {
  content: StoryContent;
};

export function StoryHeader({ content }: StoryHeaderProps) {
  const { surtitle, titleVision, titlePassion, visionBody, passionBody } = content;
  return (
    <>
      <p className="text-left text-sm font-medium uppercase tracking-wider text-foreground/70">
        {surtitle}
      </p>
      {/* En md : deux cartes empilées, BlurCard scrollable. En lg+ : deux colonnes côte à côte, scroll interne par carte. */}
      <div className="mt-6 flex flex-col gap-6 lg:min-h-0 lg:flex-1 lg:flex-row lg:gap-8">
        <div className={STORY_CARD_CLASSES}>
          <TitleBlock title={titleVision} size="page" theme="light" className="shrink-0" />
          <div className="mt-4 min-h-0 flex-1 overflow-y-auto">
            <StoryBodyText text={visionBody} />
          </div>
        </div>
        <div className={STORY_CARD_CLASSES}>
          <TitleBlock title={titlePassion} size="page" theme="light" className="shrink-0" />
          <div className="mt-4 min-h-0 flex-1 overflow-y-auto">
            <StoryBodyText text={passionBody} />
          </div>
        </div>
      </div>
    </>
  );
}
