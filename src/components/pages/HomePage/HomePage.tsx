import Container from '@/components/Layout/Container';
import Summary from './components/Summary';
import HomePageStyle from './style';
import CardDeveloper from './components/CardDeveloper';

const Homepage = () => {
  return (
    <HomePageStyle>
      <Container>
       <div className='home-section'>
        <div className="summary">
          <Summary />
        </div>
        
         <div className='card-developer'>
          <CardDeveloper />
         </div>
       </div>
      </Container>
    </HomePageStyle>
  );
};
export default Homepage;
