import { theme } from '@/theme';
import styled from '@emotion/styled';

const NotFoundStyle = styled.div`
  text-align: center;
  padding: 64px 20px;
  max-width: 480px;
  margin: 0 auto;

  .error-code {
    font-family: ${theme.fonts.display};
    font-size: clamp(5rem, 20vw, 8rem);
    font-weight: 400;
    background: ${theme.gradients.accentText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    line-height: 1;
    letter-spacing: -0.04em;
    filter: drop-shadow(0 0 32px rgba(240, 134, 90, 0.35));
  }

  .error-message {
    font-family: ${theme.fonts.display};
    font-size: 1.75rem;
    font-weight: 400;
    color: ${theme.colors.text};
    margin: 16px 0 12px;
    letter-spacing: -0.02em;
  }

  .error-description {
    font-size: 0.9375rem;
    color: ${theme.colors.textSecondary};
    margin: 0 0 32px;
    line-height: 1.6;
  }

  .action-buttons {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: ${theme.radius.full};
      text-decoration: none;
      font-weight: 600;
      font-size: 0.875rem;
      transition: all 0.2s ease;

      &.primary {
        background: ${theme.gradients.cta};
        color: #fff;
        box-shadow: ${theme.shadows.glow};

        &:hover {
          filter: brightness(1.06);
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.glow}, ${theme.shadows.md};
          color: #fff;
        }
      }

      svg {
        color: inherit;
      }
    }
  }
`;

export default NotFoundStyle;
