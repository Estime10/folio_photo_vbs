type HomeMobileHeaderProps = {
  title: string;
};

export function HomeMobileHeader({ title }: HomeMobileHeaderProps) {
  return (
    <header className="shrink-0 p-(--container-padding-x) pt-[calc(1rem+5px)]">
      <p className="text-left text-base font-medium uppercase tracking-wider text-foreground/70">
        portfolio
      </p>
      <h1 className="mt-1 whitespace-pre-line text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h1>
    </header>
  );
}
