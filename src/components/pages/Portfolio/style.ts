import styled from '@emotion/styled';
import { theme } from '@/theme';

const PortfolioPageStyle = styled.div`
  padding: 24px 0 64px;

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    > * {
      height: 100%;
    }
  }

  @media (max-width: 1024px) {
    .portfolio-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 0 32px;

    .portfolio-grid {
      grid-template-columns: 1fr;
      gap: 18px;
    }
  }
`;

export default PortfolioPageStyle;
