"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { BlinkCursor } from "./blink-cursor";

// ============================================================================
// Ditherweb — Typewriter Primitive
// Character-by-character typewriter reveal with screen-reader and reduced-motion support
// ============================================================================

export type TypewriterSpeed = "slow" | "medium" | "fast" | number;
export type TypewriterAs = "span" | "p" | "h1" | "h2" | "h3" | "div";

export interface TypewriterProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  speed?: TypewriterSpeed;
  delay?: number;
  cursor?: boolean | React.ReactNode;
  loop?: boolean;
  loopDelay?: number;
  onComplete?: () => void;
  as?: TypewriterAs;
}

const speedMap: Record<"slow" | "medium" | "fast", number> = {
  slow: 80,
  medium: 40,
  fast: 20,
};

function resolveInterval(speed: TypewriterSpeed): number {
  if (typeof speed === "number") {
    return Math.max(5, speed);
  }
  return speedMap[speed] ?? 40;
}

export const Typewriter = React.forwardRef<HTMLElement, TypewriterProps>(
  (
    {
      text = "",
      speed = "medium",
      delay = 0,
      cursor = true,
      loop = false,
      loopDelay = 2000,
      onComplete,
      as: Component = "span",
      className,
      ...props
    },
    ref
  ) => {
    const [displayedLength, setDisplayedLength] = React.useState<number>(0);
    const [isDone, setIsDone] = React.useState<boolean>(false);
    const intervalMs = resolveInterval(speed);

    // Reduced motion check
    const [prefersReducedMotion, setPrefersReducedMotion] = React.useState<boolean>(false);

    React.useEffect(() => {
      if (typeof window !== "undefined" && window.matchMedia) {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mq.matches);

        const listener = (e: MediaQueryListEvent) => {
          setPrefersReducedMotion(e.matches);
        };
        mq.addEventListener?.("change", listener);
        return () => mq.removeEventListener?.("change", listener);
      }
    }, []);

    React.useEffect(() => {
      // If user prefers reduced motion, show full text immediately
      if (prefersReducedMotion) {
        setDisplayedLength(text.length);
        setIsDone(true);
        onComplete?.();
        return;
      }

      setDisplayedLength(0);
      setIsDone(false);

      let timeoutId: NodeJS.Timeout;
      let intervalId: NodeJS.Timeout;

      timeoutId = setTimeout(() => {
        let current = 0;
        intervalId = setInterval(() => {
          current += 1;
          setDisplayedLength(current);

          if (current >= text.length) {
            clearInterval(intervalId);
            setIsDone(true);
            onComplete?.();

            if (loop) {
              timeoutId = setTimeout(() => {
                setDisplayedLength(0);
                setIsDone(false);
              }, loopDelay);
            }
          }
        }, intervalMs);
      }, delay);

      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }, [text, intervalMs, delay, loop, loopDelay, prefersReducedMotion, onComplete]);

    const visibleText = prefersReducedMotion ? text : text.slice(0, displayedLength);

    return React.createElement(
      Component,
      {
        ref,
        className: cn("inline-block font-mono select-text", className),
        ...props,
      },
      // Assistive technology gets complete text immediately
      <span className="sr-only">{text}</span>,
      // Visual typing display
      <span aria-hidden="true" className="inline">
        {visibleText}
        {cursor && (
          typeof cursor === "boolean" ? (
            <BlinkCursor blink={!isDone || loop} />
          ) : (
            cursor
          )
        )}
      </span>
    );
  }
);

Typewriter.displayName = "Typewriter";
