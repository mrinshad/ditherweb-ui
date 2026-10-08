import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Scanline Primitive
// Phosphor scanline stripe overlay for CRT displays, viewports, and retro monitors
// ============================================================================

export type ScanlineDensity = "fine" | "medium" | "coarse";
export type ScanlineOrientation = "horizontal" | "vertical";
export type ScanlineMode = "overlay" | "standalone";

export interface ScanlineProps extends React.HTMLAttributes<HTMLDivElement> {
  density?: ScanlineDensity;
  orientation?: ScanlineOrientation;
  animated?: boolean;
  opacity?: number;
  mode?: ScanlineMode;
}

const scanlineClasses: Record<ScanlineOrientation, Record<ScanlineDensity, string>> = {
  horizontal: {
    fine: "scanlines-horizontal-fine",
    medium: "scanlines-horizontal-medium",
    coarse: "scanlines-horizontal-coarse",
  },
  vertical: {
    fine: "scanlines-vertical-fine",
    medium: "scanlines-vertical-medium",
    coarse: "scanlines-vertical-coarse",
  },
};

export const Scanline = React.forwardRef<HTMLDivElement, ScanlineProps>(
  (
    {
      className,
      density = "medium",
      orientation = "horizontal",
      animated = false,
      opacity = 0.3,
      mode = "overlay",
      children,
      style,
      ...props
    },
    ref
  ) => {
    const scanlineClass =
      scanlineClasses[orientation]?.[density] ||
      scanlineClasses.horizontal.medium;

    const clampedOpacity = Math.max(0, Math.min(1, opacity));

    const overlayStyle: React.CSSProperties = {
      opacity: clampedOpacity,
    };

    if (mode === "standalone") {
      return (
        <div
          ref={ref}
          role="presentation"
          aria-hidden="true"
          className={cn(
            "w-full h-full min-h-[40px] pointer-events-none select-none",
            scanlineClass,
            animated && "scanlines-roll",
            className
          )}
          style={{ ...overlayStyle, ...style }}
          {...props}
        />
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
            "absolute inset-0 pointer-events-none select-none z-10",
            scanlineClass,
            animated && "scanlines-roll"
          )}
          style={overlayStyle}
        />
      </div>
    );
  }
);

Scanline.displayName = "Scanline";
