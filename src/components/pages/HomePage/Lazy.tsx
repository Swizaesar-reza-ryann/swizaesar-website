import dynamic from 'next/dynamic';

const HomePageLazy = dynamic(
  () => import(/* webpackChunkName: "home-page-lazy" */ './HomePage'),
  { ssr: true }
);

export default HomePageLazy;
