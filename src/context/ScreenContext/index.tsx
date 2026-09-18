import { Maybe } from '@/types';
import type { PropsWithChildren } from 'react';
import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
} from 'react';

interface ScreenSizeProviderProps {
  isMobile: boolean;
}

const MOBILE_QUERY = '(max-width: 767px)';

const _ScreenSizeContext =
  createContext<Maybe<ScreenSizeProviderProps>>(undefined);

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia(MOBILE_QUERY);
  media.addEventListener('change', onStoreChange);
  window.addEventListener('resize', onStoreChange);
  return () => {
    media.removeEventListener('change', onStoreChange);
    window.removeEventListener('resize', onStoreChange);
  };
}

function getSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export const ScreenSizeProvider = (
  props: PropsWithChildren<Partial<ScreenSizeProviderProps>>
) => {
  const { children } = props;
  const isMobile = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

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
