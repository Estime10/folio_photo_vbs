import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Header } from '@/components/header/header';
import { ContainerEnter } from '@/components/animations/container-enter/container-enter';

export default async function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromRequest();

  return (
    <>
      <Header locale={locale} />
      <ContainerEnter className="min-h-0 flex-1 overflow-hidden">{children}</ContainerEnter>
    </>
  );
}
