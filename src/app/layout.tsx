import type { Metadata } from 'next';
import Head from 'next/head';
import EmotionProvider from '@/components/EmotionProvider';
import Header from '@/components/Header';

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
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <EmotionProvider>
          <Header />
          {children}
        </EmotionProvider>
      </body>
    </html>
  );
}
