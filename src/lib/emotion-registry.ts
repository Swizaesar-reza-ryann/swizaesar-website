'use client';

import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';

const cache = createCache({
  key: 'css',
  prepend: true,
  speedy: true,
});

// Create a context to track when styles are ready
const StylesReadyContext = React.createContext(false);

export function useStylesReady() {
  return React.useContext(StylesReadyContext);
}

export default function EmotionRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = React.useState(false);
  const [stylesReady, setStylesReady] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  useServerInsertedHTML(() => {
    // Get all inserted styles from cache
    const insertedStyles = cache.inserted;
    if (insertedStyles && Object.keys(insertedStyles).length > 0) {
      const styles = Object.values(insertedStyles).join('');
      setStylesReady(true);
      return React.createElement('style', {
        'data-emotion': cache.key,
        dangerouslySetInnerHTML: { __html: styles },
      });
    }
    return null;
  });

  // Client-side fallback for any missed styles
  React.useEffect(() => {
    if (isClient && typeof document !== 'undefined') {
      const existingStyles = document.querySelector(
        `style[data-emotion="${cache.key}"]`
      );
      if (!existingStyles) {
        const insertedStyles = cache.inserted;
        const emotionStyles = document.createElement('style');
        emotionStyles.setAttribute('data-emotion', cache.key);
        emotionStyles.innerHTML = Object.values(insertedStyles).join('');
        document.head.appendChild(emotionStyles);
        setStylesReady(true);
      } else {
        // Styles already exist, mark as ready
        setStylesReady(true);
      }
    }
  }, [isClient]);

  return React.createElement(
    StylesReadyContext.Provider,
    { value: stylesReady },
    React.createElement(CacheProvider, { value: cache }, children)
  );
}
