import dynamic from 'next/dynamic';

const ExperienceListLazy = dynamic(
  () =>
    import(/* webpackChunkName: "experience-list-lazy" */ './ExperienceList'),
  { ssr: true, loading: () => <div>Loading...</div> }
);

export default ExperienceListLazy;
