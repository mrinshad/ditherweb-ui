"use client";

/**
 * Ditherweb — Phase 1 Showcase Page
 *
 * Visual foundation showcase validating:
 * - Theme switching (light / dark) with zero hydration mismatch
 * - Semantic color palette & status tokens
 * - Border primitives & pixel borders
 * - Bevel surfaces (raised, inset, pressed, flat)
 * - Hard shadow scale & pixel offsets
 * - Semantic typography hierarchy
 * - CSS dither pattern primitives & overlay blending
 */

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("ditherweb-theme", isDark ? "dark" : "light");
  } catch {
    // localStorage unavailable
  }
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:py-20">
      <main className="w-full max-w-4xl space-y-16">
        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-display font-bold tracking-tight text-foreground">
                Ditherweb
              </h1>
              <p className="text-small font-mono text-muted-foreground mt-1">
                Retro appearance. Modern engineering.
              </p>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="
                bevel-raised active:bevel-pressed
                px-4 py-2 font-mono text-small font-medium text-foreground
                transition-transform select-none cursor-pointer
                focus-visible:outline-2 focus-visible:outline-ring
              "
              aria-label="Toggle color theme"
            >
              <span className="inline dark:hidden" aria-hidden="true">☀ </span>
              <span className="hidden dark:inline" aria-hidden="true">☾ </span>
              <span className="inline dark:hidden">Switch to Dark</span>
              <span className="hidden dark:inline">Switch to Light</span>
            </button>
          </div>

          <div className="bevel-inset p-4 relative overflow-hidden bg-surface">
            <div className="dither-checker dither-overlay opacity-30" />
            <p className="text-body text-foreground relative z-10 leading-relaxed">
              Phase 1 Visual Foundation. Defining the design-system primitives—colors,
              borders, bevels, hard shadows, typography, and CSS dither patterns—before
              building the component library.
            </p>
          </div>
        </header>

        {/* 1. Color System */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              1. Semantic Color Tokens
            </h2>
            <p className="text-caption">
              Perceptually uniform oklch palette tuned for CRT warmth in light & dark modes.
            </p>
          </div>

          <div>
            <h3 className="text-caption uppercase tracking-wider font-mono mb-2">Core & Surfaces</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
              <Swatch name="background" className="bg-background text-foreground border border-border" />
              <Swatch name="foreground" className="bg-foreground text-background" />
              <Swatch name="surface" className="bg-surface text-surface-foreground border border-border" />
              <Swatch name="surface-elevated" className="bg-surface-elevated text-surface-elevated-foreground border border-border" />
              <Swatch name="card" className="bg-card text-card-foreground border border-border" />
              <Swatch name="popover" className="bg-popover text-popover-foreground border border-border" />
            </div>
          </div>

          <div>
            <h3 className="text-caption uppercase tracking-wider font-mono mb-2">Interactive & Brand</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
              <Swatch name="primary" className="bg-primary text-primary-foreground" />
              <Swatch name="secondary" className="bg-secondary text-secondary-foreground border border-border" />
              <Swatch name="muted" className="bg-muted text-muted-foreground border border-border" />
              <Swatch name="accent" className="bg-accent text-accent-foreground" />
              <Swatch name="border" className="bg-border text-foreground" />
              <Swatch name="border-strong" className="bg-border-strong text-background" />
            </div>
          </div>

          <div>
            <h3 className="text-caption uppercase tracking-wider font-mono mb-2">Semantic Status</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Swatch name="destructive" className="bg-destructive text-destructive-foreground" />
              <Swatch name="success" className="bg-success text-success-foreground" />
              <Swatch name="warning" className="bg-warning text-warning-foreground" />
              <Swatch name="info" className="bg-info text-info-foreground" />
            </div>
          </div>
        </section>

        {/* 2. Bevel System */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              2. Bevel System
            </h2>
            <p className="text-caption">
              Classic raised/inset/pressed/flat surfaces using edge-lighting contrast. Zero images, zero JS.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="bevel-raised p-4 space-y-2">
              <span className="font-mono text-small font-semibold">.bevel-raised</span>
              <p className="text-caption">Light top/left, dark bottom/right. For buttons & dialog frames.</p>
            </div>
            <div className="bevel-inset p-4 space-y-2">
              <span className="font-mono text-small font-semibold">.bevel-inset</span>
              <p className="text-caption">Dark top/left, light bottom/right. For wells, viewports & text inputs.</p>
            </div>
            <div className="bevel-pressed p-4 space-y-2">
              <span className="font-mono text-small font-semibold">.bevel-pressed</span>
              <p className="text-caption">Recessed face background with sunken lighting. For active button states.</p>
            </div>
            <div className="bevel-flat p-4 space-y-2">
              <span className="font-mono text-small font-semibold">.bevel-flat</span>
              <p className="text-caption">Face background with flat 2px border. For neutral toolbars & panels.</p>
            </div>
          </div>
        </section>

        {/* 3. Border System */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              3. Border System
            </h2>
            <p className="text-caption">
              Crisp edges with no rounded corners. Subpixel-free pixel borders via inset shadows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="border border-default bg-surface p-4 space-y-1">
              <p className="font-mono text-small font-semibold">.border-default</p>
              <p className="text-caption">Standard 1px structural separator.</p>
            </div>
            <div className="border-2 border-strong bg-surface p-4 space-y-1">
              <p className="font-mono text-small font-semibold">.border-strong</p>
              <p className="text-caption">High-contrast 2px boundary.</p>
            </div>
            <div className="border-raised bg-surface p-4 space-y-1">
              <p className="font-mono text-small font-semibold">.border-raised</p>
              <p className="text-caption">3D raised border on custom background.</p>
            </div>
            <div className="border-inset bg-surface p-4 space-y-1">
              <p className="font-mono text-small font-semibold">.border-inset</p>
              <p className="text-caption">3D sunken border on custom background.</p>
            </div>
            <div className="pixel-border bg-surface p-4 space-y-1">
              <p className="font-mono text-small font-semibold">.pixel-border</p>
              <p className="text-caption">Non-subpixel 1px inset boundary.</p>
            </div>
            <div className="pixel-border-strong bg-surface p-4 space-y-1">
              <p className="font-mono text-small font-semibold">.pixel-border-strong</p>
              <p className="text-caption">High-contrast 1px pixel edge.</p>
            </div>
          </div>
        </section>

        {/* 4. Shadow System */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              4. Hard Shadow System
            </h2>
            <p className="text-caption">
              Crisp pixel offsets instead of modern diffuse blurs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            <div className="border border-border bg-card p-3 shadow-hard-sm">
              <p className="font-mono text-caption font-semibold">hard-sm</p>
              <p className="text-caption">1px 1px</p>
            </div>
            <div className="border border-border bg-card p-3 shadow-hard">
              <p className="font-mono text-caption font-semibold">hard</p>
              <p className="text-caption">2px 2px</p>
            </div>
            <div className="border border-border bg-card p-3 shadow-hard-md">
              <p className="font-mono text-caption font-semibold">hard-md</p>
              <p className="text-caption">3px 3px</p>
            </div>
            <div className="border border-border bg-card p-3 shadow-hard-lg">
              <p className="font-mono text-caption font-semibold">hard-lg</p>
              <p className="text-caption">4px 4px</p>
            </div>
            <div className="border border-border bg-card p-3 shadow-hard-xl">
              <p className="font-mono text-caption font-semibold">hard-xl</p>
              <p className="text-caption">6px 6px</p>
            </div>
            <div className="border border-border bg-card p-3 shadow-inset">
              <p className="font-mono text-caption font-semibold">inset</p>
              <p className="text-caption">inset 2px</p>
            </div>
          </div>
        </section>

        {/* 5. Typography System */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              5. Semantic Typography
            </h2>
            <p className="text-caption">
              Robust system font stacks maintaining crisp readability across devices.
            </p>
          </div>

          <div className="border border-border bg-card p-6 space-y-4">
            <div>
              <span className="font-mono text-caption text-muted-foreground block mb-1">.text-display</span>
              <p className="text-display text-foreground">Early Web & Retro Computing</p>
            </div>
            <div>
              <span className="font-mono text-caption text-muted-foreground block mb-1">.text-heading</span>
              <p className="text-heading text-foreground">Section Heading: Visual Language</p>
            </div>
            <div>
              <span className="font-mono text-caption text-muted-foreground block mb-1">.text-body</span>
              <p className="text-body text-foreground leading-normal">
                Ditherweb combines the tactile precision of bitmap-era operating systems with
                responsive, accessible React engineering.
              </p>
            </div>
            <div>
              <span className="font-mono text-caption text-muted-foreground block mb-1">.text-small</span>
              <p className="text-small text-muted-foreground">
                Secondary descriptive copy for metadata, author info, or subtle guidance.
              </p>
            </div>
            <div>
              <span className="font-mono text-caption text-muted-foreground block mb-1">.text-caption</span>
              <p className="text-caption">
                Caption text for swatches, footnote disclaimers, and micro-labels.
              </p>
            </div>
            <div>
              <span className="font-mono text-caption text-muted-foreground block mb-1">.text-code / .font-code</span>
              <p className="text-code bg-muted px-2 py-1 inline-block border border-border">
                const dither = {`{ pattern: 'bayer-4x4', density: 0.25 }`};
              </p>
            </div>
          </div>
        </section>

        {/* 6. Dither Primitives */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              6. CSS Dither Primitives
            </h2>
            <p className="text-caption">
              Lightweight, theme-aware SVG patterns with pixelated rendering. Usable as textures or overlays.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Checker */}
            <div className="border border-border bg-card p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-mono text-small font-semibold">.dither-checker</span>
                <span className="text-caption font-mono">50% density</span>
              </div>
              <div className="h-24 w-full border border-border dither-checker bg-surface" />
              <p className="text-caption">2×2 alternating pixel checkerboard.</p>
            </div>

            {/* Bayer */}
            <div className="border border-border bg-card p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-mono text-small font-semibold">.dither-bayer</span>
                <span className="text-caption font-mono">~25% density</span>
              </div>
              <div className="h-24 w-full border border-border dither-bayer bg-surface" />
              <p className="text-caption">4×4 Bayer ordered dither matrix.</p>
            </div>

            {/* Fine */}
            <div className="border border-border bg-card p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-mono text-small font-semibold">.dither-fine</span>
                <span className="text-caption font-mono">~25% density</span>
              </div>
              <div className="h-24 w-full border border-border dither-fine bg-surface" />
              <p className="text-caption">2×2 fine single-pixel dot pattern.</p>
            </div>

            {/* Dense */}
            <div className="border border-border bg-card p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-mono text-small font-semibold">.dither-dense</span>
                <span className="text-caption font-mono">~75% density</span>
              </div>
              <div className="h-24 w-full border border-border dither-dense bg-surface" />
              <p className="text-caption">2×2 dense three-pixel dot pattern.</p>
            </div>

            {/* Noise */}
            <div className="border border-border bg-card p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-mono text-small font-semibold">.dither-noise</span>
                <span className="text-caption font-mono">~25% density</span>
              </div>
              <div className="h-24 w-full border border-border dither-noise bg-surface" />
              <p className="text-caption">4×4 dispersed pseudo-random pixel noise.</p>
            </div>

            {/* Dither Overlay Demo */}
            <div className="border border-border bg-accent text-accent-foreground p-4 space-y-3 relative overflow-hidden">
              <div className="dither-checker dither-overlay opacity-35" />
              <div className="relative z-10 space-y-2">
                <span className="font-mono text-small font-semibold block">Dither Overlay</span>
                <p className="text-caption text-accent-foreground">
                  Applied as an overlay on vibrant accent background. Retains text contrast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Status */}
        <footer className="border-t border-border pt-8 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-caption text-muted-foreground">
            <p>
              Ditherweb • Phase 1: Visual Foundation •{" "}
              <span className="text-foreground font-semibold">Validated</span>
            </p>
            <p>Ready for Phase 2 Component Primitives</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

/** Small token swatch for showcase grid */
function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className={`flex flex-col justify-end p-2.5 h-18 ${className}`}>
      <span className="font-mono text-caption leading-tight break-all font-medium">
        {name}
      </span>
    </div>
  );
}
