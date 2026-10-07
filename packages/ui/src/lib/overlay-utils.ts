"use client";

import { useEffect, useRef } from "react";

// ============================================================================
// Ditherweb — Overlay Utilities & Hooks
// ============================================================================

/**
 * Global scroll-lock reference counter to handle nested or overlapping overlays.
 */
let scrollLockCount = 0;
let savedBodyOverflow = "";
let savedBodyPaddingRight = "";

export function lockBodyScroll() {
  if (typeof document === "undefined") return;
  if (scrollLockCount === 0) {
    savedBodyOverflow = document.body.style.overflow;
    savedBodyPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }
  scrollLockCount++;
}

export function unlockBodyScroll() {
  if (typeof document === "undefined") return;
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) {
    document.body.style.overflow = savedBodyOverflow;
    document.body.style.paddingRight = savedBodyPaddingRight;
  }
}

/**
 * Returns or creates the default DOM portal root (#ditherweb-portal-root).
 */
export function getOrCreatePortalRoot(customContainer?: HTMLElement | null): HTMLElement | null {
  if (typeof document === "undefined") return null;
  if (customContainer) return customContainer;

  const ROOT_ID = "ditherweb-portal-root";
  let root = document.getElementById(ROOT_ID);
  if (!root) {
    root = document.createElement("div");
    root.id = ROOT_ID;
    document.body.appendChild(root);
  }
  return root;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Traps Tab focus inside the active container element and restores previous focus on unmount.
 */
export function useFocusTrap(
  containerRef: React.RefObject<HTMLElement | null>,
  isActive: boolean,
  options: {
    initialFocusRef?: React.RefObject<HTMLElement | null>;
    restoreFocus?: boolean;
  } = {}
) {
  const { initialFocusRef, restoreFocus = true } = options;
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || typeof document === "undefined") return;

    if (restoreFocus) {
      previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    }

    const container = containerRef.current;
    if (!container) return;

    // Set initial focus
    const timer = setTimeout(() => {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus();
      } else {
        const focusables = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusables.length > 0) {
          focusables[0].focus();
        } else {
          container.focus();
        }
      }
    }, 16);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const currentContainer = containerRef.current;
      if (!currentContainer) return;

      const focusables = Array.from(
        currentContainer.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement || document.activeElement === currentContainer) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      if (restoreFocus && previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === "function") {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isActive, containerRef, initialFocusRef, restoreFocus]);
}

/**
 * Invokes a callback when an Escape key press occurs.
 */
export function useEscapeKey(onEscape: (() => void) | undefined, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !onEscape || typeof document === "undefined") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onEscape();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive, onEscape]);
}

/**
 * Invokes a callback when a pointer click occurs outside the specified element refs.
 */
export function useOutsideClick(
  refs: Array<React.RefObject<HTMLElement | null>>,
  onOutsideClick: (() => void) | undefined,
  isActive: boolean
) {
  useEffect(() => {
    if (!isActive || !onOutsideClick || typeof document === "undefined") return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const isInsideAnyRef = refs.some((ref) => {
        return ref.current && ref.current.contains(target);
      });

      if (!isInsideAnyRef) {
        onOutsideClick();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isActive, onOutsideClick, refs]);
}

/**
 * Invokes a callback on document pointerdown events when active.
 */
export function useOutsidePointerDown(
  callback: (event: MouseEvent | TouchEvent) => void,
  isActive: boolean = true
) {
  useEffect(() => {
    if (!isActive || typeof document === "undefined") return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      callback(event);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [callback, isActive]);
}

export type OverlaySide = "top" | "right" | "bottom" | "left";
export type OverlayAlign = "start" | "center" | "end";

export interface FloatingPositionResult {
  top: number;
  left: number;
  actualSide: OverlaySide;
}

/**
 * Computes viewport-aware floating positioning for popovers, tooltips, and hover cards.
 */
export function computeFloatingPosition(
  triggerRect: DOMRect,
  overlayRect: DOMRect,
  side: OverlaySide = "bottom",
  align: OverlayAlign = "center",
  offset: number = 4,
  collisionPadding: number = 8
): FloatingPositionResult {
  if (typeof window === "undefined") {
    return { top: 0, left: 0, actualSide: side };
  }

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let calculatedSide = side;
  let top = 0;
  let left = 0;

  // Collision detection & side flip
  if (side === "bottom" && triggerRect.bottom + offset + overlayRect.height > viewportHeight - collisionPadding) {
    if (triggerRect.top - offset - overlayRect.height >= collisionPadding) {
      calculatedSide = "top";
    }
  } else if (side === "top" && triggerRect.top - offset - overlayRect.height < collisionPadding) {
    if (triggerRect.bottom + offset + overlayRect.height <= viewportHeight - collisionPadding) {
      calculatedSide = "bottom";
    }
  } else if (side === "right" && triggerRect.right + offset + overlayRect.width > viewportWidth - collisionPadding) {
    if (triggerRect.left - offset - overlayRect.width >= collisionPadding) {
      calculatedSide = "left";
    }
  } else if (side === "left" && triggerRect.left - offset - overlayRect.width < collisionPadding) {
    if (triggerRect.right + offset + overlayRect.width <= viewportWidth - collisionPadding) {
      calculatedSide = "right";
    }
  }

  // Primary side positioning
  if (calculatedSide === "bottom") {
    top = triggerRect.bottom + offset;
  } else if (calculatedSide === "top") {
    top = triggerRect.top - offset - overlayRect.height;
  } else if (calculatedSide === "right") {
    left = triggerRect.right + offset;
  } else if (calculatedSide === "left") {
    left = triggerRect.left - offset - overlayRect.width;
  }

  // Cross-axis alignment
  if (calculatedSide === "top" || calculatedSide === "bottom") {
    if (align === "start") {
      left = triggerRect.left;
    } else if (align === "end") {
      left = triggerRect.right - overlayRect.width;
    } else {
      left = triggerRect.left + (triggerRect.width - overlayRect.width) / 2;
    }
  } else {
    if (align === "start") {
      top = triggerRect.top;
    } else if (align === "end") {
      top = triggerRect.bottom - overlayRect.height;
    } else {
      top = triggerRect.top + (triggerRect.height - overlayRect.height) / 2;
    }
  }

  // Viewport clamping
  left = Math.max(collisionPadding, Math.min(left, viewportWidth - overlayRect.width - collisionPadding));
  top = Math.max(collisionPadding, Math.min(top, viewportHeight - overlayRect.height - collisionPadding));

  return {
    top: Math.round(top + window.scrollY),
    left: Math.round(left + window.scrollX),
    actualSide: calculatedSide,
  };
}
