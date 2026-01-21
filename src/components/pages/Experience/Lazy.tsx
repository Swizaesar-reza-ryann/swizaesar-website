import LoadingPage from '@/components/Layout/LoadingPage';
import dynamic from 'next/dynamic';

const ExperiencePageLazy = dynamic(
  () =>
    import(/* webpackChunkName: "experience-page-lazy" */ './ExperiencePage'),
  {
    ssr: true,
    loading: () => (
      <LoadingPage
        message="Loading Experience"
        subtitle="Fetching your projects..."
      />
    ),
  }
);

export default ExperiencePageLazy;
