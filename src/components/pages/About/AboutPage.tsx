import Container from '@/components/Layout/Container';
import AboutPageStyle from './style';
import Image from 'next/image';
import aboutImage from '@/assets/images/about-image.webp';
import Skills from '@/components/Skills';

const AboutPage = () => {
  return (
    <Container>
      <AboutPageStyle>
        <div className="about-title">
          <h4>who i am</h4>

          <div>
            <h1>About Me</h1>
          </div>
        </div>

        <div className="about-content">
          <div className="about-content__text">
            <p>
              I am a Frontend Developer with over 6 years of experience,
              starting my journey in 2019 as a self-taught developer. I
              specialize in building modern, scalable, and user-centric web
              applications using TypeScript, React.js, and Next.js, with a
              strong focus on performance, maintainability, and clean
              architecture.
            </p>

            <p>
              Coming from an autodidact background, I am highly adaptable and
              comfortable learning new technologies independently. I enjoy
              transforming complex requirements into clean, reusable, and
              high-performance interfaces, while consistently applying best
              practices in modern frontend development and user experience.
            </p>

            <p>
              I have experience working in remote and cross-functional teams,
              contributing to products from planning to deployment. I value
              scalability and long-term maintainability, actively refactoring
              and improving codebases, and continuously staying up to date with
              the evolving frontend ecosystem to deliver impactful digital
              products.
            </p>

            <h4>Tech Stack</h4>

            <Skills />
          </div>

          <div className="about-content__image">
            <Image
              src={aboutImage}
              alt="profile-image"
              priority
              width={500}
              height={500}
              quality={100}
            />
          </div>
        </div>
      </AboutPageStyle>
    </Container>
  );
};
export default AboutPage;
