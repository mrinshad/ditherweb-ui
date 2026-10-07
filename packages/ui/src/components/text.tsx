import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type TextElement = "p" | "span" | "div" | "label";
export type TextSize = "xs" | "sm" | "base" | "lg" | "xl";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextVariant = "default" | "muted" | "accent";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextElement;
  size?: TextSize;
  weight?: TextWeight;
  variant?: TextVariant;
  mono?: boolean;
}

const sizeStyles: Record<TextSize, string> = {
  xs: "text-xs leading-normal",
  sm: "text-sm leading-normal",
  base: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
  xl: "text-xl leading-snug",
};

const weightStyles: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const variantStyles: Record<TextVariant, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  accent: "text-primary",
};

const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      as: Component = "p",
      size = "base",
      weight = "normal",
      variant = "default",
      mono = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref as never}
        className={cn(
          sizeStyles[size],
          weightStyles[weight],
          variantStyles[variant],
          mono ? "font-mono" : "font-sans",
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = "Text";

export { Text };
