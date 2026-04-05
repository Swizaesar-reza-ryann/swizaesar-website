import dynamic from 'next/dynamic';
import BlackholeLoader from '@/components/BlackholeLoader';

const PortfolioPageLazy = dynamic(() => import('./PortfolioPage'), {
  ssr: true,
  loading: () => <BlackholeLoader minDuration={1500} />,
});

export default PortfolioPageLazy;
