# Ditherweb

A modern React UI framework inspired by the visual language of the early Internet and classic computer interfaces.

> **Retro appearance. Modern engineering.**

---

## What is Ditherweb?

**Ditherweb** combines the visual vocabulary of 1990s and early-2000s computing—procedural dithering, tactile bevels, sharp borders, pixel typography, Web-safe palettes, CRT monitors, and classic desktop windowing—with modern frontend engineering: React 18 & 19, TypeScript, Tailwind CSS, accessibility, and React Server Components (RSC).

Ditherweb is **not** a Windows 95 clone. Its design system draws from the broader early Web and personal computing era: GeoCities, personal homepages, early search portals, bitmap graphics, phosphor monitors, Y2K aesthetics, and vintage desktop workstations.

---

## Key Features

- 🕹️ **96+ Accessible Primitives**: A comprehensive suite of components spanning core UI, layout, forms, overlays, navigation, classic Web widgets, desktop windows, and CRT/dither effects.
- ⚡ **React Server Component (RSC) Native**: Foundational layout and typography primitives run server-side with 0kB client bundle cost; interactive components automatically declare `"use client";`.
- 🎨 **Authentic Design Tokens**: Perceptual OKLCH color palette with balanced warmth and theme parity, pure-CSS tactile bevels (`bevel-raised`, `bevel-inset`), crisp directional shadows, and procedural SVG dither textures.
- ♿ **WAI-ARIA & Keyboard First**: Built on native HTML semantics, strict focus management, and WCAG AA contrast ratios, with automatic `prefers-reduced-motion` compliance.
- 🌲 **Tree-Shakeable & Zero External Runtime Dependencies**: Pure ESM exports with granular CSS side-effect annotations and bundled inlined source maps.

---

## Component Catalog

Ditherweb provides 96 zero-dependency primitives organized into 9 functional families:

| Category | Components |
| :--- | :--- |
| **Foundational Core** | `Button`, `Input`, `Label`, `Checkbox`, `Radio`, `Switch`, `Card`, `Badge`, `Alert`, `Separator` |
| **Typography & Layout** | `Heading`, `Text`, `Link`, `Code`, `Kbd`, `Blockquote`, `List`, `ListItem`, `Container`, `Box`, `Stack`, `Flex`, `Grid`, `Spacer`, `AspectRatio`, `ScrollArea` |
| **Forms & Selection** | `Textarea`, `PasswordInput`, `SearchInput`, `NumberInput`, `Select`, `Combobox`, `Slider`, `Toggle`, `ToggleGroup`, `Field` |
| **Surfaces & Feedback** | `Panel`, `GroupBox`, `Well`, `Inset`, `Progress`, `Spinner`, `Skeleton`, `EmptyState`, `Result`, `Loading` |
| **Overlays & Dialogs** | `Dialog`, `AlertDialog`, `Popover`, `Tooltip`, `HoverCard`, `Drawer`, `Sheet`, `Backdrop`, `Overlay`, `Portal` |
| **Navigation & Data** | `Tabs`, `Breadcrumb`, `Pagination`, `Steps`, `Tree`, `Table`, `DataTable`, `DescriptionList`, `Timeline`, `Avatar` |
| **Classic Web** | `WebRing`, `Guestbook`, `VisitorCounter`, `UnderConstruction`, `Marquee`, `Blink`, `Button88x31`, `RetroBanner`, `PixelImage`, `WebDirectory` |
| **Desktop Workstation** | `Window`, `WindowTitleBar`, `WindowControls`, `Taskbar`, `Menu`, `ContextMenu`, `Desktop`, `Terminal`, `PixelArt`, `BitmapCanvas` |
| **Visual Effects & CRT** | `CRT`, `Dither`, `Halftone`, `Pixelate`, `Noise`, `ImageFrame`, `Scanline`, `PixelText`, `Typewriter`, `BlinkCursor` |

---

## Installation & Setup

### Package Installation

Install `@ditherweb/ui` alongside React:

```bash
npm install @ditherweb/ui react react-dom
```

### Stylesheet Setup

Import the Ditherweb stylesheet once in your application root layout or main stylesheet:

```tsx
// app/layout.tsx (Next.js) or src/main.tsx (Vite)
import "@ditherweb/ui/styles";
```

Or via CSS `@import`:

```css
/* app/globals.css or src/index.css */
@import "@ditherweb/ui/styles";
```

### Local Showcase & Documentation Site

To explore the live documentation, component catalog, and interactive playground locally:

```bash
git clone https://github.com/mrinshad/ditherweb-ui.git
cd ditherweb-ui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage Examples

### 1. Action Panel with Buttons & Badges

```tsx
import { Button, Badge } from "@ditherweb/ui";

export function ActionToolbar() {
  return (
    <div className="flex items-center gap-3 p-3 bevel-raised bg-surface">
      <Button variant="default">Save Changes</Button>
      <Button variant="outline">Discard</Button>
      <Badge variant="primary">v1.0.0</Badge>
    </div>
  );
}
```

### 2. Desktop Application Window

```tsx
import {
  Window,
  WindowTitleBar,
  WindowTitle,
  WindowControls,
  Well,
} from "@ditherweb/ui";

export function DiagnosticsWindow() {
  return (
    <Window className="w-96">
      <WindowTitleBar>
        <WindowTitle>SYSTEM_DIAGNOSTICS.EXE</WindowTitle>
        <WindowControls
          onMinimize={() => {}}
          onMaximize={() => {}}
          onClose={() => {}}
        />
      </WindowTitleBar>
      <div className="p-4 space-y-3">
        <Well className="p-3 font-mono text-xs">
          MEM: 640 KB OK<br />
          CLOCK: 66 MHz<br />
          STATUS: READY
        </Well>
      </div>
    </Window>
  );
}
```

### 3. Cathode Ray Tube (CRT) with Amber Phosphor

```tsx
import { CRT, Dither, Heading } from "@ditherweb/ui";

export function TerminalBanner() {
  return (
    <CRT scanlines flicker glow phosphor="amber">
      <Dither pattern="bayer" intensity="medium">
        <div className="p-8 text-center bg-black">
          <Heading level={1} size="display" className="font-mono">
            CYBERSPACE MAINFRAME
          </Heading>
        </div>
      </Dither>
    </CRT>
  );
}
```

### 4. Accessible Form Composition

```tsx
import { Field, FieldLabel, Input, Button } from "@ditherweb/ui";

export function LoginForm() {
  return (
    <form className="space-y-4 max-w-sm">
      <Field id="username">
        <FieldLabel>Operator Handle</FieldLabel>
        <Input placeholder="Enter handle..." required />
      </Field>
      <Button type="submit" variant="primary" className="w-full">
        Authenticate
      </Button>
    </form>
  );
}
```

---

## Design System & Customization

Ditherweb exposes semantic tokens and utility classes for high-contrast retro styling:

### Semantic Colors
- **Surfaces:** `--background`, `--foreground`, `--surface`, `--surface-elevated`, `--card`, `--popover`
- **Interactive:** `--primary`, `--primary-foreground`, `--secondary`, `--accent`
- **Status:** `--destructive`, `--success`, `--warning`, `--info`

### Tactile 3D Bevels
- `.bevel-raised`: 3D raised border for action buttons, titlebars, and dialog frames.
- `.bevel-inset`: 3D sunken channel for text inputs, progress tracks, and viewports.
- `.bevel-pressed`: Recessed face for active/pressed button states.
- `.bevel-flat`: Neutral surface border with uniform 2px contrast.

### Procedural Dither Patterns
Apply lightweight, pure-CSS textures rendered via high-performance SVG data URIs:
- `.dither-checker`: 50% checkerboard dither pattern.
- `.dither-bayer`: 4×4 Bayer ordered dither matrix (~25% density).
- `.dither-fine`: Single-pixel fine dot texture.
- `.dither-dense`: Three-pixel high-density texture.
- `.dither-noise`: Dispersed pseudo-random pixel noise.

### Dark Mode
Dark mode is class-based via `.dark` on `<html>`. Colors maintain exact high-contrast parity between `#c0c0c0` classic gray and `#121316` cybernetic charcoal.

---

## Supported Environments & Compatibility

- **Next.js**: 15+, 16+ (App Router with Turbopack or Webpack)
- **Vite**: 5+, 6+ (React plugin with Rollup / esbuild)
- **React**: 18.x and 19.x
- **TypeScript**: 5.x (`moduleResolution: "bundler"` recommended)

---

## Flagship Application Examples

The repository includes complete, production-grade application showcases in `apps/website`:

- **System Telemetry Dashboard** (`/examples/dashboard`): CRT server monitors, real-time load gauges, and log streams.
- **Administration Suite** (`/examples/admin`): Filterable data grids, bulk record management, and modal inspectors.
- **Classic Web Ring** (`/examples/classic-web`): Authentic personal homepage featuring guestbook signers, 88×31 micro-badges, and visitor counters.
- **Desktop Workstation** (`/examples/desktop`): Desktop environment with floating windows, taskbar, cascaded menus, and bitmap drawing canvas.
- **Editorial Publication** (`/examples/editorial`): Cybernetic webzine layout with serif typography, halftone photo frames, and pull-quotes.

---

## Documentation & Resources

- **Component Catalog**: Explore all 96 primitives with interactive controls at `/components`.
- **Design System Guide**: Comprehensive reference on tokens, bevels, and dithering algorithms at `/docs`.
- **Interactive Playground**: Real-time component sandbox at `/playground`.
- **Development History & Phase Progression**: Detailed engineering milestones from Phase 0 through Phase 10 are documented in [docs/development-history.md](docs/development-history.md).
- **Component QA Checklist**: Visual and interactive testing methodology is documented in [docs/component-qa.md](docs/component-qa.md).
- **Contributing Guide**: Engineering guidelines, test suites, and commit standards are documented in [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

MIT © 2026 Ditherweb Contributors
