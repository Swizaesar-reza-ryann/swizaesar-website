import BlackholeLoader from '@/components/BlackholeLoader';
import dynamic from 'next/dynamic';

const AboutPageLazy = dynamic(() => import('./AboutPage'), {
  ssr: true,
  loading: () => <BlackholeLoader minDuration={1500} />,
});

export default AboutPageLazy;
