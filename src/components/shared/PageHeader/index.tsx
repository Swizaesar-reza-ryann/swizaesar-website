'use client';

import PageHeaderStyle from './style';

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
  <PageHeaderStyle data-align={align}>
    {eyebrow && <span className="page-header__eyebrow">{eyebrow}</span>}
    <h1 className="page-header__title">{title}</h1>
    {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
  </PageHeaderStyle>
);

export default PageHeader;
