"use client";

import { forwardRef } from "react";
import { cn } from "@ditherweb/ui";

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("ditherweb-theme", isDark ? "dark" : "light");
  } catch {
    // localStorage unavailable
  }
}

export type ThemeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle color theme"
        className={cn(
          "bevel-raised active:bevel-pressed",
          "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium text-foreground",
          "transition-transform select-none cursor-pointer",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
          className,
        )}
        {...props}
      >
        <span className="inline dark:hidden" aria-hidden="true">☀</span>
        <span className="hidden dark:inline" aria-hidden="true">☾</span>
        <span className="inline dark:hidden">Dark</span>
        <span className="hidden dark:inline">Light</span>
      </button>
    );
  },
);

ThemeToggle.displayName = "ThemeToggle";
