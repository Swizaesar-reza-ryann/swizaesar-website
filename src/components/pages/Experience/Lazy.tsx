import BlackholeLoader from '@/components/BlackholeLoader';
import dynamic from 'next/dynamic';

const ExperiencePageLazy = dynamic(() => import('./ExperiencePage'), {
  ssr: true,
  loading: () => <BlackholeLoader minDuration={1500} />,
});

export default ExperiencePageLazy;
