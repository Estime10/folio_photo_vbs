'use client';

import type { Locale } from '@/lib/i18n/messages/messages';

type MobileNavProps = {
  locale: Locale;
};

export function MobileNav({ locale: _locale }: MobileNavProps) {
  return (
    <span className="text-sm font-medium uppercase tracking-wide text-foreground md:text-lg">
      Menu
    </span>
  );
}
