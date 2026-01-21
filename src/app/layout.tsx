import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import ClientProviders from '@/components/providers/ClientProviders';
import StylesReadyLoader from '@/components/StylesReadyLoader';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Swizaesar | Professional Web Development & Digital Solutions',
    template: '%s | Swizaesar',
  },
  description:
    'Swizaesar delivers professional web development, digital solutions, and innovative technology services. Transform your business with custom websites, applications, and cutting-edge digital strategies.',
  keywords: [
    'web development',
    'digital solutions',
    'technology services',
    'custom websites',
    'web applications',
    'digital transformation',
    'professional development',
  ],
  authors: [{ name: 'Swizaesar' }],
  creator: 'Swizaesar',
  publisher: 'Swizaesar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://swizaesar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swizaesar.com',
    title: 'Swizaesar | Professional Web Development & Digital Solutions',
    description:
      'Swizaesar delivers professional web development, digital solutions, and innovative technology services. Transform your business with custom websites, applications, and cutting-edge digital strategies.',
    siteName: 'Swizaesar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swizaesar | Professional Web Development & Digital Solutions',
    description:
      'Swizaesar delivers professional web development, digital solutions, and innovative technology services. Transform your business with custom websites, applications, and cutting-edge digital strategies.',
    creator: '@swizaesar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

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
        </ClientProviders>
      </body>
    </html>
  );
}
