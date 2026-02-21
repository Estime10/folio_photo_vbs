'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRef, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { t } from '@/lib/i18n/i18n';
import type { Locale } from '@/lib/i18n/messages/messages';
import { LOCALE_COOKIE_NAME } from '@/lib/i18n/locale/locale';
import { navigationItems } from '@/components/navigation/navigation-item/navigation-items';

const LOCALES: { value: Locale; label: string }[] = [
  { value: 'fr', label: 'FR' },
  { value: 'en', label: 'EN' },
  { value: 'nl', label: 'NL' },
];

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

const OVERLAY_HEIGHT = '50vh';
const ANIMATION_DURATION = 0.6;

type MobileMenuDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
};

export type MobileMenuDropdownRef = {
  close: () => void;
};

export const MobileMenuDropdown = forwardRef<MobileMenuDropdownRef, MobileMenuDropdownProps>(
  function MobileMenuDropdown({ isOpen, onClose, locale }, ref) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();

    const close = useCallback(() => {
      if (!overlayRef.current) {
        onClose();
        return;
      }
      gsap.to(overlayRef.current, {
        height: 0,
        duration: ANIMATION_DURATION,
        ease: 'power2.in',
        overwrite: true,
        onComplete: onClose,
      });
    }, [onClose]);

    useImperativeHandle(ref, () => ({ close }), [close]);

    useEffect(() => {
      if (!overlayRef.current || !isOpen) return;
      gsap.fromTo(
        overlayRef.current,
        { height: 0 },
        {
          height: OVERLAY_HEIGHT,
          duration: ANIMATION_DURATION,
          ease: 'power2.out',
          overwrite: true,
        }
      );
    }, [isOpen]);

    if (typeof document === 'undefined') return null;

    return createPortal(
      <div
        ref={overlayRef}
        className="fixed left-0 right-0 top-(--header-total-height) z-9999 flex h-0 flex-col overflow-hidden bg-background/90 backdrop-blur-md"
        aria-modal="true"
        aria-label="Menu"
        role="dialog"
      >
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-6"
          aria-label="Navigation principale"
        >
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            if (isActive) {
              return (
                <span
                  key={item.href}
                  aria-current="page"
                  className="cursor-default uppercase text-foreground/50"
                >
                  {t(item.key, locale)}
                </span>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="uppercase text-foreground"
              >
                {t(item.key, locale)}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center justify-center gap-6 py-6">
          {LOCALES.map(({ value, label }) => {
            const isActive = value === locale;
            if (isActive) {
              return (
                <span
                  key={value}
                  aria-current="true"
                  className="cursor-default uppercase text-foreground/50"
                >
                  {label}
                </span>
              );
            }
            return (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setLocaleCookie(value);
                  router.refresh();
                  close();
                }}
                className="uppercase text-foreground"
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>,
      document.body
    );
  }
);
