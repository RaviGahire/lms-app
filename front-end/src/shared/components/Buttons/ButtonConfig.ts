import { MouseEvent } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "rounded" | "pill"; 
export type IconPosition = "left" | "right";

export type ButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => void;
export interface ButtonDefaultConfig {
  defaultVariant: ButtonVariant;
  defaultSize: ButtonSize;
  defaultShape: ButtonShape;
  defaultLabel: string;
  defaultOnClick: ButtonClickHandler;
  defaultIsActive: boolean;
  defaultIconPosition: IconPosition;
  baseStyles: string;
  shapes: Record<ButtonShape, string>;
  activeStyles: Record<ButtonVariant, string>;
  variants: Record<ButtonVariant, string>;
  sizes: Record<ButtonSize, string>;
}

// Buttons Default Configs
export const buttonConfig: ButtonDefaultConfig = {
  defaultVariant: "primary",
  defaultSize: "md",
  defaultShape: "rounded",
  defaultLabel: "Click Here",
  defaultOnClick: () => {},
  defaultIsActive: false,
  defaultIconPosition: "left",

  // Button base style 
  baseStyles:
    "group capitalize inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95",

  // Button radius
  shapes: {
    rounded: "rounded-md",
    pill: "rounded-full",
  },

  variants: {
    primary:
      "bg-text-highlight text-bg-primary hover:opacity-90 shadow-sm border border-transparent focus-visible:ring-text-highlight",
    secondary:
      "bg-white/10 text-text-highlight hover:bg-white/15 border border-border-subtle focus-visible:ring-white/20",
    outline:
      "border border-border-subtle text-text-highlight hover:bg-white/5 focus-visible:ring-border-subtle",
    ghost:
      "text-text-highlight hover:bg-white/5 border border-transparent focus-visible:ring-white/10",
    danger:
      "bg-red-600 text-white hover:bg-red-700 shadow-sm border border-transparent focus-visible:ring-red-500",
  },

  activeStyles: {
    primary: "ring-2 ring-text-highlight ring-offset-2 opacity-100",
    secondary: "bg-white/25 text-white border-white/30 shadow-inner",
    outline: "bg-white/10 border-text-highlight text-text-highlight",
    ghost: "bg-white/10 text-text-highlight font-semibold",
    danger: "bg-red-700 ring-2 ring-red-400 ring-offset-2",
  },

  sizes: {
    sm: "px-3.5 py-1.5 text-xs font-semibold tracking-wide gap-1.5",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide gap-2",
    lg: "px-7 py-3 text-base font-semibold tracking-wide gap-2.5",
  },
};