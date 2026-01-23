import { useLanguage } from '@/lib/i18n/LanguageProvider';
import {
  GameContainer,
  Card,
  GameHeader,
  GameStats,
  GameButton,
  CardGrid,
  GameButtons,
  WinButtons,
  CountdownDisplay,
} from './style';
import { MemoryGameProps } from '@/components/pages/GamesPage/types';
import { useGame } from '@/components/pages/GamesPage/usecase/useGame';
import { useScreenSize } from '@/context/ScreenContext';

export default function MemoryCardGame({
  cardContents,
  title,
  description,
  onGameComplete,
  customStyles = {},
}: MemoryGameProps) {
  const { t } = useLanguage();
  const isMobile = useScreenSize();
  const { state, actions } = useGame(cardContents, onGameComplete);

  const {
    cards,
    moves,
    matches,
    gameStarted,
    showWin,
    showError,
    level,
    countdown,
    showInitialReveal,
  } = state;

  const { handleCardClick, startGame, resetGame, nextLevel } = actions;

  return (
    <GameContainer
      customBackground={customStyles.background}
      data-mobile={isMobile}
    >
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
            <div className="stat">
              <span>Level: {level}</span>
            </div>
          </GameStats>

          {showInitialReveal && (
            <CountdownDisplay className={showInitialReveal ? 'countdown' : ''}>
              <span>
                {countdown > 0
                  ? t('games.rememberCardPositions').replace(
                      '{countdown}',
                      countdown.toString()
                    )
                  : t('games.gameStart')}
              </span>
            </CountdownDisplay>
          )}

          {!showInitialReveal && countdown === 0 && (
            <CountdownDisplay className="countdown">
              <span>{t('games.gameStart')}</span>
            </CountdownDisplay>
          )}

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

          <GameButtons>
            <GameButton onClick={resetGame}>{t('games.reset')}</GameButton>
          </GameButtons>
        </>
      )}

      {showWin && (
        <div className="game-message win">
          <h2>{t('games.win')}</h2>
          <p>{t('games.winMessage').replace('{moves}', moves.toString())}</p>
          <WinButtons>
            <GameButton onClick={nextLevel}>Next Level</GameButton>
            <GameButton onClick={resetGame}>Play Again</GameButton>
          </WinButtons>
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
