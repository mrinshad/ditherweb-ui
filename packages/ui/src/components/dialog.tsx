"use client";

import * as React from "react";
import { Portal } from "./portal";
import { Backdrop, BackdropVariant } from "./backdrop";
import { lockBodyScroll, unlockBodyScroll, useEscapeKey, useFocusTrap, useOutsideClick } from "../lib/overlay-utils";
import { cn } from "../lib/utils";

// --- Dialog Context ---
interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  titleId: string;
  descriptionId: string;
  backdropVariant: BackdropVariant;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog compound components must be used within a <Dialog /> provider");
  }
  return context;
}

// --- Dialog Root ---
export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  backdropVariant?: BackdropVariant;
}

export function Dialog({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  backdropVariant = "dimmed",
}: DialogProps) {
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
  const titleId = `dialog-title-${uniqueId}`;
  const descriptionId = `dialog-desc-${uniqueId}`;

  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
        triggerRef,
        titleId,
        descriptionId,
        backdropVariant,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

// --- Dialog Trigger ---
export interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { setOpen, triggerRef } = useDialogContext();

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
DialogTrigger.displayName = "DialogTrigger";

// --- Dialog Content ---
export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  (
    {
      children,
      className,
      closeOnOutsideClick = true,
      closeOnEscape = true,
      initialFocusRef,
      ...props
    },
    forwardedRef
  ) => {
    const { open, setOpen, titleId, descriptionId, backdropVariant } = useDialogContext();
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
    useFocusTrap(contentRef, open, {
      initialFocusRef,
      restoreFocus: true,
    });

    if (!open) return null;

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
        <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            ref={contentRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            tabIndex={-1}
            className={cn(
              "relative w-full max-w-lg bevel-raised bg-[var(--surface)] text-[var(--foreground)] shadow-hard-lg border-2 border-[var(--border)] focus:outline-none flex flex-col my-auto",
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
DialogContent.displayName = "DialogContent";

// --- Dialog Header (Classic Window Titlebar) ---
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
}

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => {
    const { setOpen } = useDialogContext();

    return (
      <div
        ref={ref}
        className={cn(
          "retro-window-titlebar flex items-center justify-between px-3 py-1.5 select-none",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0 font-bold truncate">{children}</div>
        {showCloseButton && (
          <button
            type="button"
            aria-label="Close dialog"
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
DialogHeader.displayName = "DialogHeader";

// --- Dialog Title ---
export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
}

export const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ as: Component = "h2", className, children, ...props }, ref) => {
    const { titleId } = useDialogContext();
    return React.createElement(
      Component,
      {
        ref,
        id: titleId,
        className: cn("text-sm font-bold tracking-wider uppercase truncate", className),
        ...props,
      },
      children
    );
  }
);
DialogTitle.displayName = "DialogTitle";

// --- Dialog Description ---
export type DialogDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const DialogDescription = React.forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { descriptionId } = useDialogContext();
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
DialogDescription.displayName = "DialogDescription";

// --- Dialog Body ---
export type DialogBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("p-4 space-y-3 flex-1 overflow-y-auto", className)} {...props} />;
  }
);
DialogBody.displayName = "DialogBody";

// --- Dialog Footer ---
export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
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
DialogFooter.displayName = "DialogFooter";

// --- Dialog Close ---
export interface DialogCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { setOpen } = useDialogContext();

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
      <button ref={ref} type="button" onClick={handleClick} {...props}>
        {children}
      </button>
    );
  }
);
DialogClose.displayName = "DialogClose";
