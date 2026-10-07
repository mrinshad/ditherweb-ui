"use client";

import * as React from "react";
import { Portal } from "./portal";
import { Backdrop, BackdropVariant } from "./backdrop";
import { lockBodyScroll, unlockBodyScroll, useEscapeKey, useOutsideClick } from "../lib/overlay-utils";
import { cn } from "../lib/utils";

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Controlled open state of the overlay.
   */
  open: boolean;
  /**
   * Callback fired when open state changes (e.g. via Escape or outside click).
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Whether to lock document body scrolling while open.
   * @default true
   */
  lockScroll?: boolean;
  /**
   * Whether pressing the Escape key dismisses the overlay.
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * Whether clicking outside the overlay dismisses it.
   * @default true
   */
  closeOnOutsideClick?: boolean;
  /**
   * Whether to render through a portal.
   * @default true
   */
  portal?: boolean;
  /**
   * Custom portal container element.
   */
  portalContainer?: HTMLElement | null;
  /**
   * Whether to render a backdrop behind the overlay.
   * @default true
   */
  backdrop?: boolean;
  /**
   * Visual variant of the backdrop.
   * @default "dimmed"
   */
  backdropVariant?: BackdropVariant;
}

/**
 * Overlay primitive coordinating portal rendering, backdrop, body scroll locking,
 * focus trapping, and dismiss triggers.
 */
export const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  (
    {
      open,
      onOpenChange,
      lockScroll = true,
      closeOnEscape = true,
      closeOnOutsideClick = true,
      portal = true,
      portalContainer,
      backdrop = true,
      backdropVariant = "dimmed",
      className,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = React.useRef<HTMLDivElement | null>(null);

    // Sync forwarded ref with internal ref
    React.useImperativeHandle(forwardedRef, () => internalRef.current as HTMLDivElement);

    // Scroll locking
    React.useEffect(() => {
      if (open && lockScroll) {
        lockBodyScroll();
        return () => {
          unlockBodyScroll();
        };
      }
    }, [open, lockScroll]);

    // Escape key
    useEscapeKey(() => {
      if (closeOnEscape && onOpenChange) {
        onOpenChange(false);
      }
    }, open && closeOnEscape);

    // Outside click
    useOutsideClick(
      [internalRef],
      () => {
        if (closeOnOutsideClick && onOpenChange) {
          onOpenChange(false);
        }
      },
      open && closeOnOutsideClick
    );

    if (!open) return null;

    const content = (
      <>
        {backdrop && (
          <Backdrop
            variant={backdropVariant}
            onClick={() => {
              if (closeOnOutsideClick && onOpenChange) {
                onOpenChange(false);
              }
            }}
          />
        )}
        <div
          ref={internalRef}
          className={cn("relative z-[var(--z-modal)]", className)}
          data-state={open ? "open" : "closed"}
          {...props}
        >
          {children}
        </div>
      </>
    );

    if (portal) {
      return <Portal container={portalContainer}>{content}</Portal>;
    }

    return content;
  }
);

Overlay.displayName = "Overlay";
