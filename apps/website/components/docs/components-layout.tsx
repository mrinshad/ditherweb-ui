"use client";

import * as React from "react";
import Link from "next/link";
import {
  SidebarProvider,
  SidebarTrigger,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ditherweb/ui";
import { ComponentsSidebar } from "./components-sidebar";

export interface ComponentsLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function ComponentsLayout({ children, breadcrumbs }: ComponentsLayoutProps) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex w-full min-h-[calc(100vh-3.5rem)]">
        {/* Reusable Ditherweb Sidebar for Components */}
        <ComponentsSidebar />

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 max-w-full flex flex-col">
          {/* Mobile Top Navigation Bar */}
          <div className="lg:hidden flex items-center justify-between border-b border-border bg-surface p-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <span className="font-bold text-foreground">Components</span>
            </div>
            <Link
              href="/docs"
              className="bevel-raised active:bevel-pressed px-2 py-0.5 text-[11px] font-bold"
            >
              Docs &amp; Guides →
            </Link>
          </div>

          <div className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 space-y-8 flex-1">
            {/* Breadcrumb row using @ditherweb/ui Breadcrumb */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  {breadcrumbs.map((crumb, idx) => (
                    <React.Fragment key={crumb.label}>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        {crumb.href && idx < breadcrumbs.length - 1 ? (
                          <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            )}

            <main className="min-w-0">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
