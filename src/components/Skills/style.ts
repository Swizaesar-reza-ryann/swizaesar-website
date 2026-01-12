import { theme } from '@/theme';
import styled from '@emotion/styled';

const SkillStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  .skill {
    padding: 8px 16px;
    background: #18181a;
    border-radius: 16px;
    color: ${theme.colors.text};
    font-size: 0.8rem;
  }
`;

export default SkillStyle;
