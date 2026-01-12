import Container from '@/components/Layout/Container';
import ExperiencePageStyle from './style';
import ExperienceList from './ExperienceList';

const ExperiencePage = () => {
  return (
    <Container>
      <ExperiencePageStyle>
        <div className="experience-title">
          <div>
            <h1>Work Experience</h1>
          </div>

          <h4>My professional journey so far.</h4>
        </div>

        <ExperienceList />
        <ExperienceList />
        <ExperienceList />
      </ExperiencePageStyle>
    </Container>
  );
};

export default ExperiencePage;
