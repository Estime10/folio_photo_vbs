import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Syne } from 'next/font/google';
import { t } from '@/lib/i18n/i18n';
import { Header } from '@/components/header/header';
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

export const metadata: Metadata = {
  title: t('meta.title'),
  description: t('meta.description'),
};

export const viewport: Viewport = {
  width: 'device-width',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${syne.variable} ${geistMono.variable} flex flex-col antialiased`}
      >
        <Header />
        <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
