'use client';

import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { theme } from '@/theme';
import { ScreenSizeProvider } from '@/context/ScreenContext';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import EmotionRegistry from '@/lib/emotion-registry';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <EmotionRegistry>
        <ThemeProvider theme={theme}>
          <ScreenSizeProvider isMobile={false}>
            <LanguageSwitcher />
            {children}
          </ScreenSizeProvider>
        </ThemeProvider>
      </EmotionRegistry>
    </LanguageProvider>
  );
}
