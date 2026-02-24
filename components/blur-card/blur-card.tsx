import type { CSSProperties, ReactNode } from 'react';

export const GLASS_CLASSES =
  'rounded-lg border border-white/20 bg-white/8 backdrop-blur-md backdrop-saturate-150';

export const GLASS_CLASSES_NO_BORDER =
  'rounded-lg bg-white/8 backdrop-blur-md backdrop-saturate-150';

/** Clip-path: encoche en bas à gauche (≈ 50% largeur, à partir de 55% hauteur). */
const NOTCH_BOTTOM_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 50% 55%, 0 55%, 0 0)';

/** Path SVG pour la bordure qui suit le contour (notch inclus). Même forme que le clip. */
const NOTCH_BORDER_PATH = 'M 0 0 L 100 0 L 100 100 L 50 100 L 50 55 L 0 55 Z';

/** Zone du notch : gauche, largeur 50%, hauteur 45% (de 55% à 100%). Au-dessus du contenu pour recevoir les clics. */
const NOTCH_SLOT_CLASSES =
  'absolute -bottom-2 -left-2 z-20 flex h-[46%] w-[50.5%] items-center justify-center p-2 ';

type BlurCardProps = {
  children: ReactNode;
  className?: string;
  /** Si true, la card a une encoche en bas à gauche (fond + bordure ne couvrent pas cette zone). */
  notchBottomLeft?: boolean;
  /** Contenu rendu dans la zone du notch (centré, avec padding). Ignoré si notchBottomLeft est false. */
  notchContent?: ReactNode;
};

/**
 * Carte type liquid glass iOS : backdrop-blur + fond semi-transparent + bordure légère.
 * Réutilisable partout où un effet verre dépoli est souhaité.
 */
export function BlurCard({
  children,
  className = '',
  notchBottomLeft = false,
  notchContent,
}: BlurCardProps) {
  if (notchBottomLeft) {
    const clipStyle = {
      clipPath: NOTCH_BOTTOM_LEFT_CLIP,
      WebkitClipPath: NOTCH_BOTTOM_LEFT_CLIP,
    } as CSSProperties;

    return (
      <div className={['relative overflow-hidden rounded-lg', className].filter(Boolean).join(' ')}>
        <div className="absolute inset-0" style={clipStyle} aria-hidden>
          <div className={`absolute inset-0 ${GLASS_CLASSES_NO_BORDER}`} />
        </div>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d={NOTCH_BORDER_PATH}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {notchContent != null ? <div className={NOTCH_SLOT_CLASSES}>{notchContent}</div> : null}
        <div className="relative z-10 flex min-h-0 flex-1">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={['overflow-hidden rounded-lg', GLASS_CLASSES, className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
}
