'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import {
  LanguageSwitcherContainer,
  LanguageToggle,
  LanguageOption,
} from './style';

type LanguageSwitcherProps = {
  variant?: 'fixed' | 'inline';
};

export default function LanguageSwitcher({
  variant = 'fixed',
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  const handleLanguageChange = () => {
    const newLocale = locale === 'en' ? 'id' : 'en';
    setLocale(newLocale);
  };

  return (
    <LanguageSwitcherContainer $variant={variant}>
      <LanguageToggle
        onClick={handleLanguageChange}
        active={locale as 'id' | 'en'}
        aria-label="Toggle language"
        type="button"
      >
        <LanguageOption active={locale === 'id'}>ID</LanguageOption>
        <LanguageOption active={locale === 'en'}>EN</LanguageOption>
      </LanguageToggle>
    </LanguageSwitcherContainer>
  );
}
