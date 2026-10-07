"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Tabs Primitive
// Accessible retro tabbed interface with keyboard navigation & folder aesthetics
// ============================================================================

export type TabsOrientation = "horizontal" | "vertical";
export type TabsActivationMode = "automatic" | "manual";

interface TabsContextValue {
  value: string;
  onValueChange: (val: string) => void;
  orientation: TabsOrientation;
  activationMode: TabsActivationMode;
  baseId: string;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound components must be used within a <Tabs> container.");
  }
  return context;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The controlled value of the active tab.
   */
  value?: string;
  /**
   * The default active tab value when uncontrolled.
   */
  defaultValue?: string;
  /**
   * Callback fired when the active tab changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * The visual and keyboard navigation orientation of the tabs.
   * @default "horizontal"
   */
  orientation?: TabsOrientation;
  /**
   * Defines whether tabs activate immediately upon keyboard focus ("automatic")
   * or require Enter/Space to activate ("manual").
   * @default "automatic"
   */
  activationMode?: TabsActivationMode;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      value: controlledValue,
      defaultValue = "",
      onValueChange,
      orientation = "horizontal",
      activationMode = "automatic",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = React.useState<string>(defaultValue);
    const currentValue = isControlled ? controlledValue! : uncontrolledValue;
    const baseId = React.useId();

    const handleValueChange = React.useCallback(
      (nextValue: string) => {
        if (!isControlled) {
          setUncontrolledValue(nextValue);
        }
        onValueChange?.(nextValue);
      },
      [isControlled, onValueChange]
    );

    return (
      <TabsContext.Provider
        value={{
          value: currentValue,
          onValueChange: handleValueChange,
          orientation,
          activationMode,
          baseId,
        }}
      >
        <div
          ref={ref}
          data-orientation={orientation}
          className={cn(
            "flex",
            orientation === "horizontal" ? "flex-col" : "flex-row gap-4",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = "Tabs";

// --- TabsList ---
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual aesthetic:
   * - "folder": Classic retro OS tabbed folder with raised tabs.
   * - "pills": Recessed tactile pill buttons.
   * - "underline": Minimal bordered line indicator.
   */
  variant?: "folder" | "pills" | "underline";
}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant = "folder", children, ...props }, ref) => {
    const { orientation } = useTabsContext();

    return (
      <div
        ref={ref}
        role="tablist"
        aria-orientation={orientation}
        className={cn(
          "flex select-none",
          orientation === "horizontal"
            ? "flex-row items-end"
            : "flex-col items-stretch",
          variant === "folder" && orientation === "horizontal" && "border-b-2 border-border gap-1 px-1",
          variant === "folder" && orientation === "vertical" && "border-r-2 border-border gap-1 py-1",
          variant === "pills" && "bevel-inset bg-surface-sunken p-1 gap-1",
          variant === "underline" && "border-b border-border gap-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsList.displayName = "TabsList";

// --- TabsTrigger ---
export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  disabled?: boolean;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value: tabValue, disabled = false, className, children, onClick, onKeyDown, ...props }, ref) => {
    const { value, onValueChange, orientation, activationMode, baseId } = useTabsContext();
    const isSelected = value === tabValue;
    const tabId = props.id ?? `${baseId}-tab-${tabValue}`;
    const panelId = `${baseId}-panel-${tabValue}`;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!disabled && !e.defaultPrevented) {
        onValueChange(tabValue);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e);
      if (disabled || e.defaultPrevented) return;

      const tablist = e.currentTarget.closest('[role="tablist"]');
      if (!tablist) return;

      const tabs = Array.from(
        tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])')
      );
      const currentIndex = tabs.indexOf(e.currentTarget);
      if (currentIndex === -1) return;

      let nextIndex = -1;

      if (orientation === "horizontal") {
        if (e.key === "ArrowRight") {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (e.key === "ArrowLeft") {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        }
      } else {
        if (e.key === "ArrowDown") {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (e.key === "ArrowUp") {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        }
      }

      if (e.key === "Home") {
        nextIndex = 0;
      } else if (e.key === "End") {
        nextIndex = tabs.length - 1;
      }

      if (nextIndex !== -1) {
        e.preventDefault();
        const nextTab = tabs[nextIndex];
        nextTab.focus();

        if (activationMode === "automatic") {
          const nextVal = nextTab.getAttribute("data-tab-value");
          if (nextVal) {
            onValueChange(nextVal);
          }
        }
      } else if (activationMode === "manual" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        onValueChange(tabValue);
      }
    };

    return (
      <button
        ref={ref}
        id={tabId}
        type="button"
        role="tab"
        aria-selected={isSelected}
        aria-controls={panelId}
        aria-disabled={disabled}
        tabIndex={isSelected ? 0 : -1}
        disabled={disabled}
        data-tab-value={tabValue}
        data-state={isSelected ? "active" : "inactive"}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "font-mono text-xs uppercase font-medium tracking-wider px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-ring disabled:opacity-40 disabled:cursor-not-allowed",
          // Classic retro folder tab:
          "border-2 border-b-0 border-border bg-surface-elevated text-muted-foreground -mb-[2px]",
          isSelected &&
            "bevel-raised border-border bg-surface text-foreground font-bold shadow-none z-10 border-b-2 border-b-surface",
          !isSelected && !disabled && "hover:bg-muted hover:text-foreground active:translate-y-px",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

// --- TabsContent ---
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value: panelValue, className, children, ...props }, ref) => {
    const { value, baseId } = useTabsContext();
    const isSelected = value === panelValue;
    const tabId = `${baseId}-tab-${panelValue}`;
    const panelId = `${baseId}-panel-${panelValue}`;

    if (!isSelected) return null;

    return (
      <div
        ref={ref}
        id={panelId}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={tabId}
        data-state={isSelected ? "active" : "inactive"}
        className={cn(
          "p-4 bevel-raised bg-surface border-2 border-border focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsContent.displayName = "TabsContent";
