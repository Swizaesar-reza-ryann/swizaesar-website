'use client';

import ExperiencePage from '@/components/pages/Experience';
import Layout from '@/components/Layout';
import { DEFAULT_LAYOUT } from '@/components/Layout/constant';

const Experience = () => {
  return (
    <Layout layout={DEFAULT_LAYOUT}>
      <ExperiencePage />
    </Layout>
  );
};

export default Experience;
