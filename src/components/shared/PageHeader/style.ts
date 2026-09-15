import { theme } from '@/theme';
import styled from '@emotion/styled';

const PageHeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  &[data-align='center'] {
    align-items: center;
    text-align: center;

    .page-header__title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .page-header__subtitle {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &[data-align='left'] {
    align-items: flex-start;
    text-align: left;

    .page-header__title::after {
      left: 0;
      transform: none;
    }
  }

  .page-header {
    &__eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: fit-content;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${theme.colors.accent};
      margin: 0 0 16px;
      padding: 6px 12px;
      border-radius: ${theme.radius.full};
      background: ${theme.colors.primaryLight};
      border: 1px solid rgba(240, 134, 90, 0.28);

      &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${theme.colors.primary};
        box-shadow: 0 0 10px ${theme.colors.primary};
      }
    }

    &__title {
      position: relative;
      display: block;
      width: fit-content;
      max-width: 100%;
      font-family: ${theme.fonts.display};
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 400;
      color: ${theme.colors.text};
      margin: 0;
      padding-bottom: 16px;
      line-height: 1.15;
      letter-spacing: -0.02em;
      text-shadow: 0 0 48px rgba(240, 134, 90, 0.1);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 3px;
        border-radius: ${theme.radius.full};
        background: ${theme.gradients.rim};
        box-shadow: 0 0 16px rgba(240, 134, 90, 0.4);
      }
    }

    &__subtitle {
      font-size: 1rem;
      color: ${theme.colors.textSecondary};
      margin: 18px 0 0;
      max-width: 560px;
      line-height: 1.7;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 28px;

    .page-header__subtitle {
      font-size: 0.9375rem;
    }
  }
`;

export default PageHeaderStyle;
