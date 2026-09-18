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
    opacity: 0.28;
  }

  .network-bg {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.85;
  }

  .site-bg-veil {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background: linear-gradient(
      180deg,
      rgba(12, 9, 8, 0.2) 0%,
      rgba(12, 9, 8, 0.35) 55%,
      rgba(12, 9, 8, 0.55) 100%
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

  .planet {
    position: fixed;
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: screen;
    user-select: none;
    will-change: transform;

    &--ring {
      width: min(34vw, 360px);
      top: 12%;
      right: -4%;
      opacity: 0.42;
      animation: planet-float-a 22s ease-in-out infinite;
    }

    &--moon {
      width: min(18vw, 180px);
      bottom: 18%;
      left: 4%;
      opacity: 0.34;
      animation: planet-float-b 28s ease-in-out infinite;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  @keyframes planet-float-a {
    0%,
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    50% {
      transform: translate3d(-18px, 22px, 0) rotate(4deg);
    }
  }

  @keyframes planet-float-b {
    0%,
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    50% {
      transform: translate3d(14px, -16px, 0) rotate(-5deg);
    }
  }

  @media (max-width: 768px) {
    .planet--ring {
      width: 46vw;
      top: 8%;
      right: -12%;
      opacity: 0.28;
    }

    .planet--moon {
      width: 26vw;
      bottom: 22%;
      left: -4%;
      opacity: 0.22;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .planet--ring,
    .planet--moon {
      animation: none;
    }
  }

  .layout-content {
    position: relative;
    z-index: 1;
  }
`;
