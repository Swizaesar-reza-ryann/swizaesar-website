import dynamic from 'next/dynamic';

const PortfolioDetailLazy = dynamic(
  () =>
    import(
      /* webpackChunkName: "portfolio-detail-page-lazy" */ './PortfolioDetail'
    ),
  {
    ssr: true,
  }
);

export default PortfolioDetailLazy;
