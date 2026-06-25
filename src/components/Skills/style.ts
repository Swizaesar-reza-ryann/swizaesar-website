import { theme } from '@/theme';
import styled from '@emotion/styled';

const SkillStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .skill {
    padding: 8px 16px;
    background: ${theme.colors.surfaceHover};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.full};
    color: ${theme.colors.textSecondary};
    font-size: 0.8125rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${theme.colors.primaryLight};
      color: ${theme.colors.primary};
      background: ${theme.colors.primaryLight};
    }
  }
`;

export default SkillStyle;
