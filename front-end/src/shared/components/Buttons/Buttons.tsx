import { ReactNode, ButtonHTMLAttributes } from 'react';
import {
  buttonConfig,
  ButtonVariant,
  ButtonSize,
  IconPosition,
  ButtonClickHandler,
  ButtonShape,
} from './ButtonConfig';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  onClick?: ButtonClickHandler;
  variant?: ButtonVariant;
  size?: ButtonSize;
  active?: boolean;
  className?: string;
  disabled?: boolean;
  buttonShape?: ButtonShape;
}

export const Button = ({
  label = buttonConfig.defaultLabel,
  icon,
  iconPosition = buttonConfig.defaultIconPosition,
  onClick = buttonConfig.defaultOnClick,
  variant = buttonConfig.defaultVariant,
  size = buttonConfig.defaultSize,
  active = buttonConfig.defaultIsActive,
  className = '',
  disabled = false,
  buttonShape,
  ...props
}: ButtonProps) => {
  const classes = [
    buttonConfig.baseStyles,
    buttonConfig.variants[variant],
    buttonConfig.sizes[size],
    active ? buttonConfig.activeStyles[variant] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const hoverMove =
    iconPosition === 'right'
      ? 'group-hover:translate-x-1.5'
      : 'group-hover:-translate-x-0';

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      {...props}
    >
      {/* Left Icon */}
      {icon && iconPosition === 'left' && (
        <span
          className={`inline-block transition-transform duration-200 ${hoverMove}`}
        >
          {icon}
        </span>
      )}
      {/* Button label */}
      <span>{label}</span>
      {/* Right Icon */}
      {icon && iconPosition === 'right' && (
        <span
          className={`inline-block transition-transform duration-200 ${hoverMove}`}
        >
          {icon}
        </span>
      )}
    </button>
  );
};
