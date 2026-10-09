"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Badge, Separator, cn } from "@ditherweb/ui";

export function SiteFooter({
  className,
  isRoot = false,
}: {
  className?: string;
  isRoot?: boolean;
} = {}) {
  const pathname = usePathname();
  const isProductRoute = pathname?.startsWith("/docs") || pathname?.startsWith("/components");

  // On product documentation routes, SiteFooter is rendered inside ProductLayout's shared content shell
  if (isRoot && isProductRoute) {
    return null;
  }

  return (
    <footer className={cn("border-t border-border bg-surface text-foreground transition-colors", className)}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Manifesto */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/icon-light.png"
                alt="Ditherweb logo"
                width={24}
                height={24}
                unoptimized
                className="h-6 w-6 inline dark:hidden shrink-0 select-none image-rendering-pixelated"
              />
              <Image
                src="/icon-dark.png"
                alt="Ditherweb logo"
                width={24}
                height={24}
                unoptimized
                className="h-6 w-6 hidden dark:inline shrink-0 select-none image-rendering-pixelated"
              />
              <span className="font-mono text-sm font-bold uppercase tracking-wider">
                Ditherweb
              </span>
            </div>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Retro appearance. Modern engineering. Combining early-Web aesthetics and desktop UI with modern React and TypeScript.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="bevel-inset px-1.5 py-0.5 font-mono text-[10px] uppercase text-muted-foreground">
                MIT License
              </span>
              <span className="bevel-inset px-1.5 py-0.5 font-mono text-[10px] uppercase text-muted-foreground">
                Zero Runtime Bloat
              </span>
            </div>
          </div>

          {/* Column: Navigation */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="space-y-1.5 font-mono text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground hover:underline">
                  Ditherweb Home
                </Link>
              </li>
              <li>
                <Link href="/components" className="hover:text-foreground hover:underline">
                  Ditherweb Components
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-foreground hover:underline">
                  Ditherweb Documentation
                </Link>
              </li>
              <li>
                <Link href="/examples" className="hover:text-foreground hover:underline">
                  Ditherweb Examples
                </Link>
              </li>
              <li>
                <Link href="/playground" className="hover:text-foreground hover:underline">
                  Interactive Playground
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Visual Language */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              Design System
            </h3>
            <ul className="space-y-1.5 font-mono text-xs text-muted-foreground">
              <li>
                <Link href="/docs/theming" className="hover:text-foreground hover:underline">
                  CSS Design Tokens
                </Link>
              </li>
              <li>
                <Link href="/docs/theming#bevels" className="hover:text-foreground hover:underline">
                  Bevel Primitives
                </Link>
              </li>
              <li>
                <Link href="/docs/theming#dithering" className="hover:text-foreground hover:underline">
                  Procedural Dither Patterns
                </Link>
              </li>
              <li>
                <Link href="/docs/theming#typography" className="hover:text-foreground hover:underline">
                  Pixel Typography
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Project & Community */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              Community
            </h3>
            <ul className="space-y-1.5 font-mono text-xs text-muted-foreground">
              <li>
                <a
                  href="https://github.com/mrinshad/ditherweb-ui"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground hover:underline inline-flex items-center gap-1"
                >
                  GitHub Repository ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mrinshad/ditherweb-ui/issues"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground hover:underline inline-flex items-center gap-1"
                >
                  Issue Tracker ↗
                </a>
              </li>
              <li>
                <span className="text-muted-foreground/70">
                  npm Package: Deferred
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom bar with retro 88x31 styled micro-badges */}
        <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Ditherweb Project. Built with Next.js & TypeScript.</p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="flat" className="text-[10px] px-2 py-0.5">
              REACT 19
            </Badge>
            <Badge variant="flat" className="text-[10px] px-2 py-0.5">
              NEXT.JS
            </Badge>
            <Badge variant="flat" className="text-[10px] px-2 py-0.5">
              TAILWIND CSS
            </Badge>
            <Badge variant="flat" className="text-[10px] px-2 py-0.5">
              W3C A11Y
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
