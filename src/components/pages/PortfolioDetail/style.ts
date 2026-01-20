import { theme } from '@/theme';
import styled from '@emotion/styled';

const PortfolioDetailStyle = styled.div`
  padding: 40px 20px;

  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${theme.colors.text};
    text-decoration: none;
    margin-bottom: 32px;
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  .project-header {
    margin-bottom: 40px;

    .project-title {
      font-size: 36px;
      font-weight: 700;
      color: ${theme.colors.text};
      margin: 0 0 16px 0;
    }

    .project-category {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: ${theme.colors.secondary};
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 24px;
    }

    .project-description {
      font-size: 18px;
      line-height: 1.6;
      color: ${theme.colors.text};
      opacity: 0.9;
      margin: 0;
    }
  }

  .project-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  .section {
    h3 {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 20px;
      font-weight: 600;
      color: ${theme.colors.text};
      margin: 0 0 20px 0;

      svg {
        color: ${theme.colors.secondary};
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
      color: ${theme.colors.text};
      opacity: 0.9;

      svg {
        color: ${theme.colors.secondary};
        flex-shrink: 0;
        margin-top: 2px;
      }
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .tech-tag {
      background: #525151dd;
      color: ${theme.colors.text};
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 500;
    }
  }

  .project-actions {
    margin-top: 32px;

    .view-project-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: ${theme.colors.secondary};
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;

      &:hover {
        background: #ea580c;
        transform: translateY(-2px);
      }
    }
  }
`;

export default PortfolioDetailStyle;
