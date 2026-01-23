import dynamic from 'next/dynamic';

const ExperienceListLazy = dynamic(() => import('./ExperienceList'), {
  ssr: true,
});

export default ExperienceListLazy;
