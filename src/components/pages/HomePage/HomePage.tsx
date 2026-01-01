import Container from '@/components/Layout/Container';
import Summary from './components/Summary';
import HomePageStyle from './style';

const Homepage = () => {
  return (
    <HomePageStyle>
      <Container>
        <Summary />
      </Container>
    </HomePageStyle>
  );
};
export default Homepage;
