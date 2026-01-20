import { notFound, useParams } from 'next/navigation';
import { PortfolioType } from '@/components/pages/Portfolio/types';
import Container from '@/components/Layout/Container';
import Link from 'next/link';
import {
  ArrowLeft,
  Briefcase,
  CheckCircle,
  Code,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_LIST } from '@/components/pages/Portfolio/constant';
import PortfolioDetailStyle from './style';

const PortfolioDetailPage = () => {
  const { id } = useParams();

  const project: PortfolioType | undefined = PORTFOLIO_LIST.find(
    (p) => p.urlId.toString() === id
  );

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <PortfolioDetailStyle>
        <Link href="/portfolio" className="back-button">
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <div className="project-category">
            <Code size={14} />
            {project.category}
          </div>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-content">
          <div className="section">
            <h3>
              <Briefcase size={20} />
              Responsibilities
            </h3>
            <ul className="responsibilities-list">
              {project.responsibilities.map(
                (responsibility: string, index: number) => (
                  <li key={index}>
                    <CheckCircle size={16} />
                    {responsibility}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="section">
            <h3>
              <Code size={20} />
              Tech Stack
            </h3>
            <div className="tech-stack">
              {project.techStack.map((tech: string, index: number) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {project.websiteUrl && (
              <div className="project-actions">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn"
                >
                  <ExternalLink size={16} />
                  View Live Project
                </a>
              </div>
            )}
          </div>
        </div>
      </PortfolioDetailStyle>
    </Container>
  );
};

export default PortfolioDetailPage;
