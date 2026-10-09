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
} from "@ditherweb/ui";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Ditherweb Documentation — Retro UI Framework for React",
  description:
    "Official documentation for Ditherweb: learn how to build retro-inspired, accessible user interfaces with modern React 19 primitives, CSS tokens, and procedural Bayer dithering.",
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "Ditherweb Documentation — Retro UI Framework for React",
    description:
      "Official documentation for Ditherweb: learn how to build retro-inspired, accessible user interfaces with modern React 19 primitives, CSS tokens, and procedural Bayer dithering.",
    url: "https://ditherweb.mrinshad.site/docs",
    images: ["/og-image.png"],
  },
};

export default function DocsPage() {
  return (
    <div className="space-y-12 font-mono">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Documentation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">Documentation</Badge>
            <span className="text-xs text-muted-foreground">Version 0.1.0-alpha • 97 Production Primitives</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-foreground">
            Documentation
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Get started with Ditherweb and learn how to build retro-inspired, tactile interfaces
            with modern React engineering, CSS design tokens, and rigorous accessibility standards.
          </p>
        </div>

        <Separator />

        {/* 1. Introduction */}
        <section id="introduction" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              01
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Introduction
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Ditherweb is a comprehensive React UI framework combining the tactile authenticity of early
            computing and the early Internet with contemporary frontend engineering. Rather than treating
            nostalgic design as parody or superficial cosmetic overlay, Ditherweb provides 96 typed,
            accessible, production-grade components engineered for real-world applications.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bevel-raised p-4 bg-surface space-y-1.5">
              <div className="font-bold text-foreground text-xs uppercase">Authentic Aesthetics</div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Calibrated pseudo-3D bevels, ordered Bayer dithering stippling, and pixel-precise contrast.
              </p>
            </div>
            <div className="bevel-raised p-4 bg-surface space-y-1.5">
              <div className="font-bold text-foreground text-xs uppercase">Modern React 19</div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Full TypeScript typings, React 19 support, composable primitives, and zero runtime bloat.
              </p>
            </div>
            <div className="bevel-raised p-4 bg-surface space-y-1.5">
              <div className="font-bold text-foreground text-xs uppercase">Uncompromising A11y</div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Full keyboard navigation, explicit ARIA roles, high-contrast focus rings, and reduced motion.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Quick Start */}
        <section id="quickstart" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              02
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Quick Start
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Install the package into your React or Next.js project via your preferred package manager:
          </p>

          <CodeBlock
            code="npm install @ditherweb/ui"
            language="BASH"
            filename="Terminal"
          />

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
            Import components directly and render them with type-safe props:
          </p>

          <CodeBlock
            code={`import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@ditherweb/ui";

export function SystemMonitor() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>TELEMETRY NODE</CardTitle>
          <Badge variant="success">ONLINE</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-xs text-muted-foreground">
          All subsystems operating at nominal clock frequency.
        </p>
        <Button variant="primary" onClick={() => alert("Command queued.")}>
          Transmit Packet
        </Button>
      </CardContent>
    </Card>
  );
}`}
            language="TSX"
            filename="src/components/system-monitor.tsx"
          />
        </section>

        {/* 3. Core Concepts */}
        <section id="core-concepts" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              03
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Core Concepts
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Ditherweb is designed around six foundational engineering principles:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-bold uppercase">1. Composability First</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground leading-relaxed">
                Components are composable primitives, not monolithic templates. Overlays compose with panels,
                terminals slot inside CRT monitors, and dithering wraps any arbitrary surface.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-bold uppercase">2. CSS Custom Property Tokens</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground leading-relaxed">
                Colors, bevel coordinates, and surface textures are governed by semantic CSS variables.
                Consumers can theme the entire system by overriding token definitions.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-bold uppercase">3. Semantic HTML &amp; ARIA</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground leading-relaxed">
                Underneath retro styling sits native semantic HTML (<code className="text-foreground">&lt;button&gt;</code>, <code className="text-foreground">&lt;input&gt;</code>, <code className="text-foreground">&lt;dialog&gt;</code>).
                Screen readers experience standard accessible landmarks and announcements.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-bold uppercase">4. CSS-First Effects</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground leading-relaxed">
                Scanlines, dithering stippling, and bevel geometry are implemented via lightweight SVGs and CSS
                gradients, avoiding costly runtime raster computations.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 4. Visual System */}
        <section id="visual-system" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              04
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Visual System
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            The visual system marries classic desktop interface geometry with restrained retro Web treatments:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bevel-raised p-4 bg-surface space-y-2">
              <div className="font-bold text-foreground uppercase">Tactile Bevels</div>
              <p className="text-[11px] text-muted-foreground">
                Pseudo-3D bevels use calibrated 1px highlight and shadow borders to convey depth without drop shadow blur.
              </p>
              <div className="flex gap-2 pt-1">
                <span className="bevel-raised px-2 py-1 bg-surface font-bold text-[10px]">Raised</span>
                <span className="bevel-inset px-2 py-1 bg-surface font-bold text-[10px]">Inset</span>
              </div>
            </div>

            <div id="dithering" className="bevel-raised p-4 bg-surface space-y-2 scroll-mt-20">
              <div className="font-bold text-foreground uppercase">Bayer Dithering</div>
              <p className="text-[11px] text-muted-foreground">
                Ordered dithering matrices emulate classic limited-color framebuffers (EGA, VGA, 16-color palettes).
              </p>
              <div className="bevel-inset h-8 w-full bg-dither-medium" />
            </div>

            <div className="bevel-raised p-4 bg-surface space-y-2">
              <div className="font-bold text-foreground uppercase">Pixel Typography</div>
              <p className="text-[11px] text-muted-foreground">
                Rigorous monospace font scales provide clear grid alignment across terminals and dialog boxes.
              </p>
              <code className="text-primary font-bold text-[11px]">640x480 @ 60Hz</code>
            </div>
          </div>
        </section>

        {/* 5. Development Philosophy */}
        <section id="philosophy" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              05
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Development Philosophy
            </h2>
          </div>
          <div className="bevel-inset p-5 bg-surface/50 border border-border space-y-3">
            <div className="text-primary font-bold text-sm tracking-wide uppercase">
              &quot;Retro appearance. Modern engineering.&quot;
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We reject the false dichotomy that retro user interfaces must be buggy toys or fragile CSS hacks.
              By applying contemporary software discipline—strict TypeScript typings, W3C accessibility compliance,
              zero-dependency architectures, and composable primitive boundaries—Ditherweb demonstrates that early
              computing aesthetics can be as robust, ergonomic, and reliable as any modern enterprise design system.
            </p>
          </div>
        </section>

        {/* 6. Guide Index */}
        <section id="guides-index" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              06
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Topic Guides &amp; Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Dive deeper into specific aspects of the framework:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/docs/installation"
              className="bevel-raised hover:bevel-pressed p-4 bg-surface block transition-colors group"
            >
              <div className="font-bold text-foreground text-xs uppercase group-hover:text-primary">
                Installation Guide →
              </div>
              <p className="text-[11px] text-muted-foreground pt-1">
                Install dependencies, configure Tailwind CSS, import stylesheet tokens, and verify Next.js integration.
              </p>
            </Link>

            <Link
              href="/docs/theming"
              className="bevel-raised hover:bevel-pressed p-4 bg-surface block transition-colors group"
            >
              <div className="font-bold text-foreground text-xs uppercase group-hover:text-primary">
                Theming &amp; Tokens →
              </div>
              <p className="text-[11px] text-muted-foreground pt-1">
                Learn how CSS variables, light/dark mode toggling, and bevel highlight/shadow tokens function.
              </p>
            </Link>

            <Link
              href="/docs/accessibility"
              className="bevel-raised hover:bevel-pressed p-4 bg-surface block transition-colors group"
            >
              <div className="font-bold text-foreground text-xs uppercase group-hover:text-primary">
                Accessibility Standards →
              </div>
              <p className="text-[11px] text-muted-foreground pt-1">
                Keyboard navigation patterns, focus visibility, ARIA attributes, and reduced-motion support.
              </p>
            </Link>

            <Link
              href="/docs/composition"
              className="bevel-raised hover:bevel-pressed p-4 bg-surface block transition-colors group"
            >
              <div className="font-bold text-foreground text-xs uppercase group-hover:text-primary">
                Composition Patterns →
              </div>
              <p className="text-[11px] text-muted-foreground pt-1">
                Real-world examples combining overlays, terminals, CRT shaders, and form controls into cohesive UIs.
              </p>
            </Link>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-border flex flex-wrap justify-between items-center gap-4 text-xs">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            ← Return to Homepage
          </Link>
          <Link href="/components" className="text-primary font-bold hover:underline">
            Explore 96 Component Primitives →
          </Link>
        </div>
      </div>
  );
}
