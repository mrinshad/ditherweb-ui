"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — PixelArt Primitive
// Presentation component for pixel-art imagery with integer scaling and pixel frames
// ============================================================================

export interface PixelArtProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt: string;
  scale?: 1 | 2 | 3 | 4 | 8 | "auto";
  frame?: "none" | "bevel" | "inset" | "pixel" | "double";
  ditherOverlay?: boolean;
  caption?: React.ReactNode;
  width?: number | string;
  height?: number | string;
}

export const PixelArt = React.forwardRef<HTMLElement, PixelArtProps>(
  (
    {
      className,
      src,
      alt,
      scale = "auto",
      frame = "pixel",
      ditherOverlay = false,
      caption,
      width,
      height,
      children,
      ...props
    },
    ref
  ) => {
    const scaleStyle: React.CSSProperties = {
      imageRendering: "pixelated",
      ...(scale !== "auto"
        ? {
            width: typeof width === "number" ? `${width * scale}px` : undefined,
            height: typeof height === "number" ? `${height * scale}px` : undefined,
            maxWidth: "none",
          }
        : {
            width: width ?? "auto",
            height: height ?? "auto",
            maxWidth: "100%",
          }),
    };

    const content = (
      <div
        className={cn(
          "relative inline-block overflow-hidden select-none bg-surface-sunken",
          frame === "pixel" && "border-2 border-border shadow-hard-sm",
          frame === "bevel" && "bevel-raised shadow-hard-md",
          frame === "inset" && "bevel-inset",
          frame === "double" && "border-4 border-double border-border-strong p-1",
          frame === "none" && "border-none"
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            style={scaleStyle}
            className="block [image-rendering:pixelated] [image-rendering:crisp-edges]"
          />
        ) : (
          children
        )}

        {ditherOverlay && (
          <div
            className="pointer-events-none absolute inset-0 bg-dither-fine opacity-25 mix-blend-overlay"
            aria-hidden="true"
          />
        )}
      </div>
    );

    if (caption) {
      return (
        <figure
          ref={ref as React.Ref<HTMLElement>}
          className={cn("inline-flex flex-col items-center gap-1.5 p-1 font-mono", className)}
          {...props}
        >
          {content}
          <figcaption className="text-[11px] text-muted-foreground text-center max-w-full truncate px-1">
            {caption}
          </figcaption>
        </figure>
      );
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        role="img"
        aria-label={alt}
        className={cn("inline-block", className)}
        {...props}
      >
        {content}
      </div>
    );
  }
);
PixelArt.displayName = "PixelArt";
