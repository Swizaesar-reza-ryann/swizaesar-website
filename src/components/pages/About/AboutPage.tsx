import Container from '@/components/Layout/Container';
import AboutPageStyle from './style';

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
          <div className="about-content__image"></div>
          <div className="about-content__text">
            <p>
              I am a Frontend Developer with over 6 years of experience,
              starting my journey in 2019 as a self-taught developer. Throughout
              my career, I have focused on building modern, scalable, and
              user-centric web applications using TypeScript, Next.js, and
              React.js.
            </p>

            <p>
              Coming from an autodidact background, I have developed a strong
              ability to learn independently, adapt quickly to new technologies,
              and solve problems effectively. I enjoy turning complex
              requirements into clean, maintainable, and high-performance
              interfaces, while maintaining a strong focus on code quality,
              performance optimization, and user experience.
            </p>

            <p>
              I have hands-on experience in developing responsive web
              applications, building reusable component systems, and
              implementing best practices in modern frontend development. I am
              comfortable working in remote environments, collaborating with
              cross-functional teams, and contributing to products from planning
              to deployment.
            </p>

            <p>
              I value clean architecture, scalability, and long-term
              maintainability, and I continuously improve existing codebases
              through refactoring and thoughtful technical decisions. Beyond
              coding, I am passionate about continuous learning and staying up
              to date with the evolving frontend ecosystem.
            </p>

            <p>
              My goal is to contribute to impactful digital products while
              continuously growing as a frontend engineer who delivers both
              technical excellence and meaningful user experiences.
            </p>
          </div>
        </div>
      </AboutPageStyle>
    </Container>
  );
};
export default AboutPage;
