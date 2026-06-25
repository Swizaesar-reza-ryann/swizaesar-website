import { theme } from '@/theme';
import styled from '@emotion/styled';

const FooterStyle = styled.footer`
  margin-top: 64px;
  border-top: 1px solid ${theme.colors.border};
  background: ${theme.colors.surface};
  padding: 40px 16px 24px;

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 32px;
    align-items: start;
  }

  .footer-brand {
    .footer-mark {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: ${theme.radius.md};
      background: ${theme.colors.primaryLight};
      color: ${theme.colors.primary};
      font-weight: 700;
      font-size: 0.875rem;
      margin-bottom: 8px;
    }

    .footer-tagline {
      margin: 0;
      font-size: 0.875rem;
      color: ${theme.colors.textSecondary};
    }
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${theme.colors.textSecondary};
      transition: color 0.2s ease;

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }

  .footer-social {
    display: flex;
    gap: 12px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: ${theme.radius.full};
      border: 1px solid ${theme.colors.border};
      color: ${theme.colors.textSecondary};
      transition: all 0.2s ease;

      &:hover {
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primaryLight};
        background: ${theme.colors.primaryLight};
      }
    }
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 32px auto 0;
    padding-top: 24px;
    border-top: 1px solid ${theme.colors.border};
    text-align: center;

    p {
      margin: 0;
      font-size: 0.8125rem;
      color: ${theme.colors.textMuted};
    }
  }

  @media (max-width: 768px) {
    margin-top: 48px;
    padding: 32px 16px 100px;

    .footer-inner {
      grid-template-columns: 1fr;
      gap: 24px;
      text-align: center;
    }

    .footer-links {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
    }

    .footer-social {
      justify-content: center;
    }
  }
`;

export default FooterStyle;
