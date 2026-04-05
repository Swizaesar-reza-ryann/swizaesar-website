import BlackholeLoader from '@/components/BlackholeLoader';
import dynamic from 'next/dynamic';

const GamesPageLazy = dynamic(() => import('./GamesPage'), {
  ssr: true,
  loading: () => <BlackholeLoader minDuration={1500} />,
});

export default GamesPageLazy;
