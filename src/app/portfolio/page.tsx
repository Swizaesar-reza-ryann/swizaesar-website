'use client';

import Layout from '@/components/Layout';
import PortfolioPage from '@/components/pages/Portfolio';
import { DEFAULT_LAYOUT } from '@/components/Layout/constant';

const Portfolio = () => {
  return (
    <Layout layout={DEFAULT_LAYOUT}>
      <PortfolioPage />
    </Layout>
  );
};

export default Portfolio;
