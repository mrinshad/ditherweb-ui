import type { Metadata } from "next";
import Link from "next/link";
import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Separator,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Dither,
} from "@ditherweb/ui";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Theming & Tokens — Ditherweb Documentation",
  description:
    "Design tokens, CSS custom properties, light and dark themes, tactile bevels, procedural Bayer dither matrices, and pixel typography in Ditherweb.",
  alternates: {
    canonical: "/docs/theming",
  },
};

export default function ThemingPage() {
  return (
    <div className="space-y-10 font-mono">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Theming &amp; Tokens</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header Section */}
      <div className="space-y-3">
        <Badge variant="primary">Guide</Badge>
        <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">
          Theming &amp; Design Tokens
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Understand how Ditherweb leverages CSS custom properties to drive tactile bevels,
          light/dark theme switching, procedural Bayer dither patterns, and pixel typography.
        </p>
      </div>

      <Separator />

      {/* 1. Theme Switching Architecture */}
      <section id="theme-switching" className="space-y-4 scroll-mt-20">
        <div className="flex items-center gap-2">
          <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
            01
          </span>
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            Theme Switching Architecture
          </h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Ditherweb uses a zero-runtime CSS class approach for theme switching. Adding or removing the{" "}
          <code className="text-foreground">.dark</code> class on the root{" "}
          <code className="text-foreground">&lt;html&gt;</code> element switches all tokens simultaneously
          with zero flash:
        </p>

        <CodeBlock
          code={`// Switch theme programmatically
export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("ditherweb-theme", isDark ? "dark" : "light");
}`}
          language="TSX"
          filename="lib/theme.ts"
        />
      </section>

      {/* 2. Semantic Color Tokens */}
      <section id="tokens" className="space-y-4 scroll-mt-20">
        <div className="flex items-center gap-2">
          <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
            02
          </span>
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            Semantic Color Tokens
          </h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Every component binds to standardized semantic tokens declared in{" "}
          <code className="text-foreground">packages/ui/src/styles/tokens.css</code>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs uppercase">Light Palette Tokens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5 text-muted-foreground text-[11px]">
              <div><code className="text-foreground">--background</code>: #d4d0c8 (Canvas substrate)</div>
              <div><code className="text-foreground">--surface</code>: #c0c0c0 (Standard 90s OS grey)</div>
              <div><code className="text-foreground">--surface-sunken</code>: #b8b4ac (Recessed well)</div>
              <div><code className="text-foreground">--primary</code>: #000080 (Classic desktop navy)</div>
              <div><code className="text-foreground">--secondary</code>: #008080 (Teal accent)</div>
              <div><code className="text-foreground">--destructive</code>: #cc0000 (Error crimson)</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs uppercase">Dark Palette Tokens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5 text-muted-foreground text-[11px]">
              <div><code className="text-foreground">--background</code>: #181a1f (Dark canvas)</div>
              <div><code className="text-foreground">--surface</code>: #22252a (Elevated dark slab)</div>
              <div><code className="text-foreground">--surface-sunken</code>: #131519 (Recessed well)</div>
              <div><code className="text-foreground">--primary</code>: #3366cc (Hi-vis cyan-blue)</div>
              <div><code className="text-foreground">--secondary</code>: #208080 (Muted teal)</div>
              <div><code className="text-foreground">--destructive</code>: #e04040 (Vibrant alert red)</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. Tactile Bevel Primitives */}
      <section id="bevels" className="space-y-4 scroll-mt-20">
        <div className="flex items-center gap-2">
          <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
            03
          </span>
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            Tactile Bevel Primitives
          </h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Tactile pseudo-3D bevels are rendered using calibrated border tokens that simulate physical elevation:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bevel-raised p-4 bg-surface space-y-2">
            <div className="font-bold text-foreground">.bevel-raised</div>
            <p className="text-[11px] text-muted-foreground">
              Highlight top/left, shadow bottom/right. Simulates elevated buttons, windows, and panels.
            </p>
          </div>

          <div className="bevel-inset p-4 bg-surface space-y-2">
            <div className="font-bold text-foreground">.bevel-inset</div>
            <p className="text-[11px] text-muted-foreground">
              Shadow top/left, highlight bottom/right. Simulates sunken input fields, wells, and displays.
            </p>
          </div>

          <div className="bevel-pressed p-4 bg-surface space-y-2">
            <div className="font-bold text-foreground">.bevel-pressed</div>
            <p className="text-[11px] text-muted-foreground">
              Active depression state applied on user click or keypress with deep inner shadow.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Procedural Bayer Dither Patterns */}
      <section id="dithering" className="space-y-4 scroll-mt-20">
        <div className="flex items-center gap-2">
          <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
            04
          </span>
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            Procedural Bayer Dither Patterns
          </h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Ditherweb generates authentic ordered dithering using SVG data URIs based on classic 4×4 Bayer matrices.
          Dithering simulates optical shading gradients on limited-color framebuffers (CGA, EGA, VGA) without raster image bandwidth:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
          <div className="bevel-raised p-3 bg-surface space-y-2 flex flex-col">
            <div className="font-bold text-foreground text-[11px] uppercase">Bayer 4×4 Medium</div>
            <div className="bevel-inset h-20 w-full relative flex items-center justify-center overflow-hidden">
              <Dither pattern="bayer" intensity="medium" mode="standalone" className="h-full w-full" />
              <span className="bevel-inset bg-surface/90 px-1.5 py-0.5 text-[10px] font-bold absolute z-10">50% Density</span>
            </div>
            <code className="text-[10px] text-primary">&lt;Dither pattern=&quot;bayer&quot; /&gt;</code>
          </div>

          <div className="bevel-raised p-3 bg-surface space-y-2 flex flex-col">
            <div className="font-bold text-foreground text-[11px] uppercase">Checker Stipple</div>
            <div className="bevel-inset h-20 w-full relative flex items-center justify-center overflow-hidden">
              <Dither pattern="checker" intensity="medium" mode="standalone" className="h-full w-full" />
              <span className="bevel-inset bg-surface/90 px-1.5 py-0.5 text-[10px] font-bold absolute z-10">Checkerboard</span>
            </div>
            <code className="text-[10px] text-primary">&lt;Dither pattern=&quot;checker&quot; /&gt;</code>
          </div>

          <div className="bevel-raised p-3 bg-surface space-y-2 flex flex-col">
            <div className="font-bold text-foreground text-[11px] uppercase">Fine Stipple</div>
            <div className="bevel-inset h-20 w-full relative flex items-center justify-center overflow-hidden">
              <Dither pattern="fine" intensity="subtle" mode="standalone" className="h-full w-full" />
              <span className="bevel-inset bg-surface/90 px-1.5 py-0.5 text-[10px] font-bold absolute z-10">25% Density</span>
            </div>
            <code className="text-[10px] text-primary">&lt;Dither pattern=&quot;fine&quot; /&gt;</code>
          </div>

          <div className="bevel-raised p-3 bg-surface space-y-2 flex flex-col">
            <div className="font-bold text-foreground text-[11px] uppercase">Coarse Dense</div>
            <div className="bevel-inset h-20 w-full relative flex items-center justify-center overflow-hidden">
              <Dither pattern="dense" intensity="strong" mode="standalone" className="h-full w-full" />
              <span className="bevel-inset bg-surface/90 px-1.5 py-0.5 text-[10px] font-bold absolute z-10">75% Density</span>
            </div>
            <code className="text-[10px] text-primary">&lt;Dither pattern=&quot;dense&quot; /&gt;</code>
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed pt-1">
          Use the declarative <code className="text-foreground">&lt;Dither /&gt;</code> primitive to apply overlays or standalone textured canvases:
        </p>

        <CodeBlock
          code={`import { Dither } from "@ditherweb/ui";

// As a standalone textured canvas
<Dither pattern="bayer" intensity="medium" mode="standalone" className="h-32 w-full" />

// As an overlay on cards, images, or retro backdrops
<div className="relative p-6 bg-surface">
  <Dither pattern="checker" intensity="subtle" mode="overlay" />
  <div className="relative z-10">Protected Foreground Content</div>
</div>`}
          language="TSX"
          filename="components/dithered-card.tsx"
        />
      </section>

      {/* 5. Pixel Typography & Monospace Grids */}
      <section id="typography" className="space-y-4 scroll-mt-20">
        <div className="flex items-center gap-2">
          <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
            05
          </span>
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            Pixel Typography &amp; Monospace Grids
          </h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Ditherweb enforces a disciplined monospace font hierarchy designed for crisp legibility and authentic terminal alignment:
        </p>

        <div className="bevel-inset p-4 bg-surface space-y-3">
          <div className="flex flex-wrap items-baseline justify-between border-b border-border/40 pb-2">
            <span className="text-xs text-muted-foreground uppercase">Font Stack:</span>
            <code className="text-xs text-primary font-bold">
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace
            </code>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="bevel-raised p-3 bg-surface space-y-1">
              <div className="text-[10px] text-muted-foreground uppercase">Stepped Sizing</div>
              <div className="text-sm font-bold text-foreground">text-xs (12px) / text-sm (14px)</div>
              <p className="text-[10px] text-muted-foreground">Rigid integer pixel grid alignment</p>
            </div>

            <div className="bevel-raised p-3 bg-surface space-y-1">
              <div className="text-[10px] text-muted-foreground uppercase">Letter Spacing</div>
              <div className="text-sm font-bold text-foreground">tracking-tight / tracking-wide</div>
              <p className="text-[10px] text-muted-foreground">High-contrast retro terminal display</p>
            </div>

            <div className="bevel-raised p-3 bg-surface space-y-1">
              <div className="text-[10px] text-muted-foreground uppercase">Rendering Hints</div>
              <div className="text-sm font-bold text-foreground">image-rendering: pixelated</div>
              <p className="text-[10px] text-muted-foreground">Subpixel anti-aliasing control</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customizing & Overriding Tokens */}
      <section id="customizing" className="space-y-4 scroll-mt-20">
        <div className="flex items-center gap-2">
          <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
            06
          </span>
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            Customizing &amp; Overriding Tokens
          </h2>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          You can override tokens globally or scope them to specific container sub-trees:
        </p>

        <CodeBlock
          code={`/* Scope an amber CRT aesthetic to a specific terminal area */
.terminal-amber-theme {
  --primary: #ffaa00;
  --surface: #1a1400;
  --background: #0a0800;
  --bevel-light: #553a00;
  --bevel-dark: #221700;
}`}
          language="CSS"
          filename="app/terminal-theme.css"
        />
      </section>

      {/* Navigation Footer */}
      <div className="pt-6 border-t border-border flex justify-between items-center text-xs">
        <Link href="/docs/installation" className="text-muted-foreground hover:text-foreground">
          ← Installation
        </Link>
        <Link href="/docs/accessibility" className="text-primary font-bold hover:underline">
          Next: Accessibility Standards →
        </Link>
      </div>
    </div>
  );
}
