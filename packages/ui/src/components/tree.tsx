"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Tree Primitive
// Accessible hierarchical tree view with keyboard navigation & retro ASCII connectors
// ============================================================================

export interface TreeNodeData {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: TreeNodeData[];
  disabled?: boolean;
}

interface TreeContextValue {
  selectedId: string | null;
  expandedIds: Set<string>;
  focusedId: string | null;
  onSelect: (id: string, node?: TreeNodeData) => void;
  toggleExpand: (id: string) => void;
  setFocusedId: (id: string) => void;
  showGuides: boolean;
}

const TreeContext = React.createContext<TreeContextValue | null>(null);

export interface TreeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  /**
   * Data array for data-driven tree rendering.
   */
  data?: TreeNodeData[];
  /**
   * Controlled selected node ID.
   */
  selectedId?: string | null;
  /**
   * Default selected node ID.
   */
  defaultSelectedId?: string | null;
  /**
   * Callback fired when a node is selected.
   */
  onSelect?: (id: string, node?: TreeNodeData) => void;
  /**
   * Controlled set of expanded node IDs.
   */
  expandedIds?: string[];
  /**
   * Default expanded node IDs.
   */
  defaultExpandedIds?: string[];
  /**
   * Callback fired when expanded node IDs change.
   */
  onExpandedChange?: (expandedIds: string[]) => void;
  /**
   * If true, renders retro vertical guide lines and branch connectors.
   */
  showGuides?: boolean;
}

export const Tree = React.forwardRef<HTMLDivElement, TreeProps>(
  (
    {
      className,
      data,
      selectedId: controlledSelectedId,
      defaultSelectedId = null,
      onSelect,
      expandedIds: controlledExpandedIds,
      defaultExpandedIds = [],
      onExpandedChange,
      showGuides = true,
      children,
      ...props
    },
    ref
  ) => {
    // Selection state
    const [internalSelectedId, setInternalSelectedId] = React.useState<string | null>(
      defaultSelectedId
    );
    const isSelectControlled = controlledSelectedId !== undefined;
    const activeSelectedId = isSelectControlled ? controlledSelectedId : internalSelectedId;

    // Expansion state
    const [internalExpandedIds, setInternalExpandedIds] = React.useState<Set<string>>(
      new Set(defaultExpandedIds)
    );
    const isExpandControlled = controlledExpandedIds !== undefined;
    const activeExpandedIds = React.useMemo(() => {
      return isExpandControlled
        ? new Set(controlledExpandedIds)
        : internalExpandedIds;
    }, [isExpandControlled, controlledExpandedIds, internalExpandedIds]);

    // Focused item for roving tabIndex
    const [focusedId, setFocusedId] = React.useState<string | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Merge refs
    React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    const handleSelect = React.useCallback(
      (id: string, node?: TreeNodeData) => {
        if (!isSelectControlled) {
          setInternalSelectedId(id);
        }
        setFocusedId(id);
        onSelect?.(id, node);
      },
      [isSelectControlled, onSelect]
    );

    const toggleExpand = React.useCallback(
      (id: string) => {
        const next = new Set(activeExpandedIds);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }

        if (!isExpandControlled) {
          setInternalExpandedIds(next);
        }
        onExpandedChange?.(Array.from(next));
      },
      [activeExpandedIds, isExpandControlled, onExpandedChange]
    );

    // Collect visible nodes in linear order for keyboard navigation
    const getVisibleNodes = React.useCallback(() => {
      if (!data) {
        // Fallback to DOM tree items
        if (!containerRef.current) return [];
        const domItems = Array.from(
          containerRef.current.querySelectorAll<HTMLElement>('[role="treeitem"]')
        );
        return domItems.map((el) => ({
          id: el.getAttribute("data-tree-id") || "",
          hasChildren: el.getAttribute("aria-expanded") !== null,
          isExpanded: el.getAttribute("aria-expanded") === "true",
          parentId: el.getAttribute("data-parent-id") || null,
          element: el,
        }));
      }

      const visible: Array<{
        id: string;
        hasChildren: boolean;
        isExpanded: boolean;
        parentId: string | null;
        node: TreeNodeData;
      }> = [];

      function traverse(nodes: TreeNodeData[], parentId: string | null) {
        for (const node of nodes) {
          const hasChildren = Boolean(node.children && node.children.length > 0);
          const isExpanded = activeExpandedIds.has(node.id);
          visible.push({
            id: node.id,
            hasChildren,
            isExpanded,
            parentId,
            node,
          });
          if (hasChildren && isExpanded && node.children) {
            traverse(node.children, node.id);
          }
        }
      }

      traverse(data, null);
      return visible;
    }, [data, activeExpandedIds]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const visible = getVisibleNodes();
      if (visible.length === 0) return;

      const currentIndex = visible.findIndex(
        (item) => item.id === (focusedId || activeSelectedId)
      );
      const currentItem = currentIndex >= 0 ? visible[currentIndex] : visible[0];

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          const nextIndex = Math.min(
            (currentIndex >= 0 ? currentIndex : -1) + 1,
            visible.length - 1
          );
          const nextItem = visible[nextIndex];
          if (nextItem) {
            setFocusedId(nextItem.id);
            const el = containerRef.current?.querySelector<HTMLElement>(
              `[data-tree-id="${nextItem.id}"]`
            );
            el?.focus();
          }
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          const prevIndex = Math.max((currentIndex >= 0 ? currentIndex : 1) - 1, 0);
          const prevItem = visible[prevIndex];
          if (prevItem) {
            setFocusedId(prevItem.id);
            const el = containerRef.current?.querySelector<HTMLElement>(
              `[data-tree-id="${prevItem.id}"]`
            );
            el?.focus();
          }
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          if (currentItem) {
            if (currentItem.hasChildren && !currentItem.isExpanded) {
              toggleExpand(currentItem.id);
            } else if (currentItem.hasChildren && currentItem.isExpanded) {
              // Move to first child
              const nextItem = visible[currentIndex + 1];
              if (nextItem) {
                setFocusedId(nextItem.id);
                const el = containerRef.current?.querySelector<HTMLElement>(
                  `[data-tree-id="${nextItem.id}"]`
                );
                el?.focus();
              }
            }
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          if (currentItem) {
            if (currentItem.hasChildren && currentItem.isExpanded) {
              toggleExpand(currentItem.id);
            } else if (currentItem.parentId) {
              // Move to parent
              setFocusedId(currentItem.parentId);
              const el = containerRef.current?.querySelector<HTMLElement>(
                `[data-tree-id="${currentItem.parentId}"]`
              );
              el?.focus();
            }
          }
          break;
        }
        case "Home": {
          e.preventDefault();
          const first = visible[0];
          if (first) {
            setFocusedId(first.id);
            const el = containerRef.current?.querySelector<HTMLElement>(
              `[data-tree-id="${first.id}"]`
            );
            el?.focus();
          }
          break;
        }
        case "End": {
          e.preventDefault();
          const last = visible[visible.length - 1];
          if (last) {
            setFocusedId(last.id);
            const el = containerRef.current?.querySelector<HTMLElement>(
              `[data-tree-id="${last.id}"]`
            );
            el?.focus();
          }
          break;
        }
        case "Enter":
        case " ": {
          e.preventDefault();
          if (currentItem) {
            if ("node" in currentItem && currentItem.node) {
              handleSelect(currentItem.id, currentItem.node);
            } else {
              handleSelect(currentItem.id);
            }
            if (currentItem.hasChildren) {
              toggleExpand(currentItem.id);
            }
          }
          break;
        }
      }
    };

    return (
      <TreeContext.Provider
        value={{
          selectedId: activeSelectedId,
          expandedIds: activeExpandedIds,
          focusedId,
          onSelect: handleSelect,
          toggleExpand,
          setFocusedId,
          showGuides,
        }}
      >
        <div
          ref={containerRef}
          role="tree"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className={cn(
            "w-full select-none font-mono text-xs text-foreground p-3 bevel-raised bg-surface border-2 border-border focus:outline-none focus:ring-1 focus:ring-ring",
            className
          )}
          {...props}
        >
          {data ? (
            <TreeDataList data={data} level={0} parentId={null} isLast={true} />
          ) : (
            children
          )}
        </div>
      </TreeContext.Provider>
    );
  }
);
Tree.displayName = "Tree";

interface TreeDataListProps {
  data: TreeNodeData[];
  level: number;
  parentId: string | null;
  isLast: boolean;
}

function TreeDataList({ data, level, parentId }: TreeDataListProps) {
  return (
    <ul role={level === 0 ? undefined : "group"} className="space-y-0.5">
      {data.map((node, index) => {
        const isLastChild = index === data.length - 1;
        return (
          <TreeNode
            key={node.id}
            id={node.id}
            label={node.label}
            icon={node.icon}
            disabled={node.disabled}
            nodeData={node}
            level={level}
            parentId={parentId}
            isLastChild={isLastChild}
          >
            {node.children && node.children.length > 0 && (
              <TreeDataList
                data={node.children}
                level={level + 1}
                parentId={node.id}
                isLast={isLastChild}
              />
            )}
          </TreeNode>
        );
      })}
    </ul>
  );
}

export interface TreeNodeProps extends React.HTMLAttributes<HTMLLIElement> {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  level?: number;
  parentId?: string | null;
  isLastChild?: boolean;
  nodeData?: TreeNodeData;
}

export const TreeNode = React.forwardRef<HTMLLIElement, TreeNodeProps>(
  (
    {
      className,
      id,
      label,
      icon,
      disabled = false,
      level = 0,
      parentId = null,
      isLastChild = false,
      nodeData,
      children,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(TreeContext);
    if (!context) {
      throw new Error("TreeNode must be used within a Tree");
    }

    const {
      selectedId,
      expandedIds,
      focusedId,
      onSelect,
      toggleExpand,
      setFocusedId,
      showGuides,
    } = context;

    const hasChildren = Boolean(children);
    const isExpanded = expandedIds.has(id);
    const isSelected = selectedId === id;
    const isFocused = focusedId === id;

    const handleNodeClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (disabled) return;
      onSelect(id, nodeData);
    };

    const handleToggleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (disabled) return;
      toggleExpand(id);
    };

    return (
      <li
        ref={ref}
        role="treeitem"
        data-tree-id={id}
        data-parent-id={parentId || undefined}
        aria-expanded={hasChildren ? isExpanded : undefined}
        aria-selected={isSelected}
        aria-disabled={disabled}
        tabIndex={isFocused ? 0 : -1}
        onFocus={() => setFocusedId(id)}
        className={cn("list-none select-none", className)}
        {...props}
      >
        <div
          onClick={handleNodeClick}
          style={{ paddingLeft: `${level * 16}px` }}
          className={cn(
            "group flex items-center gap-1.5 py-1 px-1.5 font-mono text-xs cursor-pointer rounded-none border border-transparent transition-colors",
            isSelected && "bg-primary text-primary-foreground font-bold border-primary",
            !isSelected && "hover:bg-muted/50 text-foreground",
            isFocused && !isSelected && "border-ring border-dotted",
            disabled && "opacity-50 cursor-not-allowed pointer-events-none"
          )}
        >
          {/* Guide prefix / expander */}
          {hasChildren ? (
            <button
              type="button"
              aria-label={isExpanded ? `Collapse ${String(label)}` : `Expand ${String(label)}`}
              onClick={handleToggleClick}
              className={cn(
                "inline-flex items-center justify-center w-4 h-4 font-mono text-[10px] font-bold bevel-raised bg-muted/60 hover:bg-muted select-none text-foreground",
                isSelected && "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/40"
              )}
            >
              {isExpanded ? "-" : "+"}
            </button>
          ) : (
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex items-center justify-center w-4 h-4 font-mono text-[10px] text-muted-foreground",
                isSelected && "text-primary-foreground/80"
              )}
            >
              {showGuides ? (isLastChild ? "└" : "├") : "•"}
            </span>
          )}

          {/* Node icon */}
          {icon && (
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex items-center text-muted-foreground",
                isSelected && "text-primary-foreground"
              )}
            >
              {icon}
            </span>
          )}

          {/* Node label */}
          <span className="truncate flex-1">{label}</span>
        </div>

        {/* Child subtree */}
        {hasChildren && isExpanded && (
          <div role="group" className={cn(showGuides && "border-l border-border/40 ml-2 pl-1")}>
            {children}
          </div>
        )}
      </li>
    );
  }
);
TreeNode.displayName = "TreeNode";
