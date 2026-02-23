import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Header } from '@/components/header/header';
import { ContainerEnter } from '@/components/animations/container-enter/container-enter';
import { PageTransition } from '@/components/animations/page-transition/page-transition';

export default async function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromRequest();

  return (
    <>
      <Header locale={locale} />
      <ContainerEnter className="min-h-0 flex-1 overflow-hidden">
        <PageTransition className="flex flex-col">
          {children}
        </PageTransition>
      </ContainerEnter>
    </>
  );
}
