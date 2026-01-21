import { theme } from '@/theme';
import styled from '@emotion/styled';

const NavMobileStyle = styled.div`
  .nav-mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${theme.colors.primary};
    border-top: 1px solid #525151dd;
    padding: 12px 0 8px 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    background: rgba(26, 26, 26, 0.95);
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${theme.colors.text};
    opacity: 0.7;
    transition: all 0.3s ease;
    padding: 4px 8px;
    border-radius: 8px;
    min-width: 60px;

    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }

    &.active {
      opacity: 1;
      color: ${theme.colors.secondary};

      .nav-icon {
        transform: scale(1.1);
      }
    }
  }

  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    transition: all 0.3s ease;
  }

  .nav-label {
    font-size: 11px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
  }

  .home-item {
    .nav-label {
      font-weight: 600;
      font-size: 12px;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 380px) {
    .nav-mobile {
      padding: 10px 0 6px 0;
    }

    .nav-item {
      min-width: 50px;
      padding: 2px 4px;
    }

    .nav-label {
      font-size: 10px;
    }

    .home-item {
      min-width: 70px;

      .nav-icon {
        width: 28px;
        height: 28px;
      }

      .nav-label {
        font-size: 11px;
      }
    }
  }
`;

export default NavMobileStyle;
