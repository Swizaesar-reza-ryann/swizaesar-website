import { theme } from '@/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    background: ${theme.colors.primary};
    color: ${theme.colors.text}
  }

  a{
   color: ${theme.colors.text};
   text-decoration: none;
   transition: color 0.3s ease;

   &:hover {
    color: ${theme.colors.secondary};
   }
  }
`;

export const LayoutStyle = styled.div`
  padding-top: 52px;
  position: relative;

  .blur-circle{
    position: absolute;
    opacity: 0.3;
    background-color: ${theme.colors.secondary}; 
    border-radius: 50%; 
    filter: blur(120px);

    &-top{
        top: -250px;
        right: -250px;
        width: 500px;
        height: 500px;
    }
  }
`;




