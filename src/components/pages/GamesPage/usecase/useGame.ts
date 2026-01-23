import { useState, useCallback, useMemo, useEffect } from 'react';
import { GameCard } from '../types';

export interface GameState {
  cards: GameCard[];
  selectedCards: number[];
  moves: number;
  matches: number;
  isChecking: boolean;
  gameStarted: boolean;
  showWin: boolean;
  showError: boolean;
  showInitialReveal: boolean;
}

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

  // Initialize cards
  const initializeCards = useCallback(() => {
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
  }, [initialCardContents]);

  // Start game with initial reveal
  const startGame = useCallback(() => {
    initializeCards();
    setGameStarted(true);
  }, [initializeCards]);

  // Handle initial reveal - hide cards after 3 seconds
  useEffect(() => {
    if (showInitialReveal && gameStarted) {
      const timer = setTimeout(() => {
        setCards((prev) => prev.map((c) => ({ ...c, isFlipped: false })));
        setShowInitialReveal(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showInitialReveal, gameStarted]);

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
    ]
  );

  // Memoized actions object
  const actions = useMemo(
    () => ({
      handleCardClick,
      startGame,
      resetGame,
    }),
    [handleCardClick, startGame, resetGame]
  );

  return { state, actions };
};
