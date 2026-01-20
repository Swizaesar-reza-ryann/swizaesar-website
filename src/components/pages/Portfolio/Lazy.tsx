import dynamic from 'next/dynamic';

const PortfolioPageLazy = dynamic(
  () => import(/* webpackChunkName: "portfolio-page-lazy" */ './PortfolioPage'),
  { ssr: true, loading: () => <div>Loading...</div> }
);

export default PortfolioPageLazy;
