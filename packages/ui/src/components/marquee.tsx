import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Marquee Primitive
// Accessible CSS ticker replacing deprecated <marquee>
// ============================================================================

export interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  durationSeconds?: number;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  repeat?: number;
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      direction = "left",
      speed = "normal",
      durationSeconds,
      pauseOnHover = true,
      pauseOnFocus = true,
      repeat = 4,
      children,
      ...props
    },
    ref
  ) => {
    const defaultDurations = {
      slow: 35,
      normal: 20,
      fast: 10,
    };

    const duration = durationSeconds ?? defaultDurations[speed];

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Scrolling Announcement"
        className={cn(
          "w-full overflow-hidden select-none font-mono py-1.5 bevel-inset bg-background text-foreground",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            direction === "left" ? "retro-marquee-track-left" : "retro-marquee-track-right",
            pauseOnHover && "retro-marquee-pause-hover",
            pauseOnFocus && "retro-marquee-pause-focus"
          )}
          style={{ animationDuration: `${duration}s` }}
        >
          {Array.from({ length: repeat }).map((_, i) => (
            <div
              key={i}
              className="inline-flex shrink-0 items-center gap-6 px-4"
              aria-hidden={i > 0 ? true : undefined}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    );
  }
);
Marquee.displayName = "Marquee";
