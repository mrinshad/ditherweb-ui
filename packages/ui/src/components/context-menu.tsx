"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { useEscapeKey, useOutsidePointerDown } from "../lib/overlay-utils";
import { Portal } from "./portal";

// ============================================================================
// Ditherweb — ContextMenu Primitive
// Classic right-click and keyboard-accessible context menu with collision handling
// ============================================================================

interface ContextMenuContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  position: { x: number; y: number };
  setPosition: (pos: { x: number; y: number }) => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ContextMenuContext = React.createContext<ContextMenuContextValue | null>(null);

export interface ContextMenuProps {
  children: React.ReactNode;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const triggerRef = React.useRef<HTMLElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <ContextMenuContext.Provider
      value={{ isOpen, setIsOpen, position, setPosition, triggerRef, contentRef }}
    >
      {children}
    </ContextMenuContext.Provider>
  );
};
ContextMenu.displayName = "ContextMenu";

export interface ContextMenuTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export const ContextMenuTrigger = React.forwardRef<HTMLDivElement, ContextMenuTriggerProps>(
  ({ className, disabled = false, onContextMenu, onKeyDown, children, ...props }, forwardedRef) => {
    const context = React.useContext(ContextMenuContext);
    if (!context) throw new Error("ContextMenuTrigger must be used within ContextMenu.");

    const { setIsOpen, setPosition, triggerRef } = context;
    const longPressTimerRef = React.useRef<NodeJS.Timeout | null>(null);

    const setMergedRef = (node: HTMLDivElement | null) => {
      triggerRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef && "current" in forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
      onContextMenu?.(e);
      if (disabled) return;
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (disabled) return;

      // Keyboard context menu shortcut (Shift+F10 or ContextMenu key)
      if ((e.shiftKey && e.key === "F10") || e.key === "ContextMenu") {
        e.preventDefault();
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({ x: rect.left + 24, y: rect.top + 24 });
        setIsOpen(true);
      }
    };

    // Touch support (long-press 500ms)
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      if (disabled) return;
      const touch = e.touches[0];
      if (!touch) return;
      const x = touch.clientX;
      const y = touch.clientY;
      longPressTimerRef.current = setTimeout(() => {
        setPosition({ x, y });
        setIsOpen(true);
      }, 500);
    };

    const handleTouchEnd = () => {
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = null;
      }
    };

    return (
      <div
        ref={setMergedRef}
        onContextMenu={handleContextMenu}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchEnd}
        tabIndex={0}
        className={cn("focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ContextMenuTrigger.displayName = "ContextMenuTrigger";

export type ContextMenuContentProps = React.HTMLAttributes<HTMLDivElement>;

export const ContextMenuContent = React.forwardRef<HTMLDivElement, ContextMenuContentProps>(
  ({ className, children, onKeyDown, ...props }, forwardedRef) => {
    const context = React.useContext(ContextMenuContext);
    if (!context) throw new Error("ContextMenuContent must be used within ContextMenu.");

    const { isOpen, setIsOpen, position, contentRef, triggerRef } = context;
    const [adjustedPos, setAdjustedPos] = React.useState({ top: 0, left: 0 });

    const setMergedRef = (node: HTMLDivElement | null) => {
      contentRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef && "current" in forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
      if (node) {
        setTimeout(() => {
          const first = node.querySelector<HTMLElement>(
            '[role="menuitem"]:not([aria-disabled="true"])'
          );
          first?.focus();
        }, 16);
      }
    };

    // Viewport collision clamping
    React.useLayoutEffect(() => {
      if (!isOpen || !contentRef.current || typeof window === "undefined") return;

      const rect = contentRef.current.getBoundingClientRect();
      const padding = 8;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let left = position.x;
      let top = position.y;

      // Prevent horizontal overflow
      if (left + rect.width > viewportWidth - padding) {
        left = Math.max(padding, viewportWidth - rect.width - padding);
      }
      // Prevent vertical overflow
      if (top + rect.height > viewportHeight - padding) {
        top = Math.max(padding, viewportHeight - rect.height - padding);
      }

      setAdjustedPos({
        top: Math.round(top + window.scrollY),
        left: Math.round(left + window.scrollX),
      });
    }, [isOpen, position, contentRef]);

    useEscapeKey(() => {
      if (isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }, isOpen);

    useOutsidePointerDown((e) => {
      if (!isOpen) return;
      const target = e.target as Node | null;
      if (!target) return;
      if (!contentRef.current?.contains(target)) {
        setIsOpen(false);
      }
    }, isOpen);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (e.defaultPrevented) return;

      const items = Array.from(
        contentRef.current?.querySelectorAll<HTMLElement>(
          '[role="menuitem"]:not([aria-disabled="true"])'
        ) || []
      );
      const currentIndex = items.indexOf(document.activeElement as HTMLElement);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        items[next]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        items[prev]?.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (!isOpen) return null;

    return (
      <Portal>
        <div
          ref={setMergedRef}
          role="menu"
          aria-orientation="vertical"
          onKeyDown={handleKeyDown}
          style={{
            position: "absolute",
            top: `${adjustedPos.top}px`,
            left: `${adjustedPos.left}px`,
            zIndex: 9999,
          }}
          className={cn(
            "min-w-[180px] select-none font-mono text-xs rounded-none",
            "bg-surface text-foreground shadow-hard-md border-2 border-border-strong p-1",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </Portal>
    );
  }
);
ContextMenuContent.displayName = "ContextMenuContent";

export interface ContextMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shortcut?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
}

export const ContextMenuItem = React.forwardRef<HTMLButtonElement, ContextMenuItemProps>(
  ({ className, shortcut, icon, disabled = false, onSelect, onClick, children, ...props }, ref) => {
    const context = React.useContext(ContextMenuContext);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
      onSelect?.();
      context?.setIsOpen(false);
      context?.triggerRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        disabled={disabled}
        aria-disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "group flex w-full items-center justify-between gap-2.5 px-2 py-1.5 text-left font-mono text-xs leading-none select-none rounded-none transition-colors",
          "focus-visible:outline-none hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background",
          "disabled:opacity-40 disabled:pointer-events-none disabled:hover:bg-transparent disabled:hover:text-foreground",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2 truncate">
          {icon && <span className="h-3.5 w-3.5 flex-shrink-0 flex items-center justify-center" aria-hidden="true">{icon}</span>}
          <span>{children}</span>
        </span>
        {shortcut && (
          <span className="text-[10px] text-muted-foreground group-hover:text-background group-focus:text-background tracking-wider font-mono uppercase ml-auto pl-2">
            {shortcut}
          </span>
        )}
      </button>
    );
  }
);
ContextMenuItem.displayName = "ContextMenuItem";

export type ContextMenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

export const ContextMenuSeparator = React.forwardRef<HTMLDivElement, ContextMenuSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        className={cn("my-1 h-[1px] border-b border-border bg-border/60", className)}
        {...props}
      />
    );
  }
);
ContextMenuSeparator.displayName = "ContextMenuSeparator";

export type ContextMenuLabelProps = React.HTMLAttributes<HTMLDivElement>;

export const ContextMenuLabel = React.forwardRef<HTMLDivElement, ContextMenuLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="presentation"
        className={cn(
          "px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted/40 border-b border-border/60 mb-0.5 select-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ContextMenuLabel.displayName = "ContextMenuLabel";
