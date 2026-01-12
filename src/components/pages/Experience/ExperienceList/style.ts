import { theme } from '@/theme';
import styled from '@emotion/styled';

const ExperienceListStyle = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  width: 100%;
  padding-bottom: 24px;

  &::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 100%;
    background: ${theme.colors.text};
    z-index: 2;
    left: 14px;
  }

  .experience-list {
    &__icon {
      position: relative;
      z-index: 3;
      width: 30px;
      height: 30px;
      border: 1px solid ${theme.colors.text};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.secondary};
    }

    &__content {
      z-index: 3;
      width: calc(100% - 30px - 15%);

      &-title {
        color: ${theme.colors.secondary};
        margin: 5px 0 10px;
      }

      &-subtitle {
        margin-top: 0;
        color: ${theme.colors.text};
        font-weight: 500;
      }

      &-description {
        padding-left: 16px;

        &-list {
          margin-bottom: 12px;
          font-size: 14px;
        }
      }
    }

    &__date {
      width: 15%;
      margin: 5px 0;
      z-index: 3;
      color: ${theme.colors.text};
    }
  }
`;

export default ExperienceListStyle;
