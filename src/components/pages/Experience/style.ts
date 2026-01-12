import { theme } from '@/theme';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-1000px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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
          width: 15%;
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
