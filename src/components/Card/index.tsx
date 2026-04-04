import { CardStyle } from './style';
import { CardProps } from './types';

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  ...props
}: CardProps) => {
  return (
    <CardStyle
      className={`${className} ${variant} ${hover ? 'hover' : ''}`}
      {...props}
    >
      {children}
    </CardStyle>
  );
};

export default Card;
