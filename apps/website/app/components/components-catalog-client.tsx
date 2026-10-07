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
  Textarea,
  PasswordInput,
  SearchInput,
  NumberInput,
  Select,
  Slider,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Combobox,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
  PanelContent,
  PanelFooter,
  GroupBox,
  GroupBoxLegend,
  Well,
  Inset,
  Progress,
  Spinner,
  Skeleton,
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
  Result,
  ResultTitle,
  ResultDescription,
  ResultAction,
  Loading,
  Portal,
  Backdrop,
  Overlay,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
  SheetClose,
} from "@ditherweb/ui";

type Category = "all" | "overlays" | "surfaces" | "forms" | "typography" | "layout" | "input" | "feedback";

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

  // Forms states
  const [textareaVal, setTextareaVal] = useState("Initial buffer allocation.\nSector 0x7C00 loaded.");
  const [pwdVal, setPwdVal] = useState("SecretPass99");
  const [searchVal, setSearchVal] = useState("kernel");
  const [numberVal, setNumberVal] = useState(42);
  const [selectVal, setSelectVal] = useState("vga");
  const [comboboxVal, setComboboxVal] = useState("vga");
  const [sliderVal, setSliderVal] = useState(65);
  const [togglePressed, setTogglePressed] = useState(false);
  const [toggleGroupVal, setToggleGroupVal] = useState("center");
  const [fieldInputVal, setFieldInputVal] = useState("");

  // Surfaces & Feedback states
  const [progressVal, setProgressVal] = useState(65);
  const [emptyStateClicks, setEmptyStateClicks] = useState(0);
  const [resultActionClicks, setResultActionClicks] = useState(0);
  const [groupBoxDisabled, setGroupBoxDisabled] = useState(false);

  // Overlays & Layered Interaction states
  const [controlledDialogOpen, setControlledDialogOpen] = useState(false);
  const [alertDialogStatus, setAlertDialogStatus] = useState<string>("Ready");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<"bottom" | "right" | "left" | "top">("bottom");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [customOverlayOpen, setCustomOverlayOpen] = useState(false);
  const [backdropPreviewVariant, setBackdropPreviewVariant] = useState<"dimmed" | "dither" | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary">Overlays & Interaction</Badge>
          <span className="font-mono text-xs text-muted-foreground">
            56 Production Primitives
          </span>
        </div>
        <h1 className="font-mono text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Ditherweb Component Catalog
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Explore Ditherweb&apos;s complete retro React UI component library. Every primitive is built with native accessibility semantics, typed props, and calibrated retro CSS tokens. Inspect interactive states across buttons, inputs, dialogs, cards, forms, surfaces, and feedback components.
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
            All Primitives (56)
          </button>
          <button
            type="button"
            onClick={() => setCategory("overlays")}
            className={`px-3 py-1 font-bold ${
              category === "overlays" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Overlays & Interaction (10)
          </button>
          <button
            type="button"
            onClick={() => setCategory("surfaces")}
            className={`px-3 py-1 font-bold ${
              category === "surfaces" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Surfaces & Feedback (10)
          </button>
          <button
            type="button"
            onClick={() => setCategory("forms")}
            className={`px-3 py-1 font-bold ${
              category === "forms" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Forms & Selection (10)
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
                    <Heading level={1} as="div">Heading 1 — System Core Architecture</Heading>
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
                    <Heading level={1} size="sm" as="div">
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
            FORMS & SELECTION (Phase 3B Suite)
            ================================================================== */}

        {/* 1. TEXTAREA */}
        {(category === "all" || category === "forms") && (
          <section id="textarea" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Textarea
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Native multiline input with sunken inset styling, invalid states, and zero-radius geometry.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="ta-interactive">Interactive Buffer (Rows: 4)</Label>
                    <Textarea
                      id="ta-interactive"
                      value={textareaVal}
                      onChange={(e) => setTextareaVal(e.target.value)}
                      placeholder="Enter system console output..."
                    />
                    <span className="font-mono text-xs text-muted-foreground">
                      Characters: {textareaVal.length}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ta-disabled">Disabled State</Label>
                      <Textarea
                        id="ta-disabled"
                        disabled
                        defaultValue="Read-only EEPROM manifest buffer."
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ta-invalid">Invalid State</Label>
                      <Textarea
                        id="ta-invalid"
                        invalid
                        defaultValue="SYNTAX ERROR: Unexpected token at offset 0x4A"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Textarea rows={4} placeholder="..." invalid={hasError} />`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 2. PASSWORD INPUT */}
        {(category === "all" || category === "forms") && (
          <section id="password-input" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  PasswordInput
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Masked credential field with non-submitting retro show/hide toggle and focus preservation.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pwd-interactive">Interactive Password</Label>
                    <PasswordInput
                      id="pwd-interactive"
                      value={pwdVal}
                      onChange={(e) => setPwdVal(e.target.value)}
                      placeholder="Enter password..."
                    />
                    <span className="font-mono text-xs text-muted-foreground">
                      Current Value: <code className="bg-surface-sunken px-1">{pwdVal}</code>
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pwd-disabled">Disabled State</Label>
                      <PasswordInput
                        id="pwd-disabled"
                        disabled
                        defaultValue="LockedSystem123"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pwd-invalid">Invalid State</Label>
                      <PasswordInput
                        id="pwd-invalid"
                        invalid
                        defaultValue="WeakPass"
                      />
                    </div>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<PasswordInput value={pwd} onChange={...} showToggle />`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 3. SEARCH INPUT */}
        {(category === "all" || category === "forms") && (
          <section id="search-input" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  SearchInput
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Native type=&quot;search&quot; field with accessible clear button and zero form disruption.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="search-interactive">Interactive Query</Label>
                    <SearchInput
                      id="search-interactive"
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      onClear={() => setSearchVal("")}
                      placeholder="Filter register addresses..."
                    />
                    <span className="font-mono text-xs text-muted-foreground">
                      Query Length: {searchVal.length}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="search-empty">Empty State</Label>
                      <SearchInput
                        id="search-empty"
                        placeholder="Search system documentation..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="search-disabled">Disabled State</Label>
                      <SearchInput
                        id="search-disabled"
                        disabled
                        defaultValue="Immutable registry index"
                      />
                    </div>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<SearchInput value={query} onClear={() => setQuery("")} placeholder="Search..." />`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 4. NUMBER INPUT */}
        {(category === "all" || category === "forms") && (
          <section id="number-input" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  NumberInput
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Native numeric input with min, max, step boundaries and sunken retro bevel.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="num-interactive">Baud Rate Multiplier (0–100, step 2)</Label>
                    <NumberInput
                      id="num-interactive"
                      min={0}
                      max={100}
                      step={2}
                      value={numberVal}
                      onChange={(e) => setNumberVal(Number(e.target.value))}
                    />
                    <span className="font-mono text-xs text-muted-foreground">
                      Value: {numberVal}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="num-disabled">Disabled State</Label>
                    <NumberInput
                      id="num-disabled"
                      disabled
                      defaultValue={9600}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="num-invalid">Invalid State (Out of range)</Label>
                    <NumberInput
                      id="num-invalid"
                      invalid
                      defaultValue={999}
                    />
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<NumberInput min={0} max={100} step={2} value={val} onChange={...} />`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 5. SELECT */}
        {(category === "all" || category === "forms") && (
          <section id="select" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Select
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Native HTML select dropdown styled with custom pixel caret and sunken well.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="select-interactive">Display Controller</Label>
                    <Select
                      id="select-interactive"
                      value={selectVal}
                      onChange={(e) => setSelectVal(e.target.value)}
                    >
                      <option value="cga">CGA 4-Color (320x200)</option>
                      <option value="ega">EGA 16-Color (640x350)</option>
                      <option value="vga">VGA 256-Color (640x480)</option>
                      <option value="svga">SVGA High-Color (800x600)</option>
                      <option value="xga">XGA True-Color (1024x768)</option>
                    </Select>
                    <span className="font-mono text-xs text-muted-foreground">
                      Selected: <span className="font-bold uppercase text-primary">{selectVal}</span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="select-disabled">Disabled Dropdown</Label>
                    <Select id="select-disabled" disabled defaultValue="locked">
                      <option value="locked">Bus Controller Locked</option>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="select-invalid">Invalid State</Label>
                    <Select id="select-invalid" invalid defaultValue="err">
                      <option value="err">ERR: Parity Mismatch</option>
                    </Select>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Select value={mode} onChange={...}><option value="...">...</option></Select>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 6. COMBOBOX */}
        {(category === "all" || category === "forms") && (
          <section id="combobox" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Combobox
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Accessible WAI-ARIA searchable listbox with keyboard navigation, active-descendant, and empty state.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="combobox-interactive">Video Adapter (Type to filter)</Label>
                    <Combobox
                      id="combobox-interactive"
                      options={[
                        { value: "mda", label: "MDA Monochrome (720x350)" },
                        { value: "cga", label: "CGA 4-Color (320x200)" },
                        { value: "ega", label: "EGA 16-Color (640x350)" },
                        { value: "vga", label: "VGA 256-Color (640x480)" },
                        { value: "svga", label: "SVGA High-Color (800x600)" },
                        { value: "xga", label: "XGA True-Color (1024x768)" },
                        { value: "sxga", label: "SXGA 1280x1024 (Disabled)", disabled: true },
                      ]}
                      value={comboboxVal}
                      onValueChange={setComboboxVal}
                      placeholder="Search graphic adapter..."
                    />
                    <span className="font-mono text-xs text-muted-foreground">
                      Selected Value: <span className="font-bold text-primary">{comboboxVal}</span>
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="combobox-disabled">Disabled State</Label>
                      <Combobox
                        id="combobox-disabled"
                        disabled
                        options={[{ value: "vga", label: "VGA Adapter" }]}
                        defaultValue="vga"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="combobox-empty">Empty State Trigger (Search &quot;xyz&quot;)</Label>
                      <Combobox
                        id="combobox-empty"
                        options={[{ value: "alpha", label: "Alpha Module" }]}
                        placeholder="Search for unknown modules..."
                        emptyMessage="No hardware devices detected."
                      />
                    </div>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Combobox options={[{ value, label }]} value={val} onValueChange={...} />`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 7. SLIDER */}
        {(category === "all" || category === "forms") && (
          <section id="slider" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Slider
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Native range input with grooved retro channel and tactile raised square thumb.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center font-mono text-xs">
                      <Label htmlFor="slider-interactive">DSP Master Output Level</Label>
                      <span className="font-bold text-primary">{sliderVal}%</span>
                    </div>
                    <Slider
                      id="slider-interactive"
                      min={0}
                      max={100}
                      step={1}
                      value={sliderVal}
                      onChange={(e) => setSliderVal(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center font-mono text-xs">
                      <Label htmlFor="slider-disabled">Hardware Attenuator (Disabled)</Label>
                      <span className="text-muted-foreground">25%</span>
                    </div>
                    <Slider
                      id="slider-disabled"
                      disabled
                      min={0}
                      max={100}
                      defaultValue={25}
                    />
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Slider min={0} max={100} value={val} onChange={...} />`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 8. TOGGLE */}
        {(category === "all" || category === "forms") && (
          <section id="toggle" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Toggle
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Button-style pressed/unpressed state with aria-pressed and bevel inversion.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="space-y-2">
                    <span className="block font-mono text-xs text-muted-foreground">Interactive Toggle</span>
                    <Toggle
                      id="toggle-interactive"
                      pressed={togglePressed}
                      onPressedChange={setTogglePressed}
                    >
                      BOLD [B]
                    </Toggle>
                  </div>

                  <div className="space-y-2">
                    <span className="block font-mono text-xs text-muted-foreground">Sizes</span>
                    <div className="flex items-center gap-2">
                      <Toggle size="sm">SM</Toggle>
                      <Toggle size="md" defaultPressed>MD (ON)</Toggle>
                      <Toggle size="lg">LG</Toggle>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="block font-mono text-xs text-muted-foreground">Disabled</span>
                    <Toggle disabled>LOCKED</Toggle>
                  </div>
                </div>

                <span className="block font-mono text-xs text-muted-foreground">
                  Status: <span className="font-bold text-primary">{togglePressed ? "ACTIVE (PRESSED)" : "INACTIVE (RAISED)"}</span>
                </span>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Toggle pressed={active} onPressedChange={setActive}>BOLD</Toggle>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 9. TOGGLE GROUP */}
        {(category === "all" || category === "forms") && (
          <section id="toggle-group" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  ToggleGroup
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Accessible grouped toggles with single or multiple selection modes.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Single Selection Mode (Alignment)</Label>
                    <ToggleGroup
                      id="togglegroup-single"
                      type="single"
                      value={toggleGroupVal}
                      onValueChange={setToggleGroupVal}
                    >
                      <ToggleGroupItem value="left">LEFT</ToggleGroupItem>
                      <ToggleGroupItem value="center">CENTER</ToggleGroupItem>
                      <ToggleGroupItem value="right">RIGHT</ToggleGroupItem>
                      <ToggleGroupItem value="justify" disabled>JUSTIFY</ToggleGroupItem>
                    </ToggleGroup>
                    <span className="block font-mono text-xs text-muted-foreground">
                      Selected: <span className="font-bold uppercase text-primary">{toggleGroupVal || "NONE"}</span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Label>Multiple Selection Mode (Text Formatting)</Label>
                    <ToggleGroup
                      id="togglegroup-multi"
                      type="multiple"
                      defaultValue={["bold"]}
                    >
                      <ToggleGroupItem value="bold">B</ToggleGroupItem>
                      <ToggleGroupItem value="italic">I</ToggleGroupItem>
                      <ToggleGroupItem value="underline">U</ToggleGroupItem>
                      <ToggleGroupItem value="strike">S</ToggleGroupItem>
                    </ToggleGroup>
                    <span className="block font-mono text-xs text-muted-foreground">
                      Independent multi-toggle flags.
                    </span>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<ToggleGroup type="single" value={val} onValueChange={...}><ToggleGroupItem value="...">...</ToggleGroupItem></ToggleGroup>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* 10. FIELD */}
        {(category === "all" || category === "forms") && (
          <section id="field" className="space-y-4 scroll-mt-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-mono text-xl font-bold uppercase text-foreground">
                  Field
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Accessible form-field composition primitive wiring label, description, error, and aria attributes.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Normal Field with Description */}
                  <Field id="field-input-normal" required>
                    <FieldLabel>Subscriber Call Sign</FieldLabel>
                    <Input
                      id="field-input-normal"
                      placeholder="e.g. N0CALL / BBS-NODE"
                      value={fieldInputVal}
                      onChange={(e) => setFieldInputVal(e.target.value)}
                    />
                    <FieldDescription>
                      Assigned AX.25 packet radio call sign. Must be uppercase.
                    </FieldDescription>
                  </Field>

                  {/* Field with Error state using compound FieldError */}
                  <Field id="field-input-error" required invalid>
                    <FieldLabel>Data Carrier Protocol</FieldLabel>
                    <Input
                      id="field-input-error"
                      defaultValue="UNKNOWN-MODEM"
                      invalid
                    />
                    <FieldError>
                      Baud rate parity mismatch: 8N1 required
                    </FieldError>
                  </Field>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs overflow-x-auto">
                  <code>{`<Field required error="..."><FieldLabel>...</FieldLabel><Input ... /><FieldDescription>...</FieldDescription></Field>`}</code>
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
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
                  <div className="space-y-2">
                    <Label htmlFor="test-input-invalid">Invalid Parity Block</Label>
                    <Input
                      id="test-input-invalid"
                      invalid
                      defaultValue="BAD_CHECKSUM"
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

        {/* --- Phase 3C: Surfaces & Feedback Primitives --- */}
        {(category === "all" || category === "surfaces") && (
          <>
            {/* Panel */}
            <section id="panel" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Panel
                    <Badge variant="primary">Phase 3C Primitive</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Generic application and content surface with compound header, title, description, content, and footer layout.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Panel id="test-panel-compound">
                  <PanelHeader id="test-panel-header">
                    <PanelTitle id="test-panel-title">System Architecture Panel</PanelTitle>
                    <PanelDescription id="test-panel-description">
                      Configured for ISA bus arbitration and memory layout.
                    </PanelDescription>
                  </PanelHeader>
                  <PanelContent id="test-panel-content" className="space-y-2 text-xs">
                    <p>Conventional Memory: 640 KB Base RAM</p>
                    <p>Expanded Memory (EMS 4.0): 2,048 KB Paged</p>
                    <p>Extended Memory (XMS): 8,192 KB High Memory</p>
                  </PanelContent>
                  <PanelFooter id="test-panel-footer" className="justify-between">
                    <span className="text-xs text-muted-foreground">Status: NOMINAL</span>
                    <Button size="sm">Diagnostics</Button>
                  </PanelFooter>
                </Panel>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Panel variant="raised" id="test-panel-raised" className="p-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs uppercase mb-1">Raised Panel</h4>
                      <p className="text-xs text-muted-foreground">Tactile 3D bevel face.</p>
                    </div>
                    <Badge variant="outline" className="mt-4 self-start">Raised</Badge>
                  </Panel>
                  <Panel variant="inset" id="test-panel-inset" className="p-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs uppercase mb-1">Inset Panel</h4>
                      <p className="text-xs text-muted-foreground">Sunken cavity surface.</p>
                    </div>
                    <Badge variant="outline" className="mt-4 self-start">Inset</Badge>
                  </Panel>
                  <Panel variant="flat" id="test-panel-flat" className="p-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs uppercase mb-1">Flat Panel</h4>
                      <p className="text-xs text-muted-foreground">Bevel flat border.</p>
                    </div>
                    <Badge variant="outline" className="mt-4 self-start">Flat</Badge>
                  </Panel>
                  <Panel variant="default" id="test-panel-default" className="p-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs uppercase mb-1">Default Panel</h4>
                      <p className="text-xs text-muted-foreground">Border with hard shadow.</p>
                    </div>
                    <Badge variant="outline" className="mt-4 self-start">Default</Badge>
                  </Panel>
                </div>
              </div>
            </section>

            {/* GroupBox */}
            <section id="group-box" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    GroupBox
                    <Badge variant="primary">Phase 3C Primitive</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Classic desktop grouping surface powered by native semantic &lt;fieldset&gt; and &lt;legend&gt;.
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setGroupBoxDisabled(!groupBoxDisabled)}
                >
                  {groupBoxDisabled ? "Enable Fieldset" : "Disable Fieldset"}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GroupBox
                  id="test-group-box-default"
                  legend="Modem Carrier Config"
                  disabled={groupBoxDisabled}
                  className="space-y-3"
                >
                  <div className="space-y-1">
                    <Label htmlFor="gb-baud">Baud Rate</Label>
                    <Input id="gb-baud" defaultValue="57,600" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="gb-cts" defaultChecked />
                    <Label htmlFor="gb-cts">Hardware CTS/RTS</Label>
                  </div>
                </GroupBox>

                <GroupBox
                  id="test-group-box-groove"
                  variant="groove"
                  disabled={groupBoxDisabled}
                  className="space-y-3"
                >
                  <GroupBoxLegend>IRQ Routing Table</GroupBoxLegend>
                  <p className="text-xs text-muted-foreground">Dual-channel grooved perimeter.</p>
                  <div className="flex items-center gap-2">
                    <Radio id="gb-irq3" name="gb-irq" />
                    <Label htmlFor="gb-irq3">IRQ 3 (COM2)</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio id="gb-irq4" name="gb-irq" defaultChecked />
                    <Label htmlFor="gb-irq4">IRQ 4 (COM1)</Label>
                  </div>
                </GroupBox>

                <GroupBox
                  id="test-group-box-raised"
                  variant="raised"
                  legend="Locked ROM Registers"
                  disabled={true}
                  className="space-y-3"
                >
                  <p className="text-xs text-muted-foreground">Native disabled fieldset cascade.</p>
                  <Input defaultValue="F000:E05B" disabled />
                  <Button size="sm" disabled>Flash BIOS</Button>
                </GroupBox>
              </div>
            </section>

            {/* Well & Inset */}
            <section id="well-inset" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Well & Inset
                    <Badge variant="primary">Phase 3C Primitives</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Recessed, sunken content surfaces for terminal buffers, log readouts, and deep cavity containers.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Well (Recessed Regions)</CardTitle>
                    <CardDescription>Subtle sunken background with inset bevel border.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Well id="test-well-default">
                      COM1: 9600-8-N-1 initialized. Echo cancellation verified.
                    </Well>
                    <Well variant="sunken" id="test-well-sunken">
                      [MEMORY DUMP] Sector 0x1F0 read successful (512 bytes aligned).
                    </Well>
                    <Well variant="code" id="test-well-code">
                      PORT 0x3F8: UART 16550A FIFO DEPTH=16 BYTES ACTIVE
                    </Well>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Inset (Low-Level Cavity)</CardTitle>
                    <CardDescription>Foundational sunken surface primitive with optional deep shadow.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Inset id="test-inset-default" className="p-4 space-y-1">
                      <p className="font-bold text-xs uppercase">Standard Inset</p>
                      <p className="text-xs text-muted-foreground">Classic bevel-inset border geometry.</p>
                    </Inset>
                    <Inset id="test-inset-deep" deep className="p-4 space-y-1">
                      <p className="font-bold text-xs uppercase">Deep Inset</p>
                      <p className="text-xs text-muted-foreground">Bevel-inset with interior hard shadow depth.</p>
                    </Inset>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Progress */}
            <section id="progress" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Progress
                    <Badge variant="primary">Phase 3C Primitive</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Native semantic &lt;progress&gt; element with retro track, stepped fills, and animated indeterminate stripe.
                  </p>
                </div>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span>Live Buffer Flush</span>
                      <span id="test-progress-live-value">{progressVal}%</span>
                    </div>
                    <Progress id="test-progress-live" value={progressVal} max={100} />
                    <div className="flex gap-2 pt-1">
                      <Button size="sm" onClick={() => setProgressVal((v) => Math.max(0, v - 10))}>-10%</Button>
                      <Button size="sm" onClick={() => setProgressVal((v) => Math.min(100, v + 10))}>+10%</Button>
                      <Button size="sm" variant="outline" onClick={() => setProgressVal(25)}>Low (25%)</Button>
                      <Button size="sm" variant="outline" onClick={() => setProgressVal(80)}>High (80%)</Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label>Stepped Block Fill (80%)</Label>
                      <Progress id="test-progress-determinate-high" value={80} max={100} variant="stepped" />
                    </div>
                    <div className="space-y-1">
                      <Label>Low Progress (25%)</Label>
                      <Progress id="test-progress-determinate-low" value={25} max={100} />
                    </div>
                    <div className="space-y-1">
                      <Label>Success Variant (100%)</Label>
                      <Progress id="test-progress-success" value={100} max={100} variant="success" />
                    </div>
                    <div className="space-y-1">
                      <Label>Warning Variant (50%)</Label>
                      <Progress id="test-progress-warning" value={50} max={100} variant="warning" />
                    </div>
                    <div className="space-y-1">
                      <Label>Destructive Variant (15%)</Label>
                      <Progress id="test-progress-destructive" value={15} max={100} variant="destructive" />
                    </div>
                    <div className="space-y-1">
                      <Label>Indeterminate (Animated Retro Strip)</Label>
                      <Progress id="test-progress-indeterminate" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Spinner & Loading */}
            <section id="spinner-loading" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Spinner & Loading
                    <Badge variant="primary">Phase 3C Primitives</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Stepped retro pixel indicators and accessible loading composition with zero icon libraries.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Spinner (Pixel Clock)</CardTitle>
                    <CardDescription>CSS-driven stepped rotation with screen-reader text.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-center gap-2">
                        <Spinner id="test-spinner-sm" size="sm" />
                        <span className="text-[10px] text-muted-foreground">sm (16px)</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Spinner id="test-spinner-md" size="md" />
                        <span className="text-[10px] text-muted-foreground">md (24px)</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Spinner id="test-spinner-lg" size="lg" />
                        <span className="text-[10px] text-muted-foreground">lg (32px)</span>
                      </div>
                    </div>
                    <div className="bevel-inset bg-background p-3 text-xs text-muted-foreground">
                      Respects prefers-reduced-motion with static high-contrast indicator.
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Loading (Composition)</CardTitle>
                    <CardDescription>Stacked and inline compositions with live region role=&quot;status&quot;.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bevel-inset bg-background">
                      <Loading
                        id="test-loading-stacked"
                        text="Synchronizing floppy tracks..."
                        size="md"
                      />
                    </div>
                    <div className="bevel-inset bg-background p-3 flex justify-between items-center">
                      <span className="text-xs font-bold">Bus Controller</span>
                      <Loading
                        id="test-loading-inline"
                        inline
                        text="DMA Active"
                        size="sm"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skeleton */}
            <section id="skeleton" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Skeleton
                    <Badge variant="primary">Phase 3C Primitive</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Content placeholder using procedural dither patterns and stepped pulse animation.
                  </p>
                </div>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label>Line Skeletons (Configurable via className)</Label>
                    <Skeleton id="test-skeleton-line" className="h-4 w-48" />
                    <Skeleton className="h-4 w-72" />
                    <Skeleton className="h-4 w-36" />
                  </div>

                  <div className="space-y-2">
                    <Label>Composed Card Skeleton</Label>
                    <div id="test-skeleton-card" className="bevel-raised bg-bevel-face p-4 space-y-4 max-w-sm">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 shrink-0" />
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-4 w-3/4" />
                          <Skeleton className="h-3 w-1/2" />
                        </div>
                      </div>
                      <Skeleton className="h-20 w-full" />
                      <div className="flex justify-end gap-2">
                        <Skeleton className="h-7 w-16" />
                        <Skeleton className="h-7 w-20" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* EmptyState */}
            <section id="empty-state" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    EmptyState
                    <Badge variant="primary">Phase 3C Primitive</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Reusable empty-content presentation with title, description, and accessible action trigger.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EmptyState id="test-empty-state-card" variant="card">
                  <EmptyStateIcon>
                    <span className="font-mono text-2xl">[ 🖫 ]</span>
                  </EmptyStateIcon>
                  <EmptyStateTitle id="test-empty-state-title">No Floppy Disks Detected</EmptyStateTitle>
                  <EmptyStateDescription id="test-empty-state-desc">
                    Drive A: is empty. Insert a formatted 1.44MB diskette to mount volume.
                  </EmptyStateDescription>
                  <EmptyStateAction>
                    <Button
                      id="test-empty-state-btn"
                      onClick={() => setEmptyStateClicks((c) => c + 1)}
                    >
                      Insert Diskette ({emptyStateClicks})
                    </Button>
                  </EmptyStateAction>
                </EmptyState>

                <EmptyState id="test-empty-state-dashed" variant="dashed">
                  <EmptyStateTitle>Clean Work Directory</EmptyStateTitle>
                  <EmptyStateDescription>
                    No temporary batch files or scratch tapes present in working folder.
                  </EmptyStateDescription>
                  <EmptyStateAction>
                    <Button size="sm" variant="outline">
                      Create Batch Script
                    </Button>
                  </EmptyStateAction>
                </EmptyState>
              </div>
            </section>

            {/* Result */}
            <section id="result" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Result
                    <Badge variant="primary">Phase 3C Primitive</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Semantic outcome presentations for success, error, warning, and info operations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Result
                  id="test-result-success"
                  variant="success"
                  title="Disk Formatting Complete"
                  description="80 tracks formatted with 18 sectors per track. Zero bad clusters found."
                  extra={
                    <Button
                      id="test-result-btn"
                      size="sm"
                      onClick={() => setResultActionClicks((c) => c + 1)}
                    >
                      Mount Volume ({resultActionClicks})
                    </Button>
                  }
                />

                <Result
                  id="test-result-error"
                  variant="error"
                  title="General Protection Fault"
                  description="Memory parity violation detected at address 0x0040:0x0013."
                  extra={<Button size="sm" variant="destructive">Reboot System</Button>}
                />

                <Result
                  id="test-result-warning"
                  variant="warning"
                  title="Disk Quota Depleted"
                  description="Master volume contains less than 512 KB free sectors."
                  extra={<Button size="sm" variant="outline">Compress Files</Button>}
                />

                <Result
                  id="test-result-info"
                  variant="info"
                >
                  <ResultTitle>Hardware Configuration Audit</ResultTitle>
                  <ResultDescription>
                    ISA bus query detected 1x VGA adapter, 1x Sound Blaster 16.
                  </ResultDescription>
                  <ResultAction>
                    <Button size="sm">View Report</Button>
                  </ResultAction>
                </Result>
              </div>
            </section>
          </>
        )}

        {/* ================================================================== */}
        {/* CATEGORY: OVERLAYS & LAYERED INTERACTION (10 PRIMITIVES)            */}
        {/* ================================================================== */}
        {(category === "all" || category === "overlays") && (
          <>
            {/* Dialog */}
            <section id="dialog" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Dialog
                    <Badge variant="primary">Layered Overlay</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Classic retro application window modal with 3D raised bevel, titlebar, focus trapping, Escape dismiss, and body scroll locking.
                  </p>
                </div>
              </div>

              <div className="p-6 bevel-inset bg-surface-sunken space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button id="demo-dialog-trigger">Open System Properties Dialog</Button>
                    </DialogTrigger>
                    <DialogContent id="demo-dialog-modal">
                      <DialogHeader>
                        <span>SYSTEM.EXE — Memory & Hardware</span>
                      </DialogHeader>
                      <DialogBody>
                        <DialogTitle>Hardware Profile #1</DialogTitle>
                        <DialogDescription>
                          Configure extended memory manager and base I/O port address mapping.
                        </DialogDescription>
                        <div className="space-y-3 pt-2">
                          <label className="font-mono text-xs block font-bold">
                            Base Port Address:
                            <Input
                              id="demo-dialog-input"
                              defaultValue="0x0378"
                              className="mt-1 font-mono text-xs"
                            />
                          </label>
                          <label className="font-mono text-xs block font-bold">
                            DMA Channel:
                            <Input
                              defaultValue="Channel 1 (8-bit)"
                              className="mt-1 font-mono text-xs"
                            />
                          </label>
                        </div>
                      </DialogBody>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline" size="sm" id="demo-dialog-cancel">
                            Cancel
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button size="sm" id="demo-dialog-save">
                            Save Changes
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="outline"
                    id="demo-dialog-controlled-toggle"
                    onClick={() => setControlledDialogOpen(true)}
                  >
                    Launch Controlled Dialog
                  </Button>

                  <Dialog open={controlledDialogOpen} onOpenChange={setControlledDialogOpen}>
                    <DialogContent>
                      <DialogHeader>
                        <span>CONTROLLED_WINDOW</span>
                      </DialogHeader>
                      <DialogBody>
                        <DialogTitle>Controlled Modal State</DialogTitle>
                        <DialogDescription>
                          This dialog is driven directly via external React state.
                        </DialogDescription>
                        <p className="font-mono text-xs">
                          Press Escape, click outside, or click Close to release control.
                        </p>
                      </DialogBody>
                      <DialogFooter>
                        <Button
                          size="sm"
                          id="demo-dialog-controlled-close"
                          onClick={() => setControlledDialogOpen(false)}
                        >
                          Close Window
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </section>

            {/* AlertDialog */}
            <section id="alert-dialog" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    AlertDialog
                    <Badge variant="destructive">Critical Modal</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Destructive confirmation modal. Disables click-outside dismiss by default and places initial focus on Cancel to avoid accidental data loss.
                  </p>
                </div>
              </div>

              <div className="p-6 bevel-inset bg-surface-sunken space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" id="demo-alert-dialog-trigger">
                        Format Hard Drive
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent id="demo-alert-dialog-modal">
                      <AlertDialogHeader>
                        CRITICAL OPERATION WARNING
                      </AlertDialogHeader>
                      <AlertDialogBody>
                        <AlertDialogTitle>Are you absolutely certain?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This operation will permanently purge all partition tables and system records on Volume C:. This action cannot be reversed.
                        </AlertDialogDescription>
                      </AlertDialogBody>
                      <AlertDialogFooter>
                        <AlertDialogCancel
                          id="demo-alert-cancel-btn"
                          onClick={() => setAlertDialogStatus("Format Cancelled")}
                        >
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          id="demo-alert-action-btn"
                          onClick={() => setAlertDialogStatus("Volume Formatted")}
                        >
                          Yes, Format Volume
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <span
                    id="demo-alert-dialog-status"
                    className="font-mono text-xs font-bold px-3 py-1 bevel-inset bg-background"
                  >
                    Status: {alertDialogStatus}
                  </span>
                </div>
              </div>
            </section>

            {/* Popover */}
            <section id="popover" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Popover
                    <Badge variant="primary">Contextual Floating</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Anchored non-modal floating surface with viewport boundary detection, outside-click capture, and keyboard Escape listener.
                  </p>
                </div>
              </div>

              <div className="p-6 bevel-inset bg-surface-sunken">
                <div className="flex flex-wrap items-center gap-6">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button id="demo-popover-trigger">Network Adapter Info</Button>
                    </PopoverTrigger>
                    <PopoverContent id="demo-popover-content">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between border-b border-border pb-1">
                          <h4 className="font-mono text-xs font-bold uppercase">Ethernet 10BASE-T</h4>
                          <PopoverClose asChild>
                            <button
                              type="button"
                              id="demo-popover-close-btn"
                              className="retro-close-button"
                              aria-label="Close popover"
                            >
                              ✕
                            </button>
                          </PopoverClose>
                        </div>
                        <p className="font-mono text-xs text-muted-foreground">
                          Controller: Novell NE2000 Compatible
                        </p>
                        <div className="font-mono text-xs space-y-1 pt-1">
                          <div>IP: 192.168.0.42</div>
                          <div>Subnet: 255.255.255.0</div>
                          <div>Status: Link Connected</div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>

                  <Popover side="right">
                    <PopoverTrigger asChild>
                      <Button variant="outline" id="demo-popover-right-trigger">
                        Right Aligned Details
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="space-y-2">
                        <h4 className="font-mono text-xs font-bold uppercase">Right Anchored</h4>
                        <p className="font-mono text-xs text-muted-foreground">
                          Positions directly to the right and automatically flips if viewport bounds collide.
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </section>

            {/* Tooltip */}
            <section id="tooltip" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Tooltip
                    <Badge variant="primary">Interactive Hint</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Compact pixel-bordered informational hint that responds to mouse hover and keyboard focus with configurable delay.
                  </p>
                </div>
              </div>

              <div className="p-6 bevel-inset bg-surface-sunken">
                <TooltipProvider delayDuration={150}>
                  <div className="flex flex-wrap items-center gap-6">
                    <Tooltip side="top">
                      <TooltipTrigger asChild>
                        <Button id="demo-tooltip-top" size="sm">
                          Top Hint
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent id="demo-tooltip-top-content">
                        Tooltip on top [Alt+T]
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <Button id="demo-tooltip-bottom" size="sm" variant="outline">
                          Bottom Hint
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent id="demo-tooltip-bottom-content">
                        Write buffer to disk [Ctrl+S]
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip side="left">
                      <TooltipTrigger asChild>
                        <Button id="demo-tooltip-left" size="sm" variant="secondary">
                          Left Hint
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent id="demo-tooltip-left-content">
                        Execute 16-bit binary
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip side="right">
                      <TooltipTrigger asChild>
                        <Button id="demo-tooltip-right" size="sm">
                          Right Hint
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent id="demo-tooltip-right-content">
                        Sector verification passed
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>
            </section>

            {/* HoverCard */}
            <section id="hover-card" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    HoverCard
                    <Badge variant="primary">Rich Interactive Preview</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Rich preview card with interactive links and hover intent grace period so users can move their pointer directly into the card.
                  </p>
                </div>
              </div>

              <div className="p-6 bevel-inset bg-surface-sunken">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs">Authored by</span>
                  <HoverCard openDelay={200} closeDelay={300}>
                    <HoverCardTrigger asChild>
                      <button
                        type="button"
                        id="demo-hovercard-trigger"
                        className="font-mono text-xs font-bold text-primary underline underline-offset-4 cursor-pointer"
                      >
                        @sysadmin_95
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent id="demo-hovercard-content">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bevel-inset bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-sm shrink-0">
                          95
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-mono text-xs font-bold">Chief System Operator</h4>
                          <p className="font-mono text-xs text-muted-foreground">
                            Retro computing engineer & kernel maintainer at Ditherweb.
                          </p>
                          <div className="pt-2 flex items-center gap-3 font-mono text-[11px]">
                            <a
                              href="https://github.com/mrinshad"
                              target="_blank"
                              rel="noreferrer"
                              id="demo-hovercard-link"
                              className="text-primary hover:underline font-bold"
                            >
                              GitHub Profile →
                            </a>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </section>

            {/* Drawer */}
            <section id="drawer" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Drawer
                    <Badge variant="primary">Slide Surface</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Off-canvas drawer sliding from viewport edge (bottom, right, left, top). Perfect for mobile consoles and terminal logs.
                  </p>
                </div>
              </div>

              <div className="p-6 bevel-inset bg-surface-sunken">
                <div className="flex flex-wrap items-center gap-4">
                  <Drawer side={drawerSide} open={drawerOpen} onOpenChange={setDrawerOpen}>
                    <DrawerTrigger asChild>
                      <Button
                        id="demo-drawer-trigger"
                        onClick={() => {
                          setDrawerSide("bottom");
                          setDrawerOpen(true);
                        }}
                      >
                        Open Bottom Terminal Drawer
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent id="demo-drawer-content">
                      <DrawerHeader>
                        <span>TERMINAL LOG STREAM (TTY1)</span>
                      </DrawerHeader>
                      <DrawerBody>
                        <DrawerTitle>Console Output</DrawerTitle>
                        <DrawerDescription>
                          Streaming system diagnosis and interrupt requests.
                        </DrawerDescription>
                        <div className="p-3 bevel-inset bg-black text-green-400 font-mono text-xs space-y-1 max-h-40 overflow-y-auto">
                          <div>[0.000000] Linux version 1.0.0-ditherweb</div>
                          <div>[0.002130] CPU0: Cyrix Cx486DLC stepping 02</div>
                          <div>[0.004510] Memory: 16384K/16384K available</div>
                          <div>[0.010200] Checking 387 coupling... OK, math coprocessor found</div>
                          <div>[0.024000] Mounting root filesystem (minix)... OK</div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button size="sm" id="demo-drawer-close">Close Console</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>

                  <Button
                    variant="outline"
                    id="demo-drawer-right-trigger"
                    onClick={() => {
                      setDrawerSide("right");
                      setDrawerOpen(true);
                    }}
                  >
                    Open Right Slide Drawer
                  </Button>
                </div>
              </div>
            </section>

            {/* Sheet */}
            <section id="sheet" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Sheet
                    <Badge variant="primary">Worksheet & Inspector</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    High-density slide-over side panel anchored to the viewport. Designed for complex configuration panels, form workflows, and inspectors.
                  </p>
                </div>
              </div>

              <div className="p-6 bevel-inset bg-surface-sunken">
                <div className="flex flex-wrap items-center gap-4">
                  <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                      <Button id="demo-sheet-trigger">Open Configuration Sheet</Button>
                    </SheetTrigger>
                    <SheetContent id="demo-sheet-content">
                      <SheetHeader>
                        <span>DISPLAY & CHIPSET SETTINGS</span>
                      </SheetHeader>
                      <SheetBody>
                        <SheetTitle>Video Hardware Preferences</SheetTitle>
                        <SheetDescription>
                          Configure raster refresh rates, pixel scanline emulation, and CRT curvature.
                        </SheetDescription>

                        <div className="space-y-4 pt-3">
                          <div className="space-y-1">
                            <label className="font-mono text-xs font-bold block">Graphics Adapter</label>
                            <Input defaultValue="Oak Technology OTI077 VGA" className="font-mono text-xs" />
                          </div>

                          <div className="space-y-1">
                            <label className="font-mono text-xs font-bold block">Video RAM Size</label>
                            <Input defaultValue="1024 KB" className="font-mono text-xs" />
                          </div>

                          <div className="space-y-2 pt-2">
                            <label className="font-mono text-xs font-bold block">Phosphor Persistence</label>
                            <Slider defaultValue={75} />
                          </div>
                        </div>
                      </SheetBody>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button variant="outline" size="sm" id="demo-sheet-cancel">Cancel</Button>
                        </SheetClose>
                        <SheetClose asChild>
                          <Button size="sm" id="demo-sheet-save">Apply Settings</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </section>

            {/* Infrastructure Primitives: Portal, Backdrop, Overlay */}
            <section id="infrastructure" className="space-y-4 scroll-mt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
                    Portal, Backdrop & Overlay
                    <Badge variant="secondary">Foundation</Badge>
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    Low-level composable primitives providing SSR-safe DOM mounting, classic dimming/dither textures, and unified layer lifecycle management.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bevel-raised bg-surface space-y-2">
                  <h3 className="font-mono text-sm font-bold uppercase">1. Portal Primitive</h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    Teleports children cleanly into <code>#ditherweb-portal-root</code> on document body without layout leaks.
                  </p>
                  <div className="pt-2">
                    <Badge variant="outline">SSR Hydration Safe</Badge>
                    <Portal disabled>
                      <span className="sr-only" id="demo-portal-bench">Portal Initialized</span>
                    </Portal>
                  </div>
                </div>

                <div className="p-4 bevel-raised bg-surface space-y-2">
                  <h3 className="font-mono text-sm font-bold uppercase">2. Backdrop Textures</h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    Features <code>dimmed</code>, <code>dither</code>, and <code>transparent</code> modes for authentic retro screen dimming.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      id="demo-backdrop-dimmed-btn"
                      onClick={() => setBackdropPreviewVariant("dimmed")}
                    >
                      Preview Dimmed
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      id="demo-backdrop-dither-btn"
                      onClick={() => setBackdropPreviewVariant("dither")}
                    >
                      Preview Dither
                    </Button>
                  </div>
                  {backdropPreviewVariant && (
                    <Backdrop
                      id="demo-backdrop-bench"
                      variant={backdropPreviewVariant}
                      onClick={() => setBackdropPreviewVariant(null)}
                      className="cursor-pointer"
                    />
                  )}
                </div>

                <div className="p-4 bevel-raised bg-surface space-y-2">
                  <h3 className="font-mono text-sm font-bold uppercase">3. Overlay Orchestrator</h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    Manages reference-counted body scroll locks, Escape propagation, and click-outside dismissal.
                  </p>
                  <div className="pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      id="demo-overlay-trigger"
                      onClick={() => setCustomOverlayOpen(true)}
                    >
                      Test Custom Overlay
                    </Button>
                    <Overlay
                      open={customOverlayOpen}
                      onOpenChange={setCustomOverlayOpen}
                      backdropVariant="dither"
                    >
                      <div className="fixed inset-0 flex items-center justify-center p-4">
                        <div
                          id="demo-custom-overlay-card"
                          className="p-6 bevel-raised bg-surface shadow-hard-lg max-w-sm space-y-3"
                        >
                          <h4 className="font-mono text-sm font-bold uppercase">Composable Overlay</h4>
                          <p className="font-mono text-xs text-muted-foreground">
                            Rendered through custom Overlay with classic dither backdrop texture!
                          </p>
                          <Button
                            size="sm"
                            id="demo-overlay-close-btn"
                            onClick={() => setCustomOverlayOpen(false)}
                          >
                            Close Overlay
                          </Button>
                        </div>
                      </div>
                    </Overlay>
                  </div>
                </div>
              </div>
            </section>
          </>
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
