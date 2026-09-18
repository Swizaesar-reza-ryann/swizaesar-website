'use client';

import Container from '@/components/Layout/Container';
import NotFoundStyle from './style';
import Link from 'next/link';
import { Home } from 'lucide-react';
import Layout from '@/components/Layout';
import { LAYOUT_NOT_FOUND } from './constant';
import { Reveal } from '@/components/shared/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const NotFoundPage = () => {
  const { t } = useLanguage();

  return (
    <Layout layout={LAYOUT_NOT_FOUND}>
      <Container>
        <Reveal y={20}>
          <NotFoundStyle>
            <h1 className="error-code">404</h1>
            <h2 className="error-message">{t('notFound.title')}</h2>
            <p className="error-description">{t('notFound.description')}</p>

            <div className="action-buttons">
              <Link href="/" className="btn primary">
                <Home size={16} />
                {t('notFound.goHome')}
              </Link>
            </div>
          </NotFoundStyle>
        </Reveal>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
