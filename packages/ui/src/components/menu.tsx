"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { useEscapeKey, useOutsidePointerDown } from "../lib/overlay-utils";

// ============================================================================
// Ditherweb — Menu Primitive
// Classic desktop application menu and dropdown with keyboard navigation and submenus
// ============================================================================

interface MenuContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
}

const MenuContext = React.createContext<MenuContextValue | null>(null);

export interface MenuProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className,
  children,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const setIsOpen = React.useCallback(
    (open: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(open);
      }
      onOpenChange?.(open);
    },
    [isControlled, onOpenChange]
  );

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen, triggerRef, contentRef }}>
      <div className={cn("relative inline-block text-left", className)}>{children}</div>
    </MenuContext.Provider>
  );
};
Menu.displayName = "Menu";

export type MenuBarProps = React.HTMLAttributes<HTMLDivElement>;

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="menubar"
        aria-orientation="horizontal"
        className={cn(
          "flex h-8 items-center bevel-raised bg-surface border border-border px-1 select-none font-mono text-xs",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MenuBar.displayName = "MenuBar";

export type MenuTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuTrigger = React.forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ className, children, onClick, onKeyDown, ...props }, forwardedRef) => {
    const context = React.useContext(MenuContext);
    if (!context) throw new Error("MenuTrigger must be used within Menu.");

    const { isOpen, setIsOpen, triggerRef, contentRef } = context;

    const setMergedRef = (node: HTMLButtonElement | null) => {
      triggerRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef && "current" in forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        setIsOpen(!isOpen);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e);
      if (e.defaultPrevented) return;

      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
          const firstItem = contentRef.current?.querySelector<HTMLElement>(
            '[role="menuitem"]:not([aria-disabled="true"])'
          );
          firstItem?.focus();
        }, 16);
      }
    };

    return (
      <button
        ref={setMergedRef}
        type="button"
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        data-state={isOpen ? "open" : "closed"}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "inline-flex h-6 items-center px-2 py-0.5 font-mono text-xs font-medium select-none",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          isOpen
            ? "bevel-pressed bg-muted text-foreground"
            : "hover:bg-muted/60 text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
MenuTrigger.displayName = "MenuTrigger";

export interface MenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "end";
}

export const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(
  ({ className, align = "start", children, onKeyDown, ...props }, forwardedRef) => {
    const context = React.useContext(MenuContext);
    if (!context) throw new Error("MenuContent must be used within Menu.");

    const { isOpen, setIsOpen, triggerRef, contentRef } = context;

    const setMergedRef = (node: HTMLDivElement | null) => {
      contentRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef && "current" in forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    React.useEffect(() => {
      if (!isOpen || !contentRef.current) return;
      const timer = setTimeout(() => {
        const first = contentRef.current?.querySelector<HTMLElement>(
          '[role="menuitem"]:not([aria-disabled="true"]), [role="menuitemcheckbox"]:not([aria-disabled="true"]), [role="menuitemradio"]:not([aria-disabled="true"])'
        );
        first?.focus();
      }, 30);
      return () => clearTimeout(timer);
    }, [isOpen]);

    useEscapeKey(() => {
      if (isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }, isOpen);

    useOutsidePointerDown((event) => {
      if (!isOpen) return;
      const target = event.target as Node | null;
      if (!target) return;
      if (
        !contentRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    }, isOpen);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (e.defaultPrevented) return;

      const items = Array.from(
        contentRef.current?.querySelectorAll<HTMLElement>(
          '[role="menuitem"]:not([aria-disabled="true"]), [role="menuitemcheckbox"]:not([aria-disabled="true"]), [role="menuitemradio"]:not([aria-disabled="true"])'
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
      <div
        ref={setMergedRef}
        role="menu"
        aria-orientation="vertical"
        onKeyDown={handleKeyDown}
        className={cn(
          "absolute z-50 mt-1 min-w-[180px] select-none font-mono text-xs rounded-none",
          "bg-surface text-foreground shadow-hard-md border-2 border-border-strong p-1",
          align === "start" ? "left-0" : "right-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MenuContent.displayName = "MenuContent";

export type MenuLabelProps = React.HTMLAttributes<HTMLDivElement>;

export const MenuLabel = React.forwardRef<HTMLDivElement, MenuLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="presentation"
        className={cn(
          "px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted/40 border-b border-border/60 mb-0.5 select-none",
          className
        )}
        {...props}
      />
    );
  }
);
MenuLabel.displayName = "MenuLabel";

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shortcut?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      className,
      shortcut,
      icon,
      disabled = false,
      selected = false,
      onSelect,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(MenuContext);

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
        aria-selected={selected || undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "group flex w-full items-center justify-between gap-2.5 px-2 py-1.5 text-left font-mono text-xs leading-none select-none rounded-none transition-colors",
          "focus-visible:outline-none",
          "hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background",
          selected && "font-bold bg-muted/70 text-foreground border-l-2 border-foreground pl-1.5",
          disabled && "opacity-40 cursor-not-allowed pointer-events-none hover:bg-transparent hover:text-foreground",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2 truncate min-w-0">
          {icon ? (
            <span className="h-3.5 w-3.5 flex-shrink-0 flex items-center justify-center" aria-hidden="true">
              {icon}
            </span>
          ) : selected ? (
            <span className="w-3 text-center font-bold text-[11px]" aria-hidden="true">
              ▌
            </span>
          ) : null}
          <span className="truncate">{children}</span>
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
MenuItem.displayName = "MenuItem";

export interface MenuCheckboxItemProps extends Omit<MenuItemProps, "role"> {
  checked?: boolean;
}

export const MenuCheckboxItem = React.forwardRef<HTMLButtonElement, MenuCheckboxItemProps>(
  ({ className, checked = false, children, ...props }, ref) => {
    return (
      <MenuItem
        ref={ref}
        role="menuitemcheckbox"
        aria-checked={checked}
        className={cn(checked && "font-bold", className)}
        {...props}
      >
        <span className="flex items-center gap-2 truncate">
          <span
            aria-hidden="true"
            className="w-4 shrink-0 text-center font-mono text-xs font-bold"
          >
            {checked ? "[✓]" : "[ ]"}
          </span>
          <span>{children}</span>
        </span>
      </MenuItem>
    );
  }
);
MenuCheckboxItem.displayName = "MenuCheckboxItem";

export interface MenuRadioItemProps extends Omit<MenuItemProps, "role"> {
  checked?: boolean;
}

export const MenuRadioItem = React.forwardRef<HTMLButtonElement, MenuRadioItemProps>(
  ({ className, checked = false, children, ...props }, ref) => {
    return (
      <MenuItem
        ref={ref}
        role="menuitemradio"
        aria-checked={checked}
        className={cn(checked && "font-bold", className)}
        {...props}
      >
        <span className="flex items-center gap-2 truncate">
          <span
            aria-hidden="true"
            className="w-4 shrink-0 text-center font-mono text-xs font-bold"
          >
            {checked ? "●" : "○"}
          </span>
          <span>{children}</span>
        </span>
      </MenuItem>
    );
  }
);
MenuRadioItem.displayName = "MenuRadioItem";

export type MenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

export const MenuSeparator = React.forwardRef<HTMLDivElement, MenuSeparatorProps>(
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
MenuSeparator.displayName = "MenuSeparator";

// SubMenu compound components
export interface SubMenuProps {
  children: React.ReactNode;
}

interface SubMenuContextValue {
  isSubOpen: boolean;
  setIsSubOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
}

const SubMenuContext = React.createContext<SubMenuContextValue | null>(null);

export const SubMenu: React.FC<SubMenuProps> = ({ children }) => {
  const [isSubOpen, setIsSubOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <SubMenuContext.Provider value={{ isSubOpen, setIsSubOpen, triggerRef, contentRef }}>
      <div
        className="relative group"
        onMouseEnter={() => setIsSubOpen(true)}
        onMouseLeave={() => setIsSubOpen(false)}
      >
        {children}
      </div>
    </SubMenuContext.Provider>
  );
};
SubMenu.displayName = "SubMenu";

export type SubMenuTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SubMenuTrigger = React.forwardRef<HTMLButtonElement, SubMenuTriggerProps>(
  ({ className, children, onKeyDown, ...props }, forwardedRef) => {
    const subContext = React.useContext(SubMenuContext);

    const setMergedRef = (node: HTMLButtonElement | null) => {
      if (subContext) subContext.triggerRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef && "current" in forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e);
      if (e.key === "ArrowRight") {
        e.preventDefault();
        subContext?.setIsSubOpen(true);
        setTimeout(() => {
          const firstItem = subContext?.contentRef.current?.querySelector<HTMLElement>(
            '[role="menuitem"]:not([aria-disabled="true"])'
          );
          firstItem?.focus();
        }, 16);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        subContext?.setIsSubOpen(false);
      }
    };

    return (
      <button
        ref={setMergedRef}
        type="button"
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={subContext?.isSubOpen}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex w-full items-center justify-between gap-2.5 px-2 py-1.5 text-left font-mono text-xs leading-none select-none rounded-none transition-colors",
          "focus-visible:outline-none hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <span className="text-[10px]" aria-hidden="true">▶</span>
      </button>
    );
  }
);
SubMenuTrigger.displayName = "SubMenuTrigger";

export type SubMenuContentProps = React.HTMLAttributes<HTMLDivElement>;

export const SubMenuContent = React.forwardRef<HTMLDivElement, SubMenuContentProps>(
  ({ className, children, onKeyDown, ...props }, forwardedRef) => {
    const subContext = React.useContext(SubMenuContext);

    const setMergedRef = (node: HTMLDivElement | null) => {
      if (subContext) subContext.contentRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef && "current" in forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    React.useEffect(() => {
      if (!subContext?.isSubOpen) return;
      const timer = setTimeout(() => {
        const first = subContext?.contentRef.current?.querySelector<HTMLElement>(
          '[role="menuitem"]:not([aria-disabled="true"])'
        );
        first?.focus();
      }, 30);
      return () => clearTimeout(timer);
    }, [subContext?.isSubOpen]);

    if (!subContext?.isSubOpen) return null;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (e.defaultPrevented) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        e.stopPropagation();
        subContext?.setIsSubOpen(false);
        subContext?.triggerRef.current?.focus();
      }
    };

    return (
      <div
        ref={setMergedRef}
        role="menu"
        aria-orientation="vertical"
        onKeyDown={handleKeyDown}
        className={cn(
          "absolute left-full top-0 z-50 ml-0.5 min-w-[160px] select-none font-mono text-xs rounded-none",
          "bg-surface text-foreground shadow-hard-md border-2 border-border-strong p-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SubMenuContent.displayName = "SubMenuContent";
