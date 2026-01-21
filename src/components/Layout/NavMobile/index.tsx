import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Briefcase, Code, MessageCircle } from 'lucide-react';
import { NAVBAR_LIST } from '@/components/Layout/Header/constant';
import NavMobileStyle from './style';
import { theme } from '@/theme';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const NavMobile = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const getIcon = (key: string) => {
    switch (key) {
      case 'home':
        return <Home color={theme.colors.secondary} size={34} />;
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

  // Reorder navigation: about, experience, HOME, portfolio, contact
  const reorderedNavList = [
    NAVBAR_LIST.find((item) => item.key === 'about'),
    NAVBAR_LIST.find((item) => item.key === 'experience'),
    NAVBAR_LIST.find((item) => item.key === 'home'),
    NAVBAR_LIST.find((item) => item.key === 'portfolio'),
    NAVBAR_LIST.find((item) => item.key === 'contact'),
  ].filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <NavMobileStyle>
      <div className="nav-mobile">
        {reorderedNavList.map((item) => (
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
            <span className="nav-label">{t(`navigation.${item.key}`)}</span>
          </Link>
        ))}
      </div>
    </NavMobileStyle>
  );
};

export default NavMobile;
