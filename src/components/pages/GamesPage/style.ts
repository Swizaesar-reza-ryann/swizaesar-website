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
    width: 100%;
    max-width: 680px;
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.lg};
    padding: 32px 24px;
    box-shadow: ${theme.shadows.md};
  }

  @media (max-width: 768px) {
    padding: 8px 0 32px;

    .games-card {
      padding: 24px 16px;
      border-radius: ${theme.radius.md};
    }
  }
`;
