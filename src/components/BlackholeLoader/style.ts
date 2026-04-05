import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Animations
export const blackholePulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
`;

export const swirlRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`;

export const glowPulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

export const particleFloat = keyframes`
  0%, 100% { transform: translateY(0px); opacity: 0.4; }
  50% { transform: translateY(-30px); opacity: 0.8; }
`;

// Styled Components
export const LoaderContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #05010a 0%, #0b0f2a 50%, #1a1f4c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
`;

export const BlackholeCore = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerBlackhole = styled.div`
  width: 120px;
  height: 120px;
  background: radial-gradient(
    circle at center,
    #000000 0%,
    #1a1f4c 30%,
    #2d3561 60%,
    transparent 100%
  );
  border-radius: 50%;
  position: relative;
  z-index: 3;
  animation: ${blackholePulse} 4s ease-in-out infinite;
`;

export const GlowRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  background: radial-gradient(
    circle at center,
    transparent 30%,
    rgba(108, 92, 231, 0.4) 40%,
    rgba(0, 212, 255, 0.3) 60%,
    rgba(255, 110, 199, 0.2) 80%,
    transparent 100%
  );
  border-radius: 50%;
  animation: ${glowPulse} 3s ease-in-out infinite;
  filter: blur(2px);
`;

export const SwirlRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  background: conic-gradient(
    from 0deg,
    rgba(108, 92, 231, 0.3) 0deg,
    rgba(0, 212, 255, 0.2) 90deg,
    rgba(255, 110, 199, 0.3) 180deg,
    rgba(108, 92, 231, 0.3) 270deg,
    rgba(0, 212, 255, 0.2) 360deg
  );
  border-radius: 50%;
  animation: ${swirlRotate} 8s linear infinite;
  opacity: 0.6;
  filter: blur(1px);
`;

export const Particle = styled.div<{ delay: number; duration: number }>`
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  animation: ${particleFloat} ${({ duration }) => duration}s ease-in-out
    infinite;
  animation-delay: ${({ delay }) => delay}s;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
`;

// Text Styles
export const loadingText = {
  position: 'absolute' as const,
  bottom: '20%',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center' as const,
  color: '#aab0d6',
  fontSize: '14px',
  fontWeight: '500' as const,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  opacity: 0.8,
};
