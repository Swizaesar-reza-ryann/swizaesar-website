export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames = {
  en: 'English',
  id: 'Bahasa',
} as const;

export const localeFlags = {
  en: '🇺🇸',
  id: '🇮🇩',
} as const;
