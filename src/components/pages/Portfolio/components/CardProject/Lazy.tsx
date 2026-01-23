import dynamic from 'next/dynamic';
import LoadingPage from '@/components/Layout/LoadingPage';

const CardProjectLazy = dynamic(() => import('./CardProject'), {
  ssr: false,
});

export default CardProjectLazy;
