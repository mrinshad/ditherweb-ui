import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Dither Primitive
// Visual wrapper applying procedural Bayer, checker, fine, dense, or noise dither patterns
// ============================================================================

export type DitherPattern = "bayer" | "checker" | "fine" | "dense" | "noise";
export type DitherMode = "overlay" | "backdrop" | "standalone";
export type DitherIntensity = "subtle" | "medium" | "strong" | number;

export interface DitherProps extends React.HTMLAttributes<HTMLDivElement> {
  pattern?: DitherPattern;
  mode?: DitherMode;
  intensity?: DitherIntensity;
  animated?: boolean;
}

const patternClasses: Record<DitherPattern, string> = {
  bayer: "dither-bayer",
  checker: "dither-check",
  fine: "dither-fine",
  dense: "dither-dense",
  noise: "dither-noise",
};

const intensityValues: Record<"subtle" | "medium" | "strong", number> = {
  subtle: 0.25,
  medium: 0.5,
  strong: 0.85,
};

function resolveIntensity(intensity: DitherIntensity): number {
  if (typeof intensity === "number") {
    return Math.max(0, Math.min(1, intensity));
  }
  return intensityValues[intensity] ?? 0.5;
}

export const Dither = React.forwardRef<HTMLDivElement, DitherProps>(
  (
    {
      className,
      pattern = "bayer",
      mode = "overlay",
      intensity = "medium",
      animated = false,
      children,
      ...props
    },
    ref
  ) => {
    const patternClass = patternClasses[pattern] || patternClasses.bayer;
    const opacity = resolveIntensity(intensity);

    if (mode === "standalone") {
      return (
        <div
          ref={ref}
          role="presentation"
          aria-hidden="true"
          className={cn("w-full h-full min-h-[40px] pointer-events-none select-none", patternClass, className)}
          style={{ opacity, ...props.style }}
          {...props}
        />
      );
    }

    if (mode === "backdrop") {
      return (
        <div
          ref={ref}
          className={cn("relative overflow-hidden", patternClass, className)}
          style={{ ...props.style }}
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
        {...props}
      >
        {children}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 pointer-events-none select-none z-10",
            patternClass,
            animated && "noise-animated"
          )}
          style={{ opacity }}
        />
      </div>
    );
  }
);

Dither.displayName = "Dither";
