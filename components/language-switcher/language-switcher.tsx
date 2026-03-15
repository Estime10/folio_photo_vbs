'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { type Locale, LOCALE_COOKIE_NAME } from '@/lib/i18n';

const LOCALES: { value: Locale; label: string }[] = [
  { value: 'fr', label: 'FR' },
  { value: 'en', label: 'EN' },
  { value: 'nl', label: 'NL' },
];

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

const itemBase =
  'px-3 py-1.5 text-sm font-medium transition-colors rounded cursor-default lg:cursor-pointer lg:hover:bg-foreground/5';
const activeClass =
  'cursor-default rounded-lg bg-foreground/10 text-foreground/70 lg:hover:bg-foreground/10';

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open, close]);

  function handleSelect(locale: Locale) {
    setLocaleCookie(locale);
    router.refresh();
  }

  return (
    <div ref={ref} className="relative z-9999 flex items-center">
      <div className="absolute right-10 top-0 flex h-full items-center overflow-hidden">
        <div
          className={`flex items-center gap-1 transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {LOCALES.map(({ value, label }) => {
            const isActive = value === currentLocale;

            if (isActive) {
              return (
                <span key={value} aria-current="true" className={`${itemBase} ${activeClass}`}>
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
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-default items-center justify-center rounded outline-none ring-foreground/20 focus:ring-2 lg:cursor-pointer"
        aria-expanded={open}
        aria-label="Changer la langue"
      >
        <Globe className="h-5 w-5 text-foreground/90 transition-colors lg:hover:text-foreground" />
      </button>
    </div>
  );
}
