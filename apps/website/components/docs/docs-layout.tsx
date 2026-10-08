"use client";

import { useState } from "react";
import Link from "next/link";
import { DocsSidebar } from "./docs-sidebar";

export interface DocsLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function DocsLayout({ children, breadcrumbs }: DocsLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Mobile Nav Bar Toggle */}
      <div className="lg:hidden mb-6 flex items-center justify-between border border-border bevel-raised bg-surface p-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="bevel-inset bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground uppercase">
            DOCS
          </span>
          <span className="font-bold text-foreground">Navigation Menu</span>
        </div>
        <button
          type="button"
          onClick={() => setMobileNavOpen((prev) => !prev)}
          aria-expanded={mobileNavOpen}
          aria-label="Toggle documentation navigation"
          className="bevel-raised active:bevel-pressed px-3 py-1 font-bold text-xs uppercase flex items-center gap-1.5 select-none"
        >
          <span>{mobileNavOpen ? "✕ Close" : "☰ Browse Primitives"}</span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex bg-background/80 backdrop-blur-sm">
          <div className="bevel-raised bg-surface w-full max-w-xs h-full p-4 overflow-y-auto border-r border-border shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  Documentation Index
                </span>
                <button
                  type="button"
                  onClick={() => setMobileNavOpen(false)}
                  className="bevel-raised active:bevel-pressed px-2 py-0.5 font-mono text-xs font-bold"
                  aria-label="Close documentation menu"
                >
                  ✕
                </button>
              </div>
              <DocsSidebar onLinkClick={() => setMobileNavOpen(false)} />
            </div>
          </div>
          <div
            className="flex-1"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}

      {/* Main Two-Column Structure */}
      <div className="flex gap-10">
        {/* Desktop Sticky Left Sidebar */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 bevel-inset p-3 bg-surface/50 border border-border">
            <DocsSidebar />
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 max-w-4xl space-y-8">
          {/* Breadcrumb row */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumbs" className="font-mono text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-foreground hover:underline">
                Home
              </Link>
              <span>/</span>
              <Link href="/docs" className="hover:text-foreground hover:underline">
                Docs
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <span key={crumb.label} className="flex items-center gap-1.5">
                  <span>/</span>
                  {crumb.href && idx < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-foreground hover:underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground font-bold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Children / Documentation content */}
          {children}
        </main>
      </div>
    </div>
  );
}
