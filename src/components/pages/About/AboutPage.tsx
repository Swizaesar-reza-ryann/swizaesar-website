import Container from '@/components/Layout/Container';
import AboutPageStyle from './style';
import Image from 'next/image';
import aboutImage from '@/assets/images/about-image.webp';
import Skills from '@/components/Skills';
import { Column, Row } from '@/components/Layout/Grid';
import { useScreenSize } from '@/context/ScreenContext';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const AboutPage = () => {
  const isMobile = useScreenSize();
  const { t } = useLanguage();

  return (
    <Container>
      <AboutPageStyle>
        <div className="about-title">
          <h4>{t('about.who_i_am')}</h4>

          <div>
            <h1>{t('about.title')}</h1>
          </div>
        </div>

        <Row direction={isMobile ? 'column-reverse' : 'row'} align="center">
          <Column width={isMobile ? 12 : 6}>
            <div className="about-content__text">
              <p>{t('about.paragraph1')}</p>

              <p>{t('about.paragraph2')}</p>

              <p>{t('about.paragraph3')}</p>

              <h4>{t('common.tech_stack')}</h4>

              <Skills />
            </div>
          </Column>

          <Column
            width={isMobile ? 12 : 6}
            className="image-section"
            data-mobile={isMobile}
          >
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
          </Column>
        </Row>
      </AboutPageStyle>
    </Container>
  );
};
export default AboutPage;
