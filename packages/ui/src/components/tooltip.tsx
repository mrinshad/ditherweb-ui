"use client";

import * as React from "react";
import { Portal } from "./portal";
import {
  computeFloatingPosition,
  useEscapeKey,
  OverlaySide,
  OverlayAlign,
} from "../lib/overlay-utils";
import { cn } from "../lib/utils";

// --- Tooltip Provider ---
interface TooltipProviderContextValue {
  defaultDelay: number;
}

const TooltipProviderContext = React.createContext<TooltipProviderContextValue>({
  defaultDelay: 300,
});

export interface TooltipProviderProps {
  children: React.ReactNode;
  delayDuration?: number;
}

export function TooltipProvider({ children, delayDuration = 300 }: TooltipProviderProps) {
  return (
    <TooltipProviderContext.Provider value={{ defaultDelay: delayDuration }}>
      {children}
    </TooltipProviderContext.Provider>
  );
}

// --- Tooltip Context ---
interface TooltipContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  side: OverlaySide;
  align: OverlayAlign;
  offset: number;
  tooltipId: string;
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

function useTooltipContext() {
  const context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error("Tooltip compound components must be used within a <Tooltip /> provider");
  }
  return context;
}

// --- Tooltip Root ---
export interface TooltipProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  side?: OverlaySide;
  align?: OverlayAlign;
  offset?: number;
}

export function Tooltip({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  side = "top",
  align = "center",
  offset = 4,
}: TooltipProps) {
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
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const uniqueId = React.useId();
  const tooltipId = `tooltip-${uniqueId}`;

  // Clean timer on unmount
  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <TooltipContext.Provider
      value={{
        open,
        setOpen,
        triggerRef,
        contentRef,
        side,
        align,
        offset,
        tooltipId,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
}

// --- Tooltip Trigger ---
export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  delayDuration?: number;
}

export const TooltipTrigger = React.forwardRef<HTMLElement, TooltipTriggerProps>(
  ({ asChild = false, delayDuration, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onClick, ...props }, ref) => {
    const { open, setOpen, triggerRef, tooltipId } = useTooltipContext();
    const provider = React.useContext(TooltipProviderContext);
    const delay = delayDuration ?? provider.defaultDelay;
    const timerRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
      onMouseEnter?.(e);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setOpen(true);
      }, delay);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
      onMouseLeave?.(e);
      if (timerRef.current) clearTimeout(timerRef.current);
      setOpen(false);
    };

    const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
      onFocus?.(e);
      if (timerRef.current) clearTimeout(timerRef.current);
      setOpen(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
      onBlur?.(e);
      if (timerRef.current) clearTimeout(timerRef.current);
      setOpen(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      onClick?.(e);
      if (timerRef.current) clearTimeout(timerRef.current);
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
          handleMouseEnter(e);
        },
        onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onMouseLeave?.(e);
          handleMouseLeave(e);
        },
        onFocus: (e: React.FocusEvent<HTMLElement>) => {
          child.props.onFocus?.(e);
          handleFocus(e);
        },
        onBlur: (e: React.FocusEvent<HTMLElement>) => {
          child.props.onBlur?.(e);
          handleBlur(e);
        },
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onClick?.(e);
          handleClick(e);
        },
        "aria-describedby": open ? tooltipId : undefined,
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        aria-describedby={open ? tooltipId : undefined}
        tabIndex={0}
        className="inline-flex cursor-default"
        {...props}
      >
        {children}
      </span>
    );
  }
);
TooltipTrigger.displayName = "TooltipTrigger";

// --- Tooltip Content ---
export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  portal?: boolean;
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ children, className, portal = true, style, ...props }, forwardedRef) => {
    const { open, setOpen, triggerRef, contentRef, side, align, offset, tooltipId } = useTooltipContext();
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

    if (!open) return null;

    const element = (
      <div
        ref={handleContentRef}
        id={tooltipId}
        role="tooltip"
        className={cn(
          "absolute z-[var(--z-topmost)] px-2 py-1 text-xs font-mono select-none pointer-events-none",
          "bevel-raised bg-[var(--surface-elevated)] text-[var(--foreground)] shadow-hard-sm border border-[var(--border-strong)]",
          className
        )}
        style={{
          top: coords ? `${coords.top}px` : "-9999px",
          left: coords ? `${coords.left}px` : "-9999px",
          opacity: coords ? 1 : 0,
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
TooltipContent.displayName = "TooltipContent";
