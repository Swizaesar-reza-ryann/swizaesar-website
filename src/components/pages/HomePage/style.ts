import { theme } from '@/theme';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const blackholePulse = keyframes`
  0%, 100% { 
    transform: scale(1);
    opacity: 0.4;
  }
  50% { 
    transform: scale(1.05);
    opacity: 0.6;
  }
`;

const blackholeRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const HomePageStyle = styled.div`
  display: block;
  min-height: 100vh;
  position: relative;

  .home-section {
    display: flex;
    gap: 24px;
    align-items: center;
    min-height: 80vh;
    padding: 32px 0;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 24px;
      text-align: center;
    }
  }

  .summary {
    position: relative;
    z-index: 2;

    &::before {
      content: '';
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 300px;
      background: radial-gradient(
        circle at center,
        rgba(108, 92, 231, 0.3) 0%,
        rgba(0, 212, 255, 0.2) 40%,
        rgba(255, 110, 199, 0.1) 70%,
        transparent 100%
      );
      border-radius: 50%;
      filter: blur(20px);
      animation:
        ${blackholePulse} 8s ease-in-out infinite,
        ${blackholeRotate} 30s linear infinite;
      pointer-events: none;
      z-index: 0;
    }

    &-job {
      color: ${theme.colors.secondary};
      font-size: 1.125rem;
      font-weight: 500;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    &-name {
      font-size: 4rem;
      margin-top: 0px;
      line-height: 0.9;
      margin-bottom: 16px;
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      position: relative;
      z-index: 3;

      &[data-mobile='true'] {
        font-size: 3rem;
        line-height: 1.1;
      }

      span {
        -webkit-text-fill-color: ${theme.colors.text};
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
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;

    &__code {
      width: 350px;
      height: 220px;
      background: ${theme.colors.primary};
      border-radius: 8px;
      padding: 16px;
      position: relative;
      z-index: 1;
      transition: transform 0.3s ease;
      will-change: transform;

      &[data-mobile='true'] {
        margin-bottom: 24px;
        border: 1px solid ${theme.colors.secondary};
      }

      &:hover {
        transform: scale(1.15);
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
        font-family: 'Fira Code', monospace;
        font-size: 14px;

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

        .bracket {
          color: #60a5fa;
        }
      }

      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.15);
      }
    }

    &__language {
      position: absolute;
      top: 16px;
      right: 16px;
      display: flex;
      gap: 8px;

      &-item {
        padding: 6px 12px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
          background: ${theme.colors.secondary};
          color: ${theme.colors.primary};
        }
      }
    }

    &__theme {
      position: absolute;
      bottom: 16px;
      right: 16px;
      display: flex;
      gap: 8px;

      &-item {
        width: 24px;
        height: 24px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;

        &.light {
          background: rgba(255, 255, 255, 0.2);
          color: ${theme.colors.text};
        }

        &.dark {
          background: rgba(0, 0, 0, 0.2);
          color: ${theme.colors.text};
        }
      }
    }

    &__fullscreen {
      position: absolute;
      bottom: 16px;
      left: 16px;
      width: 32px;
      height: 32px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.text};

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export default HomePageStyle;
