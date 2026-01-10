import dynamic from 'next/dynamic';

const HomePageLazy = dynamic(
  () => import(/* webpackChunkName: "home-page-lazy" */ './HomePage'),
  { ssr: true, loading: () => <div>Loading...</div> }
);

export default HomePageLazy;
