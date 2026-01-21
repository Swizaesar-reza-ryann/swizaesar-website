import Container from '@/components/Layout/Container';
import PortfolioPageStyle from './style';
import CardProject from './components/CardProject';
import { Row, Column } from '@/components/Layout/Grid';
import { PORTFOLIO_LIST } from './constant';
import { useScreenSize } from '@/context/ScreenContext';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const PortfolioPage = () => {
  const isMobile = useScreenSize();
  const { t } = useLanguage();

  return (
    <Container>
      <PortfolioPageStyle>
        <div className="portfolio-title">
          <div>
            <h1>{t('portfolio.title')}</h1>
          </div>

          <h4>{t('portfolio.subtitle')}</h4>
        </div>

        <Row justify="center">
          {PORTFOLIO_LIST &&
            PORTFOLIO_LIST.map((project) => (
              <Column key={project.id} width={isMobile ? 12 : 4}>
                <CardProject data={project} />
              </Column>
            ))}
        </Row>
      </PortfolioPageStyle>
    </Container>
  );
};

export default PortfolioPage;
