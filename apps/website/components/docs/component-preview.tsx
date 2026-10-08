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
  Heading,
  type HeadingLevel,
  type HeadingSize,
  Text,
  type TextSize,
  type TextWeight,
  type TextVariant,
  Link as UiLink,
  Code,
  Kbd,
  Blockquote,
  List,
  ListItem,
  type ListType,
  type ListVariant,
  Container,
  type ContainerSize,
  Box,
  type BoxElement,
  Stack,
  type StackDirection,
  type StackGap,
  Flex,
  type FlexJustify,
  type FlexAlign,
  Grid,
  type GridColumns,
  type GridGap,
  Spacer,
  type SpacerSize,
  AspectRatio,
  ScrollArea,
  type ScrollAreaOrientation,
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

  // Typography states
  headingLevel: HeadingLevel;
  setHeadingLevel: (l: HeadingLevel) => void;
  headingSize: HeadingSize | "auto";
  setHeadingSize: (s: HeadingSize | "auto") => void;
  textSize: TextSize;
  setTextSize: (s: TextSize) => void;
  textWeight: TextWeight;
  setTextWeight: (w: TextWeight) => void;
  textVariant: TextVariant;
  setTextVariant: (v: TextVariant) => void;
  textMono: boolean;
  setTextMono: (m: boolean) => void;
  linkVariant: "default" | "subtle" | "underline";
  setLinkVariant: (v: "default" | "subtle" | "underline") => void;
  linkClicks: number;
  setLinkClicks: (n: number) => void;
  codeCopied: boolean;
  setCodeCopied: (c: boolean) => void;
  lastKeyPressed: string;
  setLastKeyPressed: (k: string) => void;
  blockquoteQuoteIdx: number;
  setBlockquoteQuoteIdx: (i: number) => void;
  blockquoteShowCite: boolean;
  setBlockquoteShowCite: (s: boolean) => void;
  listType: ListType;
  setListType: (t: ListType) => void;
  listVariant: ListVariant;
  setListVariant: (v: ListVariant) => void;

  // Layout states
  containerSize: ContainerSize;
  setContainerSize: (s: ContainerSize) => void;
  boxAs: BoxElement;
  setBoxAs: (a: BoxElement) => void;
  boxPreset: "raised" | "inset" | "flat";
  setBoxPreset: (p: "raised" | "inset" | "flat") => void;
  stackDirection: StackDirection;
  setStackDirection: (d: StackDirection) => void;
  stackGap: StackGap;
  setStackGap: (g: StackGap) => void;
  flexJustify: FlexJustify;
  setFlexJustify: (j: FlexJustify) => void;
  flexAlign: FlexAlign;
  setFlexAlign: (a: FlexAlign) => void;
  gridCols: GridColumns;
  setGridCols: (c: GridColumns) => void;
  gridGap: GridGap;
  setGridGap: (g: GridGap) => void;
  aspectRatioRatio: number;
  setAspectRatioRatio: (r: number) => void;
  scrollAreaOrientation: ScrollAreaOrientation;
  setScrollAreaOrientation: (o: ScrollAreaOrientation) => void;
  spacerSize: SpacerSize;
  setSpacerSize: (s: SpacerSize) => void;
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

  // Typography interactive state
  const [headingLevel, setHeadingLevel] = useState<HeadingLevel>(2);
  const [headingSize, setHeadingSize] = useState<HeadingSize | "auto">("auto");
  const [textSize, setTextSize] = useState<TextSize>("base");
  const [textWeight, setTextWeight] = useState<TextWeight>("normal");
  const [textVariant, setTextVariant] = useState<TextVariant>("default");
  const [textMono, setTextMono] = useState(false);
  const [linkVariant, setLinkVariant] = useState<"default" | "subtle" | "underline">("default");
  const [linkClicks, setLinkClicks] = useState(0);
  const [codeCopied, setCodeCopied] = useState(false);
  const [lastKeyPressed, setLastKeyPressed] = useState("Ctrl + C");
  const [blockquoteQuoteIdx, setBlockquoteQuoteIdx] = useState(0);
  const [blockquoteShowCite, setBlockquoteShowCite] = useState(true);
  const [listType, setListType] = useState<ListType>("unordered");
  const [listVariant, setListVariant] = useState<ListVariant>("pixel");

  // Layout interactive state
  const [containerSize, setContainerSize] = useState<ContainerSize>("md");
  const [boxAs, setBoxAs] = useState<BoxElement>("section");
  const [boxPreset, setBoxPreset] = useState<"raised" | "inset" | "flat">("raised");
  const [stackDirection, setStackDirection] = useState<StackDirection>("vertical");
  const [stackGap, setStackGap] = useState<StackGap>("md");
  const [flexJustify, setFlexJustify] = useState<FlexJustify>("between");
  const [flexAlign, setFlexAlign] = useState<FlexAlign>("center");
  const [gridCols, setGridCols] = useState<GridColumns>(3);
  const [gridGap, setGridGap] = useState<GridGap>("md");
  const [aspectRatioRatio, setAspectRatioRatio] = useState<number>(16 / 9);
  const [scrollAreaOrientation, setScrollAreaOrientation] = useState<ScrollAreaOrientation>("vertical");
  const [spacerSize, setSpacerSize] = useState<SpacerSize>("md");

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
          headingLevel,
          setHeadingLevel,
          headingSize,
          setHeadingSize,
          textSize,
          setTextSize,
          textWeight,
          setTextWeight,
          textVariant,
          setTextVariant,
          textMono,
          setTextMono,
          linkVariant,
          setLinkVariant,
          linkClicks,
          setLinkClicks,
          codeCopied,
          setCodeCopied,
          lastKeyPressed,
          setLastKeyPressed,
          blockquoteQuoteIdx,
          setBlockquoteQuoteIdx,
          blockquoteShowCite,
          setBlockquoteShowCite,
          listType,
          setListType,
          listVariant,
          setListVariant,
          containerSize,
          setContainerSize,
          boxAs,
          setBoxAs,
          boxPreset,
          setBoxPreset,
          stackDirection,
          setStackDirection,
          stackGap,
          setStackGap,
          flexJustify,
          setFlexJustify,
          flexAlign,
          setFlexAlign,
          gridCols,
          setGridCols,
          gridGap,
          setGridGap,
          aspectRatioRatio,
          setAspectRatioRatio,
          scrollAreaOrientation,
          setScrollAreaOrientation,
          spacerSize,
          setSpacerSize,
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
                  <DialogTitle>COMMAND EXECUTION {"//"} NODE 01</DialogTitle>
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

    // =========================================================================
    // TYPOGRAPHY PRIMITIVES
    // =========================================================================

    case "heading":
      return (
        <div className="flex flex-col items-center gap-6 w-full max-w-xl">
          <div className="w-full bevel-inset bg-surface/50 p-6 flex flex-col items-center justify-center text-center space-y-3">
            <Heading
              level={state.headingLevel}
              size={state.headingSize === "auto" ? undefined : state.headingSize}
            >
              System Architecture {"//"} Level {state.headingLevel}
            </Heading>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase">
              <span className="bevel-raised bg-surface px-1.5 py-0.5">Tag: &lt;h{state.headingLevel}&gt;</span>
              <span className="bevel-raised bg-surface px-1.5 py-0.5">
                Size: {state.headingSize === "auto" ? `Default (h${state.headingLevel})` : state.headingSize}
              </span>
            </div>
          </div>

          <div className="w-full space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Semantic Level:</span>
              {([1, 2, 3, 4, 5, 6] as HeadingLevel[]).map((lvl) => (
                <Button
                  key={lvl}
                  size="sm"
                  variant={state.headingLevel === lvl ? "primary" : "outline"}
                  onClick={() => state.setHeadingLevel(lvl)}
                >
                  H{lvl}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Size Override:</span>
              {(["auto", "sm", "md", "lg", "xl", "2xl", "display"] as const).map((sz) => (
                <Button
                  key={sz}
                  size="sm"
                  variant={state.headingSize === sz ? "primary" : "outline"}
                  onClick={() => state.setHeadingSize(sz)}
                >
                  {sz}
                </Button>
              ))}
            </div>
          </div>

          <div className="w-full border-t border-border pt-4 text-center">
            <span className="text-[11px] text-muted-foreground">
              Heading decouples semantic HTML document outline (&lt;h1&gt;–&lt;h6&gt;) from visual font scale styling.
            </span>
          </div>
        </div>
      );

    case "text":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-xl">
          <div className="w-full bevel-inset bg-surface/50 p-6 space-y-3">
            <Text
              size={state.textSize}
              weight={state.textWeight}
              variant={state.textVariant}
              mono={state.textMono}
            >
              {state.textMono
                ? "0x7FFE4000: Memory subsystem initialized. High-memory buffers allocated for mainframe bus."
                : "The early digital era was characterized by deliberate typographic restraint, high contrast geometry, and calibrated screen legibility across CRT raster lines."}
            </Text>
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground border-t border-border/50 pt-2">
              <span className="bevel-raised bg-surface px-1.5 py-0.5">Size: {state.textSize}</span>
              <span className="bevel-raised bg-surface px-1.5 py-0.5">Weight: {state.textWeight}</span>
              <span className="bevel-raised bg-surface px-1.5 py-0.5">Tone: {state.textVariant}</span>
              <span className="bevel-raised bg-surface px-1.5 py-0.5">Font: {state.textMono ? "Monospace" : "Sans"}</span>
            </div>
          </div>

          <div className="w-full space-y-2">
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Scale:</span>
              {(["xs", "sm", "base", "lg", "xl"] as TextSize[]).map((sz) => (
                <Button
                  key={sz}
                  size="sm"
                  variant={state.textSize === sz ? "primary" : "outline"}
                  onClick={() => state.setTextSize(sz)}
                >
                  {sz}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Tone:</span>
              {(["default", "muted", "accent"] as TextVariant[]).map((vt) => (
                <Button
                  key={vt}
                  size="sm"
                  variant={state.textVariant === vt ? "primary" : "outline"}
                  onClick={() => state.setTextVariant(vt)}
                >
                  {vt}
                </Button>
              ))}
              <Button
                size="sm"
                variant={state.textMono ? "primary" : "outline"}
                onClick={() => state.setTextMono(!state.textMono)}
                className="ml-2"
              >
                {state.textMono ? "Mono: ON" : "Mono: OFF"}
              </Button>
            </div>
          </div>
        </div>
      );

    case "link":
      return (
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">
          <div className="w-full bevel-inset bg-surface/50 p-6 flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <UiLink
                href="#demo"
                variant={state.linkVariant}
                onClick={(e) => {
                  e.preventDefault();
                  state.setLinkClicks(state.linkClicks + 1);
                }}
              >
                Interactive Terminal Link [Clicks: {state.linkClicks}]
              </UiLink>

              <UiLink
                href="https://github.com/ditherweb/ditherweb"
                target="_blank"
                variant={state.linkVariant}
              >
                External Repo ↗
              </UiLink>
            </div>

            <p className="text-[11px] text-muted-foreground">
              Click the link above to test active click state or explore external window handling.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Variant:</span>
            {(["default", "subtle", "underline"] as const).map((v) => (
              <Button
                key={v}
                size="sm"
                variant={state.linkVariant === v ? "primary" : "outline"}
                onClick={() => state.setLinkVariant(v)}
              >
                {v}
              </Button>
            ))}
          </div>
        </div>
      );

    case "code":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-lg">
          <div className="w-full bevel-raised bg-surface p-6 space-y-4">
            <div className="text-foreground text-sm leading-relaxed space-y-2">
              <p>
                To integrate Ditherweb primitives, install <Code>@ditherweb/ui</Code> via your package manager.
              </p>
              <p className="text-muted-foreground text-xs">
                Import stylesheet tokens in root: <Code>import &quot;@ditherweb/ui/tokens.css&quot;;</Code>
              </p>
              <p className="text-muted-foreground text-xs">
                Configured device driver: <Code>DEVICE=C:\DOS\HIMEM.SYS /TESTMEM:OFF</Code>
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-border pt-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard?.writeText("npm install @ditherweb/ui");
                  state.setCodeCopied(true);
                  setTimeout(() => state.setCodeCopied(false), 2000);
                }}
              >
                {state.codeCopied ? "✓ Copied to Clipboard" : "Copy Install Command"}
              </Button>
              <span className="text-[10px] text-muted-foreground">
                Rendered with sunken bevel <Code>bevel-inset</Code>
              </span>
            </div>
          </div>
        </div>
      );

    case "kbd":
      return (
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">
          <div className="w-full bevel-inset bg-surface/50 p-6 flex flex-col items-center justify-center gap-4 text-center">
            <div className="text-[11px] text-muted-foreground uppercase font-bold">
              Tactile Keyboard Shortcuts
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <button
                type="button"
                className="flex items-center gap-1.5 p-1.5 hover:bg-muted/40 transition-colors"
                onClick={() => state.setLastKeyPressed("Ctrl + C (Copy)")}
              >
                <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> <span className="text-muted-foreground">Copy</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 p-1.5 hover:bg-muted/40 transition-colors"
                onClick={() => state.setLastKeyPressed("Ctrl + V (Paste)")}
              >
                <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd> <span className="text-muted-foreground">Paste</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 p-1.5 hover:bg-muted/40 transition-colors"
                onClick={() => state.setLastKeyPressed("Alt + F4 (Close)")}
              >
                <Kbd>Alt</Kbd> + <Kbd>F4</Kbd> <span className="text-muted-foreground">Exit</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 p-1.5 hover:bg-muted/40 transition-colors"
                onClick={() => state.setLastKeyPressed("Esc (Cancel)")}
              >
                <Kbd>Esc</Kbd> <span className="text-muted-foreground">Cancel</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 p-1.5 hover:bg-muted/40 transition-colors"
                onClick={() => state.setLastKeyPressed("Enter ↵ (Execute)")}
              >
                <Kbd>Enter ↵</Kbd> <span className="text-muted-foreground">Execute</span>
              </button>
            </div>

            <div className="bevel-raised bg-background px-3 py-1.5 text-xs text-primary font-bold">
              &gt; EVENT CAPTURED: [{state.lastKeyPressed}]
            </div>
          </div>

          <div className="text-center text-[11px] text-muted-foreground">
            Click any key combo above to simulate physical key actuation with tactile 3D bevels.
          </div>
        </div>
      );

    case "blockquote": {
      const quotes = [
        {
          text: "Retro appearance. Modern engineering. The early Web was defined by hard edges, pixel matrices, and tactile controls designed for mechanical human feedback.",
          cite: "Ditherweb Manifesto (1995/2026)",
        },
        {
          text: "Simplicity is prerequisite for reliability. Software engineering is the art of controlling complexity.",
          cite: "Edsger W. Dijkstra, Turing Award Lecture",
        },
        {
          text: "640K ought to be enough for anybody. Conventional memory architecture was a triumph of pragmatic engineering.",
          cite: "MS-DOS Architecture Bulletin, 1981",
        },
      ];
      const activeQuote = quotes[state.blockquoteQuoteIdx % quotes.length];

      return (
        <div className="flex flex-col items-center gap-6 w-full max-w-xl">
          <div className="w-full bevel-raised bg-surface p-6 space-y-4">
            <Blockquote
              cite={state.blockquoteShowCite ? activeQuote.cite : undefined}
              className="my-1"
            >
              &ldquo;{activeQuote.text}&rdquo;
              {state.blockquoteShowCite && (
                <footer className="mt-2 text-xs text-muted-foreground not-italic font-normal">
                  &mdash; <cite className="text-primary">{activeQuote.cite}</cite>
                </footer>
              )}
            </Blockquote>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => state.setBlockquoteQuoteIdx((state.blockquoteQuoteIdx + 1) % quotes.length)}
            >
              Next Quote ({state.blockquoteQuoteIdx + 1}/{quotes.length})
            </Button>
            <Button
              size="sm"
              variant={state.blockquoteShowCite ? "primary" : "outline"}
              onClick={() => state.setBlockquoteShowCite(!state.blockquoteShowCite)}
            >
              Citation: {state.blockquoteShowCite ? "Shown" : "Hidden"}
            </Button>
          </div>

          <div className="text-center text-[11px] text-muted-foreground">
            Blockquote styles editorial quotes and passages with a prominent retro left accent bar.
          </div>
        </div>
      );
    }

    case "list":
      return (
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">
          <div className="w-full bevel-inset bg-surface/50 p-6 space-y-3">
            <div className="text-[11px] text-muted-foreground uppercase font-bold border-b border-border/50 pb-2">
              Subsystem Device Registry ({state.listType.toUpperCase()} {"//"} {state.listVariant.toUpperCase()})
            </div>

            <List type={state.listType} variant={state.listVariant}>
              <ListItem>HIMEM.SYS &mdash; High memory manager 1.04MB</ListItem>
              <ListItem>EMM386.EXE &mdash; Expanded memory emulator / RAM pool</ListItem>
              <ListItem>COMMAND.COM &mdash; Interactive DOS shell interpreter</ListItem>
              <ListItem>AUTOEXEC.BAT &mdash; Boot automation batch routine</ListItem>
            </List>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Type:</span>
              {(["unordered", "ordered"] as const).map((t) => (
                <Button
                  key={t}
                  size="sm"
                  variant={state.listType === t ? "primary" : "outline"}
                  onClick={() => state.setListType(t)}
                >
                  {t}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Marker:</span>
              {(["pixel", "default", "none"] as const).map((v) => (
                <Button
                  key={v}
                  size="sm"
                  variant={state.listVariant === v ? "primary" : "outline"}
                  onClick={() => state.setListVariant(v)}
                >
                  {v === "pixel" ? "■ Pixel" : v}
                </Button>
              ))}
            </div>
          </div>
        </div>
      );

    // =========================================================================
    // LAYOUT PRIMITIVES
    // =========================================================================

    case "container":
      return (
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="w-full bg-background border border-dashed border-border p-2">
            <div className="text-[10px] text-muted-foreground text-center mb-1">
              ← Viewport Container Bound (Simulated Max Width: {state.containerSize}) →
            </div>
            <Container size={state.containerSize} centered className="p-0">
              <div className="bevel-raised bg-surface p-4 text-center space-y-2 border border-primary/40">
                <div className="font-bold text-foreground">
                  Container [size=&quot;{state.containerSize}&quot;]
                </div>
                <p className="text-xs text-muted-foreground">
                  Responsive max-width constraints with centered layout margin auto and standard gutters.
                </p>
                <div className="text-[10px] text-primary">
                  {state.containerSize === "sm" && "max-w-screen-sm (640px)"}
                  {state.containerSize === "md" && "max-w-screen-md (768px)"}
                  {state.containerSize === "lg" && "max-w-screen-lg (1024px)"}
                  {state.containerSize === "xl" && "max-w-7xl (1280px)"}
                  {state.containerSize === "full" && "max-w-full (100% fluid)"}
                </div>
              </div>
            </Container>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Width Size:</span>
            {(["sm", "md", "lg", "xl", "full"] as ContainerSize[]).map((sz) => (
              <Button
                key={sz}
                size="sm"
                variant={state.containerSize === sz ? "primary" : "outline"}
                onClick={() => state.setContainerSize(sz)}
              >
                {sz}
              </Button>
            ))}
          </div>
        </div>
      );

    case "box":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-lg">
          <Box
            as={state.boxAs}
            className={`w-full p-6 text-center space-y-2 ${
              state.boxPreset === "raised"
                ? "bevel-raised bg-surface"
                : state.boxPreset === "inset"
                ? "bevel-inset bg-surface-sunken"
                : "border border-border bg-card"
            }`}
          >
            <div className="font-bold text-foreground uppercase">
              Box as=&quot;{state.boxAs}&quot;
            </div>
            <p className="text-xs text-muted-foreground">
              Zero default margins or opinionated paddings. Polymorphic base block component for complete design control.
            </p>
            <Badge variant="primary">Semantic Tag: &lt;{state.boxAs}&gt;</Badge>
          </Box>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Tag:</span>
              {(["section", "div", "article", "main"] as BoxElement[]).map((el) => (
                <Button
                  key={el}
                  size="sm"
                  variant={state.boxAs === el ? "primary" : "outline"}
                  onClick={() => state.setBoxAs(el)}
                >
                  &lt;{el}&gt;
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Bevel:</span>
              {(["raised", "inset", "flat"] as const).map((pr) => (
                <Button
                  key={pr}
                  size="sm"
                  variant={state.boxPreset === pr ? "primary" : "outline"}
                  onClick={() => state.setBoxPreset(pr)}
                >
                  {pr}
                </Button>
              ))}
            </div>
          </div>
        </div>
      );

    case "stack":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-lg">
          <div className="w-full bevel-inset bg-surface/40 p-4 min-h-[160px] flex items-center justify-center">
            <Stack
              direction={state.stackDirection}
              gap={state.stackGap}
              className="w-full"
            >
              <div className="bevel-raised bg-surface p-3 text-center text-xs font-bold text-foreground">
                Stack Unit Alpha [01]
              </div>
              <div className="bevel-raised bg-surface p-3 text-center text-xs font-bold text-foreground">
                Stack Unit Beta [02]
              </div>
              <div className="bevel-raised bg-surface p-3 text-center text-xs font-bold text-foreground">
                Stack Unit Gamma [03]
              </div>
            </Stack>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Direction:</span>
              {(["vertical", "horizontal"] as StackDirection[]).map((d) => (
                <Button
                  key={d}
                  size="sm"
                  variant={state.stackDirection === d ? "primary" : "outline"}
                  onClick={() => state.setStackDirection(d)}
                >
                  {d}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Gap:</span>
              {(["none", "xs", "sm", "md", "lg", "xl"] as StackGap[]).map((g) => (
                <Button
                  key={g}
                  size="sm"
                  variant={state.stackGap === g ? "primary" : "outline"}
                  onClick={() => state.setStackGap(g)}
                >
                  {g}
                </Button>
              ))}
            </div>
          </div>
        </div>
      );

    case "flex":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-xl">
          <div className="w-full bevel-inset bg-surface/40 p-4">
            <Flex
              justify={state.flexJustify}
              align={state.flexAlign}
              className="w-full p-2 bg-background border border-border min-h-[80px]"
            >
              <Badge variant="primary">START ITEM</Badge>
              <div className="bevel-raised bg-surface px-3 py-1.5 text-xs text-foreground">
                FLEX NODE
              </div>
              <Badge variant="secondary">END ITEM</Badge>
            </Flex>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex flex-wrap items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Justify:</span>
              {(["start", "center", "end", "between", "around", "evenly"] as FlexJustify[]).map((j) => (
                <Button
                  key={j}
                  size="sm"
                  variant={state.flexJustify === j ? "primary" : "outline"}
                  onClick={() => state.setFlexJustify(j)}
                >
                  {j}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Align:</span>
              {(["start", "center", "end", "stretch"] as FlexAlign[]).map((a) => (
                <Button
                  key={a}
                  size="sm"
                  variant={state.flexAlign === a ? "primary" : "outline"}
                  onClick={() => state.setFlexAlign(a)}
                >
                  {a}
                </Button>
              ))}
            </div>
          </div>
        </div>
      );

    case "grid":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-xl">
          <div className="w-full bevel-inset bg-surface/40 p-4">
            <Grid
              columns={state.gridCols}
              gap={state.gridGap}
              className="w-full"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bevel-raised bg-surface p-4 text-center space-y-1"
                >
                  <div className="text-xs font-bold text-foreground">Cell 0{i}</div>
                  <div className="text-[10px] text-muted-foreground">Track {i}</div>
                </div>
              ))}
            </Grid>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Columns:</span>
              {([1, 2, 3, 4, 6, "auto"] as GridColumns[]).map((c) => (
                <Button
                  key={String(c)}
                  size="sm"
                  variant={state.gridCols === c ? "primary" : "outline"}
                  onClick={() => state.setGridCols(c)}
                >
                  {c}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Gap:</span>
              {(["sm", "md", "lg"] as GridGap[]).map((g) => (
                <Button
                  key={g}
                  size="sm"
                  variant={state.gridGap === g ? "primary" : "outline"}
                  onClick={() => state.setGridGap(g)}
                >
                  {g}
                </Button>
              ))}
            </div>
          </div>
        </div>
      );

    case "aspect-ratio":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="w-full bevel-inset bg-surface/50 p-4">
            <AspectRatio
              ratio={state.aspectRatioRatio}
              className="bevel-raised bg-background flex flex-col items-center justify-center text-center p-4 border border-border"
            >
              <div className="text-primary font-bold text-sm tracking-wider uppercase">
                CRT Monitor Display
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Aspect Ratio: {state.aspectRatioRatio === 16 / 9 ? "16:9 Widescreen" : state.aspectRatioRatio === 4 / 3 ? "4:3 Classic CRT" : state.aspectRatioRatio === 1 ? "1:1 Square" : "21:9 Ultrawide"}
              </div>
              <div className="text-[10px] text-muted-foreground/80 mt-2 font-mono">
                Locks height proportionally to parent width without layout jump
              </div>
            </AspectRatio>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Ratio:</span>
            {[
              { label: "16:9", val: 16 / 9 },
              { label: "4:3 (CRT)", val: 4 / 3 },
              { label: "1:1", val: 1 },
              { label: "21:9", val: 21 / 9 },
            ].map((item) => (
              <Button
                key={item.label}
                size="sm"
                variant={state.aspectRatioRatio === item.val ? "primary" : "outline"}
                onClick={() => state.setAspectRatioRatio(item.val)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      );

    case "scroll-area":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="w-full">
            <ScrollArea
              orientation={state.scrollAreaOrientation}
              className="h-44 p-4 space-y-2 text-xs"
            >
              <div className="font-bold text-primary pb-1 border-b border-border/40">
                [BIOS INITIALIZATION TELEMETRY STREAM]
              </div>
              <p className="text-foreground">00:00.012 - CPU Microcode patch Revision 0x24 loaded.</p>
              <p className="text-muted-foreground">00:00.045 - RAM POST: 640 KB Base + 384 KB Upper Memory verified OK.</p>
              <p className="text-muted-foreground">00:00.091 - IDE Primary Master: QUANTUM FIREBALL 540MB detected.</p>
              <p className="text-muted-foreground">00:00.120 - Floppy Drive A: 1.44MB 3.5-inch initialized.</p>
              <p className="text-muted-foreground">00:00.160 - Video BIOS: ET4000/W32i 2MB VRAM (1024x768 256 colors).</p>
              <p className="text-muted-foreground">00:00.210 - Sound Blaster 16: DSP v4.05 on Port 0x220, IRQ 5, DMA 1.</p>
              <p className="text-muted-foreground">00:00.280 - 3Com EtherLink III ISA 10Mbps 10BASE-T link active.</p>
              <p className="text-muted-foreground">00:00.340 - MSCDEX version 2.23 installed (Drive D: Mitsumi 4X).</p>
              <p className="text-primary font-bold">00:00.410 - SYSTEM READY. Shell prompt invoked at C:\&gt;</p>
            </ScrollArea>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Orientation:</span>
            {(["vertical", "horizontal", "both"] as ScrollAreaOrientation[]).map((o) => (
              <Button
                key={o}
                size="sm"
                variant={state.scrollAreaOrientation === o ? "primary" : "outline"}
                onClick={() => state.setScrollAreaOrientation(o)}
              >
                {o}
              </Button>
            ))}
          </div>
        </div>
      );

    case "spacer":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-lg">
          <div className="w-full bevel-inset bg-surface/50 p-4">
            <div className="flex items-center p-3 bg-surface border border-border text-xs min-h-[48px]">
              <Badge variant="primary">LEFT BLOCK</Badge>
              <Spacer size={state.spacerSize} className="bg-primary/20 border border-dashed border-primary/50" />
              <Badge variant="secondary">RIGHT BLOCK</Badge>
            </div>
          </div>

          <div className="text-center text-[10px] text-muted-foreground">
            {state.spacerSize === "auto"
              ? "Spacer size=\"auto\" fills all available flex space (flex-1 self-stretch)."
              : `Spacer size="${state.spacerSize}" provides calibrated pixel spacing intervals.`}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Spacer Size:</span>
            {(["xs", "sm", "md", "lg", "xl", "auto"] as SpacerSize[]).map((sz) => (
              <Button
                key={sz}
                size="sm"
                variant={state.spacerSize === sz ? "primary" : "outline"}
                onClick={() => state.setSpacerSize(sz)}
              >
                {sz}
              </Button>
            ))}
          </div>
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
