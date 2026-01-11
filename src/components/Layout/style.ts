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
   cursor: pointer;

   &:hover {
    color: ${theme.colors.secondary};
   }
  }
`;

export const LayoutStyle = styled.div`
  padding-top: 134px;
  position: relative;
  min-height: 100dvh;
  overflow: clip;

  .blur-circle{
    position: absolute;
    opacity: 0.3;
    width: 500px;
    height: 500px;
    background-color: ${theme.colors.secondary}; 
    border-radius: 50%; 
    filter: blur(120px);

    &-top{
        top: -250px;
        right: -250px;  
    }

    &-bottom{
        bottom: -250px;
        left: -250px;
    }
  }
`;




