import dynamic from 'next/dynamic';
import LoadingPage from '@/components/Layout/LoadingPage';

const PortfolioPageLazy = dynamic(() => import('./PortfolioPage'), {
  ssr: true,
  loading: () => (
    <LoadingPage
      message="Loading Portfolio"
      subtitle="Fetching your projects..."
    />
  ),
});

export default PortfolioPageLazy;
