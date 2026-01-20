export type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface RowProps {
  children: React.ReactNode;
  className?: string;
}

export interface ColumnProps {
  children: React.ReactNode;
  width?: ColumnWidth;
  className?: string;
}
