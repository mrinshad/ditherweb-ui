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
  delayDuration,
  side = "top",
  align = "center",
  offset = 4,
}: TooltipProps) {
  const provider = React.useContext(TooltipProviderContext);
  const delay = delayDuration ?? provider.defaultDelay;

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
  ({ asChild = false, delayDuration, children, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }, ref) => {
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

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ref: (node: HTMLElement | null) => {
          (triggerRef as any).current = node;
          const childRef = (children as any).ref;
          if (typeof childRef === "function") childRef(node);
          else if (childRef) childRef.current = node;
          if (typeof ref === "function") ref(node as any);
          else if (ref) (ref as any).current = node;
        },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onFocus: handleFocus,
        onBlur: handleBlur,
        "aria-describedby": open ? tooltipId : undefined,
      });
    }

    return (
      <span
        ref={(node) => {
          (triggerRef as any).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as any).current = node;
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
    const [coords, setCoords] = React.useState<{ top: number; left: number }>({ top: 0, left: 0 });

    React.useImperativeHandle(forwardedRef, () => contentRef.current as HTMLDivElement);

    const updatePosition = React.useCallback(() => {
      if (!triggerRef.current || !contentRef.current) return;
      const tRect = triggerRef.current.getBoundingClientRect();
      const cRect = contentRef.current.getBoundingClientRect();
      const pos = computeFloatingPosition(tRect, cRect, side, align, offset);
      setCoords({ top: pos.top, left: pos.left });
    }, [triggerRef, contentRef, side, align, offset]);

    React.useLayoutEffect(() => {
      if (open) {
        updatePosition();
      }
    }, [open, updatePosition]);

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
        ref={contentRef}
        id={tooltipId}
        role="tooltip"
        className={cn(
          "absolute z-[var(--z-topmost)] px-2 py-1 text-xs font-mono select-none pointer-events-none",
          "bevel-raised bg-[var(--surface-elevated)] text-[var(--foreground)] shadow-hard-sm border border-[var(--border-strong)]",
          className
        )}
        style={{
          top: `${coords.top}px`,
          left: `${coords.left}px`,
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
