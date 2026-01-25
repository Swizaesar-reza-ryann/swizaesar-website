import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import ClientProviders from '@/components/providers/ClientProviders';
import StylesReadyLoader from '@/components/StylesReadyLoader';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import FloatingChatButton from '@/components/Layout/FloatingChatButton';
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
        <ClientProviders>
          <StylesReadyLoader
            fallback={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  background: '#09090b',
                  color: '#ffffff',
                  padding: 0,
                  margin: 0,
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '16px',
                }}
              >
                Loading...
              </div>
            }
          >
            {children}
          </StylesReadyLoader>
          <LanguageSwitcher />
          <FloatingChatButton />
        </ClientProviders>
      </body>
    </html>
  );
}
