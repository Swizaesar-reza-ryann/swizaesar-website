'use client';

import { useEffect, useState } from 'react';
import BlackholeLoader from '@/components/BlackholeLoader';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Only show loader on client side to prevent hydration mismatch
  if (!isClient) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <>
      {isLoading && <BlackholeLoader minDuration={2000} />}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  );
}
