import { theme } from '@/theme';
import styled from '@emotion/styled';

const NavMobileStyle = styled.nav`
  .nav-mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.97);
    border-top: 1px solid ${theme.colors.border};
    padding: 8px 4px calc(8px + env(safe-area-inset-bottom, 0px));
    z-index: 1000;
    backdrop-filter: blur(12px);
    box-shadow: 0 -4px 16px rgba(15, 23, 42, 0.06);
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${theme.colors.textMuted};
    transition: all 0.2s ease;
    padding: 6px 4px;
    border-radius: ${theme.radius.md};
    min-width: 52px;
    flex: 1;
    max-width: 72px;

    &:hover {
      color: ${theme.colors.primary};
    }

    &.active {
      color: ${theme.colors.primary};

      .nav-icon {
        background: ${theme.colors.primaryLight};
      }
    }

    &.home-item {
      max-width: 80px;

      .nav-icon {
        width: 52px;
        height: 52px;
        margin-top: -20px;
        background: ${theme.colors.primary};
        color: #fff;
        border-radius: 50%;
        box-shadow: ${theme.shadows.lg};
        border: 3px solid ${theme.colors.surface};
      }

      &.active .nav-icon {
        background: ${theme.colors.primaryDark};
      }

      .nav-label {
        font-weight: 600;
        margin-top: 2px;
      }
    }
  }

  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: ${theme.radius.md};
    margin-bottom: 2px;
    transition: all 0.2s ease;
  }

  .nav-label {
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    line-height: 1.2;
  }

  @media (max-width: 380px) {
    .nav-label {
      font-size: 9px;
    }

    .nav-item.home-item .nav-icon {
      width: 46px;
      height: 46px;
    }
  }
`;

export default NavMobileStyle;
