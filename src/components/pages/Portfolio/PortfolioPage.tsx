import Container from '@/components/Layout/Container';
import PortfolioPageStyle from './style';
import CardProject from './components/CardProject';
import { Row, Column } from '@/components/Layout/Grid';
import { PORTFOLIO_LIST } from './constant';

const PortfolioPage = () => {
  return (
    <Container>
      <PortfolioPageStyle>
        <div className="portfolio-title">
          <div>
            <h1>Feature Project</h1>
          </div>

          <h4>Check out some of my recent work.</h4>
        </div>

        <Row justify="center">
          {PORTFOLIO_LIST &&
            PORTFOLIO_LIST.map((project) => (
              <Column key={project.id} width={4}>
                <CardProject data={project} />
              </Column>
            ))}
        </Row>
      </PortfolioPageStyle>
    </Container>
  );
};

export default PortfolioPage;
