'use client';

import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import type { Locale } from '@/lib/i18n/messages/messages';
import { LOCALE_COOKIE_NAME } from '@/lib/i18n/locale/locale';
import { Dropdown } from '@/components/dropdown/dropdown';

const LOCALES: { value: Locale; label: string }[] = [
  { value: 'fr', label: 'FR' },
  { value: 'en', label: 'EN' },
  { value: 'nl', label: 'NL' },
];

const itemBase =
  'block w-full px-4 py-2 text-center text-sm transition-colors lg:hover:bg-foreground/5';
const activeClass =
  'cursor-default bg-foreground/10 text-foreground/70 lg:hover:bg-foreground/10 lg:hover:text-foreground/70';

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();

  function handleSelect(locale: Locale) {
    setLocaleCookie(locale);
    router.refresh();
  }

  return (
    <Dropdown
      trigger={
        <Globe
          className="h-5 w-5 text-foreground/90 transition-colors lg:hover:text-foreground"
          aria-hidden
        />
      }
    >
      {LOCALES.map(({ value, label }) => {
        const isActive = value === currentLocale;

        if (isActive) {
          return (
            <span
              key={value}
              aria-current="true"
              className={`${itemBase} ${activeClass}`}
            >
              {label}
            </span>
          );
        }

        return (
          <button
            key={value}
            type="button"
            onClick={() => handleSelect(value)}
            className={`${itemBase} text-foreground`}
          >
            {label}
          </button>
        );
      })}
    </Dropdown>
  );
}
