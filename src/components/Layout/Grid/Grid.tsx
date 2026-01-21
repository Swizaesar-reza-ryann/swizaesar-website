'use client';

import { Row, Column } from './style';
import { RowProps, ColumnProps } from './types';

const GridRow = ({
  children,
  className,
  justify,
  align,
  direction,
}: RowProps) => {
  return (
    <Row
      className={className}
      justify={justify}
      align={align}
      direction={direction}
    >
      {children}
    </Row>
  );
};

const GridColumn = ({
  children,
  width,
  className,
  ['data-mobile']: dataMobile,
  id,
}: ColumnProps) => {
  return (
    <Column
      width={width}
      className={className}
      data-mobile={dataMobile}
      id={id}
    >
      {children}
    </Column>
  );
};

export { GridRow as Row, GridColumn as Column };
