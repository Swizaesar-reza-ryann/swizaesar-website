import styled from '@emotion/styled';
import { theme } from '@/theme';

export const GameContainer = styled.div<{ customBackground?: string }>`
  background: ${({ customBackground }) =>
    customBackground || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;

  &[data-mobile='true'] {
    width: 100%;
  }

  .game-message {
    text-align: center;
  }
`;

export const GameHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  color: white;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

export const GameStats = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  flex-wrap: wrap;
  justify-content: center;

  .stat {
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    min-width: 80px;
    transition: all 0.3s ease;

    &.countdown {
      color: #fbbf24;
      font-size: 1.2rem;
      font-weight: 700;
      text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
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
    gap: 1rem;
    padding: 0.8rem 1.5rem;

    .stat {
      font-size: 0.9rem;
      min-width: 70px;

      &.countdown {
        font-size: 1.1rem;
      }
    }
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  width: 100%;
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
  transition: transform 0.3s ease;

  &:hover:not(.matched) {
    transform: scale(1.05);
  }

  &.matched {
    cursor: default;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
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
    border-radius: 12px;
    font-size: 2rem;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .card-front {
    background: ${({ customCardFront }) =>
      customCardFront || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  .card-back {
    background: ${({ customCardBack }) => customCardBack || 'white'};
    color: #333;
    transform: rotateY(180deg);
    border: 2px solid ${theme.colors.secondary};
  }

  ${({ isMatched }) =>
    isMatched &&
    `
    .card-back {
      background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
      color: white;
      animation: matchPulse 0.6s ease;
    }
  `}
`;

export const GameButton = styled.button`
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const GameButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const WinButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const CountdownDisplay = styled.div`
  padding: 1rem 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  margin-bottom: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  span {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  &.countdown span {
    color: #fbbf24;
    font-size: 1.4rem;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
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

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    margin-bottom: 1rem;

    span {
      font-size: 1.1rem;
    }

    &.countdown span {
      font-size: 1.2rem;
    }
  }
`;

export const gameMessageStyles = `
  @keyframes matchPulse {
    0% { transform: scale(1) rotateY(180deg); }
    50% { transform: scale(1.1) rotateY(180deg); }
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
