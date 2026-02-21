import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Header } from '@/components/header/header';

export default async function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromRequest();

  return (
    <>
      <Header locale={locale} />
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </>
  );
}
