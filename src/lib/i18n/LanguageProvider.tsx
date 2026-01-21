'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Locale, defaultLocale, locales } from './config';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  const loadTranslations = async (locale: Locale) => {
    try {
      const response = await import(`./locales/${locale}.json`);
      setTranslations(response.default);
    } catch (error) {
      console.error(`Failed to load translations for ${locale}:`, error);
      // Fallback to default locale
      if (locale !== defaultLocale) {
        const fallback = await import(`./locales/${defaultLocale}.json`);
        setTranslations(fallback.default);
      }
    }
  };

  const setLocale = (newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      setLocaleState(newLocale);
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      loadTranslations(newLocale);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const tArray = (key: string): string[] => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return [key]; // Return key as array if translation not found
      }
    }

    return Array.isArray(value) ? value : [value];
  };

  useEffect(() => {
    // Get locale from cookie or browser
    const getLocaleFromCookie = (): Locale => {
      const match = document.cookie.match(/(?:^|; )NEXT_LOCALE=([^;]+)/);
      if (match) {
        const cookieLocale = match[1] as Locale;
        if (locales.includes(cookieLocale)) {
          return cookieLocale;
        }
      }

      // Fallback to browser language
      const browserLocale = navigator.language.split('-')[0] as Locale;
      return locales.includes(browserLocale) ? browserLocale : defaultLocale;
    };

    const detectedLocale = getLocaleFromCookie();
    setLocaleState(detectedLocale);
    loadTranslations(detectedLocale);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
