'use client';

import type { TestimonialLocale } from '@/types/testimonial';
import { useTestimonialCarousel } from '@/components/animations/testimonial-carousel/use-testimonial-carousel';
import { FooterArrow } from './components/footer-arrow/footer-arrow';
import { FooterTestimonialCard } from './components/footer-testimonial-card/footer-testimonial-card';

type HomeFooterProps = {
  locale: TestimonialLocale;
};

/**
 * Contenu du notch (rendu par BlurCard dans la zone encoche).
 * Découpé en trois zones : gauche 15 %, centre 70 %, droite 15 %.
 * Logique carousel (ordre aléatoire, auto-play, transition GSAP) dans useTestimonialCarousel.
 */
export function HomeFooter({ locale }: HomeFooterProps) {
  const {
    shuffled,
    currentIndex,
    currentTestimonial,
    count,
    contentRef,
    goToPrevious,
    goToNext,
    goToIndex,
  } = useTestimonialCarousel();

  return (
    <div className="grid h-full w-full grid-cols-[15%_70%_15%] overflow-hidden rounded-b-none rounded-l-none border border-white/15 bg-white/6 backdrop-blur-xs backdrop-saturate-150">
      <FooterArrow direction="left" onClick={goToPrevious} />
      <div className="flex min-w-0 flex-col items-center justify-center gap-2 p-2">
        <div className="min-h-0 flex-1 overflow-hidden">
          <div ref={contentRef} className="h-full w-full">
            {currentTestimonial != null ? (
              <FooterTestimonialCard testimonial={currentTestimonial} locale={locale} />
            ) : null}
          </div>
        </div>
        <div
          className="flex shrink-0 items-center justify-center gap-1.5"
          role="tablist"
          aria-label="Témoignages"
        >
          {shuffled.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Témoignage ${index + 1} sur ${count}`}
              className={`h-2 w-2 shrink-0 rounded-full transition-colors ${index === currentIndex ? 'bg-foreground' : 'bg-foreground/30'}`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      </div>
      <FooterArrow direction="right" onClick={goToNext} />
    </div>
  );
}
