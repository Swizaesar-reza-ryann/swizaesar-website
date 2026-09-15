import { theme } from '@/theme';
import styled from '@emotion/styled';

const ExperienceListStyle = styled.div`
  display: flex;
  gap: 28px;
  position: relative;

  &[data-last='false']::after {
    position: absolute;
    content: '';
    width: 2px;
    height: calc(100% + 36px);
    background: linear-gradient(
      180deg,
      rgba(240, 134, 90, 0.45) 0%,
      ${theme.colors.border} 100%
    );
    top: 48px;
    left: 21px;
  }

  .experience-list {
    &__icon {
      position: relative;
      z-index: 2;
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      margin-top: 4px;
      border: 2px solid rgba(240, 134, 90, 0.4);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.surface};
      color: ${theme.colors.primary};
      box-shadow: ${theme.shadows.glowSoft};
    }

    &__content {
      position: relative;
      flex: 1;
      min-width: 0;
      background: ${theme.colors.surface};
      border: 1px solid ${theme.colors.border};
      border-radius: ${theme.radius.xl};
      padding: 28px 32px;
      box-shadow: ${theme.shadows.sm};
      transition: all 0.25s ease;
      overflow: hidden;

      &:hover {
        box-shadow: ${theme.shadows.md}, ${theme.shadows.glowSoft};
        border-color: rgba(240, 134, 90, 0.3);
      }

      &-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 8px;
      }

      &-title {
        color: ${theme.colors.accent};
        margin: 0;
        font-family: ${theme.fonts.display};
        font-size: 1.25rem;
        font-weight: 400;
        letter-spacing: -0.01em;
        line-height: 1.3;
      }

      &-subtitle {
        margin: 0 0 18px;
        color: ${theme.colors.textSecondary};
        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 1.5;
      }

      &-description {
        padding-left: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;

        &-list {
          position: relative;
          padding-left: 20px;
          margin: 0;
          font-size: 0.9375rem;
          color: ${theme.colors.textSecondary};
          line-height: 1.7;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 11px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${theme.colors.primary};
            box-shadow: 0 0 8px rgba(240, 134, 90, 0.5);
          }
        }
      }
    }

    &__date {
      flex-shrink: 0;
      font-size: 0.8125rem;
      font-weight: 500;
      color: ${theme.colors.textMuted};
      background: ${theme.colors.surfaceHover};
      border: 1px solid ${theme.colors.border};
      padding: 6px 12px;
      border-radius: ${theme.radius.full};
      white-space: nowrap;
    }

    &__meta {
      display: none;
    }
  }

  /* —— Mobile: card-first, no side rail —— */
  @media (max-width: 768px) {
    gap: 0;

    &[data-last='false']::after {
      display: none;
    }

    .experience-list {
      &__icon {
        display: none;
      }

      &__content {
        padding: 20px 18px 22px;
        border-radius: 18px;
        box-shadow: ${theme.shadows.md};

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: ${theme.gradients.rim};
          opacity: 0.85;
        }

        &-top {
          flex-direction: column;
          align-items: stretch;
          gap: 12px;
          margin-bottom: 0;
        }

        &-title {
          font-size: 1.35rem;
          line-height: 1.25;
          padding-right: 4px;
        }

        &-subtitle {
          margin: 0 0 16px;
          font-size: 0.875rem;
          line-height: 1.45;
          color: ${theme.colors.text};
          font-weight: 500;
        }

        &-description {
          gap: 14px;
          padding-top: 16px;
          border-top: 1px solid ${theme.colors.border};

          &-list {
            padding-left: 18px;
            font-size: 0.875rem;
            line-height: 1.65;
            color: ${theme.colors.textSecondary};

            &::before {
              top: 9px;
              width: 5px;
              height: 5px;
            }
          }
        }
      }

      &__date {
        align-self: flex-start;
        font-size: 0.75rem;
        letter-spacing: 0.02em;
        padding: 7px 12px;
        white-space: normal;
        line-height: 1.35;
        max-width: 100%;
        background: ${theme.colors.primaryLight};
        border-color: rgba(240, 134, 90, 0.28);
        color: ${theme.colors.accent};
      }

      &__meta {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 14px;
      }

      &__meta-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 10px;
        border: 1px solid rgba(240, 134, 90, 0.35);
        background: ${theme.colors.primaryLight};
        color: ${theme.colors.primary};
        flex-shrink: 0;
      }
    }
  }
`;

export default ExperienceListStyle;
