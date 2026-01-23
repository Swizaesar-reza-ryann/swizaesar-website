import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo/metadata-config';

export const metadata: Metadata = createMetadata('games');

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
