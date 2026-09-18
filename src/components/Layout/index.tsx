import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Global } from '@emotion/react';
import { globalStyle, LayoutStyle } from './style';
import { LayoutProps } from './types';
import NavMobile from './NavMobile';
import NetworkBackground from './NetworkBackground';

interface LayoutPropsType {
  children: ReactNode;
  layout?: LayoutProps;
}

const Layout = ({ children, layout }: LayoutPropsType) => {
  return (
    <div>
      <Global styles={globalStyle} />
      {layout?.header && (
        <>
          <div className="layout-chrome layout-chrome--desktop">
            <Header />
          </div>
          <div className="layout-chrome layout-chrome--mobile">
            <NavMobile />
          </div>
        </>
      )}

      <LayoutStyle>
        <div className="site-bg" aria-hidden />
        <NetworkBackground />
        <div className="site-bg-veil" aria-hidden />
        <div className="ambient-blob ambient-blob--primary" aria-hidden />
        <div className="ambient-blob ambient-blob--accent" aria-hidden />
        <div className="planet planet--ring" aria-hidden>
          <img src="/assets/images/planet-ring.png" alt="" />
        </div>
        <div className="planet planet--moon" aria-hidden>
          <img src="/assets/images/planet-moon.png" alt="" />
        </div>
        <div className="film-grain" aria-hidden />
        <div className="layout-content">{children}</div>
        {layout?.footer && <Footer />}
      </LayoutStyle>
    </div>
  );
};

export default Layout;
