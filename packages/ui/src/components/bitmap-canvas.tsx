"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — BitmapCanvas Primitive
// Lightweight pixel-grid and bitmap surface with accessible cell matrix
// ============================================================================

export const DEFAULT_RETRO_PALETTE = [
  "#000000", // Black
  "#ffffff", // White
  "#008080", // Teal
  "#800000", // Maroon
  "#000080", // Navy
  "#808000", // Olive
  "#c0c0c0", // Silver
  "#00ff00", // Lime
];

export interface BitmapCanvasProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  width?: number;
  height?: number;
  pixelSize?: number;
  grid?: boolean;
  interactive?: boolean;
  activeColor?: string;
  palette?: string[];
  value?: string[][];
  defaultValue?: string[][];
  onChange?: (data: string[][]) => void;
  alt?: string;
}

export const BitmapCanvas = React.forwardRef<HTMLDivElement, BitmapCanvasProps>(
  (
    {
      className,
      width = 16,
      height = 16,
      pixelSize = 14,
      grid = true,
      interactive = false,
      activeColor,
      palette = DEFAULT_RETRO_PALETTE,
      value: controlledValue,
      defaultValue,
      onChange,
      alt = "Bitmap pixel canvas",
      ...props
    },
    ref
  ) => {
    // Generate initial blank or populated 2D grid
    const createInitialGrid = React.useCallback(() => {
      if (defaultValue) return defaultValue;
      return Array.from({ length: height }, () =>
        Array.from({ length: width }, () => palette[0] || "#000000")
      );
    }, [defaultValue, height, width, palette]);

    const [uncontrolledGrid, setUncontrolledGrid] = React.useState<string[][]>(createInitialGrid);
    const isControlled = controlledValue !== undefined;
    const gridData = isControlled ? controlledValue : uncontrolledGrid;

    const currentColor = activeColor ?? palette[1] ?? "#ffffff";

    const updatePixel = (row: number, col: number) => {
      if (!interactive) return;
      const nextGrid = gridData.map((r, rIdx) =>
        rIdx === row
          ? r.map((c, cIdx) => (cIdx === col ? currentColor : c))
          : [...r]
      );
      if (!isControlled) {
        setUncontrolledGrid(nextGrid);
      }
      onChange?.(nextGrid);
    };

    const isPointerDownRef = React.useRef(false);

    return (
      <div
        ref={ref}
        role={interactive ? "grid" : "img"}
        aria-label={alt}
        className={cn(
          "inline-flex flex-col bevel-inset bg-surface-sunken p-1 select-none overflow-auto border border-border",
          className
        )}
        onPointerDown={() => {
          isPointerDownRef.current = true;
        }}
        onPointerUp={() => {
          isPointerDownRef.current = false;
        }}
        onPointerLeave={() => {
          isPointerDownRef.current = false;
        }}
        {...props}
      >
        <div
          className="flex flex-col select-none"
          style={{
            width: `${width * pixelSize}px`,
            height: `${height * pixelSize}px`,
          }}
        >
          {gridData.map((row, rIdx) => (
            <div key={`row-${rIdx}`} className="flex flex-row" role={interactive ? "row" : undefined}>
              {row.map((cellColor, cIdx) => (
                <div
                  key={`cell-${rIdx}-${cIdx}`}
                  role={interactive ? "gridcell" : undefined}
                  tabIndex={interactive ? 0 : -1}
                  aria-label={interactive ? `Pixel (${cIdx + 1}, ${rIdx + 1})` : undefined}
                  onClick={() => updatePixel(rIdx, cIdx)}
                  onPointerEnter={() => {
                    if (isPointerDownRef.current) {
                      updatePixel(rIdx, cIdx);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (!interactive) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      updatePixel(rIdx, cIdx);
                    }
                  }}
                  style={{
                    width: `${pixelSize}px`,
                    height: `${pixelSize}px`,
                    backgroundColor: cellColor,
                  }}
                  className={cn(
                    "flex-shrink-0 cursor-default transition-colors",
                    grid && "border-[0.5px] border-border/20",
                    interactive && "hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
);
BitmapCanvas.displayName = "BitmapCanvas";
