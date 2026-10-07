"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Table Primitive
// Semantic, accessible retro data table with borders, striping & dense variants
// ============================================================================

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /**
   * If true, reduces cell padding for data-dense displays.
   */
  dense?: boolean;
  /**
   * If true, alternates zebra striping across body rows.
   */
  striped?: boolean;
  /**
   * If true, draws grid borders between all cells.
   */
  bordered?: boolean;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, dense = false, striped = false, bordered = false, ...props }, ref) => (
    <div className="relative w-full overflow-x-auto bevel-raised bg-surface border-2 border-border">
      <table
        ref={ref}
        data-dense={dense}
        data-striped={striped}
        data-bordered={bordered}
        className={cn(
          "w-full caption-bottom font-mono text-xs text-foreground border-collapse select-text",
          className
        )}
        {...props}
      />
    </div>
  )
);
Table.displayName = "Table";

export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn("border-b-2 border-border bg-surface-elevated uppercase font-bold", className)}
      {...props}
    />
  )
);
TableHeader.displayName = "TableHeader";

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0 divide-y divide-border/60", className)}
      {...props}
    />
  )
);
TableBody.displayName = "TableBody";

export type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn("border-t-2 border-border bg-surface-elevated font-medium", className)}
      {...props}
    />
  )
);
TableFooter.displayName = "TableFooter";

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, selected = false, ...props }, ref) => (
    <tr
      ref={ref}
      data-state={selected ? "selected" : undefined}
      className={cn(
        "border-b border-border/60 transition-colors",
        "hover:bg-muted/50 data-[state=selected]:bg-muted data-[state=selected]:text-primary font-medium",
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
}

export const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, align = "left", scope = "col", ...props }, ref) => (
    <th
      ref={ref}
      scope={scope}
      className={cn(
        "h-9 px-3 py-2 text-left font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground",
        align === "center" && "text-center",
        align === "right" && "text-right",
        "[table[data-dense=true]_&]:h-7 [table[data-dense=true]_&]:py-1 [table[data-dense=true]_&]:px-2",
        "[table[data-bordered=true]_&]:border-r [table[data-bordered=true]_&]:border-border/60 [table[data-bordered=true]_&]:last:border-r-0",
        className
      )}
      {...props}
    />
  )
);
TableHead.displayName = "TableHead";

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, align = "left", ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        "px-3 py-2 align-middle font-mono text-xs text-foreground",
        align === "center" && "text-center",
        align === "right" && "text-right",
        "[table[data-dense=true]_&]:py-1 [table[data-dense=true]_&]:px-2",
        "[table[data-bordered=true]_&]:border-r [table[data-bordered=true]_&]:border-border/60 [table[data-bordered=true]_&]:last:border-r-0",
        "[table[data-striped=true]_tbody_tr:nth-child(even)_&]:bg-muted/25",
        className
      )}
      {...props}
    />
  )
);
TableCell.displayName = "TableCell";

export type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement>;

export const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn("mt-2 px-2 pb-2 font-mono text-[10px] uppercase text-muted-foreground tracking-wider", className)}
      {...props}
    />
  )
);
TableCaption.displayName = "TableCaption";
