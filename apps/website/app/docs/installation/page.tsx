import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Separator } from "@ditherweb/ui";
import { DocsLayout } from "@/components/docs/docs-layout";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Installation — Ditherweb Documentation",
  description:
    "How to install and configure @ditherweb/ui in React 19 and Next.js projects with Tailwind CSS and CSS design tokens.",
  alternates: {
    canonical: "/docs/installation",
  },
};

export default function InstallationPage() {
  return (
    <DocsLayout breadcrumbs={[{ label: "Guides", href: "/docs" }, { label: "Installation" }]}>
      <div className="space-y-10 font-mono">
        <div className="space-y-3">
          <Badge variant="primary">Guide</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">
            Installation
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Step-by-step instructions for adding Ditherweb to your project, configuring Tailwind tokens,
            and importing styles.
          </p>
        </div>

        <Separator />

        {/* Step 1: Install Package */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            1. Install Package
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Install <code className="text-foreground">@ditherweb/ui</code> via your package manager:
          </p>
          <CodeBlock
            code="npm install @ditherweb/ui"
            language="BASH"
            filename="Terminal"
          />
        </section>

        {/* Step 2: Stylesheet Setup */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            2. Import CSS Variables &amp; Tokens
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Import the Ditherweb CSS styles or define the CSS variables in your root stylesheet (<code className="text-foreground">app/globals.css</code>):
          </p>
          <CodeBlock
            code={`@import "@ditherweb/ui/styles";

/* Or define custom design tokens */
:root {
  --background: #d4d0c8;
  --surface: #c0c0c0;
  --primary: #000080;
  --bevel-light: #ffffff;
  --bevel-dark: #808080;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.dark {
  --background: #181a1f;
  --surface: #22252a;
  --primary: #3366cc;
  --bevel-light: #3d424d;
  --bevel-dark: #111317;
}`}
            language="CSS"
            filename="app/globals.css"
          />
        </section>

        {/* Step 3: Next.js Setup */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            3. Next.js App Router Integration
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Ditherweb primitives work out of the box with Next.js 15 and 16 App Router. For interactive components,
            they encapsulate their own client boundaries where required.
          </p>
          <CodeBlock
            code={`// app/page.tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@ditherweb/ui";

export default function HomePage() {
  return (
    <main className="p-8">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>SYSTEM READY</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="primary">Launch Application</Button>
        </CardContent>
      </Card>
    </main>
  );
}`}
            language="TSX"
            filename="app/page.tsx"
          />
        </section>

        {/* Navigation Footer */}
        <div className="pt-6 border-t border-border flex justify-between items-center text-xs">
          <Link href="/docs" className="text-muted-foreground hover:text-foreground">
            ← Introduction
          </Link>
          <Link href="/docs/theming" className="text-primary font-bold hover:underline">
            Next: Theming &amp; Tokens →
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
