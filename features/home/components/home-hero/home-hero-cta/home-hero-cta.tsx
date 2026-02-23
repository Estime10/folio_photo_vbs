import Link from 'next/link';
import { ROUTES } from '@/lib/navigation-routes/routes/routes';

type HomeHeroCtaProps = {
  galleryLabel: string;
  contactLabel: string;
  onContactClick?: () => void;
};

export function HomeHeroCta({ galleryLabel, contactLabel, onContactClick }: HomeHeroCtaProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 p-(--container-padding-x) lg:mt-8">
      <Link
        href={ROUTES.gallery}
        className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        {galleryLabel}
      </Link>
      {onContactClick != null ? (
        <button
          type="button"
          onClick={onContactClick}
          className="cursor-pointer text-sm font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {contactLabel}
        </button>
      ) : (
        <Link
          href={ROUTES.contact}
          className="cursor-pointer text-sm font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {contactLabel}
        </Link>
      )}
    </div>
  );
}
