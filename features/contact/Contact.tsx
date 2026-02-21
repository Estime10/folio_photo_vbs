import { Container } from '@/components/container/container';

type ContactProps = {
  title: string;
};

export function Contact({ title }: ContactProps) {
  return (
    <Container>
      <h1 className="text-left text-2xl font-medium tracking-tight text-foreground md:text-3xl">
        {title}
      </h1>
    </Container>
  );
}
