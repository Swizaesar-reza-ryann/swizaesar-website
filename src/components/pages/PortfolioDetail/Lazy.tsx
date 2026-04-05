import dynamic from 'next/dynamic';
import BlackholeLoader from '@/components/BlackholeLoader';

const PortfolioDetailLazy = dynamic(() => import('./PortfolioDetail'), {
  ssr: true,
  loading: () => <BlackholeLoader minDuration={1500} />,
});

export default PortfolioDetailLazy;
