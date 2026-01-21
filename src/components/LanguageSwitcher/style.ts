import { theme } from '@/theme';
import styled from '@emotion/styled';

export const LanguageSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 16px;
  left: 136px;
  z-index: 1000;

  &[data-mobile='true'] {
    right: 16px;
    left: unset;
  }
`;

export const LanguageToggle = styled.button<{ active: 'id' | 'en' }>`
  display: flex;
  align-items: center;
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 25px;
  padding: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 80px;
  height: 36px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: ${({ active }) => (active === 'id' ? '4px' : '50%')};
    width: calc(50% - 4px);
    height: calc(100% - 8px);
    background: ${theme.colors.secondary};
    border-radius: 18px;
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const LanguageOption = styled.span<{ active: boolean }>`
  flex: 1;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 18px;
  transition: all 0.3s ease;
  color: ${({ active }) =>
    active ? theme.colors.text : theme.colors.secondary};
  text-align: center;
  position: relative;
  z-index: 2;
`;
