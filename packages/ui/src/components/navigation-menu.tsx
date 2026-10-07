"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { useEscapeKey, useOutsidePointerDown } from "../lib/overlay-utils";

// ============================================================================
// Ditherweb — NavigationMenu Primitive
// Structured primary / section navigation with accessible dropdown disclosure
// ============================================================================

interface NavigationMenuContextValue {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
}

const NavigationMenuContext = React.createContext<NavigationMenuContextValue | null>(null);

export type NavigationMenuProps = React.ComponentPropsWithoutRef<"nav">;

export const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className, children, ...props }, ref) => {
    const [activeItem, setActiveItem] = React.useState<string | null>(null);

    return (
      <NavigationMenuContext.Provider value={{ activeItem, setActiveItem }}>
        <nav
          ref={ref}
          aria-label="Main"
          className={cn("relative z-10 flex max-w-max flex-1 items-center select-none", className)}
          {...props}
        >
          {children}
        </nav>
      </NavigationMenuContext.Provider>
    );
  }
);
NavigationMenu.displayName = "NavigationMenu";

export type NavigationMenuListProps = React.ComponentPropsWithoutRef<"ul">;

export const NavigationMenuList = React.forwardRef<HTMLUListElement, NavigationMenuListProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1 font-mono text-xs",
        className
      )}
      {...props}
    />
  )
);
NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItemContext = React.createContext<{ value: string }>({ value: "" });

export interface NavigationMenuItemProps extends React.ComponentPropsWithoutRef<"li"> {
  value?: string;
}

export const NavigationMenuItem = React.forwardRef<HTMLLIElement, NavigationMenuItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const generatedId = React.useId();
    const itemValue = value ?? generatedId;

    return (
      <NavigationMenuItemContext.Provider value={{ value: itemValue }}>
        <li
          ref={ref}
          data-item-value={itemValue}
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </li>
      </NavigationMenuItemContext.Provider>
    );
  }
);
NavigationMenuItem.displayName = "NavigationMenuItem";

export interface NavigationMenuTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
  value?: string;
}

export const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ className, value: explicitValue, children, onClick, onKeyDown, ...props }, ref) => {
    const context = React.useContext(NavigationMenuContext);
    const itemContext = React.useContext(NavigationMenuItemContext);
    const value = explicitValue ?? itemContext.value;
    const isOpen = context?.activeItem === value;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (context) {
        context.setActiveItem(isOpen ? null : value);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e);
      if (e.key === "ArrowDown" && !isOpen) {
        e.preventDefault();
        context?.setActiveItem(value);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        context?.setActiveItem(null);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs uppercase font-medium tracking-wide transition-colors",
          "focus-visible:outline-2 focus-visible:outline-ring",
          isOpen
            ? "bevel-inset bg-muted text-primary font-bold"
            : "bevel-raised bg-bevel-face text-foreground hover:bg-muted active:translate-y-px",
          className
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            "text-[9px] transition-transform duration-100",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
    );
  }
);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export interface NavigationMenuContentProps extends React.ComponentPropsWithoutRef<"div"> {
  value?: string;
}

export const NavigationMenuContent = React.forwardRef<HTMLDivElement, NavigationMenuContentProps>(
  ({ className, value: explicitValue, children, ...props }, forwardedRef) => {
    const context = React.useContext(NavigationMenuContext);
    const itemContext = React.useContext(NavigationMenuItemContext);
    const value = explicitValue ?? itemContext.value;
    const isOpen = context?.activeItem === value;
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    React.useImperativeHandle(forwardedRef, () => contentRef.current as HTMLDivElement);

    useEscapeKey(() => {
      context?.setActiveItem(null);
    }, isOpen);

    useOutsidePointerDown((e: MouseEvent | TouchEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        const item = contentRef.current.closest(`[data-item-value="${value}"]`);
        if (!item?.contains(e.target as Node)) {
          context?.setActiveItem(null);
        }
      }
    }, isOpen);

    if (!isOpen) return null;

    return (
      <div
        ref={contentRef}
        role="region"
        className={cn(
          "absolute top-full left-0 z-50 mt-1 min-w-[200px] p-2",
          "bevel-raised bg-surface border-2 border-border shadow-hard-md",
          "animate-in fade-in zoom-in-95 duration-100",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
NavigationMenuContent.displayName = "NavigationMenuContent";

export interface NavigationMenuLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  active?: boolean;
  asChild?: boolean;
}

export const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ className, active = false, asChild = false, children, ...props }, ref) => {
    const baseClasses = cn(
      "block px-3 py-1.5 font-mono text-xs uppercase font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ring",
      active
        ? "bg-primary text-primary-foreground font-bold"
        : "text-foreground hover:bg-muted active:bg-surface-sunken",
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >;
      return React.cloneElement(child, {
        ref: ref as React.Ref<HTMLElement>,
        className: cn(baseClasses, child.props.className),
        "aria-current": active ? "page" : undefined,
      });
    }

    return (
      <a
        ref={ref}
        aria-current={active ? "page" : undefined}
        className={baseClasses}
        {...props}
      >
        {children}
      </a>
    );
  }
);
NavigationMenuLink.displayName = "NavigationMenuLink";
