import { theme } from '@/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const subtleStars = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
`;

export const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #05010a 0%, #0b0f2a 50%, #1a1f4c 100%);
    color: ${theme.colors.text};
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(
        1px 1px at 25% 35%,
        rgba(255, 255, 255, 0.2),
        transparent
      ),
      radial-gradient(
        1px 1px at 65% 75%,
        rgba(255, 255, 255, 0.15),
        transparent
      ),
      radial-gradient(
        0.5px 0.5px at 55% 55%,
        rgba(255, 255, 255, 0.25),
        transparent
      ),
      radial-gradient(
        0.5px 0.5px at 85% 25%,
        rgba(255, 255, 255, 0.15),
        transparent
      ),
      radial-gradient(
        1px 1px at 15% 85%,
        rgba(255, 255, 255, 0.15),
        transparent
      ),
      radial-gradient(
        0.5px 0.5px at 95% 65%,
        rgba(255, 255, 255, 0.2),
        transparent
      ),
      radial-gradient(
        0.5px 0.5px at 35% 15%,
        rgba(255, 255, 255, 0.15),
        transparent
      ),
      radial-gradient(
        1px 1px at 75% 95%,
        rgba(255, 255, 255, 0.15),
        transparent
      );
    background-size: 400% 400%;
    background-position: 0% 0%;
    animation: ${subtleStars} 60s ease-in-out infinite;
    opacity: 0.4;
    pointer-events: none;
    z-index: -1;
  }

  a {
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
  padding-bottom: 32px;

  &[data-mobile='true'] {
    padding-top: 64px;
    padding-bottom: 95px;
  }

  .blur-circle {
    position: absolute;
    opacity: 0.3;
    width: 500px;
    height: 500px;
    background-color: ${theme.colors.secondary};
    border-radius: 50%;
    filter: blur(120px);

    &-top {
      top: -250px;
      right: -250px;
    }

    &-bottom {
      bottom: -250px;
      left: -250px;
    }
  }
`;
