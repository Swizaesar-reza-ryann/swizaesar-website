import { theme } from '@/theme';
import styled from '@emotion/styled';

const LoadingPageStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  z-index: 9999;

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #525151dd;
    border-top: 4px solid ${theme.colors.secondary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 24px;
  }

  .loading-text {
    color: ${theme.colors.text};
    font-size: 18px;
    font-weight: 500;
    opacity: 0.9;
    margin: 0;
  }

  .loading-subtitle {
    color: ${theme.colors.text};
    font-size: 14px;
    opacity: 0.6;
    margin: 8px 0 0 0;
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
