import Link from 'next/link';
import { NAVBAR_LIST } from './constant';
import HeaderStyle from './style';
import Button from '@/components/Button';

const Header = () => {
  return (
    <HeaderStyle>
      <div className="header-list">
        {NAVBAR_LIST.map((item) => (
          <Link key={item.key} href={item.link}>
            {item.label}
          </Link>
        ))}
        <Button size="small">Let's Chat</Button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
