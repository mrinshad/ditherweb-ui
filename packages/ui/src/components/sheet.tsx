"use client";

import * as React from "react";
import { Portal } from "./portal";
import { Backdrop, BackdropVariant } from "./backdrop";
import { lockBodyScroll, unlockBodyScroll, useEscapeKey, useFocusTrap, useOutsideClick } from "../lib/overlay-utils";
import { cn } from "../lib/utils";

export type SheetSide = "top" | "bottom" | "left" | "right";

// --- Sheet Context ---
interface SheetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  side: SheetSide;
  triggerRef: React.RefObject<HTMLElement | null>;
  titleId: string;
  descriptionId: string;
  backdropVariant: BackdropVariant;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

function useSheetContext() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet compound components must be used within a <Sheet /> provider");
  }
  return context;
}

// --- Sheet Root ---
export interface SheetProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: SheetSide;
  backdropVariant?: BackdropVariant;
}

export function Sheet({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  side = "right",
  backdropVariant = "dimmed",
}: SheetProps) {
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
  const uniqueId = React.useId();
  const titleId = `sheet-title-${uniqueId}`;
  const descriptionId = `sheet-desc-${uniqueId}`;

  return (
    <SheetContext.Provider
      value={{
        open,
        setOpen,
        side,
        triggerRef,
        titleId,
        descriptionId,
        backdropVariant,
      }}
    >
      {children}
    </SheetContext.Provider>
  );
}

// --- Sheet Trigger ---
export interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { setOpen, triggerRef } = useSheetContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        setOpen(true);
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
            setOpen(true);
          }
        },
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
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
SheetTrigger.displayName = "SheetTrigger";

// --- Sheet Content ---
export interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
}

export const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  (
    {
      children,
      className,
      closeOnOutsideClick = true,
      closeOnEscape = true,
      ...props
    },
    forwardedRef
  ) => {
    const { open, setOpen, side, titleId, descriptionId, backdropVariant } = useSheetContext();
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    React.useImperativeHandle(forwardedRef, () => contentRef.current as HTMLDivElement);

    // Scroll locking
    React.useEffect(() => {
      if (open) {
        lockBodyScroll();
        return () => unlockBodyScroll();
      }
    }, [open]);

    // Escape listener
    useEscapeKey(() => {
      if (closeOnEscape) {
        setOpen(false);
      }
    }, open && closeOnEscape);

    // Outside click listener
    useOutsideClick([contentRef], () => {
      if (closeOnOutsideClick) {
        setOpen(false);
      }
    }, open && closeOnOutsideClick);

    // Focus trap
    useFocusTrap(contentRef, open);

    if (!open) return null;

    const sideStyles: Record<SheetSide, string> = {
      right: "inset-y-0 right-0 w-full sm:max-w-md border-l-2 border-[var(--border-strong)] bevel-raised",
      left: "inset-y-0 left-0 w-full sm:max-w-md border-r-2 border-[var(--border-strong)] bevel-raised",
      top: "inset-x-0 top-0 max-h-[85vh] border-b-2 border-[var(--border-strong)] bevel-raised",
      bottom: "inset-x-0 bottom-0 max-h-[85vh] border-t-2 border-[var(--border-strong)] bevel-raised",
    };

    return (
      <Portal>
        <Backdrop
          variant={backdropVariant}
          onClick={() => {
            if (closeOnOutsideClick) {
              setOpen(false);
            }
          }}
        />
        <div
          ref={contentRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          tabIndex={-1}
          className={cn(
            "fixed z-[var(--z-modal)] bg-[var(--surface)] text-[var(--foreground)] shadow-hard-xl flex flex-col focus:outline-none",
            sideStyles[side],
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
SheetContent.displayName = "SheetContent";

// --- Sheet Header ---
export interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
}

export const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => {
    const { setOpen } = useSheetContext();

    return (
      <div
        ref={ref}
        className={cn(
          "retro-window-titlebar flex items-center justify-between px-4 py-2 select-none",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0 font-bold truncate">{children}</div>
        {showCloseButton && (
          <button
            type="button"
            aria-label="Close sheet"
            className="retro-close-button ml-2 flex-shrink-0"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        )}
      </div>
    );
  }
);
SheetHeader.displayName = "SheetHeader";

// --- Sheet Title ---
export interface SheetTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "span";
}

export const SheetTitle = React.forwardRef<HTMLHeadingElement, SheetTitleProps>(
  ({ as: Component = "h2", className, children, ...props }, ref) => {
    const { titleId } = useSheetContext();
    return (
      <Component
        ref={ref as any}
        id={titleId}
        className={cn("text-sm font-bold uppercase tracking-wider truncate", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
SheetTitle.displayName = "SheetTitle";

// --- Sheet Description ---
export interface SheetDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const SheetDescription = React.forwardRef<HTMLParagraphElement, SheetDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { descriptionId } = useSheetContext();
    return (
      <p
        ref={ref}
        id={descriptionId}
        className={cn("text-xs text-[var(--muted-foreground)] leading-relaxed", className)}
        {...props}
      />
    );
  }
);
SheetDescription.displayName = "SheetDescription";

// --- Sheet Body ---
export interface SheetBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SheetBody = React.forwardRef<HTMLDivElement, SheetBodyProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("p-4 space-y-4 flex-1 overflow-y-auto", className)} {...props} />;
  }
);
SheetBody.displayName = "SheetBody";

// --- Sheet Footer ---
export interface SheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-4 py-3 bg-[var(--surface-sunken)] border-t border-[var(--border)] flex flex-wrap items-center justify-end gap-2",
          className
        )}
        {...props}
      />
    );
  }
);
SheetFooter.displayName = "SheetFooter";

// --- Sheet Close ---
export interface SheetCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const SheetClose = React.forwardRef<HTMLButtonElement, SheetCloseProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { setOpen } = useSheetContext();

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
SheetClose.displayName = "SheetClose";
