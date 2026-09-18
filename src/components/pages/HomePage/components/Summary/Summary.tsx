'use client';

import Button from '@/components/Button';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { downloadCV } from '@/utils/download';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { RevealStagger, RevealItem } from '@/components/shared/Reveal';
import CardDeveloper from '@/components/pages/HomePage/components/CardDeveloper';

const Summary = () => {
  const { t } = useLanguage();

  return (
    <RevealStagger>
      <RevealItem>
        <h3 className="summary-job">{t('home.role')}</h3>
      </RevealItem>

      <RevealItem>
        <h1 className="summary-name">
          {t('home.name')} <br />
          <span>{t('home.nameAccent')}</span>
        </h1>
      </RevealItem>

      <RevealItem>
        <p className="summary-description">{t('home.description')}</p>
      </RevealItem>

      <RevealItem className="card-developer--mobile">
        <CardDeveloper />
      </RevealItem>

      <RevealItem>
        <div className="summary-actions">
          <Button
            onClick={() => downloadCV(false)}
            size="large"
            className="summary-button"
          >
            {t('common.download_cv')}
          </Button>
          <Link href="/portfolio" className="summary-work">
            {t('home.view_work')}
          </Link>
        </div>
      </RevealItem>

      <RevealItem>
        <div className="summary-social__media">
          <Link href="https://www.instagram.com/swizaesarreza/" target="_blank">
            <Instagram size={28} />
          </Link>

          <Link href="https://github.com/Swizaesar-reza-ryann" target="_blank">
            <Github size={28} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/swizaesar-reza-ryann-05bb4a160/"
            target="_blank"
          >
            <Linkedin size={28} />
          </Link>
        </div>
      </RevealItem>
    </RevealStagger>
  );
};

export default Summary;
