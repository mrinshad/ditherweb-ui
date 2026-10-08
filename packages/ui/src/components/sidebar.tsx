"use client";

import * as React from "react";
import { Portal } from "./portal";
import { Backdrop } from "./backdrop";
import {
  lockBodyScroll,
  unlockBodyScroll,
  useEscapeKey,
  useFocusTrap,
  useOutsideClick,
} from "../lib/overlay-utils";
import { cn } from "../lib/utils";

// ============================================================================
// Types & Context
// ============================================================================

export type SidebarState = "expanded" | "collapsed";

export interface SidebarContextValue {
  state: SidebarState;
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export function useSidebar(): SidebarContextValue {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a <SidebarProvider>");
  }
  return context;
}

// ============================================================================
// SidebarProvider
// ============================================================================

export interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  storageKey?: string;
  className?: string;
}

export function SidebarProvider({
  children,
  defaultOpen = true,
  open: controlledOpen,
  onOpenChange,
  storageKey = "ditherweb-sidebar-open",
  className,
}: SidebarProviderProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState<boolean>(defaultOpen);
  const [openMobile, setOpenMobile] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  // Hydration-safe localStorage restore
  React.useEffect(() => {
    if (storageKey && typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored !== null) {
          const parsed = stored === "true";
          if (!isControlled) {
            setUncontrolledOpen(parsed);
          }
        }
      } catch {
        // Storage unavailable
      }
    }
  }, [storageKey, isControlled]);

  // Responsive breakpoint observer (lg = 1024px)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 1023px)");
    const onChange = () => {
      setIsMobile(mql.matches);
      if (!mql.matches) {
        setOpenMobile(false);
      }
    };
    mql.addEventListener("change", onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const setOpen = React.useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value);
      if (storageKey && typeof window !== "undefined") {
        try {
          localStorage.setItem(storageKey, String(value));
        } catch {
          // Storage unavailable
        }
      }
    },
    [isControlled, onOpenChange, storageKey],
  );

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((prev) => !prev);
    } else {
      setOpen(!open);
    }
  }, [isMobile, open, setOpen]);

  // Keyboard shortcut Ctrl/Cmd+B
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        const target = e.target as HTMLElement | null;
        if (
          target &&
          (target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable)
        ) {
          return;
        }
        e.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state: SidebarState = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContextValue>(
    () => ({
      state,
      open,
      setOpen,
      openMobile,
      setOpenMobile,
      isMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        className={cn(
          "relative flex min-h-full w-full",
          state === "expanded" ? "sidebar-expanded" : "sidebar-collapsed",
          className,
        )}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

// ============================================================================
// Sidebar (Root)
// ============================================================================

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  side?: "left" | "right";
  collapsible?: "icon" | "offcanvas" | "none";
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      side = "left",
      collapsible = "icon",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { state, isMobile, openMobile, setOpenMobile } = useSidebar();
    const mobileDrawerRef = React.useRef<HTMLDivElement>(null);

    // Mobile overlay behaviors
    useEscapeKey(() => setOpenMobile(false), openMobile && isMobile);
    useOutsideClick([mobileDrawerRef], () => {
      if (openMobile && isMobile) setOpenMobile(false);
    }, openMobile && isMobile);
    useFocusTrap(mobileDrawerRef, openMobile && isMobile);

    React.useEffect(() => {
      if (isMobile && openMobile) {
        lockBodyScroll();
        return () => unlockBodyScroll();
      }
    }, [isMobile, openMobile]);

    // 1. Mobile Drawer Mode
    if (isMobile) {
      if (!openMobile) return null;
      return (
        <Portal>
          <Backdrop
            onClick={() => setOpenMobile(false)}
            variant="dimmed"
            className="z-50"
          />
          <div
            ref={mobileDrawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Sidebar navigation"
            className={cn(
              "fixed inset-y-0 z-50 flex flex-col w-72 max-w-[85vw] bg-surface text-foreground font-mono text-xs",
              "border-r border-border bevel-raised shadow-2xl",
              side === "left" ? "left-0" : "right-0 border-l border-r-0",
            )}
          >
            {children}
          </div>
        </Portal>
      );
    }

    // 2. Desktop Mode (Sticky / Rail)
    const isCollapsed = collapsible === "icon" && state === "collapsed";

    return (
      <aside
        ref={ref}
        data-state={state}
        data-collapsible={collapsible}
        aria-label="Sidebar navigation"
        className={cn(
          "sticky top-14 h-[calc(100vh-3.5rem)] shrink-0 flex flex-col",
          "border-r border-border bg-surface text-foreground font-mono text-xs",
          "transition-[width] duration-200 ease-in-out select-none",
          isCollapsed ? "w-14 items-center" : "w-64",
          side === "right" && "border-l border-r-0",
          className,
        )}
        {...props}
      >
        {children}
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";

// ============================================================================
// SidebarHeader
// ============================================================================

export type SidebarHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, ...props }, ref) => {
    const { state, isMobile } = useSidebar();
    const isCollapsed = !isMobile && state === "collapsed";

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2 p-3 border-b border-border shrink-0 w-full",
          isCollapsed && "p-2 items-center",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

SidebarHeader.displayName = "SidebarHeader";

// ============================================================================
// SidebarContent
// ============================================================================

export type SidebarContentProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, children, ...props }, ref) => {
    const { state, isMobile } = useSidebar();
    const isCollapsed = !isMobile && state === "collapsed";

    return (
      <div
        ref={ref}
        className={cn(
          "flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-4 w-full",
          isCollapsed && "p-1 space-y-2",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

SidebarContent.displayName = "SidebarContent";

// ============================================================================
// SidebarGroup & SidebarGroupLabel
// ============================================================================

export type SidebarGroupProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-1 w-full", className)} {...props}>
        {children}
      </div>
    );
  },
);

SidebarGroup.displayName = "SidebarGroup";

export type SidebarGroupLabelProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarGroupLabel = React.forwardRef<HTMLDivElement, SidebarGroupLabelProps>(
  ({ className, children, ...props }, ref) => {
    const { state, isMobile } = useSidebar();
    const isCollapsed = !isMobile && state === "collapsed";

    if (isCollapsed) {
      return (
        <div
          ref={ref}
          aria-hidden="true"
          className="my-1.5 h-px w-6 bg-border mx-auto shrink-0"
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground select-none flex items-center justify-between",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

SidebarGroupLabel.displayName = "SidebarGroupLabel";

// ============================================================================
// SidebarItem
// ============================================================================

export interface SidebarItemProps extends React.HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
  href?: string;
  active?: boolean;
  badge?: React.ReactNode;
  disabled?: boolean;
  trailing?: React.ReactNode;
  asChild?: boolean;
}

export const SidebarItem = React.forwardRef<HTMLElement, SidebarItemProps>(
  (
    {
      icon,
      children,
      href,
      active = false,
      badge,
      disabled = false,
      trailing,
      asChild = false,
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    const { state, isMobile, setOpenMobile } = useSidebar();
    const isCollapsed = !isMobile && state === "collapsed";

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (isMobile) {
        setOpenMobile(false);
      }
      onClick?.(e);
    };

    const commonClasses = cn(
      "group relative flex items-center gap-2.5 px-2.5 py-1.5 w-full text-xs font-mono font-medium",
      "transition-colors select-none cursor-pointer outline-none",
      "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
      active
        ? "bevel-inset bg-muted text-primary font-bold shadow-inner"
        : "text-foreground hover:bg-muted/60 active:bevel-pressed",
      disabled && "opacity-50 pointer-events-none cursor-not-allowed",
      isCollapsed && "justify-center px-1.5 py-2",
      className,
    );

    const titleText =
      typeof children === "string" ? children : undefined;

    // Render as anchor or button depending on href
    const content = (
      <>
        {icon && (
          <span
            className={cn(
              "shrink-0 flex items-center justify-center text-sm",
              active ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
              isCollapsed && "text-base",
            )}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}

        {isCollapsed ? (
          <span className="sr-only">{children}</span>
        ) : (
          <span className="truncate flex-1 text-left">{children}</span>
        )}

        {!isCollapsed && badge && (
          <span className="shrink-0 bevel-inset bg-surface-sunken px-1.5 py-0.2 text-[10px] font-bold text-muted-foreground">
            {badge}
          </span>
        )}

        {!isCollapsed && trailing && <span className="shrink-0">{trailing}</span>}
      </>
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        className?: string;
        onClick?: React.MouseEventHandler<HTMLElement>;
        title?: string;
      }>;
      return React.cloneElement(child, {
        className: cn(commonClasses, child.props.className),
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          handleClick(e);
          child.props.onClick?.(e);
        },
        title: isCollapsed ? titleText : child.props.title,
      });
    }

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onClick={handleClick}
          title={isCollapsed ? titleText : undefined}
          aria-current={active ? "page" : undefined}
          aria-disabled={disabled}
          className={commonClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        disabled={disabled}
        onClick={handleClick}
        title={isCollapsed ? titleText : undefined}
        aria-pressed={active}
        className={commonClasses}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  },
);

SidebarItem.displayName = "SidebarItem";

// ============================================================================
// SidebarSubmenu
// ============================================================================

export type SidebarSubmenuProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarSubmenu = React.forwardRef<HTMLDivElement, SidebarSubmenuProps>(
  ({ className, children, ...props }, ref) => {
    const { state, isMobile } = useSidebar();
    const isCollapsed = !isMobile && state === "collapsed";

    if (isCollapsed) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "pl-4 ml-3 border-l border-border/60 space-y-0.5 my-1",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

SidebarSubmenu.displayName = "SidebarSubmenu";

// ============================================================================
// SidebarFooter
// ============================================================================

export type SidebarFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, children, ...props }, ref) => {
    const { state, isMobile } = useSidebar();
    const isCollapsed = !isMobile && state === "collapsed";

    return (
      <div
        ref={ref}
        className={cn(
          "mt-auto border-t border-border p-3 flex flex-col gap-2 shrink-0 w-full",
          isCollapsed && "p-1.5 items-center",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

SidebarFooter.displayName = "SidebarFooter";

// ============================================================================
// SidebarRail
// ============================================================================

export interface SidebarRailProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label"?: string;
}

export const SidebarRail = React.forwardRef<HTMLButtonElement, SidebarRailProps>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar, state } = useSidebar();

    return (
      <button
        ref={ref}
        type="button"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar Rail"
        title={`Toggle rail (${state === "expanded" ? "Collapse" : "Expand"})`}
        className={cn(
          "absolute right-0 top-0 bottom-0 w-1.5 hover:w-2 hover:bg-primary/40 cursor-col-resize transition-all",
          "focus-visible:outline-none focus-visible:bg-primary",
          className,
        )}
        {...props}
      />
    );
  },
);

SidebarRail.displayName = "SidebarRail";

// ============================================================================
// SidebarTrigger
// ============================================================================

export interface SidebarTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label"?: string;
}

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { toggleSidebar, state, isMobile, openMobile } = useSidebar();

    const label = isMobile
      ? openMobile
        ? "Close navigation"
        : "Open navigation"
      : state === "expanded"
        ? "Collapse sidebar"
        : "Expand sidebar";

    return (
      <button
        ref={ref}
        type="button"
        onClick={toggleSidebar}
        aria-label={label}
        title={label}
        className={cn(
          "bevel-raised active:bevel-pressed",
          "inline-flex items-center justify-center h-7 px-2 text-xs font-mono font-bold text-foreground",
          "select-none cursor-pointer transition-transform",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
          className,
        )}
        {...props}
      >
        {children || (
          <span className="flex items-center gap-1">
            <span aria-hidden="true" className="text-sm">
              {isMobile ? "☰" : state === "expanded" ? "◀" : "▶"}
            </span>
            <span className="sr-only">{label}</span>
          </span>
        )}
      </button>
    );
  },
);

SidebarTrigger.displayName = "SidebarTrigger";
