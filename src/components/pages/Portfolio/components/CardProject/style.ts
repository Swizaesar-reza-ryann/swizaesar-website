import styled from '@emotion/styled';
import { theme } from '@/theme';

const CardProjectStyle = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #525151dd;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  .card {
    &-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;

      svg {
        color: ${theme.colors.secondary};
      }

      h5 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        color: ${theme.colors.text};
      }

      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: ${theme.colors.text};
      }
    }

    &-title {
      h3 {
        margin: 0 0 16px;
        font-size: 18px;
        font-weight: 600;
        color: ${theme.colors.secondary};
      }
    }

    &-body {
      flex: 1;
      margin-bottom: 16px;

      p {
        margin: 0;
        color: ${theme.colors.text};
        opacity: 0.8;
        line-height: 1.5;
        font-size: 14px;
      }
    }

    &-footer {
    .view-project-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: ${theme.colors.secondary};
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;

      &:hover {
        background: #ea580c;
        transform: translateY(-1px);
      }

      svg {
        color: white;
      }
    }
  }
`;

export default CardProjectStyle;
