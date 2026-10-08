"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { componentCodeSamples } from "./catalog-code-samples";
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
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioItem,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  DataTable,
  type DataTableColumn,
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
  Tree,
  type TreeNodeData,
  Avatar,
  AvatarImage,
  AvatarFallback,
  WebRing,
  WebRingHeader,
  WebRingTitle,
  WebRingSite,
  WebRingNavigation,
  WebRingLink,
  Guestbook,
  GuestbookHeader,
  GuestbookTitle,
  GuestbookEntryList,
  GuestbookEntry,
  GuestbookEmpty,
  GuestbookFooter,
  VisitorCounter,
  UnderConstruction,
  UnderConstructionIcon,
  UnderConstructionTitle,
  UnderConstructionMessage,
  UnderConstructionEstimatedDate,
  UnderConstructionAction,
  Marquee,
  Blink,
  Button88x31,
  RetroBanner,
  RetroBannerTitle,
  RetroBannerSubtitle,
  RetroBannerAction,
  PixelImage,
  WebDirectory,
  WebDirectoryHeader,
  WebDirectoryGrid,
  WebDirectoryCategory,
  WebDirectoryTitle,
  WebDirectoryList,
  WebDirectoryItem,
  WebDirectoryLink,
  WebDirectoryDescription,
  WebDirectorySubcategories,
  Window,
  WindowContent,
  WindowFooter,
  WindowStatusBar,
  WindowStatusItem,
  WindowTitleBar,
  WindowTitle,
  WindowIcon,
  WindowControls,
  Taskbar,
  TaskbarStart,
  TaskbarTasks,
  TaskbarTask,
  TaskbarStatus,
  TaskbarClock,
  Menu,
  MenuBar,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
  SubMenu,
  SubMenuTrigger,
  SubMenuContent,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  Desktop,
  DesktopIconGrid,
  DesktopIcon,
  Terminal,
  TerminalHeader,
  TerminalBody,
  TerminalLine,
  TerminalPrompt,
  TerminalCommand,
  TerminalOutput,
  TerminalCursor,
  PixelArt,
  BitmapCanvas,
  DEFAULT_RETRO_PALETTE,
  Dither,
  type DitherPattern,
  Halftone,
  type HalftoneDensity,
  Pixelate,
  Noise,
  ImageFrame,
  type ImageFrameVariant,
  Scanline,
  type ScanlineDensity,
  CRT,
  type CRTPhosphor,
  PixelText,
  Typewriter,
  BlinkCursor,
} from "@ditherweb/ui";

type Category = "all" | "effects" | "desktop" | "classic" | "navigation" | "overlays" | "surfaces" | "forms" | "typography" | "layout" | "input" | "feedback";

type ProcessItem = {
  id: string;
  name: string;
  pid: number;
  memory: string;
  status: "running" | "idle" | "stopped";
};

const processColumns: DataTableColumn<ProcessItem>[] = [
  { id: "pid", header: "PID", accessorKey: "pid", sortable: true, width: "80px" },
  { id: "name", header: "Process Name", accessorKey: "name", sortable: true },
  { id: "memory", header: "Mem Allocation", accessorKey: "memory", sortable: true, align: "right" },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    sortable: true,
    cell: ({ value }) => (
      <Badge
        variant={
          value === "running" ? "success" : value === "idle" ? "outline" : "destructive"
        }
      >
        {String(value).toUpperCase()}
      </Badge>
    ),
  },
];

const processData: ProcessItem[] = [
  { id: "proc-1", pid: 104, name: "KERNEL.SYS", memory: "128 KB", status: "running" },
  { id: "proc-2", pid: 218, name: "VGA_DRIVER.BIN", memory: "64 KB", status: "running" },
  { id: "proc-3", pid: 305, name: "DITHER_RENDER.EXE", memory: "512 KB", status: "running" },
  { id: "proc-4", pid: 412, name: "MOUSE_SER.SYS", memory: "16 KB", status: "idle" },
  { id: "proc-5", pid: 520, name: "SND_BLASTER.COM", memory: "32 KB", status: "stopped" },
];

const treeData: TreeNodeData[] = [
  {
    id: "sys-root",
    label: "C:\\ (SYSTEM)",
    children: [
      {
        id: "sys-dos",
        label: "DOS",
        children: [
          { id: "sys-command", label: "COMMAND.COM" },
          { id: "sys-ansi", label: "ANSI.SYS" },
        ],
      },
      {
        id: "sys-dither",
        label: "DITHERWEB",
        children: [
          { id: "sys-core", label: "CORE.BIN" },
          { id: "sys-tokens", label: "TOKENS.CSS" },
          {
            id: "sys-assets",
            label: "PALETTES",
            children: [
              { id: "pal-vga", label: "VGA16.PAL" },
              { id: "pal-cga", label: "CGA_MODE1.PAL" },
            ],
          },
        ],
      },
      { id: "sys-autoexec", label: "AUTOEXEC.BAT" },
      { id: "sys-config", label: "CONFIG.SYS" },
    ],
  },
];


interface CodeViewerContextValue {
  openCodes: Record<string, boolean>;
  copiedId: string | null;
  toggleCode: (id: string) => void;
  copyCode: (id: string, code: string) => void;
}

function getDocSlug(sectionId: string): string {
  const map: Record<string, string> = {
    "code-kbd": "code",
    "blockquote-list": "blockquote",
    "container-box": "container",
    "stack-flex-grid": "stack",
    "aspect-scroll": "aspect-ratio",
    "well-inset": "well",
    "spinner-loading": "spinner",
    "infrastructure": "backdrop",
    "demo-tabs-section": "tabs",
    "demo-breadcrumb-section": "breadcrumb",
    "demo-pagination-section": "pagination",
    "demo-navigation-menu-section": "navigation-menu",
    "demo-menubar-section": "menubar",
    "demo-table-section": "table",
    "demo-data-table-section": "data-table",
    "demo-description-list-section": "description-list",
    "demo-tree-section": "tree",
    "demo-avatar-section": "avatar",
    "demo-webring-section": "web-ring",
    "demo-guestbook-section": "guestbook",
    "demo-counter-section": "visitor-counter",
    "demo-under-construction-section": "under-construction",
    "demo-marquee-section": "marquee",
    "demo-blink-section": "blink",
    "demo-button88x31-section": "button-88x31",
    "demo-banner-section": "retro-banner",
    "demo-pixel-image-section": "pixel-image",
    "demo-web-directory-section": "web-directory",
    "demo-window-section": "window",
    "demo-window-titlebar-section": "window-titlebar",
    "demo-window-controls-section": "window-controls",
    "demo-taskbar-section": "taskbar",
    "demo-menu-section": "menu",
    "demo-context-menu-section": "context-menu",
    "demo-desktop-section": "desktop",
    "demo-terminal-section": "terminal",
    "demo-pixel-art-section": "pixel-art",
    "demo-bitmap-canvas-section": "bitmap-canvas",
    "demo-dither-section": "dither",
    "demo-halftone-section": "halftone",
    "demo-pixel-scale-section": "pixelate",
    "demo-noise-section": "noise",
    "demo-image-frame-section": "image-frame",
    "demo-scanlines-section": "scanline",
    "demo-crt-section": "crt",
    "demo-pixel-type-section": "pixel-text",
    "demo-typewriter-section": "typewriter",
    "demo-matrix-rain-section": "matrix-rain",
  };
  return map[sectionId] || sectionId;
}

const CodeViewerContext = createContext<CodeViewerContextValue | null>(null);

function ComponentActions({ sectionId }: { sectionId: string }) {
  const ctx = useContext(CodeViewerContext);
  const sample = componentCodeSamples[sectionId];
  const badgeText = sample?.badge ?? `@ditherweb/ui/${sectionId}`;
  const isOpen = Boolean(ctx?.openCodes[sectionId]);
  const docSlug = getDocSlug(sectionId);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="outline">{badgeText}</Badge>
      <NextLink
        href={`/components/${docSlug}`}
        className="px-2.5 py-1 font-mono text-xs font-bold bevel-raised active:bevel-pressed flex items-center gap-1 text-primary hover:bg-muted select-none"
      >
        <span>View docs</span>
        <span>→</span>
      </NextLink>
      <button
        type="button"
        onClick={() => ctx?.toggleCode(sectionId)}
        aria-expanded={isOpen}
        aria-controls={`code-sample-${sectionId}`}
        className="px-2.5 py-1 font-mono text-xs font-bold bevel-raised active:bevel-pressed flex items-center gap-1.5 text-foreground hover:bg-muted select-none"
      >
        <span className="text-[10px] text-primary font-bold">&lt;/&gt;</span>
        {isOpen ? "Hide Code" : "View Code"}
      </button>
    </div>
  );
}

function ComponentCodePanel({ sectionId }: { sectionId: string }) {
  const ctx = useContext(CodeViewerContext);
  const sample = componentCodeSamples[sectionId];
  if (!sample || !ctx?.openCodes[sectionId]) return null;
  const isCopied = ctx.copiedId === sectionId;

  return (
    <div
      id={`code-sample-${sectionId}`}
      className="bevel-inset bg-background p-4 relative font-mono text-xs space-y-3 animate-in fade-in duration-150"
    >
      <div className="flex items-center justify-between pb-2 border-b border-border/40 text-[11px] text-muted-foreground">
        <span className="font-bold text-foreground flex items-center gap-2">
          <span>SOURCE SAMPLE</span>
          <span className="text-[10px] text-muted-foreground">({sample.badge})</span>
        </span>
        <button
          type="button"
          onClick={() => ctx.copyCode(sectionId, sample.code)}
          className="bevel-raised active:bevel-pressed px-2.5 py-0.5 font-bold text-foreground hover:bg-muted text-[11px]"
        >
          {isCopied ? "✓ Copied!" : "Copy Code"}
        </button>
      </div>
      <pre className="text-foreground leading-relaxed overflow-x-auto selection:bg-primary selection:text-primary-foreground">
        <code>{sample.code}</code>
      </pre>
    </div>
  );
}

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
  const [portalDemoOpen, setPortalDemoOpen] = useState(false);

  // Navigation & Data states (Phase 3E)
  const [activeTab, setActiveTab] = useState("hardware");
  const [currentPage, setCurrentPage] = useState(2);
  const [treeSelectedId, setTreeSelectedId] = useState<string | null>("sys-core");
  const [menubarAction, setMenubarAction] = useState<string>("Ready");
  const [menubarGridCheck, setMenubarGridCheck] = useState(true);
  const [menubarViewMode, setMenubarViewMode] = useState("detail");
  const [selectedTableKeys, setSelectedTableKeys] = useState<(string | number)[]>(["proc-1"]);

  // Phase 4: Classic Web interactive states
  const [visitorCount, setVisitorCount] = useState(12847);
  const [blinkActive, setBlinkActive] = useState(true);
  const [webringSiteIndex, setWebringSiteIndex] = useState(1);
  const webringSites = [
    { name: "PixelStation 95", index: 1, total: 4 },
    { name: "RetroWave BBS", index: 2, total: 4 },
    { name: "CyberDeck 64", index: 3, total: 4 },
    { name: "DitherArchive", index: 4, total: 4 },
  ];
  const [gbAuthor, setGbAuthor] = useState("");
  const [gbMsg, setGbMsg] = useState("");
  const [gbEmptyToggle, setGbEmptyToggle] = useState(false);
  const [gbEntries, setGbEntries] = useState([
    {
      id: "gb-1",
      entryNumber: 124,
      author: "pixel_surfer",
      location: "Portland, OR",
      date: "OCT 08, 1997",
      websiteUrl: "https://ditherweb.org",
      websiteName: "PixelCave",
      message: "Found your ring from GeoCities SiliconValley! Awesome palette choices, keep it up!",
    },
    {
      id: "gb-2",
      entryNumber: 123,
      author: "dialup_queen",
      location: "Austin, TX",
      date: "OCT 07, 1997",
      websiteUrl: "https://ditherweb.org",
      websiteName: "BBS Archive",
      message: "Greetings from the Austin 512 area code! Bookmarking this home page.",
    },
  ]);

  const handleAddGuestbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gbAuthor.trim() || !gbMsg.trim()) return;
    const newEntry = {
      id: `gb-${Date.now()}`,
      entryNumber: gbEntries.length + 123,
      author: gbAuthor.trim(),
      location: "Cyberspace",
      date: "TODAY",
      websiteUrl: "https://ditherweb.org",
      websiteName: "Visitor Web",
      message: gbMsg.trim(),
    };
    setGbEntries([newEntry, ...gbEntries]);
    setGbAuthor("");
    setGbMsg("");
  };

  const [openCodes, setOpenCodes] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleCode = (sectionId: string) => {
    setOpenCodes((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const copyCode = async (sectionId: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(sectionId);
      setTimeout(() => {
        setCopiedId((curr) => (curr === sectionId ? null : curr));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };



  // Phase 5: Desktop & Pixel states
  const [windowActive, setWindowActive] = useState(true);
  const [windowMaximized, setWindowMaximized] = useState(false);
  const [windowLog, setWindowLog] = useState("Window status: Normal");
  const [taskbarActiveTask, setTaskbarActiveTask] = useState<string>("terminal");
  const [taskbarStartActive, setTaskbarStartActive] = useState(false);
  const [menuStatusLog, setMenuStatusLog] = useState("Ready");
  const [contextStatusLog, setContextStatusLog] = useState("Right-click or press Shift+F10 on target");
  const [desktopIconSelected, setDesktopIconSelected] = useState<string>("terminal");
  const [desktopOpenApp, setDesktopOpenApp] = useState<string>("DIALUP_CONFIG.EXE");
  const [canvasActiveColor, setCanvasActiveColor] = useState<string>("#008080");
  const [canvasMatrix, setCanvasMatrix] = useState<string[][]>([
    ["#000000", "#000000", "#008080", "#008080", "#008080", "#008080", "#000000", "#000000"],
    ["#000000", "#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080", "#000000"],
    ["#008080", "#ffffff", "#000000", "#ffffff", "#ffffff", "#000000", "#ffffff", "#008080"],
    ["#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080"],
    ["#008080", "#ffffff", "#008080", "#008080", "#008080", "#008080", "#ffffff", "#008080"],
    ["#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080"],
    ["#000000", "#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080", "#000000"],
    ["#000000", "#000000", "#008080", "#008080", "#008080", "#008080", "#000000", "#000000"],
  ]);

  // Phase 6: Advanced Effects & Polish states
  const [ditherPattern, setDitherPattern] = useState<DitherPattern>("bayer");
  const [ditherIntensity, setDitherIntensity] = useState<"subtle" | "medium" | "strong">("medium");
  const [halftoneDensity, setHalftoneDensity] = useState<HalftoneDensity>("medium");
  const [halftoneSize, setHalftoneSize] = useState<"sm" | "md" | "lg">("md");
  const [noiseAnimated, setNoiseAnimated] = useState(false);
  const [noiseIntensity, setNoiseIntensity] = useState<"subtle" | "medium" | "strong">("medium");
  const [imageFrameVariant, setImageFrameVariant] = useState<ImageFrameVariant>("bitmap");
  const [scanlineDensity, setScanlineDensity] = useState<ScanlineDensity>("fine");
  const [scanlineOrientation, setScanlineOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [scanlineAnimated, setScanlineAnimated] = useState(false);
  const [crtPhosphor, setCrtPhosphor] = useState<CRTPhosphor>("green");
  const [crtFlicker, setCrtFlicker] = useState(false);
  const [crtCurvature, setCrtCurvature] = useState<"none" | "subtle" | "medium">("subtle");
  const [typewriterSpeed, setTypewriterSpeed] = useState<"slow" | "medium" | "fast">("medium");
  const [typewriterReplayKey, setTypewriterReplayKey] = useState(0);
  const [cursorVariant, setCursorVariant] = useState<"block" | "line" | "underline">("block");
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    if (!backdropPreviewVariant) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setBackdropPreviewVariant(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [backdropPreviewVariant]);

  return (
    <CodeViewerContext.Provider value={{ openCodes, copiedId, toggleCode, copyCode }}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-12 min-w-0 max-w-full overflow-x-clip">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="primary">Effects &amp; Polish</Badge>
          <span className="font-mono text-xs text-muted-foreground">
            96 Production Primitives
          </span>
        </div>
        <h1 className="font-mono text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Ditherweb Component Catalog
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Explore Ditherweb&apos;s complete retro React UI component library. Every primitive is built with native accessibility semantics, typed props, and calibrated retro CSS tokens. Inspect interactive states across visual dithering, halftone screens, pixel scaling, noise textures, image frames, CRT monitors, scanlines, pixel typography, and typewriter reveals.
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
            All Primitives (96)
          </button>
          <button
            type="button"
            onClick={() => setCategory("effects")}
            className={`px-3 py-1 font-bold ${
              category === "effects" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Effects &amp; Polish (10)
          </button>
          <button
            type="button"
            onClick={() => setCategory("desktop")}
            className={`px-3 py-1 font-bold ${
              category === "desktop" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Desktop &amp; Pixel (10)
          </button>
          <button
            type="button"
            onClick={() => setCategory("classic")}
            className={`px-3 py-1 font-bold ${
              category === "classic" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Classic Web (10)
          </button>
          <button
            type="button"
            onClick={() => setCategory("navigation")}
            className={`px-3 py-1 font-bold ${
              category === "navigation" ? "bevel-inset bg-muted text-primary" : "bevel-raised"
            }`}
          >
            Navigation & Data (10)
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
              <ComponentActions sectionId="heading" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="heading" />
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
              <ComponentActions sectionId="text" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="text" />
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
              <ComponentActions sectionId="link" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="link" />
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
              <ComponentActions sectionId="code-kbd" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="code-kbd" />
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
              <ComponentActions sectionId="blockquote-list" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="blockquote-list" />
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
              <ComponentActions sectionId="container-box" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="container-box" />
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
              <ComponentActions sectionId="stack-flex-grid" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="stack-flex-grid" />
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
              <ComponentActions sectionId="aspect-scroll" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="aspect-scroll" />
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
              <ComponentActions sectionId="textarea" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="textarea" />
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
              <ComponentActions sectionId="password-input" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="password-input" />
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
              <ComponentActions sectionId="search-input" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="search-input" />
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
              <ComponentActions sectionId="number-input" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="number-input" />
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
              <ComponentActions sectionId="select" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="select" />
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
              <ComponentActions sectionId="combobox" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="combobox" />
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
              <ComponentActions sectionId="slider" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="slider" />
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
              <ComponentActions sectionId="toggle" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="toggle" />
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
              <ComponentActions sectionId="toggle-group" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="toggle-group" />
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
              <ComponentActions sectionId="field" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="field" />
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
              <ComponentActions sectionId="button" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="button" />
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
              <ComponentActions sectionId="input" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="input" />
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
              <ComponentActions sectionId="label" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="label" />
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
              <ComponentActions sectionId="checkbox" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="checkbox" />
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
              <ComponentActions sectionId="radio" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="radio" />
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
              <ComponentActions sectionId="switch" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="switch" />
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
              <ComponentActions sectionId="card" />
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

            <ComponentCodePanel sectionId="card" />
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
              <ComponentActions sectionId="separator" />
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

            <ComponentCodePanel sectionId="separator" />
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
              <ComponentActions sectionId="badge" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="badge" />
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
              <ComponentActions sectionId="alert" />
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
              </CardContent>
            </Card>

            <ComponentCodePanel sectionId="alert" />
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
                <ComponentActions sectionId="panel" />
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

            <ComponentCodePanel sectionId="panel" />
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

            <ComponentCodePanel sectionId="group-box" />
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
                <ComponentActions sectionId="well-inset" />
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

            <ComponentCodePanel sectionId="well-inset" />
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
                <ComponentActions sectionId="progress" />
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

            <ComponentCodePanel sectionId="progress" />
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
                <ComponentActions sectionId="spinner-loading" />
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

            <ComponentCodePanel sectionId="spinner-loading" />
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
                <ComponentActions sectionId="skeleton" />
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

            <ComponentCodePanel sectionId="skeleton" />
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
                <ComponentActions sectionId="empty-state" />
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

            <ComponentCodePanel sectionId="empty-state" />
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
                <ComponentActions sectionId="result" />
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

            <ComponentCodePanel sectionId="result" />
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
                <ComponentActions sectionId="dialog" />
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

            <ComponentCodePanel sectionId="dialog" />
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
                <ComponentActions sectionId="alert-dialog" />
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

            <ComponentCodePanel sectionId="alert-dialog" />
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
                <ComponentActions sectionId="popover" />
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
                    <PopoverContent id="demo-popover-right-content">
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

            <ComponentCodePanel sectionId="popover" />
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
                <ComponentActions sectionId="tooltip" />
              </div>

              <div className="p-6 bevel-inset bg-surface-sunken">
                <TooltipProvider delayDuration={150}>
                  <div className="flex flex-wrap items-center gap-6">
                    <Tooltip side="top">
                      <TooltipTrigger asChild>
                        <Button id="demo-tooltip-top" size="sm">
                          Quick Save
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent id="demo-tooltip-top-content">
                        Save buffer to disk [Ctrl+S]
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip side="bottom">
                      <TooltipTrigger asChild>
                        <Button id="demo-tooltip-bottom" size="sm" variant="outline">
                          Format Disk
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent id="demo-tooltip-bottom-content">
                        Initialize floppy FAT filesystem
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip side="left">
                      <TooltipTrigger asChild>
                        <Button id="demo-tooltip-left" size="sm" variant="secondary">
                          Execute Binary
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent id="demo-tooltip-left-content">
                        Run 16-bit executable in protected mode
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip side="right">
                      <TooltipTrigger asChild>
                        <Button id="demo-tooltip-right" size="sm">
                          Verify Parity
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent id="demo-tooltip-right-content">
                        CRC-32 parity check passed
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>

            <ComponentCodePanel sectionId="tooltip" />
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
                <ComponentActions sectionId="hover-card" />
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

            <ComponentCodePanel sectionId="hover-card" />
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
                <ComponentActions sectionId="drawer" />
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

            <ComponentCodePanel sectionId="drawer" />
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
                <ComponentActions sectionId="sheet" />
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

            <ComponentCodePanel sectionId="sheet" />
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
                <ComponentActions sectionId="infrastructure" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bevel-raised bg-surface space-y-2">
                  <h3 className="font-mono text-sm font-bold uppercase">1. Portal Primitive</h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    Teleports children cleanly into <code>#ditherweb-portal-root</code> on document body without layout leaks.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      id="demo-portal-btn"
                      onClick={() => setPortalDemoOpen(!portalDemoOpen)}
                    >
                      {portalDemoOpen ? "Unmount Portal" : "Teleport to Document Body"}
                    </Button>
                  </div>
                  {portalDemoOpen && (
                    <Portal>
                      <div
                        id="demo-portal-card"
                        className="fixed top-20 right-6 z-[60] p-4 bevel-raised bg-surface border-2 border-primary shadow-hard-lg max-w-sm space-y-2"
                      >
                        <div className="flex items-center justify-between border-b border-border pb-1">
                          <span className="font-mono text-xs font-bold uppercase text-primary">
                            Portal Active
                          </span>
                          <button
                            type="button"
                            onClick={() => setPortalDemoOpen(false)}
                            className="retro-close-button text-xs"
                            aria-label="Close portal"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="font-mono text-xs text-muted-foreground">
                          This element is rendered directly into <code>#ditherweb-portal-root</code> on <code>document.body</code> outside the page hierarchy!
                        </p>
                        <div className="pt-1 flex justify-end">
                          <Button size="sm" onClick={() => setPortalDemoOpen(false)}>
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </Portal>
                  )}
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
                    <Portal>
                      <Backdrop
                        id="demo-backdrop-bench"
                        variant={backdropPreviewVariant}
                        onClick={() => setBackdropPreviewVariant(null)}
                        className="cursor-pointer"
                      />
                      <div className="fixed inset-0 z-[51] flex items-center justify-center p-4 pointer-events-none">
                        <div
                          className="pointer-events-auto p-6 bevel-raised bg-surface border-2 border-border max-w-sm w-full space-y-3 shadow-hard-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center justify-between border-b border-border pb-2">
                            <h4 className="font-mono text-sm font-bold uppercase">
                              Backdrop: {backdropPreviewVariant}
                            </h4>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBackdropPreviewVariant(null);
                              }}
                              className="retro-close-button text-xs"
                              aria-label="Close backdrop demo"
                            >
                              ✕
                            </button>
                          </div>
                          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                            {backdropPreviewVariant === "dither"
                              ? "Classic retro ordered Bayer stipple pattern active on the backdrop."
                              : "Semi-opaque dimmed retro screen overlay active."}
                          </p>
                          <div className="pt-2 flex justify-end">
                            <Button
                              size="sm"
                              id="demo-backdrop-dismiss-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBackdropPreviewVariant(null);
                              }}
                            >
                              Dismiss Backdrop
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Portal>
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

            <ComponentCodePanel sectionId="infrastructure" />
          </section>
          </>
        )}

        {/* ==================================================================
            NAVIGATION & DATA PRIMITIVES (Phase 3E)
            ================================================================== */}
        {(category === "all" || category === "navigation") && (
          <>
            {/* SECTION 1: TABS */}
            <section id="demo-tabs-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">01</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Tabs
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  role=&quot;tablist&quot; • Arrow keys • Folders
                </span>
                  <ComponentActions sectionId="demo-tabs-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Accessible tabbed navigation with W3C keyboard navigation, Home/End support, and retro beveled folder styling.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-4 bevel-raised bg-surface space-y-3">
                  <span className="font-mono text-xs font-bold uppercase text-primary">
                    Horizontal Folder Tabs
                  </span>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList>
                      <TabsTrigger id="tab-trigger-hardware" value="hardware">
                        Hardware
                      </TabsTrigger>
                      <TabsTrigger id="tab-trigger-memory" value="memory">
                        Memory
                      </TabsTrigger>
                      <TabsTrigger id="tab-trigger-peripherals" value="peripherals">
                        Peripherals
                      </TabsTrigger>
                      <TabsTrigger id="tab-trigger-disabled" value="disabled" disabled>
                        Disabled
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="hardware" className="p-4">
                      <div className="space-y-1 font-mono text-xs">
                        <p className="font-bold text-foreground">CPU: 80486DX2 @ 66 MHz</p>
                        <p className="text-muted-foreground">VGA adapter: 512 KB onboard VRAM with hardware blitter.</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="memory" className="p-4">
                      <div className="space-y-1 font-mono text-xs">
                        <p className="font-bold text-foreground">Base Memory: 640 KB</p>
                        <p className="text-muted-foreground">Extended Memory (XMS): 15,360 KB allocated via HIMEM.SYS.</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="peripherals" className="p-4">
                      <div className="space-y-1 font-mono text-xs">
                        <p className="font-bold text-foreground">Sound: Sound Blaster 16 (DSP v4.05)</p>
                        <p className="text-muted-foreground">Bus Mouse: COM1 (1200 baud, 8N1).</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="disabled" className="p-4">
                      <p className="font-mono text-xs text-muted-foreground">This content is inaccessible.</p>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="p-4 bevel-raised bg-surface space-y-3">
                  <span className="font-mono text-xs font-bold uppercase text-primary">
                    Vertical Tabs Layout
                  </span>
                  <Tabs defaultValue="diag-vga" orientation="vertical">
                    <TabsList>
                      <TabsTrigger value="diag-vga">VGA DAC</TabsTrigger>
                      <TabsTrigger value="diag-dma">DMA Ch 1</TabsTrigger>
                      <TabsTrigger value="diag-irq">IRQ Mask</TabsTrigger>
                    </TabsList>
                    <TabsContent value="diag-vga" className="p-4">
                      <p className="font-mono text-xs font-bold">Palette DAC Register 0x3C8</p>
                      <p className="font-mono text-xs text-muted-foreground">18-bit color lookup table active with 64 levels per channel.</p>
                    </TabsContent>
                    <TabsContent value="diag-dma" className="p-4">
                      <p className="font-mono text-xs font-bold">Direct Memory Access Controller</p>
                      <p className="font-mono text-xs text-muted-foreground">Channel 1 configured for high-speed waveform sample playback.</p>
                    </TabsContent>
                    <TabsContent value="diag-irq" className="p-4">
                      <p className="font-mono text-xs font-bold">PIC 8259A Master/Slave</p>
                      <p className="font-mono text-xs text-muted-foreground">Interrupt vector table routed to hardware interrupts 0x08-0x0F.</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

            <ComponentCodePanel sectionId="demo-tabs-section" />
          </section>

            {/* SECTION 2: BREADCRUMB */}
            <section id="demo-breadcrumb-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">02</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Breadcrumb
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  nav • ol • Retro separators
                </span>
                  <ComponentActions sectionId="demo-breadcrumb-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Semantic hierarchical location indicators with retro delimiters, custom glyphs, and responsive overflow.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">Classic Slash Separator</span>
                  <Breadcrumb id="demo-breadcrumb-slash">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#root">ROOT</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#system">SYSTEM</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#drivers">DRIVERS</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage>VGA16.SYS</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">Chevron Separator with Ellipsis</span>
                  <Breadcrumb id="demo-breadcrumb-chevron">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#home">HOME</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>&gt;</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbEllipsis />
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>&gt;</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#palettes">PALETTES</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>&gt;</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage>ATKINSON.PAL</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>

            <ComponentCodePanel sectionId="demo-breadcrumb-section" />
          </section>

            {/* SECTION 3: PAGINATION */}
            <section id="demo-pagination-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">03</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Pagination
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  role=&quot;navigation&quot; • Page Buttons
                </span>
                  <ComponentActions sectionId="demo-pagination-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Stateful pagination controls with previous/next triggers, active indicators, and ellipsis ranges.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    Viewing Page <span className="text-primary font-bold">{currentPage}</span> of 8
                  </span>
                  <Badge variant="outline">BUFFER PAGE {currentPage}</Badge>
                </div>

                <Pagination id="demo-pagination-control">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        id="pagination-prev-btn"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                      />
                    </PaginationItem>
                    {[1, 2, 3].map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          id={`pagination-page-${page}`}
                          isActive={currentPage === page}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        id="pagination-page-8"
                        isActive={currentPage === 8}
                        onClick={() => setCurrentPage(8)}
                      >
                        8
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        id="pagination-next-btn"
                        onClick={() => setCurrentPage((p) => Math.min(8, p + 1))}
                        disabled={currentPage === 8}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>

            <ComponentCodePanel sectionId="demo-pagination-section" />
          </section>

            {/* SECTION 4: NAVIGATION MENU */}
            <section id="demo-navigation-menu-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">04</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    NavigationMenu
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  Header Navigation • Disclosure Submenus
                </span>
                  <ComponentActions sectionId="demo-navigation-menu-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Top-level website bar with direct links, active indicator lines, and dropdown section navigation.
              </p>

              <div className="p-4 bevel-raised bg-surface">
                <NavigationMenu id="demo-nav-menu">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="#overview" active>
                        Overview
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger id="nav-menu-trigger-subsystems">
                        Subsystems
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-3 w-64 space-y-2">
                          <h4 className="font-mono text-xs font-bold uppercase text-primary border-b border-border pb-1">
                            Core Architecture
                          </h4>
                          <ul className="space-y-1 font-mono text-xs">
                            <li>
                              <a href="#dither-engine" className="block p-1 hover:bg-muted text-foreground">
                                • Dither Halftone Engine
                              </a>
                            </li>
                            <li>
                              <a href="#palette-table" className="block p-1 hover:bg-muted text-foreground">
                                • Palette Table Manager
                              </a>
                            </li>
                            <li>
                              <a href="#crt-pipeline" className="block p-1 hover:bg-muted text-foreground">
                                • CRT Scanline Pipeline
                              </a>
                            </li>
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="#tokens">
                        Tokens
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="#docs">
                        Docs
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

            <ComponentCodePanel sectionId="demo-navigation-menu-section" />
          </section>

            {/* SECTION 5: MENUBAR */}
            <section id="demo-menubar-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">05</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Menubar
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  role=&quot;menubar&quot; • Shortcuts • Checkbox/Radio
                </span>
                  <ComponentActions sectionId="demo-menubar-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Desktop-application horizontal menu bar with keyboard arrow navigation, submenus, shortcuts, and toggle states.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <Menubar id="demo-desktop-menubar">
                    {/* File Menu */}
                    <MenubarMenu value="file">
                      <MenubarTrigger id="menubar-trigger-file">File</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem onClick={() => setMenubarAction("File -> New Buffer")}>
                          New Buffer
                          <MenubarShortcut>Ctrl+N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => setMenubarAction("File -> Open Image")}>
                          Open Image...
                          <MenubarShortcut>Ctrl+O</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => setMenubarAction("File -> Save Palette")}>
                          Save Palette
                          <MenubarShortcut>Ctrl+S</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem disabled>Print Spooler</MenubarItem>
                        <MenubarItem onClick={() => setMenubarAction("File -> Exit")}>
                          Exit
                          <MenubarShortcut>Alt+F4</MenubarShortcut>
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>

                    {/* Edit Menu */}
                    <MenubarMenu value="edit">
                      <MenubarTrigger id="menubar-trigger-edit">Edit</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem onClick={() => setMenubarAction("Edit -> Undo")}>
                          Undo
                          <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => setMenubarAction("Edit -> Redo")}>
                          Redo
                          <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => setMenubarAction("Edit -> Cut")}>Cut</MenubarItem>
                        <MenubarItem onClick={() => setMenubarAction("Edit -> Copy")}>Copy</MenubarItem>
                        <MenubarItem onClick={() => setMenubarAction("Edit -> Paste")}>Paste</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>

                    {/* View Menu */}
                    <MenubarMenu value="view">
                      <MenubarTrigger id="menubar-trigger-view">View</MenubarTrigger>
                      <MenubarContent>
                        <MenubarCheckboxItem
                          id="menubar-view-grid"
                          checked={menubarGridCheck}
                          onClick={() => {
                            setMenubarGridCheck(!menubarGridCheck);
                            setMenubarAction(`Grid: ${!menubarGridCheck ? "ON" : "OFF"}`);
                          }}
                        >
                          Show Pixel Grid
                        </MenubarCheckboxItem>
                        <MenubarSeparator />
                        <MenubarRadioItem
                          checked={menubarViewMode === "detail"}
                          onClick={() => {
                            setMenubarViewMode("detail");
                            setMenubarAction("View: Detail Mode");
                          }}
                        >
                          Detail View
                        </MenubarRadioItem>
                        <MenubarRadioItem
                          checked={menubarViewMode === "compact"}
                          onClick={() => {
                            setMenubarViewMode("compact");
                            setMenubarAction("View: Compact Mode");
                          }}
                        >
                          Compact View
                        </MenubarRadioItem>
                      </MenubarContent>
                    </MenubarMenu>

                    {/* Help Menu */}
                    <MenubarMenu value="help">
                      <MenubarTrigger id="menubar-trigger-help">Help</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem onClick={() => setMenubarAction("Help -> About Ditherweb")}>
                          About Ditherweb 2.0
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>

                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-muted-foreground">Action:</span>
                    <Badge variant="primary" id="menubar-action-badge">{menubarAction}</Badge>
                  </div>
                </div>

                <div className="font-mono text-xs text-muted-foreground">
                  Use Left / Right arrow keys to move across menus, Down arrow to open, and Escape to dismiss.
                </div>
              </div>

            <ComponentCodePanel sectionId="demo-menubar-section" />
          </section>

            {/* SECTION 6: TABLE */}
            <section id="demo-table-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">06</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Table
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  table • striped • dense • bordered
                </span>
                  <ComponentActions sectionId="demo-table-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Semantic HTML data table with striped rows, dense padding, cell borders, and responsive horizontal overflow.
              </p>

              <div className="space-y-4">
                <Table id="demo-semantic-table" striped bordered dense>
                  <TableCaption>8086 CPU PRIMARY INTERNAL REGISTERS</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Register</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead align="right">Bit Width</TableHead>
                      <TableHead>High / Low Byte</TableHead>
                      <TableHead>Primary Function</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold text-primary">AX</TableCell>
                      <TableCell>Accumulator</TableCell>
                      <TableCell align="right">16-bit</TableCell>
                      <TableCell>AH / AL</TableCell>
                      <TableCell>I/O operations, arithmetic, system interrupts</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-primary">BX</TableCell>
                      <TableCell>Base Register</TableCell>
                      <TableCell align="right">16-bit</TableCell>
                      <TableCell>BH / BL</TableCell>
                      <TableCell>Indexed addressing, DS memory pointer base</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-primary">CX</TableCell>
                      <TableCell>Counter</TableCell>
                      <TableCell align="right">16-bit</TableCell>
                      <TableCell>CH / CL</TableCell>
                      <TableCell>Loop counter, shift/rotate instructions</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-primary">DX</TableCell>
                      <TableCell>Data Register</TableCell>
                      <TableCell align="right">16-bit</TableCell>
                      <TableCell>DH / DL</TableCell>
                      <TableCell>Multiplication/division overflow, I/O port address</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={2} className="font-bold">Total General Registers</TableCell>
                      <TableCell align="right" className="font-bold">64-bit Total</TableCell>
                      <TableCell colSpan={2} className="text-muted-foreground">Standard Real Mode Complement</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>

            <ComponentCodePanel sectionId="demo-table-section" />
          </section>

            {/* SECTION 7: DATA TABLE */}
            <section id="demo-data-table-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">07</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    DataTable
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  Sorting • Multi-selection • Zero Dependencies
                </span>
                  <ComponentActions sectionId="demo-data-table-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Fully typed data table component with interactive column sorting, multi-row checkbox selection, and loading/empty state fallbacks.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">Active Task Queue</span>
                    <Badge variant="outline">{selectedTableKeys.length} selected</Badge>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">
                    Click header to sort • Click row checkbox to select
                  </span>
                </div>

                <DataTable<ProcessItem>
                  id="demo-interactive-data-table"
                  data={processData}
                  columns={processColumns}
                  selectable
                  selectedKeys={selectedTableKeys}
                  onSelectionChange={(keys) => setSelectedTableKeys(keys)}
                  striped
                  bordered
                  caption="KERNEL ACTIVE PROCESS SCHEDULER"
                />
              </div>

            <ComponentCodePanel sectionId="demo-data-table-section" />
          </section>

            {/* SECTION 8: DESCRIPTION LIST */}
            <section id="demo-description-list-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">08</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    DescriptionList
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  dl • dt • dd • Horizontal &amp; Stacked
                </span>
                  <ComponentActions sectionId="demo-description-list-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Semantic key-value specification lists with horizontal alignment, responsive mobile collapse, and stacked layout variants.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold uppercase text-primary">
                    Horizontal Layout (Divided)
                  </span>
                  <DescriptionList id="demo-description-list-horizontal" layout="horizontal" divided striped>
                    <DescriptionItem>
                      <DescriptionTerm>Graphics Standard</DescriptionTerm>
                      <DescriptionDetails>VGA (Video Graphics Array)</DescriptionDetails>
                    </DescriptionItem>
                    <DescriptionItem>
                      <DescriptionTerm>Display Resolution</DescriptionTerm>
                      <DescriptionDetails>640 × 480 @ 60 Hz Progressive</DescriptionDetails>
                    </DescriptionItem>
                    <DescriptionItem>
                      <DescriptionTerm>Color Depth</DescriptionTerm>
                      <DescriptionDetails>4-bit (16 simultaneous colors from 262,144 palette)</DescriptionDetails>
                    </DescriptionItem>
                    <DescriptionItem>
                      <DescriptionTerm>Pixel Aspect Ratio</DescriptionTerm>
                      <DescriptionDetails>1:1 Square Pixels</DescriptionDetails>
                    </DescriptionItem>
                  </DescriptionList>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold uppercase text-primary">
                    Stacked Layout (Compact)
                  </span>
                  <DescriptionList id="demo-description-list-stacked" layout="stacked" divided dense>
                    <DescriptionItem>
                      <DescriptionTerm>Halftone Algorithm</DescriptionTerm>
                      <DescriptionDetails>Floyd-Steinberg Error Diffusion Kernel</DescriptionDetails>
                    </DescriptionItem>
                    <DescriptionItem>
                      <DescriptionTerm>Diffusion Coefficients</DescriptionTerm>
                      <DescriptionDetails>7/16 (Right), 3/16 (Down-Left), 5/16 (Down), 1/16 (Down-Right)</DescriptionDetails>
                    </DescriptionItem>
                    <DescriptionItem>
                      <DescriptionTerm>Execution Backend</DescriptionTerm>
                      <DescriptionDetails>Zero-dependency WebAssembly SIMD or JS Pure Fallback</DescriptionDetails>
                    </DescriptionItem>
                  </DescriptionList>
                </div>
              </div>

            <ComponentCodePanel sectionId="demo-description-list-section" />
          </section>

            {/* SECTION 9: TREE */}
            <section id="demo-tree-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">09</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Tree
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  role=&quot;tree&quot; • Arrow Navigation • ASCII Connectors
                </span>
                  <ComponentActions sectionId="demo-tree-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Accessible hierarchical navigation tree with ASCII branch connectors, expand/collapse toggles, and roving keyboard focus.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">Selected Node:</span>
                    <Badge variant="primary" id="tree-selected-badge">{treeSelectedId || "None"}</Badge>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">
                    Use Up/Down to traverse • Right/Left to expand/collapse
                  </span>
                </div>

                <Tree
                  id="demo-filesystem-tree"
                  data={treeData}
                  selectedId={treeSelectedId}
                  defaultExpandedIds={["sys-root", "sys-dither"]}
                  onSelect={(id) => setTreeSelectedId(id)}
                  showGuides
                />
              </div>

            <ComponentCodePanel sectionId="demo-tree-section" />
          </section>

            {/* SECTION 10: AVATAR */}
            <section id="demo-avatar-section" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">10</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Avatar
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                  Initials Fallback • Sizes sm-xl • Status Badges
                </span>
                  <ComponentActions sectionId="demo-avatar-section" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Visual entity representation with image fallback, monospace initials, retro bevels, square/circle shapes, and status badges.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold uppercase text-primary">
                    Sizes &amp; Status Badges (Retro Square)
                  </span>
                  <div className="flex items-end gap-6">
                    <div className="flex flex-col items-center gap-1">
                      <Avatar id="avatar-size-sm" size="sm" shape="square" status="online">
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <span className="font-mono text-[10px] text-muted-foreground">sm (24px)</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <Avatar id="avatar-size-md" size="md" shape="square" status="busy">
                        <AvatarFallback>MD</AvatarFallback>
                      </Avatar>
                      <span className="font-mono text-[10px] text-muted-foreground">md (32px)</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <Avatar id="avatar-size-lg" size="lg" shape="square" status="away">
                        <AvatarFallback>DW</AvatarFallback>
                      </Avatar>
                      <span className="font-mono text-[10px] text-muted-foreground">lg (40px)</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <Avatar id="avatar-size-xl" size="xl" shape="square" status="offline">
                        <AvatarFallback>SYS</AvatarFallback>
                      </Avatar>
                      <span className="font-mono text-[10px] text-muted-foreground">xl (48px)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold uppercase text-primary">
                    Circle Variant &amp; Image Fallback
                  </span>
                  <div className="flex items-center gap-6">
                    <Avatar id="avatar-circle-online" size="lg" shape="circle" status="online">
                      <AvatarImage src="/invalid-image-url.png" alt="Ada Lovelace" />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>

                    <Avatar id="avatar-circle-busy" size="lg" shape="circle" status="busy">
                      <AvatarImage src="/artwork/ditherweb_hero.png" alt="Ditherweb" />
                      <AvatarFallback>DW</AvatarFallback>
                    </Avatar>

                    <div className="font-mono text-xs text-muted-foreground">
                      Gracefully degrades to initials fallback on image load failure, while maintaining status indicator badge.
                    </div>
                  </div>
                </div>
              </div>

            <ComponentCodePanel sectionId="demo-avatar-section" />
          </section>
          </>
        )}

        {/* ==================================================================
            PHASE 4: CLASSIC WEB PRIMITIVES
            ================================================================== */}
        {(category === "all" || category === "classic") && (
          <>
            {/* SECTION 1: WEBRING */}
            <section id="demo-web-ring" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">01</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    WebRing
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Circular collection navigation • Prev / Next / Random / Hub
                  </span>
                  <ComponentActions sectionId="demo-web-ring" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Authentic WebRing collection navigation box linking related themed homepages with accessible controls.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  {/* Interactive Default WebRing */}
                  <WebRing variant="default" className="w-full max-w-md">
                    <WebRingHeader>
                      <WebRingTitle>Vintage Computing WebRing</WebRingTitle>
                      <span className="text-[10px] text-muted-foreground">Hub #042</span>
                    </WebRingHeader>
                    <div className="text-center py-1">
                      <WebRingSite
                        name={webringSites[webringSiteIndex - 1].name}
                        memberIndex={webringSites[webringSiteIndex - 1].index}
                        totalMembers={webringSites[webringSiteIndex - 1].total}
                      />
                    </div>
                    <WebRingNavigation>
                      <button
                        type="button"
                        onClick={() => setWebringSiteIndex((i) => (i === 1 ? webringSites.length : i - 1))}
                        className="text-primary hover:underline font-bold text-xs px-1"
                        aria-label="Previous site in ring"
                      >
                        [« Previous]
                      </button>
                      <button
                        type="button"
                        onClick={() => setWebringSiteIndex(Math.floor(Math.random() * webringSites.length) + 1)}
                        className="text-primary hover:underline font-bold text-xs px-1"
                        aria-label="Random site in ring"
                      >
                        [? Random]
                      </button>
                      <WebRingLink direction="hub" href="#">[Ring Hub]</WebRingLink>
                      <button
                        type="button"
                        onClick={() => setWebringSiteIndex((i) => (i === webringSites.length ? 1 : i + 1))}
                        className="text-primary hover:underline font-bold text-xs px-1"
                        aria-label="Next site in ring"
                      >
                        [Next »]
                      </button>
                    </WebRingNavigation>
                  </WebRing>

                  {/* Vintage Dashed Variant */}
                  <WebRing
                    variant="vintage"
                    ringName="Retro Developers Ring"
                    currentSite="SiliconGraphics.dev"
                    prevUrl="#prev"
                    nextUrl="#next"
                    hubUrl="#hub"
                    randomUrl="#rand"
                    className="w-full max-w-sm"
                  />
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-web-ring" />
            </section>

            {/* SECTION 2: GUESTBOOK */}
            <section id="demo-guestbook" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">02</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Guestbook
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Visitor logs • Signatures • Composable entry stream
                  </span>
                  <ComponentActions sectionId="demo-guestbook" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Classic personal-homepage guestbook presentation with authors, timestamps, homepage links, and empty states.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
                    Live Guestbook Showcase
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setGbEmptyToggle(!gbEmptyToggle)}
                  >
                    {gbEmptyToggle ? "Show Populated State" : "Show Empty State"}
                  </Button>
                </div>

                {gbEmptyToggle ? (
                  <Guestbook>
                    <GuestbookHeader>
                      <GuestbookTitle>Dave&apos;s Digital Guestbook</GuestbookTitle>
                      <span className="text-xs text-muted-foreground">0 Signatures</span>
                    </GuestbookHeader>
                    <GuestbookEmpty />
                  </Guestbook>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <Guestbook>
                        <GuestbookHeader>
                          <GuestbookTitle>Dave&apos;s Digital Guestbook</GuestbookTitle>
                          <span className="text-xs text-muted-foreground">{gbEntries.length} Total Signatures</span>
                        </GuestbookHeader>
                        <GuestbookEntryList>
                          {gbEntries.map((entry) => (
                            <GuestbookEntry
                              key={entry.id}
                              entryNumber={entry.entryNumber}
                              author={entry.author}
                              location={entry.location}
                              date={entry.date}
                              websiteUrl={entry.websiteUrl}
                              websiteName={entry.websiteName}
                              message={entry.message}
                            />
                          ))}
                        </GuestbookEntryList>
                        <GuestbookFooter>
                          <span>Showing {gbEntries.length} entries</span>
                          <span>Page 1 of 1</span>
                        </GuestbookFooter>
                      </Guestbook>
                    </div>

                    {/* Quick Sign Guestbook form demonstrating Phase 3 composition */}
                    <div className="bevel-inset bg-background p-4 space-y-3">
                      <div className="font-bold text-xs uppercase text-foreground border-b border-border pb-1">
                        Sign This Guestbook
                      </div>
                      <form onSubmit={handleAddGuestbook} className="space-y-3">
                        <Field required>
                          <FieldLabel>Handle / Name</FieldLabel>
                          <Input
                            value={gbAuthor}
                            onChange={(e) => setGbAuthor(e.target.value)}
                            placeholder="e.g. modem_surfer"
                            required
                          />
                        </Field>
                        <Field required>
                          <FieldLabel>Message</FieldLabel>
                          <Textarea
                            rows={3}
                            value={gbMsg}
                            onChange={(e) => setGbMsg(e.target.value)}
                            placeholder="Greetings from 1997!"
                            required
                          />
                        </Field>
                        <Button type="submit" size="sm" variant="primary" className="w-full">
                          Submit Signature
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              <ComponentCodePanel sectionId="demo-guestbook" />
            </section>

            {/* SECTION 3: VISITOR COUNTER */}
            <section id="demo-visitor-counter" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">03</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    VisitorCounter
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Rolling odometer • Phosphor LED • LCD • Zero tracking
                  </span>
                  <ComponentActions sectionId="demo-visitor-counter" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Classic mechanical odometer and digital readout counter supporting leading zeroes, labels, and accessible text alternatives.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
                  <div className="font-mono text-xs text-muted-foreground">
                    Interactive Controls:
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => setVisitorCount((c) => c + 1)}>
                      +1 Hit
                    </Button>
                    <Button size="sm" onClick={() => setVisitorCount((c) => c + 100)}>
                      +100 Hits
                    </Button>
                    <Button size="sm" variant="secondary" onClick={() => setVisitorCount(12847)}>
                      Reset Value
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center py-2">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-[11px] font-bold uppercase text-muted-foreground">Odometer (Mechanical)</span>
                    <VisitorCounter value={visitorCount} minDigits={6} variant="odometer" label="VISITORS" size="lg" />
                  </div>

                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-[11px] font-bold uppercase text-muted-foreground">Green LED Phosphor</span>
                    <VisitorCounter value={visitorCount} minDigits={6} variant="led" label="TOTAL HITS" size="md" />
                  </div>

                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-[11px] font-bold uppercase text-muted-foreground">Gray Matrix LCD</span>
                    <VisitorCounter value={visitorCount} minDigits={6} variant="lcd" label="PAGE VIEWS" size="md" />
                  </div>

                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-[11px] font-bold uppercase text-muted-foreground">Classic Sunken Bevel</span>
                    <VisitorCounter value={visitorCount} minDigits={6} variant="classic" label="LOGGED ACCESS" size="md" />
                  </div>
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-visitor-counter" />
            </section>

            {/* SECTION 4: UNDER CONSTRUCTION */}
            <section id="demo-under-construction" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">04</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    UnderConstruction
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Vintage maintenance notice • Hazard stripes • Non-obnoxious
                  </span>
                  <ComponentActions sectionId="demo-under-construction" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Authentic 90s site construction and maintenance indicator with hazard borders and accessible alternatives. Zero flashing.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Stripes Variant */}
                  <UnderConstruction variant="stripes">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <UnderConstructionIcon size="md" />
                      <UnderConstructionTitle>CYBERSITE UNDER CONSTRUCTION</UnderConstructionTitle>
                      <UnderConstructionMessage>
                        Please excuse our virtual dust! Netscape Navigator 3.0 frames and tables are currently being optimized.
                      </UnderConstructionMessage>
                      <UnderConstructionEstimatedDate date="NOVEMBER 1997" />
                      <UnderConstructionAction>
                        <Button size="sm" variant="outline">Return to Home Portal</Button>
                      </UnderConstructionAction>
                    </div>
                  </UnderConstruction>

                  {/* Bevel Variant with Progress integration */}
                  <UnderConstruction variant="bevel">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <UnderConstructionIcon size="sm" />
                      <UnderConstructionTitle>BBS FILE REPOSITORY REBUILD</UnderConstructionTitle>
                      <UnderConstructionMessage>
                        Re-indexing sector clusters and downloading CD-ROM shareware volumes.
                      </UnderConstructionMessage>
                      <div className="w-full max-w-xs pt-1 space-y-1">
                        <div className="flex justify-between text-[10px] text-muted-foreground">
                          <span>Sector Defrag</span>
                          <span>68%</span>
                        </div>
                        <Progress value={68} max={100} variant="stepped" className="w-full" />
                      </div>
                      <UnderConstructionEstimatedDate date="Q4 1997" />
                    </div>
                  </UnderConstruction>
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-under-construction" />
            </section>

            {/* SECTION 5: MARQUEE */}
            <section id="demo-marquee" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">05</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Marquee
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Modern CSS ticker • Pause-on-hover • Reduced-motion safe
                  </span>
                  <ComponentActions sectionId="demo-marquee" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Recreates the classic scrolling-text ticker using modern CSS transforms with hover/focus pause and guaranteed reduced-motion static fallback.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-4">
                <div className="space-y-3">
                  {/* Left Scrolling Marquee */}
                  <div>
                    <span className="text-[11px] font-bold uppercase text-muted-foreground mb-1 block">
                      Normal Speed (Scrolls Left • Hover or Focus to Pause)
                    </span>
                    <Marquee speed="normal" direction="left" pauseOnHover pauseOnFocus>
                      <span className="text-primary font-bold">★ WELCOME TO DITHERWEB ★</span>
                      <span>DIALUP NODE #4 CONNECTED AT 57,600 BAUD</span>
                      <span className="text-accent font-bold">OPTIMIZED FOR 800x600 IN 16-BIT COLOR</span>
                      <span>NEW 88x31 BUTTONS ADDED TO VAULT</span>
                    </Marquee>
                  </div>

                  {/* Fast Right Scrolling Marquee */}
                  <div>
                    <span className="text-[11px] font-bold uppercase text-muted-foreground mb-1 block">
                      Fast Speed (Scrolls Right • Compact Ticker)
                    </span>
                    <Marquee speed="fast" direction="right" pauseOnHover>
                      <span className="text-destructive font-bold">● SYSTEM ALERT:</span>
                      <span>HIMEM.SYS LOADED 640KB BASE RAM NOMINAL</span>
                      <span>VGA BIOS INITIALIZED</span>
                    </Marquee>
                  </div>
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-marquee" />
            </section>

            {/* SECTION 6: BLINK */}
            <section id="demo-blink" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">06</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Blink
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Opt-in text emphasis • Step animation • Zero hazard
                  </span>
                  <ComponentActions sectionId="demo-blink" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Classic blinking text primitive. Blinking is strictly opt-in (disabled by default) and automatically becomes static when reduced motion is preferred.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <span className="text-xs text-muted-foreground">
                    Interactive Toggle (Blink is opt-in only):
                  </span>
                  <Button
                    size="sm"
                    variant={blinkActive ? "primary" : "outline"}
                    onClick={() => setBlinkActive(!blinkActive)}
                  >
                    {blinkActive ? "Blink Animation: ON" : "Blink Animation: OFF"}
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-2">
                  <div className="bevel-inset bg-background p-4 space-y-1">
                    <span className="text-[10px] text-muted-foreground block uppercase">Normal Speed (1.0s)</span>
                    <Blink enabled={blinkActive} speed="normal" className="bg-amber-400 text-black px-1.5 py-0.5 text-xs font-bold uppercase">
                      ★ NEW UPDATE ★
                    </Blink>
                  </div>

                  <div className="bevel-inset bg-background p-4 space-y-1">
                    <span className="text-[10px] text-muted-foreground block uppercase">Slow Speed (1.6s)</span>
                    <Blink enabled={blinkActive} speed="slow" className="text-destructive font-black text-sm">
                      [HOT LINKS]
                    </Blink>
                  </div>

                  <div className="bevel-inset bg-background p-4 space-y-1">
                    <span className="text-[10px] text-muted-foreground block uppercase">Fast Speed (0.6s)</span>
                    <Blink enabled={blinkActive} speed="fast" className="text-primary font-bold text-xs underline">
                      SIGN GUESTBOOK!
                    </Blink>
                  </div>
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-blink" />
            </section>

            {/* SECTION 7: BUTTON 88x31 */}
            <section id="demo-button-88x31" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">07</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    Button88x31
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Exact 88×31 geometry • Micro-badges • Pixelated
                  </span>
                  <ComponentActions sectionId="demo-button-88x31" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Iconic 88×31 early-web micro-badge format with exact pixel dimensions, two-tone text splits, and image support.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-4">
                <div className="text-[11px] font-bold uppercase text-muted-foreground">
                  Classic 88×31 Micro-Badge Collection
                </div>

                <div className="flex flex-wrap items-center gap-4 py-2">
                  <Button88x31 label="NETSCAPE" value="NOW!" href="#" />
                  <Button88x31 label="HTML 4.0" value="VALID" href="#" />
                  <Button88x31 label="NOTEPAD" value="MADE" variant="flat" href="#" />
                  <Button88x31 label="BEST AT" value="800x600" href="#" />
                  <Button88x31 variant="bevel" href="#">DITHERWEB</Button88x31>
                  <Button88x31 variant="outline" href="#">WEB RING</Button88x31>
                  <Button88x31 label="BBS NODE" value="56K" href="#" />
                  <Button88x31 label="VGA 256" value="COLOR" href="#" />
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-button-88x31" />
            </section>

            {/* SECTION 8: RETRO BANNER */}
            <section id="demo-retro-banner" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">08</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    RetroBanner
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Early web horizontal ad/header banner • Dither substrate
                  </span>
                  <ComponentActions sectionId="demo-retro-banner" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Standard 468×60 early-web site header and promotional banner featuring dither textures and pixel typography.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-4">
                <div className="flex flex-col items-center gap-4 py-2">
                  {/* Standard 468x60 Dither Banner */}
                  <RetroBanner format="standard" variant="dither" href="#">
                    <div className="space-y-0.5">
                      <RetroBannerTitle>CYBERNET BBS • DIAL (555) 019-2831</RetroBannerTitle>
                      <RetroBannerSubtitle>56K V.90 High Speed Nodes • ANSI Graphics</RetroBannerSubtitle>
                    </div>
                    <RetroBannerAction>
                      <Button size="sm">CONNECT</Button>
                    </RetroBannerAction>
                  </RetroBanner>

                  {/* Compact Bevel Banner */}
                  <RetroBanner format="compact" variant="bevel" href="#">
                    <div className="space-y-0.5">
                      <RetroBannerTitle>DITHER ART ENGINE</RetroBannerTitle>
                      <RetroBannerSubtitle>Floyd-Steinberg 16-Color Kernel</RetroBannerSubtitle>
                    </div>
                    <RetroBannerAction>
                      <Badge variant="primary">v1.0</Badge>
                    </RetroBannerAction>
                  </RetroBanner>
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-retro-banner" />
            </section>

            {/* SECTION 9: PIXEL IMAGE */}
            <section id="demo-pixel-image" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">09</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    PixelImage
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Nearest-neighbor scaling • Vintage frames • Figcaption
                  </span>
                  <ComponentActions sectionId="demo-pixel-image" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Bitmap and pixel-art image wrapper guaranteeing crisp pixelated scaling with classic beveled and dithered frames.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-8 py-2">
                  {/* Bevel Frame */}
                  <PixelImage
                    src="/artwork/ditherweb_hero.png"
                    alt="Ditherweb Hero Art"
                    width={180}
                    height={135}
                    frame="bevel"
                    caption="Fig 1. ISA Controller (Bevel Frame)"
                  />

                  {/* Dither Frame */}
                  <PixelImage
                    src="/artwork/ditherweb_hero.png"
                    alt="Ditherweb Hero Art Dither Frame"
                    width={180}
                    height={135}
                    frame="dither"
                    caption="Fig 2. Dither Substrate Frame"
                  />

                  {/* Inset Frame */}
                  <PixelImage
                    src="/artwork/ditherweb_hero.png"
                    alt="Ditherweb Hero Art Inset Frame"
                    width={180}
                    height={135}
                    frame="inset"
                    caption="Fig 3. Sunken Inset Frame"
                  />
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-pixel-image" />
            </section>

            {/* SECTION 10: WEB DIRECTORY */}
            <section id="demo-web-directory" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">10</Badge>
                  <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                    WebDirectory
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    Early web curated link index • Yahoo! / DMOZ pattern
                  </span>
                  <ComponentActions sectionId="demo-web-directory" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Hierarchical categorized web portal directory with tree bullets, counts, new badges, and responsive multi-column layout.
              </p>

              <div className="p-4 bevel-raised bg-surface space-y-4">
                <WebDirectory>
                  <WebDirectoryHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-sm uppercase text-foreground">
                          DITHERWEB PORTAL DIRECTORY
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Human-curated index of the retro Web • 3 Categories Active
                        </p>
                      </div>
                      <Badge variant="outline">PORTAL INDEX</Badge>
                    </div>
                  </WebDirectoryHeader>

                  <WebDirectoryGrid cols={3}>
                    {/* Category 1 */}
                    <WebDirectoryCategory>
                      <WebDirectoryTitle count={3} icon="🌐">
                        COMMUNITY &amp; HOMEPAGES
                      </WebDirectoryTitle>
                      <WebDirectoryList>
                        <WebDirectoryItem>
                          <WebDirectoryLink href="#" isNew>WebRings</WebDirectoryLink>
                          <WebDirectoryDescription>Themed circular website collection navigation</WebDirectoryDescription>
                        </WebDirectoryItem>
                        <WebDirectoryItem>
                          <WebDirectoryLink href="#">Guestbooks</WebDirectoryLink>
                          <WebDirectoryDescription>Personal homepage visitor signature streams</WebDirectoryDescription>
                        </WebDirectoryItem>
                        <WebDirectoryItem>
                          <WebDirectoryLink href="#">88x31 Vault</WebDirectoryLink>
                          <WebDirectoryDescription>Curated directory of micro-badges</WebDirectoryDescription>
                        </WebDirectoryItem>
                      </WebDirectoryList>
                      <WebDirectorySubcategories>
                        <span>Subcategories:</span>
                        <a href="#" className="underline">Personal Sites</a>
                        <span>•</span>
                        <a href="#" className="underline">Hubs</a>
                      </WebDirectorySubcategories>
                    </WebDirectoryCategory>

                    {/* Category 2 */}
                    <WebDirectoryCategory>
                      <WebDirectoryTitle count={3} icon="💾">
                        RETRO HARDWARE
                      </WebDirectoryTitle>
                      <WebDirectoryList>
                        <WebDirectoryItem>
                          <WebDirectoryLink href="#">VGA Controllers</WebDirectoryLink>
                          <WebDirectoryDescription>Standard Mode 13h (320x200 256 colors)</WebDirectoryDescription>
                        </WebDirectoryItem>
                        <WebDirectoryItem>
                          <WebDirectoryLink href="#" isNew>Sound Blaster 16</WebDirectoryLink>
                          <WebDirectoryDescription>FM synthesis and DSP registers</WebDirectoryDescription>
                        </WebDirectoryItem>
                        <WebDirectoryItem>
                          <WebDirectoryLink href="#">ISA Bus Architecture</WebDirectoryLink>
                          <WebDirectoryDescription>Interrupt vector arbitration</WebDirectoryDescription>
                        </WebDirectoryItem>
                      </WebDirectoryList>
                    </WebDirectoryCategory>

                    {/* Category 3 */}
                    <WebDirectoryCategory>
                      <WebDirectoryTitle count={2} icon="📁">
                        SOFTWARE &amp; PROTOCOLS
                      </WebDirectoryTitle>
                      <WebDirectoryList>
                        <WebDirectoryItem>
                          <WebDirectoryLink href="#">ZMODEM Transfers</WebDirectoryLink>
                          <WebDirectoryDescription>Batch file protocol with CRC checksum</WebDirectoryDescription>
                        </WebDirectoryItem>
                        <WebDirectoryItem>
                          <WebDirectoryLink href="#">Telnet &amp; BBS</WebDirectoryLink>
                          <WebDirectoryDescription>Terminal access and ANSI art galleries</WebDirectoryDescription>
                        </WebDirectoryItem>
                      </WebDirectoryList>
                    </WebDirectoryCategory>
                  </WebDirectoryGrid>
                </WebDirectory>
              </div>

              <ComponentCodePanel sectionId="demo-web-directory" />
            </section>
          </>
        )}

        {/* ==================================================================== */}
        {/* PHASE 5: DESKTOP & PIXEL PRIMITIVES (10)                             */}
        {/* ==================================================================== */}
        {(category === "all" || category === "desktop") && (
          <>
            {/* SECTION 1: WINDOW */}
            <section id="window" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    01
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Window
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-window" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Semantic classic application window surface container featuring authentic 3D raised bevels, integrated titlebar, content body, footer action tray, and sunken status panels.
              </p>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                <Button
                  size="sm"
                  variant={windowActive ? "primary" : "outline"}
                  onClick={() => setWindowActive(!windowActive)}
                >
                  Toggle Window Active: {windowActive ? "ACTIVE" : "INACTIVE"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setWindowLog(`Active reset at ${new Date().toLocaleTimeString()}`)}
                >
                  Ping Window
                </Button>
              </div>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                <Window
                  active={windowActive}
                  size="md"
                  className="w-full max-w-lg transition-colors"
                >
                  <WindowTitleBar active={windowActive}>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <WindowIcon />
                      <WindowTitle>DIALUP_CONFIG.EXE</WindowTitle>
                    </div>
                    <WindowControls
                      onMinimize={() => setWindowLog("Event: Window Minimized")}
                      onMaximize={() => setWindowLog("Event: Window Maximized")}
                      onClose={() => setWindowLog("Event: Window Close Requested")}
                    />
                  </WindowTitleBar>
                  <WindowContent className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Network Interface:</span>
                      <span className="font-bold">PPP / SLIP COM3</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Baud Rate:</span>
                      <span className="font-bold">57,600 bps</span>
                    </div>
                    <div className="p-2 bevel-inset bg-muted/30 text-xs text-muted-foreground">
                      Status Log: {windowLog}
                    </div>
                  </WindowContent>
                  <WindowFooter>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setWindowLog("Settings reverted")}
                    >
                      Defaults
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setWindowLog("Configuration saved to CMOS")}
                    >
                      Save Configuration
                    </Button>
                  </WindowFooter>
                  <WindowStatusBar>
                    <WindowStatusItem sunken>READY</WindowStatusItem>
                    <WindowStatusItem sunken>COM3: OK</WindowStatusItem>
                    <WindowStatusItem sunken>96 PRIMITIVES</WindowStatusItem>
                  </WindowStatusBar>
                </Window>
              </div>

              <ComponentCodePanel sectionId="demo-window" />
            </section>

            {/* SECTION 2: WINDOW TITLE BAR */}
            <section id="window-titlebar" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    02
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    WindowTitleBar
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-window-titlebar" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Classic application title bar strip with high-contrast active vs. inactive visual styling, icon support, semantic title text, and window controls. Works inside Window or independently.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 space-y-4">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase font-bold">
                    Active Titlebar (Focused Window)
                  </div>
                  <div className="bevel-raised border border-border">
                    <WindowTitleBar active={true}>
                      <div className="flex items-center gap-1.5">
                        <WindowIcon />
                        <WindowTitle>TERMINAL_SESSION_01 [ACTIVE]</WindowTitle>
                      </div>
                      <WindowControls />
                    </WindowTitleBar>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase font-bold">
                    Inactive Titlebar (Background Window)
                  </div>
                  <div className="bevel-raised border border-border">
                    <WindowTitleBar active={false}>
                      <div className="flex items-center gap-1.5">
                        <WindowIcon />
                        <WindowTitle>BACKGROUND_TASK [INACTIVE]</WindowTitle>
                      </div>
                      <WindowControls disabled />
                    </WindowTitleBar>
                  </div>
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-window-titlebar" />
            </section>

            {/* SECTION 3: WINDOW CONTROLS */}
            <section id="window-controls" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    03
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    WindowControls
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-window-controls" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Classic triad of window management buttons (Minimize, Maximize/Restore, Close) built with native button elements, accessible labels, tactile pressed states, and clean pixel SVGs.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold font-mono">Live Interactive Controls:</span>
                  <WindowControls
                    isMaximized={windowMaximized}
                    showHelp
                    onHelp={() => setWindowLog("Help: Window controls clicked")}
                    onMinimize={() => setWindowLog("Minimize action triggered")}
                    onMaximize={() => {
                      setWindowMaximized(!windowMaximized);
                      setWindowLog(`Maximize/Restore toggled: ${!windowMaximized}`);
                    }}
                    onClose={() => setWindowLog("Close action triggered")}
                  />
                </div>
                <div className="text-xs font-mono text-muted-foreground bevel-inset p-2 bg-surface">
                  Action Feedback: {windowLog}
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-window-controls" />
            </section>

            {/* SECTION 4: TASKBAR */}
            <section id="taskbar" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    04
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Taskbar
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-taskbar" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Classic desktop taskbar abstraction with start launcher button, active application task buttons, and system status tray with a live clock. Zero fake OS branding, fully composable and accessible.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 space-y-3">
                <div className="text-xs text-muted-foreground font-mono">
                  Active Task: <span className="font-bold text-foreground uppercase">{taskbarActiveTask}</span>
                </div>
                <Taskbar position="relative">
                  <TaskbarStart
                    active={taskbarStartActive}
                    onClick={() => setTaskbarStartActive(!taskbarStartActive)}
                  >
                    START
                  </TaskbarStart>
                  <TaskbarTasks>
                    <TaskbarTask
                      active={taskbarActiveTask === "terminal"}
                      onClick={() => setTaskbarActiveTask("terminal")}
                    >
                      TERMINAL.EXE
                    </TaskbarTask>
                    <TaskbarTask
                      active={taskbarActiveTask === "dialup"}
                      onClick={() => setTaskbarActiveTask("dialup")}
                    >
                      DIALUP_CONFIG.EXE
                    </TaskbarTask>
                    <TaskbarTask
                      active={taskbarActiveTask === "paint"}
                      onClick={() => setTaskbarActiveTask("paint")}
                    >
                      BITMAP_EDITOR
                    </TaskbarTask>
                  </TaskbarTasks>
                  <TaskbarStatus>
                    <span className="hidden sm:inline">100% DISK</span>
                    <TaskbarClock />
                  </TaskbarStatus>
                </Taskbar>
              </div>

              <ComponentCodePanel sectionId="demo-taskbar" />
            </section>

            {/* SECTION 5: MENU */}
            <section id="menu" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    05
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Menu
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-menu" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Classic desktop application menu bar (File, Edit, View, Help) with dropdown panels, keyboard navigation (Arrow keys, Enter, Space, Escape), accelerators, separators, and submenu support. Zero external dependencies.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 space-y-4">
                <div className="text-xs font-mono text-muted-foreground">
                  Last Menu Action: <span className="font-bold text-foreground">{menuStatusLog}</span>
                </div>
                <MenuBar>
                  <Menu>
                    <MenuTrigger>File</MenuTrigger>
                    <MenuContent>
                      <MenuItem shortcut="Ctrl+N" onSelect={() => setMenuStatusLog("File -> New Session")}>
                        New Session
                      </MenuItem>
                      <MenuItem shortcut="Ctrl+O" onSelect={() => setMenuStatusLog("File -> Open Binary...")}>
                        Open Binary...
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem shortcut="Ctrl+S" onSelect={() => setMenuStatusLog("File -> Save Config")}>
                        Save Config
                      </MenuItem>
                      <MenuItem disabled shortcut="Ctrl+P">
                        Print to LPT1 (Disabled)
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem shortcut="Alt+F4" onSelect={() => setMenuStatusLog("File -> Exit Application")}>
                        Exit Application
                      </MenuItem>
                    </MenuContent>
                  </Menu>

                  <Menu>
                    <MenuTrigger>Edit</MenuTrigger>
                    <MenuContent>
                      <MenuItem shortcut="Ctrl+Z" onSelect={() => setMenuStatusLog("Edit -> Undo Action")}>
                        Undo
                      </MenuItem>
                      <MenuItem shortcut="Ctrl+Y" onSelect={() => setMenuStatusLog("Edit -> Redo Action")}>
                        Redo
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem shortcut="Ctrl+X" onSelect={() => setMenuStatusLog("Edit -> Cut")}>
                        Cut
                      </MenuItem>
                      <MenuItem shortcut="Ctrl+C" onSelect={() => setMenuStatusLog("Edit -> Copy")}>
                        Copy
                      </MenuItem>
                      <MenuItem shortcut="Ctrl+V" onSelect={() => setMenuStatusLog("Edit -> Paste")}>
                        Paste
                      </MenuItem>
                    </MenuContent>
                  </Menu>

                  <Menu>
                    <MenuTrigger>View</MenuTrigger>
                    <MenuContent>
                      <MenuItem onSelect={() => setMenuStatusLog("View -> Dither Overlay Toggled")}>
                        Toggle Dither Pattern
                      </MenuItem>
                      <MenuItem onSelect={() => setMenuStatusLog("View -> Mode 13h 320x200")}>
                        VGA Mode 13h
                      </MenuItem>
                      <SubMenu>
                        <SubMenuTrigger>Zoom Scale</SubMenuTrigger>
                        <SubMenuContent>
                          <MenuItem onSelect={() => setMenuStatusLog("Zoom -> 100%")}>100% Native</MenuItem>
                          <MenuItem onSelect={() => setMenuStatusLog("Zoom -> 200%")}>200% Integer</MenuItem>
                          <MenuItem onSelect={() => setMenuStatusLog("Zoom -> 400%")}>400% Pixelated</MenuItem>
                        </SubMenuContent>
                      </SubMenu>
                    </MenuContent>
                  </Menu>

                  <Menu>
                    <MenuTrigger>Help</MenuTrigger>
                    <MenuContent>
                      <MenuItem onSelect={() => setMenuStatusLog("Help -> Documentation Opened")}>
                        Ditherweb Documentation
                      </MenuItem>
                      <MenuItem onSelect={() => setMenuStatusLog("Help -> About Dialog Opened")}>
                        About Ditherweb v0.1.0
                      </MenuItem>
                    </MenuContent>
                  </Menu>
                </MenuBar>
              </div>

              <ComponentCodePanel sectionId="demo-menu" />
            </section>

            {/* SECTION 6: CONTEXT MENU */}
            <section id="context-menu" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    06
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    ContextMenu
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-context-menu" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Right-click and keyboard-accessible (Shift+F10) context action menu with coordinate positioning, viewport boundary clamping to eliminate horizontal and vertical overflow, Escape dismissal, and outside click capture.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 space-y-3">
                <div className="text-xs font-mono text-muted-foreground">
                  Status: <span className="font-bold text-foreground">{contextStatusLog}</span>
                </div>
                <ContextMenu>
                  <ContextMenuTrigger className="p-8 sm:p-12 border-2 border-dashed border-border bg-surface text-center cursor-context-menu hover:bg-muted/40 transition-colors">
                    <div className="space-y-1">
                      <div className="font-bold text-sm uppercase">Right-Click Zone</div>
                      <div className="text-xs text-muted-foreground">
                        Right-click anywhere here or select this box and press <Kbd>Shift</Kbd> + <Kbd>F10</Kbd>
                      </div>
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuLabel>Desktop Actions</ContextMenuLabel>
                    <ContextMenuItem
                      shortcut="Ctrl+R"
                      onSelect={() => setContextStatusLog("Action: Refresh Workspace executed")}
                    >
                      Refresh Workspace
                    </ContextMenuItem>
                    <ContextMenuItem
                      onSelect={() => setContextStatusLog("Action: Arrange by Name executed")}
                    >
                      Arrange Icons by Name
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem
                      shortcut="Ctrl+N"
                      onSelect={() => setContextStatusLog("Action: New Folder created")}
                    >
                      New Folder
                    </ContextMenuItem>
                    <ContextMenuItem
                      onSelect={() => setContextStatusLog("Action: Create Shortcut executed")}
                    >
                      Create Shortcut
                    </ContextMenuItem>
                    <ContextMenuItem disabled>
                      Format Drive A: (Disabled)
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem
                      onSelect={() => setContextStatusLog("Action: Workspace Properties opened")}
                    >
                      Properties
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </div>

              <ComponentCodePanel sectionId="demo-context-menu" />
            </section>

            {/* SECTION 7: DESKTOP */}
            <section id="desktop" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    07
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Desktop
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-desktop" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Composable desktop workspace canvas supporting authentic classic wallpapers (procedural dither stipple, teal, solid, grid), desktop shortcut icons, and window / taskbar arrangement. Layout primitive with zero OS simulation bloat.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 space-y-4">
                <div className="text-xs font-mono text-muted-foreground">
                  Active Desktop App: <span className="font-bold text-foreground">{desktopOpenApp}</span>
                </div>
                <Desktop wallpaper="dither" className="min-h-[380px] sm:min-h-[420px]">
                  <div className="flex-1 flex flex-col sm:flex-row gap-4 p-3 overflow-hidden">
                    <DesktopIconGrid>
                      <DesktopIcon
                        label="Terminal"
                        selected={desktopIconSelected === "terminal"}
                        onClick={() => setDesktopIconSelected("terminal")}
                        onOpen={() => setDesktopOpenApp("VT-100 TERMINAL")}
                      />
                      <DesktopIcon
                        label="Hard Drive"
                        selected={desktopIconSelected === "drive"}
                        onClick={() => setDesktopIconSelected("drive")}
                        onOpen={() => setDesktopOpenApp("DISK_C (540 MB)")}
                      />
                      <DesktopIcon
                        label="Dial-Up"
                        selected={desktopIconSelected === "dialup"}
                        onClick={() => setDesktopIconSelected("dialup")}
                        onOpen={() => setDesktopOpenApp("DIALUP_CONFIG.EXE")}
                      />
                      <DesktopIcon
                        label="Trash"
                        selected={desktopIconSelected === "trash"}
                        onClick={() => setDesktopIconSelected("trash")}
                        onOpen={() => setDesktopOpenApp("RECYCLE_BIN")}
                      />
                    </DesktopIconGrid>

                    <Window size="sm" className="self-start max-w-xs shadow-hard-lg">
                      <WindowTitleBar active>
                        <div className="flex items-center gap-1">
                          <WindowIcon />
                          <WindowTitle>{desktopOpenApp}</WindowTitle>
                        </div>
                        <WindowControls />
                      </WindowTitleBar>
                      <WindowContent className="text-xs space-y-1">
                        <div>CPU: 486DX2 @ 66 MHz</div>
                        <div>RAM: 16,384 KB Extended</div>
                        <div className="text-muted-foreground">Double-click or press Enter on an icon to switch.</div>
                      </WindowContent>
                    </Window>
                  </div>

                  <Taskbar position="relative">
                    <TaskbarStart>START</TaskbarStart>
                    <TaskbarTasks>
                      <TaskbarTask active>{desktopOpenApp}</TaskbarTask>
                    </TaskbarTasks>
                    <TaskbarStatus>
                      <TaskbarClock />
                    </TaskbarStatus>
                  </Taskbar>
                </Desktop>
              </div>

              <ComponentCodePanel sectionId="demo-desktop" />
            </section>

            {/* SECTION 8: TERMINAL */}
            <section id="terminal" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    08
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Terminal
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-terminal" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Classic monospaced command-line presentation component with prompt, command echo, stream logs, phosphor palette variations, and a reduced-motion-safe blinking cursor. Strictly presentation-only.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 space-y-4">
                <Terminal variant="matrix">
                  <TerminalHeader title="VT-100 CONSOLE — 80x25">
                    <span className="text-[10px] text-zinc-500 font-mono">COM1: 9600-8-N-1</span>
                  </TerminalHeader>
                  <TerminalBody>
                    <TerminalLine>
                      <TerminalPrompt>root@ditherweb:~$</TerminalPrompt>
                      <TerminalCommand>npx @ditherweb/ui --verify-foundation</TerminalCommand>
                    </TerminalLine>
                    <TerminalOutput>
                      [INIT] Loading 96 production primitives...
                      [CORE] 10 Core Foundational Primitives Verified
                      [TYPO] 8 Typography Primitives Verified
                      [LAYT] 8 Layout Primitives Verified
                      [FORM] 10 Forms &amp; Selection Primitives Verified
                      [SURF] 10 Surfaces &amp; Feedback Primitives Verified
                      [OVRL] 10 Overlays &amp; Layered Interaction Verified
                      [NAVG] 10 Navigation &amp; Structured Data Verified
                      [CLSC] 10 Classic Web Historical Primitives Verified
                      [DSKT] 10 Desktop &amp; Pixel Primitives Verified
                      [FXPL] 10 Advanced Effects &amp; Polish Primitives Verified
                      [STATUS] All 96 primitives operational with 0 runtime dependencies.
                    </TerminalOutput>
                    <TerminalLine>
                      <TerminalPrompt>root@ditherweb:~$</TerminalPrompt>
                      <TerminalCursor />
                    </TerminalLine>
                  </TerminalBody>
                </Terminal>
              </div>

              <ComponentCodePanel sectionId="demo-terminal" />
            </section>

            {/* SECTION 9: PIXEL ART */}
            <section id="pixel-art" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    09
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    PixelArt
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-pixel-art" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Presentation component for pixel-art graphics and sprites enforcing integer scaling, crisp nearest-neighbor rendering (image-rendering: pixelated), retro pixel frames, and optional dither texture.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-wrap items-center justify-around gap-6">
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

                <PixelArt
                  alt="Retro CRT Computer Sprite"
                  frame="bevel"
                  caption="Workstation Monitor (3D Raised Frame)"
                >
                  <div className="w-20 h-20 bg-muted border-2 border-border p-2 flex flex-col items-center justify-between">
                    <div className="w-14 h-11 bg-black border border-border flex items-center justify-center">
                      <span className="text-[10px] text-green-400 font-mono font-bold animate-pulse">C:&gt;_</span>
                    </div>
                    <div className="w-8 h-1.5 bg-border self-center" />
                  </div>
                </PixelArt>

                <PixelArt
                  alt="Double Border Pixel Frame"
                  frame="double"
                  caption="Sprite (Double Border Frame)"
                >
                  <div className="w-16 h-16 bg-[#008080] flex items-center justify-center font-mono font-bold text-white text-xs">
                    VGA
                  </div>
                </PixelArt>
              </div>

              <ComponentCodePanel sectionId="demo-pixel-art" />
            </section>

            {/* SECTION 10: BITMAP CANVAS */}
            <section id="bitmap-canvas" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    10
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    BitmapCanvas
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 5 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-bitmap-canvas" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Lightweight pixel-grid canvas surface for displaying and interacting with 8-bit bitmap matrices, retro palettes, and dither textures. Accessible gridcells with keyboard support.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col sm:flex-row items-center justify-around gap-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-xs font-mono font-bold">Interactive 8x8 Bitmap Surface:</div>
                  <BitmapCanvas
                    width={8}
                    height={8}
                    pixelSize={24}
                    grid
                    interactive
                    activeColor={canvasActiveColor}
                    value={canvasMatrix}
                    onChange={(newGrid) => setCanvasMatrix(newGrid)}
                    alt="Interactive 8x8 pixel bitmap grid"
                  />
                  <div className="text-[11px] font-mono text-muted-foreground">
                    Click or drag pixels to paint with selected palette color
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="font-bold">Palette Swatches:</div>
                  <div className="flex flex-wrap gap-2 max-w-[200px]">
                    {DEFAULT_RETRO_PALETTE.map((color) => (
                      <button
                        key={color}
                        type="button"
                        aria-label={`Select color ${color}`}
                        onClick={() => setCanvasActiveColor(color)}
                        style={{ backgroundColor: color }}
                        className={`w-6 h-6 bevel-raised active:bevel-pressed ${
                          canvasActiveColor === color ? "ring-2 ring-primary ring-offset-1" : ""
                        }`}
                      />
                    ))}
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        setCanvasMatrix(
                          Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => "#000000"))
                        )
                      }
                    >
                      Clear Canvas
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() =>
                        setCanvasMatrix([
                          ["#000000", "#000000", "#008080", "#008080", "#008080", "#008080", "#000000", "#000000"],
                          ["#000000", "#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080", "#000000"],
                          ["#008080", "#ffffff", "#000000", "#ffffff", "#ffffff", "#000000", "#ffffff", "#008080"],
                          ["#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080"],
                          ["#008080", "#ffffff", "#008080", "#008080", "#008080", "#008080", "#ffffff", "#008080"],
                          ["#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080"],
                          ["#000000", "#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080", "#000000"],
                          ["#000000", "#000000", "#008080", "#008080", "#008080", "#008080", "#000000", "#000000"],
                        ])
                      }
                    >
                      Reset Floppy Disk Icon
                    </Button>
                  </div>
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-bitmap-canvas" />
            </section>
          </>
        )}

        {/* ==================================================================== */}
        {/* PHASE 6: ADVANCED EFFECTS & POLISH (10)                              */}
        {/* ==================================================================== */}
        {(category === "all" || category === "effects") && (
          <>
            {/* SECTION 1: DITHER */}
            <section id="dither" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    01
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Dither
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-dither" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Visual wrapper primitive applying procedural Bayer 4x4 matrix, checker, fine, dense, or noise dither patterns over arbitrary elements or backdrops without runtime image processing.
              </p>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="text-xs font-bold font-mono">Pattern:</span>
                {(["bayer", "checker", "fine", "dense", "noise"] as DitherPattern[]).map((pat) => (
                  <Button
                    key={pat}
                    size="sm"
                    variant={ditherPattern === pat ? "primary" : "outline"}
                    onClick={() => setDitherPattern(pat)}
                  >
                    {pat.toUpperCase()}
                  </Button>
                ))}
                <span className="text-xs font-bold font-mono ml-3">Intensity:</span>
                {(["subtle", "medium", "strong"] as const).map((intensity) => (
                  <Button
                    key={intensity}
                    size="sm"
                    variant={ditherIntensity === intensity ? "primary" : "outline"}
                    onClick={() => setDitherIntensity(intensity)}
                  >
                    {intensity.toUpperCase()}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                  <div className="w-full text-xs font-mono font-bold mb-2">Overlay Mode:</div>
                  <Dither
                    pattern={ditherPattern}
                    intensity={ditherIntensity}
                    className="w-full h-36 bevel-raised p-4 bg-gradient-to-br from-primary/30 to-surface flex flex-col justify-between"
                  >
                    <div className="font-mono text-xs font-bold uppercase">
                      ACTIVE DITHER: {ditherPattern.toUpperCase()} ({ditherIntensity})
                    </div>
                    <div className="font-mono text-[11px] text-muted-foreground">
                      Procedural SVG pattern tile overlay with pointer-events-none layer
                    </div>
                  </Dither>
                </div>

                <div className="p-4 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                  <div className="w-full text-xs font-mono font-bold mb-2">Backdrop Mode:</div>
                  <Dither
                    pattern={ditherPattern}
                    mode="backdrop"
                    className="w-full h-36 bevel-inset p-4 bg-surface flex flex-col justify-between"
                  >
                    <div className="font-mono text-xs font-bold uppercase">
                      BACKDROP PATTERN
                    </div>
                    <div className="font-mono text-[11px] text-muted-foreground">
                      Applied directly to container background behind foreground elements
                    </div>
                  </Dither>
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-dither" />
            </section>

            {/* SECTION 2: HALFTONE */}
            <section id="halftone" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    02
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Halftone
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-halftone" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Dot-matrix halftone screen effect overlay or background texture inspired by vintage offset print, CRT shadow masks, and arcade monitors.
              </p>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="text-xs font-bold font-mono">Density:</span>
                {(["sparse", "medium", "dense"] as HalftoneDensity[]).map((d) => (
                  <Button
                    key={d}
                    size="sm"
                    variant={halftoneDensity === d ? "primary" : "outline"}
                    onClick={() => setHalftoneDensity(d)}
                  >
                    {d.toUpperCase()}
                  </Button>
                ))}
                <span className="text-xs font-bold font-mono ml-3">Dot Size:</span>
                {(["sm", "md", "lg"] as const).map((s) => (
                  <Button
                    key={s}
                    size="sm"
                    variant={halftoneSize === s ? "primary" : "outline"}
                    onClick={() => setHalftoneSize(s)}
                  >
                    {s.toUpperCase()}
                  </Button>
                ))}
              </div>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                <Halftone
                  size={halftoneSize}
                  density={halftoneDensity}
                  opacity={0.4}
                  className="w-full max-w-xl p-6 bevel-raised bg-surface space-y-2"
                >
                  <div className="font-mono text-sm font-bold uppercase">
                    Halftone Dot Matrix Screen
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    Radial gradient micro-dots calibrated across light and dark mode surfaces. Perfect for print-look cards, headers, and hero accents.
                  </p>
                </Halftone>
              </div>

              <ComponentCodePanel sectionId="demo-halftone" />
            </section>

            {/* SECTION 3: PIXELATE */}
            <section id="pixelate" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    03
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Pixelate
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-pixelate" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Presentation wrapper applying CSS nearest-neighbor image rendering and un-smoothed crisp font rendering to child elements.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                <Pixelate rendering="pixelated" crispText scale={1} className="w-full max-w-md p-5 bevel-raised bg-surface space-y-3">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="font-mono text-xs font-bold uppercase">Pixelate Filter Active</span>
                    <Badge variant="success">NEAREST-NEIGHBOR</Badge>
                  </div>
                  <div className="font-mono text-sm font-bold tracking-tight">
                    CRISP HARDWARE FONT SMOOTHING: OFF
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    Ensures sharp, pixel-perfect bitmap rendering without blurry browser anti-aliasing interpolation.
                  </p>
                </Pixelate>
              </div>

              <ComponentCodePanel sectionId="demo-pixelate" />
            </section>

            {/* SECTION 4: NOISE */}
            <section id="noise" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    04
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Noise
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-noise" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Procedural film grain texture overlay using lightweight inline SVG feTurbulence fractals with optional micro-jitter animation (disabled automatically on reduced-motion).
              </p>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="text-xs font-bold font-mono">Intensity:</span>
                {(["subtle", "medium", "strong"] as const).map((intensity) => (
                  <Button
                    key={intensity}
                    size="sm"
                    variant={noiseIntensity === intensity ? "primary" : "outline"}
                    onClick={() => setNoiseIntensity(intensity)}
                  >
                    {intensity.toUpperCase()}
                  </Button>
                ))}
                <span className="text-xs font-bold font-mono ml-3">Jitter Animation:</span>
                <Button
                  size="sm"
                  variant={noiseAnimated ? "primary" : "outline"}
                  onClick={() => setNoiseAnimated(!noiseAnimated)}
                >
                  {noiseAnimated ? "ANIMATED (ON)" : "STATIC (OFF)"}
                </Button>
              </div>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                <Noise
                  intensity={noiseIntensity}
                  animated={noiseAnimated}
                  className="w-full max-w-lg p-6 bevel-raised bg-surface space-y-2"
                >
                  <div className="font-mono text-xs font-bold uppercase">
                    Analog Film Grain Specimen ({noiseIntensity})
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    Procedural noise texture overlay with zero image downloads, calibrated for retro tactile surfaces.
                  </p>
                </Noise>
              </div>

              <ComponentCodePanel sectionId="demo-noise" />
            </section>

            {/* SECTION 5: IMAGE FRAME */}
            <section id="image-frame" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    05
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    ImageFrame
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-image-frame" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Semantic &lt;figure&gt; container for images, bitmaps, or media assets featuring retro bevels, nearest-neighbor pixel rendering, optional dither overlays, and &lt;figcaption&gt; labels.
              </p>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="text-xs font-bold font-mono">Frame Variant:</span>
                {(["plain", "pixel", "inset", "raised", "dither", "bitmap"] as ImageFrameVariant[]).map((v) => (
                  <Button
                    key={v}
                    size="sm"
                    variant={imageFrameVariant === v ? "primary" : "outline"}
                    onClick={() => setImageFrameVariant(v)}
                  >
                    {v.toUpperCase()}
                  </Button>
                ))}
              </div>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                <ImageFrame
                  variant={imageFrameVariant}
                  pixelated
                  ditherOverlay={imageFrameVariant === "dither" ? "bayer" : false}
                  caption="FIG 6.1 — High-contrast 1-bit monochrome scanned artifact specimen"
                  className="max-w-sm"
                >
                  <div className="w-64 h-36 bg-gradient-to-tr from-primary to-surface-sunken flex items-center justify-center font-mono text-xs font-bold p-4 text-center">
                    BIT_DEPTH: 1-BIT [2-COLOR MONOCHROME]
                  </div>
                </ImageFrame>
              </div>

              <ComponentCodePanel sectionId="demo-image-frame" />
            </section>

            {/* SECTION 6: SCANLINE */}
            <section id="scanline" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    06
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Scanline
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-scanline" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Phosphor scanline stripe overlay for CRT displays, viewports, and retro monitors, supporting fine, medium, or coarse densities, horizontal/vertical orientations, and rolling animation.
              </p>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="text-xs font-bold font-mono">Density:</span>
                {(["fine", "medium", "coarse"] as ScanlineDensity[]).map((d) => (
                  <Button
                    key={d}
                    size="sm"
                    variant={scanlineDensity === d ? "primary" : "outline"}
                    onClick={() => setScanlineDensity(d)}
                  >
                    {d.toUpperCase()}
                  </Button>
                ))}
                <span className="text-xs font-bold font-mono ml-3">Orientation:</span>
                {(["horizontal", "vertical"] as const).map((o) => (
                  <Button
                    key={o}
                    size="sm"
                    variant={scanlineOrientation === o ? "primary" : "outline"}
                    onClick={() => setScanlineOrientation(o)}
                  >
                    {o.toUpperCase()}
                  </Button>
                ))}
                <span className="text-xs font-bold font-mono ml-3">Roll Animation:</span>
                <Button
                  size="sm"
                  variant={scanlineAnimated ? "primary" : "outline"}
                  onClick={() => setScanlineAnimated(!scanlineAnimated)}
                >
                  {scanlineAnimated ? "ROLLING (ON)" : "STATIC (OFF)"}
                </Button>
              </div>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                <Scanline
                  density={scanlineDensity}
                  orientation={scanlineOrientation}
                  animated={scanlineAnimated}
                  opacity={0.35}
                  className="w-full max-w-lg p-6 bg-black text-green-400 font-mono bevel-inset space-y-2"
                >
                  <div className="text-xs font-bold uppercase">&gt; RASTER BEAM OSCILLOSCOPE ACTIVE</div>
                  <div className="text-[11px] text-green-500">H-SYNC: 15.75 kHz | V-SYNC: 60.0 Hz | PHOSPHOR: P1 (GREEN)</div>
                  <div className="text-[11px] text-green-600">Scanline raster simulation using CSS repeating linear gradients</div>
                </Scanline>
              </div>

              <ComponentCodePanel sectionId="demo-scanline" />
            </section>

            {/* SECTION 7: CRT */}
            <section id="crt" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    07
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    CRT
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-crt" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Cathode Ray Tube display monitor enclosure combining scanlines, corner vignette shadow, curved screen bezel, and authentic monochrome phosphor tints.
              </p>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="text-xs font-bold font-mono">Phosphor:</span>
                {(["green", "amber", "mono", "none"] as CRTPhosphor[]).map((p) => (
                  <Button
                    key={p}
                    size="sm"
                    variant={crtPhosphor === p ? "primary" : "outline"}
                    onClick={() => setCrtPhosphor(p)}
                  >
                    {p.toUpperCase()}
                  </Button>
                ))}
                <span className="text-xs font-bold font-mono ml-3">Curvature:</span>
                {(["none", "subtle", "medium"] as const).map((c) => (
                  <Button
                    key={c}
                    size="sm"
                    variant={crtCurvature === c ? "primary" : "outline"}
                    onClick={() => setCrtCurvature(c)}
                  >
                    {c.toUpperCase()}
                  </Button>
                ))}
                <span className="text-xs font-bold font-mono ml-3">Flicker:</span>
                <Button
                  size="sm"
                  variant={crtFlicker ? "primary" : "outline"}
                  onClick={() => setCrtFlicker(!crtFlicker)}
                >
                  {crtFlicker ? "FLICKER (ON)" : "STEADY (OFF)"}
                </Button>
              </div>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                <CRT
                  phosphor={crtPhosphor}
                  curvature={crtCurvature}
                  flicker={crtFlicker}
                  vignette
                  scanlines="medium"
                  className="w-full max-w-lg min-h-[160px] p-6 space-y-2 border-4 border-neutral-800"
                >
                  <div className="text-xs font-bold uppercase">&gt; IBM 5151 MONOCHROME MONITOR</div>
                  <div className="text-xs">&gt; MEMORY CHECK: 640 KB OK</div>
                  <div className="text-xs">&gt; GRAPHICS ADAPTER: MDA / HERCULES COMPATIBLE</div>
                  <div className="text-xs">&gt; READY.</div>
                </CRT>
              </div>

              <ComponentCodePanel sectionId="demo-crt" />
            </section>

            {/* SECTION 8: PIXEL TEXT */}
            <section id="pixel-text" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    08
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    PixelText
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-pixel-text" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Typography component with pixel-crisp font smoothing, stepped retro drop shadows, and optional phosphor text-glow for titles and callouts.
              </p>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center space-y-4">
                <PixelText as="h2" size="2xl" shadow="stepped" crisp glow className="text-primary">
                  DITHERWEB v1.0
                </PixelText>
                <PixelText as="p" size="lg" shadow="pixel" crisp>
                  STEPPED 2-TONE DROP SHADOW TYPOGRAPHY
                </PixelText>
                <PixelText as="span" size="sm" crisp className="text-muted-foreground">
                  Crisp -webkit-font-smoothing: none rendering
                </PixelText>
              </div>

              <ComponentCodePanel sectionId="demo-pixel-text" />
            </section>

            {/* SECTION 9: TYPEWRITER */}
            <section id="typewriter" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    09
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    Typewriter
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-typewriter" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Accessible character-by-character typewriter reveal. Complete text is immediately available to screen readers via sr-only semantics, and prefers-reduced-motion bypasses delays instantly.
              </p>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="text-xs font-bold font-mono">Typing Speed:</span>
                {(["slow", "medium", "fast"] as const).map((spd) => (
                  <Button
                    key={spd}
                    size="sm"
                    variant={typewriterSpeed === spd ? "primary" : "outline"}
                    onClick={() => {
                      setTypewriterSpeed(spd);
                      setTypewriterReplayKey((k) => k + 1);
                    }}
                  >
                    {spd.toUpperCase()}
                  </Button>
                ))}
                <Button
                  size="sm"
                  variant="primary"
                  className="ml-3"
                  onClick={() => setTypewriterReplayKey((k) => k + 1)}
                >
                  Replay Typewriter ↺
                </Button>
              </div>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                <div className="w-full max-w-lg p-5 bevel-raised bg-surface font-mono text-xs">
                  <div className="text-muted-foreground mb-2 text-[10px]">LIVE REVEAL STREAM:</div>
                  <Typewriter
                    key={typewriterReplayKey}
                    text="Establishing connection to Ditherweb gateway... All 96 primitives verified and operational."
                    speed={typewriterSpeed}
                    cursor
                    className="text-foreground font-bold"
                  />
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-typewriter" />
            </section>

            {/* SECTION 10: BLINK CURSOR */}
            <section id="blink-cursor" className="space-y-4 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bevel-raised inline-flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    10
                  </span>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-foreground">
                    BlinkCursor
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" className="font-mono text-[10px]">
                    Phase 6 Primitive
                  </Badge>
                  <ComponentActions sectionId="demo-blink-cursor" />
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground max-w-3xl leading-relaxed">
                Classic terminal blinking cursor in block, line, or underline variants. Protected with aria-hidden=&quot;true&quot; so screen readers never announce cursor symbols, with steps(2, start) animation that pauses gracefully on reduced motion.
              </p>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="text-xs font-bold font-mono">Cursor Style:</span>
                {(["block", "line", "underline"] as const).map((v) => (
                  <Button
                    key={v}
                    size="sm"
                    variant={cursorVariant === v ? "primary" : "outline"}
                    onClick={() => setCursorVariant(v)}
                  >
                    {v.toUpperCase()}
                  </Button>
                ))}
                <span className="text-xs font-bold font-mono ml-3">Blink Animation:</span>
                <Button
                  size="sm"
                  variant={cursorBlink ? "primary" : "outline"}
                  onClick={() => setCursorBlink(!cursorBlink)}
                >
                  {cursorBlink ? "BLINKING (ON)" : "SOLID (OFF)"}
                </Button>
              </div>

              <div className="p-4 sm:p-6 bevel-inset bg-muted/20 flex flex-col items-center justify-center">
                <div className="w-full max-w-md p-4 bevel-inset bg-black text-green-400 font-mono text-xs flex items-center gap-2">
                  <span>C:\DITHERWEB&gt; RUN SYSCHECK.EXE</span>
                  <BlinkCursor variant={cursorVariant} blink={cursorBlink} />
                </div>
              </div>

              <ComponentCodePanel sectionId="demo-blink-cursor" />
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
    </CodeViewerContext.Provider>
  );
}
