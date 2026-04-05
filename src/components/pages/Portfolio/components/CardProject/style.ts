import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '@/theme';

const colorTransition = keyframes`
  0% { background: ${theme.colors.secondary}; }
  100% { background: #ea580c; }
`;

const CardProjectStyle = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #525151dd;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  .card {
    &-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;

      svg {
        color: ${theme.colors.secondary};
      }

      h5 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        color: ${theme.colors.text};
      }

      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: ${theme.colors.text};
      }
    }

    &-title {
      h3 {
        margin: 0 0 16px;
        font-size: 18px;
        font-weight: 600;
        color: ${theme.colors.secondary};
      }
    }

    &-body {
      flex: 1;
      margin-bottom: 16px;

      p {
        margin: 0;
        color: ${theme.colors.text};
        opacity: 0.8;
        line-height: 1.5;
        font-size: 14px;
      }
    }

    &-footer {
    .view-project-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: ${theme.colors.secondary};
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${theme.colors.gradient};
        transform: translateX(-100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);

        &::before {
          transform: translateX(0);
        }

        svg {
          transform: rotate(15deg);
        }
      }

      &:active {
        transform: translateY(-1px);
      }

      svg {
        color: white;
        transition: transform 0.3s ease;
        position: relative;
        z-index: 1;
      }

      span {
        position: relative;
        z-index: 1;
      }
    }
  }
`;

export default CardProjectStyle;
