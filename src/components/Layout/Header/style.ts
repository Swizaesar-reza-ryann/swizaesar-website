import { theme } from '@/theme';
import styled from '@emotion/styled';

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: background 0.25s ease, border-color 0.25s ease, padding 0.25s ease;
  background: rgba(12, 9, 8, 0.78);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid transparent;
  padding: 18px 0;

  &.scrolled {
    background: rgba(12, 9, 8, 0.94);
    border-bottom-color: ${theme.colors.border};
    padding: 14px 0;
  }

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 28px;
    gap: 32px;
  }

  .header-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: ${theme.colors.text};
    flex-shrink: 0;

    &:hover {
      color: ${theme.colors.text};
    }

    .brand-mark {
      width: 38px;
      height: 38px;
      border-radius: 11px;
      object-fit: cover;
      display: block;
      box-shadow: ${theme.shadows.glowSoft};
    }

    .brand-name {
      font-weight: 600;
      font-size: 1.0625rem;
      letter-spacing: -0.01em;
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .header-list {
    display: flex;
    align-items: center;
    gap: 2px;

    a {
      padding: 10px 14px;
      color: ${theme.colors.textSecondary};
      text-decoration: none;
      font-weight: 500;
      font-size: 0.8125rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      position: relative;
      border-radius: ${theme.radius.full};
      transition: color 0.2s ease, background 0.2s ease;
      white-space: nowrap;

      &:hover {
        color: ${theme.colors.text};
        background: transparent;
      }

      &.active {
        color: ${theme.colors.accent};
        background: transparent;
        font-weight: 600;

        &::after {
          content: '';
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 4px;
          height: 2px;
          border-radius: ${theme.radius.full};
          background: ${theme.gradients.rim};
        }
      }
    }
  }

  .header-cta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 12px;
    padding-left: 16px;
    border-left: 1px solid ${theme.colors.border};
    flex-shrink: 0;
  }

  @media (max-width: 1100px) {
    .header-inner {
      padding: 0 20px;
      gap: 20px;
    }

    .header-list a {
      padding: 10px 10px;
      font-size: 0.75rem;
      letter-spacing: 0.03em;
    }

    .header-cta {
      margin-left: 8px;
      padding-left: 12px;
      gap: 10px;
    }
  }
`;

export default HeaderStyle;
