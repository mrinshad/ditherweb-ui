"use client";

import * as React from "react";
import { cn } from "../lib/utils";

export type BackdropVariant = "dimmed" | "dither" | "transparent";

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual aesthetic of the backdrop layer.
   * - `dimmed`: Semi-opaque darkened screen.
   * - `dither`: Classic retro dithered stipple pattern.
   * - `transparent`: Invisible click barrier.
   */
  variant?: BackdropVariant;
  /**
   * If true, backdrop is completely invisible while maintaining click interception.
   */
  invisible?: boolean;
}

/**
 * Backdrop primitive for layered overlays, dialogs, drawers, and sheets.
 * Provides classic dimming, retro dither patterns, and outside click capture.
 */
export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  ({ className, variant = "dimmed", invisible = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "retro-backdrop",
          !invisible && {
            "retro-backdrop-dimmed": variant === "dimmed",
            "retro-backdrop-dither": variant === "dither",
            "bg-transparent": variant === "transparent",
          },
          invisible && "bg-transparent pointer-events-auto",
          className
        )}
        {...props}
      />
    );
  }
);

Backdrop.displayName = "Backdrop";
