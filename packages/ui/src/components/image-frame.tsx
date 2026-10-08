import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — ImageFrame Primitive
// Semantic figure container with retro bevels, pixel rendering, and dither treatments
// ============================================================================

export type ImageFrameVariant =
  | "plain"
  | "pixel"
  | "inset"
  | "raised"
  | "dither"
  | "bitmap";

export interface ImageFrameProps extends React.HTMLAttributes<HTMLElement> {
  variant?: ImageFrameVariant;
  caption?: React.ReactNode;
  pixelated?: boolean;
  ditherOverlay?: boolean | "bayer" | "checker" | "fine" | "dense" | "noise";
  aspectRatio?: "1/1" | "4/3" | "16/9" | "auto" | string;
}

const variantClasses: Record<ImageFrameVariant, string> = {
  plain: "border border-border bg-surface",
  pixel: "border-2 border-border-strong bg-surface",
  inset: "bevel-inset bg-surface-sunken p-1",
  raised: "bevel-raised shadow-hard-sm p-1 bg-surface",
  dither: "border-2 border-border bg-surface p-1 relative",
  bitmap: "border-2 border-border-strong shadow-hard-md bg-surface p-1",
};

const ditherClasses: Record<string, string> = {
  bayer: "dither-bayer",
  checker: "dither-check",
  fine: "dither-fine",
  dense: "dither-dense",
  noise: "dither-noise",
};

export const ImageFrame = React.forwardRef<HTMLElement, ImageFrameProps>(
  (
    {
      className,
      variant = "plain",
      caption,
      pixelated = false,
      ditherOverlay = false,
      aspectRatio = "auto",
      children,
      style,
      ...props
    },
    ref
  ) => {
    const ditherPatternKey =
      typeof ditherOverlay === "string" ? ditherOverlay : "bayer";
    const ditherClass = ditherOverlay
      ? ditherClasses[ditherPatternKey] || "dither-bayer"
      : undefined;

    const frameStyle: React.CSSProperties = {
      ...(aspectRatio && aspectRatio !== "auto" ? { aspectRatio } : {}),
      ...style,
    };

    return (
      <figure
        ref={ref}
        className={cn(
          "relative inline-flex flex-col m-0 select-none overflow-hidden max-w-full",
          variantClasses[variant],
          pixelated && "[&_img]:[image-rendering:pixelated] [&_canvas]:[image-rendering:pixelated]",
          className
        )}
        style={frameStyle}
        {...props}
      >
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
          {children}
          {ditherOverlay && (
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 pointer-events-none select-none z-10 opacity-30",
                ditherClass
              )}
            />
          )}
        </div>
        {caption && (
          <figcaption className="text-caption text-secondary mt-1.5 px-1 font-mono text-center select-text">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }
);

ImageFrame.displayName = "ImageFrame";
