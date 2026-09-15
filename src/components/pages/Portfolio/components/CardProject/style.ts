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
      margin-bottom: 16px;

      p {
        margin: 0;
        color: ${theme.colors.textSecondary};
        line-height: 1.65;
        font-size: 0.875rem;
      }
    }

    &-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;

      span {
        font-size: 0.6875rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: ${theme.colors.textSecondary};
        background: ${theme.colors.surfaceHover};
        border: 1px solid ${theme.colors.border};
        border-radius: ${theme.radius.full};
        padding: 5px 10px;
        line-height: 1.2;
      }

      .stack-more {
        color: ${theme.colors.accent};
        border-color: rgba(240, 134, 90, 0.28);
        background: ${theme.colors.primaryLight};
      }
    }

    &-footer {
      margin-top: auto;

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

  @media (max-width: 768px) {
    padding: 20px 18px 18px;
    border-radius: 18px;
    transform: none;

    &::before {
      opacity: 0.85;
    }

    &:hover {
      transform: none;
    }

    .card {
      &-header {
        margin-bottom: 12px;

        h5 {
          font-size: 0.6875rem;
        }
      }

      &-title h3 {
        font-size: 1.25rem;
        margin-bottom: 10px;
      }

      &-body {
        margin-bottom: 14px;

        p {
          font-size: 0.8125rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }

      &-stack {
        gap: 6px;
        margin-bottom: 16px;
        padding-top: 14px;
        border-top: 1px solid ${theme.colors.border};

        span {
          font-size: 0.625rem;
          padding: 5px 9px;
        }
      }

      &-footer .view-project-btn {
        width: 100%;
        justify-content: center;
        padding: 12px 18px;
        font-size: 0.8125rem;
      }
    }
  }
`;

export default CardProjectStyle;
