import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo/metadata-config';

export const metadata: Metadata = createMetadata('experience');

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
