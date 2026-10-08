import * as React from "react";
import { cn } from "../lib/utils";
import { Scanline, type ScanlineDensity } from "./scanline";

// ============================================================================
// Ditherweb — CRT Primitive
// Retro Cathode Ray Tube display wrapper with scanlines, vignette, curvature, and phosphor tints
// ============================================================================

export type CRTCurvature = "none" | "subtle" | "medium";
export type CRTPhosphor = "none" | "amber" | "green" | "mono";

export interface CRTProps extends React.HTMLAttributes<HTMLDivElement> {
  curvature?: CRTCurvature;
  scanlines?: boolean | ScanlineDensity;
  vignette?: boolean;
  flicker?: boolean;
  phosphor?: CRTPhosphor;
  glow?: boolean;
}

const curvatureClasses: Record<CRTCurvature, string> = {
  none: "",
  subtle: "crt-curvature-subtle",
  medium: "crt-curvature-medium",
};

const phosphorClasses: Record<CRTPhosphor, string> = {
  none: "",
  amber: "crt-phosphor-amber",
  green: "crt-phosphor-green",
  mono: "crt-phosphor-mono",
};

export const CRT = React.forwardRef<HTMLDivElement, CRTProps>(
  (
    {
      className,
      curvature = "subtle",
      scanlines = true,
      vignette = true,
      flicker = false,
      phosphor = "none",
      glow = true,
      children,
      ...props
    },
    ref
  ) => {
    const scanlineDensity: ScanlineDensity =
      typeof scanlines === "string" ? scanlines : "medium";

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-black text-foreground font-mono select-none p-4",
          curvatureClasses[curvature],
          phosphorClasses[phosphor],
          vignette && "crt-vignette",
          flicker && "crt-flicker-active",
          glow && phosphor !== "none" && "[text-shadow:0_0_4px_currentColor]",
          className
        )}
        {...props}
      >
        <div className="relative z-0 select-text">{children}</div>

        {scanlines && (
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-10">
            <Scanline density={scanlineDensity} opacity={0.25} mode="standalone" />
          </div>
        )}
      </div>
    );
  }
);

CRT.displayName = "CRT";
