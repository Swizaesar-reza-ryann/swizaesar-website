import Container from '@/components/Layout/Container';
import { GamesPageStyle } from './style';
import MemoryCardGame from '@/components/Games/MemoryCardGame';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { CARD_CONTENTS } from './constant';
import PageHeader from '@/components/shared/PageHeader';

const GamesPage = () => {
  const { t } = useLanguage();

  const handleGameComplete = (moves: number) => {
    console.log(`Game completed in ${moves} moves!`);
  };

  return (
    <GamesPageStyle>
      <Container>
        <PageHeader
          title={t('games.title')}
          subtitle={t('games.description')}
        />

        <div className="games-section">
          <div className="games-card">
            <MemoryCardGame
              cardContents={CARD_CONTENTS}
              title={t('games.title')}
              description={t('games.description')}
              onGameComplete={handleGameComplete}
            />
          </div>
        </div>
      </Container>
    </GamesPageStyle>
  );
};

export default GamesPage;
