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
    width: 18%;

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

    &.home-item {
      min-width: 80px;
      position: relative;
      opacity: 1;
      top: -15px; /* Move home item up to extend 50% beyond border */

      .nav-icon {
        position: absolute;
        width: 76px;
        height: 76px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #19191a;
        border-radius: 50%;
        color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.secondary};
        transition: all 0.3s ease;
      }

      .nav-label {
        font-weight: 600;
        font-size: 12px;
        margin-top: 4px;
      }

      &:hover .nav-icon {
        transform: scale(1.15);
        box-shadow: 0 6px 16px rgba(249, 115, 22, 0.4);
      }

      &.active .nav-icon {
        transform: scale(1.2);
        box-shadow: 0 8px 20px rgba(249, 115, 22, 0.5);
        transition: all 0.3s ease;
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
      top: -21px; /* Maintain 50% extension on smaller screens */

      .nav-icon {
        width: 48px;
        height: 48px;
      }

      .nav-label {
        font-size: 11px;
      }
    }
  }
`;

export default NavMobileStyle;
