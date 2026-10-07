"use client";

import * as React from "react";
import { Portal } from "./portal";
import {
  computeFloatingPosition,
  useEscapeKey,
  useOutsideClick,
  OverlaySide,
  OverlayAlign,
} from "../lib/overlay-utils";
import { cn } from "../lib/utils";

// --- HoverCard Context ---
interface HoverCardContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  side: OverlaySide;
  align: OverlayAlign;
  offset: number;
  openDelay: number;
  closeDelay: number;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const HoverCardContext = React.createContext<HoverCardContextValue | null>(null);

function useHoverCardContext() {
  const context = React.useContext(HoverCardContext);
  if (!context) {
    throw new Error("HoverCard compound components must be used within a <HoverCard /> provider");
  }
  return context;
}

// --- HoverCard Root ---
export interface HoverCardProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  openDelay?: number;
  closeDelay?: number;
  side?: OverlaySide;
  align?: OverlayAlign;
  offset?: number;
}

export function HoverCard({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  openDelay = 400,
  closeDelay = 300,
  side = "bottom",
  align = "center",
  offset = 8,
}: HoverCardProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );

  const triggerRef = React.useRef<HTMLElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const openTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const closeTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const clearTimers = React.useCallback(() => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  React.useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const handleMouseEnter = React.useCallback(() => {
    clearTimers();
    openTimerRef.current = setTimeout(() => {
      setOpen(true);
    }, openDelay);
  }, [clearTimers, openDelay, setOpen]);

  const handleMouseLeave = React.useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
    }, closeDelay);
  }, [clearTimers, closeDelay, setOpen]);

  return (
    <HoverCardContext.Provider
      value={{
        open,
        setOpen,
        triggerRef,
        contentRef,
        side,
        align,
        offset,
        openDelay,
        closeDelay,
        handleMouseEnter,
        handleMouseLeave,
      }}
    >
      {children}
    </HoverCardContext.Provider>
  );
}

// --- HoverCard Trigger ---
export interface HoverCardTriggerProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const HoverCardTrigger = React.forwardRef<HTMLElement, HoverCardTriggerProps>(
  ({ asChild = false, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onClick, ...props }, ref) => {
    const { triggerRef, handleMouseEnter, handleMouseLeave, setOpen, open } = useHoverCardContext();

    const onEnter = (e: React.MouseEvent<HTMLElement>) => {
      onMouseEnter?.(e);
      handleMouseEnter();
    };

    const onLeave = (e: React.MouseEvent<HTMLElement>) => {
      onMouseLeave?.(e);
      handleMouseLeave();
    };

    const onFoc = (e: React.FocusEvent<HTMLElement>) => {
      onFocus?.(e);
      setOpen(true);
    };

    const onBlu = (e: React.FocusEvent<HTMLElement>) => {
      onBlur?.(e);
      setOpen(false);
    };

    const onClk = (e: React.MouseEvent<HTMLElement>) => {
      onClick?.(e);
      setOpen(!open);
    };

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >;
      return React.cloneElement(child, {
        ref: (node: HTMLElement | null) => {
          if (triggerRef) {
            (triggerRef as React.MutableRefObject<HTMLElement | null>).current = node;
          }
          if (typeof ref === "function") ref(node);
          else if (ref && "current" in ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        },
        onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onMouseEnter?.(e);
          onEnter(e);
        },
        onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onMouseLeave?.(e);
          onLeave(e);
        },
        onFocus: (e: React.FocusEvent<HTMLElement>) => {
          child.props.onFocus?.(e);
          onFoc(e);
        },
        onBlur: (e: React.FocusEvent<HTMLElement>) => {
          child.props.onBlur?.(e);
          onBlu(e);
        },
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onClick?.(e);
          onClk(e);
        },
      });
    }

    return (
      <span
        ref={(node) => {
          if (triggerRef) {
            (triggerRef as React.MutableRefObject<HTMLElement | null>).current = node;
          }
          if (typeof ref === "function") ref(node);
          else if (ref && "current" in ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onFoc}
        onBlur={onBlu}
        onClick={onClk}
        tabIndex={0}
        className="inline-flex cursor-pointer"
        {...props}
      >
        {children}
      </span>
    );
  }
);
HoverCardTrigger.displayName = "HoverCardTrigger";

// --- HoverCard Content ---
export interface HoverCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  portal?: boolean;
  closeOnOutsideClick?: boolean;
}

export const HoverCardContent = React.forwardRef<HTMLDivElement, HoverCardContentProps>(
  (
    {
      children,
      className,
      portal = true,
      closeOnOutsideClick = true,
      onMouseEnter,
      onMouseLeave,
      style,
      ...props
    },
    forwardedRef
  ) => {
    const {
      open,
      setOpen,
      triggerRef,
      contentRef,
      side,
      align,
      offset,
      handleMouseEnter,
      handleMouseLeave,
    } = useHoverCardContext();

    const [coords, setCoords] = React.useState<{ top: number; left: number } | null>(null);

    const updatePosition = React.useCallback(
      (node?: HTMLElement | null) => {
        const trigger = triggerRef.current;
        const content = node ?? contentRef.current;
        if (!trigger || !content) return;
        const tRect = trigger.getBoundingClientRect();
        const cRect = content.getBoundingClientRect();
        const pos = computeFloatingPosition(tRect, cRect, side, align, offset);
        setCoords({ top: pos.top, left: pos.left });
      },
      [triggerRef, contentRef, side, align, offset]
    );

    const handleContentRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef && "current" in forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
        if (node) {
          updatePosition(node);
        }
      },
      [forwardedRef, contentRef, updatePosition]
    );

    React.useLayoutEffect(() => {
      if (open && contentRef.current) {
        updatePosition(contentRef.current);
      }
    }, [open, updatePosition, contentRef]);

    React.useEffect(() => {
      if (!open) return;
      const handleScrollOrResize = () => updatePosition();
      window.addEventListener("scroll", handleScrollOrResize, true);
      window.addEventListener("resize", handleScrollOrResize);
      return () => {
        window.removeEventListener("scroll", handleScrollOrResize, true);
        window.removeEventListener("resize", handleScrollOrResize);
      };
    }, [open, updatePosition]);

    // Escape listener
    useEscapeKey(() => {
      setOpen(false);
    }, open);

    // Outside click listener
    useOutsideClick([triggerRef, contentRef], () => {
      if (closeOnOutsideClick) {
        setOpen(false);
      }
    }, open && closeOnOutsideClick);

    if (!open) return null;

    const element = (
      <div
        ref={handleContentRef}
        role="region"
        tabIndex={-1}
        onMouseEnter={(e) => {
          onMouseEnter?.(e);
          handleMouseEnter();
        }}
        onMouseLeave={(e) => {
          onMouseLeave?.(e);
          handleMouseLeave();
        }}
        className={cn(
          "absolute z-[var(--z-popover)] w-80 bevel-raised bg-[var(--surface)] text-[var(--foreground)] p-4 shadow-hard-lg border-2 border-[var(--border)] focus:outline-none",
          className
        )}
        style={{
          top: coords ? `${coords.top}px` : "-9999px",
          left: coords ? `${coords.left}px` : "-9999px",
          opacity: coords ? 1 : 0,
          pointerEvents: coords ? "auto" : "none",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );

    if (portal) {
      return <Portal>{element}</Portal>;
    }

    return element;
  }
);
HoverCardContent.displayName = "HoverCardContent";
