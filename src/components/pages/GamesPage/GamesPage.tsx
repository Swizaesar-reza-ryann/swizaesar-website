'use client';

import Container from '@/components/Layout/Container';
import { GamesPageStyle } from './style';
import MemoryCardGame from '@/components/Games/MemoryCardGame';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { CARD_CONTENTS } from './constant';
import PageHeader from '@/components/shared/PageHeader';
import { Reveal } from '@/components/shared/Reveal';

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
          <Reveal delay={0.12} y={28} className="games-card">
            <MemoryCardGame
              cardContents={CARD_CONTENTS}
              title={t('games.title')}
              description={t('games.description')}
              onGameComplete={handleGameComplete}
            />
          </Reveal>
        </div>
      </Container>
    </GamesPageStyle>
  );
};

export default GamesPage;
