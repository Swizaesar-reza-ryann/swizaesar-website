'use client';

import Container from '@/components/Layout/Container';
import PortfolioPageStyle from './style';
import CardProject from './components/CardProject';
import { Row, Column } from '@/components/Layout/Grid';
import { PORTFOLIO_LIST } from './constant';
import { useScreenSize } from '@/context/ScreenContext';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import PageHeader from '@/components/shared/PageHeader';
import { Reveal } from '@/components/shared/Reveal';

const PortfolioPage = () => {
  const isMobile = useScreenSize();
  const { t } = useLanguage();

  return (
    <Container>
      <PortfolioPageStyle>
        <PageHeader title={t('portfolio.title')} />

        <Row justify="center">
          {PORTFOLIO_LIST.map((project, index) => (
            <Column key={project.id} width={isMobile ? 12 : 4}>
              <Reveal delay={Math.min(index * 0.08, 0.32)} y={28}>
                <CardProject data={project} />
              </Reveal>
            </Column>
          ))}
        </Row>
      </PortfolioPageStyle>
    </Container>
  );
};

export default PortfolioPage;
