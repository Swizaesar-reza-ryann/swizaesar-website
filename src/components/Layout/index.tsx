import { ReactNode } from 'react';
import Header from './Header';
import { Global } from '@emotion/react';
import { globalStyle, LayoutStyle } from './style';
import { LayoutProps } from './types';

interface LayoutPropsType {
  children: ReactNode;
  layout?: LayoutProps;
}

const Layout = ({ children, layout }: LayoutPropsType) => {
  return (
    <div>
      <Global styles={globalStyle} />
      {layout?.header && <Header />}
      <LayoutStyle>
        <div className="blur-circle blur-circle-top" />
        <div className="blur-circle blur-circle-bottom" />
        {children}
      </LayoutStyle>
    </div>
  );
};

export default Layout;
