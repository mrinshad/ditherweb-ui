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
    const [statusMessage, setStatusMessage] = React.useState<string>("");
    const isControlled = controlledValue !== undefined;
    const gridData = isControlled ? controlledValue : uncontrolledGrid;

    const innerRef = React.useRef<HTMLDivElement | null>(null);

    const setMergedRef = (node: HTMLDivElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref && "current" in ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

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
      setStatusMessage(`Pixel (${col + 1}, ${row + 1}) set to ${currentColor}`);
      onChange?.(nextGrid);
    };

    const handleCellKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, r: number, c: number) => {
      if (!interactive) return;

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        updatePixel(r, c);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (c < width - 1) {
          innerRef.current?.querySelector<HTMLElement>(`[data-row="${r}"][data-col="${c + 1}"]`)?.focus();
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (c > 0) {
          innerRef.current?.querySelector<HTMLElement>(`[data-row="${r}"][data-col="${c - 1}"]`)?.focus();
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (r < height - 1) {
          innerRef.current?.querySelector<HTMLElement>(`[data-row="${r + 1}"][data-col="${c}"]`)?.focus();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (r > 0) {
          innerRef.current?.querySelector<HTMLElement>(`[data-row="${r - 1}"][data-col="${c}"]`)?.focus();
        }
      }
    };

    const isPointerDownRef = React.useRef(false);

    return (
      <div
        ref={setMergedRef}
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
        {interactive && (
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {statusMessage}
          </div>
        )}
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
                  data-row={rIdx}
                  data-col={cIdx}
                  role={interactive ? "gridcell" : undefined}
                  tabIndex={interactive ? 0 : -1}
                  aria-label={interactive ? `Pixel (${cIdx + 1}, ${rIdx + 1}): ${cellColor}` : undefined}
                  onClick={() => updatePixel(rIdx, cIdx)}
                  onPointerEnter={() => {
                    if (isPointerDownRef.current) {
                      updatePixel(rIdx, cIdx);
                    }
                  }}
                  onKeyDown={(e) => handleCellKeyDown(e, rIdx, cIdx)}
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
