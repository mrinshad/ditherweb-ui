import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Halftone Primitive
// Dot-matrix halftone screen effect overlay or background texture
// ============================================================================

export type HalftoneDensity = "sparse" | "medium" | "dense";
export type HalftoneSize = "sm" | "md" | "lg";
export type HalftoneMode = "overlay" | "background" | "standalone";

export interface HalftoneProps extends React.HTMLAttributes<HTMLDivElement> {
  density?: HalftoneDensity;
  size?: HalftoneSize;
  color?: string;
  opacity?: number;
  mode?: HalftoneMode;
}

const sizeClasses: Record<HalftoneSize, string> = {
  sm: "halftone-size-sm",
  md: "halftone-size-md",
  lg: "halftone-size-lg",
};

export const Halftone = React.forwardRef<HTMLDivElement, HalftoneProps>(
  (
    {
      className,
      density = "medium",
      size = "md",
      color,
      opacity = 0.5,
      mode = "overlay",
      children,
      style,
      ...props
    },
    ref
  ) => {
    const sizeClass = sizeClasses[size] || sizeClasses.md;
    const clampedOpacity = Math.max(0, Math.min(1, opacity));

    const patternStyle: React.CSSProperties = {
      opacity: clampedOpacity,
      ...(color ? { color } : {}),
      ...(density === "sparse" ? { backgroundSize: size === "sm" ? "8px 8px" : size === "md" ? "14px 14px" : "20px 20px" } : {}),
      ...(density === "dense" ? { backgroundSize: size === "sm" ? "3px 3px" : size === "md" ? "6px 6px" : "10px 10px" } : {}),
    };

    if (mode === "standalone") {
      return (
        <div
          ref={ref}
          role="presentation"
          aria-hidden="true"
          className={cn(
            "w-full h-full min-h-[40px] pointer-events-none select-none halftone-pattern",
            sizeClass,
            className
          )}
          style={{ ...patternStyle, ...style }}
          {...props}
        />
      );
    }

    if (mode === "background") {
      return (
        <div
          ref={ref}
          className={cn("relative overflow-hidden halftone-pattern", sizeClass, className)}
          style={{ ...style }}
          {...props}
        >
          {children}
        </div>
      );
    }

    // Default: 'overlay'
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        style={style}
        {...props}
      >
        {children}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 pointer-events-none select-none z-10 halftone-pattern",
            sizeClass
          )}
          style={patternStyle}
        />
      </div>
    );
  }
);

Halftone.displayName = "Halftone";
