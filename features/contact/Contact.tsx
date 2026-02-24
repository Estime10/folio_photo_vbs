import { BlurCard } from '@/components/blur-card/blur-card';
import { Container } from '@/components/container/container';
import type { ContactContent } from '@/types/contact';

type ContactProps = {
  content: ContactContent;
};

export function Contact({ content }: ContactProps) {
  const { title } = content;
  return (
    <Container>
      <BlurCard className="flex h-full w-full min-h-0 flex-col">
        {/* Découpe en deux zones pour voir (à remplacer par le contenu réel) */}
        <div className="flex min-h-0 flex-1 flex-col xl:flex-row">
          <div className="flex min-h-0 flex-1 items-center justify-center bg-white p-(--container-padding-x) xl:items-start xl:justify-start">
            <h1 className="text-left text-2xl font-medium tracking-tight text-black md:text-3xl">
              {title}
            </h1>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center bg-black p-(--container-padding-x)" />
        </div>
      </BlurCard>
    </Container>
  );
}
