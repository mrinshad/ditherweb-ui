"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@ditherweb/ui";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { ComponentsSidebar } from "@/components/docs/components-sidebar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");

  return (
    <SidebarProvider defaultOpen>
      <div className="flex w-full min-h-[calc(100vh-3.5rem)]">
        {/* Reusable Ditherweb Sidebar: dynamically selects docs or components navigation */}
        {isDocs ? <DocsSidebar /> : <ComponentsSidebar />}

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 max-w-full flex flex-col">
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
    </SidebarProvider>
  );
}
