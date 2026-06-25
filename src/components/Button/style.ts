import { theme } from '@/theme';
import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  padding: 8px 16px;
  border-radius: ${theme.radius.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  font-family: inherit;
  letter-spacing: -0.01em;

  &.primary {
    background: ${theme.colors.primary};
    color: #fff;
    border-color: ${theme.colors.primary};
    box-shadow: ${theme.shadows.sm};

    &:hover {
      background: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
      box-shadow: ${theme.shadows.md};
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &.secondary {
    background: ${theme.colors.surface};
    color: ${theme.colors.text};
    border-color: ${theme.colors.border};

    &:hover {
      background: ${theme.colors.surfaceHover};
      border-color: ${theme.colors.borderStrong};
    }
  }

  &.outline {
    background: transparent;
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

    &:hover {
      background: ${theme.colors.primaryLight};
    }
  }

  &.small {
    padding: 6px 14px;
    font-size: 0.8125rem;
  }

  &.medium {
    padding: 10px 18px;
    font-size: 0.9375rem;
  }

  &.large {
    padding: 14px 28px;
    font-size: 1rem;
  }

  &.full-width {
    width: 100%;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;
