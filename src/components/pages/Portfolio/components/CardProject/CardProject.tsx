import { Code, ExternalLink } from 'lucide-react';
import CardProjectStyle from './style';
import { PortfolioType } from '@/components/pages/Portfolio/types';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

interface CardProjectProps {
  data: PortfolioType;
}

const CardProject = ({ data }: CardProjectProps) => {
  const { t } = useLanguage();

  // Get translated content
  const title = t(`portfolio.${data.key}.title`);
  const description = t(`portfolio.${data.key}.description`);

  return (
    <CardProjectStyle>
      <div className="card-header">
        <Code />
        <h5>{data.category}</h5>
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <a href={`/portfolio/${data.urlId}`} className="view-project-btn">
          <ExternalLink size={16} />
          View Details
        </a>
      </div>
    </CardProjectStyle>
  );
};

export default CardProject;
