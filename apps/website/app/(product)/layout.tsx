"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger, useSidebar, cn } from "@ditherweb/ui";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { ComponentsSidebar } from "@/components/docs/components-sidebar";
import { SiteFooter } from "@/components/site/site-footer";

function ProductShell({
  isDocs,
  children,
}: {
  isDocs: boolean;
  children: React.ReactNode;
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className="flex w-full min-h-[calc(100vh-3.5rem)]">
      {/* Reusable Ditherweb Sidebar: dynamically selects docs or components navigation */}
      {isDocs ? (
        <DocsSidebar className="lg:fixed lg:top-14 lg:left-0 lg:z-30 lg:h-[calc(100vh-3.5rem)]" />
      ) : (
        <ComponentsSidebar className="lg:fixed lg:top-14 lg:left-0 lg:z-30 lg:h-[calc(100vh-3.5rem)]" />
      )}

      {/* Main Content & Footer Shell: offset to the right of the fixed sidebar */}
      <div
        className={cn(
          "flex-1 min-w-0 max-w-full flex flex-col transition-[margin] duration-200 ease-in-out",
          isCollapsed ? "lg:ml-14" : "lg:ml-64",
        )}
      >
        {/* Mobile Top Navigation Bar */}
        <div className="lg:hidden flex items-center justify-between border-b border-border bg-surface p-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <span className="font-bold text-foreground">
              {isDocs ? "Docs Navigation" : "Components"}
            </span>
          </div>
          <Link
            href={isDocs ? "/components" : "/docs"}
            className="bevel-raised active:bevel-pressed px-2 py-0.5 text-[11px] font-bold"
          >
            {isDocs ? "Components →" : "Docs & Guides →"}
          </Link>
        </div>

        {/* Documentation Content Area */}
        <div className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 space-y-8 flex-1">
          <div className="min-w-0">{children}</div>
        </div>

        {/* Site Footer within content shell */}
        <SiteFooter />
      </div>
    </div>
  );
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");

  return (
    <SidebarProvider defaultOpen>
      <ProductShell isDocs={isDocs}>{children}</ProductShell>
    </SidebarProvider>
  );
}
