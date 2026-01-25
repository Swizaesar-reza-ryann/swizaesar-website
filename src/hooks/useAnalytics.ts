'use client';

import { useCallback } from 'react';
import { AnalyticsFallback } from '@/utils/analytics-fallback';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // Try Google Analytics first
    if (process.env.NODE_ENV === 'production' && window.gtag) {
      try {
        window.gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      } catch (error) {
        console.warn('Google Analytics tracking failed:', error);
        // Fallback to local storage
        AnalyticsFallback.track(event);
      }
    } else {
      // Log events in development for debugging
      console.log('Analytics Event (dev mode):', event);
      // Also store in fallback for development testing
      if (process.env.NODE_ENV !== 'production') {
        AnalyticsFallback.track(event);
      }
    }
  }, []);

  const trackGameStart = useCallback(
    (level: number = 1) => {
      trackEvent({
        action: 'game_start',
        category: 'games',
        label: `memory_card_level_${level}`,
        value: level,
      });
    },
    [trackEvent]
  );

  const trackNextLevel = useCallback(
    (currentLevel: number, moves: number) => {
      trackEvent({
        action: 'next_level',
        category: 'games',
        label: `memory_card_level_${currentLevel}_completed`,
        value: currentLevel,
      });

      // Also track completion stats
      trackEvent({
        action: 'level_completed',
        category: 'games',
        label: `level_${currentLevel}_moves_${moves}`,
        value: moves,
      });
    },
    [trackEvent]
  );

  const trackGameReset = useCallback(
    (level: number = 1) => {
      trackEvent({
        action: 'game_reset',
        category: 'games',
        label: `memory_card_level_${level}`,
        value: level,
      });
    },
    [trackEvent]
  );

  const trackGameWin = useCallback(
    (level: number, moves: number, timeSpent?: number) => {
      trackEvent({
        action: 'game_win',
        category: 'games',
        label: `level_${level}_completed`,
        value: moves,
      });

      if (timeSpent) {
        trackEvent({
          action: 'game_completion_time',
          category: 'games',
          label: `level_${level}_time`,
          value: Math.round(timeSpent / 1000), // Convert to seconds
        });
      }
    },
    [trackEvent]
  );

  const trackCardClick = useCallback(
    (level: number, totalMoves: number) => {
      trackEvent({
        action: 'card_click',
        category: 'games',
        label: `level_${level}_move_${totalMoves}`,
        value: totalMoves,
      });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackGameStart,
    trackNextLevel,
    trackGameReset,
    trackGameWin,
    trackCardClick,
    // Fallback utilities for debugging
    getStoredEvents: AnalyticsFallback.getStoredEvents,
    clearEvents: AnalyticsFallback.clearEvents,
  };
};
