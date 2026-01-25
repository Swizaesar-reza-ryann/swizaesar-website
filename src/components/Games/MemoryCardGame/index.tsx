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
import { useAnalytics } from '@/hooks/useAnalytics';
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
  const { trackGameStart, trackNextLevel, trackGameReset, trackGameWin } =
    useAnalytics();

  const { state, actions } = useGame(cardContents, (moves) => {
    // Track game win when game completes
    trackGameWin(level, moves);
    onGameComplete?.(moves);
  });

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

  // Analytics wrapper functions
  const handleStartGame = () => {
    trackGameStart(level);
    startGame();
  };

  const handleNextLevel = () => {
    trackNextLevel(level, moves);
    nextLevel();
  };

  const handleResetGame = () => {
    trackGameReset(level);
    resetGame();
  };

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
        <GameButton data-mobile={isMobile} onClick={handleStartGame}>
          {t('games.start')}
        </GameButton>
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
            <GameButton data-mobile={isMobile} onClick={handleResetGame}>
              {t('games.reset')}
            </GameButton>
          </GameButtons>
        </>
      )}

      {showWin && (
        <div className="game-message win">
          <h2>{t('games.win')}</h2>
          <p>{t('games.winMessage').replace('{moves}', moves.toString())}</p>
          <WinButtons>
            <GameButton data-mobile={isMobile} onClick={handleNextLevel}>
              {t('games.nextLevel')}
            </GameButton>
            <GameButton data-mobile={isMobile} onClick={handleResetGame}>
              {t('games.playAgain')}
            </GameButton>
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
