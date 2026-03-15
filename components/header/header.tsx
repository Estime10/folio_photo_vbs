'use client';

import { useRef, useContext } from 'react';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { logoNav } from '@/components/navigation/navigation-item/navigation-items';
import { Navigation } from '@/components/navigation/navigation';
import { LanguageSwitcher } from '@/components/language-switcher/language-switcher';
import { useHeaderEnter } from '@/components/animations/header-enter/use-header-enter';
import { PageTransitionContext } from '@/components/animations/page-transition-context/page-transition-context';
import { TransitionLink } from '@/components/animations/transition-link/transition-link';

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const ctx = useContext(PageTransitionContext);
  useHeaderEnter(headerRef, pathname);

  const setHeaderRef = (el: HTMLElement | null) => {
    (headerRef as React.MutableRefObject<HTMLElement | null>).current = el;
    ctx?.registerHeaderRef(el);
  };

  return (
    <header
      ref={setHeaderRef}
      className="grid h-(--header-height) w-full shrink-0 grid-cols-[auto_1fr] items-center px-(--container-padding-x) xl:grid-cols-[1fr_auto_1fr]"
    >
      <TransitionLink
        href={logoNav.href}
        className="text-sm font-medium uppercase tracking-wide text-foreground md:text-lg"
      >
        {logoNav.label}
      </TransitionLink>
      <div className="flex justify-end xl:justify-center">
        <Navigation locale={locale} />
      </div>
      <div className="hidden justify-end xl:flex">
        <LanguageSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
