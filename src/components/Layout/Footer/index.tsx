'use client';

import Link from 'next/link';
import { Github, Instagram, Linkedin } from 'lucide-react';
import FooterStyle from './style';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <FooterStyle>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">SR</span>
          <p className="footer-tagline">{t('home.subtitle')}</p>
        </div>

        <div className="footer-links">
          <Link href="/about">{t('navigation.about')}</Link>
          <Link href="/portfolio">{t('navigation.portfolio')}</Link>
          <Link href="/experience">{t('navigation.experience')}</Link>
          <Link href="/games">{t('navigation.games')}</Link>
        </div>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/swizaesarreza/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://github.com/Swizaesar-reza-ryann"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/swizaesar-reza-ryann-05bb4a160/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {year} Swizaesar Reza Ryann. {t('footer.rights')}
        </p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
