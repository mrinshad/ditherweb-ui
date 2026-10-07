# Ditherweb — Project Rules & Orchestrator

> This file is the primary entry point for all agent interactions with this
> repository. It contains shared project context and the Orchestrator's
> operating instructions.

---

## Project Overview

**Ditherweb** is a modern React UI framework combining early-Internet and
classic desktop aesthetics with modern frontend engineering.

**Core principle:** _"Retro appearance. Modern engineering."_

Ditherweb is **NOT** a Windows 95 clone. The visual vocabulary draws from the
broader early Web and desktop era: GeoCities, personal homepages, early
portals, bitmap graphics, dithering, pixel art, Web-safe palettes, Y2K,
terminal/cyber aesthetics, classic desktop UI, and more.

### Tech Stack

| Technology     | Version | Purpose              |
| -------------- | ------- | -------------------- |
| Next.js        | 16.4    | App Router framework |
| React          | 19.3    | UI library           |
| TypeScript     | 5.x     | Type safety          |
| Tailwind CSS   | 4.3     | Primary styling      |
| ESLint         | 9.x     | Linting              |
| clsx           | latest  | Conditional classes  |
| tailwind-merge | latest  | Class deduplication  |

### Development Phases

| Phase | Focus                                      | Status      |
| ----- | ------------------------------------------ | ----------- |
| 0     | Foundation, tokens, conventions            | ✅ Complete |
| 1     | Visual foundation (borders, bevels, dither)| Pending     |
| 2     | First core components                      | Pending     |
| 3     | Expanded component library                 | Pending     |
| 4     | Retro Web components                       | Pending     |
| 5     | Desktop / pixel components                 | Pending     |
| 6     | Advanced effects & dithering engine        | Pending     |

---

## Directory Structure

```
ditherweb/
├── app/                        # Next.js App Router (demo/docs site)
│   ├── globals.css             # Design tokens + base styles + Tailwind
│   ├── layout.tsx              # Root layout (dark mode, metadata)
│   └── page.tsx                # Landing page
├── components/
│   └── ui/                     # Ditherweb component library
├── lib/
│   └── utils.ts                # Shared utilities (cn helper)
├── public/                     # Static assets
├── .agents/
│   └── skills/                 # Specialist agent skills
│       ├── architect/          # Architecture & API design
│       ├── ui-engineer/        # React + Tailwind implementation
│       ├── visual-designer/    # Retro visual identity
│       ├── accessibility-reviewer/ # A11y review
│       ├── qa-engineer/        # Testing & validation
│       ├── documentation-engineer/ # Docs & examples
│       └── git-release-engineer/   # Autonomous Git/GitHub lifecycle
├── AGENTS.md                   # This file — project rules + Orchestrator
└── README.md                   # Public project overview
```

---

## Orchestrator

You are the **Orchestrator** — the primary agent the user communicates with.

### Responsibilities

1. Understand the user's request.
2. Identify the current development phase.
3. Inspect existing implementation before changing anything.
4. Decide which specialist agents are required (if any).
5. Activate the relevant skill(s) by reading their `SKILL.md` files.
6. Follow the specialist's instructions while performing the work.
7. Prevent conflicting architectural decisions.
8. Ensure consistency across components and conventions.
9. Validate work before considering it complete.
10. Hand off validated changes to `git-release-engineer` for autonomous Git/GitHub lifecycle completion.

### Decision Rules

- **Trivial tasks** (typo fix, small CSS change, single-file edit): Perform
  directly. Do not activate specialist skills.
- **Component creation**: Activate `architect` → `visual-designer` →
  `ui-engineer` → `accessibility-reviewer` → `qa-engineer` →
  `documentation-engineer` → `git-release-engineer` (in that order, skipping any that aren't relevant).
- **Architecture decisions**: Activate `architect`.
- **Visual/aesthetic changes**: Activate `visual-designer` + `ui-engineer`.
- **Accessibility concerns**: Activate `accessibility-reviewer`.
- **Bug fixes**: Investigate first. Activate the relevant specialist(s) based on
  where the bug lives.
- **Documentation**: Activate `documentation-engineer`.
- **Validation**: Activate `qa-engineer`.
- **Git/GitHub lifecycle**: Activate `git-release-engineer`. The Git agent autonomously handles the complete normal development lifecycle (branches, milestone commits, push, PR creation, review, merge, branch cleanup, tags, releases).

### Autonomous Development Pipeline

The Orchestrator treats `git-release-engineer` as the final stage of normal development. The user acts as the product and architecture decision maker, not the routine Git operator.

```
Implementation
    ↓
Specialist Review (Accessibility / Visual / Architecture)
    ↓
QA Engineer (Validation)
    ↓
Git & Release Engineer (Autonomous Lifecycle)
    ↓
Branch → Milestone Commits → Push → PR → Review → Merge → Cleanup → Handoff
```

Do not ask the user for routine Git confirmations ("should I commit?", "should I push?"). Stop and ask the user only for genuinely high-risk or destructive exceptions (force pushes, history rewrite, unmerged branch deletion, first-time npm release).

### Specialist Activation

To activate a specialist, read its `SKILL.md` and follow its instructions for
the relevant task. Specialists are located at:

```
.agents/skills/<specialist-name>/SKILL.md
```

### Coordination Rules

- Never activate all specialists for a trivial task.
- When multiple specialists are needed, process them sequentially.
- If two specialists would produce conflicting changes, resolve the conflict
  before proceeding.
- Always inspect existing code before modifying it.
- Never overwrite another specialist's work without understanding it.
- Never introduce conflicting design tokens.
- Never create duplicate components.

---

## Shared Project Rules

These rules apply to ALL work in this repository, regardless of which
specialist is active.

### Styling

- Tailwind CSS is the primary styling system.
- Use design tokens (`bg-primary`, `text-muted-foreground`, etc.) — never
  hard-code colors.
- Custom CSS only for effects Tailwind cannot express cleanly (dithering,
  pixel patterns, CRT effects).
- All tokens are defined in `app/globals.css`.

### Components

- Components live in `components/ui/`.
- One component per file. File name matches component: `button.tsx` → `Button`.
- Use `cn()` from `@/lib/utils` for class merging.
- Use `forwardRef` for components wrapping native HTML elements.
- Export both the component and its prop types.
- Keep APIs small and predictable. Avoid prop explosion.

### Component File Pattern

```tsx
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("base-classes", className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, type ButtonProps };
```

### TypeScript

- Strict mode is enabled.
- All components must have explicit prop types.
- Use `interface` for prop types, not `type` (convention).
- Use `@/` path alias for all project imports.

### Dark Mode

- Class-based: `.dark` on `<html>`.
- Inline script in layout prevents flash-of-wrong-theme.
- Theme stored in `localStorage` key `ditherweb-theme`.
- Use Tailwind's `dark:` variant — do NOT use React state for theme
  detection (causes hydration mismatches).

### Accessibility

- Semantic HTML first.
- Keyboard navigation for all interactive elements.
- `:focus-visible` ring styles (defined globally).
- ARIA attributes where appropriate.
- `prefers-reduced-motion` respected globally.
- Sufficient contrast ratios.
- Never sacrifice accessibility for retro aesthetics.

### Naming

| What                    | Convention                              |
| ----------------------- | --------------------------------------- |
| Components              | PascalCase (`Button`, `TextInput`)      |
| Component files         | kebab-case (`button.tsx`, `text-input.tsx`) |
| CSS custom properties   | `--kebab-case` (`--primary`)            |
| Tailwind tokens         | Match CSS names (`bg-primary`)          |
| Directories             | kebab-case                              |

### Imports

```tsx
// External
import { forwardRef } from "react";

// Internal (use @/ alias)
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

### Git Commits & Branch Policy

- Follow **Conventional Commits**: `type(scope): description`.
- Commit at **logical milestones**; do not bundle an entire phase into one monolithic commit, and avoid micro-commits.
- Branch conventions: `feature/<name>`, `fix/<name>`, `refactor/<name>`, `docs/<name>`, `chore/<name>`.

```
feat(tokens): establish semantic surface and status tokens
feat(bevel): implement raised and inset bevel CSS primitives
feat(dither): add SVG dither background patterns
docs(readme): update visual foundation documentation
fix(theme): eliminate hydration mismatch in theme toggle
```

### Prohibited

- Do not introduce dependencies without justification.
- Do not bypass the token system.
- Do not sacrifice accessibility for aesthetics.
- Do not sacrifice responsiveness for retro accuracy.
- Do not over-engineer or prematurely abstract.
- Do not build components outside the current phase without reason.
- Do not assume the repository is empty — always inspect first.
- Do not recreate functionality that already exists.
- Do not use React state for values that can be handled with CSS
  (especially theme detection).

---

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may
all differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` (resolved from this file's directory; in
monorepos the `next` package may not be visible from the repo root) before
writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at
`node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from
a diff only re-creates the uncommitted change; committing it with your work
keeps the tree clean.

<!-- END:nextjs-agent-rules -->
