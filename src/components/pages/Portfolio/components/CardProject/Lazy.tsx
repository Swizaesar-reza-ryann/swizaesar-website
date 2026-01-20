import dynamic from 'next/dynamic';

const CardProjectLazy = dynamic(
  () => import(/* webpackChunkName: "card-project-lazy" */ './CardProject'),
  { ssr: false, loading: () => <div>Loading...</div> }
);

export default CardProjectLazy;
