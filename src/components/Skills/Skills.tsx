'use client';

import { SKILLS_LIST } from './constant';
import SkillStyle from './style';
import { Reveal } from '@/components/shared/Reveal';

const Skills = () => {
  return (
    <Reveal y={16}>
      <SkillStyle>
        {SKILLS_LIST.map((skill, index) => (
          <div key={index} className="skill">
            {skill.name}
          </div>
        ))}
      </SkillStyle>
    </Reveal>
  );
};

export default Skills;
