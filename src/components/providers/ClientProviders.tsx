'use client';

import { CacheProvider, ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import cache from '@/lib/emotion-cache';
import { theme } from '@/theme';
import { ScreenSizeProvider } from '@/context/ScreenContext';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <ScreenSizeProvider isMobile={false}>{children}</ScreenSizeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
