import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CONTACT_LINK, NAVBAR_LIST } from './constant';
import HeaderStyle from './style';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

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

  const isActive = (path: string) => pathname === path;

  return (
    <HeaderStyle className={isScrolled ? 'scrolled' : ''}>
      <div className="header-inner">
        <Link href="/" className="header-brand">
          <span className="brand-mark">SR</span>
          <span className="brand-name">Swizaesar</span>
        </Link>

        <nav className="header-list" aria-label="Main navigation">
          {NAVBAR_LIST.filter((item) => item.key !== 'contact').map((item) => (
            <Link
              key={item.key}
              href={item.link}
              className={isActive(item.link) ? 'active' : ''}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              {t(`navigation.${item.key}`)}
            </Link>
          ))}
          <Button
            onClick={() => window.open(CONTACT_LINK, '_blank')}
            size="small"
            variant="primary"
          >
            {t('navigation.contact')}
          </Button>
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
