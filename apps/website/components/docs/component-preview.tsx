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
}

export function ComponentPreview({ slug }: ComponentPreviewProps) {
  // State for interactive demos
  const [btnVariant, setBtnVariant] = useState<"primary" | "secondary" | "outline" | "destructive">("primary");
  const [btnSize, setBtnSize] = useState<"sm" | "md" | "lg">("md");
  const [inputValue, setInputValue] = useState("admin@gateway.local");
  const [switchChecked, setSwitchChecked] = useState(true);
  const [chkChecked, setChkChecked] = useState(true);
  const [radioVal, setRadioVal] = useState("opt1");
  const [sliderVal, setSliderVal] = useState(65);
  const [ditherPat, setDitherPat] = useState<DitherPattern>("bayer");
  const [crtPhosphor, setCrtPhosphor] = useState<"none" | "amber" | "green" | "mono">("green");

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
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              variant={state.btnVariant}
              size={state.btnSize}
              onClick={() => alert("Button clicked!")}
            >
              Execute Command
            </Button>
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
        </div>
      );

    case "dialog":
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">Launch System Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>MODEM CARRIER CONFIGURATION</DialogTitle>
              <DialogDescription>
                Configure hardware serial baud rate and parity flags for COM1.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Confirming this action will reset connection buffers and reinitialize the Hayes command set.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Abort</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="primary">Save &amp; Connect</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

    case "input":
      return (
        <div className="w-full max-w-sm space-y-3">
          <div className="space-y-1">
            <Label htmlFor="demo-input">System Gateway Host</Label>
            <Input
              id="demo-input"
              value={state.inputValue}
              onChange={(e) => state.setInputValue(e.target.value)}
              placeholder="e.g. gateway.local"
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Current Value:</span>
            <code className="text-foreground">{state.inputValue}</code>
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
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Hardware Monitor</CardTitle>
            <CardDescription>Sensor node cluster #04</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="text-xs">CPU Core: 38.4°C</div>
            <div className="text-xs text-muted-foreground">Status: Optimal operation</div>
          </CardContent>
          <CardFooter>
            <Button variant="primary" size="sm">Acknowledge</Button>
          </CardFooter>
        </Card>
      );

    case "badge":
      return (
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="primary">PRIMARY</Badge>
          <Badge variant="secondary">SECONDARY</Badge>
          <Badge variant="success">ONLINE</Badge>
          <Badge variant="destructive">HALTED</Badge>
          <Badge variant="outline">V0.1.0</Badge>
        </div>
      );

    case "alert":
      return (
        <div className="w-full max-w-md">
          <Alert variant="warning">
            <AlertTitle>MODEM CARRIER LOSS</AlertTitle>
            <AlertDescription>
              Carrier signal lost on COM2 serial link. Retrying handshake in 5 seconds.
            </AlertDescription>
          </Alert>
        </div>
      );

    case "switch":
      return (
        <div className="flex items-center gap-3">
          <Switch
            id="preview-switch"
            checked={state.switchChecked}
            onChange={(e) => state.setSwitchChecked(e.target.checked)}
          />
          <Label htmlFor="preview-switch">
            Hardware Acceleration ({state.switchChecked ? "ACTIVE" : "OFF"})
          </Label>
        </div>
      );

    case "checkbox":
      return (
        <div className="flex items-center gap-3">
          <Checkbox
            id="preview-chk"
            checked={state.chkChecked}
            onChange={(e) => state.setChkChecked(e.target.checked)}
          />
          <Label htmlFor="preview-chk">
            Enable 4x4 Bayer Dithering Matrix
          </Label>
        </div>
      );

    case "radio":
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Radio
              id="r1"
              name="radio-demo"
              value="opt1"
              checked={state.radioVal === "opt1"}
              onChange={() => state.setRadioVal("opt1")}
            />
            <Label htmlFor="r1">Standard VGA (640x480)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="r2"
              name="radio-demo"
              value="opt2"
              checked={state.radioVal === "opt2"}
              onChange={() => state.setRadioVal("opt2")}
            />
            <Label htmlFor="r2">Super VGA (800x600)</Label>
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
