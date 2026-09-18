import { theme } from '@/theme';
import styled from '@emotion/styled';

const FooterStyle = styled.footer`
  position: relative;
  z-index: 1;
  margin-top: 80px;
  overflow: hidden;
  border-top: 1px solid ${theme.colors.border};
  background: rgba(12, 9, 8, 0.55);
  backdrop-filter: blur(18px);
  padding: 48px 28px 28px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${theme.gradients.rim};
    opacity: 0.75;
  }

  .footer-glow {
    position: absolute;
    width: 420px;
    height: 420px;
    right: -120px;
    bottom: -180px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    opacity: 0.08;
    filter: blur(80px);
    pointer-events: none;
  }

  .footer-inner {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 48px;
  }

  .footer-brand {
    max-width: 360px;

    &__lockup {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: ${theme.colors.text};
      margin-bottom: 12px;

      &:hover {
        color: ${theme.colors.text};
      }
    }

    &__name {
      font-weight: 600;
      font-size: 1.125rem;
      letter-spacing: -0.01em;
    }
  }

  .footer-mark {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 11px;
    object-fit: cover;
    box-shadow: ${theme.shadows.glowSoft};
  }

  .footer-role {
    margin: 0 0 8px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.colors.accent};
  }

  .footer-tagline {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: ${theme.colors.textSecondary};
  }

  .footer-aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 8px 4px;

    a {
      padding: 8px 12px;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: ${theme.colors.textSecondary};
      border-radius: ${theme.radius.full};
      transition: color 0.2s ease, background 0.2s ease;

      &:hover {
        color: ${theme.colors.accent};
        background: ${theme.colors.primaryLight};
      }
    }
  }

  .footer-social {
    display: flex;
    gap: 10px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: ${theme.radius.full};
      border: 1px solid ${theme.colors.border};
      background: rgba(22, 18, 16, 0.65);
      color: ${theme.colors.textSecondary};
      transition: all 0.2s ease;

      &:hover {
        color: ${theme.colors.accent};
        border-color: rgba(240, 134, 90, 0.4);
        background: ${theme.colors.primaryLight};
        box-shadow: ${theme.shadows.glowSoft};
        transform: translateY(-2px);
      }
    }
  }

  .footer-bottom {
    position: relative;
    max-width: 1200px;
    margin: 36px auto 0;
    padding-top: 22px;
    border-top: 1px solid ${theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    p {
      margin: 0;
      font-size: 0.8125rem;
      color: ${theme.colors.textMuted};
    }
  }

  .footer-chat {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: ${theme.radius.full};
    background: ${theme.gradients.cta};
    color: #fff;
    font-size: 0.8125rem;
    font-weight: 600;
    text-decoration: none;
    box-shadow: ${theme.shadows.glowSoft};
    transition: filter 0.2s ease, transform 0.2s ease;

    &:hover {
      color: #fff;
      filter: brightness(1.06);
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    margin-top: 56px;
    padding: 36px 16px 108px;

    .footer-inner {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 28px;
    }

    .footer-brand {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer-aside {
      align-items: center;
      width: 100%;
    }

    .footer-links {
      justify-content: center;
    }

    .footer-social {
      justify-content: center;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
      gap: 14px;
    }

    .footer-chat {
      display: none;
    }
  }
`;

export default FooterStyle;
