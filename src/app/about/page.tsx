'use client';

import AboutPage from '@/components/pages/About';
import Layout from '@/components/Layout';
import { DEFAULT_LAYOUT } from '@/components/Layout/constant';

const About = () => {
  return (
    <Layout layout={DEFAULT_LAYOUT}>
      <AboutPage />
    </Layout>
  );
};
export default About;
