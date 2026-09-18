import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CONTACT_LINK, NAVBAR_LIST } from './constant';
import HeaderStyle from './style';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <HeaderStyle className={isScrolled ? 'scrolled' : ''}>
      <div className="header-inner">
        <Link href="/" className="header-brand">
          <img
            src="/brand-mark.png"
            alt="Swizaesar"
            className="brand-mark"
            width={38}
            height={38}
          />
          <span className="brand-name">Swizaesar</span>
        </Link>

        <div className="header-actions">
          <nav className="header-list" aria-label="Main navigation">
            {NAVBAR_LIST.filter((item) => item.key !== 'contact').map(
              (item) => (
                <Link
                  key={item.key}
                  href={item.link}
                  className={isActive(item.link) ? 'active' : ''}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={
                    item.link.startsWith('http') ? 'noopener noreferrer' : ''
                  }
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ),
            )}
          </nav>

          <div className="header-cta">
            <LanguageSwitcher variant="inline" />
            <Button
              onClick={() => window.open(CONTACT_LINK, '_blank')}
              size="small"
              variant="primary"
            >
              {t('navigation.contact')}
            </Button>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
