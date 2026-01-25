import { useState, useCallback, useMemo, useEffect } from 'react';
import { GameCard } from '@/components/pages/GamesPage/types';

export const useGame = (
  initialCardContents: GameCard[],
  onGameComplete?: (moves: number) => void
) => {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showInitialReveal, setShowInitialReveal] = useState(false);
  const [level, setLevel] = useState(1);
  const [revealTime, setRevealTime] = useState(10000); // Level 1: 10 seconds
  const [countdown, setCountdown] = useState(0);

  // Calculate reveal time based on level (30% reduction per level)
  const calculateRevealTime = useCallback((currentLevel: number) => {
    return Math.max(1000, 10000 * Math.pow(0.7, currentLevel - 1)); // Minimum 1 second
  }, []);

  // Initialize cards
  const initializeCards = useCallback(
    (currentRevealTime?: number) => {
      // Reset cards to initial state (flipped for reveal)
      const resetCards = initialCardContents.map((card) => ({
        ...card,
        isFlipped: true, // Start flipped for initial reveal
        isMatched: false,
      }));

      // Shuffle cards
      const shuffled = resetCards.sort(() => Math.random() - 0.5);
      setCards(shuffled);
      setSelectedCards([]);
      setMoves(0);
      setMatches(0);
      setShowWin(false);
      setShowError(false);
      setShowInitialReveal(true); // Show initial reveal

      // Use provided revealTime or current state revealTime
      const timeToUse = currentRevealTime || revealTime;
      setCountdown(Math.ceil(timeToUse / 1000)); // Set countdown in seconds, rounded up
    },
    [initialCardContents, revealTime]
  );

  // Start game with initial reveal
  const startGame = useCallback(() => {
    initializeCards();
    setGameStarted(true);
  }, [initializeCards]);

  // Handle initial reveal - hide cards after reveal time based on level with countdown
  useEffect(() => {
    if (showInitialReveal && gameStarted) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      const timer = setTimeout(() => {
        setCards((prev) => prev.map((c) => ({ ...c, isFlipped: false })));
        setShowInitialReveal(false);
        setCountdown(0);
      }, revealTime);

      return () => {
        clearTimeout(timer);
        clearInterval(countdownInterval);
      };
    }
  }, [showInitialReveal, gameStarted, revealTime]);

  // Handle card click
  const handleCardClick = useCallback(
    (cardId: number) => {
      if (isChecking || showInitialReveal) return; // Prevent clicks during initial reveal

      const card = cards.find((c) => c.id === cardId);
      if (!card || card.isFlipped || card.isMatched) return;

      // Flip the card
      setCards((prev) =>
        prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c))
      );

      const newSelectedCards = [...selectedCards, cardId];
      setSelectedCards(newSelectedCards);

      // Check for match when two cards are selected
      if (newSelectedCards.length === 2) {
        setIsChecking(true);
        setMoves(moves + 1);

        const [firstId, secondId] = newSelectedCards;
        const firstCard = cards.find((c) => c.id === firstId);
        const secondCard = cards.find((c) => c.id === secondId);

        if (
          firstCard &&
          secondCard &&
          firstCard.content === secondCard.content
        ) {
          // Match found
          setTimeout(() => {
            setCards((prev) =>
              prev.map((c) =>
                c.id === firstId || c.id === secondId
                  ? { ...c, isMatched: true }
                  : c
              )
            );
            setMatches(matches + 1);
            setSelectedCards([]);
            setIsChecking(false);

            // Check if game is won
            const totalPairs = initialCardContents.length / 2;
            if (matches + 1 === totalPairs) {
              setShowWin(true);
              onGameComplete?.(moves + 1);
            }
          }, 1000);
        } else {
          // No match
          setShowError(true);
          setTimeout(() => {
            setCards((prev) =>
              prev.map((c) =>
                c.id === firstId || c.id === secondId
                  ? { ...c, isFlipped: false }
                  : c
              )
            );
            setSelectedCards([]);
            setIsChecking(false);
            setShowError(false);
          }, 1500);
        }
      }
    },
    [
      cards,
      selectedCards,
      moves,
      matches,
      isChecking,
      showInitialReveal,
      initialCardContents,
      onGameComplete,
    ]
  );

  // Reset game
  const resetGame = useCallback(() => {
    initializeCards();
  }, [initializeCards]);

  // Next level
  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    const newRevealTime = calculateRevealTime(newLevel);
    setLevel(newLevel);
    setRevealTime(newRevealTime);
    initializeCards(newRevealTime); // Pass the new reveal time directly
  }, [level, calculateRevealTime, initializeCards]);

  // Reset to level 1
  const resetToLevelOne = useCallback(() => {
    setLevel(1);
    setRevealTime(10000);
    initializeCards(10000); // Pass the reveal time directly
  }, [initializeCards]);

  // Memoized state object
  const state = useMemo(
    () => ({
      cards,
      selectedCards,
      moves,
      matches,
      isChecking,
      gameStarted,
      showWin,
      showError,
      showInitialReveal,
      level,
      revealTime,
      countdown,
    }),
    [
      cards,
      selectedCards,
      moves,
      matches,
      isChecking,
      gameStarted,
      showWin,
      showError,
      showInitialReveal,
      level,
      revealTime,
      countdown,
    ]
  );

  // Memoized actions object
  const actions = useMemo(
    () => ({
      handleCardClick,
      startGame,
      resetGame,
      nextLevel,
      resetToLevelOne,
    }),
    [handleCardClick, startGame, resetGame, nextLevel, resetToLevelOne]
  );

  return { state, actions };
};
