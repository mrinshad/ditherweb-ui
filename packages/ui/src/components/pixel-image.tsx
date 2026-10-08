import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — PixelImage Primitive
// Crisp nearest-neighbor bitmap display wrapper with vintage frames
// ============================================================================

export interface PixelImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  pixelRatio?: 1 | 2 | 3 | 4;
  frame?: "none" | "bevel" | "inset" | "dither" | "groove" | "simple";
  caption?: React.ReactNode;
  containerClassName?: string;
}

export const PixelImage = React.forwardRef<HTMLImageElement, PixelImageProps>(
  (
    {
      className,
      containerClassName,
      src,
      alt = "",
      width,
      height,
      pixelRatio = 1,
      frame = "none",
      caption,
      ...props
    },
    ref
  ) => {
    const frameStyles = {
      none: "p-0 bg-transparent",
      bevel: "bevel-raised p-1 bg-surface shadow-hard-sm",
      inset: "bevel-inset p-1 bg-background",
      dither: "border-2 border-border p-1.5 bg-surface dither-bg-fine",
      groove: "border-2 border-border p-1 bg-surface",
      simple: "border border-border p-0.5 bg-background",
    };

    const imageElement = (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "image-rendering-pixelated max-w-full h-auto block select-none pointer-events-none",
          pixelRatio > 1 && `scale-[${pixelRatio}] origin-top-left`,
          className
        )}
        loading="lazy"
        {...props}
      />
    );

    if (caption) {
      return (
        <figure
          className={cn(
            "inline-flex flex-col font-mono text-xs select-none max-w-full",
            frameStyles[frame],
            containerClassName
          )}
        >
          {imageElement}
          <figcaption className="mt-1.5 text-[11px] text-muted-foreground text-center italic border-t border-border/40 pt-1">
            {caption}
          </figcaption>
        </figure>
      );
    }

    if (frame !== "none" || containerClassName) {
      return (
        <div
          className={cn(
            "inline-block font-mono select-none max-w-full",
            frameStyles[frame],
            containerClassName
          )}
        >
          {imageElement}
        </div>
      );
    }

    return imageElement;
  }
);
PixelImage.displayName = "PixelImage";
