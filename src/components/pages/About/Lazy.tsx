import LoadingPage from '@/components/Layout/LoadingPage';
import dynamic from 'next/dynamic';

const AboutPageLazy = dynamic(() => import('./AboutPage'), {
  ssr: true,
  loading: () => (
    <LoadingPage
      message="Loading About Page"
      subtitle="Fetching your projects..."
    />
  ),
});

export default AboutPageLazy;
