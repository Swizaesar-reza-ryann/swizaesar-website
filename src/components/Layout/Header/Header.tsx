import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NAVBAR_LIST } from './constant';
import HeaderStyle from './style';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  console.log('pathname', pathname);
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
        {NAVBAR_LIST.map((item) => (
          <Link
            key={item.key}
            href={item.link}
            className={isActive(item.link) ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
        <Button size="small" variant="primary">
          Let's Chat
        </Button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
