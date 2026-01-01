import dynamic from 'next/dynamic';

const HomePageLazy = dynamic(
  () => import(/* webpackChunkName: "home-page-lazy" */ './HomePage'),
  { ssr: false }
);

export default HomePageLazy;
