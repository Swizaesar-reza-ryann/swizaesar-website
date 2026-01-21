export type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface RowProps {
  children: React.ReactNode;
  className?: string;
  justify?: JustifyContent;
}

export interface ColumnProps {
  children: React.ReactNode;
  width?: ColumnWidth;
  className?: string;
}
