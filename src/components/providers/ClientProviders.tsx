'use client';

import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { theme } from '@/theme';
import { ScreenSizeProvider } from '@/context/ScreenContext';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import EmotionRegistry from '@/lib/emotion-registry';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <EmotionRegistry>
        <ThemeProvider theme={theme}>
          <ScreenSizeProvider isMobile={false}>{children}</ScreenSizeProvider>
        </ThemeProvider>
      </EmotionRegistry>
    </LanguageProvider>
  );
}
