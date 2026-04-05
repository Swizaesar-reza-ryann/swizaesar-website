import BlackholeLoader from '@/components/BlackholeLoader';
import dynamic from 'next/dynamic';

const HomePageLazy = dynamic(() => import('./HomePage'), {
  ssr: true,
  loading: () => <BlackholeLoader minDuration={2000} />,
});

export default HomePageLazy;
