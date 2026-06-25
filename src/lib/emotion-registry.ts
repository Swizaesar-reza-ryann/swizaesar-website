'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

export default function EmotionRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    const emotionCache = createCache({ key: 'css', prepend: true });
    emotionCache.compat = true;
    return emotionCache;
  });

  useServerInsertedHTML(() => {
    const names = Object.keys(cache.inserted);
    if (names.length === 0) return null;

    let styles = '';
    for (const name of names) {
      const style = cache.inserted[name];
      if (typeof style === 'string') {
        styles += style;
      }
    }

    if (!styles) return null;

    return React.createElement('style', {
      'data-emotion': `${cache.key} ${names.join(' ')}`,
      dangerouslySetInnerHTML: { __html: styles },
    });
  });

  return React.createElement(CacheProvider, { value: cache }, children);
}
