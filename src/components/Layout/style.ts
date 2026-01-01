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
    background: ${theme.colors.background};
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
  padding-top: 64px;
`;


