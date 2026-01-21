import { ReactNode } from 'react';
import Header from './Header';
import { Global } from '@emotion/react';
import { globalStyle, LayoutStyle } from './style';
import { LayoutProps } from './types';
import NavMobile from './NavMobile';
import { useScreenSize } from '@/context/ScreenContext';

interface LayoutPropsType {
  children: ReactNode;
  layout?: LayoutProps;
}

const Layout = ({ children, layout }: LayoutPropsType) => {
  const isMobile = useScreenSize();
  return (
    <div>
      <Global styles={globalStyle} />
      {layout?.header && !isMobile && <Header />}

      {layout?.header && isMobile && <NavMobile />}

      <LayoutStyle data-mobile={isMobile}>
        <div className="blur-circle blur-circle-top" />
        <div className="blur-circle blur-circle-bottom" />
        {children}
      </LayoutStyle>
    </div>
  );
};

export default Layout;
