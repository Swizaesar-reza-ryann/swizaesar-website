import Container from '@/components/Layout/Container';
import ExperiencePageStyle from './style';
import ExperienceList from './ExperienceList';
import { EXPERIENCE_LIST } from './constant';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const ExperiencePage = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <ExperiencePageStyle>
        <div className="experience-title">
          <div>
            <h1>{t('experience.title')}</h1>
          </div>

          <h4>{t('experience.subtitle')}</h4>
        </div>

        {EXPERIENCE_LIST.map((item, index) => (
          <ExperienceList key={index} data={item} />
        ))}
      </ExperiencePageStyle>
    </Container>
  );
};

export default ExperiencePage;
