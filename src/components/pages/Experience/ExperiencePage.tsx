import Container from '@/components/Layout/Container';
import ExperiencePageStyle from './style';
import ExperienceList from './ExperienceList';
import { EXPERIENCE_LIST } from './constant';

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

        {EXPERIENCE_LIST.map((item, index) => (
          <ExperienceList key={index} data={item} />
        ))}
      </ExperiencePageStyle>
    </Container>
  );
};

export default ExperiencePage;
