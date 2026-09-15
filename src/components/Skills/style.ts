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
      border-color: rgba(240, 134, 90, 0.4);
      color: ${theme.colors.accent};
      background: ${theme.colors.primaryLight};
      box-shadow: ${theme.shadows.glowSoft};
    }
  }

  @media (max-width: 768px) {
    gap: 8px;

    .skill {
      padding: 7px 12px;
      font-size: 0.75rem;
      background: ${theme.colors.bg};
      border-color: ${theme.colors.borderStrong};
    }
  }
`;

export default SkillStyle;
