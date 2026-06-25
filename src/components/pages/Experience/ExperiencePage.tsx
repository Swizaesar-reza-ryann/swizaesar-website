import Container from '@/components/Layout/Container';
import ExperiencePageStyle from './style';
import ExperienceList from './ExperienceList';
import { EXPERIENCE_LIST } from './constant';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import PageHeader from '@/components/shared/PageHeader';

const ExperiencePage = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <ExperiencePageStyle>
        <PageHeader
          title={t('experience.title')}
          
        />

        <div className="experience-timeline">
          {EXPERIENCE_LIST.map((item, index) => (
            <ExperienceList key={index} data={item} />
          ))}
        </div>
      </ExperiencePageStyle>
    </Container>
  );
};

export default ExperiencePage;
