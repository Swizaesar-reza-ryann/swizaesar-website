'use client';

import Homepage from '@/components/pages/HomePage';
import Layout from '@/components/Layout';
import { DEFAULT_LAYOUT } from '@/components/Layout/constant';

const Home = () => {
  return (
    <Layout layout={DEFAULT_LAYOUT}>
      <Homepage />
    </Layout>
  );
};

export default Home;
