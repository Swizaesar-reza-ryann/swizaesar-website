import { theme } from '@/theme';
import styled from '@emotion/styled';

const PortfolioDetailStyle = styled.div`
  padding: 16px 0 48px;

  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${theme.colors.textSecondary};
    text-decoration: none;
    margin-bottom: 28px;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 8px 14px;
    border-radius: ${theme.radius.full};
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.surface};
    transition: all 0.2s ease;

    &:hover {
      color: ${theme.colors.accent};
      border-color: rgba(240, 134, 90, 0.4);
      background: ${theme.colors.primaryLight};
    }
  }

  .project-header {
    position: relative;
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.xl};
    padding: 32px;
    margin-bottom: 24px;
    box-shadow: ${theme.shadows.md}, ${theme.shadows.glowSoft};
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

    .project-title {
      font-family: ${theme.fonts.display};
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 400;
      color: ${theme.colors.text};
      margin: 0 0 16px;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .project-category {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: ${theme.colors.primaryLight};
      color: ${theme.colors.accent};
      border: 1px solid rgba(240, 134, 90, 0.28);
      padding: 6px 14px;
      border-radius: ${theme.radius.full};
      font-size: 0.8125rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .project-description {
      font-size: 1rem;
      line-height: 1.7;
      color: ${theme.colors.textSecondary};
      margin: 0;
    }
  }

  .project-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .section {
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.xl};
    padding: 28px;
    box-shadow: ${theme.shadows.sm};
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      border-color: rgba(240, 134, 90, 0.25);
      box-shadow: ${theme.shadows.md};
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: ${theme.fonts.display};
      font-size: 1.25rem;
      font-weight: 400;
      color: ${theme.colors.text};
      margin: 0 0 20px;

      svg {
        color: ${theme.colors.primary};
      }
    }
  }

  .responsibilities-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 12px;
      color: ${theme.colors.textSecondary};
      font-size: 0.875rem;
      line-height: 1.6;

      &:last-child {
        margin-bottom: 0;
      }

      svg {
        color: ${theme.colors.accent};
        flex-shrink: 0;
        margin-top: 3px;
      }
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .tech-tag {
      background: ${theme.colors.surfaceHover};
      color: ${theme.colors.textSecondary};
      border: 1px solid ${theme.colors.border};
      padding: 6px 14px;
      border-radius: ${theme.radius.full};
      font-size: 0.8125rem;
      font-weight: 500;
      transition: all 0.2s ease;

      &:hover {
        border-color: rgba(240, 134, 90, 0.4);
        color: ${theme.colors.accent};
        background: ${theme.colors.primaryLight};
      }
    }
  }

  .project-actions {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid ${theme.colors.border};
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .view-project-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: ${theme.gradients.cta};
      color: #fff;
      padding: 12px 22px;
      border-radius: ${theme.radius.full};
      text-decoration: none;
      font-weight: 600;
      font-size: 0.875rem;
      transition: all 0.2s ease;
      box-shadow: ${theme.shadows.glow};

      &:hover {
        filter: brightness(1.06);
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.glow}, ${theme.shadows.md};
        color: #fff;
      }

      svg {
        color: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    .project-header {
      padding: 24px 20px;
    }

    .section {
      padding: 24px 20px;
    }
  }
`;

export default PortfolioDetailStyle;
