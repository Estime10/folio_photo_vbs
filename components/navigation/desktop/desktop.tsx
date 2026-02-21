'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { t } from '@/lib/i18n/i18n';
import type { Locale } from '@/lib/i18n/messages/messages';
import { navigationItems } from '@/components/navigation/navigation-item/navigation-items';
import { ActiveNavigation } from '@/components/animations/active-navigation/active-navigation';

type DesktopNavProps = {
  locale: Locale;
};

const linkBase =
  'relative z-10 text-sm md:text-lg font-medium tracking-wide text-foreground/90 uppercase transition-colors lg:hover:text-foreground';

export function DesktopNav({ locale }: DesktopNavProps) {
  const pathname = usePathname();
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const activeIndex = navigationItems.findIndex((item) => pathname === item.href);

  return (
    <nav className="relative flex items-center gap-6 md:gap-8" aria-label="Navigation principale">
      {navigationItems.map((item, i) => (
        <Link
          key={item.href}
          ref={(el) => {
            linkRefs.current[i] = el;
          }}
          href={item.href}
          className={linkBase}
          aria-current={pathname === item.href ? 'page' : undefined}
        >
          {t(item.key, locale)}
        </Link>
      ))}
      <ActiveNavigation linkRefs={linkRefs} activeIndex={activeIndex} />
    </nav>
  );
}
