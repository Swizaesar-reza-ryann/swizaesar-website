'use client';

import { CacheProvider, Global, ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import cache from '@/lib/emotion-cache';
import { theme } from '@/theme';
import globalStyle from './style';

interface Props {
  children: ReactNode;
}

export default function EmotionProvider({ children }: Props) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
