'use client';

import { useEffect, useState } from 'react';
import {
  LoaderContainer,
  BlackholeCore,
  InnerBlackhole,
  GlowRing,
  SwirlRing,
  Particle,
  loadingText,
} from './style';

interface BlackholeLoaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

function BlackholeLoader({
  onComplete,
  minDuration = 1500,
}: BlackholeLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsReady(true), 100);
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, minDuration);
    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, minDuration]);

  // Use static seed values to prevent hydration mismatch
  const particles = [
    { id: 0, delay: 0, duration: 4.2 },
    { id: 1, delay: 0.3, duration: 5.1 },
    { id: 2, delay: 0.6, duration: 4.8 },
    { id: 3, delay: 0.9, duration: 5.3 },
    { id: 4, delay: 1.2, duration: 4.6 },
    { id: 5, delay: 1.5, duration: 5.7 },
    { id: 6, delay: 1.8, duration: 4.4 },
    { id: 7, delay: 2.1, duration: 5.2 },
    { id: 8, delay: 2.4, duration: 4.9 },
    { id: 9, delay: 2.7, duration: 5.5 },
    { id: 10, delay: 3.0, duration: 4.3 },
    { id: 11, delay: 3.3, duration: 5.8 },
  ];

  return (
    <LoaderContainer isVisible={isVisible}>
      <BlackholeCore>
        <InnerBlackhole />
        <GlowRing />
        <SwirlRing />
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            delay={particle.delay}
            duration={particle.duration}
            style={{
              transform: `translate(-50%, -50%) translate(${Math.cos((particle.delay * Math.PI) / 6) * 100}px, ${Math.sin((particle.delay * Math.PI) / 6) * 100}px)`,
            }}
          />
        ))}
      </BlackholeCore>
      {isReady && <div style={loadingText}>Initializing System...</div>}
    </LoaderContainer>
  );
}

export default BlackholeLoader;
