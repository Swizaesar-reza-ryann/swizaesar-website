import Link from 'next/link';
import { NAVBAR_LIST } from './constant';
import HeaderStyle from './style';

const Header = () => {
  return (
    <HeaderStyle>
      {NAVBAR_LIST.map((item) => (
        <Link key={item.key} href={item.link}>
          {item.label}
        </Link>
      ))}
    </HeaderStyle>
  );
};

export default Header;
