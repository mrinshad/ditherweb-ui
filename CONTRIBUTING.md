# Contributing to Ditherweb

Thank you for your interest in contributing to Ditherweb! Ditherweb combines the visual vocabulary of the early Internet and classic desktop workstations with modern React and TypeScript frontend engineering.

> **Core Principle:** *Retro appearance. Modern engineering.*

---

## Repository Architecture

Ditherweb is organized as an npm workspace monorepo:

```
ditherweb/
├── packages/
│   └── ui/                  → Reusable UI component library (@ditherweb/ui)
│       ├── src/components/  → 96 primitives across 9 functional categories
│       ├── src/styles/      → Design tokens, bevels, procedural dither patterns
│       ├── src/lib/utils.ts → Helper utilities (cn)
│       └── src/index.ts     → Public package exports
├── apps/
│   └── website/             → Documentation & showcase site (@ditherweb/website)
│       ├── app/             → Next.js App Router (pages, catalog, playground)
│       └── components/site/ → Header, footer, theme switcher
├── docs/
│   ├── component-qa.md      → Visual & Interactive QA Guide
│   └── development-history.md → Historical engineering progression
└── CONTRIBUTING.md          → Contributor guide (this file)
```

The dependency flow is strictly unidirectional: `apps/website` consumes `@ditherweb/ui`. The UI library has zero dependencies on website code.

---

## Getting Started

### Prerequisites

- **Node.js**: `20.9.0` or higher (Active LTS `22.x` recommended)
- **npm**: `10.x` or higher

### Local Setup

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/mrinshad/ditherweb-ui.git
   cd ditherweb-ui
   ```

2. Install dependencies across all workspaces:
   ```bash
   npm install
   ```

3. Start the Next.js documentation and showcase development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the documentation site and interactive component playground.

---

## Development & Testing Workflow

Always run verification commands before submitting code:

```bash
# Lint code across all workspaces
npm run lint

# Check TypeScript types across all workspaces
npm run typecheck

# Build the @ditherweb/ui package
npm run build:ui

# Verify that all 96 component docs snippets and README examples compile
npm run test:snippets

# Run the automated cross-framework consumer tests (Vite, Next.js, React 18/19)
npm run test:consumer

# Run the complete verification pipeline
npm test
```

---

## Component Guidelines

When creating or modifying components in `packages/ui/src/components/`:

1. **One Component per File**: Match file name to component (`button.tsx` → `Button`).
2. **Prop Interfaces**: Use `interface` for component props (e.g., `ButtonProps`).
3. **Forward Ref**: Wrap native HTML elements with `React.forwardRef` and specify `displayName`.
4. **Design Tokens**: Never hardcode hex color values. Always use semantic Tailwind tokens (`bg-surface`, `text-primary`, `border-border`, etc.) defined in `tokens.css`.
5. **Bevels & Shadows**: Use pure-CSS bevel classes (`.bevel-raised`, `.bevel-inset`, `.bevel-pressed`) and hard pixel shadows (`.shadow-hard`).
6. **Accessibility (a11y)**:
   - Use semantic HTML elements first.
   - Support full keyboard navigation (`Enter`, `Space`, Arrows, `Escape`).
   - Include ARIA attributes where necessary (`role`, `aria-expanded`, `aria-controls`).
   - Preserve `:focus-visible` high-contrast outline rings.
   - Respect `prefers-reduced-motion` for all animations and CRT effects.
7. **Component QA**: Follow the visual QA checklist in [`docs/component-qa.md`](docs/component-qa.md).

---

## Git Conventions

We follow Conventional Commits:

```text
type(scope): concise description in imperative mood
```

Common types:
- `feat`: New feature or component
- `fix`: Bug fix
- `docs`: Documentation updates
- `style`: Formatting or whitespace
- `refactor`: Code reorganization without functional changes
- `test`: Adding or updating tests
- `chore`: Build or tooling updates

Branch naming:
- `feature/<name>`
- `fix/<name>`
- `docs/<name>`
- `chore/<name>`

---

## Continuous Integration & Release Safety

- **Continuous Integration**: GitHub Actions runs on pushes to `main` and `feature/**` branches, validating linting, typechecking, component snippet compilation, cross-framework consumer builds, and website generation.
- **Package Privacy**: `@ditherweb/ui` is marked as `"private": true` in `packages/ui/package.json`. Releases are restricted to manual workflow dispatch with explicit authorization and protected GitHub Environment approval gates.

---

## License

By contributing to Ditherweb, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
