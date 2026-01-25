import Container from '@/components/Layout/Container';
import { GamesPageStyle } from './style';
import MemoryCardGame from '@/components/Games/MemoryCardGame';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { CARD_CONTENTS, GAME_CONFIG } from './constant';
import { theme } from '@/theme';

const GamesPage = () => {
  const { t } = useLanguage();

  const handleGameComplete = (moves: number) => {
    console.log(`Game completed in ${moves} moves!`);
    // You can add additional logic here like saving scores, showing analytics, etc.
  };

  return (
    <GamesPageStyle>
      <Container>
        <div className="games-section">
          <MemoryCardGame
            cardContents={CARD_CONTENTS}
            title={t('games.title')}
            description={t('games.description')}
            onGameComplete={handleGameComplete}
            customStyles={{
              background: 'transparent',
              cardBack: 'white',
              cardFront: theme.colors.secondary,
            }}
          />
        </div>
      </Container>
    </GamesPageStyle>
  );
};

export default GamesPage;
