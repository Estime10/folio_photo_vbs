'use client';

import { FooterArrow } from './components/footer-arrow/footer-arrow';

/**
 * Contenu du notch (rendu par BlurCard dans la zone encoche).
 * Découpé en trois zones : gauche 15 %, centre 70 %, droite 15 %.
 */
export function HomeFooter() {
  return (
    <div className="grid h-full w-full grid-cols-[15%_70%_15%] overflow-hidden rounded-xs border border-white/20">
      <FooterArrow direction="left" />
      <div className="min-w-0" />
      <FooterArrow direction="right" />
    </div>
  );
}
