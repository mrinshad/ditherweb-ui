import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card, CardHeader, CardTitle, CardContent, Separator } from "@ditherweb/ui";
import { DocsLayout } from "@/components/docs/docs-layout";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Theming & Tokens — Ditherweb Documentation",
  description:
    "Design tokens, CSS custom properties, light and dark themes, tactile bevels, and procedural Bayer dither matrices in Ditherweb.",
  alternates: {
    canonical: "/docs/theming",
  },
};

export default function ThemingPage() {
  return (
    <DocsLayout breadcrumbs={[{ label: "Guides", href: "/docs" }, { label: "Theming & Tokens" }]}>
      <div className="space-y-10 font-mono">
        <div className="space-y-3">
          <Badge variant="primary">Guide</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">
            Theming &amp; Design Tokens
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Understand how Ditherweb leverages CSS custom properties to drive tactile bevels,
            light/dark theme switching, and procedural Bayer dither backgrounds.
          </p>
        </div>

        <Separator />

        {/* 1. Theme Switching Architecture */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            1. Theme Switching Architecture
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Ditherweb uses a zero-runtime CSS class approach for theme switching. Adding or removing the
            <code className="text-foreground">.dark</code> class on the root <code className="text-foreground">&lt;html&gt;</code> element
            switches all tokens simultaneously with zero flash:
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
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            2. Semantic Color Tokens
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Every component binds to standardized semantic tokens declared in <code className="text-foreground">app/globals.css</code>:
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
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            3. Tactile Bevel Primitives
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Tactile pseudo-3D bevels are rendered using calibrated border tokens:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bevel-raised p-4 bg-surface space-y-2">
              <div className="font-bold text-foreground">.bevel-raised</div>
              <p className="text-[11px] text-muted-foreground">
                Highlight top/left, shadow bottom/right. Simulates elevated buttons and windows.
              </p>
            </div>

            <div className="bevel-inset p-4 bg-surface space-y-2">
              <div className="font-bold text-foreground">.bevel-inset</div>
              <p className="text-[11px] text-muted-foreground">
                Shadow top/left, highlight bottom/right. Simulates sunken input fields and wells.
              </p>
            </div>

            <div className="bevel-pressed p-4 bg-surface space-y-2">
              <div className="font-bold text-foreground">.bevel-pressed</div>
              <p className="text-[11px] text-muted-foreground">
                Active depression state applied on user click or keypress.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Overriding Tokens */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            4. Customizing &amp; Overriding Tokens
          </h2>
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
    </DocsLayout>
  );
}
