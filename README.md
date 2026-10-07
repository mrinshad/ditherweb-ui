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

## Status

- **Phase 0** — Architecture & Environment Setup (Complete & Validated ✅)
- **Phase 1** — Visual Foundation & Primitives (Complete & Validated ✅)
- **Phase 2** — Core Component Primitives (Upcoming)

## License

MIT
