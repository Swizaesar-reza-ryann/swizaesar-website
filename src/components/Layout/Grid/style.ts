import styled from '@emotion/styled';
import { ColumnWidth } from './types';
import { WIDTH_MAP } from './constants';

interface RowProps {
  className?: string;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

interface ColumnProps {
  width?: ColumnWidth;
  className?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;

  ${(props) =>
    props.justify &&
    `
    justify-content: ${props.justify};
  `}

  ${(props) =>
    props.align &&
    `
    align-items: ${props.align};
  `}

  ${(props) =>
    props.direction &&
    `
    flex-direction: ${props.direction};
  `}
`;

export const Column = styled.div<ColumnProps>`
  padding: 8px;
  flex: 1;

  ${(props) =>
    props.width
      ? `
    flex: 0 0 ${WIDTH_MAP[props.width]};
    max-width: ${WIDTH_MAP[props.width]};
  `
      : ''}
`;
