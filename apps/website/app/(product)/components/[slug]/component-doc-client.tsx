"use client";

import Link from "next/link";
import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Separator,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ditherweb/ui";
import { CodeBlock } from "@/components/docs/code-block";
import { ApiTable } from "@/components/docs/api-table";
import { ComponentPreview } from "@/components/docs/component-preview";
import type { ComponentDocEntry } from "@/lib/component-docs-registry";

export interface ComponentDocClientProps {
  entry: ComponentDocEntry;
}

export function ComponentDocClient({ entry }: ComponentDocClientProps) {
  return (
    <div className="space-y-10 font-mono">
      {/* Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <span className="text-muted-foreground">{entry.category}</span>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{entry.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">{entry.category}</Badge>
            <Badge variant="outline">Production Primitive</Badge>
            <span className="text-xs text-muted-foreground">Status: Stable</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-foreground">
            {entry.name}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {entry.description}
          </p>
        </div>

        <Separator />

        {/* 1. Live Interactive Preview */}
        <section id="preview" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              01
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Live Preview
            </h2>
          </div>
          <ComponentPreview slug={entry.slug} />
        </section>

        {/* 2. Installation */}
        <section id="installation" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              02
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Installation
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Add Ditherweb to your project dependencies:
          </p>
          <CodeBlock
            code="npm install @ditherweb/ui"
            language="BASH"
            filename="Terminal"
          />
        </section>

        {/* 3. Usage & Code Snippet */}
        <section id="usage" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              03
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Usage
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Import the component and render with type-safe props:
          </p>
          <CodeBlock
            code={entry.usageSnippet}
            language="TSX"
            filename={`${entry.name}Demo.tsx`}
          />
        </section>

        {/* 4. API Reference */}
        <section id="api" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              04
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              API Reference
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Exported TypeScript properties for <code className="text-foreground">{entry.name}</code>:
          </p>
          <ApiTable props={entry.props} title={`${entry.name} Props`} />
        </section>

        {/* 5. Accessibility Guidelines */}
        <section id="accessibility" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2">
            <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              05
            </span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
              Accessibility
            </h2>
          </div>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs uppercase">Interaction &amp; Semantics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1.5 leading-relaxed">
                {entry.accessibilityNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* 6. Composition Notes (Optional) */}
        {entry.compositionNotes && entry.compositionNotes.length > 0 && (
          <section id="composition" className="space-y-4 scroll-mt-20">
            <div className="flex items-center gap-2">
              <span className="bevel-raised bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
                06
              </span>
              <h2 className="text-xl font-bold uppercase tracking-wider text-foreground">
                Composition Guidelines
              </h2>
            </div>
            <Card>
              <CardContent className="p-4">
                <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1 leading-relaxed">
                  {entry.compositionNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-border flex flex-wrap justify-between items-center gap-4 text-xs">
          <Link href="/components" className="text-muted-foreground hover:text-foreground">
            ← Back to Catalog
          </Link>
          <Link href="/docs" className="text-primary font-bold hover:underline">
            Documentation Overview →
          </Link>
        </div>
      </div>
  );
}
