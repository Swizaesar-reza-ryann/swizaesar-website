'use client';

import Container from '@/components/Layout/Container';
import ExperiencePageStyle from './style';
import ExperienceList from './ExperienceList';
import { EXPERIENCE_LIST } from './constant';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import PageHeader from '@/components/shared/PageHeader';
import { Reveal } from '@/components/shared/Reveal';

const ExperiencePage = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <ExperiencePageStyle>
        <PageHeader title={t('experience.title')} />

        <div className="experience-timeline">
          {EXPERIENCE_LIST.map((item, index) => (
            <Reveal
              key={item.id ?? index}
              delay={Math.min(index * 0.1, 0.4)}
              y={24}
            >
              <ExperienceList
                data={item}
                isLast={index === EXPERIENCE_LIST.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </ExperiencePageStyle>
    </Container>
  );
};

export default ExperiencePage;
