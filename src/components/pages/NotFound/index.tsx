'use client';

import Container from '@/components/Layout/Container';
import NotFoundStyle from './style';
import Link from 'next/link';
import { Home } from 'lucide-react';
import Layout from '@/components/Layout';
import { LAYOUT_NOT_FOUND } from './constant';
import { Reveal } from '@/components/shared/Reveal';

const NotFoundPage = () => {
  return (
    <Layout layout={LAYOUT_NOT_FOUND}>
      <Container>
        <Reveal y={20}>
          <NotFoundStyle>
            <h1 className="error-code">404</h1>
            <h2 className="error-message">Page Not Found</h2>
            <p className="error-description">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Don&apos;t worry, let&apos;s get you back on track.
            </p>

            <div className="action-buttons">
              <Link href="/" className="btn primary">
                <Home size={16} />
                Go Home
              </Link>
            </div>
          </NotFoundStyle>
        </Reveal>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
