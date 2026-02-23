import Link from 'next/link';
import { ROUTES } from '@/lib/navigation-routes/routes/routes';

type HomeMobileFooterProps = {
  tagline: string;
  galleryLabel: string;
  contactLabel: string;
};

export function HomeMobileFooter({ tagline, galleryLabel, contactLabel }: HomeMobileFooterProps) {
  return (
    <footer className="shrink-0 space-y-4 p-(--container-padding-x) pb-[calc(env(safe-area-inset-bottom,0px)+20px)] lg:pb-[calc(1.5rem-5px+50px+env(safe-area-inset-bottom,0px))]">
      <p className="whitespace-pre-line text-lg text-foreground/90 md:text-xl">{tagline}</p>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={ROUTES.gallery}
          className="rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90"
        >
          {galleryLabel}
        </Link>
        <Link
          href={ROUTES.contact}
          className="text-base font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {contactLabel}
        </Link>
      </div>
    </footer>
  );
}
