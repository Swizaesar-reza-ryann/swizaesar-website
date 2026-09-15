import styled from '@emotion/styled';
import { theme } from '@/theme';

export const GamesPageStyle = styled.div`
  padding: 16px 0 48px;

  .games-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .games-card {
    position: relative;
    width: 100%;
    max-width: 680px;
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.xl};
    padding: 32px 24px;
    box-shadow: ${theme.shadows.lg}, ${theme.shadows.glowSoft};
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: ${theme.gradients.rim};
    }
  }

  @media (max-width: 768px) {
    padding: 8px 0 32px;

    .games-card {
      padding: 24px 16px;
    }
  }
`;
