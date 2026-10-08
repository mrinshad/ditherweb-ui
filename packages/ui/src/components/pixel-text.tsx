import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — PixelText Primitive
// Typography component with pixel-crisp font rendering and stepped retro drop shadows
// ============================================================================

export type PixelTextAs = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
export type PixelTextSize = "sm" | "base" | "lg" | "xl" | "2xl";
export type PixelTextShadow = "none" | "pixel" | "stepped";

export interface PixelTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: PixelTextAs;
  size?: PixelTextSize;
  shadow?: PixelTextShadow;
  crisp?: boolean;
  glow?: boolean;
}

const sizeClasses: Record<PixelTextSize, string> = {
  sm: "text-caption",
  base: "text-body",
  lg: "text-lg font-bold",
  xl: "text-xl font-bold",
  "2xl": "text-2xl font-bold",
};

const shadowClasses: Record<PixelTextShadow, string> = {
  none: "",
  pixel: "pixel-text-shadow",
  stepped: "pixel-text-stepped",
};

export const PixelText = React.forwardRef<HTMLElement, PixelTextProps>(
  (
    {
      as: Component = "span",
      size = "base",
      shadow = "none",
      crisp = true,
      glow = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          "font-mono uppercase tracking-wider",
          sizeClasses[size],
          shadowClasses[shadow],
          crisp && "pixel-text-crisp",
          glow && "[text-shadow:0_0_6px_currentColor]",
          className
        ),
        ...props,
      },
      children
    );
  }
);

PixelText.displayName = "PixelText";
