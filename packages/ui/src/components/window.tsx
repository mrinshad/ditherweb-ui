"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Window Primitive
// Semantic classic application window surface container
// ============================================================================

export interface WindowProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  variant?: "default" | "elevated" | "flat" | "inset";
  size?: "sm" | "md" | "lg" | "full" | "auto";
}

export const Window = React.forwardRef<HTMLDivElement, WindowProps>(
  (
    {
      className,
      active = true,
      variant = "default",
      size = "auto",
      children,
      role = "region",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role={role}
        data-active={active ? "true" : "false"}
        className={cn(
          "flex flex-col bg-surface text-foreground font-mono select-auto overflow-hidden",
          // Variant styling
          variant === "default" && "bevel-raised shadow-hard-md border border-border",
          variant === "elevated" && "bevel-raised shadow-hard-lg border-2 border-border-strong",
          variant === "flat" && "border-2 border-border bg-surface",
          variant === "inset" && "bevel-inset bg-surface-sunken",
          // Size presets
          size === "sm" && "max-w-sm w-full",
          size === "md" && "max-w-md w-full",
          size === "lg" && "max-w-xl w-full",
          size === "full" && "w-full h-full",
          size === "auto" && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Window.displayName = "Window";

export interface WindowContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

export const WindowContent = React.forwardRef<HTMLDivElement, WindowContentProps>(
  ({ className, padded = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex-1 overflow-auto bg-surface text-foreground", padded && "p-3 sm:p-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
WindowContent.displayName = "WindowContent";

export interface WindowFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
}

export const WindowFooter = React.forwardRef<HTMLDivElement, WindowFooterProps>(
  ({ className, bordered = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-end gap-2 bg-surface p-2.5 select-none",
          bordered && "border-t border-border",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
WindowFooter.displayName = "WindowFooter";

export type WindowStatusBarProps = React.HTMLAttributes<HTMLDivElement>;

export const WindowStatusBar = React.forwardRef<HTMLDivElement, WindowStatusBarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={cn(
          "flex items-center gap-1.5 border-t border-border bg-surface p-1 select-none font-mono text-[11px] text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
WindowStatusBar.displayName = "WindowStatusBar";

export interface WindowStatusItemProps extends React.HTMLAttributes<HTMLDivElement> {
  sunken?: boolean;
}

export const WindowStatusItem = React.forwardRef<HTMLDivElement, WindowStatusItemProps>(
  ({ className, sunken = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-2 py-0.5 truncate",
          sunken && "bevel-inset bg-muted/40",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
WindowStatusItem.displayName = "WindowStatusItem";
