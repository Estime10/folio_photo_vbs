type HomeHeaderProps = {
  title: string;
  tagline: string;
};

export function HomeHeader({ title, tagline }: HomeHeaderProps) {
  return (
    <header className="p-(--container-padding-x)">
      <h1 className="whitespace-pre-line text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h1>
      <p className="mt-2 whitespace-pre-line text-base text-foreground/90 md:text-lg lg:mt-3 lg:text-xl">
        {tagline}
      </p>
    </header>
  );
}
