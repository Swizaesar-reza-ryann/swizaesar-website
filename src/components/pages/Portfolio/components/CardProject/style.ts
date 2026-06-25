import styled from '@emotion/styled';
import { theme } from '@/theme';

const CardProjectStyle = styled.article`
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.border};
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.surface};
  transition: all 0.25s ease;
  margin-bottom: 24px;

  &:hover {
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.primaryLight};
    transform: translateY(-4px);
  }

  .card {
    &-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;

      svg {
        color: ${theme.colors.primary};
        flex-shrink: 0;
      }

      h5 {
        margin: 0;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: ${theme.colors.accent};
      }
    }

    &-title {
      h3 {
        margin: 0 0 12px;
        font-size: 1.125rem;
        font-weight: 700;
        color: ${theme.colors.text};
        letter-spacing: -0.01em;
        line-height: 1.3;
      }
    }

    &-body {
      flex: 1;
      margin-bottom: 20px;

      p {
        margin: 0;
        color: ${theme.colors.textSecondary};
        line-height: 1.6;
        font-size: 0.875rem;
      }
    }

    &-footer {
      .view-project-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        background: ${theme.colors.primaryLight};
        color: ${theme.colors.primary};
        text-decoration: none;
        border-radius: ${theme.radius.md};
        font-size: 0.8125rem;
        font-weight: 600;
        transition: all 0.2s ease;

        &:hover {
          background: ${theme.colors.primary};
          color: #fff;
          transform: translateY(-1px);

          svg {
            color: #fff;
          }
        }

        svg {
          color: ${theme.colors.primary};
          transition: color 0.2s ease;
        }
      }
    }
  }
`;

export default CardProjectStyle;
