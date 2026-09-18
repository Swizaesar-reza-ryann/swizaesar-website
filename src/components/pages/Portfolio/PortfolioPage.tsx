'use client';

import Container from '@/components/Layout/Container';
import PortfolioPageStyle from './style';
import CardProject from './components/CardProject';
import { PORTFOLIO_LIST } from './constant';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import PageHeader from '@/components/shared/PageHeader';
import { Reveal } from '@/components/shared/Reveal';

const PortfolioPage = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <PortfolioPageStyle>
        <PageHeader
          title={t('portfolio.title')}
          subtitle={t('portfolio.subtitle')}
        />

        <div className="portfolio-grid">
          {PORTFOLIO_LIST.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index * 0.06, 0.3)} y={24}>
              <CardProject data={project} />
            </Reveal>
          ))}
        </div>
      </PortfolioPageStyle>
    </Container>
  );
};

export default PortfolioPage;
