export interface GameCard {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface MemoryGameProps {
  cardContents: GameCard[];
  title?: string;
  description?: string;
  onGameComplete?: (moves: number) => void;
  customStyles?: {
    background?: string;
    cardBack?: string;
    cardFront?: string;
  };
}
