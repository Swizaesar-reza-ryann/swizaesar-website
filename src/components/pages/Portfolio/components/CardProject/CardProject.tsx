import { Code, ExternalLink } from 'lucide-react';
import CardProjectStyle from './style';
import { PortfolioType } from '@/components/pages/Portfolio/types';

interface CardProjectProps {
  data: PortfolioType;
}

const CardProject = ({ data }: CardProjectProps) => {
  return (
    <CardProjectStyle>
      <div className="card-header">
        <Code />
        <h5>{data.category}</h5>
      </div>
      <div className="card-title">
        <h3>{data.title}</h3>
      </div>
      <div className="card-body">
        <p>{data.description}</p>
      </div>
      <div className="card-footer">
        <a
          href={`/portfolio/${data.urlId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="view-project-btn"
        >
          <ExternalLink size={16} />
          View Details
        </a>
      </div>
    </CardProjectStyle>
  );
};

export default CardProject;
