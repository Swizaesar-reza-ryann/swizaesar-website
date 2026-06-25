import { theme } from '@/theme';
import styled from '@emotion/styled';

const ExperienceListStyle = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  padding-bottom: 32px;

  &:last-child {
    padding-bottom: 0;

    &::after {
      display: none;
    }
  }

  &::after {
    position: absolute;
    content: '';
    width: 2px;
    height: calc(100% - 8px);
    background: ${theme.colors.border};
    top: 40px;
    left: 19px;
  }

  .experience-list {
    &__icon {
      position: relative;
      z-index: 2;
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border: 2px solid ${theme.colors.primaryLight};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.surface};
      color: ${theme.colors.primary};
      box-shadow: ${theme.shadows.sm};
    }

    &__content {
      flex: 1;
      min-width: 0;
      background: ${theme.colors.surface};
      border: 1px solid ${theme.colors.border};
      border-radius: ${theme.radius.lg};
      padding: 20px 24px;
      box-shadow: ${theme.shadows.sm};
      transition: box-shadow 0.2s ease;

      &:hover {
        box-shadow: ${theme.shadows.md};
      }

      &-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
        margin-bottom: 4px;

        &[data-mobile='true'] {
          flex-direction: column;
          gap: 4px;
        }
      }

      &-title {
        color: ${theme.colors.primary};
        margin: 0;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: -0.01em;
      }

      &-subtitle {
        margin: 4px 0 12px;
        color: ${theme.colors.textSecondary};
        font-weight: 500;
        font-size: 0.875rem;
      }

      &-description {
        padding-left: 0;
        margin: 0;
        list-style: none;

        &-list {
          position: relative;
          padding-left: 18px;
          margin-bottom: 8px;
          font-size: 0.875rem;
          color: ${theme.colors.textSecondary};
          line-height: 1.6;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 9px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${theme.colors.accent};
          }

          &:last-child {
            margin-bottom: 0;
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
      padding: 4px 10px;
      border-radius: ${theme.radius.full};
      white-space: nowrap;

      &[data-mobile='true'] {
        align-self: flex-start;
      }
    }
  }
`;

export default ExperienceListStyle;
