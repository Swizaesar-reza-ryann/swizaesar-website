import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
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

export const metadata: Metadata = createMetadata('home');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <GoogleAnalytics />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
