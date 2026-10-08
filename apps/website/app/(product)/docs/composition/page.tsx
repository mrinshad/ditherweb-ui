import type { Metadata } from "next";
import Link from "next/link";
import {
  Badge,
  Separator,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ditherweb/ui";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Composition Patterns — Ditherweb Documentation",
  description:
    "Learn how to compose Ditherweb primitives into rich retro user interfaces: combining Dialogs, CRT shaders, Terminals, and Dithered surfaces.",
  alternates: {
    canonical: "/docs/composition",
  },
};

export default function CompositionPage() {
  return (
    <div className="space-y-10 font-mono">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Composition</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
        <div className="space-y-3">
          <Badge variant="primary">Guide</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">
            Composition Patterns
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Ditherweb is a collection of composable building blocks, not rigid page templates.
            Learn how primitives snap together cleanly into expressive, production-ready interfaces.
          </p>
        </div>

        <Separator />

        {/* Pattern 1: CRT Monitor + Terminal */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            1. CRT Monitor Enclosure with Terminal Shell
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Nest the <code className="text-foreground">Terminal</code> CLI primitive directly inside
            the <code className="text-foreground">CRT</code> shader monitor to create a complete retro computing terminal:
          </p>

          <CodeBlock
            code={`import { CRT, Terminal, TerminalHeader, TerminalBody, TerminalLine, TerminalPrompt, TerminalCommand, TerminalOutput } from "@ditherweb/ui";

export function RetroConsole() {
  return (
    <CRT phosphor="green" curvature="subtle">
      <Terminal title="ditherweb@tty1" className="bg-transparent border-none">
        <TerminalHeader />
        <TerminalBody>
          <TerminalLine>
            <TerminalPrompt>admin@gateway:~$</TerminalPrompt>
            <TerminalCommand> systemctl status telemetry</TerminalCommand>
          </TerminalLine>
          <TerminalLine>
            <TerminalOutput>● telemetry.service - Telemetry Daemon (Active: running)</TerminalOutput>
          </TerminalLine>
        </TerminalBody>
      </Terminal>
    </CRT>
  );
}`}
            language="TSX"
            filename="src/components/retro-console.tsx"
          />
        </section>

        {/* Pattern 2: ImageFrame + Bayer Dithering */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            2. ImageFrame with Procedural Bayer Dithering
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Wrap graphics or video surfaces in <code className="text-foreground">ImageFrame</code> and overlay
            procedural Bayer dithering for an authentic 90s visual treatment:
          </p>

          <CodeBlock
            code={`import { ImageFrame, Dither } from "@ditherweb/ui";

export function DitheredArtwork() {
  return (
    <ImageFrame variant="bitmap" className="p-2">
      <div className="relative overflow-hidden">
        <img
          src="/landscape.jpg"
          alt="Vintage scenic landscape"
          className="w-full h-auto block"
        />
        <Dither pattern="bayer" intensity="medium" className="absolute inset-0" />
      </div>
    </ImageFrame>
  );
}`}
            language="TSX"
            filename="src/components/dithered-artwork.tsx"
          />
        </section>

        {/* Pattern 3: Desktop Window + Form Controls */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
            3. Desktop Window with Form Controls &amp; Bevel Wells
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Compose a full desktop utility dialog using <code className="text-foreground">Window</code>,
            <code className="text-foreground">Field</code>, <code className="text-foreground">Input</code>,
            and <code className="text-foreground">Button</code>:
          </p>

          <CodeBlock
            code={`import { Window, WindowTitleBar, WindowTitle, WindowControls, WindowContent, WindowFooter, Field, FieldLabel, Input, Button } from "@ditherweb/ui";

export function DialupDialog() {
  return (
    <Window className="max-w-md">
      <WindowTitleBar>
        <WindowTitle>DIALUP_CONFIG.EXE</WindowTitle>
        <WindowControls />
      </WindowTitleBar>
      <WindowContent className="p-4 space-y-4">
        <Field>
          <FieldLabel>Phone Number</FieldLabel>
          <Input defaultValue="1-800-555-0199" />
        </Field>
      </WindowContent>
      <WindowFooter className="flex justify-end gap-2 p-3">
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Connect</Button>
      </WindowFooter>
    </Window>
  );
}`}
            language="TSX"
            filename="src/components/dialup-dialog.tsx"
          />
        </section>

        {/* Navigation Footer */}
        <div className="pt-6 border-t border-border flex justify-between items-center text-xs">
          <Link href="/docs/accessibility" className="text-muted-foreground hover:text-foreground">
            ← Accessibility Standards
          </Link>
          <Link href="/components" className="text-primary font-bold hover:underline">
            Browse Component Catalog →
          </Link>
        </div>
      </div>
  );
}
