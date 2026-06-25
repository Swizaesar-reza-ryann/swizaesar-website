import Container from '@/components/Layout/Container';
import AboutPageStyle from './style';
import Image from 'next/image';
import aboutImage from '@/assets/images/about-image.webp';
import Skills from '@/components/Skills';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import PageHeader from '@/components/shared/PageHeader';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <AboutPageStyle>
        <PageHeader
          align="left"
          eyebrow={t('about.who_i_am')}
          title={t('about.title')}
        />

        <div className="about-grid">
          <div className="about-content__text">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>

            <div className="about-skills">
              <h4>{t('common.tech_stack')}</h4>
              <Skills />
            </div>
          </div>

          <div className="about-content__image">
            <Image
              fetchPriority="high"
              src={aboutImage}
              alt="profile-image"
              priority
              width={500}
              height={500}
              quality={75}
            />
          </div>
        </div>
      </AboutPageStyle>
    </Container>
  );
};

export default AboutPage;
