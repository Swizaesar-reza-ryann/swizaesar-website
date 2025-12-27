'use client';

import { CacheProvider, ThemeProvider, Global } from '@emotion/react';
import { ReactNode } from 'react';
import cache from '@/lib/emotion-cache';
import { theme } from '@/theme';
import globalStyle from './style';
import Header from '../UI/Header';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Header />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
