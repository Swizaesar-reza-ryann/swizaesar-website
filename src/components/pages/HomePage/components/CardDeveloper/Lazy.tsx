import dynamic from 'next/dynamic';

const CardDeveloperLazy = dynamic(
    () => import(/* webpackChunkName: "card-developer-lazy" */ './CardDeveloper'),
    { ssr: true, loading: () => <div>Loading...</div> }
  );

  export default CardDeveloperLazy;