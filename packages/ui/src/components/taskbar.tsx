"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Taskbar Primitive
// Classic desktop taskbar abstraction with start trigger, task buttons, and status tray
// ============================================================================

export interface TaskbarProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "bottom" | "top" | "relative";
}

export const Taskbar = React.forwardRef<HTMLDivElement, TaskbarProps>(
  ({ className, position = "relative", children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        role="region"
        aria-label="Desktop Taskbar"
        className={cn(
          "flex h-9 w-full items-center justify-between gap-1.5 p-1 select-none font-mono text-xs",
          "bevel-raised bg-surface border-t border-border z-30",
          position === "bottom" && "fixed bottom-0 left-0 right-0",
          position === "top" && "fixed top-0 left-0 right-0 border-t-0 border-b",
          position === "relative" && "relative",
          className
        )}
        {...props}
      >
        {children}
      </header>
    );
  }
);
Taskbar.displayName = "Taskbar";

export interface TaskbarStartProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
}

export const TaskbarStart = React.forwardRef<HTMLButtonElement, TaskbarStartProps>(
  ({ className, active = false, icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={active}
        data-active={active ? "true" : "false"}
        className={cn(
          "inline-flex h-7 items-center gap-1.5 px-2.5 font-mono text-xs font-bold leading-none select-none",
          active
            ? "bevel-pressed bg-muted/80 text-foreground ring-1 ring-border"
            : "bevel-raised active:bevel-pressed bg-surface text-foreground hover:bg-muted/60",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className
        )}
        {...props}
      >
        {icon ?? (
          <span className="inline-block h-3.5 w-3.5 border border-border bg-primary" aria-hidden="true" />
        )}
        <span>{children ?? "START"}</span>
      </button>
    );
  }
);
TaskbarStart.displayName = "TaskbarStart";

export type TaskbarTasksProps = React.HTMLAttributes<HTMLDivElement>;

export const TaskbarTasks = React.forwardRef<HTMLDivElement, TaskbarTasksProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Running Tasks"
        className={cn("flex flex-1 items-center gap-1 overflow-x-auto min-w-0 px-1 py-0.5", className)}
        {...props}
      >
        {children}
      </nav>
    );
  }
);
TaskbarTasks.displayName = "TaskbarTasks";

export interface TaskbarTaskProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
}

export const TaskbarTask = React.forwardRef<HTMLButtonElement, TaskbarTaskProps>(
  ({ className, active = false, icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={active}
        data-active={active ? "true" : "false"}
        className={cn(
          "inline-flex h-7 max-w-[180px] min-w-[80px] sm:min-w-[120px] flex-1 items-center gap-1.5 px-2 text-left font-mono text-xs leading-none select-none truncate",
          active
            ? "bevel-pressed bg-muted/90 font-bold text-foreground"
            : "bevel-raised active:bevel-pressed bg-surface text-foreground hover:bg-muted/50",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className
        )}
        {...props}
      >
        {icon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="truncate flex-1">{children}</span>
      </button>
    );
  }
);
TaskbarTask.displayName = "TaskbarTask";

export type TaskbarStatusProps = React.HTMLAttributes<HTMLDivElement>;

export const TaskbarStatus = React.forwardRef<HTMLDivElement, TaskbarStatusProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-label="System Tray"
        className={cn(
          "flex h-7 items-center gap-2 bevel-inset bg-muted/30 px-2 font-mono text-[11px] text-muted-foreground select-none flex-shrink-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TaskbarStatus.displayName = "TaskbarStatus";

export interface TaskbarClockProps extends React.HTMLAttributes<HTMLSpanElement> {
  time?: string;
}

export const TaskbarClock = React.forwardRef<HTMLSpanElement, TaskbarClockProps>(
  ({ className, time, children, ...props }, ref) => {
    const [currentTime, setCurrentTime] = React.useState(time ?? "12:00 PM");

    React.useEffect(() => {
      if (time) return;
      const update = () => {
        const d = new Date();
        setCurrentTime(
          d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        );
      };
      update();
      const interval = setInterval(update, 30000);
      return () => clearInterval(interval);
    }, [time]);

    return (
      <span
        ref={ref}
        className={cn("font-bold text-foreground font-mono tabular-nums text-[11px]", className)}
        {...props}
      >
        {children ?? (time || currentTime)}
      </span>
    );
  }
);
TaskbarClock.displayName = "TaskbarClock";
