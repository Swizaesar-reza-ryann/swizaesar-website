import { theme } from '@/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Montserrat', var(--font-montserrat), sans-serif;
    margin: 0;
    padding: 0;
    background: ${theme.colors.bg};
    color: ${theme.colors.text};
    line-height: 1.6;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.primaryDark};
    }
  }

  ::selection {
    background: ${theme.colors.primaryLight};
    color: ${theme.colors.primaryDark};
  }
`;

export const LayoutStyle = styled.div`
  padding-top: 72px;
  position: relative;
  min-height: 100dvh;
  overflow: clip;

  &[data-mobile='true'] {
    padding-top: 56px;
    padding-bottom: 88px;
  }

  .ambient-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;

    &--primary {
      width: 480px;
      height: 480px;
      top: -120px;
      right: -120px;
      background: ${theme.colors.primaryLight};
      opacity: 0.6;
    }

    &--accent {
      width: 360px;
      height: 360px;
      bottom: 200px;
      left: -100px;
      background: ${theme.colors.accentLight};
      opacity: 0.5;
    }
  }

  .layout-content {
    position: relative;
    z-index: 1;
  }
`;
