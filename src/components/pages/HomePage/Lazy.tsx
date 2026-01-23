import LoadingPage from '@/components/Layout/LoadingPage';
import dynamic from 'next/dynamic';

const HomePageLazy = dynamic(() => import('./HomePage'), {
  ssr: true,
  loading: () => (
    <LoadingPage
      message="Loading Home Page"
      subtitle="Fetching your projects..."
    />
  ),
});

export default HomePageLazy;
