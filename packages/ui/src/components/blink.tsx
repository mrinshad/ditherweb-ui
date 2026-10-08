import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Blink Primitive
// Accessible CSS text emphasis replacing deprecated <blink>
// ============================================================================

export interface BlinkProps extends React.HTMLAttributes<HTMLElement> {
  enabled?: boolean;
  speed?: "slow" | "normal" | "fast";
  as?: "span" | "div" | "strong" | "em" | "p";
}

export const Blink = React.forwardRef<HTMLElement, BlinkProps>(
  (
    {
      className,
      enabled = false,
      speed = "normal",
      as: Component = "span",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref as never}
        className={cn(
          "inline-block font-mono",
          enabled && "retro-blink-animate",
          enabled && speed === "slow" && "retro-blink-slow",
          enabled && speed === "fast" && "retro-blink-fast",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Blink.displayName = "Blink";
