"use client";

import * as React from "react";
import { Portal } from "./portal";
import { Backdrop, BackdropVariant } from "./backdrop";
import { lockBodyScroll, unlockBodyScroll, useEscapeKey, useFocusTrap, useOutsideClick } from "../lib/overlay-utils";
import { cn } from "../lib/utils";

export type DrawerSide = "top" | "bottom" | "left" | "right";

// --- Drawer Context ---
interface DrawerContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  side: DrawerSide;
  triggerRef: React.RefObject<HTMLElement | null>;
  titleId: string;
  descriptionId: string;
  backdropVariant: BackdropVariant;
}

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

function useDrawerContext() {
  const context = React.useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer compound components must be used within a <Drawer /> provider");
  }
  return context;
}

// --- Drawer Root ---
export interface DrawerProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: DrawerSide;
  backdropVariant?: BackdropVariant;
}

export function Drawer({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  side = "bottom",
  backdropVariant = "dimmed",
}: DrawerProps) {
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
  const titleId = `drawer-title-${uniqueId}`;
  const descriptionId = `drawer-desc-${uniqueId}`;

  return (
    <DrawerContext.Provider
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
    </DrawerContext.Provider>
  );
}

// --- Drawer Trigger ---
export interface DrawerTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const DrawerTrigger = React.forwardRef<HTMLButtonElement, DrawerTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { setOpen, triggerRef } = useDrawerContext();

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
DrawerTrigger.displayName = "DrawerTrigger";

// --- Drawer Content ---
export interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
}

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
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
    const { open, setOpen, side, titleId, descriptionId, backdropVariant } = useDrawerContext();
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

    const sideStyles: Record<DrawerSide, string> = {
      bottom: "inset-x-0 bottom-0 max-h-[85vh] border-t-2 border-[var(--border-strong)] bevel-raised",
      top: "inset-x-0 top-0 max-h-[85vh] border-b-2 border-[var(--border-strong)] bevel-raised",
      left: "inset-y-0 left-0 max-w-[85vw] sm:max-w-md border-r-2 border-[var(--border-strong)] bevel-raised",
      right: "inset-y-0 right-0 max-w-[85vw] sm:max-w-md border-l-2 border-[var(--border-strong)] bevel-raised",
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
          {side === "bottom" && (
            <div className="mx-auto mt-2 h-1.5 w-12 rounded-none bg-[var(--border-strong)] cursor-grab active:cursor-grabbing" />
          )}
          {children}
        </div>
      </Portal>
    );
  }
);
DrawerContent.displayName = "DrawerContent";

// --- Drawer Header ---
export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
}

export const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => {
    const { setOpen } = useDrawerContext();

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
            aria-label="Close drawer"
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
DrawerHeader.displayName = "DrawerHeader";

// --- Drawer Title ---
export interface DrawerTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
}

export const DrawerTitle = React.forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  ({ as: Component = "h2", className, children, ...props }, ref) => {
    const { titleId } = useDrawerContext();
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
DrawerTitle.displayName = "DrawerTitle";

// --- Drawer Description ---
export interface DrawerDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const DrawerDescription = React.forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { descriptionId } = useDrawerContext();
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
DrawerDescription.displayName = "DrawerDescription";

// --- Drawer Body ---
export interface DrawerBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("p-4 space-y-3 flex-1 overflow-y-auto", className)} {...props} />;
  }
);
DrawerBody.displayName = "DrawerBody";

// --- Drawer Footer ---
export interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerFooter = React.forwardRef<HTMLDivElement, DrawerFooterProps>(
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
DrawerFooter.displayName = "DrawerFooter";

// --- Drawer Close ---
export interface DrawerCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const DrawerClose = React.forwardRef<HTMLButtonElement, DrawerCloseProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { setOpen } = useDrawerContext();

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
DrawerClose.displayName = "DrawerClose";
