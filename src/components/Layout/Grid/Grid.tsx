'use client';

import { Row, Column } from './style';
import { RowProps, ColumnProps } from './types';

const GridRow = ({ children, className, justify }: RowProps) => {
  return (
    <Row className={className} justify={justify}>
      {children}
    </Row>
  );
};

const GridColumn = ({ children, width, className }: ColumnProps) => {
  return (
    <Column width={width} className={className}>
      {children}
    </Column>
  );
};

export { GridRow as Row, GridColumn as Column };
