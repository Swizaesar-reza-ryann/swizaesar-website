import Summary from './components/Summary';
import HomePageStyle from './style';

const Homepage = () => {
  return (
    <HomePageStyle>
      <div className="flex-content">
        <Summary />
      </div>
      <div className="flex-content profile"></div>
    </HomePageStyle>
  );
};
export default Homepage;
