import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CONTACT_LINK, NAVBAR_LIST } from './constant';
import HeaderStyle from './style';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { useScreenSize } from '@/context/ScreenContext';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useScreenSize();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <HeaderStyle className={isScrolled ? 'scrolled' : ''}>
      <div className="header-list">
        {NAVBAR_LIST.filter((item) => isMobile || item.key !== 'contact').map(
          (item) => (
            <Link
              key={item.key}
              href={item.link}
              className={isActive(item.link) ? 'active' : ''}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              {item.label}
            </Link>
          )
        )}
        <Button
          onClick={() => window.open(CONTACT_LINK, '_blank')}
          size="small"
          variant="primary"
        >
          Let's Chat
        </Button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
