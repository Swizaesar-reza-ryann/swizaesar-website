import { ReactNode } from 'react';
import Header from './Header';
import { Global } from '@emotion/react';
import { globalStyle, LayoutStyle } from './style';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
      <LayoutStyle>
        <div className="blur-circle blur-circle-top" />
        <div className="blur-circle blur-circle-bottom" />
        {children}
      </LayoutStyle>
    </div>
  );
};

export default Layout;
