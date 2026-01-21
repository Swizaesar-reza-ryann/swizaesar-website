'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import {
  LanguageSwitcherContainer,
  LanguageToggle,
  LanguageOption,
} from './style';
import { useScreenSize } from '@/context/ScreenContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const isMobile = useScreenSize();

  const handleLanguageChange = () => {
    const newLocale = locale === 'en' ? 'id' : 'en';
    setLocale(newLocale);
  };

  return (
    <LanguageSwitcherContainer data-mobile={isMobile}>
      <LanguageToggle
        onClick={handleLanguageChange}
        active={locale as 'id' | 'en'}
        aria-label="Toggle language"
      >
        <LanguageOption active={locale === 'id'}>ID</LanguageOption>
        <LanguageOption active={locale === 'en'}>EN</LanguageOption>
      </LanguageToggle>
    </LanguageSwitcherContainer>
  );
}
