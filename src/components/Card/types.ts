import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'solid';
  hover?: boolean;
}
