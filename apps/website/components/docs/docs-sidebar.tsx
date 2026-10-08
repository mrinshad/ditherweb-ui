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
} from "@ditherweb/ui";

export interface DocsSidebarProps {
  className?: string;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const [filterQuery, setFilterQuery] = React.useState("");

  const query = filterQuery.trim().toLowerCase();

  const gettingStartedItems = [
    { title: "Introduction", href: "/docs", icon: "01" },
    { title: "Installation", href: "/docs/installation", icon: "02" },
  ];

  const guideItems = [
    { title: "Theming & Tokens", href: "/docs/theming", icon: "03" },
    { title: "Accessibility", href: "/docs/accessibility", icon: "04" },
    { title: "Composition", href: "/docs/composition", icon: "05" },
  ];

  const referenceItems = [
    { title: "CSS Design Tokens", href: "/docs/theming#tokens", icon: "§" },
    { title: "Bevel Primitives", href: "/docs/theming#bevels", icon: "§" },
    { title: "Dither Patterns", href: "/docs/theming#dithering", icon: "§" },
    { title: "Architecture", href: "/docs#philosophy", icon: "§" },
  ];

  const filteredGettingStarted = gettingStartedItems.filter(
    (item) => !query || item.title.toLowerCase().includes(query),
  );
  const filteredGuides = guideItems.filter(
    (item) => !query || item.title.toLowerCase().includes(query),
  );
  const filteredReference = referenceItems.filter(
    (item) => !query || item.title.toLowerCase().includes(query),
  );

  return (
    <Sidebar className={className}>
      <SidebarHeader>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="bevel-inset bg-primary px-1.5 py-0.5 text-[9px] font-bold text-primary-foreground uppercase shrink-0">
              DOCS
            </span>
            <span className="font-bold text-foreground truncate">Documentation</span>
          </div>
          <SidebarTrigger />
        </div>

        {/* Quick Filter Box (hidden when collapsed) */}
        {state === "expanded" && (
          <div className="relative mt-1">
            <label htmlFor="docs-sidebar-filter" className="sr-only">
              Filter documentation guides
            </label>
            <input
              id="docs-sidebar-filter"
              type="search"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter guides..."
              className="bevel-inset w-full bg-background px-2.5 py-1 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:outline-primary"
            />
            {filterQuery && (
              <button
                type="button"
                onClick={() => setFilterQuery("")}
                className="absolute right-2 top-1 text-muted-foreground hover:text-foreground text-[10px]"
                aria-label="Clear filter"
              >
                ✕
              </button>
            )}
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        {/* Getting Started */}
        {filteredGettingStarted.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
            {filteredGettingStarted.map((item) => (
              <SidebarItem
                key={item.href}
                active={pathname === item.href}
                icon={
                  <span className="text-[10px] font-bold font-mono opacity-80">
                    {item.icon}
                  </span>
                }
                asChild
              >
                <Link href={item.href}>{item.title}</Link>
              </SidebarItem>
            ))}
          </SidebarGroup>
        )}

        {/* Topic Guides */}
        {filteredGuides.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Guides</SidebarGroupLabel>
            {filteredGuides.map((item) => (
              <SidebarItem
                key={item.href}
                active={pathname === item.href}
                icon={
                  <span className="text-[10px] font-bold font-mono opacity-80">
                    {item.icon}
                  </span>
                }
                asChild
              >
                <Link href={item.href}>{item.title}</Link>
              </SidebarItem>
            ))}
          </SidebarGroup>
        )}

        {/* Quick Reference */}
        {filteredReference.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Reference</SidebarGroupLabel>
            {filteredReference.map((item) => (
              <SidebarItem
                key={item.href}
                active={pathname === item.href}
                icon={
                  <span className="text-[10px] font-bold font-mono opacity-70">
                    {item.icon}
                  </span>
                }
                asChild
              >
                <Link href={item.href}>{item.title}</Link>
              </SidebarItem>
            ))}
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter>
        <SidebarItem
          icon={<span className="text-sm">▦</span>}
          badge="96"
          asChild
        >
          <Link href="/components">All Components →</Link>
        </SidebarItem>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
