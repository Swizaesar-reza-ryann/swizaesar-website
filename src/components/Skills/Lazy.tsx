import dynamic from 'next/dynamic';

const SkillsLazy = dynamic(() => import('./Skills'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default SkillsLazy;
