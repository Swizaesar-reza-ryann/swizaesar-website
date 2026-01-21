import LoadingPageStyle from './style';
import { LoadingPageProps } from './types';

const LoadingPage = ({
  message = 'Loading',
  subtitle = 'Please wait...',
}: LoadingPageProps) => {
  return (
    <LoadingPageStyle>
      <div className="spinner" />
      <p className="loading-text">{message}</p>
      {subtitle && <p className="loading-subtitle">{subtitle}</p>}
    </LoadingPageStyle>
  );
};

export default LoadingPage;
