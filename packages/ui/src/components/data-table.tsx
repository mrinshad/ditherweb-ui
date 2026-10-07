"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./table";
import { Checkbox } from "./checkbox";
import { Spinner } from "./spinner";
import { EmptyState, EmptyStateTitle, EmptyStateDescription } from "./empty-state";

// ============================================================================
// Ditherweb — DataTable Primitive
// Zero-dependency typed data table with sorting, selection, loading & empty states
// ============================================================================

export type SortDirection = "asc" | "desc";

export interface DataTableColumn<T> {
  /**
   * Unique identifier for the column. Defaults to `accessorKey` if provided.
   */
  id?: string;
  /**
   * Column header label or custom render function.
   */
  header: React.ReactNode | ((context: { column: DataTableColumn<T> }) => React.ReactNode);
  /**
   * Key on row data to display and sort by.
   */
  accessorKey?: keyof T;
  /**
   * Custom accessor function for complex or computed cell values.
   */
  accessorFn?: (row: T) => React.ReactNode;
  /**
   * Custom cell renderer.
   */
  cell?: (context: { row: T; value: unknown; index: number }) => React.ReactNode;
  /**
   * Whether the column can be sorted.
   */
  sortable?: boolean;
  /**
   * Text alignment for header and cells.
   */
  align?: "left" | "center" | "right";
  /**
   * Optional custom width CSS string (e.g. "120px", "20%").
   */
  width?: string | number;
}

export interface DataTableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of row data objects.
   */
  data: T[];
  /**
   * Column definitions.
   */
  columns: DataTableColumn<T>[];
  /**
   * Function to extract a unique key for each row. Defaults to `row.id` or row index.
   */
  keyExtractor?: (row: T, index: number) => string | number;
  /**
   * Active sort column identifier (controlled).
   */
  sortColumn?: string | null;
  /**
   * Active sort direction ("asc" | "desc").
   */
  sortDirection?: SortDirection;
  /**
   * Callback fired when a sortable column header is clicked.
   */
  onSortChange?: (columnId: string, direction: SortDirection) => void;
  /**
   * If true, enables row selection with checkboxes.
   */
  selectable?: boolean;
  /**
   * Array of selected row keys (controlled).
   */
  selectedKeys?: (string | number)[];
  /**
   * Default selected keys (uncontrolled).
   */
  defaultSelectedKeys?: (string | number)[];
  /**
   * Callback fired when selection changes.
   */
  onSelectionChange?: (selectedKeys: (string | number)[], selectedRows: T[]) => void;
  /**
   * If true, renders a loading indicator.
   */
  loading?: boolean;
  /**
   * Custom loading label.
   */
  loadingText?: string;
  /**
   * Message shown when data is empty.
   */
  emptyText?: string;
  /**
   * Dense padding variant.
   */
  dense?: boolean;
  /**
   * Zebra striped rows variant.
   */
  striped?: boolean;
  /**
   * Cell grid borders variant.
   */
  bordered?: boolean;
  /**
   * Optional table caption text.
   */
  caption?: React.ReactNode;
  /**
   * Optional footer content.
   */
  footer?: React.ReactNode;
  /**
   * Callback when a row is clicked.
   */
  onRowClick?: (row: T, index: number) => void;
}

export function DataTable<T extends object = Record<string, unknown>>({
  data = [],
  columns = [],
  keyExtractor,
  sortColumn: controlledSortColumn,
  sortDirection: controlledSortDirection,
  onSortChange,
  selectable = false,
  selectedKeys: controlledSelectedKeys,
  defaultSelectedKeys = [],
  onSelectionChange,
  loading = false,
  loadingText = "Loading data...",
  emptyText = "No records found.",
  dense = false,
  striped = false,
  bordered = false,
  caption,
  footer,
  onRowClick,
  className,
  ...props
}: DataTableProps<T>) {
  // Sort state (internal fallback if uncontrolled)
  const [internalSortColumn, setInternalSortColumn] = React.useState<string | null>(null);
  const [internalSortDirection, setInternalSortDirection] = React.useState<SortDirection>("asc");

  const isSortControlled = controlledSortColumn !== undefined;
  const activeSortColumn = isSortControlled ? controlledSortColumn : internalSortColumn;
  const activeSortDirection = isSortControlled ? (controlledSortDirection || "asc") : internalSortDirection;

  // Selection state (internal fallback if uncontrolled)
  const [internalSelectedKeys, setInternalSelectedKeys] = React.useState<(string | number)[]>(
    defaultSelectedKeys
  );

  const isSelectionControlled = controlledSelectedKeys !== undefined;
  const activeSelectedKeys = isSelectionControlled
    ? controlledSelectedKeys
    : internalSelectedKeys;

  const getRowKey = React.useCallback(
    (row: T, index: number): string | number => {
      if (keyExtractor) return keyExtractor(row, index);
      if (row && typeof row === "object" && "id" in row) {
        const rowWithId = row as unknown as { id?: string | number };
        if (rowWithId.id !== undefined) {
          return rowWithId.id;
        }
      }
      return index;
    },
    [keyExtractor]
  );

  // Sorting handler
  const handleSort = (colId: string) => {
    let nextDirection: SortDirection = "asc";
    if (activeSortColumn === colId) {
      nextDirection = activeSortDirection === "asc" ? "desc" : "asc";
    }

    if (!isSortControlled) {
      setInternalSortColumn(colId);
      setInternalSortDirection(nextDirection);
    }

    onSortChange?.(colId, nextDirection);
  };

  // Sort rows if not controlled by parent
  const sortedData = React.useMemo(() => {
    if (isSortControlled || !activeSortColumn) return data;

    const column = columns.find(
      (c) => (c.id || String(c.accessorKey)) === activeSortColumn
    );
    if (!column) return data;

    return [...data].sort((a, b) => {
      let aVal: unknown = column.accessorKey ? a[column.accessorKey] : undefined;
      let bVal: unknown = column.accessorKey ? b[column.accessorKey] : undefined;

      if (column.accessorFn) {
        aVal = column.accessorFn(a);
        bVal = column.accessorFn(b);
      }

      if (aVal === bVal) return 0;
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;

      const compare = String(aVal) < String(bVal) ? -1 : 1;
      return activeSortDirection === "asc" ? compare : -compare;
    });
  }, [data, activeSortColumn, activeSortDirection, isSortControlled, columns]);

  // Selection handlers
  const allRowKeys = React.useMemo(
    () => sortedData.map((row, index) => getRowKey(row, index)),
    [sortedData, getRowKey]
  );

  const isAllSelected =
    allRowKeys.length > 0 &&
    allRowKeys.every((key) => activeSelectedKeys.includes(key));
  const isPartiallySelected =
    activeSelectedKeys.length > 0 && !isAllSelected;

  const handleSelectAll = (checked: boolean) => {
    const nextKeys = checked ? allRowKeys : [];
    const nextRows = checked ? [...sortedData] : [];

    if (!isSelectionControlled) {
      setInternalSelectedKeys(nextKeys);
    }
    onSelectionChange?.(nextKeys, nextRows);
  };

  const handleSelectRow = (key: string | number, row: T, checked: boolean) => {
    let nextKeys: (string | number)[];
    if (checked) {
      nextKeys = [...activeSelectedKeys, key];
    } else {
      nextKeys = activeSelectedKeys.filter((k) => k !== key);
    }

    const nextRows = sortedData.filter((r, idx) =>
      nextKeys.includes(getRowKey(r, idx))
    );

    if (!isSelectionControlled) {
      setInternalSelectedKeys(nextKeys);
    }
    onSelectionChange?.(nextKeys, nextRows);
  };

  const totalColumns = columns.length + (selectable ? 1 : 0);

  return (
    <div className={cn("w-full space-y-2", className)} {...props}>
      <Table dense={dense} striped={striped} bordered={bordered}>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {selectable && (
              <TableHead className="w-10 px-2 text-center">
                <Checkbox
                  aria-label="Select all rows"
                  checked={isAllSelected}
                  indeterminate={isPartiallySelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </TableHead>
            )}
            {columns.map((column, idx) => {
              const colId = column.id || String(column.accessorKey || idx);
              const isSorted = activeSortColumn === colId;
              const isSortable = column.sortable;

              return (
                <TableHead
                  key={colId}
                  align={column.align}
                  style={column.width ? { width: column.width } : undefined}
                  className={cn(isSortable && "cursor-pointer select-none hover:text-foreground")}
                  onClick={isSortable ? () => handleSort(colId) : undefined}
                >
                  <div
                    className={cn(
                      "inline-flex items-center gap-1 font-mono uppercase tracking-wider",
                      column.align === "center" && "justify-center w-full",
                      column.align === "right" && "justify-end w-full"
                    )}
                  >
                    <span>
                      {typeof column.header === "function"
                        ? column.header({ column })
                        : column.header}
                    </span>
                    {isSortable && (
                      <span
                        aria-hidden="true"
                        className={cn(
                          "font-mono text-[10px] px-0.5",
                          isSorted ? "text-primary font-bold" : "text-muted-foreground/50"
                        )}
                      >
                        {isSorted
                          ? activeSortDirection === "asc"
                            ? "▲"
                            : "▼"
                          : "⇅"}
                      </span>
                    )}
                  </div>
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={totalColumns} className="h-32 text-center py-8">
                <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <Spinner size="md" label={loadingText} />
                  <span className="font-mono text-xs">{loadingText}</span>
                </div>
              </TableCell>
            </TableRow>
          ) : sortedData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={totalColumns} className="h-32 text-center py-6">
                <EmptyState variant="dashed" className="py-6">
                  <EmptyStateTitle className="text-xs">No records</EmptyStateTitle>
                  <EmptyStateDescription className="text-xs">{emptyText}</EmptyStateDescription>
                </EmptyState>
              </TableCell>
            </TableRow>
          ) : (
            sortedData.map((row, rowIndex) => {
              const rowKey = getRowKey(row, rowIndex);
              const isSelected = activeSelectedKeys.includes(rowKey);

              return (
                <TableRow
                  key={String(rowKey)}
                  selected={isSelected}
                  onClick={() => onRowClick?.(row, rowIndex)}
                  className={cn(onRowClick && "cursor-pointer")}
                >
                  {selectable && (
                    <TableCell className="w-10 px-2 text-center">
                      <Checkbox
                        aria-label={`Select row ${rowIndex + 1}`}
                        checked={isSelected}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleSelectRow(rowKey, row, e.target.checked);
                        }}
                      />
                    </TableCell>
                  )}
                  {columns.map((column, colIndex) => {
                    const colId = column.id || String(column.accessorKey || colIndex);

                    let cellContent: React.ReactNode;
                    let rawValue: unknown;

                    if (column.accessorKey) {
                      rawValue = row[column.accessorKey];
                    } else if (column.accessorFn) {
                      rawValue = column.accessorFn(row);
                    }

                    if (column.cell) {
                      cellContent = column.cell({
                        row,
                        value: rawValue,
                        index: rowIndex,
                      });
                    } else {
                      cellContent = rawValue !== undefined && rawValue !== null ? String(rawValue) : "—";
                    }

                    return (
                      <TableCell key={colId} align={column.align}>
                        {cellContent}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          )}
        </TableBody>

        {footer && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={totalColumns}>{footer}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}

DataTable.displayName = "DataTable";
