import dynamic from 'next/dynamic';

const HeaderLazy = dynamic(
  () => import(/* webpackChunkName: "header-lazy" */ './Header'),
  { ssr: false }
);
export default HeaderLazy;
