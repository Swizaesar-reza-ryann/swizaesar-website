import { Code, ExternalLink } from 'lucide-react';
import CardProjectStyle from './style';
import { PortfolioType } from '@/components/pages/Portfolio/types';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { useScreenSize } from '@/context/ScreenContext';

interface CardProjectProps {
  data: PortfolioType;
}

const CardProject = ({ data }: CardProjectProps) => {
  const { t } = useLanguage();
  const isMobile = useScreenSize();

  const title = t(`portfolio.${data.key}.title`);
  const description = t(`portfolio.${data.key}.description`);
  const visibleCount = isMobile ? 4 : 5;
  const visibleStack = data.techStack.slice(0, visibleCount);
  const hiddenCount = Math.max(0, data.techStack.length - visibleCount);

  return (
    <CardProjectStyle>
      <div className="card-header">
        <Code size={18} />
        <h5>{data.category}</h5>
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-stack">
        {visibleStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
        {hiddenCount > 0 && (
          <span className="stack-more">+{hiddenCount}</span>
        )}
      </div>
      <div className="card-footer">
        <a href={`/portfolio/${data.urlId}`} className="view-project-btn">
          <ExternalLink size={16} />
          {t('common.read_more')}
        </a>
      </div>
    </CardProjectStyle>
  );
};

export default CardProject;
