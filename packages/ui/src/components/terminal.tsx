"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Terminal Primitive
// Presentation-only classic monospaced command-line terminal container
// ============================================================================

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "amber" | "matrix" | "paper";
}

export const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  ({ className, variant = "dark", children, role = "region", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={role}
        aria-label="Terminal Console"
        className={cn(
          "flex flex-col w-full font-mono text-xs overflow-hidden select-text",
          "bevel-inset border border-border",
          // Authentic phosphor palette variations
          variant === "dark" && "bg-black text-zinc-100 dark:bg-black dark:text-zinc-100",
          variant === "matrix" && "bg-black text-emerald-400 dark:bg-black dark:text-emerald-400",
          variant === "amber" && "bg-black text-amber-400 dark:bg-black dark:text-amber-400",
          variant === "paper" && "bg-surface text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Terminal.displayName = "Terminal";

export interface TerminalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const TerminalHeader = React.forwardRef<HTMLDivElement, TerminalHeaderProps>(
  ({ className, title = "TERMINAL", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between px-3 py-1 bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-mono text-[11px] font-bold select-none",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-none bg-emerald-500 inline-block" aria-hidden="true" />
          <span className="tracking-wider uppercase">{title}</span>
        </div>
        {children}
      </div>
    );
  }
);
TerminalHeader.displayName = "TerminalHeader";

export type TerminalBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const TerminalBody = React.forwardRef<HTMLDivElement, TerminalBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex-1 p-3 space-y-1.5 overflow-x-auto overflow-y-auto max-h-[360px]", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TerminalBody.displayName = "TerminalBody";

export type TerminalLineProps = React.HTMLAttributes<HTMLDivElement>;

export const TerminalLine = React.forwardRef<HTMLDivElement, TerminalLineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap items-baseline gap-1.5 font-mono text-xs leading-relaxed", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TerminalLine.displayName = "TerminalLine";

export type TerminalPromptProps = React.HTMLAttributes<HTMLSpanElement>;

export const TerminalPrompt = React.forwardRef<HTMLSpanElement, TerminalPromptProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("font-bold text-emerald-400 select-none flex-shrink-0 font-mono", className)}
        aria-hidden="true"
        {...props}
      >
        {children ?? "user@ditherweb:~$"}
      </span>
    );
  }
);
TerminalPrompt.displayName = "TerminalPrompt";

export type TerminalCommandProps = React.HTMLAttributes<HTMLSpanElement>;

export const TerminalCommand = React.forwardRef<HTMLSpanElement, TerminalCommandProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("font-semibold text-zinc-100 flex-1 font-mono", className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
TerminalCommand.displayName = "TerminalCommand";

export type TerminalOutputProps = React.HTMLAttributes<HTMLPreElement>;

export const TerminalOutput = React.forwardRef<HTMLPreElement, TerminalOutputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn(
          "font-mono text-xs whitespace-pre-wrap text-zinc-300 leading-relaxed pl-4 py-0.5 border-l border-zinc-800",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    );
  }
);
TerminalOutput.displayName = "TerminalOutput";

export interface TerminalCursorProps extends React.HTMLAttributes<HTMLSpanElement> {
  blink?: boolean;
}

export const TerminalCursor = React.forwardRef<HTMLSpanElement, TerminalCursorProps>(
  ({ className, blink = true, ...props }, ref) => {
    return (
      <span
        ref={ref}
        aria-hidden="true"
        className={cn(
          "inline-block w-2 h-3.5 bg-emerald-400 align-middle ml-0.5",
          blink && "animate-pulse motion-reduce:animate-none",
          className
        )}
        {...props}
      />
    );
  }
);
TerminalCursor.displayName = "TerminalCursor";
