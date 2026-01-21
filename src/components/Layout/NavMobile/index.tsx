import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Briefcase, Code, MessageCircle } from 'lucide-react';
import { NAVBAR_LIST } from '@/components/Layout/Header/constant';
import NavMobileStyle from './style';

const NavMobile = () => {
  const pathname = usePathname();

  const getIcon = (key: string) => {
    switch (key) {
      case 'home':
        return <Home size={20} />;
      case 'about':
        return <User size={20} />;
      case 'experience':
        return <Briefcase size={20} />;
      case 'portfolio':
        return <Code size={20} />;
      case 'contact':
        return <MessageCircle size={20} />;
      default:
        return <Home size={20} />;
    }
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isExternalLink = (link: string) => {
    return link.startsWith('http');
  };

  return (
    <NavMobileStyle>
      <div className="nav-mobile">
        {NAVBAR_LIST.map((item) => (
          <Link
            key={item.key}
            href={item.link}
            className={`nav-item ${isActive(item.link) ? 'active' : ''} ${
              item.key === 'home' ? 'home-item' : ''
            }`}
            target={isExternalLink(item.link) ? '_blank' : '_self'}
            rel={isExternalLink(item.link) ? 'noopener noreferrer' : ''}
          >
            <div className="nav-icon">{getIcon(item.key)}</div>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </NavMobileStyle>
  );
};

export default NavMobile;
