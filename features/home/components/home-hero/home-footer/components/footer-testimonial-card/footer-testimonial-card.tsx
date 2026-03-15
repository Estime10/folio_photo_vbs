import type { Testimonial, TestimonialLocale } from '@/types';

type FooterTestimonialCardProps = {
  testimonial: Testimonial;
  locale: TestimonialLocale;
};

const MAX_RATING = 5;

export function FooterTestimonialCard({ testimonial, locale }: FooterTestimonialCardProps) {
  const { username, job, description, rating } = testimonial;
  const jobText = job[locale];
  const descriptionText = description[locale];

  return (
    <article className="flex h-full min-h-0 w-full flex-col justify-center gap-3 overflow-hidden px-3">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-medium text-foreground">{username}</p>
          <p className="truncate text-sm text-foreground/70">{jobText}</p>
        </div>
        <p
          className="shrink-0 text-base font-medium text-foreground"
          aria-label={`Note : ${rating} sur ${MAX_RATING}`}
        >
          {rating}/{MAX_RATING}
        </p>
      </div>
      <blockquote className="line-clamp-3 border-l-2 border-foreground/20 pl-3 text-sm italic text-foreground/90">
        {descriptionText}
      </blockquote>
    </article>
  );
}
