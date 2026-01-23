'use client';

import GamesPage from '@/components/pages/GamesPage/Lazy';
import Layout from '@/components/Layout';
import { DEFAULT_LAYOUT } from '@/components/Layout/constant';

const Games = () => {
  return (
    <Layout layout={DEFAULT_LAYOUT}>
      <GamesPage />
    </Layout>
  );
};

export default Games;
