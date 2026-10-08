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
  WindowControl,
  WindowIcon,
  WindowStatusBar,
  WindowStatusItem,
  Taskbar,
  TaskbarStart,
  TaskbarTasks,
  TaskbarTask,
  TaskbarStatus,
  TaskbarClock,
  Desktop,
  DesktopIconGrid,
  DesktopIcon,
  BitmapCanvas,
  DEFAULT_RETRO_PALETTE,
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
  Textarea,
  PasswordInput,
  SearchInput,
  NumberInput,
  Select,
  Combobox,
  type ComboboxOption,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
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
  type DrawerSide,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
  SheetClose,
  type SheetSide,
  Backdrop,
  type BackdropVariant,
  Overlay,
  Portal,
  type OverlaySide,
  type OverlayAlign,
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
  DataTable,
  type DataTableColumn,
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
  type DescriptionListLayout,
  Tree,
  type TreeNodeData,
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  type AvatarSize,
  type AvatarShape,
  type AvatarStatus,
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
} from "@ditherweb/ui";

export interface ComponentPreviewProps {
  slug: string;
}

interface GuestbookEntryItem {
  author: string;
  date: string;
  location: string;
  message: string;
  websiteUrl?: string;
  websiteName?: string;
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

  // Forms & Selection states
  textareaVal: string;
  setTextareaVal: (v: string) => void;
  textareaRows: number;
  setTextareaRows: (r: number) => void;
  textareaInvalid: boolean;
  setTextareaInvalid: (i: boolean) => void;
  textareaDisabled: boolean;
  setTextareaDisabled: (d: boolean) => void;
  pwdVal: string;
  setPwdVal: (v: string) => void;
  pwdInvalid: boolean;
  setPwdInvalid: (i: boolean) => void;
  pwdDisabled: boolean;
  setPwdDisabled: (d: boolean) => void;
  searchVal: string;
  setSearchVal: (v: string) => void;
  searchDisabled: boolean;
  setSearchDisabled: (d: boolean) => void;
  numberVal: number;
  setNumberVal: (v: number) => void;
  numberStep: number;
  setNumberStep: (s: number) => void;
  numberInvalid: boolean;
  setNumberInvalid: (i: boolean) => void;
  numberDisabled: boolean;
  setNumberDisabled: (d: boolean) => void;
  selectVal: string;
  setSelectVal: (v: string) => void;
  selectInvalid: boolean;
  setSelectInvalid: (i: boolean) => void;
  selectDisabled: boolean;
  setSelectDisabled: (d: boolean) => void;
  comboboxVal: string;
  setComboboxVal: (v: string) => void;
  comboboxInvalid: boolean;
  setComboboxInvalid: (i: boolean) => void;
  comboboxDisabled: boolean;
  setComboboxDisabled: (d: boolean) => void;
  togglePressed: boolean;
  setTogglePressed: (p: boolean) => void;
  toggleSize: "sm" | "md" | "lg";
  setToggleSize: (s: "sm" | "md" | "lg") => void;
  toggleDisabled: boolean;
  setToggleDisabled: (d: boolean) => void;
  toggleGroupSingleVal: string;
  setToggleGroupSingleVal: (v: string) => void;
  toggleGroupMultiVal: string[];
  setToggleGroupMultiVal: (v: string[]) => void;
  toggleGroupMode: "single" | "multiple";
  setToggleGroupMode: (m: "single" | "multiple") => void;
  fieldRequired: boolean;
  setFieldRequired: (r: boolean) => void;
  fieldHasError: boolean;
  setFieldHasError: (e: boolean) => void;
  fieldVal: string;
  setFieldVal: (v: string) => void;
  fieldDisabled: boolean;
  setFieldDisabled: (d: boolean) => void;

  // Overlays & Layers states
  dialogOpen: boolean;
  setDialogOpen: (o: boolean) => void;
  dialogBackdrop: BackdropVariant;
  setDialogBackdrop: (b: BackdropVariant) => void;
  alertDialogOpen: boolean;
  setAlertDialogOpen: (o: boolean) => void;
  alertDialogStatus: string;
  setAlertDialogStatus: (s: string) => void;
  alertDialogBackdrop: BackdropVariant;
  setAlertDialogBackdrop: (b: BackdropVariant) => void;
  popoverOpen: boolean;
  setPopoverOpen: (o: boolean) => void;
  popoverSide: OverlaySide;
  setPopoverSide: (s: OverlaySide) => void;
  popoverAlign: OverlayAlign;
  setPopoverAlign: (a: OverlayAlign) => void;
  popoverVolume: number;
  setPopoverVolume: (v: number) => void;
  popoverMidi: boolean;
  setPopoverMidi: (m: boolean) => void;
  tooltipSide: OverlaySide;
  setTooltipSide: (s: OverlaySide) => void;
  hoverCardSide: OverlaySide;
  setHoverCardSide: (s: OverlaySide) => void;
  drawerOpen: boolean;
  setDrawerOpen: (o: boolean) => void;
  drawerSide: DrawerSide;
  setDrawerSide: (s: DrawerSide) => void;
  drawerBackdrop: BackdropVariant;
  setDrawerBackdrop: (b: BackdropVariant) => void;
  sheetOpen: boolean;
  setSheetOpen: (o: boolean) => void;
  sheetSide: SheetSide;
  setSheetSide: (s: SheetSide) => void;
  sheetBackdrop: BackdropVariant;
  setSheetBackdrop: (b: BackdropVariant) => void;
  backdropVariant: BackdropVariant;
  setBackdropVariant: (b: BackdropVariant) => void;
  backdropInvisible: boolean;
  setBackdropInvisible: (i: boolean) => void;
  backdropFullscreenOpen: boolean;
  setBackdropFullscreenOpen: (o: boolean) => void;
  overlayOpen: boolean;
  setOverlayOpen: (o: boolean) => void;
  overlayBackdrop: BackdropVariant;
  setOverlayBackdrop: (b: BackdropVariant) => void;
  overlayCloseOnEscape: boolean;
  setOverlayCloseOnEscape: (c: boolean) => void;
  overlayCloseOnOutside: boolean;
  setOverlayCloseOnOutside: (c: boolean) => void;
  portalDisabled: boolean;
  setPortalDisabled: (d: boolean) => void;
  portalPanelOpen: boolean;
  setPortalPanelOpen: (o: boolean) => void;

  // Navigation & Data states
  breadcrumbSeparator: string;
  setBreadcrumbSeparator: (s: string) => void;
  breadcrumbDepth: number;
  setBreadcrumbDepth: (d: number) => void;
  breadcrumbClicked: string;
  setBreadcrumbClicked: (c: string) => void;
  paginationPage: number;
  setPaginationPage: (p: number) => void;
  menubarLastAction: string;
  setMenubarLastAction: (a: string) => void;
  menubarScanlines: boolean;
  setMenubarScanlines: (s: boolean) => void;
  menubarSpeaker: boolean;
  setMenubarSpeaker: (s: boolean) => void;
  dataTableLoading: boolean;
  setDataTableLoading: (l: boolean) => void;
  dataTableEmpty: boolean;
  setDataTableEmpty: (e: boolean) => void;
  dataTableSelectedCount: number;
  setDataTableSelectedCount: (c: number) => void;
  descListLayout: DescriptionListLayout;
  setDescListLayout: (l: DescriptionListLayout) => void;
  descListDense: boolean;
  setDescListDense: (d: boolean) => void;
  descListDivided: boolean;
  setDescListDivided: (d: boolean) => void;
  treeSelected: string;
  setTreeSelected: (s: string) => void;
  treeGuides: boolean;
  setTreeGuides: (g: boolean) => void;
  avatarSize: AvatarSize;
  setAvatarSize: (s: AvatarSize) => void;
  avatarShape: AvatarShape;
  setAvatarShape: (s: AvatarShape) => void;
  avatarStatus: AvatarStatus;
  setAvatarStatus: (s: AvatarStatus) => void;
  avatarShowFallback: boolean;
  setAvatarShowFallback: (f: boolean) => void;

  // Classic Web states
  guestbookEmpty: boolean;
  setGuestbookEmpty: (e: boolean) => void;
  guestbookEntries: GuestbookEntryItem[];
  setGuestbookEntries: React.Dispatch<React.SetStateAction<GuestbookEntryItem[]>>;
  visitorCounterVal: number;
  setVisitorCounterVal: React.Dispatch<React.SetStateAction<number>>;
  visitorCounterVariant: "odometer" | "led" | "lcd" | "classic";
  setVisitorCounterVariant: (v: "odometer" | "led" | "lcd" | "classic") => void;
  visitorCounterSize: "sm" | "md" | "lg";
  setVisitorCounterSize: (s: "sm" | "md" | "lg") => void;
  underConstVariant: "stripes" | "bevel" | "simple" | "compact";
  setUnderConstVariant: (v: "stripes" | "bevel" | "simple" | "compact") => void;
  underConstPinged: boolean;
  setUnderConstPinged: (p: boolean) => void;
  marqueeDirection: "left" | "right";
  setMarqueeDirection: (d: "left" | "right") => void;
  marqueeSpeed: "slow" | "normal" | "fast";
  setMarqueeSpeed: (s: "slow" | "normal" | "fast") => void;
  marqueePause: boolean;
  setMarqueePause: (p: boolean) => void;
  blinkEnabled: boolean;
  setBlinkEnabled: (e: boolean) => void;
  blinkSpeed: "slow" | "normal" | "fast";
  setBlinkSpeed: (s: "slow" | "normal" | "fast") => void;
  button88x31Variant: "bevel" | "outline" | "flat";
  setButton88x31Variant: (v: "bevel" | "outline" | "flat") => void;
  button88x31Clicked: string;
  setButton88x31Clicked: (c: string) => void;
  retroBannerFormat: "standard" | "compact" | "full";
  setRetroBannerFormat: (f: "standard" | "compact" | "full") => void;
  retroBannerVariant: "dither" | "bevel" | "outline" | "solid";
  setRetroBannerVariant: (v: "dither" | "bevel" | "outline" | "solid") => void;
  retroBannerClicks: number;
  setRetroBannerClicks: React.Dispatch<React.SetStateAction<number>>;
  pixelImageFrame: "none" | "bevel" | "inset" | "dither" | "groove" | "simple";
  setPixelImageFrame: (f: "none" | "bevel" | "inset" | "dither" | "groove" | "simple") => void;
  pixelImageRatio: 1 | 2 | 3 | 4;
  setPixelImageRatio: (r: 1 | 2 | 3 | 4) => void;
  webDirectoryCols: 1 | 2 | 3;
  setWebDirectoryCols: (c: 1 | 2 | 3) => void;
  webDirectoryLastClicked: string;
  setWebDirectoryLastClicked: (l: string) => void;

  // Desktop & Pixel states
  windowActive: boolean;
  setWindowActive: (a: boolean) => void;
  windowControlsMaximized: boolean;
  setWindowControlsMaximized: (m: boolean) => void;
  windowControlsDisabled: boolean;
  setWindowControlsDisabled: (d: boolean) => void;
  windowControlsLastClicked: string;
  setWindowControlsLastClicked: (c: string) => void;
  taskbarStartActive: boolean;
  setTaskbarStartActive: (a: boolean) => void;
  taskbarActiveTask: string;
  setTaskbarActiveTask: (t: string) => void;
  desktopWallpaper: "dither" | "teal" | "solid" | "grid";
  setDesktopWallpaper: (w: "dither" | "teal" | "solid" | "grid") => void;
  desktopSelectedIcon: string;
  setDesktopSelectedIcon: (i: string) => void;
  desktopLaunchedApp: string;
  setDesktopLaunchedApp: (a: string) => void;
  bitmapCanvasColor: string;
  setBitmapCanvasColor: (c: string) => void;
  bitmapCanvasGrid: boolean;
  setBitmapCanvasGrid: (g: boolean) => void;
  bitmapCanvasKey: number;
  setBitmapCanvasKey: React.Dispatch<React.SetStateAction<number>>;
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

  // Forms & Selection interactive state
  const [textareaVal, setTextareaVal] = useState("CONFIG.SYS buffer loaded successfully.\nFILES=40\nBUFFERS=30");
  const [textareaRows, setTextareaRows] = useState(4);
  const [textareaInvalid, setTextareaInvalid] = useState(false);
  const [textareaDisabled, setTextareaDisabled] = useState(false);
  const [pwdVal, setPwdVal] = useState("RetroKernel_1995");
  const [pwdInvalid, setPwdInvalid] = useState(false);
  const [pwdDisabled, setPwdDisabled] = useState(false);
  const [searchVal, setSearchVal] = useState("CONFIG");
  const [searchDisabled, setSearchDisabled] = useState(false);
  const [numberVal, setNumberVal] = useState(2400);
  const [numberStep, setNumberStep] = useState(300);
  const [numberInvalid, setNumberInvalid] = useState(false);
  const [numberDisabled, setNumberDisabled] = useState(false);
  const [selectVal, setSelectVal] = useState("vga");
  const [selectInvalid, setSelectInvalid] = useState(false);
  const [selectDisabled, setSelectDisabled] = useState(false);
  const [comboboxVal, setComboboxVal] = useState("vga");
  const [comboboxInvalid, setComboboxInvalid] = useState(false);
  const [comboboxDisabled, setComboboxDisabled] = useState(false);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleSize, setToggleSize] = useState<"sm" | "md" | "lg">("md");
  const [toggleDisabled, setToggleDisabled] = useState(false);
  const [toggleGroupSingleVal, setToggleGroupSingleVal] = useState("center");
  const [toggleGroupMultiVal, setToggleGroupMultiVal] = useState<string[]>(["bold"]);
  const [toggleGroupMode, setToggleGroupMode] = useState<"single" | "multiple">("single");
  const [fieldRequired, setFieldRequired] = useState(true);
  const [fieldHasError, setFieldHasError] = useState(false);
  const [fieldVal, setFieldVal] = useState("N0CALL/GATEWAY-1");
  const [fieldDisabled, setFieldDisabled] = useState(false);

  // Overlays & Layers interactive state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogBackdrop, setDialogBackdrop] = useState<BackdropVariant>("dimmed");
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [alertDialogStatus, setAlertDialogStatus] = useState("READY // MOUNTED ON VOLUME C:");
  const [alertDialogBackdrop, setAlertDialogBackdrop] = useState<BackdropVariant>("dither");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverSide, setPopoverSide] = useState<OverlaySide>("bottom");
  const [popoverAlign, setPopoverAlign] = useState<OverlayAlign>("center");
  const [popoverVolume, setPopoverVolume] = useState(75);
  const [popoverMidi, setPopoverMidi] = useState(true);
  const [tooltipSide, setTooltipSide] = useState<OverlaySide>("top");
  const [hoverCardSide, setHoverCardSide] = useState<OverlaySide>("right");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<DrawerSide>("bottom");
  const [drawerBackdrop, setDrawerBackdrop] = useState<BackdropVariant>("dimmed");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetSide, setSheetSide] = useState<SheetSide>("right");
  const [sheetBackdrop, setSheetBackdrop] = useState<BackdropVariant>("dither");
  const [backdropVariant, setBackdropVariant] = useState<BackdropVariant>("dither");
  const [backdropInvisible, setBackdropInvisible] = useState(false);
  const [backdropFullscreenOpen, setBackdropFullscreenOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayBackdrop, setOverlayBackdrop] = useState<BackdropVariant>("dimmed");
  const [overlayCloseOnEscape, setOverlayCloseOnEscape] = useState(true);
  const [overlayCloseOnOutside, setOverlayCloseOnOutside] = useState(true);
  const [portalDisabled, setPortalDisabled] = useState(false);
  const [portalPanelOpen, setPortalPanelOpen] = useState(true);

  // Navigation & Data interactive state
  const [breadcrumbSeparator, setBreadcrumbSeparator] = useState("\\");
  const [breadcrumbDepth, setBreadcrumbDepth] = useState(4);
  const [breadcrumbClicked, setBreadcrumbClicked] = useState("SOUND.SYS");
  const [paginationPage, setPaginationPage] = useState(2);
  const [menubarLastAction, setMenubarLastAction] = useState("NONE");
  const [menubarScanlines, setMenubarScanlines] = useState(true);
  const [menubarSpeaker, setMenubarSpeaker] = useState(true);
  const [dataTableLoading, setDataTableLoading] = useState(false);
  const [dataTableEmpty, setDataTableEmpty] = useState(false);
  const [dataTableSelectedCount, setDataTableSelectedCount] = useState(0);
  const [descListLayout, setDescListLayout] = useState<DescriptionListLayout>("horizontal");
  const [descListDense, setDescListDense] = useState(false);
  const [descListDivided, setDescListDivided] = useState(true);
  const [treeSelected, setTreeSelected] = useState("doom-exe");
  const [treeGuides, setTreeGuides] = useState(true);
  const [avatarSize, setAvatarSize] = useState<AvatarSize>("lg");
  const [avatarShape, setAvatarShape] = useState<AvatarShape>("square");
  const [avatarStatus, setAvatarStatus] = useState<AvatarStatus>("online");
  const [avatarShowFallback, setAvatarShowFallback] = useState(true);

  // Classic Web states
  const [guestbookEmpty, setGuestbookEmpty] = useState(false);
  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntryItem[]>([
    {
      author: "NeoSysOp_96",
      date: "OCT 08, 1996 14:22 GMT",
      location: "San Jose, CA [NODE 01]",
      message: "Radical homepage! The dithered backgrounds and bevels look killer on my 17\" Sony Trinitron CRT. Added your site to my Netscape bookmarks!",
      websiteUrl: "https://ditherweb.mrinshad.site",
      websiteName: "SysOp HQ",
    },
    {
      author: "PixelWanderer",
      date: "OCT 07, 1996 23:48 GMT",
      location: "Tokyo, JP",
      message: "Surfing the World Wide Web from a 28.8k dialup modem in Akihabara. Keep the retro spirit alive!",
      websiteUrl: "https://ditherweb.mrinshad.site",
      websiteName: "CyberDen",
    },
  ]);
  const [visitorCounterVal, setVisitorCounterVal] = useState(13370);
  const [visitorCounterVariant, setVisitorCounterVariant] = useState<"odometer" | "led" | "lcd" | "classic">("odometer");
  const [visitorCounterSize, setVisitorCounterSize] = useState<"sm" | "md" | "lg">("md");
  const [underConstVariant, setUnderConstVariant] = useState<"stripes" | "bevel" | "simple" | "compact">("stripes");
  const [underConstPinged, setUnderConstPinged] = useState(false);
  const [marqueeDirection, setMarqueeDirection] = useState<"left" | "right">("left");
  const [marqueeSpeed, setMarqueeSpeed] = useState<"slow" | "normal" | "fast">("normal");
  const [marqueePause, setMarqueePause] = useState(true);
  const [blinkEnabled, setBlinkEnabled] = useState(true);
  const [blinkSpeed, setBlinkSpeed] = useState<"slow" | "normal" | "fast">("normal");
  const [button88x31Variant, setButton88x31Variant] = useState<"bevel" | "outline" | "flat">("bevel");
  const [button88x31Clicked, setButton88x31Clicked] = useState("Netscape Now 4.0");
  const [retroBannerFormat, setRetroBannerFormat] = useState<"standard" | "compact" | "full">("standard");
  const [retroBannerVariant, setRetroBannerVariant] = useState<"dither" | "bevel" | "outline" | "solid">("dither");
  const [retroBannerClicks, setRetroBannerClicks] = useState(42);
  const [pixelImageFrame, setPixelImageFrame] = useState<"none" | "bevel" | "inset" | "dither" | "groove" | "simple">("bevel");
  const [pixelImageRatio, setPixelImageRatio] = useState<1 | 2 | 3 | 4>(1);
  const [webDirectoryCols, setWebDirectoryCols] = useState<1 | 2 | 3>(3);
  const [webDirectoryLastClicked, setWebDirectoryLastClicked] = useState("Sound Blaster 16 DSP");

  // Desktop & Pixel states
  const [windowActive, setWindowActive] = useState(true);
  const [windowControlsMaximized, setWindowControlsMaximized] = useState(false);
  const [windowControlsDisabled, setWindowControlsDisabled] = useState(false);
  const [windowControlsLastClicked, setWindowControlsLastClicked] = useState("None");
  const [taskbarStartActive, setTaskbarStartActive] = useState(false);
  const [taskbarActiveTask, setTaskbarActiveTask] = useState("Notepad");
  const [desktopWallpaper, setDesktopWallpaper] = useState<"dither" | "teal" | "solid" | "grid">("dither");
  const [desktopSelectedIcon, setDesktopSelectedIcon] = useState("computer");
  const [desktopLaunchedApp, setDesktopLaunchedApp] = useState("My Computer");
  const [bitmapCanvasColor, setBitmapCanvasColor] = useState(DEFAULT_RETRO_PALETTE[1] || "#ffffff");
  const [bitmapCanvasGrid, setBitmapCanvasGrid] = useState(true);
  const [bitmapCanvasKey, setBitmapCanvasKey] = useState(0);

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
          textareaVal,
          setTextareaVal,
          textareaRows,
          setTextareaRows,
          textareaInvalid,
          setTextareaInvalid,
          textareaDisabled,
          setTextareaDisabled,
          pwdVal,
          setPwdVal,
          pwdInvalid,
          setPwdInvalid,
          pwdDisabled,
          setPwdDisabled,
          searchVal,
          setSearchVal,
          searchDisabled,
          setSearchDisabled,
          numberVal,
          setNumberVal,
          numberStep,
          setNumberStep,
          numberInvalid,
          setNumberInvalid,
          numberDisabled,
          setNumberDisabled,
          selectVal,
          setSelectVal,
          selectInvalid,
          setSelectInvalid,
          selectDisabled,
          setSelectDisabled,
          comboboxVal,
          setComboboxVal,
          comboboxInvalid,
          setComboboxInvalid,
          comboboxDisabled,
          setComboboxDisabled,
          togglePressed,
          setTogglePressed,
          toggleSize,
          setToggleSize,
          toggleDisabled,
          setToggleDisabled,
          toggleGroupSingleVal,
          setToggleGroupSingleVal,
          toggleGroupMultiVal,
          setToggleGroupMultiVal,
          toggleGroupMode,
          setToggleGroupMode,
          fieldRequired,
          setFieldRequired,
          fieldHasError,
          setFieldHasError,
          fieldVal,
          setFieldVal,
          fieldDisabled,
          setFieldDisabled,
          dialogOpen,
          setDialogOpen,
          dialogBackdrop,
          setDialogBackdrop,
          alertDialogOpen,
          setAlertDialogOpen,
          alertDialogStatus,
          setAlertDialogStatus,
          alertDialogBackdrop,
          setAlertDialogBackdrop,
          popoverOpen,
          setPopoverOpen,
          popoverSide,
          setPopoverSide,
          popoverAlign,
          setPopoverAlign,
          popoverVolume,
          setPopoverVolume,
          popoverMidi,
          setPopoverMidi,
          tooltipSide,
          setTooltipSide,
          hoverCardSide,
          setHoverCardSide,
          drawerOpen,
          setDrawerOpen,
          drawerSide,
          setDrawerSide,
          drawerBackdrop,
          setDrawerBackdrop,
          sheetOpen,
          setSheetOpen,
          sheetSide,
          setSheetSide,
          sheetBackdrop,
          setSheetBackdrop,
          backdropVariant,
          setBackdropVariant,
          backdropInvisible,
          setBackdropInvisible,
          backdropFullscreenOpen,
          setBackdropFullscreenOpen,
          overlayOpen,
          setOverlayOpen,
          overlayBackdrop,
          setOverlayBackdrop,
          overlayCloseOnEscape,
          setOverlayCloseOnEscape,
          overlayCloseOnOutside,
          setOverlayCloseOnOutside,
          portalDisabled,
          setPortalDisabled,
          portalPanelOpen,
          setPortalPanelOpen,
          breadcrumbSeparator,
          setBreadcrumbSeparator,
          breadcrumbDepth,
          setBreadcrumbDepth,
          breadcrumbClicked,
          setBreadcrumbClicked,
          paginationPage,
          setPaginationPage,
          menubarLastAction,
          setMenubarLastAction,
          menubarScanlines,
          setMenubarScanlines,
          menubarSpeaker,
          setMenubarSpeaker,
          dataTableLoading,
          setDataTableLoading,
          dataTableEmpty,
          setDataTableEmpty,
          dataTableSelectedCount,
          setDataTableSelectedCount,
          descListLayout,
          setDescListLayout,
          descListDense,
          setDescListDense,
          descListDivided,
          setDescListDivided,
          treeSelected,
          setTreeSelected,
          treeGuides,
          setTreeGuides,
          avatarSize,
          setAvatarSize,
          avatarShape,
          setAvatarShape,
          avatarStatus,
          setAvatarStatus,
          avatarShowFallback,
          setAvatarShowFallback,
          guestbookEmpty,
          setGuestbookEmpty,
          guestbookEntries,
          setGuestbookEntries,
          visitorCounterVal,
          setVisitorCounterVal,
          visitorCounterVariant,
          setVisitorCounterVariant,
          visitorCounterSize,
          setVisitorCounterSize,
          underConstVariant,
          setUnderConstVariant,
          underConstPinged,
          setUnderConstPinged,
          marqueeDirection,
          setMarqueeDirection,
          marqueeSpeed,
          setMarqueeSpeed,
          marqueePause,
          setMarqueePause,
          blinkEnabled,
          setBlinkEnabled,
          blinkSpeed,
          setBlinkSpeed,
          button88x31Variant,
          setButton88x31Variant,
          button88x31Clicked,
          setButton88x31Clicked,
          retroBannerFormat,
          setRetroBannerFormat,
          retroBannerVariant,
          setRetroBannerVariant,
          retroBannerClicks,
          setRetroBannerClicks,
          pixelImageFrame,
          setPixelImageFrame,
          pixelImageRatio,
          setPixelImageRatio,
          webDirectoryCols,
          setWebDirectoryCols,
          webDirectoryLastClicked,
          setWebDirectoryLastClicked,
          windowActive,
          setWindowActive,
          windowControlsMaximized,
          setWindowControlsMaximized,
          windowControlsDisabled,
          setWindowControlsDisabled,
          windowControlsLastClicked,
          setWindowControlsLastClicked,
          taskbarStartActive,
          setTaskbarStartActive,
          taskbarActiveTask,
          setTaskbarActiveTask,
          desktopWallpaper,
          setDesktopWallpaper,
          desktopSelectedIcon,
          setDesktopSelectedIcon,
          desktopLaunchedApp,
          setDesktopLaunchedApp,
          bitmapCanvasColor,
          setBitmapCanvasColor,
          bitmapCanvasGrid,
          setBitmapCanvasGrid,
          bitmapCanvasKey,
          setBitmapCanvasKey,
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
        <div className="flex flex-col items-center gap-5 w-full max-w-sm">
          <div className="w-full bevel-raised bg-surface p-6 space-y-3">
            <div className="flex justify-between text-xs">
              <Label htmlFor="demo-slider">DSP Master Output Level:</Label>
              <span className="font-bold text-primary">{state.sliderVal}%</span>
            </div>
            <Slider
              id="demo-slider"
              min={0}
              max={100}
              value={state.sliderVal}
              onChange={(e) => state.setSliderVal(Number(e.target.value))}
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
              <span>0% (Mute)</span>
              <span>50% (Line Level)</span>
              <span>100% (Overdrive)</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "Mute", val: 0 },
              { label: "50%", val: 50 },
              { label: "75%", val: 75 },
              { label: "Max", val: 100 },
            ].map((p) => (
              <Button
                key={p.label}
                size="sm"
                variant={state.sliderVal === p.val ? "primary" : "outline"}
                onClick={() => state.setSliderVal(p.val)}
              >
                {p.label}
              </Button>
            ))}
          </div>
        </div>
      );

    case "window":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <Window active={state.windowActive} className="w-full">
            <WindowTitleBar active={state.windowActive}>
              <WindowIcon icon={<span>💻</span>} />
              <WindowTitle>SYSTEM_PROPERTIES.EXE</WindowTitle>
              <WindowControls
                isMaximized={state.windowControlsMaximized}
                onMinimize={() => state.setWindowControlsLastClicked("Minimize")}
                onMaximize={() => {
                  state.setWindowControlsMaximized(!state.windowControlsMaximized);
                  state.setWindowControlsLastClicked(state.windowControlsMaximized ? "Restore" : "Maximize");
                }}
                onClose={() => state.setWindowControlsLastClicked("Close")}
              />
            </WindowTitleBar>
            <WindowContent className="p-4 space-y-3 font-mono text-xs">
              <div className="font-bold text-foreground">Intel 80486DX2 @ 66MHz</div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Conventional Memory: 640 KB Base + 15,360 KB Extended. Math Coprocessor: Integrated.
              </p>
              <div className="bevel-inset bg-surface p-2 text-[10px] space-y-1">
                <div>BUS: VESA Local Bus (VLB) 32-bit</div>
                <div>GRAPHICS: S3 Trio64V+ 2MB VRAM</div>
              </div>
            </WindowContent>
            <WindowStatusBar>
              <WindowStatusItem>READY</WindowStatusItem>
              <WindowStatusItem>640K BASE</WindowStatusItem>
              <WindowStatusItem className="ml-auto">LPT1: ON</WindowStatusItem>
            </WindowStatusBar>
          </Window>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.windowActive ? "primary" : "outline"}
              onClick={() => state.setWindowActive(!state.windowActive)}
            >
              {state.windowActive ? "Window Focus: ACTIVE" : "Window Focus: INACTIVE"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                const next = !state.windowControlsMaximized;
                state.setWindowControlsMaximized(next);
                state.setWindowControlsLastClicked(next ? "Maximize" : "Restore");
              }}
            >
              {state.windowControlsMaximized ? "Restore" : "Maximize"}
            </Button>
          </div>

          <div className="text-[10px] font-mono text-muted-foreground text-center">
            LAST TITLEBAR ACTION: <span className="font-bold text-foreground">{state.windowControlsLastClicked}</span>
          </div>
        </div>
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

    // =========================================================================
    // FORMS & SELECTION PRIMITIVES
    // =========================================================================

    case "textarea":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-lg">
          <div className="w-full bevel-raised bg-surface p-6 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <Label htmlFor="demo-textarea">Configuration Buffer ({state.textareaRows} Rows)</Label>
              <span className="text-[11px] text-muted-foreground font-mono">
                {state.textareaVal.length} chars
              </span>
            </div>
            <Textarea
              id="demo-textarea"
              value={state.textareaVal}
              onChange={(e) => state.setTextareaVal(e.target.value)}
              rows={state.textareaRows}
              invalid={state.textareaInvalid}
              disabled={state.textareaDisabled}
              placeholder="Enter configuration script..."
            />
            <div className="flex items-center justify-between text-[10px] text-muted-foreground border-t border-border/50 pt-2 font-mono">
              <span>Sunken bevel: <code className="bg-surface-sunken px-1">bevel-inset</code></span>
              {state.textareaInvalid && (
                <span className="text-destructive font-bold uppercase">Invalid State</span>
              )}
              {state.textareaDisabled && (
                <span className="text-muted-foreground font-bold uppercase">Disabled State</span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Rows:</span>
              {([2, 4, 6] as const).map((r) => (
                <Button
                  key={r}
                  size="sm"
                  variant={state.textareaRows === r ? "primary" : "outline"}
                  onClick={() => state.setTextareaRows(r)}
                >
                  {r}
                </Button>
              ))}
            </div>
            <Button
              size="sm"
              variant={state.textareaInvalid ? "destructive" : "outline"}
              onClick={() => state.setTextareaInvalid(!state.textareaInvalid)}
            >
              {state.textareaInvalid ? "Invalid: ON" : "Invalid: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.textareaDisabled ? "primary" : "outline"}
              onClick={() => state.setTextareaDisabled(!state.textareaDisabled)}
            >
              {state.textareaDisabled ? "Disabled: ON" : "Disabled: OFF"}
            </Button>
          </div>
        </div>
      );

    case "password-input":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="w-full bevel-raised bg-surface p-6 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <Label htmlFor="demo-pwd">Terminal Passkey</Label>
              <span className="text-[10px] text-muted-foreground font-mono">
                Focus-Preserving Toggle
              </span>
            </div>
            <PasswordInput
              id="demo-pwd"
              value={state.pwdVal}
              onChange={(e) => state.setPwdVal(e.target.value)}
              invalid={state.pwdInvalid}
              disabled={state.pwdDisabled}
              placeholder="Enter passkey..."
            />
            <div className="flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/50 pt-2 font-mono">
              <span>Length: {state.pwdVal.length} chars</span>
              <span className={state.pwdVal.length >= 10 ? "text-primary font-bold" : "text-muted-foreground"}>
                Strength: {state.pwdVal.length >= 10 ? "SECURE" : state.pwdVal.length >= 6 ? "MEDIUM" : "WEAK"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              size="sm"
              variant={state.pwdInvalid ? "destructive" : "outline"}
              onClick={() => state.setPwdInvalid(!state.pwdInvalid)}
            >
              {state.pwdInvalid ? "Invalid: ON" : "Invalid: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.pwdDisabled ? "primary" : "outline"}
              onClick={() => state.setPwdDisabled(!state.pwdDisabled)}
            >
              {state.pwdDisabled ? "Disabled: ON" : "Disabled: OFF"}
            </Button>
          </div>
        </div>
      );

    case "search-input": {
      const files = [
        "CONFIG.SYS",
        "AUTOEXEC.BAT",
        "COMMAND.COM",
        "HIMEM.SYS",
        "EMM386.EXE",
        "MOUSE.COM",
        "MSCDEX.EXE",
      ];
      const matchedFiles = files.filter((f) =>
        f.toLowerCase().includes(state.searchVal.toLowerCase())
      );

      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="w-full bevel-raised bg-surface p-6 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="demo-search">Disk Catalog Index</Label>
              <SearchInput
                id="demo-search"
                value={state.searchVal}
                onChange={(e) => state.setSearchVal(e.target.value)}
                onClear={() => state.setSearchVal("")}
                disabled={state.searchDisabled}
                placeholder="Search system catalog..."
              />
            </div>

            <div className="bevel-inset bg-surface-sunken p-3 space-y-1 text-xs">
              <div className="text-[10px] text-muted-foreground uppercase font-bold border-b border-border/50 pb-1">
                Matching Files ({matchedFiles.length})
              </div>
              {matchedFiles.length === 0 ? (
                <div className="text-muted-foreground italic text-[11px] py-1">
                  No files matching &quot;{state.searchVal}&quot;
                </div>
              ) : (
                matchedFiles.map((file) => (
                  <div key={file} className="flex items-center justify-between text-foreground font-mono">
                    <span>{file}</span>
                    <span className="text-[10px] text-primary">DOS BIN</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              size="sm"
              variant={state.searchDisabled ? "primary" : "outline"}
              onClick={() => state.setSearchDisabled(!state.searchDisabled)}
            >
              {state.searchDisabled ? "Disabled: ON" : "Disabled: OFF"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => state.setSearchVal("")}
              disabled={!state.searchVal}
            >
              Clear Query
            </Button>
          </div>
        </div>
      );
    }

    case "number-input":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-sm">
          <div className="w-full bevel-raised bg-surface p-6 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <Label htmlFor="demo-num">Serial Baud Multiplier</Label>
              <span className="text-[10px] text-primary font-bold">
                Step: {state.numberStep}
              </span>
            </div>
            <NumberInput
              id="demo-num"
              value={state.numberVal}
              onChange={(e) => state.setNumberVal(Number(e.target.value))}
              step={state.numberStep}
              min={300}
              max={115200}
              invalid={state.numberInvalid}
              disabled={state.numberDisabled}
            />
            <div className="flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/50 pt-2 font-mono">
              <span>Effective Rate:</span>
              <span className="text-primary font-bold">{state.numberVal} bps</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Step:</span>
              {([300, 1200, 9600] as const).map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={state.numberStep === s ? "primary" : "outline"}
                  onClick={() => state.setNumberStep(s)}
                >
                  {s}
                </Button>
              ))}
            </div>
            <Button
              size="sm"
              variant={state.numberInvalid ? "destructive" : "outline"}
              onClick={() => state.setNumberInvalid(!state.numberInvalid)}
            >
              {state.numberInvalid ? "Invalid: ON" : "Invalid: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.numberDisabled ? "primary" : "outline"}
              onClick={() => state.setNumberDisabled(!state.numberDisabled)}
            >
              {state.numberDisabled ? "Disabled: ON" : "Disabled: OFF"}
            </Button>
          </div>
        </div>
      );

    case "select":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-sm">
          <div className="w-full bevel-raised bg-surface p-6 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <Label htmlFor="demo-select">Display Controller</Label>
              <span className="text-[10px] text-primary uppercase font-bold">
                Selected: {state.selectVal}
              </span>
            </div>
            <Select
              id="demo-select"
              value={state.selectVal}
              onChange={(e) => state.setSelectVal(e.target.value)}
              invalid={state.selectInvalid}
              disabled={state.selectDisabled}
            >
              <option value="cga">CGA 4-Color (320 × 200)</option>
              <option value="ega">EGA 16-Color (640 × 350)</option>
              <option value="vga">VGA 256-Color (640 × 480)</option>
              <option value="svga">Super VGA (800 × 600)</option>
              <option value="xga">Extended Graphics (1024 × 768)</option>
            </Select>
            <div className="text-[11px] text-muted-foreground border-t border-border/50 pt-2 font-mono">
              Hardware adapter standard: <span className="text-foreground uppercase font-bold">{state.selectVal}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              size="sm"
              variant={state.selectInvalid ? "destructive" : "outline"}
              onClick={() => state.setSelectInvalid(!state.selectInvalid)}
            >
              {state.selectInvalid ? "Invalid: ON" : "Invalid: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.selectDisabled ? "primary" : "outline"}
              onClick={() => state.setSelectDisabled(!state.selectDisabled)}
            >
              {state.selectDisabled ? "Disabled: ON" : "Disabled: OFF"}
            </Button>
          </div>
        </div>
      );

    case "combobox": {
      const options: ComboboxOption[] = [
        { value: "mda", label: "MDA Monochrome (720 × 350)" },
        { value: "cga", label: "CGA 4-Color (320 × 200)" },
        { value: "ega", label: "EGA 16-Color (640 × 350)" },
        { value: "vga", label: "VGA 256-Color (640 × 480)" },
        { value: "svga", label: "SVGA High-Color (800 × 600)" },
        { value: "xga", label: "XGA True-Color (1024 × 768)" },
        { value: "locked", label: "SXGA 1280 × 1024 (Locked)", disabled: true },
      ];

      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-sm">
          <div className="w-full bevel-raised bg-surface p-6 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <Label htmlFor="demo-combobox">Graphic Adapter (Filter / Search)</Label>
            </div>
            <Combobox
              id="demo-combobox"
              options={options}
              value={state.comboboxVal}
              onValueChange={state.setComboboxVal}
              invalid={state.comboboxInvalid}
              disabled={state.comboboxDisabled}
              placeholder="Type to filter adapters..."
              emptyMessage="No hardware devices detected."
            />
            <div className="flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/50 pt-2 font-mono">
              <span>Active Value:</span>
              <span className="text-primary font-bold uppercase">{state.comboboxVal}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              size="sm"
              variant={state.comboboxInvalid ? "destructive" : "outline"}
              onClick={() => state.setComboboxInvalid(!state.comboboxInvalid)}
            >
              {state.comboboxInvalid ? "Invalid: ON" : "Invalid: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.comboboxDisabled ? "primary" : "outline"}
              onClick={() => state.setComboboxDisabled(!state.comboboxDisabled)}
            >
              {state.comboboxDisabled ? "Disabled: ON" : "Disabled: OFF"}
            </Button>
          </div>

          <div className="text-center text-[10px] text-muted-foreground">
            Accessible WAI-ARIA combobox with keyboard arrow navigation, active-descendant, and filtering.
          </div>
        </div>
      );
    }

    case "toggle":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-sm">
          <div className="w-full bevel-raised bg-surface p-6 flex flex-col items-center justify-center gap-4 text-center">
            <div className="text-xs text-muted-foreground uppercase font-bold">
              Two-State Toggle Button
            </div>

            <Toggle
              pressed={state.togglePressed}
              onPressedChange={state.setTogglePressed}
              size={state.toggleSize}
              disabled={state.toggleDisabled}
            >
              BOLD [B]
            </Toggle>

            <div className="bevel-inset bg-surface-sunken px-3 py-1.5 text-xs font-mono">
              State:{" "}
              <span className="font-bold text-primary uppercase">
                {state.togglePressed ? "ACTIVE (PRESSED / SUNKEN)" : "INACTIVE (RAISED)"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Size:</span>
              {(["sm", "md", "lg"] as const).map((sz) => (
                <Button
                  key={sz}
                  size="sm"
                  variant={state.toggleSize === sz ? "primary" : "outline"}
                  onClick={() => state.setToggleSize(sz)}
                >
                  {sz}
                </Button>
              ))}
            </div>
            <Button
              size="sm"
              variant={state.toggleDisabled ? "primary" : "outline"}
              onClick={() => state.setToggleDisabled(!state.toggleDisabled)}
            >
              {state.toggleDisabled ? "Disabled: ON" : "Disabled: OFF"}
            </Button>
          </div>
        </div>
      );

    case "toggle-group":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="w-full bevel-raised bg-surface p-6 space-y-4">
            {state.toggleGroupMode === "single" ? (
              <div className="space-y-2">
                <Label>Single Selection Mode (Text Alignment)</Label>
                <ToggleGroup
                  type="single"
                  value={state.toggleGroupSingleVal}
                  onValueChange={state.setToggleGroupSingleVal}
                >
                  <ToggleGroupItem value="left">LEFT</ToggleGroupItem>
                  <ToggleGroupItem value="center">CENTER</ToggleGroupItem>
                  <ToggleGroupItem value="right">RIGHT</ToggleGroupItem>
                  <ToggleGroupItem value="justify" disabled>JUSTIFY</ToggleGroupItem>
                </ToggleGroup>
                <div className="text-[11px] text-muted-foreground font-mono">
                  Active Value: <span className="text-primary font-bold uppercase">{state.toggleGroupSingleVal || "NONE"}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Label>Multiple Selection Mode (Text Formatting)</Label>
                <ToggleGroup
                  type="multiple"
                  value={state.toggleGroupMultiVal}
                  onValueChange={state.setToggleGroupMultiVal}
                >
                  <ToggleGroupItem value="bold">B</ToggleGroupItem>
                  <ToggleGroupItem value="italic">I</ToggleGroupItem>
                  <ToggleGroupItem value="underline">U</ToggleGroupItem>
                  <ToggleGroupItem value="strike">S</ToggleGroupItem>
                </ToggleGroup>
                <div className="text-[11px] text-muted-foreground font-mono">
                  Active Flags: <span className="text-primary font-bold uppercase">{state.toggleGroupMultiVal.join(", ") || "NONE"}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] text-muted-foreground uppercase font-bold mr-1">Selection Mode:</span>
            <Button
              size="sm"
              variant={state.toggleGroupMode === "single" ? "primary" : "outline"}
              onClick={() => state.setToggleGroupMode("single")}
            >
              Single Mode
            </Button>
            <Button
              size="sm"
              variant={state.toggleGroupMode === "multiple" ? "primary" : "outline"}
              onClick={() => state.setToggleGroupMode("multiple")}
            >
              Multiple Mode
            </Button>
          </div>
        </div>
      );

    case "field":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="w-full bevel-raised bg-surface p-6 space-y-3">
            <Field
              id="demo-field"
              required={state.fieldRequired}
              invalid={state.fieldHasError}
              disabled={state.fieldDisabled}
            >
              <FieldLabel>Subscriber Call Sign</FieldLabel>
              <Input
                id="demo-field-input"
                value={state.fieldVal}
                onChange={(e) => state.setFieldVal(e.target.value)}
                placeholder="e.g. N0CALL / BBS-NODE"
                invalid={state.fieldHasError}
                disabled={state.fieldDisabled}
              />
              {!state.fieldHasError ? (
                <FieldDescription>
                  Assigned AX.25 packet radio call sign. Must be uppercase.
                </FieldDescription>
              ) : (
                <FieldError>
                  Baud rate parity mismatch: 8N1 required
                </FieldError>
              )}
            </Field>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              size="sm"
              variant={state.fieldRequired ? "primary" : "outline"}
              onClick={() => state.setFieldRequired(!state.fieldRequired)}
            >
              {state.fieldRequired ? "Required: ON" : "Required: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.fieldHasError ? "destructive" : "outline"}
              onClick={() => state.setFieldHasError(!state.fieldHasError)}
            >
              {state.fieldHasError ? "Simulate Error: ON" : "Simulate Error: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.fieldDisabled ? "primary" : "outline"}
              onClick={() => state.setFieldDisabled(!state.fieldDisabled)}
            >
              {state.fieldDisabled ? "Disabled: ON" : "Disabled: OFF"}
            </Button>
          </div>

          <div className="text-center text-[10px] text-muted-foreground">
            Field automatically wires aria-labelledby, aria-describedby, and aria-invalid between label, input, description, and error.
          </div>
        </div>
      );

    case "dialog":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <Dialog open={state.dialogOpen} onOpenChange={state.setDialogOpen} backdropVariant={state.dialogBackdrop}>
            <DialogTrigger asChild>
              <Button variant="primary">Launch Hardware Dialog</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>IRQ &amp; DMA CONFIGURATION {"//"} BUS 0</DialogTitle>
                <DialogDescription>
                  Direct hardware channel assignment for Sound Blaster &amp; SCSI controller.
                </DialogDescription>
              </DialogHeader>
              <DialogBody>
                <div className="bevel-inset bg-surface p-4 space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">INTERRUPT LINE:</span>
                    <span className="font-bold text-foreground">IRQ 7 (LPT1 / PASS)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">DMA CHANNEL:</span>
                    <span className="font-bold text-foreground">DMA 1 (8-BIT SOUND)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">I/O BASE PORT:</span>
                    <span className="font-bold text-foreground">0x220 - 0x22F</span>
                  </div>
                </div>
              </DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" size="sm">Abort</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="primary" size="sm">Save &amp; Apply</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Backdrop Scrim:</span>
            {(["dimmed", "dither", "transparent"] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => state.setDialogBackdrop(b)}
                className={`px-2 py-0.5 uppercase ${
                  state.dialogBackdrop === b ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground text-center">
            Full focus trapping, Escape key listener, outside-click dismissal, and body scroll lock.
          </span>
        </div>
      );

    case "alert-dialog":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="w-full bevel-inset bg-surface p-3 text-center text-xs font-mono">
            <span className="text-muted-foreground">VOLUME STATUS: </span>
            <span className="font-bold text-foreground">{state.alertDialogStatus}</span>
          </div>

          <AlertDialog open={state.alertDialogOpen} onOpenChange={state.setAlertDialogOpen} backdropVariant={state.alertDialogBackdrop}>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Format Hard Drive C:\</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-md">
              <AlertDialogHeader>
                <AlertDialogTitle>CRITICAL: FORMAT HARD DRIVE C:\</AlertDialogTitle>
                <AlertDialogDescription>
                  This operation will permanently destroy all partitions, FAT allocations, and system files.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogBody>
                <div className="bevel-inset p-3 bg-destructive/10 border border-destructive/40 text-xs font-mono space-y-1 text-destructive">
                  <div className="font-bold">WARNING: IRREVERSIBLE ACTION</div>
                  <div>Sector headers on Quantum Fireball 540MB will be rewritten.</div>
                </div>
              </AlertDialogBody>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button variant="outline" size="sm">Abort [Esc]</Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => state.setAlertDialogStatus("FORMAT COMPLETE // ALL 540MB ZEROED")}
                  >
                    Proceed With Format
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Backdrop:</span>
            {(["dither", "dimmed"] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => state.setAlertDialogBackdrop(b)}
                className={`px-2 py-0.5 uppercase ${
                  state.alertDialogBackdrop === b ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground text-center">
            WAI-ARIA alertdialog role with focus lock to Cancel button on open.
          </span>
        </div>
      );

    case "popover":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="flex items-center justify-center p-6">
            <Popover open={state.popoverOpen} onOpenChange={state.setPopoverOpen} side={state.popoverSide} align={state.popoverAlign}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  Sound Blaster DSP Mixer [▼]
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4 space-y-3 font-mono">
                <div className="flex items-center justify-between border-b border-border pb-2 text-xs font-bold text-foreground">
                  <span>DSP AUDIO MIXER</span>
                  <span className="text-[10px] text-primary">PORT 0x220</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>MASTER VOL:</span>
                    <span className="text-foreground font-bold">{state.popoverVolume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={state.popoverVolume}
                    onChange={(e) => state.setPopoverVolume(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-muted-foreground">FM SYNTHESIS (OPL3):</span>
                  <button
                    type="button"
                    onClick={() => state.setPopoverMidi(!state.popoverMidi)}
                    className={`px-2 py-0.5 text-[10px] uppercase ${
                      state.popoverMidi ? "bevel-inset bg-success text-success-foreground font-bold" : "bevel-raised text-muted-foreground"
                    }`}
                  >
                    {state.popoverMidi ? "ACTIVE" : "MUTED"}
                  </button>
                </div>
                <div className="pt-2 border-t border-border flex justify-end">
                  <PopoverClose asChild>
                    <Button size="sm" variant="primary">Done</Button>
                  </PopoverClose>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Side:</span>
            {(["top", "bottom", "left", "right"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setPopoverSide(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.popoverSide === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Align:</span>
            {(["start", "center", "end"] as const).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => state.setPopoverAlign(a)}
                className={`px-2 py-0.5 uppercase ${
                  state.popoverAlign === a ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground text-center">
            Anchored floating layer with dynamic viewport collision detection.
          </span>
        </div>
      );

    case "tooltip":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <TooltipProvider delayDuration={150}>
            <div className="bevel-raised bg-surface p-3 flex items-center justify-center gap-3">
              <Tooltip side={state.tooltipSide}>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="outline" className="px-3 font-mono">
                    💾 SAVE
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Commit buffer to disk (Ctrl + S)
                </TooltipContent>
              </Tooltip>

              <Tooltip side={state.tooltipSide}>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="outline" className="px-3 font-mono">
                    🖨️ PRINT
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Output to Dot Matrix LPT1
                </TooltipContent>
              </Tooltip>

              <Tooltip side={state.tooltipSide}>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="outline" className="px-3 font-mono">
                    🔍 FIND
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Search binary strings in memory (F3)
                </TooltipContent>
              </Tooltip>

              <Tooltip side={state.tooltipSide}>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="outline" className="px-3 font-mono">
                    ⚙️ SETUP
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Hardware Interrupt Configuration
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Placement Side:</span>
            {(["top", "bottom", "left", "right"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setTooltipSide(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.tooltipSide === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground text-center">
            Hover or keyboard focus trigger. Fully accessible with aria-describedby.
          </span>
        </div>
      );

    case "hover-card":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-6 flex flex-col items-center gap-2 text-center text-xs font-mono w-full">
            <span className="text-muted-foreground">SYSOP DIRECTORY ENTRY:</span>
            <HoverCard side={state.hoverCardSide} openDelay={150} closeDelay={200}>
              <HoverCardTrigger asChild>
                <span className="underline cursor-pointer font-bold text-primary hover:text-primary/80 transition-colors">
                  @sysop_dan (NODE #01)
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4 font-mono space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bevel-inset bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                    SY
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-xs">Dan &quot;BitStream&quot; Miller</div>
                    <div className="text-[10px] text-muted-foreground">SysOp {"//"} The Midnight Byte BBS</div>
                  </div>
                </div>
                <div className="bevel-inset bg-surface p-2 text-[10px] space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">MODEM:</span>
                    <span className="font-bold text-foreground">USRobotics Courier V.Everything</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">BAUD RATE:</span>
                    <span className="font-bold text-foreground">56,600 bps V.90</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ACCESS LEVEL:</span>
                    <span className="font-bold text-foreground">255 (SUPERUSER)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border">
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-success rounded-none" /> ONLINE COM1
                  </span>
                  <span>UPTIME: 14D 06H</span>
                </div>
              </HoverCardContent>
            </HoverCard>
            <span className="text-[10px] text-muted-foreground">(Hover over the handle to inspect user credentials)</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Side:</span>
            {(["top", "bottom", "left", "right"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setHoverCardSide(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.hoverCardSide === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground text-center">
            Intent-aware hover preview with grace period delay before closing.
          </span>
        </div>
      );

    case "drawer":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <Drawer open={state.drawerOpen} onOpenChange={state.setDrawerOpen} side={state.drawerSide} backdropVariant={state.drawerBackdrop}>
            <DrawerTrigger asChild>
              <Button variant="primary">Slide Out Diagnostic Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>DIAGNOSTIC BUS TELEMETRY DRAWER</DrawerTitle>
                <DrawerDescription>
                  Continuous DMA packet inspection and UART buffer telemetry.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody>
                <div className="bevel-inset bg-surface p-4 font-mono text-xs space-y-2 max-h-60 overflow-y-auto">
                  <div className="text-success">[00:04:12] DMA Channel 1 verified: 64KB allocated</div>
                  <div className="text-foreground">[00:04:14] UART 16550A FIFO buffer initialized</div>
                  <div className="text-muted-foreground">[00:04:15] Baud clock sync: 115200 bps ok</div>
                  <div className="text-warning">[00:04:18] CTS signal asserted by remote peer</div>
                  <div className="text-foreground">[00:04:20] Ring buffer ready for telemetry stream</div>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline" size="sm">Dismiss Drawer</Button>
                </DrawerClose>
                <Button variant="primary" size="sm">Clear Telemetry</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Drawer Edge:</span>
            {(["bottom", "top", "left", "right"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setDrawerSide(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.drawerSide === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Backdrop:</span>
            {(["dimmed", "dither"] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => state.setDrawerBackdrop(b)}
                className={`px-2 py-0.5 uppercase ${
                  state.drawerBackdrop === b ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground text-center">
            Anchored edge drawer with smooth entrance animation and tactile retro borders.
          </span>
        </div>
      );

    case "sheet":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <Sheet open={state.sheetOpen} onOpenChange={state.setSheetOpen} side={state.sheetSide} backdropVariant={state.sheetBackdrop}>
            <SheetTrigger asChild>
              <Button variant="outline">Open Device Inspector Sheet</Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle>SERIAL PORT INSPECTOR {"//"} COM2</SheetTitle>
                <SheetDescription>
                  Adjust RS-232 communication framing parameters.
                </SheetDescription>
              </SheetHeader>
              <SheetBody className="space-y-4 font-mono text-xs">
                <div className="bevel-inset bg-surface p-3 space-y-2">
                  <div className="font-bold text-foreground">FRAMING FORMAT</div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>BAUD RATE:</span>
                    <span className="text-foreground font-bold">14,400 BPS</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>DATA BITS:</span>
                    <span className="text-foreground font-bold">8 BITS</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>PARITY:</span>
                    <span className="text-foreground font-bold">NONE (8N1)</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>STOP BITS:</span>
                    <span className="text-foreground font-bold">1 BIT</span>
                  </div>
                </div>

                <div className="bevel-raised bg-bevel-face p-3 space-y-2">
                  <div className="font-bold text-foreground">FLOW CONTROL</div>
                  <div className="text-muted-foreground text-[11px]">
                    Hardware RTS/CTS line handshaking enabled for high-speed modem transfers.
                  </div>
                </div>
              </SheetBody>
              <SheetFooter>
                <SheetClose asChild>
                  <Button size="sm" variant="outline">Cancel</Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button size="sm" variant="primary">Commit Changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Docking Edge:</span>
            {(["right", "left", "top", "bottom"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setSheetSide(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.sheetSide === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Backdrop:</span>
            {(["dither", "dimmed"] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => state.setSheetBackdrop(b)}
                className={`px-2 py-0.5 uppercase ${
                  state.sheetBackdrop === b ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground text-center">
            Full edge docking panel optimized for complex properties inspection.
          </span>
        </div>
      );

    case "backdrop":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          {/* Contained simulation viewport so user can directly inspect textures */}
          <div className="relative w-full h-44 bevel-inset bg-surface overflow-hidden flex flex-col items-center justify-center p-4">
            {/* Background elements under the backdrop */}
            <div className="absolute inset-0 p-4 grid grid-cols-3 gap-2 opacity-80 pointer-events-none font-mono text-[10px]">
              <div className="bevel-raised bg-background p-2">PORT 0x3F8: OK</div>
              <div className="bevel-raised bg-background p-2">IRQ 04: ACTIVE</div>
              <div className="bevel-raised bg-background p-2">DMA 03: READY</div>
              <div className="bevel-raised bg-background p-2">FAT16: MOUNTED</div>
              <div className="bevel-raised bg-background p-2">RAM: 640KB BASE</div>
              <div className="bevel-raised bg-background p-2">VGA: MODE 13H</div>
            </div>

            {/* The backdrop rendered inside the container */}
            <div className="absolute inset-0">
              <Backdrop
                className="!absolute"
                variant={state.backdropVariant}
                invisible={state.backdropInvisible}
              />
            </div>

            {/* Foreground card floating above backdrop */}
            <div className="relative z-10 bevel-raised bg-bevel-face p-3 shadow-hard text-center font-mono text-xs space-y-1">
              <div className="font-bold text-foreground uppercase">
                ACTIVE SCRIM: {state.backdropInvisible ? "INVISIBLE" : state.backdropVariant}
              </div>
              <div className="text-[10px] text-muted-foreground">
                {state.backdropVariant === "dither" && "Classic Bayer procedural stipple pattern"}
                {state.backdropVariant === "dimmed" && "Standard dark alpha opacity scrim"}
                {state.backdropVariant === "transparent" && "Transparent click-intercept barrier"}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Pattern:</span>
            {(["dither", "dimmed", "transparent"] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => state.setBackdropVariant(b)}
                className={`px-2 py-0.5 uppercase ${
                  state.backdropVariant === b ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {b}
              </button>
            ))}
            <Button
              size="sm"
              variant={state.backdropInvisible ? "primary" : "outline"}
              onClick={() => state.setBackdropInvisible(!state.backdropInvisible)}
            >
              {state.backdropInvisible ? "Invisible: ON" : "Invisible: OFF"}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => state.setBackdropFullscreenOpen(true)}
            >
              Test Fullscreen Backdrop Scrim
            </Button>
          </div>

          {state.backdropFullscreenOpen && (
            <>
              <Backdrop
                variant={state.backdropVariant}
                invisible={state.backdropInvisible}
                onClick={() => state.setBackdropFullscreenOpen(false)}
              />
              <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
                <div className="pointer-events-auto bevel-raised bg-bevel-face p-6 shadow-hard text-center font-mono space-y-3">
                  <div className="font-bold text-sm text-foreground">FULLSCREEN BACKDROP ACTIVE</div>
                  <div className="text-xs text-muted-foreground">Click anywhere on scrim to dismiss.</div>
                  <Button size="sm" variant="primary" onClick={() => state.setBackdropFullscreenOpen(false)}>
                    Dismiss Scrim
                  </Button>
                </div>
              </div>
            </>
          )}

          <span className="text-[10px] text-muted-foreground text-center">
            Backdrop component handles procedural dithering, dimming, and outside-click capture.
          </span>
        </div>
      );

    case "overlay":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <Button
            variant="primary"
            onClick={() => state.setOverlayOpen(true)}
          >
            Mount Controlled Overlay
          </Button>

          <Overlay
            open={state.overlayOpen}
            onOpenChange={state.setOverlayOpen}
            backdropVariant={state.overlayBackdrop}
            closeOnEscape={state.overlayCloseOnEscape}
            closeOnOutsideClick={state.overlayCloseOnOutside}
            className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto bevel-raised bg-bevel-face p-6 shadow-hard max-w-sm w-full font-mono space-y-4">
              <div className="border-b border-border pb-2">
                <div className="font-bold text-foreground text-sm uppercase">CUSTOM OVERLAY VIEWPORT</div>
                <div className="text-xs text-muted-foreground">Coordinated by low-level Overlay primitive</div>
              </div>
              <div className="bevel-inset bg-surface p-3 text-xs space-y-1">
                <div className="text-foreground font-bold">STATE COORDINATION:</div>
                <div className="text-muted-foreground">✓ Automatic body scroll lock</div>
                <div className="text-muted-foreground">✓ Portaled outside parent DOM hierarchy</div>
                <div className="text-muted-foreground">✓ Escape dismiss: {state.overlayCloseOnEscape ? "ON" : "OFF"}</div>
                <div className="text-muted-foreground">✓ Outside click dismiss: {state.overlayCloseOnOutside ? "ON" : "OFF"}</div>
              </div>
              <div className="flex justify-end gap-2">
                <Button size="sm" variant="primary" onClick={() => state.setOverlayOpen(false)}>
                  Close Overlay
                </Button>
              </div>
            </div>
          </Overlay>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Backdrop:</span>
            {(["dimmed", "dither", "transparent"] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => state.setOverlayBackdrop(b)}
                className={`px-2 py-0.5 uppercase ${
                  state.overlayBackdrop === b ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.overlayCloseOnEscape ? "primary" : "outline"}
              onClick={() => state.setOverlayCloseOnEscape(!state.overlayCloseOnEscape)}
            >
              {state.overlayCloseOnEscape ? "Esc Dismiss: ON" : "Esc Dismiss: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.overlayCloseOnOutside ? "primary" : "outline"}
              onClick={() => state.setOverlayCloseOnOutside(!state.overlayCloseOnOutside)}
            >
              {state.overlayCloseOnOutside ? "Outside Click: ON" : "Outside Click: OFF"}
            </Button>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Low-level building block managing overlay lifecycle, portals, and dismiss listeners.
          </span>
        </div>
      );

    case "portal":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="w-full text-center text-xs text-muted-foreground">
            Visual demo comparing content trapped inside an <code className="text-primary font-bold">overflow-hidden</code> container versus tele-transported via Portal.
          </div>

          {/* A container with fixed dimensions and overflow-hidden */}
          <div className="relative w-full h-32 border-2 border-dashed border-destructive/60 bg-surface/50 p-3 overflow-hidden flex flex-col items-center justify-between">
            <div className="text-[11px] font-mono text-destructive font-bold uppercase tracking-wider">
              PARENT BOUNDARY [OVERFLOW: HIDDEN]
            </div>

            {state.portalPanelOpen && (
              <Portal disabled={state.portalDisabled}>
                <div
                  className={
                    state.portalDisabled
                      ? "relative w-64 bevel-raised bg-bevel-face p-3 shadow-hard text-xs font-mono text-center -mb-16 z-10"
                      : "fixed bottom-8 right-8 w-72 bevel-raised bg-bevel-face p-4 shadow-hard text-xs font-mono text-center z-[var(--z-popover)]"
                  }
                >
                  <div className="font-bold text-foreground">
                    {state.portalDisabled ? "⚠️ TRAPPED & CLIPPED" : "🚀 PORTAL TELEPORTED"}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1">
                    {state.portalDisabled
                      ? "Rendered inside DOM parent — truncated by parent bounds."
                      : "Mounted to #ditherweb-portal-root — floating unconstrained!"}
                  </div>
                </div>
              </Portal>
            )}

            <div className="text-[10px] font-mono text-muted-foreground">
              Container height: 128px {"//"} clipping active
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.portalDisabled ? "outline" : "primary"}
              onClick={() => state.setPortalDisabled(!state.portalDisabled)}
            >
              {state.portalDisabled ? "Portal Disabled (Trapped)" : "Portal Enabled (Teleported)"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => state.setPortalPanelOpen(!state.portalPanelOpen)}
            >
              {state.portalPanelOpen ? "Hide Panel" : "Show Panel"}
            </Button>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            SSR-safe React Portal targeting document.body with automatic portal root container lifecycle.
          </span>
        </div>
      );

    case "breadcrumb":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-4 w-full flex flex-col items-center gap-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="cursor-pointer"
                    onClick={() => state.setBreadcrumbClicked("C:\\")}
                  >
                    C:
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>{state.breadcrumbSeparator}</BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="cursor-pointer"
                    onClick={() => state.setBreadcrumbClicked("DOS")}
                  >
                    DOS
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {state.breadcrumbDepth === 2 && (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbEllipsis />
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>{state.breadcrumbSeparator}</BreadcrumbSeparator>
                  </>
                )}

                {state.breadcrumbDepth >= 3 && (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        className="cursor-pointer"
                        onClick={() => state.setBreadcrumbClicked("SYSTEM")}
                      >
                        SYSTEM
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>{state.breadcrumbSeparator}</BreadcrumbSeparator>
                  </>
                )}

                {state.breadcrumbDepth >= 4 && (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        className="cursor-pointer"
                        onClick={() => state.setBreadcrumbClicked("DRIVERS")}
                      >
                        DRIVERS
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>{state.breadcrumbSeparator}</BreadcrumbSeparator>
                  </>
                )}

                <BreadcrumbItem>
                  <BreadcrumbPage>SOUND.SYS</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="text-[10px] text-muted-foreground font-mono">
              ACTIVE NODE: <span className="font-bold text-foreground">{state.breadcrumbClicked}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Separator:</span>
            {(["\\", "/", ">", "»"] as const).map((sep) => (
              <button
                key={sep}
                type="button"
                onClick={() => state.setBreadcrumbSeparator(sep)}
                className={`px-2 py-0.5 ${
                  state.breadcrumbSeparator === sep ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {sep}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Path Depth:</span>
            {[2, 3, 4].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => state.setBreadcrumbDepth(d)}
                className={`px-2 py-0.5 ${
                  state.breadcrumbDepth === d ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {d} Levels
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Semantic breadcrumb navigation conforming to WAI-ARIA breadcrumb pattern.
          </span>
        </div>
      );

    case "pagination":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-4 w-full flex flex-col items-center gap-3">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    disabled={state.paginationPage <= 1}
                    onClick={() => state.setPaginationPage(Math.max(1, state.paginationPage - 1))}
                  />
                </PaginationItem>

                {[1, 2, 3].map((p) => (
                  <PaginationItem key={p}>
                    <PaginationLink
                      isActive={state.paginationPage === p}
                      onClick={() => state.setPaginationPage(p)}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink
                    isActive={state.paginationPage === 8}
                    onClick={() => state.setPaginationPage(8)}
                  >
                    8
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    disabled={state.paginationPage >= 8}
                    onClick={() => state.setPaginationPage(Math.min(8, state.paginationPage + 1))}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            <div className="bevel-inset bg-background p-2 text-center text-[10px] text-muted-foreground font-mono w-full">
              DISPLAYING SECTORS {((state.paginationPage - 1) * 16) + 1}–{state.paginationPage * 16} OF 128 {"//"} TRACK 0{state.paginationPage}
            </div>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Accessible pagination stepper with tactile raised/inset button states and keyboard focus navigation.
          </span>
        </div>
      );

    case "navigation-menu":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-4 w-full flex flex-col items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-2 font-mono text-xs">
                <NavigationMenuItem value="system">
                  <NavigationMenuTrigger className="px-3 py-1.5 bevel-raised bg-bevel-face text-xs uppercase font-bold">
                    SYSTEM [▼]
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-3 w-56 font-mono text-xs space-y-2">
                    <div className="font-bold border-b border-border pb-1 text-foreground">KERNEL SUBSYSTEMS</div>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="hover:text-foreground hover:underline cursor-pointer">▪ IRQ / DMA Manager</div>
                      <div className="hover:text-foreground hover:underline cursor-pointer">▪ Conventional 640KB Map</div>
                      <div className="hover:text-foreground hover:underline cursor-pointer">▪ EMS Page Frame (0xE000)</div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem value="drives">
                  <NavigationMenuTrigger className="px-3 py-1.5 bevel-raised bg-bevel-face text-xs uppercase font-bold">
                    DRIVES [▼]
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-3 w-56 font-mono text-xs space-y-2">
                    <div className="font-bold border-b border-border pb-1 text-foreground">MOUNTED VOLUMES</div>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="hover:text-foreground hover:underline cursor-pointer">💾 Drive A: [1.44MB Floppy]</div>
                      <div className="hover:text-foreground hover:underline cursor-pointer">💽 Drive C: [540MB Quantum]</div>
                      <div className="hover:text-foreground hover:underline cursor-pointer">💿 Drive D: [4X CD-ROM]</div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem value="about">
                  <NavigationMenuLink
                    href="#docs"
                    className="px-3 py-1.5 bevel-raised bg-bevel-face text-xs uppercase font-bold hover:bg-muted"
                  >
                    STATUS
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Section navigation menu with interactive dropdown disclosure and outside click detection.
          </span>
        </div>
      );

    case "menubar":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="w-full">
            <Menubar>
              <MenubarMenu value="file">
                <MenubarTrigger className="px-2.5 py-1 font-mono text-xs font-bold uppercase cursor-pointer hover:bg-muted">
                  File
                </MenubarTrigger>
                <MenubarContent className="min-w-44 p-1 font-mono text-xs">
                  <MenubarItem onClick={() => state.setMenubarLastAction("File > New")}>
                    New Buffer <MenubarShortcut>Ctrl+N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => state.setMenubarLastAction("File > Open")}>
                    Open File... <MenubarShortcut>Ctrl+O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => state.setMenubarLastAction("File > Save")}>
                    Save To Disk <MenubarShortcut>Ctrl+S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => state.setMenubarLastAction("File > Exit")}>
                    Exit To DOS <MenubarShortcut>Alt+F4</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu value="edit">
                <MenubarTrigger className="px-2.5 py-1 font-mono text-xs font-bold uppercase cursor-pointer hover:bg-muted">
                  Edit
                </MenubarTrigger>
                <MenubarContent className="min-w-44 p-1 font-mono text-xs">
                  <MenubarItem onClick={() => state.setMenubarLastAction("Edit > Cut")}>
                    Cut <MenubarShortcut>Ctrl+X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => state.setMenubarLastAction("Edit > Copy")}>
                    Copy <MenubarShortcut>Ctrl+C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => state.setMenubarLastAction("Edit > Paste")}>
                    Paste <MenubarShortcut>Ctrl+V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu value="options">
                <MenubarTrigger className="px-2.5 py-1 font-mono text-xs font-bold uppercase cursor-pointer hover:bg-muted">
                  Options
                </MenubarTrigger>
                <MenubarContent className="min-w-48 p-1 font-mono text-xs">
                  <MenubarCheckboxItem
                    checked={state.menubarScanlines}
                    onClick={() => {
                      const next = !state.menubarScanlines;
                      state.setMenubarScanlines(next);
                      state.setMenubarLastAction(`Scanlines: ${next ? "ON" : "OFF"}`);
                    }}
                  >
                    Simulate CRT Scanlines
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={state.menubarSpeaker}
                    onClick={() => {
                      const next = !state.menubarSpeaker;
                      state.setMenubarSpeaker(next);
                      state.setMenubarLastAction(`PC Speaker: ${next ? "ON" : "OFF"}`);
                    }}
                  >
                    PC Speaker Tone
                  </MenubarCheckboxItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <div className="bevel-inset bg-surface p-2.5 text-center text-xs font-mono w-full">
            <span className="text-muted-foreground">LAST ACTION: </span>
            <span className="font-bold text-foreground">{state.menubarLastAction}</span>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Classic desktop horizontal menu bar with nested items, keyboard shortcuts, and checkbox toggles.
          </span>
        </div>
      );

    case "data-table": {
      const sampleFiles = [
        { id: "1", name: "CONFIG.SYS", size: "512 B", type: "System Config", status: "Active" },
        { id: "2", name: "AUTOEXEC.BAT", size: "1,024 B", type: "Batch Script", status: "Active" },
        { id: "3", name: "HIMEM.SYS", size: "32,768 B", type: "Memory Mgr", status: "Resident" },
        { id: "4", name: "COMMAND.COM", size: "94,295 B", type: "Shell Exec", status: "Core" },
      ];

      const columns: DataTableColumn<typeof sampleFiles[0]>[] = [
        {
          id: "name",
          header: "Filename",
          cell: ({ row }) => <span className="font-bold text-foreground">{row.name}</span>,
          sortable: true,
        },
        {
          id: "size",
          header: "Size",
          cell: ({ row }) => <span className="text-muted-foreground">{row.size}</span>,
          sortable: true,
        },
        {
          id: "type",
          header: "Type",
          cell: ({ row }) => <span>{row.type}</span>,
        },
        {
          id: "status",
          header: "Status",
          cell: ({ row }) => (
            <Badge variant={row.status === "Core" ? "primary" : "outline"}>
              {row.status}
            </Badge>
          ),
        },
      ];

      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-lg">
          <div className="w-full">
            <DataTable
              data={state.dataTableEmpty ? [] : sampleFiles}
              columns={columns}
              selectable
              onSelectionChange={(_keys, rows) => state.setDataTableSelectedCount(rows.length)}
              loading={state.dataTableLoading}
              emptyText="NO FILES FOUND IN C:\SYSTEM"
              caption="SYSTEM BOOT DIRECTORY LISTING"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.dataTableLoading ? "primary" : "outline"}
              onClick={() => state.setDataTableLoading(!state.dataTableLoading)}
            >
              {state.dataTableLoading ? "Loading: ON" : "Loading: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.dataTableEmpty ? "primary" : "outline"}
              onClick={() => state.setDataTableEmpty(!state.dataTableEmpty)}
            >
              {state.dataTableEmpty ? "Empty State: ON" : "Empty State: OFF"}
            </Button>
          </div>

          <div className="text-[10px] text-muted-foreground text-center font-mono">
            SELECTED ROWS: <span className="font-bold text-foreground">{state.dataTableSelectedCount}</span> {"//"} Supports column sorting, multi-row selection, and empty/loading states.
          </div>
        </div>
      );
    }

    case "description-list":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="w-full bevel-raised bg-surface p-4">
            <DescriptionList
              layout={state.descListLayout}
              dense={state.descListDense}
              divided={state.descListDivided}
            >
              <DescriptionItem>
                <DescriptionTerm>PROCESSOR:</DescriptionTerm>
                <DescriptionDetails>Intel i486DX2 @ 66 MHz</DescriptionDetails>
              </DescriptionItem>
              <DescriptionItem>
                <DescriptionTerm>CONVENTIONAL RAM:</DescriptionTerm>
                <DescriptionDetails>640 KB Base Memory</DescriptionDetails>
              </DescriptionItem>
              <DescriptionItem>
                <DescriptionTerm>EXTENDED MEMORY:</DescriptionTerm>
                <DescriptionDetails>16,384 KB (16 MB) XMS</DescriptionDetails>
              </DescriptionItem>
              <DescriptionItem>
                <DescriptionTerm>GRAPHICS CARD:</DescriptionTerm>
                <DescriptionDetails>Tseng Labs ET4000/W32 (1 MB VRAM)</DescriptionDetails>
              </DescriptionItem>
              <DescriptionItem>
                <DescriptionTerm>SOUND CONTROLLER:</DescriptionTerm>
                <DescriptionDetails>Creative Sound Blaster 16 ASP</DescriptionDetails>
              </DescriptionItem>
            </DescriptionList>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Layout:</span>
            {(["horizontal", "stacked"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => state.setDescListLayout(l)}
                className={`px-2 py-0.5 uppercase ${
                  state.descListLayout === l ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {l}
              </button>
            ))}
            <Button
              size="sm"
              variant={state.descListDense ? "primary" : "outline"}
              onClick={() => state.setDescListDense(!state.descListDense)}
            >
              {state.descListDense ? "Dense: ON" : "Dense: OFF"}
            </Button>
            <Button
              size="sm"
              variant={state.descListDivided ? "primary" : "outline"}
              onClick={() => state.setDescListDivided(!state.descListDivided)}
            >
              {state.descListDivided ? "Divided: ON" : "Divided: OFF"}
            </Button>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Semantic description list mapping DL, DT, and DD elements for hardware specifications and key-value records.
          </span>
        </div>
      );

    case "tree": {
      const treeData: TreeNodeData[] = [
        {
          id: "root",
          label: "C:\\ [ROOT DIRECTORY]",
          children: [
            {
              id: "dos",
              label: "DOS",
              children: [
                { id: "command", label: "COMMAND.COM" },
                { id: "format", label: "FORMAT.COM" },
              ],
            },
            {
              id: "games",
              label: "GAMES",
              children: [
                {
                  id: "doom",
                  label: "DOOM",
                  children: [
                    { id: "doom-exe", label: "DOOM.EXE" },
                    { id: "doom-wad", label: "DOOM1.WAD" },
                  ],
                },
              ],
            },
            { id: "autoexec", label: "AUTOEXEC.BAT" },
            { id: "config", label: "CONFIG.SYS" },
          ],
        },
      ];

      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="w-full bevel-inset bg-surface p-4 font-mono text-xs">
            <Tree
              data={treeData}
              selectedId={state.treeSelected}
              onSelect={(id) => state.setTreeSelected(id)}
              showGuides={state.treeGuides}
              expandedIds={["root", "dos", "games", "doom"]}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.treeGuides ? "primary" : "outline"}
              onClick={() => state.setTreeGuides(!state.treeGuides)}
            >
              {state.treeGuides ? "ASCII Guides: ON" : "ASCII Guides: OFF"}
            </Button>
          </div>

          <div className="text-[10px] text-muted-foreground text-center font-mono">
            SELECTED NODE: <span className="font-bold text-foreground uppercase">{state.treeSelected}</span>
          </div>
        </div>
      );
    }

    case "avatar":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-6 flex flex-col items-center gap-4 w-full">
            <div className="flex items-center justify-center gap-6">
              <Avatar size={state.avatarSize} shape={state.avatarShape}>
                {!state.avatarShowFallback && (
                  <AvatarImage src="/icon.png" alt="SysOp Avatar" />
                )}
                <AvatarFallback>SY</AvatarFallback>
                <AvatarBadge status={state.avatarStatus} />
              </Avatar>

              <div className="text-left font-mono space-y-0.5">
                <div className="font-bold text-foreground text-xs">SYSOP {"//"} NODE 01</div>
                <div className="text-[10px] text-muted-foreground">USRobotics Courier 56K</div>
                <div className="text-[10px] text-primary uppercase font-bold">STATUS: {state.avatarStatus}</div>
              </div>
            </div>

            {/* Side-by-side sizes showcase */}
            <div className="pt-2 border-t border-border w-full flex items-center justify-center gap-3">
              {(["sm", "md", "lg", "xl"] as const).map((s) => (
                <div key={s} className="flex flex-col items-center gap-1">
                  <Avatar size={s} shape={state.avatarShape}>
                    <AvatarFallback>{s.toUpperCase()}</AvatarFallback>
                    <AvatarBadge status={s === "sm" ? "offline" : s === "md" ? "away" : s === "lg" ? "busy" : "online"} />
                  </Avatar>
                  <span className="text-[9px] text-muted-foreground font-mono">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Size:</span>
            {(["sm", "md", "lg", "xl"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setAvatarSize(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.avatarSize === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Shape:</span>
            {(["square", "circle"] as const).map((sh) => (
              <button
                key={sh}
                type="button"
                onClick={() => state.setAvatarShape(sh)}
                className={`px-2 py-0.5 uppercase ${
                  state.avatarShape === sh ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {sh}
              </button>
            ))}

            <span className="text-muted-foreground ml-2">Status:</span>
            {(["online", "busy", "away", "offline"] as const).map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => state.setAvatarStatus(st)}
                className={`px-2 py-0.5 uppercase ${
                  state.avatarStatus === st ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Entity avatar with initials fallback and presence indicator dot.
          </span>
        </div>
      );

    case "guestbook":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-lg">
          <Guestbook className="w-full">
            <GuestbookHeader>
              <GuestbookTitle>
                <span aria-hidden="true">📖</span>
                <span>CYBERSPACE GUESTBOOK</span>
              </GuestbookTitle>
              <div className="text-[10px] text-muted-foreground font-mono">
                PAGES: [1] {"//"} TOTAL SIGNATURES: {state.guestbookEntries.length}
              </div>
            </GuestbookHeader>

            {state.guestbookEmpty ? (
              <GuestbookEmpty>
                No guest signatures logged yet. Click &quot;Sign Guestbook&quot; below to leave a note!
              </GuestbookEmpty>
            ) : (
              <GuestbookEntryList>
                {state.guestbookEntries.map((entry, idx) => (
                  <GuestbookEntry
                    key={idx}
                    entryNumber={state.guestbookEntries.length - idx}
                    author={entry.author}
                    date={entry.date}
                    location={entry.location}
                    websiteUrl={entry.websiteUrl}
                    websiteName={entry.websiteName}
                    message={entry.message}
                  />
                ))}
              </GuestbookEntryList>
            )}

            <GuestbookFooter>
              <span className="text-[10px]">
                Powered by Ditherweb CGI-BIN Guestbook 1.2
              </span>
              <button
                type="button"
                onClick={() => {
                  const newEntry = {
                    author: `Guest_${Math.floor(Math.random() * 900 + 100)}`,
                    date: "JUST NOW",
                    location: "Internet Relay Chat",
                    message: "Greetings from the World Wide Web! Love the retro layout and authentic dither graphics.",
                    websiteUrl: "https://ditherweb.mrinshad.site",
                    websiteName: "My HomePage",
                  };
                  state.setGuestbookEntries((prev) => [newEntry, ...prev]);
                  state.setGuestbookEmpty(false);
                }}
                className="text-primary underline hover:text-accent font-bold cursor-pointer"
              >
                [+ Sign Guestbook]
              </button>
            </GuestbookFooter>
          </Guestbook>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.guestbookEmpty ? "primary" : "outline"}
              onClick={() => state.setGuestbookEmpty(!state.guestbookEmpty)}
            >
              {state.guestbookEmpty ? "Empty State: ON" : "Empty State: OFF"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                const newEntry = {
                  author: `CyberSurfer_${Math.floor(Math.random() * 899 + 100)}`,
                  date: "OCT 09, 1996 03:00 GMT",
                  location: "Dial-up Gateway",
                  message: "Awesome palette and typography. Greetings from Netscape Navigator 3.0!",
                  websiteUrl: "https://ditherweb.mrinshad.site",
                  websiteName: "CyberVault",
                };
                state.setGuestbookEntries((prev) => [newEntry, ...prev]);
                state.setGuestbookEmpty(false);
              }}
            >
              Add Entry
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                state.setGuestbookEntries([]);
                state.setGuestbookEmpty(true);
              }}
            >
              Clear Entries
            </Button>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Classic personal homepage guestbook presentation pattern with author metadata, timestamps, and empty state.
          </span>
        </div>
      );

    case "visitor-counter":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-6 flex flex-col items-center gap-4 w-full">
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              PAGE HIT ACCUMULATOR
            </div>

            <VisitorCounter
              value={state.visitorCounterVal}
              minDigits={6}
              variant={state.visitorCounterVariant}
              size={state.visitorCounterSize}
              label="YOU ARE VISITOR NUMBER"
              labelPosition="top"
            />

            <div className="text-[10px] font-mono text-muted-foreground text-center">
              CURRENT VALUE: <span className="font-bold text-foreground">{state.visitorCounterVal.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant="primary"
              onClick={() => state.setVisitorCounterVal((v) => v + 1)}
            >
              +1 Hit
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => state.setVisitorCounterVal((v) => v + 10)}
            >
              +10 Hits
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => state.setVisitorCounterVal((v) => v + 1000)}
            >
              +1,000 Hits
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => state.setVisitorCounterVal(13370)}
            >
              Reset
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Variant:</span>
            {(["odometer", "led", "lcd", "classic"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => state.setVisitorCounterVariant(v)}
                className={`px-2 py-0.5 uppercase ${
                  state.visitorCounterVariant === v ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {v}
              </button>
            ))}

            <span className="text-muted-foreground ml-2">Size:</span>
            {(["sm", "md", "lg"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setVisitorCounterSize(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.visitorCounterSize === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Vintage odometer and digital display hit counters with zero-padding and live incrementing.
          </span>
        </div>
      );

    case "under-construction":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-lg">
          <UnderConstruction
            variant={state.underConstVariant}
            className="w-full"
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <UnderConstructionIcon size="lg" />
              <UnderConstructionTitle>CYBERSPHERE UNDER HEAVY MAINTENANCE</UnderConstructionTitle>
              <UnderConstructionMessage>
                Pardon our digital dust! Webmasters are currently soldering new RJ-45 patch cables into the mainframe.
              </UnderConstructionMessage>
              <UnderConstructionEstimatedDate date="NOVEMBER 15, 1996" />
              <UnderConstructionAction>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => state.setUnderConstPinged(true)}
                >
                  {state.underConstPinged ? "✓ Ping Received by SysOp" : "Ping SysOp Workstation"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => state.setUnderConstPinged(false)}
                >
                  Reset Status
                </Button>
              </UnderConstructionAction>
            </div>
          </UnderConstruction>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Variant:</span>
            {(["stripes", "bevel", "simple", "compact"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => state.setUnderConstVariant(v)}
                className={`px-2 py-0.5 uppercase ${
                  state.underConstVariant === v ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Iconic 1990s site maintenance indicator with hazard diagonal stripes, target dates, and call-to-action controls.
          </span>
        </div>
      );

    case "marquee":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-lg">
          <div className="w-full space-y-3">
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider flex items-center justify-between">
              <span>LIVE BBS TICKER WIRE</span>
              <span>STATUS: TRANSMITTING</span>
            </div>

            <Marquee
              direction={state.marqueeDirection}
              speed={state.marqueeSpeed}
              pauseOnHover={state.marqueePause}
              className="py-2.5 text-xs font-mono font-bold"
            >
              <span className="text-primary">⚡ BREAKING NEWS:</span>
              <span>DITHERWEB V2.0 BETA DOWNLOAD AVAILABLE ON FTP PORT 21</span>
              <span className="text-amber-500">★ 56K V.90 MODEM POOL ONLINE ★</span>
              <span>NEW GUESTBOOK ENTRIES APPROVED BY SYSOP</span>
              <span className="text-success">READY FOR NETSCAPE 3.0 GOLD</span>
            </Marquee>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Direction:</span>
            {(["left", "right"] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => state.setMarqueeDirection(d)}
                className={`px-2 py-0.5 uppercase ${
                  state.marqueeDirection === d ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {d}
              </button>
            ))}

            <span className="text-muted-foreground ml-2">Speed:</span>
            {(["slow", "normal", "fast"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setMarqueeSpeed(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.marqueeSpeed === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}

            <Button
              size="sm"
              variant={state.marqueePause ? "primary" : "outline"}
              onClick={() => state.setMarqueePause(!state.marqueePause)}
              className="ml-2"
            >
              {state.marqueePause ? "Pause on Hover: ON" : "Pause on Hover: OFF"}
            </Button>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Accessible CSS animation ticker replacing deprecated HTML &lt;marquee&gt; with pause-on-hover capability.
          </span>
        </div>
      );

    case "blink":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-5 flex flex-col items-center gap-4 w-full text-center">
            <div className="border border-border/80 bg-background/50 p-4 w-full space-y-2">
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                SYSTEM BULLETIN HEADER
              </div>

              <div className="text-sm font-bold font-mono">
                🚨{" "}
                <Blink
                  enabled={state.blinkEnabled}
                  speed={state.blinkSpeed}
                  className="text-destructive font-black underline decoration-wavy"
                >
                  ATTENTION: SYSTEM BACKUP IN PROGRESS
                </Blink>{" "}
                🚨
              </div>

              <div className="text-xs text-muted-foreground">
                All dial-up sessions will be suspended in 15 minutes for tape archive.
              </div>
            </div>

            {/* Inline Badges Showcase */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
              <span className="bevel-inset bg-amber-400 text-black px-2 py-0.5 font-bold">
                <Blink enabled={state.blinkEnabled} speed={state.blinkSpeed}>
                  ★ NEW ★
                </Blink>
              </span>
              <span className="bevel-inset bg-primary text-primary-foreground px-2 py-0.5 font-bold">
                <Blink enabled={state.blinkEnabled} speed={state.blinkSpeed}>
                  HOT DOWNLOAD
                </Blink>
              </span>
              <span className="bevel-inset bg-destructive text-destructive-foreground px-2 py-0.5 font-bold">
                <Blink enabled={state.blinkEnabled} speed={state.blinkSpeed}>
                  SALE!
                </Blink>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.blinkEnabled ? "primary" : "outline"}
              onClick={() => state.setBlinkEnabled(!state.blinkEnabled)}
            >
              {state.blinkEnabled ? "Blink Animation: ON" : "Blink Animation: OFF"}
            </Button>

            <span className="text-muted-foreground ml-2">Speed:</span>
            {(["slow", "normal", "fast"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => state.setBlinkSpeed(s)}
                className={`px-2 py-0.5 uppercase ${
                  state.blinkSpeed === s ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Accessible retro text emphasis replicating nostalgic 90s &lt;blink&gt; without browser deprecation errors.
          </span>
        </div>
      );

    case "button-88x31": {
      const sampleBadges = [
        { id: "netscape", label: "NETSCAPE", value: "NOW 4.0" },
        { id: "notepad", label: "MADE WITH", value: "NOTEPAD" },
        { id: "vga", label: "BEST VIEWED", value: "800x600" },
        { id: "linux", label: "HOSTED ON", value: "LINUX" },
        { id: "html4", label: "HTML 4.01", value: "VALID" },
        { id: "anybrowser", label: "VIEWABLE IN", value: "ANY BROWSER" },
      ];

      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="bevel-raised bg-surface p-5 flex flex-col items-center gap-4 w-full">
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
              88×31 MICRO-BUTTON BADGE EXHIBIT
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-items-center">
              {sampleBadges.map((b) => (
                <div
                  key={b.id}
                  onClick={() => state.setButton88x31Clicked(`${b.label}: ${b.value}`)}
                  className="cursor-pointer"
                >
                  <Button88x31
                    label={b.label}
                    value={b.value}
                    variant={state.button88x31Variant}
                    alt={`${b.label} ${b.value}`}
                  />
                </div>
              ))}
            </div>

            <div className="bevel-inset bg-background p-2 w-full text-center text-[10px] font-mono">
              <span className="text-muted-foreground">CLICKED BADGE: </span>
              <span className="font-bold text-foreground">{state.button88x31Clicked}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Variant:</span>
            {(["bevel", "outline", "flat"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => state.setButton88x31Variant(v)}
                className={`px-2 py-0.5 uppercase ${
                  state.button88x31Variant === v ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Authentic 88×31 pixel badges with tactile bevels and split label-value styling used in early-web footers.
          </span>
        </div>
      );
    }

    case "retro-banner":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-xl">
          <div className="w-full flex justify-center">
            <RetroBanner
              format={state.retroBannerFormat}
              variant={state.retroBannerVariant}
            >
              <div className="flex items-center gap-2 truncate">
                <span className="text-base" aria-hidden="true">🌐</span>
                <div className="truncate">
                  <RetroBannerTitle>SURF THE INFORMATION SUPERHIGHWAY</RetroBannerTitle>
                  <RetroBannerSubtitle>Join the premier dithered cyberspace web community today!</RetroBannerSubtitle>
                </div>
              </div>
              <RetroBannerAction>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => state.setRetroBannerClicks((c) => c + 1)}
                  className="text-[10px] font-bold uppercase py-0.5 px-2"
                >
                  CLICK HERE! ({state.retroBannerClicks})
                </Button>
              </RetroBannerAction>
            </RetroBanner>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Format:</span>
            {(["standard", "compact", "full"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => state.setRetroBannerFormat(f)}
                className={`px-2 py-0.5 uppercase ${
                  state.retroBannerFormat === f ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {f}
              </button>
            ))}

            <span className="text-muted-foreground ml-2">Variant:</span>
            {(["dither", "bevel", "outline", "solid"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => state.setRetroBannerVariant(v)}
                className={`px-2 py-0.5 uppercase ${
                  state.retroBannerVariant === v ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Classic 468×60 horizontal web banner advertisement format with dithered backgrounds and tactile actions.
          </span>
        </div>
      );

    case "pixel-image":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-6 flex flex-col items-center gap-4 w-full">
            <PixelImage
              src="/icon-dark.png"
              alt="Ditherweb System Icon"
              width={64}
              height={64}
              pixelRatio={state.pixelImageRatio}
              frame={state.pixelImageFrame}
              caption="SYSTEM_ICON.BMP (Nearest Neighbor)"
            />

            <div className="text-[10px] font-mono text-muted-foreground text-center">
              RENDERING: <span className="font-bold text-foreground">image-rendering: pixelated</span> (Scale: {state.pixelImageRatio}x)
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Frame:</span>
            {(["bevel", "inset", "dither", "groove", "simple", "none"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => state.setPixelImageFrame(f)}
                className={`px-2 py-0.5 uppercase ${
                  state.pixelImageFrame === f ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Scale Ratio:</span>
            {([1, 2, 3, 4] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => state.setPixelImageRatio(r)}
                className={`px-2 py-0.5 uppercase ${
                  state.pixelImageRatio === r ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {r}x
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Crisp nearest-neighbor bitmap display wrapper with vintage frames and caption figures.
          </span>
        </div>
      );

    case "web-directory":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
          <WebDirectory className="w-full bevel-raised bg-surface p-5 space-y-4">
            <WebDirectoryHeader>
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm uppercase text-foreground">
                  🌐 YAHOO! STYLE 1996 DIRECTORY INDEX
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  ENTRIES: 12 {"//"} ROOT
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Categorized cyberspace index for hardware, DOS software, and telecommunications.
              </p>
            </WebDirectoryHeader>

            <WebDirectoryGrid cols={state.webDirectoryCols}>
              <WebDirectoryCategory>
                <WebDirectoryTitle count={3} icon="💾">
                  Hardware &amp; Sound
                </WebDirectoryTitle>
                <WebDirectoryList>
                  <WebDirectoryItem>
                    <WebDirectoryLink
                      isNew
                      onClick={(e) => {
                        e.preventDefault();
                        state.setWebDirectoryLastClicked("Sound Blaster 16 DSP");
                      }}
                    >
                      Sound Blaster 16 DSP
                    </WebDirectoryLink>
                    <WebDirectoryDescription>
                      16-bit stereo sampling, OPL3 FM synthesis, and MIDI MPU-401.
                    </WebDirectoryDescription>
                  </WebDirectoryItem>
                  <WebDirectoryItem>
                    <WebDirectoryLink
                      onClick={(e) => {
                        e.preventDefault();
                        state.setWebDirectoryLastClicked("Trinitron 17\" CRT");
                      }}
                    >
                      Trinitron 17&quot; Monitor
                    </WebDirectoryLink>
                    <WebDirectoryDescription>
                      Aperture grille display supporting 1024x768 at 85Hz.
                    </WebDirectoryDescription>
                  </WebDirectoryItem>
                </WebDirectoryList>
                <WebDirectorySubcategories>
                  <span>Subcategories:</span>
                  <a
                    href="#scsi"
                    onClick={(e) => {
                      e.preventDefault();
                      state.setWebDirectoryLastClicked("SCSI Controllers");
                    }}
                    className="underline text-primary hover:text-accent"
                  >
                    SCSI (4)
                  </a>
                  <a
                    href="#cdrom"
                    onClick={(e) => {
                      e.preventDefault();
                      state.setWebDirectoryLastClicked("CD-ROM 4X Drives");
                    }}
                    className="underline text-primary hover:text-accent"
                  >
                    CD-ROM (6)
                  </a>
                </WebDirectorySubcategories>
              </WebDirectoryCategory>

              <WebDirectoryCategory>
                <WebDirectoryTitle count={4} icon="💻">
                  DOS &amp; Utilities
                </WebDirectoryTitle>
                <WebDirectoryList>
                  <WebDirectoryItem>
                    <WebDirectoryLink
                      isNew
                      onClick={(e) => {
                        e.preventDefault();
                        state.setWebDirectoryLastClicked("Norton Commander 5.0");
                      }}
                    >
                      Norton Commander
                    </WebDirectoryLink>
                    <WebDirectoryDescription>
                      Dual-pane ortholinear file management for MS-DOS workstations.
                    </WebDirectoryDescription>
                  </WebDirectoryItem>
                  <WebDirectoryItem>
                    <WebDirectoryLink
                      onClick={(e) => {
                        e.preventDefault();
                        state.setWebDirectoryLastClicked("PKUNZIP Archive Extractor");
                      }}
                    >
                      PKUNZIP 2.04g
                    </WebDirectoryLink>
                    <WebDirectoryDescription>
                      Standard file compression utility for BBS downloads.
                    </WebDirectoryDescription>
                  </WebDirectoryItem>
                </WebDirectoryList>
                <WebDirectorySubcategories>
                  <span>Subcategories:</span>
                  <a
                    href="#pascal"
                    onClick={(e) => {
                      e.preventDefault();
                      state.setWebDirectoryLastClicked("Turbo Pascal 7.0");
                    }}
                    className="underline text-primary hover:text-accent"
                  >
                    Pascal (2)
                  </a>
                  <a
                    href="#assembler"
                    onClick={(e) => {
                      e.preventDefault();
                      state.setWebDirectoryLastClicked("TASM Assembler");
                    }}
                    className="underline text-primary hover:text-accent"
                  >
                    Assembly (8)
                  </a>
                </WebDirectorySubcategories>
              </WebDirectoryCategory>

              <WebDirectoryCategory>
                <WebDirectoryTitle count={5} icon="📡">
                  Telecommunications
                </WebDirectoryTitle>
                <WebDirectoryList>
                  <WebDirectoryItem>
                    <WebDirectoryLink
                      isNew
                      onClick={(e) => {
                        e.preventDefault();
                        state.setWebDirectoryLastClicked("FidoNet Zone 1 Gateway");
                      }}
                    >
                      FidoNet Zone 1
                    </WebDirectoryLink>
                    <WebDirectoryDescription>
                      Worldwide store-and-forward bulletin board network.
                    </WebDirectoryDescription>
                  </WebDirectoryItem>
                  <WebDirectoryItem>
                    <WebDirectoryLink
                      onClick={(e) => {
                        e.preventDefault();
                        state.setWebDirectoryLastClicked("IRC EFnet #cyber");
                      }}
                    >
                      IRC EFnet #cyber
                    </WebDirectoryLink>
                    <WebDirectoryDescription>
                      Global real-time chat protocol and multiplayer client networks.
                    </WebDirectoryDescription>
                  </WebDirectoryItem>
                </WebDirectoryList>
                <WebDirectorySubcategories>
                  <span>Subcategories:</span>
                  <a
                    href="#usenet"
                    onClick={(e) => {
                      e.preventDefault();
                      state.setWebDirectoryLastClicked("Usenet comp.sys");
                    }}
                    className="underline text-primary hover:text-accent"
                  >
                    Usenet (14)
                  </a>
                </WebDirectorySubcategories>
              </WebDirectoryCategory>
            </WebDirectoryGrid>

            <div className="bevel-inset bg-background p-2 text-center text-xs font-mono">
              <span className="text-muted-foreground">ACTIVE LINK TARGET: </span>
              <span className="font-bold text-foreground">{state.webDirectoryLastClicked}</span>
            </div>
          </WebDirectory>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Grid Columns:</span>
            {([1, 2, 3] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => state.setWebDirectoryCols(c)}
                className={`px-2 py-0.5 uppercase ${
                  state.webDirectoryCols === c ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {c} Col{c > 1 ? "s" : ""}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Early web portal categorized link directory in the classic Yahoo! / DMOZ hierarchy format.
          </span>
        </div>
      );

    case "window-titlebar":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-4 w-full space-y-3">
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
              TITLEBAR STRIP PREVIEW
            </div>

            <WindowTitleBar active={state.windowActive} className="w-full">
              <WindowIcon icon={<span>📂</span>} />
              <WindowTitle>C:\DOS\DRIVERS\SOUND16.SYS</WindowTitle>
              <WindowControls
                isMaximized={state.windowControlsMaximized}
                onMinimize={() => state.setWindowControlsLastClicked("Minimize Titlebar")}
                onMaximize={() => {
                  state.setWindowControlsMaximized(!state.windowControlsMaximized);
                  state.setWindowControlsLastClicked("Maximize Titlebar");
                }}
                onClose={() => state.setWindowControlsLastClicked("Close Titlebar")}
              />
            </WindowTitleBar>

            <div className="bevel-inset bg-background p-3 text-xs font-mono text-muted-foreground">
              Window title bars convey window focus hierarchy with primary high-contrast highlight when active and muted grey when inactive.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.windowActive ? "primary" : "outline"}
              onClick={() => state.setWindowActive(!state.windowActive)}
            >
              {state.windowActive ? "Focus: ACTIVE (Primary)" : "Focus: INACTIVE (Muted)"}
            </Button>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Classic application window title bar strip with active/inactive visual contrast and embedded controls.
          </span>
        </div>
      );

    case "window-controls":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <div className="bevel-raised bg-surface p-5 flex flex-col items-center gap-4 w-full">
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
              WINDOW MANAGEMENT BUTTONS
            </div>

            <div className="flex items-center justify-between w-full p-2 bevel-inset bg-primary text-primary-foreground font-mono text-xs">
              <span className="font-bold">DEMO_WINDOW.EXE</span>
              <WindowControls
                disabled={state.windowControlsDisabled}
                isMaximized={state.windowControlsMaximized}
                showHelp={true}
                onHelp={() => state.setWindowControlsLastClicked("Help (? clicked)")}
                onMinimize={() => state.setWindowControlsLastClicked("Minimize (_ clicked)")}
                onMaximize={() => {
                  state.setWindowControlsMaximized(!state.windowControlsMaximized);
                  state.setWindowControlsLastClicked(state.windowControlsMaximized ? "Restore (□ clicked)" : "Maximize (□ clicked)");
                }}
                onClose={() => state.setWindowControlsLastClicked("Close (✕ clicked)")}
              />
            </div>

            <div className="grid grid-cols-5 gap-3 items-center justify-items-center pt-2">
              <div className="flex flex-col items-center gap-1">
                <WindowControl variant="minimize" onClick={() => state.setWindowControlsLastClicked("Minimize Button")} />
                <span className="text-[9px] text-muted-foreground font-mono">Min</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <WindowControl variant="maximize" onClick={() => state.setWindowControlsLastClicked("Maximize Button")} />
                <span className="text-[9px] text-muted-foreground font-mono">Max</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <WindowControl variant="restore" onClick={() => state.setWindowControlsLastClicked("Restore Button")} />
                <span className="text-[9px] text-muted-foreground font-mono">Restore</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <WindowControl variant="close" onClick={() => state.setWindowControlsLastClicked("Close Button")} />
                <span className="text-[9px] text-muted-foreground font-mono">Close</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <WindowControl variant="help" onClick={() => state.setWindowControlsLastClicked("Help Button")} />
                <span className="text-[9px] text-muted-foreground font-mono">Help</span>
              </div>
            </div>

            <div className="bevel-inset bg-background p-2 w-full text-center text-xs font-mono">
              <span className="text-muted-foreground">LAST BUTTON ACTION: </span>
              <span className="font-bold text-foreground">{state.windowControlsLastClicked}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.windowControlsMaximized ? "primary" : "outline"}
              onClick={() => state.setWindowControlsMaximized(!state.windowControlsMaximized)}
            >
              {state.windowControlsMaximized ? "State: Maximized" : "State: Windowed"}
            </Button>
            <Button
              size="sm"
              variant={state.windowControlsDisabled ? "primary" : "outline"}
              onClick={() => state.setWindowControlsDisabled(!state.windowControlsDisabled)}
            >
              {state.windowControlsDisabled ? "Disabled: ON" : "Disabled: OFF"}
            </Button>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            The trio of minimize, maximize/restore, and close buttons with tactile bevel press states.
          </span>
        </div>
      );

    case "taskbar":
      return (
        <div className="flex flex-col items-center gap-5 w-full max-w-xl">
          <div className="w-full bevel-inset bg-surface/50 p-4 min-h-[160px] flex flex-col justify-between">
            <div className="text-xs font-mono text-muted-foreground text-center pt-2">
              Workstation Canvas (Taskbar docked at bottom)
            </div>

            <Taskbar className="w-full">
              <TaskbarStart
                active={state.taskbarStartActive}
                onClick={() => state.setTaskbarStartActive(!state.taskbarStartActive)}
              >
                Start
              </TaskbarStart>

              <TaskbarTasks>
                {(["Notepad", "Paint", "Terminal"] as const).map((task) => (
                  <TaskbarTask
                    key={task}
                    active={state.taskbarActiveTask === task}
                    onClick={() => state.setTaskbarActiveTask(task)}
                    icon={<span>{task === "Notepad" ? "📝" : task === "Paint" ? "🎨" : "💻"}</span>}
                  >
                    {task}
                  </TaskbarTask>
                ))}
              </TaskbarTasks>

              <TaskbarStatus>
                <span className="text-[10px]" aria-hidden="true">🔊</span>
                <span className="text-[10px]" aria-hidden="true">⚡</span>
                <TaskbarClock />
              </TaskbarStatus>
            </Taskbar>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.taskbarStartActive ? "primary" : "outline"}
              onClick={() => state.setTaskbarStartActive(!state.taskbarStartActive)}
            >
              {state.taskbarStartActive ? "Start Menu: OPEN" : "Start Menu: CLOSED"}
            </Button>

            <span className="text-muted-foreground ml-2">Active Task:</span>
            {(["Notepad", "Paint", "Terminal"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => state.setTaskbarActiveTask(t)}
                className={`px-2 py-0.5 uppercase ${
                  state.taskbarActiveTask === t ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Bottom application dock with Start button trigger, running tasks, and digital system tray clock.
          </span>
        </div>
      );

    case "desktop":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-xl">
          <Desktop
            wallpaper={state.desktopWallpaper}
            className="w-full min-h-[320px] rounded-none"
          >
            <DesktopIconGrid>
              <DesktopIcon
                label="My Computer"
                selected={state.desktopSelectedIcon === "computer"}
                icon={<span>🖥️</span>}
                onClick={() => state.desktopSelectedIcon === "computer" ? state.setDesktopLaunchedApp("My Computer") : state.setDesktopSelectedIcon("computer")}
                onOpen={() => state.setDesktopLaunchedApp("My Computer")}
              />
              <DesktopIcon
                label="Recycle Bin"
                selected={state.desktopSelectedIcon === "recycle"}
                icon={<span>🗑️</span>}
                onClick={() => state.desktopSelectedIcon === "recycle" ? state.setDesktopLaunchedApp("Recycle Bin") : state.setDesktopSelectedIcon("recycle")}
                onOpen={() => state.setDesktopLaunchedApp("Recycle Bin")}
              />
              <DesktopIcon
                label="BBS Terminal"
                selected={state.desktopSelectedIcon === "bbs"}
                icon={<span>📡</span>}
                onClick={() => state.desktopSelectedIcon === "bbs" ? state.setDesktopLaunchedApp("BBS Terminal") : state.setDesktopSelectedIcon("bbs")}
                onOpen={() => state.setDesktopLaunchedApp("BBS Terminal")}
              />
              <DesktopIcon
                label="Pixel Paint"
                selected={state.desktopSelectedIcon === "paint"}
                icon={<span>🎨</span>}
                onClick={() => state.desktopSelectedIcon === "paint" ? state.setDesktopLaunchedApp("Pixel Paint") : state.setDesktopSelectedIcon("paint")}
                onOpen={() => state.setDesktopLaunchedApp("Pixel Paint")}
              />
            </DesktopIconGrid>

            <div className="p-2 bevel-inset bg-background/80 text-center text-xs font-mono mx-4 mb-2">
              <span className="text-muted-foreground">ACTIVE WORKSPACE APP: </span>
              <span className="font-bold text-foreground uppercase">{state.desktopLaunchedApp}</span>
            </div>

            <Taskbar>
              <TaskbarStart active={false}>Start</TaskbarStart>
              <TaskbarTasks>
                <TaskbarTask active>{state.desktopLaunchedApp}</TaskbarTask>
              </TaskbarTasks>
              <TaskbarStatus>
                <TaskbarClock />
              </TaskbarStatus>
            </Taskbar>
          </Desktop>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <span className="text-muted-foreground">Wallpaper:</span>
            {(["dither", "teal", "solid", "grid"] as const).map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => state.setDesktopWallpaper(w)}
                className={`px-2 py-0.5 uppercase ${
                  state.desktopWallpaper === w ? "bevel-inset bg-primary text-primary-foreground font-bold" : "bevel-raised"
                }`}
              >
                {w}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Full desktop workspace canvas with selectable icon grid, wallpaper patterns, and bottom taskbar.
          </span>
        </div>
      );

    case "bitmap-canvas":
      return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="bevel-raised bg-surface p-5 flex flex-col items-center gap-4 w-full">
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
              16×16 RETRO PIXEL PAINT CANVAS
            </div>

            <BitmapCanvas
              key={state.bitmapCanvasKey}
              width={16}
              height={16}
              pixelSize={14}
              grid={state.bitmapCanvasGrid}
              interactive={true}
              activeColor={state.bitmapCanvasColor}
              alt="16x16 Interactive Bitmap Canvas"
            />

            {/* Vintage Palette Picker */}
            <div className="flex flex-col items-center gap-2 w-full pt-1">
              <div className="text-[10px] text-muted-foreground font-mono uppercase">
                ACTIVE COLOR: <span className="font-bold text-foreground">{state.bitmapCanvasColor}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {DEFAULT_RETRO_PALETTE.map((color) => (
                  <button
                    key={color}
                    type="button"
                    aria-label={`Select color ${color}`}
                    onClick={() => state.setBitmapCanvasColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-6 h-6 border-2 transition-transform cursor-pointer ${
                      state.bitmapCanvasColor === color
                        ? "border-primary scale-110 shadow-hard-sm ring-2 ring-primary/40"
                        : "border-border hover:scale-105"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border w-full justify-center text-[11px]">
            <Button
              size="sm"
              variant={state.bitmapCanvasGrid ? "primary" : "outline"}
              onClick={() => state.setBitmapCanvasGrid(!state.bitmapCanvasGrid)}
            >
              {state.bitmapCanvasGrid ? "Grid: ON" : "Grid: OFF"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => state.setBitmapCanvasKey((k) => k + 1)}
            >
              Clear Canvas
            </Button>
          </div>

          <span className="text-[10px] text-muted-foreground text-center">
            Interactive pixel paint canvas primitive supporting mouse/keyboard painting and retro 16-color palettes.
          </span>
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
