import { SKILLS_LIST } from './constant';
import SkillStyle from './style';

const Skills = () => {
  return (
    <SkillStyle>
      {SKILLS_LIST.map((skill, index) => (
        <div key={index} className="skill">
          {skill.iconUrl ? (
            <img
              src={skill.iconUrl}
              alt={skill.name}
              className="skill-icon-img"
              onError={(e) => {
                const target = e.currentTarget;
                const fallback = target.nextElementSibling as HTMLElement;
                target.style.display = 'none';
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
          ) : null}
          <span
            className="skill-icon-fallback"
            style={{ display: skill.iconUrl ? 'none' : 'flex' }}
          >
            {skill.icon}
          </span>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </SkillStyle>
  );
};

export default Skills;
