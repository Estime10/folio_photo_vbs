import type { Locale } from '@/lib/i18n/messages/messages';
import { DesktopNav } from '@/components/navigation/desktop/desktop';
import { MobileNav } from '@/components/navigation/mobile/mobile';

type NavigationProps = {
  locale: Locale;
};

export function Navigation({ locale }: NavigationProps) {
  return (
    <>
      <div className="block xl:hidden">
        <MobileNav locale={locale} />
      </div>
      <div className="hidden xl:block">
        <DesktopNav locale={locale} />
      </div>
    </>
  );
}
