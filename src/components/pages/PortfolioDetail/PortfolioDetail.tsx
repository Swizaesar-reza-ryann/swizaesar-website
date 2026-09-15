'use client';

import { notFound, useParams } from 'next/navigation';
import { PortfolioType, PortfolioLink } from '@/components/pages/Portfolio/types';
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
import { Reveal } from '@/components/shared/Reveal';

const PORTFOLIO_LINK_LABELS: Record<PortfolioLink['labelKey'], string> = {
  marketplace: 'Marketplace',
  tenant: 'Mitra (Tenant)',
  official: 'Official',
};

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const { t, tArray } = useLanguage();

  const project: PortfolioType | undefined = PORTFOLIO_LIST.find(
    (p) => p.urlId.toString() === id,
  );

  if (!project) {
    notFound();
  }

  const responsibilitiesList = tArray(
    `portfolio.${project.key}.responsibilities`,
  );

  const getLinkLabel = (labelKey: PortfolioLink['labelKey']) => {
    const translated = t(`portfolio_detail.link_${labelKey}`);
    return translated === `portfolio_detail.link_${labelKey}`
      ? PORTFOLIO_LINK_LABELS[labelKey]
      : translated;
  };

  return (
    <Container>
      <PortfolioDetailStyle>
        <Reveal y={12}>
          <Link href="/portfolio" className="back-button">
            <ArrowLeft size={16} />
            {t('common.back_to_portfolio')}
          </Link>
        </Reveal>

        <Reveal delay={0.06} y={22}>
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
        </Reveal>

        <div className="project-content">
          <Reveal delay={0.12} y={24}>
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
                  ),
                )}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18} y={24}>
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

              {(project.links?.length || project.websiteUrl) && (
                <div className="project-actions">
                  {project.links?.map((link) => (
                    <a
                      key={link.labelKey}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project-btn"
                    >
                      <ExternalLink size={16} />
                      {getLinkLabel(link.labelKey)}
                    </a>
                  ))}

                  {!project.links?.length && project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project-btn"
                    >
                      <ExternalLink size={16} />
                      {t('portfolio_detail.view_live_project')}
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </PortfolioDetailStyle>
    </Container>
  );
};

export default PortfolioDetailPage;
