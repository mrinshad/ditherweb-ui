import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card, CardHeader, CardTitle, CardContent, Separator } from "@ditherweb/ui";

export const metadata: Metadata = {
  title: "Ditherweb Documentation — Retro UI Framework",
  description:
    "Technical guides and documentation for Ditherweb: design tokens, 4x4 Bayer dither matrices, beveled surfaces, accessibility standards, and React 19 component integration.",
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "Ditherweb Documentation — Retro UI Framework",
    description:
      "Technical guides and documentation for Ditherweb: design tokens, 4x4 Bayer dither matrices, beveled surfaces, accessibility standards, and React 19 component integration.",
    url: "https://ditherweb.mrinshad.site/docs",
    images: ["/og-image.png"],
  },
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      {/* Docs Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary">
            Architecture & Guides
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">
            Version 0.1.0-alpha
          </span>
        </div>
        <h1 className="font-mono text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Documentation
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Learn how Ditherweb combines the unpolished authenticity of 1990s computing
          with modern React engineering standards, CSS custom properties, and accessible interaction patterns.
        </p>
      </div>

      <Separator />

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="bevel-raised bg-surface p-4 font-mono text-xs space-y-2">
        <div className="font-bold uppercase tracking-wider text-foreground">Quick Navigation</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-muted-foreground">
          <li>
            <a href="#quickstart" className="hover:text-foreground hover:underline">
              1. Quick Start
            </a>
          </li>
          <li>
            <a href="#tokens" className="hover:text-foreground hover:underline">
              2. Token System
            </a>
          </li>
          <li>
            <a href="#bevels" className="hover:text-foreground hover:underline">
              3. Bevel Primitives
            </a>
          </li>
          <li>
            <a href="#dithering" className="hover:text-foreground hover:underline">
              4. Dither Patterns
            </a>
          </li>
          <li>
            <a href="#accessibility" className="hover:text-foreground hover:underline">
              5. Accessibility
            </a>
          </li>
          <li>
            <a href="#packaging" className="hover:text-foreground hover:underline">
              6. Distribution
            </a>
          </li>
          <li>
            <a href="#roadmap" className="hover:text-foreground hover:underline">
              7. Phase Roadmap
            </a>
          </li>
        </ul>
      </nav>

      {/* 1. Quick Start */}
      <section id="quickstart" className="space-y-4 scroll-mt-20">
        <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">
          1. Quick Start
        </h2>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          Ditherweb components are authored as clean, copy-pasteable React 19 primitives with zero black-box dependencies.
          They use standard React props and consume Tailwind CSS tokens.
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono uppercase">
              UI Package Architecture (@ditherweb/ui)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-xs">
            <p className="text-muted-foreground">
              All 10 core primitives and the <code className="text-foreground">cn(...)</code> utility are exported directly from the package <code className="text-foreground">@ditherweb/ui</code>:
            </p>
            <div className="bevel-inset bg-background p-3">
              <pre className="text-foreground overflow-x-auto">
                <code>{`import { Button, Input, Card, Badge, cn } from "@ditherweb/ui";
import "@ditherweb/ui/styles";`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. Token System */}
      <section id="tokens" className="space-y-4 scroll-mt-20">
        <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">
          2. Design Token Architecture
        </h2>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          Tokens are declared as CSS custom properties in <code className="text-foreground">app/globals.css</code>.
          Dark mode is toggled cleanly by adding or removing the <code className="text-foreground">.dark</code> class on <code className="text-foreground">&lt;html&gt;</code>.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 font-mono text-xs">
          <div className="bevel-raised p-4 bg-surface space-y-2">
            <div className="font-bold text-foreground uppercase">Semantic Color Tokens</div>
            <ul className="space-y-1 text-muted-foreground text-[11px]">
              <li><code className="text-foreground">--background</code>: Page substrate canvas</li>
              <li><code className="text-foreground">--surface</code>: Elevated panel surface (#c0c0c0 / #252830)</li>
              <li><code className="text-foreground">--surface-sunken</code>: Recessed control well</li>
              <li><code className="text-foreground">--primary</code>: Accent blue (#000080 / #3366cc)</li>
              <li><code className="text-foreground">--secondary</code>: Teal (#008080 / #208080)</li>
              <li><code className="text-foreground">--accent</code>: Amber highlight (#cc6600)</li>
              <li><code className="text-foreground">--destructive</code>: Error crimson (#cc0000)</li>
            </ul>
          </div>

          <div className="bevel-raised p-4 bg-surface space-y-2">
            <div className="font-bold text-foreground uppercase">Bevel Light & Dark Tokens</div>
            <ul className="space-y-1 text-muted-foreground text-[11px]">
              <li><code className="text-foreground">--bevel-light</code>: Highlight edge (#ffffff / #404552)</li>
              <li><code className="text-foreground">--bevel-dark</code>: Shadow edge (#808080 / #101216)</li>
              <li><code className="text-foreground">--bevel-face</code>: Midtone face fill</li>
              <li><code className="text-foreground">--border</code>: Hard pixel contour</li>
              <li><code className="text-foreground">--ring</code>: High-visibility focus indicator</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Bevel Primitives */}
      <section id="bevels" className="space-y-4 scroll-mt-20">
        <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">
          3. Tactile Bevel Primitives
        </h2>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          Bevels are implemented with calibrated borders to produce the classic pseudo-3D look without heavy images or filters.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <div className="bevel-raised p-3 bg-surface">
            <div className="font-bold mb-1">.bevel-raised</div>
            <p className="text-[11px] text-muted-foreground">Simulates an elevated button or dialog box with top/left highlight.</p>
          </div>
          <div className="bevel-inset p-3 bg-surface">
            <div className="font-bold mb-1">.bevel-inset</div>
            <p className="text-[11px] text-muted-foreground">Simulates a recessed input field or sunken panel well.</p>
          </div>
          <div className="bevel-pressed p-3 bg-surface">
            <div className="font-bold mb-1">.bevel-pressed</div>
            <p className="text-[11px] text-muted-foreground">Active depressed state applied to buttons and toggles on interaction.</p>
          </div>
        </div>
      </section>

      {/* 4. Dither Patterns */}
      <section id="dithering" className="space-y-4 scroll-mt-20">
        <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">
          4. Procedural Dither Patterns
        </h2>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          Dither patterns in Ditherweb are procedural SVG data-URIs encoded directly into CSS.
          They use pixel-aligned SVG rectangles with <code className="text-foreground">shape-rendering=&quot;crispEdges&quot;</code> to ensure identical rendering across screens.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div className="space-y-1">
            <div className="bevel-inset h-20 w-full bg-dither-fine" />
            <div className="font-bold">.bg-dither-fine</div>
            <div className="text-[10px] text-muted-foreground">Dense 2x2 stipple</div>
          </div>
          <div className="space-y-1">
            <div className="bevel-inset h-20 w-full bg-dither-medium" />
            <div className="font-bold">.bg-dither-medium</div>
            <div className="text-[10px] text-muted-foreground">Ordered 4x4 matrix</div>
          </div>
          <div className="space-y-1">
            <div className="bevel-inset h-20 w-full bg-dither-coarse" />
            <div className="font-bold">.bg-dither-coarse</div>
            <div className="text-[10px] text-muted-foreground">Sparse screen door</div>
          </div>
          <div className="space-y-1">
            <div className="bevel-inset h-20 w-full bg-dither-diagonal" />
            <div className="font-bold">.bg-dither-diagonal</div>
            <div className="text-[10px] text-muted-foreground">Hatching line matrix</div>
          </div>
        </div>
      </section>

      {/* 5. Accessibility */}
      <section id="accessibility" className="space-y-4 scroll-mt-20">
        <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">
          5. Accessibility Standards
        </h2>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          Early Web interfaces were often inaccessible by modern metrics.
          Ditherweb strictly couples authentic retro visuals with uncompromising modern accessibility:
        </p>
        <ul className="list-disc pl-5 font-mono text-xs text-muted-foreground space-y-1 leading-relaxed">
          <li>Full keyboard navigation: Enter and Space on buttons, Arrow keys on RadioGroups, Space on Switches and Checkboxes.</li>
          <li>Explicit ARIA attributes: <code className="text-foreground">role=&quot;switch&quot;</code>, <code className="text-foreground">role=&quot;radiogroup&quot;</code>, <code className="text-foreground">role=&quot;alert&quot;</code>, <code className="text-foreground">aria-checked</code>, <code className="text-foreground">aria-invalid</code>.</li>
          <li>High-contrast focus rings: <code className="text-foreground">focus-visible:outline-ring</code> ensures focus indicators are always discernible in both light and dark modes.</li>
          <li>Semantic HTML elements are used natively whenever possible (<code className="text-foreground">&lt;button&gt;</code>, <code className="text-foreground">&lt;input&gt;</code>, <code className="text-foreground">&lt;label&gt;</code>).</li>
        </ul>
      </section>

      {/* 6. Packaging & Distribution */}
      <section id="packaging" className="space-y-4 scroll-mt-20">
        <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">
          6. Package Distribution Status
        </h2>
        <Card className="border-border">
          <CardContent className="p-4 font-mono text-xs space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline">npm Status</Badge>
              <span className="font-bold text-foreground">Deferred / Not yet designed</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              In accordance with project architecture guidelines, standalone npm packaging, exports, and publishing infrastructure are intentionally deferred until the component system and documentation reach full maturity in Phase 6. Components are currently consumed directly within Next.js / React projects.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 7. Roadmap */}
      <section id="roadmap" className="space-y-4 scroll-mt-20">
        <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">
          7. Project Phase Roadmap
        </h2>
        <div className="space-y-2 font-mono text-xs">
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 0: Project Setup & Architecture Baseline</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 1: Visual Foundation & Design Tokens</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 2: First 10 Core Primitives</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 2.5: Product Website & Showcase Architecture</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 2.75: Architecture Separation & Visual QA</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 3A: Typography & Layout Primitives (16)</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 3B: Forms & Selection Primitives (10)</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 3C: Surfaces & Feedback Primitives (10)</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 3D: Overlays & Layered Interaction (10)</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 3E: Navigation & Data Primitives (10)</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 4: Classic Web Primitives (10)</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between">
            <span className="font-bold">Phase 5: Desktop & Pixel Components (10)</span>
            <Badge variant="success">COMPLETE</Badge>
          </div>
          <div className="bevel-raised p-3 bg-surface flex items-center justify-between border-2 border-primary">
            <span className="font-bold text-primary">Phase 6: Advanced Effects & Polish (10)</span>
            <Badge variant="primary">COMPLETE</Badge>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="pt-6 border-t border-border flex justify-between items-center font-mono text-xs">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          ← Back to Homepage
        </Link>
        <Link href="/components" className="text-primary hover:underline font-bold">
          Explore Component Catalog →
        </Link>
      </div>
    </div>
  );
}
