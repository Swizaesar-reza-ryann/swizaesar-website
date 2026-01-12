import dynamic from 'next/dynamic';

const SkillsLazy = dynamic(
  () => import(/* webpackChunkName: "skills-lazy" */ './Skills'),
  { ssr: false, loading: () => <div>Loading...</div> }
);

export default SkillsLazy;
