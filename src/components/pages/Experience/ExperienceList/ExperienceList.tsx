import { Briefcase } from 'lucide-react';
import ExperienceListStyle from './style';
import { ExperienceListType } from '@/components/pages/Experience/types';
import { useScreenSize } from '@/context/ScreenContext';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

interface ExperienceListProps {
  data: ExperienceListType;
}

const ExperienceList = ({ data }: ExperienceListProps) => {
  const { t, tArray } = useLanguage();
  const { key } = data;
  const isMobile = useScreenSize();

  // Get translated content
  const title = t(`experience.${key}.title`);
  const subtitle = t(`experience.${key}.subtitle`);
  const descriptionList = tArray(`experience.${key}.description`);
  const startDate = t(`experience.${key}.startDate`);
  const endDate = t(`experience.${key}.endDate`);

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
          {descriptionList.map((item, index) => (
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
