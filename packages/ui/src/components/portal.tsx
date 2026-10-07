"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { getOrCreatePortalRoot } from "../lib/overlay-utils";

export interface PortalProps {
  /**
   * Content to render inside the portal.
   */
  children: React.ReactNode;
  /**
   * Custom container element to render into. Defaults to #ditherweb-portal-root on document.body.
   */
  container?: HTMLElement | null;
  /**
   * If true, renders children in-place rather than portaling.
   */
  disabled?: boolean;
}

/**
 * Portal primitive that renders children into a dedicated DOM container outside the parent hierarchy.
 * Fully SSR-safe and automatically manages default portal root creation.
 */
export function Portal({ children, container, disabled = false }: PortalProps) {
  const [mounted, setMounted] = React.useState(false);
  const [portalElement, setPortalElement] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setMounted(true);
    setPortalElement(getOrCreatePortalRoot(container));
  }, [container]);

  if (disabled) {
    return <>{children}</>;
  }

  if (!mounted || !portalElement) {
    return null;
  }

  return createPortal(children, portalElement);
}
