import { theme } from '@/theme';
import { Briefcase } from 'lucide-react';
import ExperienceListStyle from './style';

const ExperienceList = () => {
  return (
    <ExperienceListStyle>
      <div className="experience-list__icon">
        <Briefcase width={16} />
      </div>

      <div className="experience-list__content">
        <h4 className="experience-list__content-title">Frontend Developer</h4>

        <p className="experience-list__content-subtitle">
          PT Jaya Digital Properti
        </p>

        <ul className="experience-list__content-description">
          <li className="experience-list__content-description-list">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, qui ad quam consequuntur commodi rem quo magni
            architecto deleniti ratione? Eius, quos. Tenetur tempora dicta
            repudiandae, dolorem ea enim mollitia.
          </li>

          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, qui ad quam consequuntur commodi rem quo magni
            architecto deleniti ratione? Eius, quos. Tenetur tempora dicta
            repudiandae, dolorem ea enim mollitia.
          </li>
        </ul>
      </div>

      <div className="experience-list__date">
        <span>2022 - Present</span>
      </div>
    </ExperienceListStyle>
  );
};

export default ExperienceList;
