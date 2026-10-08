"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — WindowTitleBar Primitive
// Classic application window title bar strip with active/inactive visual contrast
// ============================================================================

export interface WindowTitleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const WindowTitleBar = React.forwardRef<HTMLDivElement, WindowTitleBarProps>(
  ({ className, active = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-active={active ? "true" : "false"}
        className={cn(
          "flex h-7 items-center justify-between px-2 py-1 select-none font-mono text-xs font-bold transition-colors",
          active
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
WindowTitleBar.displayName = "WindowTitleBar";

export interface WindowTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export const WindowTitle = React.forwardRef<HTMLHeadingElement, WindowTitleProps>(
  ({ className, as: Component = "span", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("flex-1 truncate tracking-wider font-bold text-xs uppercase", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
WindowTitle.displayName = "WindowTitle";

export interface WindowIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
}

export const WindowIcon = React.forwardRef<HTMLSpanElement, WindowIconProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("mr-1.5 inline-flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center", className)}
        aria-hidden="true"
        {...props}
      >
        {icon ?? children ?? (
          <span className="h-3 w-3 bg-secondary border border-border inline-block" />
        )}
      </span>
    );
  }
);
WindowIcon.displayName = "WindowIcon";
