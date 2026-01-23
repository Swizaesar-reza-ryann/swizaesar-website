import dynamic from 'next/dynamic';
import LoadingPage from '@/components/Layout/LoadingPage';

const PortfolioDetailLazy = dynamic(() => import('./PortfolioDetail'), {
  ssr: true,
  loading: () => (
    <LoadingPage
      message="Loading Project Details"
      subtitle="Fetching project information..."
    />
  ),
});

export default PortfolioDetailLazy;
