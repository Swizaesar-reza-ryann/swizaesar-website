'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Locale, defaultLocale, locales } from './config';
import enTranslations from './locales/en.json';
import idTranslations from './locales/id.json';

const TRANSLATIONS: Record<Locale, Record<string, unknown>> = {
  en: enTranslations,
  id: idTranslations,
};

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
  const [translations, setTranslations] = useState<Record<string, unknown>>(
    TRANSLATIONS[defaultLocale]
  );

  const setLocale = (newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      setLocaleState(newLocale);
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      setTranslations(TRANSLATIONS[newLocale]);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const tArray = (key: string): string[] => {
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return [key];
      }
    }

    return Array.isArray(value) ? value : [String(value)];
  };

  useEffect(() => {
    const getLocaleFromCookie = (): Locale => {
      const match = document.cookie.match(/(?:^|; )NEXT_LOCALE=([^;]+)/);
      if (match) {
        const cookieLocale = match[1] as Locale;
        if (locales.includes(cookieLocale)) {
          return cookieLocale;
        }
      }

      const browserLocale = navigator.language.split('-')[0] as Locale;
      return locales.includes(browserLocale) ? browserLocale : defaultLocale;
    };

    const detectedLocale = getLocaleFromCookie();
    setLocaleState(detectedLocale);
    setTranslations(TRANSLATIONS[detectedLocale]);
  }, []);

  const contextValue = useMemo(
    () => ({ locale, setLocale, t, tArray }),
    [locale, translations]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
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
