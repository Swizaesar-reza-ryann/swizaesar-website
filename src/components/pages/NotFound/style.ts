import { theme } from '@/theme';
import styled from '@emotion/styled';

const NotFoundStyle = styled.div`
  text-align: center;
  padding: 64px 20px;
  max-width: 480px;
  margin: 0 auto;

  .error-code {
    font-size: clamp(5rem, 20vw, 8rem);
    font-weight: 800;
    background: linear-gradient(
      135deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.accent} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .error-message {
    font-size: 1.5rem;
    font-weight: 700;
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
      border-radius: ${theme.radius.md};
      text-decoration: none;
      font-weight: 600;
      font-size: 0.875rem;
      transition: all 0.2s ease;

      &.primary {
        background: ${theme.colors.primary};
        color: #fff;
        box-shadow: ${theme.shadows.sm};

        &:hover {
          background: ${theme.colors.primaryDark};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.md};
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
