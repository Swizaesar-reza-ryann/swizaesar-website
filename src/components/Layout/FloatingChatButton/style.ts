import styled from '@emotion/styled';
import { theme } from '@/theme';

export const FloatingChatStyle = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  color: white;
  border: none;
  padding: 9px 9px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    display: none; /* Hide on desktop, show only on mobile */
  }
`;
