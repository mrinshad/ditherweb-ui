import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Noise Primitive
// Procedural grain / noise texture overlay with optional micro-jitter animation
// ============================================================================

export type NoiseIntensity = "subtle" | "medium" | "strong" | number;
export type NoiseMode = "overlay" | "standalone";
export type NoiseBlendMode = "normal" | "multiply" | "screen" | "overlay";

export interface NoiseProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: NoiseIntensity;
  animated?: boolean;
  mode?: NoiseMode;
  blendMode?: NoiseBlendMode;
}

const intensityValues: Record<"subtle" | "medium" | "strong", number> = {
  subtle: 0.05,
  medium: 0.12,
  strong: 0.25,
};

function resolveIntensity(intensity: NoiseIntensity): number {
  if (typeof intensity === "number") {
    return Math.max(0, Math.min(1, intensity));
  }
  return intensityValues[intensity] ?? 0.12;
}

export const Noise = React.forwardRef<HTMLDivElement, NoiseProps>(
  (
    {
      className,
      intensity = "medium",
      animated = false,
      mode = "overlay",
      blendMode = "normal",
      children,
      style,
      ...props
    },
    ref
  ) => {
    const opacity = resolveIntensity(intensity);

    const noiseOverlayStyle: React.CSSProperties = {
      opacity,
      mixBlendMode: blendMode,
    };

    if (mode === "standalone") {
      return (
        <div
          ref={ref}
          role="presentation"
          aria-hidden="true"
          className={cn(
            "w-full h-full min-h-[40px] pointer-events-none select-none noise-texture",
            animated && "noise-animated",
            className
          )}
          style={{ ...noiseOverlayStyle, ...style }}
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
            "absolute inset-0 pointer-events-none select-none z-10 noise-texture",
            animated && "noise-animated"
          )}
          style={noiseOverlayStyle}
        />
      </div>
    );
  }
);

Noise.displayName = "Noise";
