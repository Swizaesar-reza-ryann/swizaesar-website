'use client';

import Container from '@/components/Layout/Container';
import Summary from './components/Summary';
import HomePageStyle from './style';
import CardDeveloper from './components/CardDeveloper';
import { Reveal } from '@/components/shared/Reveal';

const Homepage = () => {
  return (
    <HomePageStyle>
      <Container>
        <div className="home-section">
          <div className="summary">
            <Summary />
          </div>

          <Reveal className="card-developer card-developer--desktop" delay={0.18} y={32}>
            <CardDeveloper />
          </Reveal>
        </div>
      </Container>
    </HomePageStyle>
  );
};
export default Homepage;
