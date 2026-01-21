import Button from '@/components/Button';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useScreenSize } from '@/context/ScreenContext';
import CardDeveloper from '@/components/pages/HomePage/components/CardDeveloper';
import { downloadCV } from '@/utils/download';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const Summary = () => {
  const isMobile = useScreenSize();
  const { t } = useLanguage();

  return (
    <>
      <h3 className="summary-job">{t('home.greeting')}</h3>

      <div>
        <h1 className="summary-name" data-mobile={isMobile}>
          {t('home.title')} <br />
          <span>{t('home.subtitle')}</span>
        </h1>
      </div>

      <p className="summary-description" data-mobile={isMobile}>
        {t('home.description')}
      </p>

      {isMobile && <CardDeveloper />}

      <Button
        onClick={() => downloadCV(false)}
        size="large"
        className="summary-button"
        data-mobile={isMobile}
      >
        {t('common.download_cv')}
      </Button>

      <div className="summary-social__media">
        <Link href="https://www.instagram.com/swizaesarreza/" target="_blank">
          <Instagram size={isMobile ? 24 : 32} />
        </Link>

        <Link href="https://github.com/Swizaesar-reza-ryann" target="_blank">
          <Github size={isMobile ? 24 : 32} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/swizaesar-reza-ryann-05bb4a160/"
          target="_blank"
        >
          <Linkedin size={isMobile ? 24 : 32} />
        </Link>
      </div>
    </>
  );
};

export default Summary;
