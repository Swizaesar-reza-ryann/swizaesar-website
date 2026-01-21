import { theme } from '@/theme';
import styled from '@emotion/styled';

const ExperiencePageStyle = styled.div`
  .experience {
    &-title {
      text-align: center;
      margin-bottom: 32px;

      div {
        position: relative;

        h1 {
          color: ${theme.colors.text};
          margin: 0 0 32px 0;
        }

        &::after {
          content: '';
          position: absolute;
          width: 10%;
          margin: auto;
          left: 0;
          right: 0;
          bottom: -12px;
          border-radius: 4px;
          height: 4px;
          background: ${theme.colors.secondary};
        }
      }

      h4 {
        font-weight: 300;
      }
    }
  }
`;

export default ExperiencePageStyle;
