"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("ditherweb-theme", isDark ? "dark" : "light");
  } catch {
    // localStorage unavailable
  }
}

export default function Home() {
  const [selectedRadio, setSelectedRadio] = useState("retro");
  const [switchChecked, setSwitchChecked] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:py-20">
      <main className="w-full max-w-4xl space-y-16">
        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-display font-bold tracking-tight text-foreground">
                Ditherweb
              </h1>
              <p className="text-small font-mono text-muted-foreground mt-1">
                Retro appearance. Modern engineering.
              </p>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="
                bevel-raised active:bevel-pressed
                px-4 py-2 font-mono text-small font-medium text-foreground
                transition-transform select-none cursor-pointer
                focus-visible:outline-2 focus-visible:outline-ring
              "
              aria-label="Toggle color theme"
            >
              <span className="inline dark:hidden" aria-hidden="true">☀ </span>
              <span className="hidden dark:inline" aria-hidden="true">☾ </span>
              <span className="inline dark:hidden">Switch to Dark</span>
              <span className="hidden dark:inline">Switch to Light</span>
            </button>
          </div>

          <div className="bevel-inset p-4 relative overflow-hidden bg-surface">
            <div className="dither-checker dither-overlay opacity-30" />
            <p className="text-body text-foreground relative z-10 leading-relaxed font-mono">
              Phase 2: First Core Components. Validating the 10 foundational UI
              primitives built on Phase 1 tokens, sharp geometries, and accessible
              native semantics.
            </p>
          </div>
        </header>

        {/* 1. Buttons Showcase */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              1. Button Component
            </h2>
            <p className="text-caption">
              Semantic buttons with tactile bevels, directional hard shadows, and responsive states.
            </p>
          </div>

          <div className="space-y-4 border border-border bg-card p-6">
            <div>
              <h3 className="text-caption uppercase tracking-wider font-mono mb-3">Variants</h3>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="default">Default Bevel</Button>
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-caption uppercase tracking-wider font-mono mb-3">Sizes</h3>
              <div className="flex flex-wrap gap-3 items-center">
                <Button size="sm">Small (sm)</Button>
                <Button size="md">Medium (md)</Button>
                <Button size="lg">Large (lg)</Button>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-caption uppercase tracking-wider font-mono mb-3">States</h3>
              <div className="flex flex-wrap gap-3 items-center">
                <Button disabled variant="default">Disabled Default</Button>
                <Button disabled variant="primary">Disabled Primary</Button>
                <Button loading variant="default">Saving</Button>
                <Button loading variant="primary">Processing</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Inputs Showcase */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              2. Input Component
            </h2>
            <p className="text-caption">
              Recessed bevel-inset text fields with sharp edges, native props, and validation styling.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 border border-border bg-card p-6">
            <div className="space-y-2">
              <Label htmlFor="input-default">Normal Input</Label>
              <Input id="input-default" placeholder="Enter file name..." />
              <p className="text-caption">Default state with placeholder.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="input-value">Populated Input</Label>
              <Input id="input-value" defaultValue="ditherweb_config.sys" />
              <p className="text-caption">Populated with default text.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="input-invalid">Invalid State</Label>
              <Input
                id="input-invalid"
                defaultValue="invalid_entry.exe"
                invalid
              />
              <p className="text-caption text-destructive">Error: file extension forbidden.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="input-disabled">Disabled State</Label>
              <Input
                id="input-disabled"
                defaultValue="locked_system_data"
                disabled
              />
              <p className="text-caption">Read-only / disabled control.</p>
            </div>
          </div>
        </section>

        {/* 3. Form Controls: Checkbox, Radio, Switch, Label */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              3. Form Controls (Checkbox, Radio, Switch, Label)
            </h2>
            <p className="text-caption">
              100% native HTML input-backed controls paired with retro tactile indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 border border-border bg-card p-6">
            {/* Checkbox Group */}
            <div className="space-y-3">
              <h3 className="text-caption uppercase tracking-wider font-mono">Checkboxes</h3>
              <div className="space-y-2">
                <Checkbox
                  id="check-1"
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                >
                  Enable Dithering
                </Checkbox>

                <Checkbox id="check-2">
                  High Contrast
                </Checkbox>

                <Checkbox id="check-3" indeterminate>
                  Indeterminate
                </Checkbox>

                <Checkbox id="check-4" disabled defaultChecked>
                  Disabled Checked
                </Checkbox>

                <Checkbox id="check-5" disabled>
                  Disabled Unchecked
                </Checkbox>
              </div>
            </div>

            {/* Radio Group */}
            <div className="space-y-3">
              <h3 className="text-caption uppercase tracking-wider font-mono">Radio Buttons</h3>
              <div className="space-y-2">
                <Radio
                  id="radio-1"
                  name="rendering-mode"
                  value="retro"
                  checked={selectedRadio === "retro"}
                  onChange={() => setSelectedRadio("retro")}
                >
                  Bayer Matrix
                </Radio>

                <Radio
                  id="radio-2"
                  name="rendering-mode"
                  value="floyd"
                  checked={selectedRadio === "floyd"}
                  onChange={() => setSelectedRadio("floyd")}
                >
                  Floyd-Steinberg
                </Radio>

                <Radio
                  id="radio-3"
                  name="rendering-mode"
                  value="halftone"
                  checked={selectedRadio === "halftone"}
                  onChange={() => setSelectedRadio("halftone")}
                >
                  Screen Halftone
                </Radio>

                <Radio
                  id="radio-4"
                  name="rendering-mode"
                  disabled
                >
                  Disabled Radio
                </Radio>
              </div>
            </div>

            {/* Switch Group */}
            <div className="space-y-3">
              <h3 className="text-caption uppercase tracking-wider font-mono">Switches</h3>
              <div className="space-y-3">
                <Switch
                  id="switch-1"
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                >
                  CRT Scanlines
                </Switch>

                <Switch id="switch-2">
                  Sound Effects
                </Switch>

                <Switch id="switch-3" disabled defaultChecked>
                  Auto-Save (Locked)
                </Switch>

                <Switch id="switch-4" disabled>
                  Turbo Mode (Off)
                </Switch>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Card System Showcase */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              4. Card System
            </h2>
            <p className="text-caption">
              Composable surface containers with modular Header, Title, Description, Content, and Footer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Default Hard-Shadow Card */}
            <Card variant="default">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>System Settings</CardTitle>
                  <Badge variant="primary">v1.0</Badge>
                </div>
                <CardDescription>
                  Configure display adapter and memory allocation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="card-input">Display Device</Label>
                  <Input id="card-input" defaultValue="VGA 640x480 (16 colors)" />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Label htmlFor="card-switch">Pixel Smoothing</Label>
                  <Switch id="card-switch" />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="ghost" size="sm">Defaults</Button>
                <Button variant="primary" size="sm">Apply Changes</Button>
              </CardFooter>
            </Card>

            {/* Raised Bevel Card */}
            <Card variant="raised">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Hardware Diagnostics</CardTitle>
                  <Badge variant="success">Online</Badge>
                </div>
                <CardDescription>
                  Physical bus memory and interface diagnostics.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-small">
                <div className="flex justify-between border-b border-border py-1">
                  <span className="text-muted-foreground">RAM Base:</span>
                  <span>640 KB OK</span>
                </div>
                <div className="flex justify-between border-b border-border py-1">
                  <span className="text-muted-foreground">Extended:</span>
                  <span>15,360 KB OK</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Co-processor:</span>
                  <span>80387 Detected</span>
                </div>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant="default" size="sm">Run Test</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Inset & Flat Variations */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card variant="inset" className="p-4 space-y-2">
              <span className="text-small font-semibold">variant=&quot;inset&quot;</span>
              <p className="text-caption text-muted-foreground">
                Sunken channel surface for log monitors, data viewports, and terminal wells.
              </p>
            </Card>

            <Card variant="flat" className="p-4 space-y-2">
              <span className="text-small font-semibold">variant=&quot;flat&quot;</span>
              <p className="text-caption text-muted-foreground">
                Neutral face background with clean 2px solid border for auxiliary toolbars.
              </p>
            </Card>
          </div>
        </section>

        {/* 5. Badge Showcase */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              5. Badge Component
            </h2>
            <p className="text-caption">
              Sharp rectangular status chips with high-contrast typography and semantic roles.
            </p>
          </div>

          <div className="border border-border bg-card p-6 flex flex-wrap gap-3 items-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* 6. Alert Showcase */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              6. Alert Component
            </h2>
            <p className="text-caption">
              System notice banners with distinct border accents and accessible roles.
            </p>
          </div>

          <div className="space-y-3">
            <Alert variant="default">
              <AlertTitle>Default System Notification</AlertTitle>
              <AlertDescription>
                Routine background task finished execution in 142ms.
              </AlertDescription>
            </Alert>

            <Alert variant="info">
              <AlertTitle>Network Connection Established</AlertTitle>
              <AlertDescription>
                Connected to host via 10Base-T Ethernet at 10 Mbps.
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <AlertTitle>Compilation Successful</AlertTitle>
              <AlertDescription>
                All 10 foundational components compiled with zero errors.
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertTitle>Low Available Disk Storage</AlertTitle>
              <AlertDescription>
                Drive C: has less than 15 MB of remaining cluster space.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>General Protection Fault</AlertTitle>
              <AlertDescription>
                A fatal interrupt occurred at memory segment 0028:C0014020.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* 7. Separator Showcase */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-heading font-semibold text-foreground">
              7. Separator Component
            </h2>
            <p className="text-caption">
              Chiseled retro 3D groove lines with full horizontal and vertical orientation support.
            </p>
          </div>

          <div className="border border-border bg-card p-6 space-y-6">
            <div>
              <p className="text-small font-semibold mb-2">Horizontal Separator</p>
              <Separator />
            </div>

            <div>
              <p className="text-small font-semibold mb-3">Vertical Separator in Layout Bar</p>
              <div className="flex h-8 items-center space-x-4 text-small font-mono">
                <span>File</span>
                <Separator orientation="vertical" />
                <span>Edit</span>
                <Separator orientation="vertical" />
                <span>View</span>
                <Separator orientation="vertical" />
                <span>Help</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-caption text-muted-foreground">
            <p>
              Ditherweb • Phase 2: Core Components •{" "}
              <span className="text-foreground font-semibold">Validated ✅</span>
            </p>
            <p>10 Foundational Components Implemented</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
