import { Container } from '@/components/container/container';

type GalleryProps = {
  title: string;
};

export function Gallery({ title }: GalleryProps) {
  return (
    <Container>
      <h1 className="text-left text-2xl font-medium tracking-tight text-foreground md:text-3xl">
        {title}
      </h1>
    </Container>
  );
}
