"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type PlaygroundTarget = "button" | "badge" | "alert" | "input" | "switch" | "checkbox";

export default function PlaygroundPage() {
  const [target, setTarget] = useState<PlaygroundTarget>("button");
  const [backdrop, setBackdrop] = useState<"plain" | "sunken" | "dither-fine" | "dither-medium">("plain");
  const [copied, setCopied] = useState(false);

  // Button Playground State
  const [btnVariant, setBtnVariant] = useState<"default" | "primary" | "secondary" | "outline" | "destructive" | "ghost">("primary");
  const [btnSize, setBtnSize] = useState<"sm" | "md" | "lg">("md");
  const [btnText, setBtnText] = useState("Execute Command");
  const [btnDisabled, setBtnDisabled] = useState(false);

  // Badge Playground State
  const [badgeVariant, setBadgeVariant] = useState<"default" | "primary" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info">("success");
  const [badgeText, setBadgeText] = useState("SYSTEM READY");

  // Alert Playground State
  const [alertVariant, setAlertVariant] = useState<"default" | "info" | "success" | "warning" | "destructive">("warning");
  const [alertTitle, setAlertTitle] = useState("MODEM STATUS: CARRIER LOST");
  const [alertDesc, setAlertDesc] = useState("Remote peer terminated connection on COM2 serial port.");

  // Input Playground State
  const [inputVal, setInputVal] = useState("admin@gateway.local");
  const [inputInvalid, setInputInvalid] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  // Switch Playground State
  const [switchChecked, setSwitchChecked] = useState(true);
  const [switchDisabled, setSwitchDisabled] = useState(false);
  const [switchLabel, setSwitchLabel] = useState("CRT Raster Emulation");

  // Checkbox Playground State
  const [chkChecked, setChkChecked] = useState(true);
  const [chkDisabled, setChkDisabled] = useState(false);
  const [chkLabel, setChkLabel] = useState("Enable Bayer Dithering Matrix");

  // Dynamic Code Generation
  const generateCode = () => {
    switch (target) {
      case "button":
        return `<Button\n  variant="${btnVariant}"\n  size="${btnSize}"${btnDisabled ? "\n  disabled" : ""}\n>\n  ${btnText}\n</Button>`;
      case "badge":
        return `<Badge variant="${badgeVariant}">\n  ${badgeText}\n</Badge>`;
      case "alert":
        return `<Alert variant="${alertVariant}">\n  <AlertTitle>${alertTitle}</AlertTitle>\n  <AlertDescription>\n    ${alertDesc}\n  </AlertDescription>\n</Alert>`;
      case "input":
        return `<Input\n  value="${inputVal}"${inputInvalid ? "\n  invalid" : ""}${inputDisabled ? "\n  disabled" : ""}\n  placeholder="Enter value..."\n/>`;
      case "switch":
        return `<Switch\n  id="switch-demo"\n  checked={${switchChecked}}\n  onChange={(e) => setChecked(e.target.checked)}${switchDisabled ? "\n  disabled" : ""}\n>\n  ${switchLabel}\n</Switch>`;
      case "checkbox":
        return `<Checkbox\n  id="chk-demo"\n  checked={${chkChecked}}\n  onChange={(e) => setChecked(e.target.checked)}${chkDisabled ? "\n  disabled" : ""}\n>\n  ${chkLabel}\n</Checkbox>`;
    }
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(generateCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const backdropClasses = {
    plain: "bg-background",
    sunken: "bg-surface-sunken",
    "dither-fine": "bg-dither-fine bg-background",
    "dither-medium": "bg-dither-medium bg-background",
  }[backdrop];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary">
            Interactive Lab
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">
            Live Component Sandbox
          </span>
        </div>
        <h1 className="font-mono text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Component Playground
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Test component variants, states, and props in real time. Inspect dynamic code generation and preview live behaviors.
        </p>

        {/* Component Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-border pb-4 font-mono text-xs">
          {(
            [
              { id: "button", label: "Button" },
              { id: "badge", label: "Badge" },
              { id: "alert", label: "Alert" },
              { id: "input", label: "Input" },
              { id: "switch", label: "Switch" },
              { id: "checkbox", label: "Checkbox" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTarget(item.id)}
              className={`px-3 py-1 font-bold ${
                target === item.id
                  ? "bevel-inset bg-muted text-primary"
                  : "bevel-raised"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="space-y-6 lg:col-span-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-mono uppercase">
                Configuration Deck
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-mono text-xs">
              {/* Target-Specific Controls */}
              {target === "button" && (
                <div className="space-y-3">
                  <div>
                    <Label className="block mb-1 text-[11px] text-muted-foreground uppercase">
                      Variant
                    </Label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {(["primary", "default", "secondary", "outline", "destructive", "ghost"] as const).map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setBtnVariant(v)}
                          className={`px-2 py-1 uppercase text-[10px] ${
                            btnVariant === v ? "bevel-inset bg-muted font-bold text-primary" : "bevel-raised"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="block mb-1 text-[11px] text-muted-foreground uppercase">
                      Size
                    </Label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(["sm", "md", "lg"] as const).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setBtnSize(s)}
                          className={`px-2 py-1 uppercase text-[10px] ${
                            btnSize === s ? "bevel-inset bg-muted font-bold text-primary" : "bevel-raised"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="btn-text-field" className="text-[11px] text-muted-foreground uppercase">
                      Button Label
                    </Label>
                    <Input
                      id="btn-text-field"
                      value={btnText}
                      onChange={(e) => setBtnText(e.target.value)}
                    />
                  </div>

                  <div className="pt-1">
                    <Checkbox
                      id="btn-disabled-chk"
                      checked={btnDisabled}
                      onChange={(e) => setBtnDisabled(e.target.checked)}
                    >
                      Disabled State
                    </Checkbox>
                  </div>
                </div>
              )}

              {target === "badge" && (
                <div className="space-y-3">
                  <div>
                    <Label className="block mb-1 text-[11px] text-muted-foreground uppercase">
                      Variant
                    </Label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {(["default", "primary", "secondary", "outline", "success", "warning", "destructive", "info"] as const).map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setBadgeVariant(v)}
                          className={`px-2 py-1 uppercase text-[10px] ${
                            badgeVariant === v ? "bevel-inset bg-muted font-bold text-primary" : "bevel-raised"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="badge-text-field" className="text-[11px] text-muted-foreground uppercase">
                      Badge Content
                    </Label>
                    <Input
                      id="badge-text-field"
                      value={badgeText}
                      onChange={(e) => setBadgeText(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {target === "alert" && (
                <div className="space-y-3">
                  <div>
                    <Label className="block mb-1 text-[11px] text-muted-foreground uppercase">
                      Variant
                    </Label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {(["default", "info", "success", "warning", "destructive"] as const).map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setAlertVariant(v)}
                          className={`px-2 py-1 uppercase text-[10px] ${
                            alertVariant === v ? "bevel-inset bg-muted font-bold text-primary" : "bevel-raised"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="alert-title-field" className="text-[11px] text-muted-foreground uppercase">
                      Alert Title
                    </Label>
                    <Input
                      id="alert-title-field"
                      value={alertTitle}
                      onChange={(e) => setAlertTitle(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="alert-desc-field" className="text-[11px] text-muted-foreground uppercase">
                      Description
                    </Label>
                    <Input
                      id="alert-desc-field"
                      value={alertDesc}
                      onChange={(e) => setAlertDesc(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {target === "input" && (
                <div className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="inp-preview-field" className="text-[11px] text-muted-foreground uppercase">
                      Current Value
                    </Label>
                    <Input
                      id="inp-preview-field"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                    />
                  </div>
                  <div className="pt-1">
                    <Checkbox
                      id="inp-invalid-chk"
                      checked={inputInvalid}
                      onChange={(e) => setInputInvalid(e.target.checked)}
                    >
                      Invalid State (invalid prop)
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox
                      id="inp-disabled-chk"
                      checked={inputDisabled}
                      onChange={(e) => setInputDisabled(e.target.checked)}
                    >
                      Disabled Attribute
                    </Checkbox>
                  </div>
                </div>
              )}

              {target === "switch" && (
                <div className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="switch-label-field" className="text-[11px] text-muted-foreground uppercase">
                      Switch Label
                    </Label>
                    <Input
                      id="switch-label-field"
                      value={switchLabel}
                      onChange={(e) => setSwitchLabel(e.target.value)}
                    />
                  </div>
                  <div className="pt-1">
                    <Checkbox
                      id="switch-chk-state"
                      checked={switchChecked}
                      onChange={(e) => setSwitchChecked(e.target.checked)}
                    >
                      Checked
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox
                      id="switch-disabled-chk"
                      checked={switchDisabled}
                      onChange={(e) => setSwitchDisabled(e.target.checked)}
                    >
                      Disabled
                    </Checkbox>
                  </div>
                </div>
              )}

              {target === "checkbox" && (
                <div className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="chk-label-field" className="text-[11px] text-muted-foreground uppercase">
                      Checkbox Label
                    </Label>
                    <Input
                      id="chk-label-field"
                      value={chkLabel}
                      onChange={(e) => setChkLabel(e.target.value)}
                    />
                  </div>
                  <div className="pt-1">
                    <Checkbox
                      id="chk-state-box"
                      checked={chkChecked}
                      onChange={(e) => setChkChecked(e.target.checked)}
                    >
                      Checked
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox
                      id="chk-disabled-box"
                      checked={chkDisabled}
                      onChange={(e) => setChkDisabled(e.target.checked)}
                    >
                      Disabled
                    </Checkbox>
                  </div>
                </div>
              )}

              <Separator />

              {/* Backdrop Canvas Switcher */}
              <div>
                <Label className="block mb-1 text-[11px] text-muted-foreground uppercase">
                  Preview Canvas Substrate
                </Label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    [
                      { id: "plain", label: "Canvas" },
                      { id: "sunken", label: "Sunken Well" },
                      { id: "dither-fine", label: "Fine Dither" },
                      { id: "dither-medium", label: "Med Dither" },
                    ] as const
                  ).map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBackdrop(b.id)}
                      className={`px-2 py-1 uppercase text-[10px] ${
                        backdrop === b.id
                          ? "bevel-inset bg-muted font-bold text-primary"
                          : "bevel-raised"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Preview & Code Column */}
        <div className="space-y-6 lg:col-span-8">
          {/* Live Stage */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="font-bold uppercase tracking-wider text-muted-foreground">
                Live Render Stage
              </span>
              <span className="text-[11px] text-muted-foreground">
                Target: {target.toUpperCase()}
              </span>
            </div>

            <div
              className={`bevel-inset min-h-[260px] p-8 flex items-center justify-center transition-colors ${backdropClasses}`}
            >
              {target === "button" && (
                <Button
                  variant={btnVariant}
                  size={btnSize}
                  disabled={btnDisabled}
                  onClick={() => alert("Button clicked!")}
                >
                  {btnText}
                </Button>
              )}

              {target === "badge" && (
                <Badge variant={badgeVariant}>
                  {badgeText}
                </Badge>
              )}

              {target === "alert" && (
                <div className="w-full max-w-md">
                  <Alert variant={alertVariant}>
                    <AlertTitle>{alertTitle}</AlertTitle>
                    <AlertDescription>{alertDesc}</AlertDescription>
                  </Alert>
                </div>
              )}

              {target === "input" && (
                <div className="w-full max-w-sm space-y-1.5">
                  <Label htmlFor="live-inp-preview">Form Field Preview</Label>
                  <Input
                    id="live-inp-preview"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    invalid={inputInvalid}
                    disabled={inputDisabled}
                    placeholder="Input placeholder..."
                  />
                </div>
              )}

              {target === "switch" && (
                <Switch
                  id="live-switch-preview"
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                  disabled={switchDisabled}
                >
                  {switchLabel}
                </Switch>
              )}

              {target === "checkbox" && (
                <Checkbox
                  id="live-chk-preview"
                  checked={chkChecked}
                  onChange={(e) => setChkChecked(e.target.checked)}
                  disabled={chkDisabled}
                >
                  {chkLabel}
                </Checkbox>
              )}
            </div>
          </div>

          {/* Generated JSX Snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="font-bold uppercase tracking-wider text-muted-foreground">
                Generated Component Code
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="bevel-raised active:bevel-pressed px-2.5 py-0.5 font-mono text-xs font-bold text-foreground select-none"
              >
                {copied ? "✓ Copied!" : "Copy JSX"}
              </button>
            </div>

            <div className="bevel-inset bg-background p-4 overflow-x-auto">
              <pre className="font-mono text-xs text-foreground leading-relaxed">
                <code>{generateCode()}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="pt-6 border-t border-border flex justify-between items-center font-mono text-xs">
        <Link href="/components" className="text-muted-foreground hover:text-foreground">
          ← Back to Components Catalog
        </Link>
        <Link href="/docs" className="text-primary hover:underline font-bold">
          View Documentation & Tokens →
        </Link>
      </div>
    </div>
  );
}
