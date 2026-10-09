"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger, useSidebar, cn } from "@ditherweb/ui";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { ComponentsSidebar } from "@/components/docs/components-sidebar";

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

      {/* Main Content Area */}
      <div
        className={cn(
          "flex-1 min-w-0 max-w-full flex flex-col transition-[padding] duration-200 ease-in-out",
          isCollapsed ? "lg:pl-14" : "lg:pl-64",
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

        <div className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 space-y-8 flex-1">
          <main className="min-w-0">{children}</main>
        </div>
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
