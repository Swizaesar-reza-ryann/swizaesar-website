import { theme } from '@/theme';
import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  padding: 8px 16px;
  border-radius: ${theme.radius.full};
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
    background: ${theme.gradients.cta};
    color: #fff;
    border-color: transparent;
    box-shadow: ${theme.shadows.glow};

    &:hover {
      filter: brightness(1.06);
      box-shadow: ${theme.shadows.glow}, ${theme.shadows.md};
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
    color: ${theme.colors.accent};
    border-color: rgba(240, 134, 90, 0.45);

    &:hover {
      background: ${theme.colors.primaryLight};
      border-color: ${theme.colors.primary};
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
