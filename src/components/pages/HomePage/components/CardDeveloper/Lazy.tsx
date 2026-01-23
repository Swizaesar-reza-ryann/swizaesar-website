import dynamic from 'next/dynamic';

const CardDeveloperLazy = dynamic(() => import('./CardDeveloper'), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

export default CardDeveloperLazy;
