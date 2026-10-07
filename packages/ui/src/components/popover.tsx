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

// --- Popover Context ---
interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  side: OverlaySide;
  align: OverlayAlign;
  offset: number;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

function usePopoverContext() {
  const context = React.useContext(PopoverContext);
  if (!context) {
    throw new Error("Popover compound components must be used within a <Popover /> provider");
  }
  return context;
}

// --- Popover Root ---
export interface PopoverProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: OverlaySide;
  align?: OverlayAlign;
  offset?: number;
}

export function Popover({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  side = "bottom",
  align = "center",
  offset = 6,
}: PopoverProps) {
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

  return (
    <PopoverContext.Provider
      value={{
        open,
        setOpen,
        triggerRef,
        contentRef,
        side,
        align,
        offset,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
}

// --- Popover Trigger ---
export interface PopoverTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { open, setOpen, triggerRef } = usePopoverContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        setOpen(!open);
      }
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
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          (children as any).props.onClick?.(e);
          if (!e.defaultPrevented) {
            setOpen(!open);
          }
        },
        "aria-haspopup": "dialog",
        "aria-expanded": open,
      });
    }

    return (
      <button
        ref={(node) => {
          (triggerRef as any).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as any).current = node;
        }}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
PopoverTrigger.displayName = "PopoverTrigger";

// --- Popover Content ---
export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  portal?: boolean;
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    {
      children,
      className,
      closeOnOutsideClick = true,
      closeOnEscape = true,
      portal = true,
      style,
      ...props
    },
    forwardedRef
  ) => {
    const { open, setOpen, triggerRef, contentRef, side, align, offset } = usePopoverContext();
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
      if (closeOnEscape) {
        setOpen(false);
      }
    }, open && closeOnEscape);

    // Outside click listener
    useOutsideClick([triggerRef, contentRef], () => {
      if (closeOnOutsideClick) {
        setOpen(false);
      }
    }, open && closeOnOutsideClick);

    if (!open) return null;

    const element = (
      <div
        ref={contentRef}
        role="dialog"
        tabIndex={-1}
        className={cn(
          "absolute z-[var(--z-popover)] w-72 bevel-raised bg-[var(--surface-elevated)] text-[var(--foreground)] p-3 shadow-hard-md border-2 border-[var(--border)] focus:outline-none",
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
PopoverContent.displayName = "PopoverContent";

// --- Popover Close ---
export interface PopoverCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const PopoverClose = React.forwardRef<HTMLButtonElement, PopoverCloseProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { setOpen } = usePopoverContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        setOpen(false);
      }
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          (children as any).props.onClick?.(e);
          if (!e.defaultPrevented) {
            setOpen(false);
          }
        },
      });
    }

    return (
      <button ref={ref} type="button" onClick={handleClick} {...props}>
        {children}
      </button>
    );
  }
);
PopoverClose.displayName = "PopoverClose";
