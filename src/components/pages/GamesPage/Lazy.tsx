import LoadingPage from '@/components/Layout/LoadingPage';
import dynamic from 'next/dynamic';

const GamesPageLazy = dynamic(() => import('./GamesPage'), {
  ssr: true,
  loading: () => (
    <LoadingPage
      message="Loading Games"
      subtitle="Preparing your memory game..."
    />
  ),
});

export default GamesPageLazy;
