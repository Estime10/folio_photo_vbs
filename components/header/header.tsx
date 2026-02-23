'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/messages/messages';
import { logoNav } from '@/components/navigation/navigation-item/navigation-items';
import { Navigation } from '@/components/navigation/navigation';
import { LanguageSwitcher } from '@/components/language-switcher/language-switcher';
import { useHeaderEnter } from '@/components/animations/header-enter/use-header-enter';

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useHeaderEnter(headerRef, pathname);

  return (
    <header
      ref={headerRef}
      className="grid h-(--header-height) w-full shrink-0 grid-cols-[auto_1fr] items-center px-(--container-padding-x) xl:grid-cols-[1fr_auto_1fr]"
    >
      <Link
        href={logoNav.href}
        className="text-sm font-medium uppercase tracking-wide text-foreground md:text-lg"
      >
        {logoNav.label}
      </Link>
      <div className="flex justify-end xl:justify-center">
        <Navigation locale={locale} />
      </div>
      <div className="hidden justify-end xl:flex">
        <LanguageSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
