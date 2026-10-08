"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Alert,
  AlertTitle,
  AlertDescription,
} from "@ditherweb/ui";
import Image from "next/image";

export default function HomePage() {
  const [activeDither, setActiveDither] = useState<"fine" | "medium" | "coarse" | "diagonal">("fine");
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const sampleSnippet = `import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@ditherweb/ui";

export default function RetroPanel() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Telemetry Node</CardTitle>
          <Badge variant="success">ONLINE</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Transmit Packet</Button>
      </CardContent>
    </Card>
  );
}`;

  const copyCode = (code: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopyStatus(id);
      setTimeout(() => setCopyStatus(null), 2000);
    }
  };

  return (
    <div className="flex flex-col space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="w-full border-b border-border bg-background dark:bg-black text-foreground dark:text-white relative overflow-hidden min-h-[calc(100dvh-3.5rem)] flex items-center py-12 sm:py-16 lg:py-0">
        {/* Full Hero Artwork Background (Light & Dark, No Feathering) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Light Mode Artwork */}
          <Image
            src="/images/hero-artwork-light.jpg"
            alt="Ditherweb retro workstation in daylight"
            fill
            priority
            sizes="100vw"
            className="object-cover object-left block dark:hidden select-none"
          />
          {/* Dark Mode Artwork */}
          <Image
            src="/images/hero-artwork-dark.jpg"
            alt="Ditherweb retro workstation at night"
            fill
            priority
            sizes="100vw"
            className="object-cover object-left hidden dark:block select-none"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:gap-8 xl:gap-12 lg:grid-cols-12">
            {/* Left Column: Headlines & CTAs */}
            <div className="space-y-6 lg:col-span-6 xl:col-span-6 z-10">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary" className="bg-black text-white dark:bg-white dark:text-black font-mono font-bold text-xs uppercase px-2.5 py-0.5 rounded-none">
                  Next-Gen Retro UI
                </Badge>
                <Badge variant="outline" className="border-border dark:border-zinc-700 text-muted-foreground dark:text-zinc-400 font-mono text-xs uppercase px-2.5 py-0.5 rounded-none">
                  React 19 • TypeScript • Tailwind
                </Badge>
              </div>

              <div className="space-y-4">
                <h1 className="font-mono text-3xl sm:text-4xl lg:text-[40px] xl:text-[45px] font-extrabold uppercase tracking-tight text-foreground dark:text-white leading-[1.1]">
                  DITHERWEB — RETRO<br />
                  APPEARANCE.<br />
                  MODERN ENGINEERING.
                </h1>
                <p className="font-mono text-sm sm:text-base text-muted-foreground dark:text-zinc-400 leading-relaxed max-w-xl">
                  A retro-inspired React UI framework and component library built with clean primitives, modern tooling, and zero runtime bloat. Classic aesthetics. Production-ready engineering.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/components">
                  <Button variant="primary" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                    Explore Components →
                  </Button>
                </Link>
                <Link href="/playground">
                  <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 bg-surface/80 backdrop-blur-sm">
                    Interactive Playground
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Value Pillars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8 space-y-2 text-center sm:text-left">
          <Badge variant="secondary">
            Core Philosophy
          </Badge>
          <h2 className="font-mono text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
            Why Ditherweb?
          </h2>
          <p className="font-mono text-xs text-muted-foreground sm:text-sm max-w-2xl">
            Most retro styling online is either an unmaintained parody or a fragile CSS hack.
            Ditherweb treats nostalgic computing aesthetics as a first-class, production-grade design system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <span className="bevel-raised inline-flex h-8 w-8 items-center justify-center bg-primary text-xs font-mono font-bold text-primary-foreground mb-2">
                01
              </span>
              <CardTitle className="text-sm font-mono uppercase">
                Authentic Retro Primitives
              </CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-xs text-muted-foreground leading-relaxed">
              Ordered 4x4 Bayer dithering matrices, hard 2px beveled edges, and calibrated Web-safe palettes—without blurry skeuomorphic shortcuts.
            </CardContent>
          </Card>

          <Card className="hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <span className="bevel-raised inline-flex h-8 w-8 items-center justify-center bg-secondary text-xs font-mono font-bold text-secondary-foreground mb-2">
                02
              </span>
              <CardTitle className="text-sm font-mono uppercase">
                Strict Engineering
              </CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-xs text-muted-foreground leading-relaxed">
              Written in modern TypeScript and React 19. Type-safe variants, forwardRef on every interactive element, and full keyboard navigation.
            </CardContent>
          </Card>

          <Card className="hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <span className="bevel-raised inline-flex h-8 w-8 items-center justify-center bg-muted text-xs font-mono font-bold text-foreground mb-2">
                03
              </span>
              <CardTitle className="text-sm font-mono uppercase">
                Broad Web Vocabulary
              </CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-xs text-muted-foreground leading-relaxed">
              Not merely a Windows 95 clone. Draws deeply from GeoCities homepages, early portals, Web rings, 88x31 badges, and CRT terminals.
            </CardContent>
          </Card>

          <Card className="hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <span className="bevel-raised inline-flex h-8 w-8 items-center justify-center bg-muted text-xs font-mono font-bold text-foreground mb-2">
                04
              </span>
              <CardTitle className="text-sm font-mono uppercase">
                Zero Runtime Bloat
              </CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-xs text-muted-foreground leading-relaxed">
              Procedural SVG data-URI patterns, CSS bevel classes, and pure HTML/React elements without heavy runtime animation dependencies.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. Visual Language Lab */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="bevel-raised bg-surface p-6 sm:p-8 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="primary">
                Design System
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                Phase 1 Primitives
              </span>
            </div>
            <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              The Ditherweb Visual Language Lab
            </h2>
            <p className="font-mono text-xs text-muted-foreground max-w-3xl">
              Inspect the foundational token architecture: procedural ordered dithering, tactile bevel shadows, and system color mapping.
            </p>
          </div>

          {/* Dithering Showcase */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                1. Procedural Bayer Dither Matrices
              </h3>
              <div className="flex flex-wrap items-center gap-1 font-mono text-xs">
                {(["fine", "medium", "coarse", "diagonal"] as const).map((density) => (
                  <button
                    key={density}
                    type="button"
                    onClick={() => setActiveDither(density)}
                    className={`px-2 py-0.5 uppercase ${
                      activeDither === density
                        ? "bevel-inset font-bold text-primary bg-muted"
                        : "bevel-raised text-muted-foreground"
                    }`}
                  >
                    {density}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`bevel-inset h-32 w-full flex items-center justify-center transition-all ${
                activeDither === "fine"
                  ? "bg-dither-fine"
                  : activeDither === "medium"
                  ? "bg-dither-medium"
                  : activeDither === "coarse"
                  ? "bg-dither-coarse"
                  : "bg-dither-diagonal"
              }`}
            >
              <div className="bevel-raised bg-surface/90 px-4 py-2 font-mono text-xs text-foreground font-bold shadow-md">
                Pattern: .bg-dither-{activeDither}
              </div>
            </div>
          </div>

          {/* Bevel Primitives Showcase */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              2. Tactile Bevel Primitives
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 font-mono text-xs text-center">
              <div className="bevel-raised p-4 bg-surface flex flex-col justify-center items-center gap-1 select-none">
                <span className="font-bold">Raised</span>
                <span className="text-[10px] text-muted-foreground">bevel-raised</span>
              </div>
              <div className="bevel-inset p-4 bg-surface flex flex-col justify-center items-center gap-1 select-none">
                <span className="font-bold">Inset</span>
                <span className="text-[10px] text-muted-foreground">bevel-inset</span>
              </div>
              <div className="bevel-ridge p-4 bg-surface flex flex-col justify-center items-center gap-1 select-none">
                <span className="font-bold">Ridge</span>
                <span className="text-[10px] text-muted-foreground">bevel-ridge</span>
              </div>
              <div className="bevel-groove p-4 bg-surface flex flex-col justify-center items-center gap-1 select-none">
                <span className="font-bold">Groove</span>
                <span className="text-[10px] text-muted-foreground">bevel-groove</span>
              </div>
              <div className="bevel-pressed p-4 bg-surface flex flex-col justify-center items-center gap-1 select-none">
                <span className="font-bold">Pressed</span>
                <span className="text-[10px] text-muted-foreground">bevel-pressed</span>
              </div>
              <div className="bevel-flat p-4 bg-surface flex flex-col justify-center items-center gap-1 select-none">
                <span className="font-bold">Flat</span>
                <span className="text-[10px] text-muted-foreground">bevel-flat</span>
              </div>
            </div>
          </div>

          {/* Web-Safe Palette */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              3. Calibrated System Colors
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 font-mono text-xs">
              <div className="bevel-inset p-2 bg-primary text-primary-foreground flex flex-col justify-between h-16">
                <span className="font-bold">Primary</span>
                <span className="text-[10px] opacity-80">--primary</span>
              </div>
              <div className="bevel-inset p-2 bg-secondary text-secondary-foreground flex flex-col justify-between h-16">
                <span className="font-bold">Secondary</span>
                <span className="text-[10px] opacity-80">--secondary</span>
              </div>
              <div className="bevel-inset p-2 bg-accent text-accent-foreground flex flex-col justify-between h-16">
                <span className="font-bold">Accent</span>
                <span className="text-[10px] opacity-80">--accent</span>
              </div>
              <div className="bevel-inset p-2 bg-muted text-muted-foreground flex flex-col justify-between h-16">
                <span className="font-bold">Muted</span>
                <span className="text-[10px] opacity-80">--muted</span>
              </div>
              <div className="bevel-inset p-2 bg-destructive text-destructive-foreground flex flex-col justify-between h-16">
                <span className="font-bold">Destructive</span>
                <span className="text-[10px] opacity-80">--destructive</span>
              </div>
              <div className="bevel-inset p-2 bg-surface text-foreground flex flex-col justify-between h-16">
                <span className="font-bold">Surface</span>
                <span className="text-[10px] text-muted-foreground">--surface</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curated Component Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="default">
              Phase 2 Suite
            </Badge>
            <h2 className="font-mono text-2xl font-bold uppercase tracking-tight text-foreground">
              Component Highlights
            </h2>
            <p className="font-mono text-xs text-muted-foreground max-w-xl">
              Preview the first 10 foundational components in action. Built for seamless composition.
            </p>
          </div>
          <Link href="/components">
            <Button variant="outline" size="sm">
              View All 10 in Catalog →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Highlight 1: Button Matrix */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono uppercase">
                Buttons & Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" size="sm">
                  Primary
                </Button>
                <Button variant="default" size="sm">
                  Default
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
                <Button variant="destructive" size="sm">
                  Destructive
                </Button>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground">
                Tactile 2px borders with realistic active pressed transformation.
              </p>
            </CardContent>
          </Card>

          {/* Highlight 2: Badges & Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono uppercase">
                Badges & Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="success">OK (200)</Badge>
                <Badge variant="warning">SLOW (4800)</Badge>
                <Badge variant="destructive">ERROR (500)</Badge>
                <Badge variant="info">INFO</Badge>
                <Badge variant="primary">FEATURE</Badge>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground">
                High-contrast retro pixel labels with raised bevel framing.
              </p>
            </CardContent>
          </Card>

          {/* Highlight 3: Alerts & Messaging */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono uppercase">
                Alerts & Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Alert variant="warning" className="py-2">
                <AlertTitle className="text-xs font-mono">MODEM DISCONNECT</AlertTitle>
                <AlertDescription className="text-xs font-mono">
                  Carrier wave lost at line 14.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Topical Concept: What is Dithering in Ditherweb */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="bevel-raised bg-card p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">Computer Graphics Heritage</Badge>
            <Badge variant="outline">Ordered Bayer Dithering</Badge>
          </div>
          <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
            What is Dithering in Ditherweb?
          </h2>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Ditherweb takes its name from dithering—a classic computer graphics technique developed to create the illusion of color depth on early palette-constrained displays using geometric pixel arrangements like 4×4 Bayer matrices. Ditherweb brings that tactile, lo-fi aesthetic into modern web applications using pure CSS custom properties, zero-dependency SVG textures, and accessible React 19 components.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
            <Link href="/components" className="text-primary hover:underline font-bold">
              Explore all 46 Ditherweb components →
            </Link>
            <Link href="/docs#dithering" className="text-muted-foreground hover:text-foreground hover:underline">
              Read Ditherweb dithering algorithms guide →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Developer Experience & Quick Start */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="bevel-inset bg-surface-sunken p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <Badge variant="outline">
                Developer Workflow
              </Badge>
              <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                Quick Integration
              </h2>
              <p className="font-mono text-xs text-muted-foreground">
                Copy-paste or import directly into your Next.js project. No opaque bundlers required.
              </p>
            </div>
            <button
              type="button"
              onClick={() => copyCode(sampleSnippet, "sample-code")}
              className="bevel-raised active:bevel-pressed px-3 py-1 font-mono text-xs font-bold self-start sm:self-auto select-none"
            >
              {copyStatus === "sample-code" ? "✓ Copied!" : "Copy Code"}
            </button>
          </div>

          <div className="bevel-inset bg-background p-4 overflow-x-auto">
            <pre className="font-mono text-xs text-foreground leading-relaxed">
              <code>{sampleSnippet}</code>
            </pre>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 font-mono text-xs text-muted-foreground">
            <span>Requires React 19 + Tailwind CSS + clsx/tailwind-merge.</span>
            <Link href="/docs" className="text-primary hover:underline font-bold">
              Read Complete Documentation Guide →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
