// @/components/Layout/Header/style.ts
import { theme } from '@/theme';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const activeUnderline = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const HeaderStyle = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  background: transparent;
  padding: 16px 0;

  &.scrolled {
    background: rgba(5, 1, 10, 0.8);
    backdrop-filter: blur(10px);
    padding: 8px 0;
  }

  .header {
    &-list {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;

      a {
        padding: 8px 16px;
        color: ${theme.colors.text};
        text-decoration: none;
        font-weight: 500;
        position: relative;
        transition: color 0.3s ease;
        opacity: 0.8;

        &:hover {
          color: ${theme.colors.secondary};
          opacity: 1;
        }

        &.active {
          color: ${theme.colors.secondary};
          opacity: 1;

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 2px;
            background: ${theme.colors.secondary};
            border-radius: 2px;
            animation: ${activeUnderline} 3s ease-in-out infinite;
          }
        }
      }

      button {
        margin-left: 16px;
        background: ${theme.colors.gradient};
        border: none;
        color: white;
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.03);
          box-shadow: 0 0 15px rgba(108, 92, 231, 0.3);
        }
      }
    }
  }
`;

export default HeaderStyle;
