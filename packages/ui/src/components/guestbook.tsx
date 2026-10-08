import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Guestbook Primitive
// Classic personal-homepage guestbook presentation pattern
// ============================================================================

export type GuestbookProps = React.ComponentPropsWithoutRef<"section">;

export const Guestbook = React.forwardRef<HTMLElement, GuestbookProps>(
  ({ className, children, ...props }, ref) => (
    <section
      ref={ref}
      aria-label="Guestbook"
      className={cn("font-mono space-y-4 max-w-full", className)}
      {...props}
    >
      {children}
    </section>
  )
);
Guestbook.displayName = "Guestbook";

export type GuestbookHeaderProps = React.ComponentPropsWithoutRef<"header">;

export const GuestbookHeader = React.forwardRef<HTMLElement, GuestbookHeaderProps>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn("flex flex-wrap items-center justify-between gap-2 border-b-2 border-border pb-3", className)}
      {...props}
    />
  )
);
GuestbookHeader.displayName = "GuestbookHeader";

export interface GuestbookTitleProps extends React.ComponentPropsWithoutRef<"h2"> {
  as?: "h2" | "h3" | "h4" | "div";
}

export const GuestbookTitle = React.forwardRef<HTMLHeadingElement, GuestbookTitleProps>(
  ({ className, as: Component = "h2", ...props }, ref) => (
    <Component
      ref={ref as never}
      className={cn("text-base font-bold uppercase tracking-wide text-foreground flex items-center gap-2", className)}
      {...props}
    />
  )
);
GuestbookTitle.displayName = "GuestbookTitle";

export type GuestbookEntryListProps = React.ComponentPropsWithoutRef<"ol">;

export const GuestbookEntryList = React.forwardRef<HTMLOListElement, GuestbookEntryListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn("space-y-4 list-none p-0 m-0", className)}
      {...props}
    />
  )
);
GuestbookEntryList.displayName = "GuestbookEntryList";

export interface GuestbookEntryProps extends React.ComponentPropsWithoutRef<"li"> {
  entryNumber?: number;
  author: string;
  date: string;
  message: React.ReactNode;
  websiteUrl?: string;
  websiteName?: string;
  location?: string;
  avatar?: React.ReactNode;
}

export const GuestbookEntry = React.forwardRef<HTMLLIElement, GuestbookEntryProps>(
  (
    {
      className,
      entryNumber,
      author,
      date,
      message,
      websiteUrl,
      websiteName,
      location,
      avatar,
      children,
      ...props
    },
    ref
  ) => (
    <li
      ref={ref}
      className={cn(
        "bevel-raised bg-surface p-4 text-xs space-y-3 transition-colors",
        className
      )}
      {...props}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-2">
        <div className="flex items-center gap-2.5">
          {avatar}
          <div>
            <div className="font-bold text-foreground flex items-center gap-2">
              <span>{author}</span>
              {entryNumber !== undefined && (
                <span className="text-[10px] text-muted-foreground font-normal">#{entryNumber}</span>
              )}
            </div>
            {location && (
              <div className="text-[10px] text-muted-foreground">{location}</div>
            )}
          </div>
        </div>

        <div className="text-[11px] text-muted-foreground flex items-center gap-3">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline hover:text-accent font-medium"
            >
              🌐 {websiteName || "Homepage"}
            </a>
          )}
          <time className="text-[10px] uppercase tracking-wider">{date}</time>
        </div>
      </div>

      <div className="text-foreground leading-relaxed whitespace-pre-wrap break-words">
        {message || children}
      </div>
    </li>
  )
);
GuestbookEntry.displayName = "GuestbookEntry";

export type GuestbookEmptyProps = React.ComponentPropsWithoutRef<"div">;

export const GuestbookEmpty = React.forwardRef<HTMLDivElement, GuestbookEmptyProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bevel-inset bg-background p-8 text-center text-xs text-muted-foreground space-y-2",
        className
      )}
      {...props}
    >
      <div className="text-2xl" aria-hidden="true">📖</div>
      <div className="font-bold text-foreground">No Guestbook Signatures Yet</div>
      <div>{children || "Be the first visitor to sign this guestbook!"}</div>
    </div>
  )
);
GuestbookEmpty.displayName = "GuestbookEmpty";

export type GuestbookFooterProps = React.ComponentPropsWithoutRef<"footer">;

export const GuestbookFooter = React.forwardRef<HTMLElement, GuestbookFooterProps>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn("flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border text-xs text-muted-foreground", className)}
      {...props}
    />
  )
);
GuestbookFooter.displayName = "GuestbookFooter";
