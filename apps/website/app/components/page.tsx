"use client";

import { useState } from "react";
import Link from "next/link";
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
} from "@ditherweb/ui";

type Category = "all" | "input" | "layout" | "feedback";

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

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary">
            Phase 2 Library
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">
            10 Production Primitives
          </span>
        </div>
        <h1 className="font-mono text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Component Catalog
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Every Ditherweb component is built with native accessibility semantics,
          typed props, and calibrated retro CSS tokens. Inspect interactive states and implementation details.
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
            All Primitives (10)
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
            onClick={() => setCategory("layout")}
            className={`px-3 py-1 font-bold ${
              category === "layout" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Layout & Structure (2)
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
                    <Button variant="default">Default</Button>
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

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
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
                  Text entry field with inset bevel relief, focus rings, and validation styling.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="test-input-typing">Interactive Input</Label>
                      <span id="test-input-counter" className="font-mono text-[10px] text-muted-foreground">
                        Chars: {inputText.length}
                      </span>
                    </div>
                    <Input
                      id="test-input-typing"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Type text..."
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="test-input-invalid">Invalid State</Label>
                    <Input id="test-input-invalid" defaultValue="invalid@bad" invalid />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="test-input-disabled">Disabled</Label>
                    <Input id="test-input-disabled" value="Read-only buffer" disabled />
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
                  <code>{`<Input placeholder="Search..." invalid={isInvalid} />`}</code>
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
                  Accessible form control label supporting standard htmlFor associations.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-6">
                  <Label htmlFor="sample-field" className="text-sm">
                    Active Input Label
                  </Label>
                  <Label className="text-xs text-muted-foreground">
                    Secondary Metadata Label
                  </Label>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
                  <code>{`<Label htmlFor="username">Username</Label>`}</code>
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
                  Binary toggle control with classic square sunken bevel and checkmark glyph.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-6">
                  <Checkbox
                    id="test-chk-interactive"
                    checked={chkState}
                    onChange={(e) => setChkState(e.target.checked)}
                  >
                    Interactive ({chkState ? "Checked" : "Unchecked"})
                  </Checkbox>
                  <Checkbox
                    id="test-chk-indeterminate"
                    indeterminate={chkIndeterminate}
                    onChange={() => setChkIndeterminate((v) => !v)}
                  >
                    Indeterminate State ({chkIndeterminate ? "Active" : "Cleared"})
                  </Checkbox>
                  <Checkbox
                    id="test-chk-disabled"
                    defaultChecked
                    disabled
                    onChange={() => setDisabledChkClicks((c) => c + 1)}
                  >
                    Disabled Checked ({disabledChkClicks})
                  </Checkbox>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
                  <code>{`<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>Label</Checkbox>`}</code>
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
                  Mutual exclusion selection control with circular bevels and keyboard navigation.
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

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
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

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
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
                  Compound surface container with raised bevel framing and sub-components.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-mono">Archive Volume 01</CardTitle>
                      <CardDescription className="text-xs font-mono">
                        Floppy Disk 1.44MB
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs font-mono text-muted-foreground">
                      Contains utility programs and dialer configuration files.
                    </CardContent>
                    <CardFooter className="flex justify-between text-xs font-mono">
                      <span>Tracks: 80</span>
                      <Button size="sm">Mount</Button>
                    </CardFooter>
                  </Card>

                  <Card className="bevel-inset bg-muted/20">
                    <CardHeader>
                      <CardTitle className="text-sm font-mono">Sunken Container</CardTitle>
                      <CardDescription className="text-xs font-mono">
                        Alternative Bevel Profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs font-mono text-muted-foreground">
                      Cards can be paired with bevel-inset for sunken control decks.
                    </CardContent>
                  </Card>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
                  <code>{`<Card><CardHeader><CardTitle>Title</CardTitle></CardHeader><CardContent>...</CardContent></Card>`}</code>
                </div>
              </CardContent>
            </Card>
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
                  Grooved divider line providing authentic optical depth between layout sections.
                </p>
              </div>
              <Badge variant="outline">@ditherweb/ui</Badge>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <span className="font-mono text-xs text-muted-foreground mb-2 block">
                    Horizontal Divider:
                  </span>
                  <div className="space-y-2 font-mono text-xs">
                    <div>Upper Module</div>
                    <Separator />
                    <div>Lower Module</div>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs text-muted-foreground mb-2 block">
                    Vertical Divider:
                  </span>
                  <div className="flex h-6 items-center gap-3 font-mono text-xs">
                    <span>PORT 80</span>
                    <Separator orientation="vertical" />
                    <span>PORT 443</span>
                    <Separator orientation="vertical" />
                    <span>PORT 8080</span>
                  </div>
                </div>

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
                  <code>{`<Separator orientation="horizontal" />`}</code>
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

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
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

                <div className="bevel-inset bg-background p-3 font-mono text-xs">
                  <code>{`<Alert variant="destructive"><AlertTitle>Error</AlertTitle><AlertDescription>...</AlertDescription></Alert>`}</code>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      {/* Catalog Footer Link */}
      <div className="pt-6 border-t border-border flex justify-between items-center font-mono text-xs">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          ← Back to Homepage
        </Link>
        <Link href="/playground" className="text-primary hover:underline font-bold">
          Experiment in Playground →
        </Link>
      </div>
    </div>
  );
}
