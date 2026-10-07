import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface text-foreground transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Manifesto */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-[10px] font-bold text-primary-foreground font-mono select-none">
                DW
              </span>
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
                  Home
                </Link>
              </li>
              <li>
                <Link href="/components" className="hover:text-foreground hover:underline">
                  Component Catalog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-foreground hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/playground" className="hover:text-foreground hover:underline">
                  Interactive Sandbox
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
                <Link href="/docs#tokens" className="hover:text-foreground hover:underline">
                  CSS Design Tokens
                </Link>
              </li>
              <li>
                <Link href="/docs#bevels" className="hover:text-foreground hover:underline">
                  Bevel Primitives
                </Link>
              </li>
              <li>
                <Link href="/docs#dithering" className="hover:text-foreground hover:underline">
                  Procedural Dither Patterns
                </Link>
              </li>
              <li>
                <Link href="/docs#typography" className="hover:text-foreground hover:underline">
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
            <span className="bevel-raised px-2 py-0.5 text-[10px] font-bold text-foreground bg-surface select-none">
              [ NEXT.JS 15 ]
            </span>
            <span className="bevel-raised px-2 py-0.5 text-[10px] font-bold text-foreground bg-surface select-none">
              [ TAILWIND CSS ]
            </span>
            <span className="bevel-raised px-2 py-0.5 text-[10px] font-bold text-foreground bg-surface select-none">
              [ W3C A11Y ]
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
