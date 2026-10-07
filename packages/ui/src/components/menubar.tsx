"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { useEscapeKey, useOutsidePointerDown } from "../lib/overlay-utils";

// ============================================================================
// Ditherweb — Menubar Primitive
// Classic application desktop horizontal menu (File, Edit, View, Help)
// ============================================================================

interface MenubarContextValue {
  activeMenu: string | null;
  setActiveMenu: (id: string | null) => void;
}

const MenubarContext = React.createContext<MenubarContextValue | null>(null);

export type MenubarProps = React.HTMLAttributes<HTMLDivElement>;

export const Menubar = React.forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, children, ...props }, ref) => {
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

    return (
      <MenubarContext.Provider value={{ activeMenu, setActiveMenu }}>
        <div
          ref={ref}
          role="menubar"
          aria-orientation="horizontal"
          className={cn(
            "flex h-8 items-center bevel-raised bg-bevel-face border border-border px-1 select-none",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </MenubarContext.Provider>
    );
  }
);
Menubar.displayName = "Menubar";

// --- MenubarMenu ---
export interface MenubarMenuProps {
  value?: string;
  children: React.ReactNode;
}

interface MenubarMenuContextValue {
  value: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
}

const MenubarMenuContext = React.createContext<MenubarMenuContextValue | null>(null);

export const MenubarMenu: React.FC<MenubarMenuProps> = ({ value, children }) => {
  const generatedId = React.useId();
  const menuValue = value ?? generatedId;
  const menubarContext = React.useContext(MenubarContext);
  const isOpen = menubarContext?.activeMenu === menuValue;
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);

  const setIsOpen = (open: boolean) => {
    if (menubarContext) {
      menubarContext.setActiveMenu(open ? menuValue : null);
    }
  };

  return (
    <MenubarMenuContext.Provider value={{ value: menuValue, isOpen, setIsOpen, triggerRef }}>
      <div className="relative inline-block">{children}</div>
    </MenubarMenuContext.Provider>
  );
};
MenubarMenu.displayName = "MenubarMenu";

// --- MenubarTrigger ---
export type MenubarTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MenubarTrigger = React.forwardRef<HTMLButtonElement, MenubarTriggerProps>(
  ({ className, children, onClick, onMouseEnter, onKeyDown, ...props }, forwardedRef) => {
    const menuContext = React.useContext(MenubarMenuContext);
    const menubarContext = React.useContext(MenubarContext);
    if (!menuContext || !menubarContext) {
      throw new Error("MenubarTrigger must be used within MenubarMenu and Menubar.");
    }

    const { isOpen, setIsOpen, value, triggerRef } = menuContext;

    const setMergedRef = (node: HTMLButtonElement | null) => {
      triggerRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef && "current" in forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      setIsOpen(!isOpen);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      onMouseEnter?.(e);
      // If another menu is already open, hovering switches active menu immediately
      if (menubarContext.activeMenu && menubarContext.activeMenu !== value) {
        menubarContext.setActiveMenu(value);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e);
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const triggers = Array.from(
          e.currentTarget.closest('[role="menubar"]')?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]') || []
        );
        const idx = triggers.indexOf(e.currentTarget);
        if (idx !== -1 && idx < triggers.length - 1) {
          triggers[idx + 1].focus();
          if (isOpen) menubarContext.setActiveMenu(triggers[idx + 1].getAttribute("data-menu-value"));
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const triggers = Array.from(
          e.currentTarget.closest('[role="menubar"]')?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]') || []
        );
        const idx = triggers.indexOf(e.currentTarget);
        if (idx > 0) {
          triggers[idx - 1].focus();
          if (isOpen) menubarContext.setActiveMenu(triggers[idx - 1].getAttribute("data-menu-value"));
        }
      }
    };

    return (
      <button
        ref={setMergedRef}
        type="button"
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        data-menu-value={value}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onKeyDown={handleKeyDown}
        className={cn(
          "px-2.5 py-1 font-mono text-xs font-medium tracking-wide uppercase transition-colors select-none",
          "focus-visible:outline-2 focus-visible:outline-ring",
          isOpen
            ? "bevel-inset bg-muted text-primary font-bold"
            : "text-foreground hover:bg-muted active:translate-y-px",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
MenubarTrigger.displayName = "MenubarTrigger";

// --- MenubarContent ---
export type MenubarContentProps = React.HTMLAttributes<HTMLDivElement>;

export const MenubarContent = React.forwardRef<HTMLDivElement, MenubarContentProps>(
  ({ className, children, onKeyDown, ...props }, ref) => {
    const menuContext = React.useContext(MenubarMenuContext);
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    const isOpen = menuContext?.isOpen ?? false;

    useEscapeKey(() => {
      menuContext?.setIsOpen(false);
      menuContext?.triggerRef.current?.focus();
    }, isOpen);

    useOutsidePointerDown((e: MouseEvent | TouchEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node) &&
        !menuContext?.triggerRef.current?.contains(e.target as Node)
      ) {
        menuContext?.setIsOpen(false);
      }
    }, isOpen);

    React.useEffect(() => {
      if (isOpen && contentRef.current) {
        const firstItem = contentRef.current.querySelector<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])');
        firstItem?.focus();
      }
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (!contentRef.current) return;

      const items = Array.from(
        contentRef.current.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])')
      );
      const activeElement = document.activeElement as HTMLElement;
      const currentIndex = items.indexOf(activeElement);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        items[prevIndex]?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        items[0]?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        items[items.length - 1]?.focus();
      } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        menuContext?.triggerRef.current?.focus();
        menuContext?.triggerRef.current?.dispatchEvent(
          new KeyboardEvent("keydown", { key: e.key, bubbles: true })
        );
      }
    };

    if (!isOpen) return null;

    return (
      <div
        ref={(node) => {
          contentRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref && "current" in ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="menu"
        aria-orientation="vertical"
        onKeyDown={handleKeyDown}
        className={cn(
          "absolute top-full left-0 z-50 min-w-[180px] p-1 mt-0.5",
          "bevel-raised bg-surface border-2 border-border shadow-hard-md",
          "animate-in fade-in zoom-in-95 duration-75",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MenubarContent.displayName = "MenubarContent";

// --- MenubarItem ---
export interface MenubarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export const MenubarItem = React.forwardRef<HTMLDivElement, MenubarItemProps>(
  ({ className, disabled = false, children, onClick, onKeyDown, ...props }, ref) => {
    const menuContext = React.useContext(MenubarMenuContext);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      onClick?.(e);
      if (!e.defaultPrevented) {
        menuContext?.setIsOpen(false);
        menuContext?.triggerRef.current?.focus();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (disabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      }
    };

    return (
      <div
        ref={ref}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex items-center px-2 py-1 font-mono text-xs font-medium cursor-pointer transition-colors select-none",
          "focus-visible:outline-none focus:bg-primary focus:text-primary-foreground focus:font-bold",
          disabled && "opacity-40 cursor-not-allowed pointer-events-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MenubarItem.displayName = "MenubarItem";

// --- MenubarSeparator ---
export type MenubarSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

export const MenubarSeparator = React.forwardRef<HTMLDivElement, MenubarSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={cn("my-1 h-[2px] border-b border-border bg-border/40", className)}
      {...props}
    />
  )
);
MenubarSeparator.displayName = "MenubarSeparator";

// --- MenubarShortcut ---
export type MenubarShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

export const MenubarShortcut: React.FC<MenubarShortcutProps> = ({ className, ...props }) => (
  <span
    className={cn(
      "ml-auto pl-4 font-mono text-[10px] uppercase text-muted-foreground tracking-widest",
      className
    )}
    {...props}
  />
);
MenubarShortcut.displayName = "MenubarShortcut";

// --- MenubarCheckboxItem ---
export interface MenubarCheckboxItemProps extends MenubarItemProps {
  checked?: boolean;
}

export const MenubarCheckboxItem = React.forwardRef<HTMLDivElement, MenubarCheckboxItemProps>(
  ({ className, checked = false, children, ...props }, ref) => (
    <MenubarItem
      ref={ref}
      role="menuitemcheckbox"
      aria-checked={checked}
      className={cn("gap-2", className)}
      {...props}
    >
      <span aria-hidden="true" className="w-3 text-center font-bold">
        {checked ? "✓" : ""}
      </span>
      <span>{children}</span>
    </MenubarItem>
  )
);
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

// --- MenubarRadioItem ---
export interface MenubarRadioItemProps extends MenubarItemProps {
  checked?: boolean;
}

export const MenubarRadioItem = React.forwardRef<HTMLDivElement, MenubarRadioItemProps>(
  ({ className, checked = false, children, ...props }, ref) => (
    <MenubarItem
      ref={ref}
      role="menuitemradio"
      aria-checked={checked}
      className={cn("gap-2", className)}
      {...props}
    >
      <span aria-hidden="true" className="w-3 text-center font-bold">
        {checked ? "●" : ""}
      </span>
      <span>{children}</span>
    </MenubarItem>
  )
);
MenubarRadioItem.displayName = "MenubarRadioItem";

