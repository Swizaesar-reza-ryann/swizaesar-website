'use client';

import React from 'react';
import { useStylesReady } from '@/lib/emotion-registry';

interface StylesReadyLoaderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function StylesReadyLoader({
  children,
  fallback = null,
}: StylesReadyLoaderProps) {
  const stylesReady = useStylesReady();

  if (!stylesReady) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
