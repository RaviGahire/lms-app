import React, { ReactNode, ButtonHTMLAttributes, isValidElement, cloneElement } from "react";
import {
  buttonConfig,
  ButtonVariant,
  ButtonSize,
  IconPosition,
  ButtonClickHandler,
} from "./ButtonConfig";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  iconSize?: number; // Optional manual override
  onClick?: ButtonClickHandler;
  variant?: ButtonVariant;
  size?: ButtonSize;
  active?: boolean;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  label = buttonConfig.defaultLabel,
  icon,
  iconPosition = buttonConfig.defaultIconPosition,
  iconSize,
  onClick = buttonConfig.defaultOnClick,
  variant = buttonConfig.defaultVariant,
  size = buttonConfig.defaultSize,
  active = buttonConfig.defaultIsActive,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  const classes = [
    buttonConfig.baseStyles,
    buttonConfig.variants[variant],
    buttonConfig.sizes[size],
    active ? buttonConfig.activeStyles[variant] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Resolve pixel size: prop override -> config preset -> fallback 18
  const resolvedSize = iconSize ?? buttonConfig.iconSizes[size] ?? 18;

  // Clone element to inject numeric size into Tabler Icon
  const renderedIcon = isValidElement(icon)
    ? cloneElement(icon as React.ReactElement<{ size?: number; className?: string }>, {
        size: resolvedSize,
        className: "shrink-0",
      })
    : null;

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      {...props}
    >
      {renderedIcon && iconPosition === "left" && renderedIcon}
      <span>{label}</span>
      {renderedIcon && iconPosition === "right" && renderedIcon}
    </button>
  );
};