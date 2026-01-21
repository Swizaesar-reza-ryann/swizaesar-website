import { Briefcase } from 'lucide-react';
import ExperienceListStyle from './style';
import { ExperienceListType } from '@/components/pages/Experience/types';
import { useScreenSize } from '@/context/ScreenContext';

interface ExperienceListProps {
  data: ExperienceListType;
}

const ExperienceList = ({ data }: ExperienceListProps) => {
  const { title, subtitle, description, startDate, endDate } = data;
  const isMobile = useScreenSize();

  return (
    <ExperienceListStyle key={`experience-${data.id}`}>
      <div className="experience-list__icon">
        <Briefcase width={16} />
      </div>

      <div className="experience-list__content">
        <div className="experience-list__content-top" data-mobile={isMobile}>
          <h4 className="experience-list__content-title">{title}</h4>

          <div className="experience-list__date" data-mobile={isMobile}>
            <span>
              {startDate} - {endDate}
            </span>
          </div>
        </div>

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
    </ExperienceListStyle>
  );
};

export default ExperienceList;
