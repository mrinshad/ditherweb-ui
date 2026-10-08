import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card, CardHeader, CardTitle, CardContent, Separator } from "@ditherweb/ui";
import { DocsLayout } from "@/components/docs/docs-layout";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Accessibility Standards — Ditherweb Documentation",
  description:
    "How Ditherweb combines 1990s computing aesthetics with modern W3C WCAG accessibility standards, keyboard navigation, and reduced motion.",
  alternates: {
    canonical: "/docs/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <DocsLayout breadcrumbs={[{ label: "Guides", href: "/docs" }, { label: "Accessibility" }]}>
      <div className="space-y-10 font-mono">
        <div className="space-y-3">
          <Badge variant="primary">Guide</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">
            Accessibility Standards
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Early Web interfaces were often inaccessible by modern metrics.
            Ditherweb strictly couples authentic retro visuals with uncompromising modern accessibility standards.
          </p>
        </div>

        <Separator />

        {/* 1. Semantic Foundation */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            1. Semantic HTML Elements
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Every component uses native semantic HTML elements whenever possible:
          </p>
          <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1 leading-relaxed">
            <li><code className="text-foreground">&lt;button&gt;</code> for buttons and toggles with native keyboard focus and Enter/Space handling.</li>
            <li><code className="text-foreground">&lt;input&gt;</code> and <code className="text-foreground">&lt;textarea&gt;</code> for form fields.</li>
            <li><code className="text-foreground">&lt;label&gt;</code> with <code className="text-foreground">htmlFor</code> to guarantee programmatic control associations.</li>
            <li><code className="text-foreground">&lt;table&gt;</code>, <code className="text-foreground">&lt;th scope=&quot;col&quot;&gt;</code>, and <code className="text-foreground">&lt;td&gt;</code> for data grids.</li>
            <li><code className="text-foreground">&lt;nav&gt;</code>, <code className="text-foreground">&lt;aside&gt;</code>, and <code className="text-foreground">&lt;main&gt;</code> landmarks for screen reader navigation.</li>
          </ul>
        </section>

        {/* 2. Keyboard Navigation */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            2. Keyboard Navigation &amp; Focus Trapping
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            All interactive components support full keyboard navigation without mouse reliance:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs uppercase">Roving Tabindex</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground leading-relaxed">
                Tabs, Menubars, RadioGroups, and Trees use arrow key navigation to traverse items while keeping a single Tab stop.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs uppercase">Overlay Focus Trapping</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground leading-relaxed">
                Dialog, AlertDialog, and Drawer trap focus inside the modal frame while open, dismiss on Escape, and restore focus to trigger on close.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3. High-Contrast Focus Indicators */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            3. High-Contrast Focus Rings
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Rather than eliminating outlines, Ditherweb applies calibrated high-contrast focus rings (<code className="text-foreground">focus-visible:outline-ring</code>)
            that stand out sharply against both light grey substrates and dark panels:
          </p>

          <CodeBlock
            code={`/* High-visibility focus indicator applied to all interactive controls */
.focus-ring {
  outline: 2px solid var(--ring);
  outline-offset: 1px;
}`}
            language="CSS"
            filename="packages/ui/src/styles/tokens.css"
          />
        </section>

        {/* 4. Motion & Reduced Motion */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            4. Respect for Reduced Motion
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Decorative effects such as Marquee scrolling, CRT screen flicker, Blink text, and Matrix digital rain
            explicitly detect and honor the user&apos;s OS <code className="text-foreground">prefers-reduced-motion</code> setting:
          </p>

          <CodeBlock
            code={`@media (prefers-reduced-motion: reduce) {
  .marquee-track,
  .blink-text,
  .crt-flicker {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`}
            language="CSS"
            filename="packages/ui/src/styles/effects.css"
          />
        </section>

        {/* Navigation Footer */}
        <div className="pt-6 border-t border-border flex justify-between items-center text-xs">
          <Link href="/docs/theming" className="text-muted-foreground hover:text-foreground">
            ← Theming &amp; Tokens
          </Link>
          <Link href="/docs/composition" className="text-primary font-bold hover:underline">
            Next: Composition Patterns →
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
