"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@ditherweb/ui";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/docs" },
  { label: "Examples", href: "/examples" },
  { label: "Playground", href: "/playground" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono font-bold text-foreground text-sm tracking-wider uppercase transition-opacity hover:opacity-80"
          >
            <Image
              src="/icon-light.png"
              alt="Ditherweb logo"
              width={24}
              height={24}
              priority
              unoptimized
              className="h-6 w-6 inline dark:hidden shrink-0 select-none image-rendering-pixelated"
            />
            <Image
              src="/icon-dark.png"
              alt="Ditherweb logo"
              width={24}
              height={24}
              priority
              unoptimized
              className="h-6 w-6 hidden dark:inline shrink-0 select-none image-rendering-pixelated"
            />
            <span>Ditherweb</span>
          </Link>
          <span className="bevel-inset hidden rounded-none px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground sm:inline-block">
            v0.1.0-alpha
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-xs font-medium tracking-wide uppercase transition-colors",
                  isActive
                    ? "text-primary underline underline-offset-4 decoration-2"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/mrinshad/ditherweb-ui"
            target="_blank"
            rel="noreferrer"
            aria-label="Ditherweb GitHub Repository"
            className="bevel-raised active:bevel-pressed hidden items-center gap-1 px-2.5 py-1 font-mono text-xs font-medium text-foreground transition-transform sm:inline-flex select-none"
          >
            <span>GitHub</span>
            <span className="text-[10px] text-muted-foreground">↗</span>
          </a>

          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="bevel-raised active:bevel-pressed flex h-8 w-8 items-center justify-center font-mono text-xs md:hidden select-none"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-surface px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-2 font-mono text-xs uppercase" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-2 py-1.5 border border-transparent transition-colors",
                    isActive
                      ? "bevel-inset bg-muted text-primary font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-border mt-1">
              <a
                href="https://github.com/mrinshad/ditherweb-ui"
                target="_blank"
                rel="noreferrer"
                className="block px-2 py-1.5 text-muted-foreground hover:text-foreground"
              >
                GitHub Repository ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
