import { theme } from '@/theme';
import styled from '@emotion/styled';

export const LanguageSwitcherContainer = styled.div<{ $variant: 'fixed' | 'inline' }>`
  display: flex;
  align-items: center;

  ${({ $variant }) =>
    $variant === 'fixed'
      ? `
    position: fixed;
    top: 12px;
    right: 12px;
    left: unset;
    z-index: 1001;

    @media (min-width: 768px) {
      display: none;
    }
  `
      : `
    position: static;
    z-index: auto;
  `}
`;

export const LanguageToggle = styled.button<{ active: 'id' | 'en' }>`
  display: flex;
  align-items: center;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.full};
  padding: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 72px;
  height: 32px;
  position: relative;
  box-shadow: none;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: ${({ active }) => (active === 'id' ? '3px' : '50%')};
    width: calc(50% - 3px);
    height: calc(100% - 6px);
    background: ${theme.gradients.cta};
    border-radius: ${theme.radius.full};
    transition: all 0.2s ease;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(240, 134, 90, 0.4);
  }
`;

export const LanguageOption = styled.span<{ active: boolean }>`
  flex: 1;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 600;
  border-radius: ${theme.radius.full};
  transition: color 0.2s ease;
  color: ${({ active }) => (active ? '#fff' : theme.colors.textSecondary)};
  text-align: center;
  position: relative;
  z-index: 2;
`;
