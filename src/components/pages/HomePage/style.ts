import { theme } from '@/theme';
import styled from '@emotion/styled';

const HomePageStyle = styled.div`
  display: block;

  .home-section {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .summary {
    position: relative;
    z-index: 2;

    &-job {
      color: ${theme.colors.secondary};
    }

    &-name {
      font-size: 4rem;
      margin-top: 0px;
      line-height: 0.9;
      margin-bottom: 16px;
      background: linear-gradient(
        90deg,
        ${theme.colors.secondary},
        ${theme.colors.text}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      span {
        -webkit-text-fill-color: ${theme.colors.text};
      }

      &[data-mobile='true'] {
        font-size: 3rem;
        line-height: 1.1;
      }
    }

    &-description {
      color: ${theme.colors.text};
      line-height: 1.5;
      font-size: 1.2rem;
      max-width: 920px;

      &[data-mobile='true'] {
        font-size: 1rem;
      }
    }

    &-button {
      font-weight: 600;
      margin-bottom: 24px;

      &[data-mobile='true'] {
        margin-bottom: 16px;
        font-size: 1rem;
      }
    }

    &-social__media {
      display: flex;
      gap: 16px;
      position: relative;
      z-index: 2;

      a {
        cursor: pointer;
      }
    }
  }

  .card-developer {
    width: 65%;
    height: 550px;
    background: #352723;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__code {
      width: 350px;
      height: 220px;
      background: ${theme.colors.primary};
      border-radius: 8px;
      padding: 16px;

      /* ONLY hover animation */
      transition: transform 0.3s ease;
      will-change: transform;

      &[data-mobile='true'] {
        margin-bottom: 24px;
        border: 1px solid ${theme.colors.secondary};
      }

      &-menu {
        display: flex;
        gap: 6px;
        margin-bottom: 24px;

        &-item {
          width: 10px;
          height: 10px;
          border-radius: 50%;

          &.close {
            background: #ef4444;
          }

          &.minimize {
            background: #ebb30b;
          }

          &.full-screen {
            background: #22c55f;
          }
        }
      }

      &-content {
        &-variable {
          display: flex;

          .const {
            color: #c084fc;
          }

          .name {
            color: #a3e635;
          }

          .operator {
            color: #f97316;
          }
        }

        &-object {
          margin-left: 16px;

          &-value {
            display: flex;

            .value {
              color: #60a5fa;

              &-boolean {
                color: #ad06ca;
              }
            }

            .bracket {
              color: #60a5fa;
            }
          }
        }
      }

      .bracket {
        color: #60a5fa;
      }
    }

    &:hover {
      transition: all 0.3s ease;

      .card-developer__code {
        transform: scale(1.15);
      }
    }
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default HomePageStyle;
