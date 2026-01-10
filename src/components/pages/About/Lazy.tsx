import dynamic from 'next/dynamic';

const AboutPageLazy = dynamic(
  () => import(/* webpackChunkName: "about-page-lazy" */ './AboutPage'),
  { ssr: true, loading: () => <div>Loading...</div> }
);

export default AboutPageLazy;
