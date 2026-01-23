import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo/metadata-config';

export const metadata: Metadata = createMetadata('portfolio');

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
