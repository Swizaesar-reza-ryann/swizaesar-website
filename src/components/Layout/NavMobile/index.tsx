import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Briefcase, Code, Gamepad2 } from 'lucide-react';
import { NAVBAR_LIST } from '@/components/Layout/Header/constant';
import NavMobileStyle from './style';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const NavMobile = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const getIcon = (key: string, isActiveItem: boolean) => {
    const size = key === 'home' ? 22 : 20;

    switch (key) {
      case 'home':
        return <Home size={size} color={isActiveItem ? '#fff' : undefined} />;
      case 'about':
        return <User size={size} />;
      case 'experience':
        return <Briefcase size={size} />;
      case 'portfolio':
        return <Code size={size} />;
      case 'games':
        return <Gamepad2 size={size} />;
      default:
        return <Home size={size} />;
    }
  };

  const isActive = (path: string) => pathname === path;

  const reorderedNavList = [
    NAVBAR_LIST.find((item) => item.key === 'about'),
    NAVBAR_LIST.find((item) => item.key === 'experience'),
    NAVBAR_LIST.find((item) => item.key === 'home'),
    NAVBAR_LIST.find((item) => item.key === 'portfolio'),
    NAVBAR_LIST.find((item) => item.key === 'games'),
  ].filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <NavMobileStyle aria-label="Mobile navigation">
      <div className="nav-mobile">
        {reorderedNavList.map((item) => {
          const active = isActive(item.link);
          return (
            <Link
              key={item.key}
              href={item.link}
              className={`nav-item ${active ? 'active' : ''} ${
                item.key === 'home' ? 'home-item' : ''
              }`}
            >
              <div className="nav-icon">{getIcon(item.key, active)}</div>
              <span className="nav-label">{t(`navigation.${item.key}`)}</span>
            </Link>
          );
        })}
      </div>
    </NavMobileStyle>
  );
};

export default NavMobile;
