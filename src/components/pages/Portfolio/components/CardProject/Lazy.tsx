import dynamic from 'next/dynamic';

const CardProjectLazy = dynamic(
  () => import(/* webpackChunkName: "card-portfolio-lazy" */ './CardProject'),
  { ssr: true, loading: () => <div>Loading...</div> }
);

export default CardProjectLazy;
