# Ditherweb — Component Visual & Interactive QA Guide

This document establishes the official, permanent quality assurance (QA) protocol for all UI components in Ditherweb.

Every new component added to Ditherweb (`packages/ui`) must pass this rigorous checklist before it is merged into `main`.

---

## Core Philosophy

> **"Retro appearance. Modern engineering."**

Ditherweb combines the tactile, nostalgic aesthetics of 1990s desktop computing and the early Web with uncompromising modern engineering: semantic HTML, WCAG accessibility, fluid responsiveness, zero runtime bloat, and rock-solid design token fidelity.

---

## Component QA Lifecycle

Every component proceeds through 4 systematic phases:

```
┌────────────────────────┐
│ 1. Pre-Implementation  │ Architecture & Spec Audit
└───────────┬────────────┘
            │
┌───────────▼────────────┐
│ 2. Implementation QA   │ DOM, Props, A11y & Focus
└───────────┬────────────┘
            │
┌───────────▼────────────┐
│ 3. Visual QA Matrix    │ Light / Dark, Viewports, Bevels
└───────────┬────────────┘
            │
┌───────────▼────────────┐
│ 4. Final Validation    │ Types, Lint, Build & Showcase
└────────────────────────┘
```

---

## 1. Pre-Implementation Checklist

Before writing any component code:

- [ ] **Architecture Boundary:** Confirm the component belongs in `packages/ui/src/components/`, NOT inside `apps/website/`.
- [ ] **Dependency Check:** Zero external component or styling dependencies. Only standard `clsx` and `tailwind-merge` via `cn()`.
- [ ] **Native HTML Mapping:** Identify the native HTML element to wrap (e.g. `<button>`, `<input>`, `<dialog>`). Prefer native semantics over ARIA role emulations whenever possible.
- [ ] **Design Token Check:** Identify required tokens (`--surface`, `--border`, `--bevel-light`, `--bevel-dark`, etc.). Verify no hardcoded hex or rgb values are introduced.

---

## 2. Implementation & Accessibility Checklist

During component authoring:

- [ ] **Ref Forwarding:** Component uses `React.forwardRef` and sets an explicit `displayName`.
- [ ] **TypeScript Contract:** Component defines and exports a dedicated `interface <Name>Props extends React.HTMLAttributes<...>` (or native element equivalent).
- [ ] **Keyboard Interaction:**
  - `Enter` / `Space` activate clickable triggers.
  - Arrow keys (`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`) cycle through composite items (e.g. `RadioGroup`, `Tabs`, `Menu`).
  - `Escape` dismisses floating or overlay elements.
  - `Tab` / `Shift+Tab` navigates in natural DOM order without trapping focus inadvertently.
- [ ] **ARIA & Semantics:**
  - Proper roles assigned when native elements are insufficient (`role="switch"`, `role="radiogroup"`, `role="alert"`).
  - Explicit state attributes: `aria-checked`, `aria-disabled`, `aria-expanded`, `aria-invalid`.
  - Form control labels supported via `htmlFor` / `id` or `aria-labelledby`.
- [ ] **Focus Indication:**
  - High-visibility focus indicators present on `:focus-visible`.
  - Focus ring uses token-driven `outline-ring` with appropriate offset.
  - Focus ring visible against both light (`#c0c0c0`) and dark (`#121316`) canvas surfaces.
- [ ] **Client Boundary:** Include `"use client";` directive at the top of any component utilizing React client hooks (`useState`, `useEffect`, `useId`, `useRef`).

---

## 3. Visual QA Matrix

Visual inspection must be conducted across all four quadrants:

| Viewport / Theme | Light Mode (`#c0c0c0` canvas) | Dark Mode (`#121316` canvas) |
| :--- | :--- | :--- |
| **Desktop (≥ 1280px)** | Verified ✅ | Verified ✅ |
| **Mobile (320px – 640px)** | Verified ✅ | Verified ✅ |

### Visual Checklist Items:

1. **Bevel Alignment:**
   - **Raised Elements (`.bevel-raised`):** Top and left borders must be highlight (`--bevel-light`), bottom and right borders must be shadow (`--bevel-dark`).
   - **Inset Elements (`.bevel-inset`):** Top and left borders must be shadow (`--bevel-dark`), bottom and right borders must be highlight (`--bevel-light`).
   - **Grooved Separators (`.bevel-groove`):** Dual 1px channels producing authentic optical depth.
2. **Interactive Depression:**
   - Active/pressed state swaps highlight and shadow edges or applies `.bevel-pressed` / `active:translate-y-[1px]`.
3. **Contrast Ratios:**
   - Body copy and labels maintain at least 4.5:1 contrast against their immediate background in both light and dark themes.
   - Large text / prominent controls maintain at least 3:1 contrast.
4. **Dither Pattern Alignment:**
   - Procedural SVG patterns (`.bg-dither-fine`, `.bg-dither-medium`, etc.) render with `shape-rendering="crispEdges"` and no subpixel blur or antialiasing artifacts.
5. **Interactive States:**
   - **Default:** Clean, unactivated appearance.
   - **Hover:** Subtle highlight or luminance shift.
   - **Active:** Tactile pressed depression.
   - **Focus-visible:** Pixelated or crisp focus ring indicator.
   - **Disabled:** Dimmed opacity (`opacity-50` / `opacity-60`), flat or grayed borders, `cursor-not-allowed`, no hover or active triggers.

---

## 4. Final Validation Checklist

Before marking the component complete:

- [ ] **Typecheck:** `npm run typecheck` passes with zero errors across all workspaces.
- [ ] **Lint:** `npm run lint` passes with zero errors or warnings.
- [ ] **Build:** `npm run build` succeeds cleanly.
- [ ] **Library Export:** Component and its prop types exported in `packages/ui/src/index.ts`.
- [ ] **Website Integration:** Component documented and demoed in:
  - `apps/website/app/components/page.tsx` (Component Catalog)
  - `apps/website/app/playground/page.tsx` (Interactive Playground sandbox)
- [ ] **Visual Baseline Capture:** Screen captures taken and verified via headless browser QA tool:
  - Desktop light & dark viewports.
  - Mobile light & dark viewports.
- [ ] **Git Lifecycle:** Milestone commit following Conventional Commits (`feat(ui): ...`).
