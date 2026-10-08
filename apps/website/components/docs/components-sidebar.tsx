"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarFooter,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
  cn,
} from "@ditherweb/ui";
import { COMPONENT_DOCS_REGISTRY } from "@/lib/component-docs-registry";

export interface ComponentsSidebarProps {
  className?: string;
}

// Canonical category order
const CATEGORY_ORDER = [
  "Core UI",
  "Typography",
  "Layout",
  "Forms & Selection",
  "Surfaces & Feedback",
  "Overlays & Interaction",
  "Navigation & Data",
  "Classic Web",
  "Desktop & Pixel",
  "Effects & Polish",
];

export function ComponentsSidebar({ className }: ComponentsSidebarProps) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const [filterQuery, setFilterQuery] = React.useState("");

  const query = filterQuery.trim().toLowerCase();

  // Group registry entries by category
  const groupedComponents = React.useMemo(() => {
    const map = new Map<string, Array<{ slug: string; name: string }>>();
    CATEGORY_ORDER.forEach((cat) => map.set(cat, []));

    Object.values(COMPONENT_DOCS_REGISTRY).forEach((entry) => {
      // Map Overlays or Data & Content if category names vary
      let cat = entry.category;
      if (cat === "Overlays" || cat === "Overlays & Layers") cat = "Overlays & Interaction";
      if (cat === "Navigation" || cat === "Data & Content") cat = "Navigation & Data";

      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat)!.push({ slug: entry.slug, name: entry.name });
    });

    // Sort items alphabetically within each category
    map.forEach((items) => {
      items.sort((a, b) => a.name.localeCompare(b.name));
    });

    return map;
  }, []);

  return (
    <Sidebar className={className}>
      <SidebarHeader>
        <div
          className={cn(
            "flex items-center gap-2 w-full",
            state === "collapsed" ? "justify-center" : "justify-between",
          )}
        >
          {state === "expanded" && (
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="bevel-inset bg-primary px-1.5 py-0.5 text-[9px] font-bold text-primary-foreground uppercase shrink-0">
                PRIMITIVES
              </span>
              <span className="font-bold text-foreground truncate">Components</span>
            </div>
          )}
          <SidebarTrigger />
        </div>

        {/* Quick Component Search */}
        {state === "expanded" && (
          <div className="relative mt-1">
            <label htmlFor="components-sidebar-filter" className="sr-only">
              Search primitives
            </label>
            <input
              id="components-sidebar-filter"
              type="search"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter 96 components..."
              className="bevel-inset w-full bg-background px-2.5 py-1 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:outline-primary"
            />
            {filterQuery && (
              <button
                type="button"
                onClick={() => setFilterQuery("")}
                className="absolute right-2 top-1 text-muted-foreground hover:text-foreground text-[10px]"
                aria-label="Clear component search"
              >
                ✕
              </button>
            )}
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        {/* All Components Catalog Link */}
        <SidebarGroup>
          <SidebarItem
            active={pathname === "/components"}
            icon={<span className="text-sm">▦</span>}
            badge="96"
            asChild
          >
            <Link href="/components">All Components</Link>
          </SidebarItem>
        </SidebarGroup>

        {/* Categories and Component Items */}
        {CATEGORY_ORDER.map((category) => {
          const items = groupedComponents.get(category) || [];
          const filtered = items.filter(
            (item) => !query || item.name.toLowerCase().includes(query),
          );

          if (filtered.length === 0) return null;

          return (
            <SidebarGroup key={category}>
              <SidebarGroupLabel>
                <span>{category}</span>
                <span className="text-[9px] opacity-60 font-normal">
                  {filtered.length}
                </span>
              </SidebarGroupLabel>
              {filtered.map((item) => {
                const itemHref = `/components/${item.slug}`;
                const isActive = pathname === itemHref;

                return (
                  <SidebarItem
                    key={item.slug}
                    active={isActive}
                    icon={
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {item.name.slice(0, 2).toUpperCase()}
                      </span>
                    }
                    asChild
                  >
                    <Link href={itemHref}>{item.name}</Link>
                  </SidebarItem>
                );
              })}
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      <SidebarFooter>
        <SidebarItem
          icon={<span className="text-sm">📖</span>}
          asChild
        >
          <Link href="/docs">Docs &amp; Guides →</Link>
        </SidebarItem>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
