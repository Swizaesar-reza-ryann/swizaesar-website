import { theme } from '@/theme';
import styled from '@emotion/styled';

const LoadingPageStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.bg};
  z-index: 9999;

  .spinner {
    width: 44px;
    height: 44px;
    border: 3px solid ${theme.colors.border};
    border-top: 3px solid ${theme.colors.primary};
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 20px;
  }

  .loading-text {
    color: ${theme.colors.text};
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }

  .loading-subtitle {
    color: ${theme.colors.textMuted};
    font-size: 0.875rem;
    margin: 8px 0 0;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingPageStyle;
