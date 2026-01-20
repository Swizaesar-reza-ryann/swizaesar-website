import dynamic from 'next/dynamic';

const CardProjectLazy = dynamic(
  () => import(/* webpackChunkName: "card-project-lazy" */ './CardProject'),
  { ssr: true, loading: () => <div>Loading...</div> }
);

export default CardProjectLazy;
