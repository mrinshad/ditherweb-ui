# @ditherweb/ui

> **Retro appearance. Modern engineering.**

`@ditherweb/ui` is a comprehensive React component library inspired by the visual language of the early Internet, classic desktop workstations, and retro computing aesthetics—built with modern TypeScript, Tailwind CSS, accessible interaction primitives, and full React Server Component (RSC) compatibility.

---

## Features

- 🕹️ **96 Distinct Primitives**: Buttons, dialogs, retro window chrome, taskbars, CRT monitors, halftone filters, marquee scrollers, guestbooks, visitor counters, and more.
- ⚡ **Modern React & RSC Ready**: Fully compatible with React 18 and React 19. Interactive components retain `"use client";` directives while foundational layout and typography primitives run as React Server Components.
- 🎨 **OKLCH Design Tokens**: Authentic retro color palettes, hard bevels, stepped drop-shadows, and procedural dither patterns distributed via lightweight CSS.
- 🌲 **Tree-Shakeable**: Clean ESM exports with granular `"sideEffects": ["**/*.css"]` annotations ensure unused components are purged from production bundles.
- 🔍 **Full Source Maps**: Bundled with inlined sources for seamless debugging and IDE navigation.

---

## Installation

Install `@ditherweb/ui` along with required peer dependencies:

```bash
npm install @ditherweb/ui react react-dom
```

---

## Stylesheet Setup

Import the Ditherweb stylesheet once in your application root layout or main entry point:

### In JavaScript / TypeScript:

```tsx
// app/layout.tsx (Next.js) or src/main.tsx (Vite)
import "@ditherweb/ui/styles";
```

### In CSS:

```css
/* src/styles.css or app/globals.css */
@import "@ditherweb/ui/styles";
```

The distributed stylesheet includes all foundational design tokens, retro bevel variables, procedural dither SVGs, and base utility classes. You can also import specific style sheets individually if needed:

```css
@import "@ditherweb/ui/styles/tokens.css";
@import "@ditherweb/ui/styles/primitives.css";
```

---

## Supported Environments

`@ditherweb/ui` targets modern bundler-driven workflows:

- **Next.js**: 15+, 16+ (App Router with Turbopack or Webpack)
- **Vite**: 5+, 6+ (React plugin with Rollup / esbuild)
- **Webpack**: 5+
- **TypeScript**: `moduleResolution: "bundler"` (recommended) or `"node10"`

> [!NOTE]
> The library distributes standard ESM modules with extensionless relative specifiers designed for bundlers. If you are using TypeScript, ensure your `tsconfig.json` specifies `"moduleResolution": "bundler"` (or enable `"skipLibCheck": true`). Direct consumption in unbundled Node.js native ESM (`node16`/`nodenext` without a bundler) requires a module loader that resolves extensionless specifiers.

---

## Usage Examples

### 1. Retro Buttons & Badges

```tsx
import { Button, Badge } from "@ditherweb/ui";

export function ActionPanel() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="default">Save Document</Button>
      <Button variant="outline">Cancel</Button>
      <Badge variant="retro">v1.0.0</Badge>
    </div>
  );
}
```

### 2. Desktop Window with Titlebar & Controls

```tsx
import { Window, WindowTitleBar, WindowTitle, WindowControls, Well } from "@ditherweb/ui";

export function SystemMonitor() {
  return (
    <Window className="w-96">
      <WindowTitleBar>
        <WindowTitle>SYSTEM.EXE</WindowTitle>
        <WindowControls onMinimize={() => {}} onClose={() => {}} />
      </WindowTitleBar>
      <div className="p-4 space-y-3">
        <Well className="p-3 font-mono text-sm">
          MEM: 640K OK<br />
          CPU: 66 MHz
        </Well>
      </div>
    </Window>
  );
}
```

### 3. Visual Effects (CRT & Dither)

```tsx
import { CRT, Dither } from "@ditherweb/ui";

export function RetroHero() {
  return (
    <CRT scanlines flicker glow phosphor="amber">
      <Dither pattern="bayer" intensity="medium">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold">WELCOME TO CYBERSPACE</h1>
        </div>
      </Dither>
    </CRT>
  );
}
```

---

## Next.js App Router (RSC) Support

`@ditherweb/ui` is architected for React Server Components:

- **Server-Safe Components**: Primitives like `Button`, `Card`, `Badge`, `Heading`, `Text`, and `Container` do not emit `"use client";` and run directly on the server without client bundle overhead.
- **Client Components**: Interactive primitives requiring browser state (e.g., `Dialog`, `DropdownMenu`, `Tabs`, `Accordion`, `ContextMenu`, `Tooltip`, `Taskbar`) automatically include `"use client";` directives at line 1.
- You can freely compose server and client components in your Next.js application without manual `"use client"` wrappers.

---

## Accessibility & Keyboard Navigation

- **WAI-ARIA Compliance**: Dialogs, dropdowns, menus, and popovers follow standard WAI-ARIA authoring practices, including proper focus management, keyboard navigation (Tab, Arrow keys, Enter, Space, Escape), and `aria-*` roles.
- **High-Contrast Indicators**: Focus rings use high-contrast retro borders with custom outline offsets to ensure visual clarity under WCAG 2.1 AA standards.
- **Semantic Structure**: All components render semantic HTML elements by default with support for polymorphic composition (`asChild` or `as` props).

---

## License

MIT © 2026 Ditherweb Contributors
