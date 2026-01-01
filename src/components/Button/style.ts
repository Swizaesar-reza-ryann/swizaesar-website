// @/components/Button/style.ts
import { theme } from "@/theme";
import styled from "@emotion/styled";

export const ButtonStyle = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;

  /* Variants */
  &.primary {
    background: ${theme.colors.secondary};
    color: ${theme.colors.text};
    border-color: ${theme.colors.secondary};

    &:hover {
      opacity: 0.9;
    }
  }

  &.secondary {
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
    border-color: ${theme.colors.text};

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &.outline {
    background: transparent;
    color: ${theme.colors.text};
    border-color: ${theme.colors.text};

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  /* Sizes */
  &.small {
    padding: 4px 12px;
    font-size: 0.875rem;
  }

  &.medium {
    padding: 8px 16px;
    font-size: 1rem;
  }

  &.large {
    padding: 12px 24px;
    font-size: 1.125rem;
  }

  /* Full width */
  &.full-width {
    width: 100%;
  }

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;