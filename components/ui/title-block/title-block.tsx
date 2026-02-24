type TitleBlockSize = 'hero-desktop' | 'hero-mobile' | 'page';
type TitleBlockTheme = 'light' | 'dark';

type TitleBlockProps = {
  /** Label au-dessus du titre (ex. "Portfolio", "À propos"). */
  surtitle?: string;
  /** Titre principal. */
  title: string;
  /** Sous-titre ou accroche sous le titre. En size hero-desktop, masqué en dessous de md. */
  tagline?: string;
  /** Échelle typographique : hero-desktop (titre 3xl→6xl + tagline), hero-mobile (4xl→6xl), page (2xl→3xl). */
  size: TitleBlockSize;
  /** light = texte clair sur fond sombre (foreground), dark = texte sombre sur fond clair (black). */
  theme: TitleBlockTheme;
  className?: string;
};

const SURTITLE_SIZE_CLASSES: Record<TitleBlockSize, string> = {
  'hero-desktop': 'text-base',
  'hero-mobile': 'text-base',
  page: 'text-sm',
};

const TITLE_SIZE_CLASSES: Record<TitleBlockSize, string> = {
  'hero-desktop':
    'whitespace-pre-line text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl xl:text-6xl',
  'hero-mobile': 'whitespace-pre-line text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl',
  page: 'text-2xl font-medium tracking-tight md:text-3xl',
};

const THEME_SURTITLE: Record<TitleBlockTheme, string> = {
  light: 'text-foreground/70',
  dark: 'text-black/70',
};

const THEME_TITLE: Record<TitleBlockTheme, string> = {
  light: 'text-foreground',
  dark: 'text-black',
};

const THEME_TAGLINE: Record<TitleBlockTheme, string> = {
  light: 'text-foreground/90',
  dark: 'text-black/90',
};

/**
 * Bloc titre réutilisable : surtitle (optionnel) + title + tagline (optionnel).
 * Utilisé sur Home (hero), Story, et toute page avec le même pattern.
 */
export function TitleBlock({
  surtitle,
  title,
  tagline,
  size,
  theme,
  className = '',
}: TitleBlockProps) {
  const showTagline = tagline != null;
  const taglineHiddenBelowMd = size === 'hero-desktop' && showTagline;

  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      {surtitle != null ? (
        <p
          className={`text-left font-medium uppercase tracking-wider ${SURTITLE_SIZE_CLASSES[size]} ${THEME_SURTITLE[theme]}`}
        >
          {surtitle}
        </p>
      ) : null}
      <h1 className={`text-left ${TITLE_SIZE_CLASSES[size]} ${THEME_TITLE[theme]}`}>{title}</h1>
      {showTagline ? (
        <p
          className={`whitespace-pre-line text-base md:text-lg lg:text-xl ${THEME_TAGLINE[theme]} ${taglineHiddenBelowMd ? 'max-md:hidden' : ''}`}
        >
          {tagline}
        </p>
      ) : null}
    </div>
  );
}
