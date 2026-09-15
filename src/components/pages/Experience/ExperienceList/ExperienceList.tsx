import { Briefcase } from 'lucide-react';
import ExperienceListStyle from './style';
import { ExperienceListType } from '@/components/pages/Experience/types';
import { useScreenSize } from '@/context/ScreenContext';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

interface ExperienceListProps {
  data: ExperienceListType;
  isLast?: boolean;
}

const ExperienceList = ({ data, isLast = false }: ExperienceListProps) => {
  const { t, tArray } = useLanguage();
  const { key } = data;
  const isMobile = useScreenSize();

  const title = t(`experience.${key}.title`);
  const subtitle = t(`experience.${key}.subtitle`);
  const descriptionList = tArray(`experience.${key}.description`);
  const startDate = t(`experience.${key}.startDate`);
  const endDate = t(`experience.${key}.endDate`);

  return (
    <ExperienceListStyle data-last={isLast} data-mobile={isMobile}>
      <div className="experience-list__icon" aria-hidden={!isMobile}>
        <Briefcase width={16} />
      </div>

      <div className="experience-list__content">
        {isMobile && (
          <div className="experience-list__meta">
            <span className="experience-list__meta-icon" aria-hidden>
              <Briefcase width={14} />
            </span>
            <div className="experience-list__date">
              <span>
                {startDate} – {endDate}
              </span>
            </div>
          </div>
        )}

        <div className="experience-list__content-top">
          <h4 className="experience-list__content-title">{title}</h4>

          {!isMobile && (
            <div className="experience-list__date">
              <span>
                {startDate} – {endDate}
              </span>
            </div>
          )}
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
