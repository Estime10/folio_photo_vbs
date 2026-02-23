const PORTFOLIO_LABEL = 'portfolio';

type HeroTitleBlockProps = {
  title: string;
  tagline?: string;
  variant: 'desktop' | 'mobile';
  className?: string;
};

/**
 * Bloc partagé : libellé "portfolio" + titre (+ tagline optionnel).
 * Variant desktop = tailles titre 3xl→6xl + tagline ; mobile = tailles 4xl→6xl, pas de tagline.
 */
export function HeroTitleBlock({
  title,
  tagline,
  variant,
  className = '',
}: HeroTitleBlockProps) {
  const isDesktop = variant === 'desktop';
  return (
    <div className={className}>
      <p className="text-left text-base font-medium uppercase tracking-wider text-foreground/70">
        {PORTFOLIO_LABEL}
      </p>
      <h1
        className={
          isDesktop
            ? 'mt-1 whitespace-pre-line text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl xl:text-6xl'
            : 'mt-1 whitespace-pre-line text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl'
        }
      >
        {title}
      </h1>
      {isDesktop && tagline != null ? (
        <p className="mt-2 whitespace-pre-line text-base text-foreground/90 md:text-lg lg:mt-3 lg:text-xl">
          {tagline}
        </p>
      ) : null}
    </div>
  );
}
