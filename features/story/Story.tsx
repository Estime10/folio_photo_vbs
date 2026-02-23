import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';

type StoryProps = {
  title: string;
};

export function Story({ title }: StoryProps) {
  return (
    <Container>
      <BlurCard className="flex h-full w-full min-h-0 flex-col">
        <div className="p-(--container-padding-x)">
          <h1 className="text-left text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {title}
          </h1>
        </div>
      </BlurCard>
    </Container>
  );
}
