"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Desktop Primitive
// Composable classic desktop workspace canvas container
// ============================================================================

export interface DesktopProps extends React.HTMLAttributes<HTMLDivElement> {
  wallpaper?: "dither" | "solid" | "grid" | "teal" | "none";
}

export const Desktop = React.forwardRef<HTMLDivElement, DesktopProps>(
  ({ className, wallpaper = "dither", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="region"
        aria-label="Desktop Workspace"
        className={cn(
          "relative flex flex-col justify-between w-full min-h-[380px] sm:min-h-[460px] overflow-hidden border border-border select-none",
          // Authentic retro wallpapers
          wallpaper === "dither" && "bg-muted/40 bg-dither-fine",
          wallpaper === "teal" && "bg-[#008080] text-white dark:bg-[#004d4d]",
          wallpaper === "solid" && "bg-surface-sunken",
          wallpaper === "grid" && "bg-surface [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:24px_24px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Desktop.displayName = "Desktop";

export type DesktopIconGridProps = React.HTMLAttributes<HTMLDivElement>;

export const DesktopIconGrid = React.forwardRef<HTMLDivElement, DesktopIconGridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-row flex-wrap sm:flex-col sm:flex-nowrap gap-3 p-3 items-start content-start z-10",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DesktopIconGrid.displayName = "DesktopIconGrid";

export interface DesktopIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
  selected?: boolean;
  onOpen?: () => void;
}

export const DesktopIcon = React.forwardRef<HTMLButtonElement, DesktopIconProps>(
  (
    {
      className,
      icon,
      label,
      selected = false,
      onOpen,
      onClick,
      onDoubleClick,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
    };

    const handleDoubleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onDoubleClick?.(e);
      onOpen?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e);
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen?.();
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        aria-pressed={selected}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "group flex flex-col items-center justify-center gap-1 p-1.5 w-18 sm:w-20 rounded-none text-center font-mono text-xs select-none",
          "focus-visible:outline-none focus:ring-1 focus:ring-primary focus:border-dotted",
          selected
            ? "bg-primary/20 border border-dotted border-primary"
            : "hover:bg-primary/10 border border-transparent",
          className
        )}
        {...props}
      >
        <div className="flex h-8 w-8 items-center justify-center flex-shrink-0" aria-hidden="true">
          {icon ?? (
            <svg
              className="h-7 w-7 text-foreground drop-shadow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="4" width="18" height="15" fill="currentColor" fillOpacity="0.1" />
              <line x1="3" y1="8" x2="21" y2="8" />
              <rect x="7" y="11" width="4" height="4" />
            </svg>
          )}
        </div>
        <span
          className={cn(
            "max-w-full px-1 text-[11px] leading-tight truncate font-bold text-foreground",
            selected && "bg-primary text-primary-foreground"
          )}
        >
          {label}
        </span>
      </button>
    );
  }
);
DesktopIcon.displayName = "DesktopIcon";
