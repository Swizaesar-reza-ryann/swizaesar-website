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
    color-scheme: dark;
  }

  body {
    font-family: ${theme.fonts.sans};
    margin: 0;
    padding: 0;
    background: ${theme.colors.bg};
    color: ${theme.colors.text};
    line-height: 1.6;
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  ::selection {
    background: ${theme.colors.primary};
    color: ${theme.colors.bg};
  }
`;

export const LayoutStyle = styled.div`
  padding-top: 84px;
  position: relative;
  min-height: 100dvh;
  overflow: clip;
  background: ${theme.colors.bg};

  &[data-mobile='true'] {
    padding-top: 56px;
    padding-bottom: 88px;
  }

  .site-bg {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background-color: ${theme.colors.bg};
    background-image: url('/assets/images/site-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.42;
  }

  .site-bg-veil {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background: linear-gradient(
      180deg,
      rgba(12, 9, 8, 0.35) 0%,
      rgba(12, 9, 8, 0.5) 50%,
      rgba(12, 9, 8, 0.7) 100%
    );
  }

  .film-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 2;
    opacity: 0.045;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 180px 180px;
  }

  .ambient-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    z-index: 0;

    &--primary {
      width: 520px;
      height: 520px;
      top: -160px;
      right: -140px;
      background: ${theme.colors.primary};
      opacity: 0.1;
    }

    &--accent {
      width: 400px;
      height: 400px;
      bottom: 160px;
      left: -140px;
      background: #fcd34d;
      opacity: 0.045;
    }
  }

  .layout-content {
    position: relative;
    z-index: 1;
  }
`;
