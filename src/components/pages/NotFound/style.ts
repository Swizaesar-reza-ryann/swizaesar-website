import { theme } from '@/theme';
import styled from '@emotion/styled';

const NotFoundStyle = styled.div`
  text-align: center;
  padding: 80px 20px;

  .error-code {
    font-size: 120px;
    font-weight: 700;
    color: ${theme.colors.secondary};
    margin: 0;
    line-height: 1;
  }

  .error-message {
    font-size: 24px;
    color: ${theme.colors.text};
    margin: 20px 0;
    opacity: 0.8;
  }

  .error-description {
    font-size: 16px;
    color: ${theme.colors.text};
    margin: 0 0 40px 0;
    opacity: 0.6;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .action-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;

      &.primary {
        background: ${theme.colors.secondary};
        color: white;

        &:hover {
          background: #ea580c;
          transform: translateY(-2px);
        }
      }

      &.secondary {
        background: transparent;
        color: ${theme.colors.text};
        border: 1px solid #525151dd;

        &:hover {
          background: #525151dd;
          transform: translateY(-2px);
        }
      }

      svg {
        color: inherit;
      }
    }
  }
`;

export default NotFoundStyle;
