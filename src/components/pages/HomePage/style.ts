import { theme } from '@/theme';
import styled from '@emotion/styled';

const HomePageStyle = styled.div`
  padding: 24px 0 48px;

  .home-section {
    display: flex;
    gap: 48px;
    align-items: center;
    min-height: calc(100dvh - 200px);
  }

  .summary {
    flex: 1;
    min-width: 0;

    &-job {
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      color: ${theme.colors.accent};
      background: ${theme.colors.accentLight};
      padding: 6px 14px;
      border-radius: ${theme.radius.full};
      margin-bottom: 20px;
    }

    &-name {
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 700;
      margin: 0 0 20px;
      line-height: 1.05;
      letter-spacing: -0.03em;
      color: ${theme.colors.text};

      span {
        display: block;
        background: linear-gradient(
          135deg,
          ${theme.colors.primary} 0%,
          ${theme.colors.accent} 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      &[data-mobile='true'] {
        font-size: clamp(2rem, 8vw, 2.75rem);
        line-height: 1.1;
      }
    }

    &-description {
      color: ${theme.colors.textSecondary};
      line-height: 1.7;
      font-size: 1.0625rem;
      max-width: 540px;
      margin: 0 0 28px;

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
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primaryLight};
          background: ${theme.colors.primaryLight};
          transform: translateY(-2px);
        }
      }
    }
  }

  .card-developer {
    flex: 0 0 48%;
    max-width: 520px;
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.lg};
    padding: 24px;
    box-shadow: ${theme.shadows.lg};
    display: flex;
    align-items: center;
    justify-content: center;

    &__code {
      width: 100%;
      max-width: 380px;
      background: #1e293b;
      border-radius: ${theme.radius.md};
      padding: 20px;
      font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
      font-size: 0.8125rem;
      line-height: 1.6;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
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
            color: #c084fc;
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
              color: #93c5fd;
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
              color: #94a3b8;
            }
          }
        }
      }

      .bracket {
        color: #94a3b8;
      }
    }

    &:hover .card-developer__code {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.xl};
    }
  }

  @media (max-width: 768px) {
    padding: 8px 0 32px;

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
    }
  }
`;

export default HomePageStyle;
