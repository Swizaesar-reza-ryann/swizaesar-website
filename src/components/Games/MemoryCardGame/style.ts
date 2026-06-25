import styled from '@emotion/styled';
import { theme } from '@/theme';

export const GameContainer = styled.div<{ customBackground?: string }>`
  background: ${({ customBackground }) => customBackground || 'transparent'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  &[data-mobile='true'] {
    width: 100%;
  }

  .game-message {
    text-align: center;
  }
`;

export const GameHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  display: none;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${theme.colors.text};
  }

  p {
    font-size: 0.9375rem;
    color: ${theme.colors.textSecondary};
  }
`;

export const GameStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  background: ${theme.colors.surfaceHover};
  border: 1px solid ${theme.colors.border};
  padding: 12px 20px;
  border-radius: ${theme.radius.lg};
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .stat {
    color: ${theme.colors.textSecondary};
    font-size: 0.875rem;
    font-weight: 600;
    text-align: center;
    min-width: 72px;

    &.countdown {
      color: ${theme.colors.primary};
      font-size: 1rem;
      font-weight: 700;
      animation: pulse 1s infinite;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 10px 16px;

    .stat {
      font-size: 0.8125rem;
      min-width: 64px;
    }
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.625rem;
  margin-bottom: 1.5rem;
  width: 100%;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const Card = styled.div<{
  isFlipped: boolean;
  isMatched: boolean;
  customCardBack?: string;
  customCardFront?: string;
}>`
  aspect-ratio: 1;
  cursor: pointer;
  perspective: 1000px;
  transition: transform 0.2s ease;

  &:hover:not(.matched) {
    transform: scale(1.04);
  }

  &.matched {
    cursor: default;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    transform: ${({ isFlipped, isMatched }) =>
      isFlipped || isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.radius.md};
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: bold;
    box-shadow: ${theme.shadows.sm};
  }

  .card-front {
    background: ${({ customCardFront }) =>
      customCardFront ||
      `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`};
    color: white;
    border: 2px solid ${theme.colors.primaryLight};
  }

  .card-back {
    background: ${({ customCardBack }) => customCardBack || theme.colors.surface};
    color: ${theme.colors.text};
    transform: rotateY(180deg);
    border: 2px solid ${theme.colors.border};
  }

  ${({ isMatched }) =>
    isMatched &&
    `
    .card-back {
      background: linear-gradient(135deg, #34d399 0%, #059669 100%);
      color: white;
      border-color: #059669;
      animation: matchPulse 0.6s ease;
    }
  `}
`;

export const GameButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: ${theme.radius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${theme.shadows.sm};
  margin: 0.25rem;
  font-family: inherit;

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }

  &[data-mobile='true'] {
    font-size: 0.8125rem;
    padding: 10px 18px;
  }
`;

export const GameButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 0.75rem;
  flex-wrap: wrap;
`;

export const WinButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.25rem;
  position: relative;
  z-index: 2;
`;

export const CountdownDisplay = styled.div`
  padding: 12px 20px;
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.surfaceHover};
  border: 1px solid ${theme.colors.border};
  margin-bottom: 1.25rem;
  text-align: center;
  width: 100%;

  span {
    color: ${theme.colors.textSecondary};
    font-size: 1rem;
    font-weight: 600;
  }

  &.countdown span {
    color: ${theme.colors.primary};
    font-size: 1.125rem;
    font-weight: 700;
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const gameMessageStyles = `
  @keyframes matchPulse {
    0% { transform: scale(1) rotateY(180deg); }
    50% { transform: scale(1.08) rotateY(180deg); }
    100% { transform: scale(1) rotateY(180deg); }
  }

  @keyframes messageSlide {
    0% { 
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    100% { 
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;
