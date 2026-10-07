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

## Project Architecture

Ditherweb is structured as an npm workspace monorepo with strict architectural separation between the reusable UI library and the consumer website:

```
ditherweb/
├── packages/
│   └── ui/                  → Reusable Ditherweb UI library (@ditherweb/ui)
│       ├── src/components/  → 56 primitives (10 Core, 8 Typography, 8 Layout, 10 Forms/Selection, 10 Surfaces/Feedback, 10 Overlays/Layered Interaction)
│       ├── src/styles/      → Design tokens, bevels, procedural dither patterns
│       ├── src/lib/utils.ts → Utility helpers (cn)
│       └── src/index.ts     → Public library entrypoint
├── apps/
│   └── website/             → Official website, documentation & playground
│       ├── app/             → Next.js App Router (/, /components, /docs, /playground)
│       └── components/site/ → Site chrome (header, footer, theme toggle)
├── docs/
│   └── component-qa.md      → Permanent Visual & Interactive QA Guide
```

### Dependency Flow

The dependency graph is strictly unidirectional:

$$\text{apps/website} \longrightarrow \text{@ditherweb/ui}$$

- `apps/website` consumes `@ditherweb/ui` via standard workspace dependencies.
- `packages/ui` has **zero** knowledge of `apps/website` and zero site-specific dependencies.
- UI library components can scale and evolve independently without inflating or coupling to website code.

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

Phase 2 established the first 10 production-grade Ditherweb components in `packages/ui/src/components/`:

1. **Button** (`packages/ui/src/components/button.tsx`) — Tactile action trigger with raised bevels, active depression, loading spinner, and 6 variants (`default`, `primary`, `secondary`, `destructive`, `ghost`, `outline`).
2. **Input** (`packages/ui/src/components/input.tsx`) — Monospace text input with sunken bevels, invalid validation styles, and accessible focus rings.
3. **Label** (`packages/ui/src/components/label.tsx`) — Accessible form control label with htmlFor association.
4. **Checkbox** (`packages/ui/src/components/checkbox.tsx`) — Binary toggle control with classic square sunken bevel and checkmark glyph.
5. **Radio** (`packages/ui/src/components/radio.tsx`) — Mutual exclusion control with circular bevels.
6. **Switch** (`packages/ui/src/components/switch.tsx`) — Mechanical sliding toggle with sunken track and raised thumb.
7. **Card** (`packages/ui/src/components/card.tsx`) — Modular container with CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
8. **Badge** (`packages/ui/src/components/badge.tsx`) — Pixel-framed status tag with 8 variants (`default`, `primary`, `secondary`, `success`, `warning`, `destructive`, `info`, `outline`).
9. **Alert** (`packages/ui/src/components/alert.tsx`) — Accessible alert notification (`role="alert"` / `role="status"`) with distinct chromatic framing.
10. **Separator** (`packages/ui/src/components/separator.tsx`) — Grooved horizontal and vertical layout dividers.

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

## Phase 2.75: Architecture Separation & Component Visual QA Foundation

Phase 2.75 isolated the reusable library into its own package and instituted automated-ready visual and interactive quality assurance:

- **Library Monorepo Extraction (`packages/ui`)**:
  - Reusable package `@ditherweb/ui` contains all 10 core primitives, design tokens, bevel primitives, procedural dither textures, and the `cn` utility.
  - Zero coupling to the website application or site chrome.
- **Consumer Website Isolation (`apps/website`)**:
  - Next.js application cleanly consumes `@ditherweb/ui` via workspace dependency.
  - Tailwind v4 configured with `@source` and Turbopack CSS loaders for cross-package compilation.
- **Permanent Component QA Protocol (`docs/component-qa.md`)**:
  - Formal 4-phase lifecycle: Pre-Implementation, Implementation QA, Visual QA Matrix, and Final Validation.
  - Enforced across specialist skills (`qa-engineer`, `AGENTS.md`).
- **Visual Baseline Verification**:
  - Headless Chrome screenshot verification established across light mode (`#c0c0c0` canvas), dark mode (`#121316` canvas), mobile viewports (320px–640px), and desktop viewports (≥1280px).

---

## Phase 3A: Typography & Foundational Layout Components

Phase 3A implemented 16 new zero-dependency composable primitives in `@ditherweb/ui` and resolved core tactile and chromatic feedback behaviors:

### 1. Typography Primitives (8)
1. **Heading** (`packages/ui/src/components/heading.tsx`) — Semantic `<h1>`–`<h6>` with decoupled visual scale (`xs` to `display`/`5xl`).
2. **Text** (`packages/ui/src/components/text.tsx`) — Typographic primitive (`p`, `span`, `div`) with tokenized sizes, tones, and weights.
3. **Link** (`packages/ui/src/components/link.tsx`) — Framework-agnostic anchor primitive with retro hover underlines and keyboard focus rings.
4. **Code** (`packages/ui/src/components/code.tsx`) — Inline code primitive with sunken substrate.
5. **Kbd** (`packages/ui/src/components/kbd.tsx`) — Tactile keycap primitive with raised bevel and hard shadow.
6. **Blockquote** (`packages/ui/src/components/blockquote.tsx`) — Semantic quote primitive with retro accent border and italic styling.
7. **List** (`packages/ui/src/components/list.tsx`) — Semantic list container (`ul`, `ol`) with pixel bullet (`■`) or decimal numbering.
8. **ListItem** (`packages/ui/src/components/list.tsx`) — Semantic list item aligned with `List`.

### 2. Layout Primitives (8)
9. **Container** (`packages/ui/src/components/container.tsx`) — Responsive content width container (`sm` to `full`) with centered layout.
10. **Box** (`packages/ui/src/components/box.tsx`) — Composable neutral layout primitive (`div`, `section`, `article`, etc.).
11. **Stack** (`packages/ui/src/components/stack.tsx`) — Directional flex stack with tokenized gaps.
12. **Flex** (`packages/ui/src/components/flex.tsx`) — Flexible layout utility with wrap, align, and justify props.
13. **Grid** (`packages/ui/src/components/grid.tsx`) — CSS grid primitive with 1–12 columns and tokenized gap mapping.
14. **Spacer** (`packages/ui/src/components/spacer.tsx`) — Layout pusher primitive (`flex-1`).
15. **AspectRatio** (`packages/ui/src/components/aspect-ratio.tsx`) — Responsive pure-CSS aspect ratio container.
16. **ScrollArea** (`packages/ui/src/components/scroll-area.tsx`) — Native scroll container with keyboard accessibility (`tabIndex={0}`) and retro styled scrollbars.

### 3. Core System Refinements & Fixes
- **Button**: Restored tactile click depression with active bevel border inversion and 1px shift.
- **Switch**: Resolved sibling positioning for smooth 20px thumb transition and high-contrast active track.
- **Alert**: Wrapped base border resets in `@layer base` and added distinct chromatic borders (`border-l-4`) and background tints.
- **Theme Text Visibility**: Resolved unlayered CSS cascade overrides in `primitives.css`, ensuring logo and system colors retain full WCAG contrast.

---

## Phase 3B: Forms & Selection Components

Phase 3B implemented 10 zero-dependency form and selection controls in `@ditherweb/ui` adhering to native HTML accessibility, retro sunken/raised bevel geometry, and WAI-ARIA standards:

### 1. Form / Input Primitives (4)
1. **Textarea** (`packages/ui/src/components/textarea.tsx`) — Native multiline input with sunken inset styling, invalid states, and zero-radius geometry.
2. **PasswordInput** (`packages/ui/src/components/password-input.tsx`) — Masked credential field with non-submitting retro show/hide toggle (`SHOW`/`HIDE`) and focus preservation.
3. **SearchInput** (`packages/ui/src/components/search-input.tsx`) — Native `type="search"` field with accessible clear button (`✕`) and non-submitting behavior.
4. **NumberInput** (`packages/ui/src/components/number-input.tsx`) — Native numeric input with `min`, `max`, `step` boundaries and retro inset styling.

### 2. Selection Primitives (5)
5. **Select** (`packages/ui/src/components/select.tsx`) — Native HTML select dropdown styled with custom pixel caret and sunken well.
6. **Combobox** (`packages/ui/src/components/combobox.tsx`) — Accessible WAI-ARIA searchable listbox with keyboard navigation (ArrowUp/Down, Enter, Escape), active-descendant, and empty state.
7. **Slider** (`packages/ui/src/components/slider.tsx`) — Native range input with grooved retro channel and tactile raised square thumb.
8. **Toggle** (`packages/ui/src/components/toggle.tsx`) — Button-style pressed/unpressed state with `aria-pressed` and bevel inversion.
9. **ToggleGroup** (`packages/ui/src/components/toggle-group.tsx`) — Accessible grouped toggles supporting single and multiple selection modes (`ToggleGroup`, `ToggleGroupItem`).

### 3. Composition Primitive (1)
10. **Field** (`packages/ui/src/components/field.tsx`) — Accessible form-field composition primitive wiring label, description, error, and aria attributes (`Field`, `FieldLabel`, `FieldDescription`, `FieldError`).

---

## Phase 3C: Surfaces & Feedback Components

Phase 3C added 10 production surfaces and feedback primitives to `@ditherweb/ui` with zero external dependencies, native HTML semantics, and retro classic-computer visual depth:

### 1. Surfaces Primitives (4)
1. **Panel** (`packages/ui/src/components/panel.tsx`) — Generic application surface with compound header, title, description, content, and footer layout (`default`, `raised`, `inset`, `flat`).
2. **GroupBox** (`packages/ui/src/components/group-box.tsx`) — Classic desktop grouping powered by native semantic `<fieldset>` and `<legend>` with automatic disabled cascade.
3. **Well** (`packages/ui/src/components/well.tsx`) — Recessed content region with sunken background canvas for logs, status blocks, or terminal output.
4. **Inset** (`packages/ui/src/components/inset.tsx`) — Low-level sunken cavity container with optional deep shadow depth.

### 2. Feedback Primitives (5)
5. **Progress** (`packages/ui/src/components/progress.tsx`) — Native semantic `<progress>` with retro track, stepped segmented fill, and pure CSS animated indeterminate stripe.
6. **Spinner** (`packages/ui/src/components/spinner.tsx`) — Pure CSS stepped pixel clock rotation (`steps(8)`), sizes `sm`/`md`/`lg`, accessible screen-reader announcement, and reduced-motion support.
7. **Skeleton** (`packages/ui/src/components/skeleton.tsx`) — Content placeholder using procedural dither patterns (`bg-dither-medium`) and stepped pulse animation.
8. **EmptyState** (`packages/ui/src/components/empty-state.tsx`) — Semantic empty presentation with title, description, and interactive action button.
9. **Result** (`packages/ui/src/components/result.tsx`) — Operation outcome presentation (`success`, `error`, `warning`, `info`) with dynamic ARIA status/alert roles.

### 3. Loading Primitive (1)
10. **Loading** (`packages/ui/src/components/loading.tsx`) — Accessible composition wrapper around `Spinner` + status text in stacked and inline layouts.

---

## Phase 3D: Overlays & Layered Interaction

Phase 3D implemented 10 zero-dependency overlay and layered interaction components in `@ditherweb/ui` adhering to strict focus management, keyboard accessibility (Tab cycling, Escape handling), scroll locking, and retro window/panel styling:

### 1. Infrastructure Primitives (3)
1. **Portal** (`packages/ui/src/components/portal.tsx`) — SSR-safe DOM teleportation primitive rendering children into `#ditherweb-portal-root` on document body with zero hydration mismatch.
2. **Backdrop** (`packages/ui/src/components/backdrop.tsx`) — Layered fixed backdrop featuring `dimmed`, `dither` stipple texture, and `transparent` variants with outside-click dismissal.
3. **Overlay** (`packages/ui/src/components/overlay.tsx`) — Low-level composable overlay orchestrator coordinating body scroll locking, Escape propagation, outside-click detection, and backdrop integration.

### 2. Modals & Dialogs (2)
4. **Dialog** (`packages/ui/src/components/dialog.tsx`) — Classic retro desktop window modal with 3D raised bevel (`bevel-raised`), retro titlebar (`retro-window-titlebar`), close button (`✕`), Tab focus trap, and Escape handling (`Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogBody`, `DialogFooter`, `DialogClose`).
5. **AlertDialog** (`packages/ui/src/components/alert-dialog.tsx`) — Critical confirmation modal (`role="alertdialog"`) with destructive warning header, cancellation focus priority on mount, and required explicit action (`AlertDialog`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogBody`, `AlertDialogFooter`, `AlertDialogAction`, `AlertDialogCancel`).

### 3. Contextual Overlays (3)
6. **Popover** (`packages/ui/src/components/popover.tsx`) — Anchored floating contextual panel with viewport collision detection, flip support, outside-click capture, and Escape dismiss (`Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverClose`).
7. **Tooltip** (`packages/ui/src/components/tooltip.tsx`) — Compact pixel-bordered informational hint that responds to hover and keyboard focus with configurable delay (`TooltipProvider`, `Tooltip`, `TooltipTrigger`, `TooltipContent`).
8. **HoverCard** (`packages/ui/src/components/hover-card.tsx`) — Rich interactive preview card with hover intent grace period, allowing users to move their pointer into card links and controls without closing (`HoverCard`, `HoverCardTrigger`, `HoverCardContent`).

### 4. Sliders & Off-Canvas Panels (2)
9. **Drawer** (`packages/ui/src/components/drawer.tsx`) — Off-canvas sliding drawer supporting multi-directional anchoring (`bottom`, `top`, `left`, `right`), grab handle, body scroll locking, and focus trapping (`Drawer`, `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerTitle`, `DrawerDescription`, `DrawerBody`, `DrawerFooter`, `DrawerClose`).
10. **Sheet** (`packages/ui/src/components/sheet.tsx`) — High-density slide-over side panel for complex inspectors, forms, and navigations with titlebar, scrollable body, and structured footer (`Sheet`, `SheetTrigger`, `SheetContent`, `SheetHeader`, `SheetTitle`, `SheetDescription`, `SheetBody`, `SheetFooter`, `SheetClose`).

---

## Status

- **Phase 0** — Architecture & Environment Setup (Complete & Validated ✅)
- **Phase 1** — Visual Foundation & Primitives (Complete & Validated ✅)
- **Phase 2** — Core Component Primitives (Complete & Validated ✅)
- **Phase 2.5** — Product Website & Showcase Architecture (Complete & Validated ✅)
- **Phase 2.75** — Architecture Separation & Component Visual QA (Complete & Validated ✅)
- **Phase 3A** — Typography & Foundational Layout Primitives (Complete & Validated ✅)
- **Phase 3B** — Forms & Selection Primitives (Complete & Validated ✅)
- **Phase 3C** — Surfaces & Feedback Primitives (Complete & Validated ✅)
- **Phase 3D** — Overlays & Layered Interaction (Complete & Validated ✅)
- **Phase 3E** — Navigation & Menus (Pending)
- **Phase 4** — Retro Web Components (Pending)
- **Phase 5** — Desktop / Pixel Components (Pending)
- **Phase 6** — Advanced Effects & Packaging (Pending)

## License

MIT

