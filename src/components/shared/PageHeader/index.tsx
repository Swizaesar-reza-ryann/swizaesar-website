'use client';

import PageHeaderStyle from './style';
import { Reveal } from '@/components/shared/Reveal';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const PageHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: PageHeaderProps) => (
  <Reveal y={18}>
    <PageHeaderStyle data-align={align}>
      {eyebrow && <span className="page-header__eyebrow">{eyebrow}</span>}
      <h1 className="page-header__title">{title}</h1>
      {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
    </PageHeaderStyle>
  </Reveal>
);

export default PageHeader;
