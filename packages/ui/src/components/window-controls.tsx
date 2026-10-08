"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — WindowControls Primitive
// Classic application window management buttons (Minimize, Maximize, Close)
// ============================================================================

export interface WindowControlProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "minimize" | "maximize" | "restore" | "close" | "help" | "custom";
}

export const WindowControl = React.forwardRef<HTMLButtonElement, WindowControlProps>(
  ({ className, variant = "custom", children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "inline-flex h-4 w-4 items-center justify-center p-0 select-none",
          "bevel-raised active:bevel-pressed",
          "bg-surface text-foreground font-mono text-[10px] leading-none",
          "hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
        {...props}
      >
        {children ?? (
          variant === "minimize" ? (
            <svg
              className="h-2.5 w-2.5"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              aria-hidden="true"
            >
              <line x1="1" y1="8" x2="9" y2="8" />
            </svg>
          ) : variant === "maximize" ? (
            <svg
              className="h-2.5 w-2.5"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="1.5" y="1.5" width="7" height="7" stroke="currentColor" fill="none" strokeWidth="1.5" />
              <line x1="1.5" y1="3" x2="8.5" y2="3" strokeWidth="1.5" />
            </svg>
          ) : variant === "restore" ? (
            <svg
              className="h-2.5 w-2.5"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              aria-hidden="true"
            >
              <rect x="3.5" y="1.5" width="5" height="5" />
              <rect x="1.5" y="3.5" width="5" height="5" />
            </svg>
          ) : variant === "close" ? (
            <svg
              className="h-2.5 w-2.5"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              aria-hidden="true"
            >
              <line x1="2" y1="2" x2="8" y2="8" />
              <line x1="8" y1="2" x2="2" y2="8" />
            </svg>
          ) : variant === "help" ? (
            <span className="font-bold text-[9px]" aria-hidden="true">?</span>
          ) : null
        )}
      </button>
    );
  }
);
WindowControl.displayName = "WindowControl";

export interface WindowControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  onMinimize?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMaximize?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isMaximized?: boolean;
  showMinimize?: boolean;
  showMaximize?: boolean;
  showClose?: boolean;
  showHelp?: boolean;
  onHelp?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const WindowControls = React.forwardRef<HTMLDivElement, WindowControlsProps>(
  (
    {
      className,
      onMinimize,
      onMaximize,
      onClose,
      isMaximized = false,
      showMinimize = true,
      showMaximize = true,
      showClose = true,
      showHelp = false,
      onHelp,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-label="Window controls"
        className={cn("flex items-center gap-1 select-none", className)}
        {...props}
      >
        {showHelp && (
          <WindowControl
            variant="help"
            aria-label="Help"
            disabled={disabled}
            onClick={onHelp}
          />
        )}
        {showMinimize && (
          <WindowControl
            variant="minimize"
            aria-label="Minimize"
            disabled={disabled}
            onClick={onMinimize}
          />
        )}
        {showMaximize && (
          <WindowControl
            variant={isMaximized ? "restore" : "maximize"}
            aria-label={isMaximized ? "Restore" : "Maximize"}
            disabled={disabled}
            onClick={onMaximize}
          />
        )}
        {showClose && (
          <WindowControl
            variant="close"
            aria-label="Close"
            disabled={disabled}
            onClick={onClose}
          />
        )}
      </div>
    );
  }
);
WindowControls.displayName = "WindowControls";
