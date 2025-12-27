/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import { NAVBAR_LIST } from './constant';
import headerStyle from './style';

const Header = () => {
  return (
    <nav css={headerStyle}>
      {NAVBAR_LIST.map((item) => (
        <Link key={item.key} href={item.link}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
