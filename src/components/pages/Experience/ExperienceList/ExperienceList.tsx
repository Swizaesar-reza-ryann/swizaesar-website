import { Briefcase } from 'lucide-react';
import ExperienceListStyle from './style';
import { ExperienceListType } from '@/components/pages/Experience/types';

interface ExperienceListProps {
  data: ExperienceListType;
}

const ExperienceList = ({ data }: ExperienceListProps) => {
  const { title, subtitle, description, startDate, endDate } = data;
  return (
    <ExperienceListStyle key={`experience-${data.id}`}>
      <div className="experience-list__icon">
        <Briefcase width={16} />
      </div>

      <div className="experience-list__content">
        <h4 className="experience-list__content-title">{title}</h4>

        <p className="experience-list__content-subtitle">{subtitle}</p>

        <ul className="experience-list__content-description">
          {description.map((item, index) => (
            <li
              key={`description-${index}`}
              className="experience-list__content-description-list"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="experience-list__date">
        <span>
          {startDate} - {endDate}
        </span>
      </div>
    </ExperienceListStyle>
  );
};

export default ExperienceList;
