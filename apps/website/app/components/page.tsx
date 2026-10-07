"use client";

import { useState } from "react";
import NextLink from "next/link";
import {
  Button,
  Input,
  Label,
  Checkbox,
  Radio,
  Switch,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Separator,
  Heading,
  Text,
  Link as UiLink,
  Code,
  Kbd,
  Blockquote,
  List,
  ListItem,
  Container,
  Box,
  Stack,
  Flex,
  Grid,
  Spacer,
  AspectRatio,
  ScrollArea,
} from "@ditherweb/ui";

type Category = "all" | "typography" | "layout" | "input" | "feedback";

export default function ComponentsPage() {
  const [category, setCategory] = useState<Category>("all");
  const [btnClicks, setBtnClicks] = useState(0);
  const [disabledBtnClicks, setDisabledBtnClicks] = useState(0);
  const [loadingBtnClicks, setLoadingBtnClicks] = useState(0);
  const [chkState, setChkState] = useState(false);
  const [chkIndeterminate, setChkIndeterminate] = useState(true);
  const [disabledChkClicks, setDisabledChkClicks] = useState(0);
  const [switchState, setSwitchState] = useState(false);
  const [disabledSwitchClicks, setDisabledSwitchClicks] = useState(0);
  const [radioVal, setRadioVal] = useState("vga");
  const [inputText, setInputText] = useState("");
  const [linkClicks, setLinkClicks] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary">Phase 3A Suite</Badge>
          <span className="font-mono text-xs text-muted-foreground">
            26 Production Primitives
          </span>
        </div>
        <h1 className="font-mono text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Component Catalog
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Every Ditherweb component is built with native accessibility semantics,
          typed props, and calibrated retro CSS tokens. Inspect interactive states,
          typography hierarchy, layout primitives, and implementation details.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-border pb-4 font-mono text-xs">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`px-3 py-1 font-bold ${
              category === "all" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            All Primitives (26)
          </button>
          <button
            type="button"
            onClick={() => setCategory("typography")}
            className={`px-3 py-1 font-bold ${
              category === "typography" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Typography (8)
          </button>
          <button
            type="button"
            onClick={() => setCategory("layout")}
            className={`px-3 py-1 font-bold ${
              category === "layout" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Layout & Structure (10)
          </button>
          <button
            type="button"
            onClick={() => setCategory("input")}
            className={`px-3 py-1 font-bold ${
              category === "input" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Actions & Inputs (6)
          </button>
          <button
            type="button"
            onClick={() => setCategory("feedback")}
            className={`px-3 py-1 font-bold ${
              category === "feedback" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Status & Feedback (2)
          </button>
        </div>
      </div>

      {/* Grid of Components */}
      <div className="space-y-16">
        {/* ==================================================================
            TYPOGRAPHY PRIMITIVES (Phase 3A)
            ================================================================== */}

        {/* TYPOGRAPHY 1: HEADING */}
        {(category === "all" || category === "typography") && (
          <section id="heading" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Heading
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Semantic heading (h1-h6) with decoupled visual size scaling.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Semantic Level Hierarchy (h1–h6)
                  </h3>
                  <div className="space-y-3">
                    <Heading level={1}>Heading 1 — System Core Architecture</Heading>
                    <Heading level={2}>Heading 2 — Subsystem Module Protocol</Heading>
                    <Heading level={3}>Heading 3 — Peripheral Controller Interface</Heading>
                    <Heading level={4}>Heading 4 — Register Buffer Mapping</Heading>
                    <Heading level={5}>Heading 5 — Interrupt Vector Table</Heading>
                    <Heading level={6}>Heading 6 — Bitwise Flag Mask</Heading>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Decoupled Semantic Level vs. Visual Size
                  </h3>
                  <div className="space-y-3">
                    <Heading level={2} size="display">
                      Semantic h2 with Display Size (5XL)
                    </Heading>
                    <Heading level={1} size="sm">
                      Semantic h1 with Compact Size (Small)
                    </Heading>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Heading level={2} size="xl">System Core</Heading>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* TYPOGRAPHY 2: TEXT */}
        {(category === "all" || category === "typography") && (
          <section id="text" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Text
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  General-purpose typographic primitive supporting tags, scales, weights, and tones.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Type Scales (xs, sm, base, lg, xl)
                  </h3>
                  <div className="space-y-2">
                    <Text size="xl">Text XL — Vintage mainframe terminal display banner</Text>
                    <Text size="lg">Text LG — Primary interface lead paragraph and summary</Text>
                    <Text size="base">Text Base — Standard system typography for body text and documentation</Text>
                    <Text size="sm">Text SM — Secondary technical parameters and metadata captions</Text>
                    <Text size="xs">Text XS — Microscopic hardware register notation and memory addresses</Text>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Color Tones & Weights
                  </h3>
                  <div className="space-y-2">
                    <Text variant="default" weight="bold">Default Variant (Bold)</Text>
                    <Text variant="muted" weight="medium">Muted Variant (Medium)</Text>
                    <Text variant="accent" weight="semibold">Accent Variant (Semibold)</Text>
                    <Text mono size="sm" variant="muted">Monospace Font Stack Flag Enabled (mono)</Text>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Text as="p" size="base" variant="muted" weight="medium">Ditherweb</Text>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* TYPOGRAPHY 3: LINK */}
        {(category === "all" || category === "typography") && (
          <section id="link" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Link
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Framework-agnostic anchor primitive with calibrated retro hover and keyboard states.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Link Variants
                  </h3>
                  <div className="flex flex-wrap items-center gap-6">
                    <UiLink
                      id="test-link-interactive"
                      href="#link"
                      variant="default"
                      onClick={(e) => {
                        e.preventDefault();
                        setLinkClicks((c) => c + 1);
                      }}
                    >
                      Default Link (Clicks: {linkClicks})
                    </UiLink>

                    <UiLink
                      id="test-link-subtle"
                      href="#link"
                      variant="subtle"
                    >
                      Subtle Link
                    </UiLink>

                    <UiLink
                      id="test-link-underline"
                      href="#link"
                      variant="underline"
                    >
                      Underline Link
                    </UiLink>

                    <UiLink
                      id="test-link-external"
                      href="https://github.com"
                      target="_blank"
                    >
                      External Target (_blank)
                    </UiLink>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Link href="/docs" variant="default">Documentation →</Link>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* TYPOGRAPHY 4: CODE & KBD */}
        {(category === "all" || category === "typography") && (
          <section id="code-kbd" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Code & Kbd
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Sunken inline code substrate and tactile raised keycap shortcut primitives.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Inline Code Primitive (&lt;code&gt;)
                  </h3>
                  <p className="font-mono text-sm leading-relaxed">
                    To import components, execute <Code>npm install @ditherweb/ui</Code> and configure your bundler with <Code>tokens.css</Code>.
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Tactile Keyboard Shortcut Keycaps (&lt;kbd&gt;)
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1.5">
                      <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> Copy
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd> Paste
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Kbd>Alt</Kbd> + <Kbd>F4</Kbd> Terminate
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Kbd>Enter</Kbd> Execute
                    </span>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Code>npm i @ditherweb/ui</Code> | <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* TYPOGRAPHY 5: BLOCKQUOTE & LIST */}
        {(category === "all" || category === "typography") && (
          <section id="blockquote-list" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Blockquote & List
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Vintage quote indentation and semantic ordered/unordered list primitives with pixel bullets.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Semantic Blockquote (&lt;blockquote&gt;)
                  </h3>
                  <Blockquote cite="https://ditherweb.org">
                    &ldquo;Retro appearance. Modern engineering. The early Web was defined by hard
                    edges, pixel matrices, and tactile controls designed for mechanical human feedback.&rdquo;
                  </Blockquote>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                      List: Pixel Bullet Variant
                    </h3>
                    <List type="unordered" variant="pixel">
                      <ListItem>Floppy Disk Controller (1.44 MB DMA Channel 2)</ListItem>
                      <ListItem>Serial Comms (RS-232 16550A UART @ 115,200 baud)</ListItem>
                      <ListItem>Parallel Port (Centronics ECP/EPP IEEE 1284)</ListItem>
                    </List>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                      List: Ordered Numeric Hierarchy
                    </h3>
                    <List type="ordered" variant="default">
                      <ListItem>Execute BIOS POST memory integrity scan</ListItem>
                      <ListItem>Initialize master/slave PIC interrupt controllers</ListItem>
                      <ListItem>Bootstrap operating system sector from Master Boot Record</ListItem>
                    </List>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<List type="unordered" variant="pixel"><ListItem>...</ListItem></List>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* ==================================================================
            LAYOUT PRIMITIVES (Phase 3A)
            ================================================================== */}

        {/* LAYOUT 1: CONTAINER & BOX */}
        {(category === "all" || category === "layout") && (
          <section id="container-box" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Container & Box
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Content width constraints with responsive padding, and neutral polymorphic layout primitive.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Container Width Variants (sm, md, lg, xl, full)
                  </h3>
                  <div className="space-y-3 font-mono text-xs">
                    <Container size="sm" className="border border-primary bg-primary/10 p-3 text-center">
                      Container size=&quot;sm&quot; (max-w-screen-sm)
                    </Container>
                    <Container size="md" className="border border-border-strong bg-surface p-3 text-center">
                      Container size=&quot;md&quot; (max-w-screen-md)
                    </Container>
                    <Container size="lg" className="border border-border bg-card p-3 text-center">
                      Container size=&quot;lg&quot; (max-w-screen-lg)
                    </Container>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Box: Polymorphic Container Primitive
                  </h3>
                  <Box as="section" className="bevel-inset bg-surface p-4 font-mono text-xs space-y-2">
                    <p className="font-bold text-foreground">Box as=&quot;section&quot;</p>
                    <p className="text-muted-foreground">
                      Box is completely neutral for composable styling. It introduces zero unexpected margins or decorators.
                    </p>
                  </Box>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Container size="lg"><Box as="main">...</Box></Container>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* LAYOUT 2: STACK, FLEX, & GRID */}
        {(category === "all" || category === "layout") && (
          <section id="stack-flex-grid" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Stack, Flex, & Grid
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Directional stack flow, flexbox composition, and CSS grid primitives.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Stack (Vertical vs. Horizontal)
                  </h3>
                  <Stack id="test-stack-container" gap="sm" className="font-mono text-xs">
                    <div className="p-2 border border-border bg-surface">Stack Element 1 (gap=&quot;sm&quot;)</div>
                    <div className="p-2 border border-border bg-surface">Stack Element 2 (gap=&quot;sm&quot;)</div>
                    <div className="p-2 border border-border bg-surface">Stack Element 3 (gap=&quot;sm&quot;)</div>
                  </Stack>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Flex with Spacer Primitive
                  </h3>
                  <Flex id="test-flex-container" align="center" className="p-3 border border-border bg-surface font-mono text-xs">
                    <Badge variant="primary">START</Badge>
                    <Spacer />
                    <span className="text-muted-foreground">Spacer pushes items apart</span>
                    <Spacer />
                    <Badge variant="secondary">END</Badge>
                  </Flex>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Grid Primitive (4 Columns)
                  </h3>
                  <Grid id="test-grid-container" columns={4} gap="sm" className="font-mono text-xs text-center">
                    <div className="p-3 border border-border bg-card">Col 1</div>
                    <div className="p-3 border border-border bg-card">Col 2</div>
                    <div className="p-3 border border-border bg-card">Col 3</div>
                    <div className="p-3 border border-border bg-card">Col 4</div>
                  </Grid>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Stack gap="md"><Flex><Logo /><Spacer /><Nav /></Flex></Stack>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* LAYOUT 3: ASPECT RATIO & SCROLL AREA */}
        {(category === "all" || category === "layout") && (
          <section id="aspect-scroll" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  AspectRatio & ScrollArea
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  CSS aspect-ratio constraint and accessible native scroll container.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                      AspectRatio (16 / 9)
                    </h3>
                    <AspectRatio
                      id="test-aspect-ratio"
                      ratio={16 / 9}
                      className="bevel-inset bg-surface flex flex-col items-center justify-center font-mono text-xs"
                    >
                      <span className="font-bold text-primary">16 : 9 Aspect Ratio</span>
                      <span className="text-[10px] text-muted-foreground">Responsive Pure CSS</span>
                    </AspectRatio>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                      ScrollArea (Keyboard Accessible)
                    </h3>
                    <ScrollArea
                      id="test-scroll-area"
                      orientation="vertical"
                      className="h-36 p-3 space-y-2 font-mono text-xs"
                    >
                      <p className="font-bold text-primary">[SYSTEM INITIALIZATION LOG]</p>
                      <p className="text-muted-foreground">0001: DMA Channel 0 initialized.</p>
                      <p className="text-muted-foreground">0002: DMA Channel 1 initialized.</p>
                      <p className="text-muted-foreground">0003: Memory controller mapped 640K base memory.</p>
                      <p className="text-muted-foreground">0004: Video BIOS extension at C000:0000.</p>
                      <p className="text-muted-foreground">0005: Keyboard buffer initialized (16 bytes).</p>
                      <p className="text-muted-foreground">0006: Serial UART 16550A ready at 03F8h.</p>
                      <p className="text-muted-foreground">0007: Parallel printer port ready at 0378h.</p>
                      <p className="text-muted-foreground">0008: Sound Blaster 16 DSP 4.05 detected at 220h IRQ 5 DMA 1.</p>
                      <p className="text-muted-foreground">0009: Mouse driver loaded on IRQ 12 (PS/2 auxiliary device).</p>
                      <p className="text-muted-foreground">0010: IDE hard disk drive C: 540 MB LBA mode ready.</p>
                      <p className="text-muted-foreground">0011: CD-ROM drive D: ATAPI 4X ready.</p>
                      <p className="text-muted-foreground">0012: Operating system boot sequence complete.</p>
                    </ScrollArea>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<AspectRatio ratio={16/9}>...</AspectRatio> | <ScrollArea className="h-48">...</ScrollArea>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* ==================================================================
            ACTIONS & INPUTS (Phase 2 Suite)
            ================================================================== */}

        {/* 1. BUTTON */}
        {(category === "all" || category === "input") && (
          <section id="button" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Button
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Tactile action trigger with raised bevels and active pressed depression.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Variants
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button id="test-btn-default-variant" variant="default">Default</Button>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Sizes
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small (sm)</Button>
                    <Button size="md">Medium (md)</Button>
                    <Button size="lg">Large (lg)</Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
                    Interactive Verification Bench
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      id="test-btn-interactive"
                      variant="primary"
                      onClick={() => setBtnClicks((c) => c + 1)}
                    >
                      Clicks: {btnClicks}
                    </Button>
                    <Button
                      id="test-btn-disabled"
                      disabled
                      onClick={() => setDisabledBtnClicks((c) => c + 1)}
                    >
                      Disabled ({disabledBtnClicks})
                    </Button>
                    <Button
                      id="test-btn-loading"
                      loading
                      onClick={() => setLoadingBtnClicks((c) => c + 1)}
                    >
                      Loading State ({loadingBtnClicks})
                    </Button>
                    <Button id="test-btn-focus" variant="default">
                      Focus Target
                    </Button>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Button variant="primary" size="md">Execute</Button>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 2. INPUT */}
        {(category === "all" || category === "input") && (
          <section id="input" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Input
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Sunken bevel text field with monospace typing dynamics and focus rings.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="test-input-live">Active Hardware Address</Label>
                    <Input
                      id="test-input-live"
                      placeholder="e.g. 0x7FFF0000"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                    <span id="test-input-value-preview" className="font-mono text-[11px] text-muted-foreground">
                      Value: &quot;{inputText}&quot;
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="test-input-disabled">Protected ROM Block</Label>
                    <Input
                      id="test-input-disabled"
                      disabled
                      defaultValue="READ_ONLY_0xFF"
                    />
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Input placeholder="Enter value..." />`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 3. LABEL */}
        {(category === "all" || category === "input") && (
          <section id="label" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Label
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  High-contrast typography for form controls with optional required indicator.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-6">
                  <Label htmlFor="demo-1">Default Label</Label>
                  <Label htmlFor="demo-2">
                    Parameter Label <span className="text-primary">*</span>
                  </Label>
                  <Label htmlFor="demo-3" className="opacity-50">
                    Offline Field (Disabled)
                  </Label>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Label htmlFor="baud">Baud Rate</Label>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 4. CHECKBOX */}
        {(category === "all" || category === "input") && (
          <section id="checkbox" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Checkbox
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Crisp 16x16 pixel sunken checkbox supporting checked, unchecked, and indeterminate states.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-8">
                  <Checkbox
                    id="test-chk-interactive"
                    checked={chkState}
                    onChange={(e) => setChkState(e.target.checked)}
                  >
                    DMA Controller Active ({chkState ? "Checked" : "Unchecked"})
                  </Checkbox>
                  <Checkbox
                    id="test-chk-indeterminate"
                    indeterminate={chkIndeterminate}
                    onChange={() => setChkIndeterminate(!chkIndeterminate)}
                  >
                    Interrupt Cascade ({chkIndeterminate ? "Indeterminate" : "Normal"})
                  </Checkbox>
                  <Checkbox
                    id="test-chk-disabled"
                    disabled
                    checked
                    onChange={() => setDisabledChkClicks((c) => c + 1)}
                  >
                    Hardware Lock ({disabledChkClicks})
                  </Checkbox>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Checkbox checked={active} onChange={(e) => setActive(e.target.checked)}>Enable</Checkbox>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 5. RADIO */}
        {(category === "all" || category === "input") && (
          <section id="radio" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Radio
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Square-frame radio selection group for mutually exclusive options.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-border">
                    <span className="font-mono text-xs text-muted-foreground">Graphics Preset</span>
                    <span id="test-radio-selected" className="font-mono text-xs font-bold text-primary uppercase">
                      Selected: {radioVal}
                    </span>
                  </div>
                  <Radio
                    name="graphics-mode"
                    value="cga"
                    id="test-radio-cga"
                    checked={radioVal === "cga"}
                    onChange={(e) => setRadioVal(e.target.value)}
                  >
                    CGA 4-Color (320x200)
                  </Radio>
                  <Radio
                    name="graphics-mode"
                    value="ega"
                    id="test-radio-ega"
                    checked={radioVal === "ega"}
                    onChange={(e) => setRadioVal(e.target.value)}
                  >
                    EGA 16-Color (640x350)
                  </Radio>
                  <Radio
                    name="graphics-mode"
                    value="vga"
                    id="test-radio-vga"
                    checked={radioVal === "vga"}
                    onChange={(e) => setRadioVal(e.target.value)}
                  >
                    VGA 256-Color (640x480)
                  </Radio>
                  <Radio
                    name="graphics-mode"
                    value="xga"
                    id="test-radio-disabled"
                    disabled
                    checked={radioVal === "xga"}
                    onChange={(e) => setRadioVal(e.target.value)}
                  >
                    XGA High-Res (Disabled Hardware)
                  </Radio>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Radio name="mode" value="vga" checked={val === "vga"} onChange={...}>VGA</Radio>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 6. SWITCH */}
        {(category === "all" || category === "input") && (
          <section id="switch" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Switch
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Tactile slider switch with bevel thumb and track depression.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-8">
                  <Switch
                    id="test-switch-interactive"
                    checked={switchState}
                    onChange={(e) => setSwitchState(e.target.checked)}
                  >
                    Modem Audio ({switchState ? "Enabled" : "Disabled"})
                  </Switch>
                  <Switch
                    id="test-switch-disabled"
                    disabled
                    onChange={() => setDisabledSwitchClicks((c) => c + 1)}
                  >
                    Disabled Switch ({disabledSwitchClicks})
                  </Switch>
                  <Switch id="test-switch-uncontrolled" defaultChecked>
                    Uncontrolled (Hardware Cache)
                  </Switch>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)}>Sound</Switch>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 7. CARD */}
        {(category === "all" || category === "layout") && (
          <section id="card" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Card
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Structured container primitive with default, raised, and sunken surfaces.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>Flat surface with 2px hard border.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-xs text-muted-foreground">Standard card container for general UI layout grouping.</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline">STATUS: OK</Badge>
                </CardFooter>
              </Card>

              <Card variant="raised">
                <CardHeader>
                  <CardTitle>Raised Card</CardTitle>
                  <CardDescription>3D elevated window bevel.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-xs text-muted-foreground">Tactile elevated dialog frame appearance.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>

              <Card variant="inset">
                <CardHeader>
                  <CardTitle>Inset Card</CardTitle>
                  <CardDescription>Inverted depressed well.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-xs text-muted-foreground">Depressed viewport style for data logs and terminal consoles.</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="secondary">CACHE HIT</Badge>
                </CardFooter>
              </Card>
            </div>
          </section>
        )}

        {/* 8. SEPARATOR */}
        {(category === "all" || category === "layout") && (
          <section id="separator" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Separator
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Geometric divider supporting horizontal and vertical orientations.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <span className="font-mono text-xs text-muted-foreground">Horizontal Divider</span>
                  <Separator className="my-3" />
                </div>
                <div className="flex items-center gap-4 h-8 font-mono text-xs">
                  <span>Segment A</span>
                  <Separator orientation="vertical" />
                  <span>Segment B</span>
                  <Separator orientation="vertical" />
                  <span>Segment C</span>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 9. BADGE */}
        {(category === "all" || category === "feedback") && (
          <section id="badge" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Badge
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Pixel-framed status tag for metadata, state indicators, and tags.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default">DEFAULT</Badge>
                  <Badge variant="primary">PRIMARY</Badge>
                  <Badge variant="secondary">SECONDARY</Badge>
                  <Badge variant="outline">OUTLINE</Badge>
                  <Badge variant="success">SUCCESS</Badge>
                  <Badge variant="warning">WARNING</Badge>
                  <Badge variant="destructive">DESTRUCTIVE</Badge>
                  <Badge variant="info">INFO</Badge>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Badge variant="success">ONLINE</Badge>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 10. ALERT */}
        {(category === "all" || category === "feedback") && (
          <section id="alert" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Alert
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  System message notification with role=&quot;alert&quot; and distinct chromatic borders.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <Alert variant="info">
                    <AlertTitle>System Notice</AlertTitle>
                    <AlertDescription>
                      Dialup handshake established at 57,600 baud. V.90 protocol active.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="warning">
                    <AlertTitle>Line Interference</AlertTitle>
                    <AlertDescription>
                      High noise floor detected on telephone subscriber loop.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <AlertTitle>Fatal Exception</AlertTitle>
                    <AlertDescription>
                      Stack overflow in TSR driver module at 0028:C0011E36.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="success">
                    <AlertTitle>File Transfer Complete</AlertTitle>
                    <AlertDescription>
                      ZMODEM transfer verified with 32-bit CRC.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Alert variant="destructive"><AlertTitle>Error</AlertTitle><AlertDescription>...</AlertDescription></Alert>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      {/* Catalog Footer Link */}
      <div className="pt-6 border-t border-border flex justify-between items-center font-mono text-xs">
        <NextLink href="/" className="text-muted-foreground hover:text-foreground">
          ← Back to Homepage
        </NextLink>
        <NextLink href="/playground" className="text-primary hover:underline font-bold">
          Experiment in Playground →
        </NextLink>
      </div>
    </div>
  );
}
