import { theme } from '@/theme';
import styled from '@emotion/styled';

const HomePageStyle = styled.div`
  padding: 32px 0 64px;

  .home-section {
    display: flex;
    gap: 56px;
    align-items: center;
    min-height: calc(100dvh - 200px);
  }

  .summary {
    flex: 1;
    min-width: 0;

    &-job {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${theme.colors.accent};
      background: ${theme.colors.primaryLight};
      border: 1px solid rgba(240, 134, 90, 0.28);
      padding: 7px 14px;
      border-radius: ${theme.radius.full};
      margin-bottom: 24px;

      &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${theme.colors.primary};
        box-shadow: 0 0 10px ${theme.colors.primary};
      }
    }

    &-name {
      font-family: ${theme.fonts.display};
      font-size: clamp(2.75rem, 7vw, 4.5rem);
      font-weight: 400;
      margin: 0 0 20px;
      line-height: 1.05;
      letter-spacing: -0.02em;
      color: ${theme.colors.text};
      text-shadow: 0 0 60px rgba(240, 134, 90, 0.12);

      span {
        display: block;
        background: ${theme.gradients.accentText};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 0 24px rgba(240, 134, 90, 0.35));
      }

      &[data-mobile='true'] {
        font-size: clamp(2.25rem, 10vw, 3rem);
        line-height: 1.08;
      }
    }

    &-description {
      color: ${theme.colors.textSecondary};
      line-height: 1.75;
      font-size: 1.0625rem;
      max-width: 540px;
      margin: 0 0 32px;

      &[data-mobile='true'] {
        font-size: 0.9375rem;
      }
    }

    &-button {
      margin-bottom: 28px;

      &[data-mobile='true'] {
        margin-bottom: 20px;
        width: 100%;
      }
    }

    &-social__media {
      display: flex;
      gap: 12px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: ${theme.radius.md};
        border: 1px solid ${theme.colors.border};
        background: ${theme.colors.surface};
        color: ${theme.colors.textSecondary};
        transition: all 0.2s ease;
        box-shadow: ${theme.shadows.sm};

        &:hover {
          color: ${theme.colors.accent};
          border-color: rgba(240, 134, 90, 0.4);
          background: ${theme.colors.primaryLight};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.glowSoft};
        }
      }
    }
  }

  .card-developer {
    flex: 0 0 48%;
    max-width: 520px;
    position: relative;
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.xl};
    padding: 24px;
    box-shadow: ${theme.shadows.lg}, ${theme.shadows.glowSoft};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: ${theme.gradients.rim};
      opacity: 0.9;
    }

    &__code {
      width: 100%;
      max-width: 380px;
      background: #0a0706;
      border: 1px solid ${theme.colors.border};
      border-radius: ${theme.radius.lg};
      padding: 20px;
      font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
      font-size: 0.8125rem;
      line-height: 1.6;
      transition: transform 0.35s ease, box-shadow 0.35s ease;
      box-shadow: ${theme.shadows.md};

      &[data-mobile='true'] {
        max-width: 100%;
        margin: 24px 0;
      }

      &-menu {
        display: flex;
        gap: 7px;
        margin-bottom: 20px;

        &-item {
          width: 11px;
          height: 11px;
          border-radius: 50%;

          &.close {
            background: #ef4444;
          }

          &.minimize {
            background: #f59e0b;
          }

          &.full-screen {
            background: #22c55e;
          }
        }
      }

      &-content {
        .operator {
          color: #fbbf24;
        }

        &-variable {
          display: flex;
          flex-wrap: wrap;

          .const {
            color: #f0865a;
          }

          .name {
            color: #86efac;
          }
        }

        &-object {
          margin-left: 16px;

          &-value {
            display: flex;
            flex-wrap: wrap;

            .key {
              color: #ffb089;
            }

            .operator {
              color: #fbbf24;
            }

            .value {
              color: #fde68a;

              &-boolean {
                color: #f472b6;
              }
            }

            .bracket {
              color: #6b635c;
            }
          }
        }
      }

      .bracket {
        color: #6b635c;
      }
    }

    &:hover .card-developer__code {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.xl}, ${theme.shadows.glow};
    }
  }

  @media (max-width: 768px) {
    padding: 8px 0 40px;

    .home-section {
      flex-direction: column;
      gap: 0;
      min-height: auto;
    }

    .card-developer {
      flex: none;
      max-width: 100%;
      width: 100%;
      padding: 16px;
      background: transparent;
      border: none;
      box-shadow: none;

      &::before {
        display: none;
      }
    }
  }
`;

export default HomePageStyle;
