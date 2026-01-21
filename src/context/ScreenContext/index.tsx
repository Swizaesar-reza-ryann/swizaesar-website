import { Maybe } from '@/types';
import type { PropsWithChildren } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface ScreenSizeProviderProps {
  isMobile: boolean;
}

const _ScreenSizeContext =
  createContext<Maybe<ScreenSizeProviderProps>>(undefined);

export const ScreenSizeProvider = (
  props: PropsWithChildren<ScreenSizeProviderProps>
) => {
  const { children, isMobile: isMobileProps } = props;
  const [isMobile, toggleIsMobile] = useState(isMobileProps);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => {
        toggleIsMobile(window.innerWidth < 768);
      };

      checkScreenSize();

      window.addEventListener('resize', checkScreenSize);

      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  const contextValue = useMemo<ScreenSizeProviderProps>(() => {
    return { isMobile };
  }, [isMobile]);

  return (
    <_ScreenSizeContext.Provider value={contextValue}>
      {children}
    </_ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => {
  const payload = useContext(_ScreenSizeContext);

  if (!payload) {
    throw new Error(`useScreenSize must be used within the ScreenSizeProvider`);
  }

  return payload.isMobile;
};
