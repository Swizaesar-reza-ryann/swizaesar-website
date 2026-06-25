import { theme } from '@/theme';
import styled from '@emotion/styled';

const AboutPageStyle = styled.div`
  padding: 8px 0 56px;

  .about-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: 56px;
    align-items: start;
  }

  .about-content {
    &__image {
      position: relative;
      width: 100%;
      max-width: 420px;
      margin: 0 auto;

      img {
        width: 100%;
        height: auto;
        border-radius: ${theme.radius.lg};
        display: block;
      }
    }

    &__text {
      p {
        line-height: 1.8;
        margin: 0 0 20px;
        color: ${theme.colors.textSecondary};
        font-size: 1rem;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  .about-skills {
    margin-top: 36px;
    padding-top: 28px;
    border-top: 1px solid ${theme.colors.border};

    h4 {
      margin: 0 0 16px;
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${theme.colors.textMuted};
    }
  }

  @media (max-width: 768px) {
    padding: 4px 0 40px;

    .about-grid {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .about-content__image {
      max-width: 100%;
      order: -1;
    }

    .about-content__text p {
      font-size: 0.9375rem;
      line-height: 1.75;
    }

    .about-skills {
      margin-top: 28px;
      padding-top: 24px;
    }
  }
`;

export default AboutPageStyle;
