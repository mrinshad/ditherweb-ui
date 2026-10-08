"use client";

import { useState } from "react";
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
  Separator,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Slider,
  WebRing,
  Window,
  WindowTitleBar,
  WindowTitle,
  WindowContent,
  WindowControls,
  Terminal,
  TerminalHeader,
  TerminalBody,
  TerminalLine,
  TerminalPrompt,
  TerminalCommand,
  TerminalOutput,
  PixelArt,
  Dither,
  type DitherPattern,
  CRT,
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarFooter,
  SidebarTrigger,
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuSeparator,
  SubMenu,
  SubMenuTrigger,
  SubMenuContent,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
} from "@ditherweb/ui";

export interface ComponentPreviewProps {
  slug: string;
}

interface PreviewState {
  btnVariant: "primary" | "secondary" | "outline" | "destructive";
  setBtnVariant: (v: "primary" | "secondary" | "outline" | "destructive") => void;
  btnSize: "sm" | "md" | "lg";
  setBtnSize: (s: "sm" | "md" | "lg") => void;
  inputValue: string;
  setInputValue: (v: string) => void;
  switchChecked: boolean;
  setSwitchChecked: (v: boolean) => void;
  chkChecked: boolean;
  setChkChecked: (v: boolean) => void;
  radioVal: string;
  setRadioVal: (v: string) => void;
  sliderVal: number;
  setSliderVal: (v: number) => void;
  ditherPat: DitherPattern;
  setDitherPat: (p: DitherPattern) => void;
  crtPhosphor: "none" | "amber" | "green" | "mono";
  setCrtPhosphor: (p: "none" | "amber" | "green" | "mono") => void;
  isButtonDialogOpen: boolean;
  setIsButtonDialogOpen: (v: boolean) => void;
  inputInvalid: boolean;
  setInputInvalid: (v: boolean) => void;
  inputDisabled: boolean;
  setInputDisabled: (v: boolean) => void;
  alertVariant: "default" | "info" | "warning" | "destructive" | "success";
  setAlertVariant: (v: "default" | "info" | "warning" | "destructive" | "success") => void;
  badgeVariant: "default" | "primary" | "secondary" | "success" | "warning" | "destructive" | "outline";
  setBadgeVariant: (v: "default" | "primary" | "secondary" | "success" | "warning" | "destructive" | "outline") => void;
  sepOrientation: "both" | "horizontal" | "vertical";
  setSepOrientation: (v: "both" | "horizontal" | "vertical") => void;
}

export function ComponentPreview({ slug }: ComponentPreviewProps) {
  // State for interactive demos
  const [btnVariant, setBtnVariant] = useState<"primary" | "secondary" | "outline" | "destructive">("primary");
  const [btnSize, setBtnSize] = useState<"sm" | "md" | "lg">("md");
  const [inputValue, setInputValue] = useState("admin@gateway.local");
  const [switchChecked, setSwitchChecked] = useState(true);
  const [chkChecked, setChkChecked] = useState(true);
  const [radioVal, setRadioVal] = useState("vga");
  const [sliderVal, setSliderVal] = useState(65);
  const [ditherPat, setDitherPat] = useState<DitherPattern>("bayer");
  const [crtPhosphor, setCrtPhosphor] = useState<"none" | "amber" | "green" | "mono">("green");
  const [isButtonDialogOpen, setIsButtonDialogOpen] = useState(false);
  const [inputInvalid, setInputInvalid] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [alertVariant, setAlertVariant] = useState<"default" | "info" | "warning" | "destructive" | "success">("warning");
  const [badgeVariant, setBadgeVariant] = useState<"default" | "primary" | "secondary" | "success" | "warning" | "destructive" | "outline">("primary");
  const [sepOrientation, setSepOrientation] = useState<"both" | "horizontal" | "vertical">("both");

  return (
    <div className="bevel-raised bg-surface p-6 font-mono text-xs border border-border space-y-4">
      <div className="flex items-center justify-between border-b border-border pb-2 text-[11px] text-muted-foreground uppercase">
        <span className="font-bold text-foreground">Interactive Preview</span>
        <span className="bevel-inset bg-muted/40 px-1.5 py-0.5 text-primary text-[10px]">
          @ditherweb/ui
        </span>
      </div>

      <div className="bevel-inset bg-background p-6 flex flex-col items-center justify-center min-h-[160px] overflow-hidden">
        {renderPreviewContent(slug, {
          btnVariant,
          setBtnVariant,
          btnSize,
          setBtnSize,
          inputValue,
          setInputValue,
          switchChecked,
          setSwitchChecked,
          chkChecked,
          setChkChecked,
          radioVal,
          setRadioVal,
          sliderVal,
          setSliderVal,
          ditherPat,
          setDitherPat,
          crtPhosphor,
          setCrtPhosphor,
          isButtonDialogOpen,
          setIsButtonDialogOpen,
          inputInvalid,
          setInputInvalid,
          inputDisabled,
          setInputDisabled,
          alertVariant,
          setAlertVariant,
          badgeVariant,
          setBadgeVariant,
          sepOrientation,
          setSepOrientation,
        })}
      </div>
    </div>
  );
}

function renderPreviewContent(slug: string, state: PreviewState) {
  switch (slug) {
    case "button":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Dialog open={state.isButtonDialogOpen} onOpenChange={state.setIsButtonDialogOpen}>
              <DialogTrigger asChild>
                <Button variant={state.btnVariant} size={state.btnSize}>
                  Execute Command
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>COMMAND EXECUTION // NODE 01</DialogTitle>
                  <DialogDescription>
                    Confirmation required for virtual process dispatch.
                  </DialogDescription>
                </DialogHeader>
                <DialogBody>
                  <div className="bevel-inset p-3 bg-surface space-y-1 text-xs">
                    <div className="text-foreground font-bold">DISPATCH TARGET: sys.kernel.exec</div>
                    <div className="text-muted-foreground">Action confirmed using authentic Ditherweb Dialog.</div>
                  </div>
                </DialogBody>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" size="sm">Abort</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button variant="primary" size="sm">Acknowledge</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button variant="outline" size={state.btnSize} disabled>
              Disabled State
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Variant:</span>
            {(["primary", "secondary", "outline", "destructive"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => state.setBtnVariant(v)}
                className={`px-2 py-0.5 uppercase ${
                  state.btnVariant === v ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Size:</span>
            {(["sm", "md", "lg"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setBtnSize(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.btnSize === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground">Click &quot;Execute Command&quot; to test Ditherweb Dialog</span>
        </div>
      );

    case "input":
      return (
        <div className="w-full max-w-sm space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="demo-input">System Gateway Host</Label>
            <Input
              id="demo-input"
              value={state.inputValue}
              onChange={(e) => state.setInputValue(e.target.value)}
              placeholder="e.g. gateway.local"
              disabled={state.inputDisabled}
              invalid={state.inputInvalid}
            />
            {state.inputInvalid && (
              <p className="text-[10px] text-destructive font-bold">
                Invalid hostname format. Please verify DNS resolver.
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Current Value:</span>
            <code className="text-foreground">{state.inputValue || "(empty)"}</code>
          </div>

          {/* State toggles */}
          <div className="flex items-center justify-center gap-3 pt-2 border-t border-border text-[11px]">
            <button
              type="button"
              onClick={() => state.setInputInvalid(!state.inputInvalid)}
              className={`px-2 py-0.5 uppercase ${
                state.inputInvalid ? "bevel-inset bg-destructive text-destructive-foreground font-bold" : "bevel-raised"
              }`}
            >
              Toggle Invalid State
            </button>
            <button
              type="button"
              onClick={() => state.setInputDisabled(!state.inputDisabled)}
              className={`px-2 py-0.5 uppercase ${
                state.inputDisabled ? "bevel-inset bg-muted text-foreground font-bold" : "bevel-raised"
              }`}
            >
              Toggle Disabled
            </button>
          </div>
        </div>
      );

    case "label":
      return (
        <div className="w-full max-w-md bevel-raised bg-surface p-4 space-y-4">
          <div className="space-y-1">
            <div className="font-bold text-xs uppercase text-foreground">OPERATOR CREDENTIALS</div>
            <div className="text-[10px] text-muted-foreground">Accessible form labels paired with Ditherweb controls</div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="demo-label-input">
                  Station Operator ID <span className="text-destructive font-bold">*</span>
                </Label>
                <span className="text-[10px] text-muted-foreground">Required</span>
              </div>
              <Input
                id="demo-label-input"
                placeholder="e.g. operator_01"
                defaultValue="SYS_ADMIN_RINSHAD"
              />
              <p className="text-[10px] text-muted-foreground">
                Enter your alphanumeric workstation identifier.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Checkbox id="demo-label-chk" defaultChecked />
              <Label htmlFor="demo-label-chk">
                Remember terminal preferences for this browser session
              </Label>
            </div>

            <div className="flex items-center gap-2 opacity-60">
              <Checkbox id="demo-label-disabled" disabled />
              <Label htmlFor="demo-label-disabled">
                Restricted System Mode (Requires Elevated Permissions)
              </Label>
            </div>
          </div>
        </div>
      );

    case "separator":
      return (
        <div className="w-full max-w-md space-y-4">
          <div className="flex justify-center gap-2 text-[11px] pb-1 border-b border-border">
            <span className="text-muted-foreground">Orientation Mode:</span>
            {(["both", "horizontal", "vertical"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => state.setSepOrientation(mode)}
                className={`px-2 py-0.5 uppercase ${
                  state.sepOrientation === mode
                    ? "bevel-inset bg-primary text-primary-foreground font-bold"
                    : "bevel-raised"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <div className="bevel-raised bg-surface p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-xs uppercase text-foreground">WORKSTATION METRICS</div>
                <div className="text-[10px] text-muted-foreground">Telemetric bus monitor</div>
              </div>
              <Badge variant="outline" className="text-[9px]">ACTIVE</Badge>
            </div>

            {(state.sepOrientation === "both" || state.sepOrientation === "horizontal") && (
              <Separator orientation="horizontal" />
            )}

            <div className="text-xs space-y-2">
              <div className="flex items-center justify-between text-muted-foreground">
                <span>CPU Core: 42°C</span>
                {(state.sepOrientation === "both" || state.sepOrientation === "vertical") && (
                  <Separator orientation="vertical" className="h-4" />
                )}
                <span>Memory: 64MB</span>
                {(state.sepOrientation === "both" || state.sepOrientation === "vertical") && (
                  <Separator orientation="vertical" className="h-4" />
                )}
                <span>Bus: PCI 33MHz</span>
              </div>
            </div>

            {(state.sepOrientation === "both" || state.sepOrientation === "horizontal") && (
              <Separator orientation="horizontal" />
            )}

            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-muted-foreground">Channel: COM1</span>
              <div className="flex items-center h-4 space-x-2">
                <span className="text-primary font-bold">57,600 baud</span>
                {(state.sepOrientation === "both" || state.sepOrientation === "vertical") && (
                  <Separator orientation="vertical" className="h-3.5" />
                )}
                <span className="text-foreground">8-N-1</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "tabs":
      return (
        <div className="w-full max-w-md">
          <Tabs defaultValue="telemetry">
            <TabsList>
              <TabsTrigger value="telemetry">Telemetry</TabsTrigger>
              <TabsTrigger value="registers">Registers</TabsTrigger>
              <TabsTrigger value="interrupts">Interrupts</TabsTrigger>
            </TabsList>
            <TabsContent value="telemetry">
              <div className="bevel-inset p-4 bg-surface space-y-1 text-xs">
                <div className="font-bold text-foreground">STATUS: NORMAL (200 OK)</div>
                <div className="text-muted-foreground">Buffer: 4096 / 8192 bytes allocated.</div>
              </div>
            </TabsContent>
            <TabsContent value="registers">
              <div className="bevel-inset p-4 bg-surface space-y-1 text-xs">
                <div className="font-bold text-foreground">REG_AX: 0x00FF | REG_BX: 0x8000</div>
                <div className="text-muted-foreground">Zero flag set. Carry flag clear.</div>
              </div>
            </TabsContent>
            <TabsContent value="interrupts">
              <div className="bevel-inset p-4 bg-surface space-y-1 text-xs">
                <div className="font-bold text-foreground">INT 21h (DOS API SERVICES)</div>
                <div className="text-muted-foreground">Vector routed to F000:E82E.</div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      );

    case "table":
      return (
        <div className="w-full max-w-md overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Filename</TableHead>
                <TableHead>Size (Bytes)</TableHead>
                <TableHead>Modified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold text-primary">COMMAND.COM</TableCell>
                <TableCell>54,645</TableCell>
                <TableCell>05-31-1994</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-primary">CONFIG.SYS</TableCell>
                <TableCell>256</TableCell>
                <TableCell>06-12-1995</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-primary">AUTOEXEC.BAT</TableCell>
                <TableCell>128</TableCell>
                <TableCell>06-12-1995</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      );

    case "dither":
      return (
        <div className="w-full max-w-md space-y-3">
          <div className="relative overflow-hidden bevel-inset h-32 w-full flex items-center justify-center bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600">
            <Dither pattern={state.ditherPat} intensity="medium" className="absolute inset-0" />
            <span className="relative z-10 font-mono text-sm font-bold text-white bg-black/60 px-3 py-1 bevel-raised">
              PATTERN: {state.ditherPat.toUpperCase()}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
            {(["bayer", "checker", "fine", "dense", "noise"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => state.setDitherPat(p)}
                className={`px-2 py-0.5 uppercase ${
                  state.ditherPat === p ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      );

    case "crt":
      return (
        <div className="w-full max-w-md">
          <CRT phosphor={state.crtPhosphor} curvature="subtle" className="h-44 p-4">
            <div className="space-y-1 font-mono text-xs">
              <div className="font-bold uppercase tracking-wider">
                DITHERWEB CRT RASTER SUBSYSTEM
              </div>
              <p className="opacity-80">
                RESOLUTION: 640 x 480 @ 60Hz
                <br />
                VRAM: 256 KB LINEAR FRAMEBUFFER
                <br />
                READY FOR HOST COMMANDS.
              </p>
              <div className="pt-2 flex items-center gap-1 font-bold">
                <span>C:\&gt;</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </CRT>
        </div>
      );

    case "terminal":
      return (
        <div className="w-full max-w-md">
          <Terminal title="ditherweb@tty1" className="h-44">
            <TerminalHeader />
            <TerminalBody>
              <TerminalLine>
                <TerminalPrompt>user@gateway:~$</TerminalPrompt>
                <TerminalCommand> uname -a</TerminalCommand>
              </TerminalLine>
              <TerminalLine>
                <TerminalOutput>DitherwebOS 6.4.0-pixel #1 RETRO 1995</TerminalOutput>
              </TerminalLine>
              <TerminalLine>
                <TerminalPrompt>user@gateway:~$</TerminalPrompt>
                <TerminalCommand> echo &quot;Ready.&quot;</TerminalCommand>
              </TerminalLine>
              <TerminalLine>
                <TerminalOutput>Ready.</TerminalOutput>
              </TerminalLine>
            </TerminalBody>
          </Terminal>
        </div>
      );

    case "pixel-art":
      return (
        <div className="flex flex-col items-center gap-2">
          <PixelArt
            alt="Ditherweb 16-bit Floppy Disk"
            frame="pixel"
            ditherOverlay
            caption="Floppy Disk (Bevel Inset Frame)"
          >
            <div className="w-16 h-16 bg-[#1a365d] border-2 border-[#2b6cb0] p-1 flex flex-col justify-between">
              <div className="w-8 h-5 bg-[#c0c0c0] border border-black self-end" />
              <div className="w-12 h-6 bg-[#ffffff] self-center border border-black text-[8px] font-mono text-black font-bold text-center">
                BOOT.SYS
              </div>
            </div>
          </PixelArt>
        </div>
      );

    case "web-ring":
      return (
        <div className="w-full max-w-md">
          <WebRing
            currentSite="The Retro Web Designers Hub"
            ringName="Cyberspace 1996 WebRing"
            prevUrl="https://ditherweb.mrinshad.site/prev"
            nextUrl="https://ditherweb.mrinshad.site/next"
            hubUrl="https://ditherweb.mrinshad.site"
          />
        </div>
      );

    case "card":
      return (
        <Card className="w-full max-w-sm bevel-raised bg-surface">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="primary" className="text-[9px]">HARDWARE NODE</Badge>
              <span className="text-[10px] text-muted-foreground font-mono">NODE #04</span>
            </div>
            <CardTitle className="text-sm font-bold uppercase mt-1">Telemetry Sensor Monitor</CardTitle>
            <CardDescription className="text-xs">
              Live thermodynamic bus readings from primary workstation rack.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="flex justify-between border-b border-border/50 pb-1">
              <span className="text-muted-foreground">CPU Core Temp:</span>
              <span className="font-bold text-foreground">38.4°C</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-1">
              <span className="text-muted-foreground">VRAM Alloc:</span>
              <span className="font-bold text-foreground">128 MB / 256 MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bus Latency:</span>
              <span className="font-bold text-success">● 14ms (Optimal)</span>
            </div>
          </CardContent>
          <CardFooter className="pt-2 border-t border-border flex justify-between items-center">
            <span className="text-[10px] text-muted-foreground">Status: Nominal</span>
            <Button variant="primary" size="sm">Acknowledge</Button>
          </CardFooter>
        </Card>
      );

    case "badge":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="default">DEFAULT</Badge>
            <Badge variant="primary">PRIMARY</Badge>
            <Badge variant="secondary">SECONDARY</Badge>
            <Badge variant="success">ONLINE</Badge>
            <Badge variant="warning">ALERT</Badge>
            <Badge variant="destructive">HALTED</Badge>
            <Badge variant="outline">V0.1.0</Badge>
          </div>

          <div className="bevel-raised bg-surface p-3 w-full space-y-2 text-center">
            <div className="text-[10px] text-muted-foreground uppercase font-bold">
              Active Variant Highlight: <span className="text-foreground">{state.badgeVariant.toUpperCase()}</span>
            </div>
            <div className="flex justify-center">
              <Badge variant={state.badgeVariant} className="text-xs px-3 py-1">
                DEMO: {state.badgeVariant.toUpperCase()}
              </Badge>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px]">
            {(["default", "primary", "secondary", "success", "warning", "destructive", "outline"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => state.setBadgeVariant(v)}
                className={`px-2 py-0.5 uppercase ${
                  state.badgeVariant === v ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      );

    case "alert":
      return (
        <div className="w-full max-w-md space-y-4">
          <Alert variant={state.alertVariant}>
            <AlertTitle className="uppercase font-bold">
              {state.alertVariant === "destructive"
                ? "CRITICAL BUS FAULT"
                : state.alertVariant === "warning"
                  ? "MODEM CARRIER LOSS"
                  : state.alertVariant === "success"
                    ? "HANDSHAKE ESTABLISHED"
                    : state.alertVariant === "info"
                      ? "SYSTEM ADVISORY"
                      : "OPERATIONAL NOTICE"}
            </AlertTitle>
            <AlertDescription className="text-xs">
              {state.alertVariant === "destructive"
                ? "Parity check failed on memory bank 0x3F. System halted to prevent buffer corruption."
                : state.alertVariant === "warning"
                  ? "Carrier signal lost on COM2 serial link. Retrying handshake in 5 seconds."
                  : state.alertVariant === "success"
                    ? "Dialup carrier verified at 57,600 baud. Secure terminal channel open."
                    : state.alertVariant === "info"
                      ? "Firmware upgrade v2.41 scheduled for 03:00 UTC maintenance window."
                      : "Standard system telemetry broadcast active on all virtual nodes."}
            </AlertDescription>
          </Alert>

          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-border text-[11px]">
            <span className="text-muted-foreground mr-1">Variant:</span>
            {(["info", "warning", "destructive", "success", "default"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => state.setAlertVariant(v)}
                className={`px-2 py-0.5 uppercase ${
                  state.alertVariant === v ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      );

    case "switch":
      return (
        <div className="w-full max-w-sm bevel-raised bg-surface p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xs uppercase text-foreground">HARDWARE CONTROL TOGGLES</div>
            <Badge variant={state.switchChecked ? "success" : "outline"} className="text-[9px]">
              {state.switchChecked ? "ACCELERATED" : "SOFTWARE"}
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="preview-switch">
                Hardware Vector Acceleration
              </Label>
              <Switch
                id="preview-switch"
                checked={state.switchChecked}
                onChange={(e) => state.setSwitchChecked(e.target.checked)}
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="preview-switch-2">
                Floyd-Steinberg Error Diffusion
              </Label>
              <Switch id="preview-switch-2" defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-3 opacity-60">
              <Label htmlFor="preview-switch-3">
                Overclock Clock Multiplier (Locked)
              </Label>
              <Switch id="preview-switch-3" disabled />
            </div>
          </div>
        </div>
      );

    case "checkbox":
      return (
        <div className="w-full max-w-sm bevel-raised bg-surface p-4 space-y-3">
          <div className="font-bold text-xs uppercase text-foreground">SYSTEM SETTINGS CHECKLIST</div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2.5">
              <Checkbox
                id="preview-chk-1"
                checked={state.chkChecked}
                onChange={(e) => state.setChkChecked(e.target.checked)}
              />
              <Label htmlFor="preview-chk-1">
                Enable 4×4 Bayer Dithering Matrix ({state.chkChecked ? "ON" : "OFF"})
              </Label>
            </div>
            <div className="flex items-center gap-2.5">
              <Checkbox id="preview-chk-2" defaultChecked />
              <Label htmlFor="preview-chk-2">Simulate 56k Baud Audio Handshake</Label>
            </div>
            <div className="flex items-center gap-2.5">
              <Checkbox id="preview-chk-3" />
              <Label htmlFor="preview-chk-3">Enable CRT Curvature Distortion</Label>
            </div>
            <div className="flex items-center gap-2.5 opacity-60">
              <Checkbox id="preview-chk-4" disabled defaultChecked />
              <Label htmlFor="preview-chk-4">Core Telemetry Daemon (Locked)</Label>
            </div>
          </div>
        </div>
      );

    case "radio":
      return (
        <div className="w-full max-w-sm bevel-raised bg-surface p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xs uppercase text-foreground">DISPLAY RESOLUTION</div>
            <span className="text-[10px] text-primary font-bold">{state.radioVal.toUpperCase()}</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Radio
                id="r-vga"
                name="radio-demo"
                value="vga"
                checked={state.radioVal === "vga"}
                onChange={() => state.setRadioVal("vga")}
              />
              <Label htmlFor="r-vga">Standard VGA (640 × 480 @ 60Hz)</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="r-svga"
                name="radio-demo"
                value="svga"
                checked={state.radioVal === "svga"}
                onChange={() => state.setRadioVal("svga")}
              />
              <Label htmlFor="r-svga">Super VGA (800 × 600 @ 75Hz)</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="r-xga"
                name="radio-demo"
                value="xga"
                checked={state.radioVal === "xga"}
                onChange={() => state.setRadioVal("xga")}
              />
              <Label htmlFor="r-xga">Extended Graphics (1024 × 768 @ 85Hz)</Label>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <Radio id="r-disabled" name="radio-demo" value="disabled" disabled />
              <Label htmlFor="r-disabled">DirectX 9.0 Accelerated (Hardware Unavailable)</Label>
            </div>
          </div>
        </div>
      );

    case "slider":
      return (
        <div className="w-full max-w-sm space-y-2">
          <div className="flex justify-between text-xs">
            <span>DAC Output Voltage:</span>
            <span className="font-bold text-primary">{state.sliderVal}%</span>
          </div>
          <Slider
            min={0}
            max={100}
            value={state.sliderVal}
            onChange={(e) => state.setSliderVal(Number(e.target.value))}
          />
        </div>
      );

    case "window":
      return (
        <Window className="w-full max-w-md">
          <WindowTitleBar>
            <WindowTitle>SYSTEM_PROPERTIES.EXE</WindowTitle>
            <WindowControls />
          </WindowTitleBar>
          <WindowContent className="p-4 space-y-2">
            <div className="font-bold">Intel 80486DX2 @ 66MHz</div>
            <p className="text-muted-foreground">Conventional Memory: 640 KB Base + 15,360 KB Extended.</p>
          </WindowContent>
        </Window>
      );

    case "sidebar":
      return (
        <SidebarProvider defaultOpen>
          <div className="flex h-56 w-full max-w-md border border-border bg-background">
            <Sidebar className="h-full static">
              <SidebarHeader>
                <div className="flex items-center justify-between">
                  <span className="font-bold">App</span>
                  <SidebarTrigger />
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Menu</SidebarGroupLabel>
                  <SidebarItem href="#overview" active icon={<span>⌂</span>}>Overview</SidebarItem>
                  <SidebarItem href="#items" badge="3" icon={<span>▣</span>}>Items</SidebarItem>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <span className="text-[10px] text-muted-foreground">Status: OK</span>
              </SidebarFooter>
            </Sidebar>
            <div className="flex-1 p-4 flex items-center justify-center text-xs text-muted-foreground">
              Main Canvas
            </div>
          </div>
        </SidebarProvider>
      );

    case "menu":
      return (
        <div className="flex flex-col items-center justify-center p-8 gap-4 min-h-[300px]">
          <Menu>
            <MenuTrigger id="demo-menu-trigger" className="h-8 px-3 text-xs bevel-raised">
              Options Menu ▾
            </MenuTrigger>
            <MenuContent id="demo-menu-content" className="w-56" align="start">
              <MenuLabel>Display &amp; View</MenuLabel>
              <MenuCheckboxItem id="menu-check-grid" checked={true}>Show Grid Lines</MenuCheckboxItem>
              <MenuCheckboxItem id="menu-check-crt" checked={false}>Monochrome CRT</MenuCheckboxItem>
              <MenuSeparator />
              <MenuLabel>Resolution</MenuLabel>
              <MenuRadioItem id="menu-radio-vga" checked={true}>640 × 480 VGA</MenuRadioItem>
              <MenuRadioItem id="menu-radio-svga" checked={false}>800 × 600 SVGA</MenuRadioItem>
              <MenuSeparator />
              <MenuItem id="menu-item-save" shortcut="Ctrl+S">Save Preset</MenuItem>
              <SubMenu>
                <SubMenuTrigger id="menu-item-submenu">More Utilities</SubMenuTrigger>
                <SubMenuContent id="demo-submenu-content">
                  <MenuItem>Calibrate Phosphor</MenuItem>
                  <MenuItem>Dither Palette Map</MenuItem>
                  <MenuItem disabled>Hardware Accelerate</MenuItem>
                </SubMenuContent>
              </SubMenu>
              <MenuSeparator />
              <MenuItem id="menu-item-disabled" disabled>System Reboot (Locked)</MenuItem>
            </MenuContent>
          </Menu>
          <span className="text-xs text-muted-foreground font-mono">
            Click trigger or press Enter/Space to open Ditherweb Menu dropdown
          </span>
        </div>
      );

    case "context-menu":
      return (
        <div className="flex flex-col items-center justify-center p-6 gap-2">
          <ContextMenu>
            <ContextMenuTrigger
              id="demo-context-trigger"
              className="w-full max-w-sm h-32 border-2 border-dashed border-border bg-surface flex flex-col items-center justify-center p-4 text-center cursor-context-menu select-none"
            >
              <span className="font-bold text-xs uppercase text-foreground">Workstation Canvas</span>
              <span className="text-[11px] text-muted-foreground mt-1">Right-click anywhere inside this box</span>
            </ContextMenuTrigger>
            <ContextMenuContent id="demo-context-content" className="w-48">
              <ContextMenuLabel>Canvas Actions</ContextMenuLabel>
              <ContextMenuItem shortcut="Ctrl+R">Refresh Buffer</ContextMenuItem>
              <ContextMenuItem>Invert Palette</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem disabled>Lock Workspace</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      );

    default:
      // Generic clean fallback preview for any other primitive
      return (
        <div className="p-4 text-center space-y-2">
          <div className="font-bold text-foreground uppercase">{slug} Primitive</div>
          <div className="text-muted-foreground text-xs">
            Production primitive exported from <code className="text-primary font-bold">@ditherweb/ui</code>.
          </div>
          <div className="pt-2">
            <Badge variant="primary">Stable Production Component</Badge>
          </div>
        </div>
      );
  }
}
