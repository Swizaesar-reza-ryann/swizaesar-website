'use client';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { CONTACT_LINK } from '@/components/Layout/Header/constant';
import { FloatingChatStyle } from './style';

const FloatingChatButton = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    window.open(CONTACT_LINK, '_blank');
  };

  return (
    <FloatingChatStyle
      type="button"
      onClick={handleClick}
      aria-label={t('navigation.contact')}
    >
      <MessageCircle size={24} />
    </FloatingChatStyle>
  );
};

export default FloatingChatButton;
