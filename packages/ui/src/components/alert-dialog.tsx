"use client";

import * as React from "react";
import { Portal } from "./portal";
import { Backdrop, BackdropVariant } from "./backdrop";
import { lockBodyScroll, unlockBodyScroll, useEscapeKey, useFocusTrap } from "../lib/overlay-utils";
import { cn } from "../lib/utils";

// --- AlertDialog Context ---
interface AlertDialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  cancelRef: React.RefObject<HTMLButtonElement | null>;
  titleId: string;
  descriptionId: string;
  backdropVariant: BackdropVariant;
}

const AlertDialogContext = React.createContext<AlertDialogContextValue | null>(null);

function useAlertDialogContext() {
  const context = React.useContext(AlertDialogContext);
  if (!context) {
    throw new Error("AlertDialog compound components must be used within an <AlertDialog /> provider");
  }
  return context;
}

// --- AlertDialog Root ---
export interface AlertDialogProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  backdropVariant?: BackdropVariant;
}

export function AlertDialog({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  backdropVariant = "dither",
}: AlertDialogProps) {
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
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);
  const uniqueId = React.useId();
  const titleId = `alert-dialog-title-${uniqueId}`;
  const descriptionId = `alert-dialog-desc-${uniqueId}`;

  return (
    <AlertDialogContext.Provider
      value={{
        open,
        setOpen,
        triggerRef,
        cancelRef,
        titleId,
        descriptionId,
        backdropVariant,
      }}
    >
      {children}
    </AlertDialogContext.Provider>
  );
}

// --- AlertDialog Trigger ---
export interface AlertDialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const AlertDialogTrigger = React.forwardRef<HTMLButtonElement, AlertDialogTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { setOpen, triggerRef } = useAlertDialogContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        setOpen(true);
      }
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
          if (typeof ref === "function") ref(node as HTMLButtonElement | null);
          else if (ref && "current" in ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node as HTMLButtonElement | null;
        },
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onClick?.(e);
          if (!e.defaultPrevented) {
            setOpen(true);
          }
        },
      });
    }

    return (
      <button
        ref={(node) => {
          if (triggerRef) {
            (triggerRef as React.MutableRefObject<HTMLElement | null>).current = node;
          }
          if (typeof ref === "function") ref(node);
          else if (ref && "current" in ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
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
AlertDialogTrigger.displayName = "AlertDialogTrigger";

// --- AlertDialog Content ---
export interface AlertDialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  closeOnEscape?: boolean;
}

export const AlertDialogContent = React.forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ children, className, closeOnEscape = true, ...props }, forwardedRef) => {
    const { open, setOpen, titleId, descriptionId, backdropVariant, cancelRef } = useAlertDialogContext();
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

    // Focus trap default to cancel button
    useFocusTrap(contentRef, open, {
      initialFocusRef: cancelRef,
      restoreFocus: true,
    });

    if (!open) return null;

    return (
      <Portal>
        <Backdrop variant={backdropVariant} />
        <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            ref={contentRef}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            tabIndex={-1}
            className={cn(
              "relative w-full max-w-md bevel-raised bg-[var(--surface)] text-[var(--foreground)] shadow-hard-xl border-2 border-[var(--destructive,var(--border-strong))] focus:outline-none flex flex-col my-auto",
              className
            )}
            {...props}
          >
            {children}
          </div>
        </div>
      </Portal>
    );
  }
);
AlertDialogContent.displayName = "AlertDialogContent";

// --- AlertDialog Header ---
export type AlertDialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const AlertDialogHeader = React.forwardRef<HTMLDivElement, AlertDialogHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "retro-window-titlebar bg-[var(--destructive)] text-[var(--destructive-foreground)] px-3 py-1.5 select-none font-bold uppercase tracking-wider text-xs",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2">⚠️ {children}</span>
      </div>
    );
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";

// --- AlertDialog Title ---
export interface AlertDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
}

export const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ as: Component = "h2", className, children, ...props }, ref) => {
    const { titleId } = useAlertDialogContext();
    return React.createElement(
      Component,
      {
        ref,
        id: titleId,
        className: cn("text-base font-bold tracking-tight text-[var(--foreground)]", className),
        ...props,
      },
      children
    );
  }
);
AlertDialogTitle.displayName = "AlertDialogTitle";

// --- AlertDialog Description ---
export type AlertDialogDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, AlertDialogDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { descriptionId } = useAlertDialogContext();
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
AlertDialogDescription.displayName = "AlertDialogDescription";

// --- AlertDialog Body ---
export type AlertDialogBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const AlertDialogBody = React.forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("p-4 space-y-2 flex-1", className)} {...props} />;
  }
);
AlertDialogBody.displayName = "AlertDialogBody";

// --- AlertDialog Footer ---
export type AlertDialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const AlertDialogFooter = React.forwardRef<HTMLDivElement, AlertDialogFooterProps>(
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
AlertDialogFooter.displayName = "AlertDialogFooter";

// --- AlertDialog Action (Confirm) ---
export interface AlertDialogActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const AlertDialogAction = React.forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  ({ asChild = false, onClick, children, className, ...props }, ref) => {
    const { setOpen } = useAlertDialogContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        setOpen(false);
      }
    };

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
      return React.cloneElement(child, {
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onClick?.(e);
          if (!e.defaultPrevented) {
            setOpen(false);
          }
        },
      });
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center font-retro text-xs font-bold uppercase tracking-wider px-4 py-1.5 bevel-raised bg-[var(--destructive)] text-[var(--destructive-foreground)] cursor-pointer active:translate-x-[1px] active:translate-y-[1px]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
AlertDialogAction.displayName = "AlertDialogAction";

// --- AlertDialog Cancel ---
export interface AlertDialogCancelProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const AlertDialogCancel = React.forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  ({ asChild = false, onClick, children, className, ...props }, ref) => {
    const { setOpen, cancelRef } = useAlertDialogContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        setOpen(false);
      }
    };

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >;
      return React.cloneElement(child, {
        ref: (node: HTMLElement | null) => {
          if (cancelRef) {
            (cancelRef as React.MutableRefObject<HTMLButtonElement | null>).current = node as HTMLButtonElement | null;
          }
          if (typeof ref === "function") ref(node as HTMLButtonElement | null);
          else if (ref && "current" in ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node as HTMLButtonElement | null;
        },
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onClick?.(e);
          if (!e.defaultPrevented) {
            setOpen(false);
          }
        },
      });
    }

    return (
      <button
        ref={(node) => {
          if (cancelRef) {
            (cancelRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }
          if (typeof ref === "function") ref(node);
          else if (ref && "current" in ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        type="button"
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center font-retro text-xs font-bold uppercase tracking-wider px-4 py-1.5 bevel-raised bg-[var(--bevel-face)] text-[var(--foreground)] cursor-pointer active:translate-x-[1px] active:translate-y-[1px]",
          className
        )}
        {...props}
      >
        {children || "Cancel"}
      </button>
    );
  }
);
AlertDialogCancel.displayName = "AlertDialogCancel";
