import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
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
        <div className="ambient-blob ambient-blob--primary" />
        <div className="ambient-blob ambient-blob--accent" />
        <div className="layout-content">{children}</div>
        {layout?.footer && <Footer />}
      </LayoutStyle>
    </div>
  );
};

export default Layout;
