import { theme } from '@/theme';
import styled from '@emotion/styled';

const SkillStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  .skill {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(108, 92, 231, 0.1);
    border: 1px solid rgba(108, 92, 231, 0.3);
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(108, 92, 231, 0.2);
      border-color: rgba(108, 92, 231, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(108, 92, 231, 0.2);
    }

    .skill-icon-img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      filter: brightness(0) invert(1);
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }

    .skill-icon-fallback {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 24px;
    }

    .skill-name {
      font-size: 14px;
      font-weight: 500;
      color: ${theme.colors.text};
    }
  }
`;

export default SkillStyle;
