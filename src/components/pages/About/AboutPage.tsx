'use client';

import Container from '@/components/Layout/Container';
import AboutPageStyle from './style';
import Image from 'next/image';
import aboutImage from '@/assets/images/about-image.png';
import Skills from '@/components/Skills';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import PageHeader from '@/components/shared/PageHeader';
import { Reveal } from '@/components/shared/Reveal';
import { useScreenSize } from '@/context/ScreenContext';

const AboutPage = () => {
  const { t } = useLanguage();
  const isMobile = useScreenSize();

  const image = (
    <Reveal delay={isMobile ? 0.06 : 0.15} y={28} className="about-content__image">
      <Image
        fetchPriority="high"
        src={aboutImage}
        alt="Developer workspace — cinematic coding desk"
        priority
        width={500}
        height={500}
        quality={75}
      />
    </Reveal>
  );

  const text = (
    <Reveal y={24} className="about-content__text">
      <p>{t('about.paragraph1')}</p>
      <p>{t('about.paragraph2')}</p>
      <p>{t('about.paragraph3')}</p>

      <div className="about-skills">
        <h4>{t('common.tech_stack')}</h4>
        <Skills />
      </div>
    </Reveal>
  );

  return (
    <Container>
      <AboutPageStyle>
        <PageHeader
          align="left"
          eyebrow={t('about.who_i_am')}
          title={t('about.title')}
        />

        <div className="about-grid">
          {isMobile ? (
            <>
              {image}
              {text}
            </>
          ) : (
            <>
              {text}
              {image}
            </>
          )}
        </div>
      </AboutPageStyle>
    </Container>
  );
};

export default AboutPage;
