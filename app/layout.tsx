import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Syne } from 'next/font/google';
import { getLocaleFromRequest } from '@/lib/i18n/server';
import { t } from '@/lib/i18n';
import './globals.css';

const syne = Syne({
  variable: '--font-suisse-intl',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromRequest();
  return {
    title: t('meta.title', locale),
    description: t('meta.description', locale),
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  viewportFit: 'cover',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${syne.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
