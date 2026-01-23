import { GameCard } from './types';

export const CARD_CONTENTS: GameCard[] = [
  // Game symbols pairs
  { id: 1, content: '🎮', isFlipped: false, isMatched: false },
  { id: 2, content: '🎮', isFlipped: false, isMatched: false },
  { id: 3, content: '🎯', isFlipped: false, isMatched: false },
  { id: 4, content: '🎯', isFlipped: false, isMatched: false },
  { id: 5, content: '🎨', isFlipped: false, isMatched: false },
  { id: 6, content: '🎨', isFlipped: false, isMatched: false },
  { id: 7, content: '🎭', isFlipped: false, isMatched: false },
  { id: 8, content: '🎭', isFlipped: false, isMatched: false },
  { id: 9, content: '🎪', isFlipped: false, isMatched: false },
  { id: 10, content: '🎪', isFlipped: false, isMatched: false },
];

export const GAME_CONFIG = {
  INITIAL_REVEAL_TIME: 3000, // 3 seconds
  MATCH_ANIMATION_TIME: 1000,
  ERROR_SHOW_TIME: 1500,
  CARD_PAIRS: 5,
  TOTAL_CARDS: 10,
} as const;
