import { ReactNode } from 'react';
import { ContainerStyle } from './style';

const Container = ({ children }: { children: ReactNode }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};
export default Container;
