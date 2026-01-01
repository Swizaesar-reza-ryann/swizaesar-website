import { ButtonStyle } from './style';
import { ButtonProps } from './types';

const Button = ({
  children,
  className = '',
  type = 'button',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle
      type={type}
      className={`${className} ${variant} ${size} ${fullWidth ? 'full-width' : ''}`}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
