import { getLocaleFromRequest } from '@/lib/i18n/server';
import { Header } from '@/components/header/header';
import { ContainerEnter } from '@/components/animations/container-enter/container-enter';
import { PageTransition } from '@/components/animations/page-transition/page-transition';
import { PageTransitionProvider } from '@/components/animations/page-transition-context/page-transition-context';

export default async function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromRequest();

  return (
    <PageTransitionProvider>
      <Header locale={locale} />
      <ContainerEnter className="min-h-0 flex-1 overflow-hidden">
        <PageTransition className="flex flex-col">{children}</PageTransition>
      </ContainerEnter>
    </PageTransitionProvider>
  );
}
