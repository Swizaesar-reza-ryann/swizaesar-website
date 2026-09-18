'use client';

import Link from 'next/link';
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import FooterStyle from './style';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { CONTACT_LINK } from '@/components/Layout/Header/constant';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <FooterStyle>
      <div className="footer-glow" aria-hidden />

      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-brand__lockup">
            <img
              src="/brand-mark.png"
              alt=""
              className="footer-mark"
              width={40}
              height={40}
            />
            <span className="footer-brand__name">Swizaesar</span>
          </Link>
          <p className="footer-role">{t('home.role')}</p>
          <p className="footer-tagline">{t('footer.tagline')}</p>
        </div>

        <div className="footer-aside">
          <nav className="footer-links" aria-label="Footer">
            <Link href="/about">{t('navigation.about')}</Link>
            <Link href="/portfolio">{t('navigation.portfolio')}</Link>
            <Link href="/experience">{t('navigation.experience')}</Link>
            <Link href="/games">{t('navigation.games')}</Link>
          </nav>

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
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {year} Swizaesar Reza Ryann. {t('footer.rights')}
        </p>
        <a
          href={CONTACT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-chat"
        >
          <MessageCircle size={16} />
          {t('navigation.contact')}
        </a>
      </div>
    </FooterStyle>
  );
};

export default Footer;
