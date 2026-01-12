import dynamic from 'next/dynamic';

const ExperiencePageLazy = dynamic(
    () => import(/* webpackChunkName: "experience-page-lazy" */ './ExperiencePage'),
    { ssr: true, loading: () => <div>Loading...</div> }
  );    

  export default ExperiencePageLazy;