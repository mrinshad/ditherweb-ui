# Ditherweb

A modern React UI framework inspired by the visual language of the early Internet and classic computer interfaces.

> **Retro appearance. Modern engineering.**

## What is Ditherweb?

Ditherweb combines the aesthetics of 1990s/early-2000s Web — dithering, bevels, hard borders, pixel typography, Web-safe palettes, early desktop UI — with modern frontend engineering: React, TypeScript, Tailwind CSS, responsive design, accessibility, and component composition.

Ditherweb is **not** a Windows 95 clone. The visual vocabulary draws from the broader early Web and desktop era: GeoCities, personal homepages, early portals, bitmap graphics, CRT aesthetics, Y2K design, and more.

## Tech Stack

- [Next.js](https://nextjs.org/) 16.4
- [React](https://react.dev/) 19.3
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/            → Next.js App Router (demo & visual foundation showcase)
components/ui/  → Ditherweb component library (Phase 2+)
lib/            → Shared utilities (cn, etc.)
public/         → Static assets
```

---

## Phase 1: Visual Foundation & Design Tokens

### 1. Semantic Color System
Ditherweb uses the perceptual `oklch()` color space to balance warmth, contrast, and theme parity across light and dark modes. Rather than sterile pure white and black, screens have an authentic subtle CRT warmth.

- **Core & Surfaces:** `--background`, `--foreground`, `--surface`, `--surface-elevated`, `--card`, `--popover`, `--muted`, `--muted-foreground`
- **Interactive:** `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--accent`, `--accent-foreground`
- **Semantic Status:** `--destructive`, `--success`, `--warning`, `--info` (with paired high-contrast foregrounds)
- **Borders & Rings:** `--border`, `--border-strong`, `--input`, `--ring`

All tokens are registered via `@theme inline` in `app/globals.css`, exposing full Tailwind utility support (`bg-surface`, `text-primary`, `border-border`, etc.).

### 2. Border Philosophy
- **Sharp by default:** Radii default to `0px` (`--radius: 0px`).
- **Crisp boundaries:** High edge contrast avoids modern blurred borders.
- **Utilities:**
  - `.border-default`: 1px standard structural delimiter (`--border`)
  - `.border-strong`: High-contrast delimiter (`--border-strong`)
  - `.border-raised`: 2px 3D raised border using edge lighting
  - `.border-inset`: 2px 3D sunken border
  - `.pixel-border`: 1px subpixel-free border rendered via inset box-shadow
  - `.pixel-border-strong`: 1px strong pixel border

### 3. Bevel Philosophy
Classic tactile 3D surfaces modeled after physical light sources (top-left highlight, bottom-right shadow) built using pure CSS border styles without images or JavaScript:
- `.bevel-raised`: Raised surface for buttons, dialog frames, and floating toolbars.
- `.bevel-inset`: Sunken well for text inputs, progress channels, and embedded viewports.
- `.bevel-pressed`: Recessed face for active/pressed button states.
- `.bevel-flat`: Neutral face background with 2px solid border.

### 4. Shadow System
Ditherweb rejects modern diffuse Gaussian blurs in favor of crisp, directional pixel offsets:
- `.shadow-flat`: No shadow (`none`).
- `.shadow-hard-sm`: 1px offset (`1px 1px 0 var(--shadow-hard-color)`).
- `.shadow-hard`: 2px offset (`2px 2px 0 var(--shadow-hard-color)`).
- `.shadow-hard-md`: 3px offset (`3px 3px 0 var(--shadow-hard-color)`).
- `.shadow-hard-lg`: 4px offset (`4px 4px 0 var(--shadow-hard-color)`).
- `.shadow-hard-xl`: 6px offset (`6px 6px 0 var(--shadow-hard-color)`).
- `.shadow-inset`: Sunken inner shadow (`inset 2px 2px 0 var(--shadow-hard-color)`).
- `.shadow-raised`: 2px elevation shadow.

### 5. Spacing System
Built directly on Tailwind's 4px grid (`p-1` = 4px, `p-2` = 8px, `p-4` = 16px) with 2px micro-spacing (`p-0.5` = 2px) for compact retro UI density without introducing superfluous arbitrary tokens.

### 6. Typography System
Uses robust, legible system font stacks before introducing external pixel fonts, preserving accessibility and readability across platforms:
- `.text-display`: Hero banner typography (36px / 48px, bold, tight tracking).
- `.text-heading`: Section headers (24px, semibold).
- `.text-body`: Standard reading body (16px, regular).
- `.text-small`: Compact secondary copy (14px).
- `.text-caption`: Micro-labels, swatches, and footnotes (12px, muted).
- `.text-code` / `.font-code`: Monospace stack for technical code snippets.

### 7. Dither Primitives
Lightweight, pure-CSS dither patterns encoded via SVG data URIs with `image-rendering: pixelated`:
- `.dither-checker` / `.dither-check`: 2×2 alternating pixel checkerboard (50% density).
- `.dither-bayer`: 4×4 Bayer ordered dither matrix (~25% density).
- `.dither-fine`: 2×2 fine single-pixel dot pattern (~25% density).
- `.dither-dense`: 2×2 dense three-pixel dot pattern (~75% density).
- `.dither-noise`: 4×4 dispersed pseudo-random pixel noise (~25% density).
- `.dither-overlay`: Absolute positioning utility to layer textures over solid or gradient surfaces.

Theme-aware across light and dark modes with translucent pixel fills for natural surface blending.

---

## Phase 2: Foundational Core Components

Phase 2 established the first 10 production-grade Ditherweb components in `components/ui/`:

1. **Button** (`components/ui/button.tsx`) — Tactile action trigger with raised bevels, active depression, loading spinner, and 6 variants (`default`, `primary`, `secondary`, `destructive`, `ghost`, `outline`).
2. **Input** (`components/ui/input.tsx`) — Monospace text input with sunken bevels, invalid validation styles, and accessible focus rings.
3. **Label** (`components/ui/label.tsx`) — Accessible form control label with htmlFor association.
4. **Checkbox** (`components/ui/checkbox.tsx`) — Binary toggle control with classic square sunken bevel and checkmark glyph.
5. **Radio** (`components/ui/radio.tsx`) — Mutual exclusion control with circular bevels.
6. **Switch** (`components/ui/switch.tsx`) — Mechanical sliding toggle with sunken track and raised thumb.
7. **Card** (`components/ui/card.tsx`) — Modular container with CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
8. **Badge** (`components/ui/badge.tsx`) — Pixel-framed status tag with 8 variants (`default`, `primary`, `secondary`, `success`, `warning`, `destructive`, `info`, `outline`).
9. **Alert** (`components/ui/alert.tsx`) — Accessible alert notification (`role="alert"` / `role="status"`) with distinct chromatic framing.
10. **Separator** (`components/ui/separator.tsx`) — Grooved horizontal and vertical layout dividers.

---

## Phase 2.5: Product Website & Showcase Architecture

Phase 2.5 transformed Ditherweb into a product website with modern presentation quality and authentic retro aesthetics:

- **Global Shell**: `SiteHeader` with responsive navigation, GitHub link, and hydration-safe `ThemeToggle`; `SiteFooter` with design system links and micro-badges.
- **Product Homepage (`/`)**: Hero section featuring interactive live composition demo (`HeroDemo`), Value Pillars, Visual Language Lab (procedural dithering, bevel primitives, color tokens), Curated Component Previews, and Quick Start integration.
- **Component Catalog (`/components`)**: Categorized directory of all 10 primitives with live previews, props breakdown, and code examples.
- **Documentation Guide (`/docs`)**: Architecture guide, CSS token reference, bevel mechanics, Bayer dithering algorithm, and accessibility standards.
- **Interactive Playground (`/playground`)**: Real-time component sandbox allowing props manipulation, substrate canvas switching, and dynamic JSX code generation.
- **Distribution Status**: npm packaging is explicitly **Deferred / Not yet designed** pending Phase 6 maturity.

---

## Status

- **Phase 0** — Architecture & Environment Setup (Complete & Validated ✅)
- **Phase 1** — Visual Foundation & Primitives (Complete & Validated ✅)
- **Phase 2** — Core Component Primitives (Complete & Validated ✅)
- **Phase 2.5** — Product Website & Showcase Architecture (Complete & Validated ✅)
- **Phase 3** — Interactive Overlays & Navigation (Pending)
- **Phase 4** — Retro Web Components (Pending)
- **Phase 5** — Desktop / Pixel Components (Pending)
- **Phase 6** — Advanced Effects & Packaging (Pending)

## License

MIT
