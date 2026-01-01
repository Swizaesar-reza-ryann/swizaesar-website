'use client';

import { CacheProvider, ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import cache from '@/lib/emotion-cache';
import { theme } from '@/theme';
import Layout from '@/components/Layout';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
