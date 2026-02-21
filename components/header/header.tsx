import Link from 'next/link';
import { t } from '@/lib/i18n/i18n';
import type { Locale } from '@/lib/i18n/messages/messages';
import { logoNav } from '@/components/navigation/navigation-item/navigation-items';
import { Navigation } from '@/components/navigation/navigation';
import { LanguageSwitcher } from '@/components/language-switcher/language-switcher';

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  return (
    <header className="grid h-(--header-height) w-full grid-cols-[auto_1fr] items-center border-b border-foreground/10 px-(--container-padding-x) xl:grid-cols-[1fr_auto_1fr]">
      <Link
        href={logoNav.href}
        className="text-sm font-medium uppercase tracking-wide text-foreground md:text-lg"
      >
        {t(logoNav.titleKey, locale)}
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
