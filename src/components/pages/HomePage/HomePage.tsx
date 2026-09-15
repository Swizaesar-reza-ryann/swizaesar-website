'use client';

import Container from '@/components/Layout/Container';
import Summary from './components/Summary';
import HomePageStyle from './style';
import CardDeveloper from './components/CardDeveloper';
import { useScreenSize } from '@/context/ScreenContext';
import { Reveal } from '@/components/shared/Reveal';

const Homepage = () => {
  const isMobile = useScreenSize();

  return (
    <HomePageStyle>
      <Container>
        <div className="home-section">
          <div className="summary">
            <Summary />
          </div>

          {!isMobile && (
            <Reveal className="card-developer" delay={0.18} y={32}>
              <CardDeveloper />
            </Reveal>
          )}
        </div>
      </Container>
    </HomePageStyle>
  );
};
export default Homepage;
