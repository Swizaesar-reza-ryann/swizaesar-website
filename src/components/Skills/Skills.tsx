import { SKILLS_LIST } from './constant';
import SkillStyle from './style';

const Skills = () => {
  return (
    <SkillStyle>
      {SKILLS_LIST.map((skill, index) => (
        <div key={index} className="skill">
          {skill.name}
        </div>
      ))}
    </SkillStyle>
  );
};

export default Skills;
