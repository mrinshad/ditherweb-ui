import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — BlinkCursor Primitive
// Classic terminal blinking block, line, or underline cursor
// ============================================================================

export type BlinkCursorVariant = "block" | "line" | "underline";
export type BlinkCursorAs = "span" | "div";

export interface BlinkCursorProps extends React.HTMLAttributes<HTMLElement> {
  variant?: BlinkCursorVariant;
  blink?: boolean;
  char?: string;
  as?: BlinkCursorAs;
}

export const BlinkCursor = React.forwardRef<HTMLElement, BlinkCursorProps>(
  (
    {
      variant = "block",
      blink = true,
      char,
      as: Component = "span",
      className,
      style,
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        role: "presentation",
        "aria-hidden": "true",
        className: cn(
          "inline-block font-mono select-none pointer-events-none",
          blink && "cursor-blink-animate",
          !char && variant === "block" && "w-[0.55em] h-[1em] bg-current align-middle ml-[1px]",
          !char && variant === "line" && "w-[2px] h-[1.1em] bg-current align-middle ml-[1px]",
          !char && variant === "underline" && "w-[0.55em] h-[2px] bg-current align-baseline ml-[1px]",
          className
        ),
        style,
        ...props,
      },
      char || null
    );
  }
);

BlinkCursor.displayName = "BlinkCursor";
