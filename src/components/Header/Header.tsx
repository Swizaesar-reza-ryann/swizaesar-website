import Link from 'next/link';
import { NAVBAR_LIST } from './constant';

const Header = () => {
  return (
    <div>
      <div>
        {NAVBAR_LIST.map((item) => (
          <Link key={item.key} href={item.link}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
