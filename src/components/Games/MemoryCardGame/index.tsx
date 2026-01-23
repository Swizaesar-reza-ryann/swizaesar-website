import { useLanguage } from '@/lib/i18n/LanguageProvider';
import {
  GameContainer,
  Card,
  GameHeader,
  GameStats,
  GameButton,
  CardGrid,
} from './style';
import { GameCard, MemoryGameProps } from '@/components/pages/GamesPage/types';
import { useGame } from '@/components/pages/GamesPage/usecase/useGame';

export default function MemoryCardGame({
  cardContents,
  title,
  description,
  onGameComplete,
  customStyles = {},
}: MemoryGameProps) {
  const { t } = useLanguage();

  const { state, actions } = useGame(cardContents, onGameComplete);

  const {
    cards,
    selectedCards,
    moves,
    matches,
    isChecking,
    gameStarted,
    showWin,
    showError,
  } = state;

  const { handleCardClick, startGame, resetGame } = actions;

  return (
    <GameContainer customBackground={customStyles.background}>
      <GameHeader>
        <h1>{title || t('games.title')}</h1>
        <p>{description || t('games.description')}</p>
      </GameHeader>

      {!gameStarted ? (
        <GameButton onClick={startGame}>{t('games.start')}</GameButton>
      ) : (
        <>
          <GameStats>
            <div className="stat">
              <span>
                {t('games.moves')}: {moves}
              </span>
            </div>
            <div className="stat">
              <span>
                {t('games.matches')}: {matches}/{cardContents.length / 2}
              </span>
            </div>
          </GameStats>

          <CardGrid>
            {cards.map((card) => (
              <Card
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                isFlipped={card.isFlipped}
                isMatched={card.isMatched}
                customCardBack={customStyles.cardBack}
                customCardFront={customStyles.cardFront}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <span>?</span>
                  </div>
                  <div className="card-back">
                    <span>{card.content}</span>
                  </div>
                </div>
              </Card>
            ))}
          </CardGrid>

          <GameButton onClick={resetGame}>{t('games.reset')}</GameButton>
        </>
      )}

      {showWin && (
        <div className="game-message win">
          <h2>{t('games.win')}</h2>
          <p>{t('games.winMessage').replace('{moves}', moves.toString())}</p>
        </div>
      )}

      {showError && (
        <div className="game-message error">
          <p>{t('games.tryAgain')}</p>
        </div>
      )}
    </GameContainer>
  );
}
