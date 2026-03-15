import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import { StoryHeader } from './components/story-header/story-header';
import type { StoryContent } from '@/types';

type StoryProps = {
  content: StoryContent;
};

export function Story({ content }: StoryProps) {
  return (
    <Container>
      {/* En md : scroll sur la BlurCard. En lg : pas de scroll, Vision occupe la hauteur, Passion en dessous. */}
      <BlurCard className="flex h-full w-full min-h-0 flex-col overflow-y-auto lg:overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col p-(--container-padding-x)">
          <StoryHeader content={content} />
        </div>
      </BlurCard>
    </Container>
  );
}
