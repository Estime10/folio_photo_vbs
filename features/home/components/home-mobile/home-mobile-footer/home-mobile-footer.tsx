import { HomeCtaButtons } from '@/features/home/components/home-cta-buttons/home-cta-buttons';

type HomeMobileFooterProps = {
  tagline: string;
  galleryLabel: string;
  contactLabel: string;
};

export function HomeMobileFooter({ tagline, galleryLabel, contactLabel }: HomeMobileFooterProps) {
  return (
    <footer className="shrink-0 space-y-4 p-(--container-padding-x) pb-[calc(env(safe-area-inset-bottom,0px)+20px)] lg:pb-[calc(1.5rem-5px+50px+env(safe-area-inset-bottom,0px))]">
      <p className="whitespace-pre-line text-lg text-foreground/90 md:text-xl">{tagline}</p>
      <HomeCtaButtons
        galleryLabel={galleryLabel}
        contactLabel={contactLabel}
        variant="mobile"
      />
    </footer>
  );
}
