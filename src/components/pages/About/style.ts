import { theme } from '@/theme';
import styled from '@emotion/styled';

const AboutPageStyle = styled.div`
  .about {
    &-title {
      margin-bottom: 32px;

      h4 {
        color: ${theme.colors.secondary};
        text-transform: uppercase;
        margin: 18px 0 12px 0;
      }

      div {
        position: relative;
        width: max-content;

        h1 {
          color: ${theme.colors.text};
          margin: 0;
        }

        &::after {
          content: '';
          position: absolute;
          width: 50%;
          height: 4px;
          background: ${theme.colors.secondary};
          bottom: -8px;
          border-radius: 4px;
        }
      }
    }

    &-content {
      &__image {
        position: relative;
        width: 100%;

        img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
      }

      &__text {
        p {
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        h4 {
          margin-top: 32px;
        }
      }
    }
  }

  .image-section {
    &[data-mobile='true'] {
      width: 100%;
    }
  }
`;

export default AboutPageStyle;
