import styled from '@emotion/styled';
import { theme } from '@/theme';

const CardProjectStyle = styled.article`
  position: relative;
  border-radius: ${theme.radius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.border};
  padding: 28px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.surface};
  transition: all 0.3s ease;
  margin-bottom: 24px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${theme.gradients.rim};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    box-shadow: ${theme.shadows.lg}, ${theme.shadows.glowSoft};
    border-color: rgba(240, 134, 90, 0.35);
    transform: translateY(-6px);

    &::before {
      opacity: 1;
    }
  }

  .card {
    &-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;

      svg {
        color: ${theme.colors.primary};
        flex-shrink: 0;
      }

      h5 {
        margin: 0;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: ${theme.colors.accent};
      }
    }

    &-title {
      h3 {
        margin: 0 0 12px;
        font-family: ${theme.fonts.display};
        font-size: 1.35rem;
        font-weight: 400;
        color: ${theme.colors.text};
        letter-spacing: -0.01em;
        line-height: 1.3;
      }
    }

    &-body {
      flex: 1;
      margin-bottom: 22px;

      p {
        margin: 0;
        color: ${theme.colors.textSecondary};
        line-height: 1.65;
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
        color: ${theme.colors.accent};
        text-decoration: none;
        border-radius: ${theme.radius.full};
        border: 1px solid rgba(240, 134, 90, 0.3);
        font-size: 0.8125rem;
        font-weight: 600;
        transition: all 0.2s ease;

        &:hover {
          background: ${theme.gradients.cta};
          color: #fff;
          border-color: transparent;
          transform: translateY(-1px);
          box-shadow: ${theme.shadows.glow};

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
