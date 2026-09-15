import type { Metadata } from 'next';
import { Instrument_Serif, Montserrat } from 'next/font/google';
import ClientProviders from '@/components/providers/ClientProviders';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { createMetadata } from '@/lib/seo/metadata-config';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
});

export const metadata: Metadata = createMetadata('home');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <GoogleAnalytics />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
