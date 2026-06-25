import styled from '@emotion/styled';
import { theme } from '@/theme';

export const FloatingChatStyle = styled.button`
  position: fixed;
  bottom: 96px;
  right: 16px;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 12px;
  border-radius: ${theme.radius.full};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${theme.shadows.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &:hover {
    transform: translateY(-2px);
    background: ${theme.colors.primaryDark};
    box-shadow: ${theme.shadows.xl};
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
