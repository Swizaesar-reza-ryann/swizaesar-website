'use client';

import React from 'react';
import { Row, Column } from './style';
import { RowProps, ColumnProps } from './types';

const GridRow: React.FC<RowProps> = ({ children, className }) => {
  return <Row className={className}>{children}</Row>;
};

const GridColumn: React.FC<ColumnProps> = ({ children, width, className }) => {
  return (
    <Column width={width} className={className}>
      {children}
    </Column>
  );
};

export { GridRow as Row, GridColumn as Column };
