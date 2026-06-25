import { theme } from '@/theme';
import styled from '@emotion/styled';

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: all 0.25s ease;
  background: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  padding: 12px 0;

  &.scrolled {
    background: rgba(255, 255, 255, 0.95);
    border-bottom-color: ${theme.colors.border};
    box-shadow: ${theme.shadows.sm};
    padding: 8px 0;
  }

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    gap: 24px;
  }

  .header-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: ${theme.colors.text};
    flex-shrink: 0;

    &:hover {
      color: ${theme.colors.text};
    }

    .brand-mark {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: ${theme.radius.md};
      background: ${theme.colors.primary};
      color: #fff;
      font-weight: 700;
      font-size: 0.8125rem;
      letter-spacing: -0.02em;
    }

    .brand-name {
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: -0.01em;
    }
  }

  .header-list {
    display: flex;
    align-items: center;
    gap: 4px;

    a {
      padding: 8px 14px;
      color: ${theme.colors.textSecondary};
      text-decoration: none;
      font-weight: 500;
      font-size: 0.875rem;
      position: relative;
      border-radius: ${theme.radius.sm};
      transition: all 0.2s ease;

      &:hover {
        color: ${theme.colors.primary};
        background: ${theme.colors.primaryLight};
      }

      &.active {
        color: ${theme.colors.primary};
        background: ${theme.colors.primaryLight};
        font-weight: 600;
      }
    }

    button {
      margin-left: 8px;
    }
  }
`;

export default HeaderStyle;
