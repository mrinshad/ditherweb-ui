import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Pixelate Primitive
// Presentation wrapper applying retro pixelation and crisp-edge rendering
// ============================================================================

export type PixelateScale = 1 | 2 | 4 | 8;
export type PixelateRendering = "pixelated" | "crisp-edges" | "auto";

export interface PixelateProps extends React.HTMLAttributes<HTMLDivElement> {
  scale?: PixelateScale;
  rendering?: PixelateRendering;
  crispText?: boolean;
}

export const Pixelate = React.forwardRef<HTMLDivElement, PixelateProps>(
  (
    {
      className,
      scale = 1,
      rendering = "pixelated",
      crispText = true,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const renderingStyle: React.CSSProperties = {
      imageRendering: rendering as React.CSSProperties["imageRendering"],
      ...(rendering === "pixelated" ? { msInterpolationMode: "nearest-neighbor" } : {}),
      ...(scale > 1 ? { "--pixel-scale": scale } as React.CSSProperties : {}),
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-block max-w-full",
          crispText && "pixel-text-crisp",
          rendering === "pixelated" && "[image-rendering:pixelated] [image-rendering:crisp-edges]",
          rendering === "crisp-edges" && "[image-rendering:crisp-edges]",
          scale === 2 && "[&_img]:scale-[2] [&_canvas]:scale-[2] origin-top-left",
          scale === 4 && "[&_img]:scale-[4] [&_canvas]:scale-[4] origin-top-left",
          scale === 8 && "[&_img]:scale-[8] [&_canvas]:scale-[8] origin-top-left",
          className
        )}
        style={{ ...renderingStyle, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Pixelate.displayName = "Pixelate";
