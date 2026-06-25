import { theme } from '@/theme';
import styled from '@emotion/styled';

const PageHeaderStyle = styled.header`
  margin-bottom: 24px;

  &[data-align='center'] {
    text-align: center;

    .page-header__title {
      margin-left: auto;
      margin-right: auto;
      width: fit-content;

      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  &[data-align='left'] {
    text-align: left;

    .page-header__title {
      display: inline-block;
      width: fit-content;

      &::after {
        left: 0;
      }
    }
  }

  .page-header {
    &__eyebrow {
      display: block;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${theme.colors.accent};
      margin-bottom: 8px;
    }

    &__title {
      position: relative;
      display: block;
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 700;
      color: ${theme.colors.text};
      margin: 0;
      padding-bottom: 10px;
      line-height: 1.2;
      letter-spacing: -0.02em;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 48px;
        height: 4px;
        border-radius: ${theme.radius.full};
        background: linear-gradient(
          90deg,
          ${theme.colors.primary},
          ${theme.colors.accent}
        );
      }
    }

    &__subtitle {
      font-size: 1rem;
      color: ${theme.colors.textSecondary};
      margin: 16px 0 0;
      max-width: 560px;
      line-height: 1.6;

      [data-align='center'] & {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;

    .page-header__subtitle {
      font-size: 0.9375rem;
    }
  }
`;

export default PageHeaderStyle;
