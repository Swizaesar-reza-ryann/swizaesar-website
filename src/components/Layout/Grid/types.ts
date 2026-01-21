export type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export interface RowProps {
  children: React.ReactNode;
  className?: string;
  justify?: JustifyContent;
  align?: AlignItems;
  direction?: FlexDirection;
}

export interface ColumnProps {
  children: React.ReactNode;
  width?: ColumnWidth;
  className?: string;
  id?: string;
  ['data-mobile']?: boolean;
}
