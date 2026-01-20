import Container from '@/components/Layout/Container';
import NotFoundStyle from './style';
import Link from 'next/link';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <Container>
      <NotFoundStyle>
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          The page you're looking for doesn't exist or has been moved. Don't
          worry, let's get you back on track.
        </p>

        <div className="action-buttons">
          <Link href="/" className="btn primary">
            <Home size={16} />
            Go Home
          </Link>
        </div>
      </NotFoundStyle>
    </Container>
  );
};

export default NotFoundPage;
