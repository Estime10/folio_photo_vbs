import { Container } from '@/components/container/container';

type HomeProps = {
  title: string;
};

export function Home({ title }: HomeProps) {
  return (
    <Container>
      <h1 className="text-left text-2xl font-medium tracking-tight text-foreground md:text-3xl">
        {title}
      </h1>
    </Container>
  );
}
