"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Avatar Primitive
// Visual entity representation with image, initials fallback, sizes & status badge
// ============================================================================

export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarShape = "square" | "circle";
export type AvatarStatus = "online" | "busy" | "away" | "offline";

interface AvatarContextValue {
  size: AvatarSize;
  shape: AvatarShape;
  imageLoaded: boolean;
  setImageLoaded: (loaded: boolean) => void;
  imageError: boolean;
  setImageError: (error: boolean) => void;
}

const AvatarContext = React.createContext<AvatarContextValue | null>(null);

const sizeMap: Record<AvatarSize, string> = {
  sm: "w-6 h-6 text-[10px]",
  md: "w-8 h-8 text-xs",
  lg: "w-10 h-10 text-sm",
  xl: "w-12 h-12 text-base",
};

export type AvatarVariant = "default" | "bevel" | "pixel" | "dither";

const variantStyles: Record<AvatarVariant, string> = {
  default: "border-2 border-border bg-muted",
  bevel: "bevel-raised bg-surface border-none",
  pixel: "border-2 border-foreground shadow-hard-sm bg-muted",
  dither: "border border-border bg-dither-medium",
};

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Avatar size: "sm" (24px), "md" (32px), "lg" (40px), "xl" (48px).
   */
  size?: AvatarSize;
  /**
   * Shape variant: "square" (retro default) or "circle".
   */
  shape?: AvatarShape;
  /**
   * Frame variant: "default", "bevel", "pixel", "dither".
   */
  variant?: AvatarVariant;
  /**
   * Optional status indicator: "online", "busy", "away", "offline".
   */
  status?: AvatarStatus;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      className,
      size = "md",
      shape = "square",
      variant = "default",
      status,
      children,
      ...props
    },
    ref
  ) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const [imageError, setImageError] = React.useState(false);

    return (
      <AvatarContext.Provider
        value={{
          size,
          shape,
          imageLoaded,
          setImageLoaded,
          imageError,
          setImageError,
        }}
      >
        <span
          ref={ref}
          data-size={size}
          data-shape={shape}
          data-variant={variant}
          className={cn(
            "relative inline-flex items-center justify-center shrink-0 font-mono font-bold select-none text-foreground",
            shape === "circle" ? "rounded-full overflow-hidden" : "rounded-none",
            variantStyles[variant],
            sizeMap[size],
            className
          )}
          {...props}
        >
          {children}
          {status && <AvatarBadge status={status} />}
        </span>
      </AvatarContext.Provider>
    );
  }
);
Avatar.displayName = "Avatar";

export type AvatarImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, alt = "", onLoad, onError, ...props }, ref) => {
    const context = React.useContext(AvatarContext);

    // Reset when src changes
    React.useEffect(() => {
      if (context) {
        context.setImageLoaded(false);
        context.setImageError(false);
      }
    }, [src, context]);

    if (!context || !src || context.imageError) {
      return null;
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        onLoad={(e) => {
          context.setImageLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          context.setImageError(true);
          onError?.(e);
        }}
        className={cn(
          "w-full h-full object-cover",
          context.shape === "circle" ? "rounded-full" : "rounded-none",
          !context.imageLoaded && "hidden",
          className
        )}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = "AvatarImage";

export type AvatarFallbackProps = React.HTMLAttributes<HTMLSpanElement>;

export const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AvatarContext);

    // If image successfully loaded, hide fallback
    if (context && context.imageLoaded && !context.imageError) {
      return null;
    }

    return (
      <span
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center font-mono font-bold uppercase tracking-wider text-foreground select-none",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
AvatarFallback.displayName = "AvatarFallback";

export interface AvatarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: AvatarStatus;
}

const statusColors: Record<AvatarStatus, string> = {
  online: "bg-emerald-500",
  busy: "bg-rose-500",
  away: "bg-amber-500",
  offline: "bg-zinc-500",
};

export const AvatarBadge = React.forwardRef<HTMLSpanElement, AvatarBadgeProps>(
  ({ className, status = "online", ...props }, ref) => {
    const context = React.useContext(AvatarContext);
    const isCircle = context?.shape === "circle";

    return (
      <span
        ref={ref}
        role="status"
        aria-label={`Status: ${status}`}
        className={cn(
          "absolute block w-2.5 h-2.5 border border-background shadow-sm",
          isCircle ? "rounded-full -bottom-0.5 -right-0.5" : "rounded-none -bottom-1 -right-1",
          statusColors[status],
          className
        )}
        {...props}
      />
    );
  }
);
AvatarBadge.displayName = "AvatarBadge";
