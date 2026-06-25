import { theme } from '@/theme';
import styled from '@emotion/styled';

export const LanguageSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1001;

  @media (max-width: 767px) {
    top: 12px;
    right: 12px;
    left: unset;
  }
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
  min-width: 76px;
  height: 34px;
  position: relative;
  box-shadow: ${theme.shadows.sm};

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: ${({ active }) => (active === 'id' ? '3px' : '50%')};
    width: calc(50% - 3px);
    height: calc(100% - 6px);
    background: ${theme.colors.primary};
    border-radius: ${theme.radius.full};
    transition: all 0.2s ease;
    z-index: 1;
  }

  &:hover {
    border-color: ${theme.colors.primaryLight};
    box-shadow: ${theme.shadows.md};
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
