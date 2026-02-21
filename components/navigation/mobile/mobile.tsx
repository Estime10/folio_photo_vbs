'use client';

import { useState, useCallback, useRef } from 'react';
import { t } from '@/lib/i18n/i18n';
import type { Locale } from '@/lib/i18n/messages/messages';
import {
  MobileMenuDropdown,
  type MobileMenuDropdownRef,
} from '@/components/animations/mobile-menu-dropdown/mobile-menu-dropdown';

type MobileNavProps = {
  locale: Locale;
};

export function MobileNav({ locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<MobileMenuDropdownRef>(null);
  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => {
    dropdownRef.current?.close();
  }, []);

  const handleCloseComplete = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={isOpen ? closeMenu : openMenu}
        className="cursor-default text-sm font-medium uppercase tracking-wide text-foreground focus:ring-0 md:text-lg"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? t('nav.close', locale) : 'Ouvrir le menu'}
      >
        {isOpen ? t('nav.close', locale) : 'Menu'}
      </button>
      {isOpen && (
        <MobileMenuDropdown
          ref={dropdownRef}
          isOpen={isOpen}
          onClose={handleCloseComplete}
          locale={locale}
        />
      )}
    </>
  );
}
