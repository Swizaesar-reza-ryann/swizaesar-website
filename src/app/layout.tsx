import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import ClientProviders from '@/components/providers/ClientProviders';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Swizaesar',
  description: 'Generated Swizasear Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
