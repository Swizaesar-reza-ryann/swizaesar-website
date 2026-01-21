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
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const { t, tArray } = useLanguage();

  const project: PortfolioType | undefined = PORTFOLIO_LIST.find(
    (p) => p.urlId.toString() === id
  );

  if (!project) {
    notFound();
  }

  // Get translated content
  const responsibilitiesList = tArray(
    `portfolio.${project.key}.responsibilities`
  );

  return (
    <Container>
      <PortfolioDetailStyle>
        <Link href="/portfolio" className="back-button">
          <ArrowLeft size={16} />
          {t('common.back_to_portfolio')}
        </Link>

        <div className="project-header">
          <h1 className="project-title">
            {t(`portfolio.${project.key}.title`)}
          </h1>
          <div className="project-category">
            <Code size={14} />
            {project.category}
          </div>
          <p className="project-description">
            {t(`portfolio.${project.key}.description`)}
          </p>
        </div>

        <div className="project-content">
          <div className="section">
            <h3>
              <Briefcase size={20} />
              {t('portfolio_detail.responsibilities')}
            </h3>
            <ul className="responsibilities-list">
              {responsibilitiesList.map(
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
              {t('portfolio_detail.tech_stack')}
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
                  {t('portfolio_detail.view_live_project')}
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
