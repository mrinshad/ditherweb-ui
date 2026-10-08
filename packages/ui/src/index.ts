// ============================================================================
// @ditherweb/ui — Public Component Exports
// ============================================================================

// --- Phase 2: Foundational Primitives ---
export { Button, type ButtonProps } from "./components/button";
export { Input, type InputProps } from "./components/input";
export { Label, type LabelProps } from "./components/label";
export { Checkbox, type CheckboxProps } from "./components/checkbox";
export { Radio, type RadioProps } from "./components/radio";
export { Switch, type SwitchProps } from "./components/switch";
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  type CardProps,
  type CardHeaderProps,
  type CardTitleProps,
  type CardDescriptionProps,
  type CardContentProps,
  type CardFooterProps,
} from "./components/card";
export { Badge, type BadgeProps } from "./components/badge";
export {
  Alert,
  AlertTitle,
  AlertDescription,
  type AlertProps,
  type AlertTitleProps,
  type AlertDescriptionProps,
} from "./components/alert";
export { Separator, type SeparatorProps } from "./components/separator";

// --- Phase 3A: Typography Primitives ---
export {
  Heading,
  type HeadingProps,
  type HeadingLevel,
  type HeadingSize,
} from "./components/heading";
export {
  Text,
  type TextProps,
  type TextElement,
  type TextSize,
  type TextWeight,
  type TextVariant,
} from "./components/text";
export {
  Link,
  type LinkProps,
  type LinkVariant,
} from "./components/link";
export { Code, type CodeProps } from "./components/code";
export { Kbd, type KbdProps } from "./components/kbd";
export { Blockquote, type BlockquoteProps } from "./components/blockquote";
export {
  List,
  ListItem,
  type ListProps,
  type ListItemProps,
  type ListType,
  type ListVariant,
} from "./components/list";

// --- Phase 3A: Layout Primitives ---
export {
  Container,
  type ContainerProps,
  type ContainerSize,
} from "./components/container";
export {
  Box,
  type BoxProps,
  type BoxElement,
} from "./components/box";
export {
  Stack,
  type StackProps,
  type StackDirection,
  type StackGap,
  type StackAlign,
  type StackJustify,
} from "./components/stack";
export {
  Flex,
  type FlexProps,
  type FlexDirection,
  type FlexWrap,
  type FlexGap,
  type FlexAlign,
  type FlexJustify,
} from "./components/flex";
export {
  Grid,
  type GridProps,
  type GridColumns,
  type GridGap,
  type GridAlign,
} from "./components/grid";
export {
  Spacer,
  type SpacerProps,
  type SpacerSize,
} from "./components/spacer";
export {
  AspectRatio,
  type AspectRatioProps,
} from "./components/aspect-ratio";
export {
  ScrollArea,
  type ScrollAreaProps,
  type ScrollAreaOrientation,
} from "./components/scroll-area";

// --- Phase 3B: Forms & Selection Primitives ---
export { Textarea, type TextareaProps } from "./components/textarea";
export {
  PasswordInput,
  type PasswordInputProps,
} from "./components/password-input";
export {
  SearchInput,
  type SearchInputProps,
} from "./components/search-input";
export {
  NumberInput,
  type NumberInputProps,
} from "./components/number-input";
export { Select, type SelectProps } from "./components/select";
export { Slider, type SliderProps } from "./components/slider";
export { Toggle, type ToggleProps } from "./components/toggle";
export {
  ToggleGroup,
  ToggleGroupItem,
  type ToggleGroupProps,
  type ToggleGroupItemProps,
  type ToggleGroupSingleProps,
  type ToggleGroupMultipleProps,
} from "./components/toggle-group";
export {
  Combobox,
  type ComboboxProps,
  type ComboboxOption,
} from "./components/combobox";
export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  useFieldContext,
  type FieldProps,
  type FieldLabelProps,
  type FieldDescriptionProps,
  type FieldErrorProps,
} from "./components/field";

// --- Phase 3C: Surfaces & Feedback Primitives ---
export {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
  PanelContent,
  PanelFooter,
  type PanelProps,
  type PanelHeaderProps,
  type PanelTitleProps,
  type PanelDescriptionProps,
  type PanelContentProps,
  type PanelFooterProps,
} from "./components/panel";
export {
  GroupBox,
  GroupBoxLegend,
  type GroupBoxProps,
  type GroupBoxLegendProps,
} from "./components/group-box";
export { Well, type WellProps } from "./components/well";
export { Inset, type InsetProps } from "./components/inset";
export { Progress, type ProgressProps } from "./components/progress";
export { Spinner, type SpinnerProps } from "./components/spinner";
export { Skeleton, type SkeletonProps } from "./components/skeleton";
export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
  type EmptyStateProps,
  type EmptyStateIconProps,
  type EmptyStateTitleProps,
  type EmptyStateDescriptionProps,
  type EmptyStateActionProps,
} from "./components/empty-state";
export {
  Result,
  ResultTitle,
  ResultDescription,
  ResultAction,
  type ResultProps,
  type ResultVariant,
  type ResultTitleProps,
  type ResultDescriptionProps,
  type ResultActionProps,
} from "./components/result";
export { Loading, type LoadingProps } from "./components/loading";

// --- Overlays & Layered Interaction Primitives ---
export { Portal, type PortalProps } from "./components/portal";
export {
  Backdrop,
  type BackdropProps,
  type BackdropVariant,
} from "./components/backdrop";
export { Overlay, type OverlayProps } from "./components/overlay";
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
  type DialogProps,
  type DialogTriggerProps,
  type DialogContentProps,
  type DialogHeaderProps,
  type DialogTitleProps,
  type DialogDescriptionProps,
  type DialogBodyProps,
  type DialogFooterProps,
  type DialogCloseProps,
} from "./components/dialog";
export {
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
  type AlertDialogProps,
  type AlertDialogTriggerProps,
  type AlertDialogContentProps,
  type AlertDialogHeaderProps,
  type AlertDialogTitleProps,
  type AlertDialogDescriptionProps,
  type AlertDialogBodyProps,
  type AlertDialogFooterProps,
  type AlertDialogActionProps,
  type AlertDialogCancelProps,
} from "./components/alert-dialog";
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  type PopoverProps,
  type PopoverTriggerProps,
  type PopoverContentProps,
  type PopoverCloseProps,
} from "./components/popover";
export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  type TooltipProviderProps,
  type TooltipProps,
  type TooltipTriggerProps,
  type TooltipContentProps,
} from "./components/tooltip";
export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  type HoverCardProps,
  type HoverCardTriggerProps,
  type HoverCardContentProps,
} from "./components/hover-card";
export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
  type DrawerProps,
  type DrawerTriggerProps,
  type DrawerContentProps,
  type DrawerHeaderProps,
  type DrawerTitleProps,
  type DrawerDescriptionProps,
  type DrawerBodyProps,
  type DrawerFooterProps,
  type DrawerCloseProps,
  type DrawerSide,
} from "./components/drawer";
export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
  SheetClose,
  type SheetProps,
  type SheetTriggerProps,
  type SheetContentProps,
  type SheetHeaderProps,
  type SheetTitleProps,
  type SheetDescriptionProps,
  type SheetBodyProps,
  type SheetFooterProps,
  type SheetCloseProps,
  type SheetSide,
} from "./components/sheet";

// --- Phase 3E: Navigation Primitives ---
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentProps,
  type TabsOrientation,
  type TabsActivationMode,
} from "./components/tabs";
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  type BreadcrumbProps,
  type BreadcrumbListProps,
  type BreadcrumbItemProps,
  type BreadcrumbLinkProps,
  type BreadcrumbPageProps,
  type BreadcrumbSeparatorProps,
  type BreadcrumbEllipsisProps,
} from "./components/breadcrumb";
export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  type PaginationProps,
  type PaginationContentProps,
  type PaginationItemProps,
  type PaginationLinkProps,
  type PaginationPreviousProps,
  type PaginationNextProps,
  type PaginationEllipsisProps,
} from "./components/pagination";
export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  type NavigationMenuProps,
  type NavigationMenuListProps,
  type NavigationMenuItemProps,
  type NavigationMenuLinkProps,
  type NavigationMenuTriggerProps,
  type NavigationMenuContentProps,
} from "./components/navigation-menu";
export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarSubmenu,
  SidebarFooter,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
  type SidebarProviderProps,
  type SidebarProps,
  type SidebarHeaderProps,
  type SidebarContentProps,
  type SidebarGroupProps,
  type SidebarGroupLabelProps,
  type SidebarItemProps,
  type SidebarSubmenuProps,
  type SidebarFooterProps,
  type SidebarRailProps,
  type SidebarTriggerProps,
  type SidebarState,
  type SidebarContextValue,
} from "./components/sidebar";
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioItem,
  type MenubarProps,
  type MenubarMenuProps,
  type MenubarTriggerProps,
  type MenubarContentProps,
  type MenubarItemProps,
  type MenubarSeparatorProps,
  type MenubarShortcutProps,
  type MenubarCheckboxItemProps,
  type MenubarRadioItemProps,
} from "./components/menubar";

// --- Phase 3E: Data & Structured Content Primitives ---
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  type TableProps,
  type TableHeaderProps,
  type TableBodyProps,
  type TableFooterProps,
  type TableRowProps,
  type TableHeadProps,
  type TableCellProps,
  type TableCaptionProps,
} from "./components/table";
export {
  DataTable,
  type DataTableProps,
  type DataTableColumn,
  type SortDirection,
} from "./components/data-table";
export {
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
  type DescriptionListProps,
  type DescriptionItemProps,
  type DescriptionTermProps,
  type DescriptionDetailsProps,
  type DescriptionListLayout,
} from "./components/description-list";
export {
  Tree,
  TreeNode,
  type TreeProps,
  type TreeNodeProps,
  type TreeNodeData,
} from "./components/tree";
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  type AvatarProps,
  type AvatarImageProps,
  type AvatarFallbackProps,
  type AvatarBadgeProps,
  type AvatarSize,
  type AvatarShape,
  type AvatarStatus,
} from "./components/avatar";

// --- Phase 4: Classic Web Primitives ---
export {
  WebRing,
  WebRingHeader,
  WebRingTitle,
  WebRingSite,
  WebRingNavigation,
  WebRingLink,
  type WebRingProps,
  type WebRingHeaderProps,
  type WebRingTitleProps,
  type WebRingSiteProps,
  type WebRingNavigationProps,
  type WebRingLinkProps,
} from "./components/web-ring";

export {
  Guestbook,
  GuestbookHeader,
  GuestbookTitle,
  GuestbookEntryList,
  GuestbookEntry,
  GuestbookEmpty,
  GuestbookFooter,
  type GuestbookProps,
  type GuestbookHeaderProps,
  type GuestbookTitleProps,
  type GuestbookEntryListProps,
  type GuestbookEntryProps,
  type GuestbookEmptyProps,
  type GuestbookFooterProps,
} from "./components/guestbook";

export {
  VisitorCounter,
  type VisitorCounterProps,
} from "./components/visitor-counter";

export {
  UnderConstruction,
  UnderConstructionIcon,
  UnderConstructionTitle,
  UnderConstructionMessage,
  UnderConstructionEstimatedDate,
  UnderConstructionAction,
  type UnderConstructionProps,
  type UnderConstructionIconProps,
  type UnderConstructionTitleProps,
  type UnderConstructionMessageProps,
  type UnderConstructionEstimatedDateProps,
  type UnderConstructionActionProps,
} from "./components/under-construction";

export {
  Marquee,
  type MarqueeProps,
} from "./components/marquee";

export {
  Blink,
  type BlinkProps,
} from "./components/blink";

export {
  Button88x31,
  type Button88x31Props,
} from "./components/button-88x31";

export {
  RetroBanner,
  RetroBannerTitle,
  RetroBannerSubtitle,
  RetroBannerAction,
  type RetroBannerProps,
  type RetroBannerTitleProps,
  type RetroBannerSubtitleProps,
  type RetroBannerActionProps,
} from "./components/retro-banner";

export {
  PixelImage,
  type PixelImageProps,
} from "./components/pixel-image";

export {
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
  type WebDirectoryProps,
  type WebDirectoryHeaderProps,
  type WebDirectoryGridProps,
  type WebDirectoryCategoryProps,
  type WebDirectoryTitleProps,
  type WebDirectoryListProps,
  type WebDirectoryItemProps,
  type WebDirectoryLinkProps,
  type WebDirectoryDescriptionProps,
  type WebDirectorySubcategoriesProps,
} from "./components/web-directory";

// --- Phase 5: Desktop & Pixel Primitives ---
export {
  Window,
  WindowContent,
  WindowFooter,
  WindowStatusBar,
  WindowStatusItem,
  type WindowProps,
  type WindowContentProps,
  type WindowFooterProps,
  type WindowStatusBarProps,
  type WindowStatusItemProps,
} from "./components/window";

export {
  WindowTitleBar,
  WindowTitle,
  WindowIcon,
  type WindowTitleBarProps,
  type WindowTitleProps,
  type WindowIconProps,
} from "./components/window-titlebar";

export {
  WindowControls,
  WindowControl,
  type WindowControlsProps,
  type WindowControlProps,
} from "./components/window-controls";

export {
  Taskbar,
  TaskbarStart,
  TaskbarTasks,
  TaskbarTask,
  TaskbarStatus,
  TaskbarClock,
  type TaskbarProps,
  type TaskbarStartProps,
  type TaskbarTasksProps,
  type TaskbarTaskProps,
  type TaskbarStatusProps,
  type TaskbarClockProps,
} from "./components/taskbar";

export {
  Menu,
  MenuBar,
  MenuTrigger,
  MenuContent,
  MenuLabel,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuSeparator,
  SubMenu,
  SubMenuTrigger,
  SubMenuContent,
  type MenuProps,
  type MenuBarProps,
  type MenuTriggerProps,
  type MenuContentProps,
  type MenuLabelProps,
  type MenuItemProps,
  type MenuCheckboxItemProps,
  type MenuRadioItemProps,
  type MenuSeparatorProps,
  type SubMenuProps,
  type SubMenuTriggerProps,
  type SubMenuContentProps,
} from "./components/menu";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  type ContextMenuProps,
  type ContextMenuTriggerProps,
  type ContextMenuContentProps,
  type ContextMenuItemProps,
  type ContextMenuSeparatorProps,
  type ContextMenuLabelProps,
} from "./components/context-menu";

export {
  Desktop,
  DesktopIconGrid,
  DesktopIcon,
  type DesktopProps,
  type DesktopIconGridProps,
  type DesktopIconProps,
} from "./components/desktop";

export {
  Terminal,
  TerminalHeader,
  TerminalBody,
  TerminalLine,
  TerminalPrompt,
  TerminalCommand,
  TerminalOutput,
  TerminalCursor,
  type TerminalProps,
  type TerminalHeaderProps,
  type TerminalBodyProps,
  type TerminalLineProps,
  type TerminalPromptProps,
  type TerminalCommandProps,
  type TerminalOutputProps,
  type TerminalCursorProps,
} from "./components/terminal";

export {
  PixelArt,
  type PixelArtProps,
} from "./components/pixel-art";

export {
  BitmapCanvas,
  DEFAULT_RETRO_PALETTE,
  type BitmapCanvasProps,
} from "./components/bitmap-canvas";

// --- Phase 6: Advanced Effects & Polish Primitives ---
export {
  Dither,
  type DitherProps,
  type DitherPattern,
  type DitherMode,
  type DitherIntensity,
} from "./components/dither";

export {
  Halftone,
  type HalftoneProps,
  type HalftoneDensity,
  type HalftoneSize,
  type HalftoneMode,
} from "./components/halftone";

export {
  Pixelate,
  type PixelateProps,
  type PixelateScale,
  type PixelateRendering,
} from "./components/pixelate";

export {
  Noise,
  type NoiseProps,
  type NoiseIntensity,
  type NoiseMode,
  type NoiseBlendMode,
} from "./components/noise";

export {
  ImageFrame,
  type ImageFrameProps,
  type ImageFrameVariant,
} from "./components/image-frame";

export {
  Scanline,
  type ScanlineProps,
  type ScanlineDensity,
  type ScanlineOrientation,
  type ScanlineMode,
} from "./components/scanline";

export {
  CRT,
  type CRTProps,
  type CRTCurvature,
  type CRTPhosphor,
} from "./components/crt";

export {
  PixelText,
  type PixelTextProps,
  type PixelTextAs,
  type PixelTextSize,
  type PixelTextShadow,
} from "./components/pixel-text";

export {
  Typewriter,
  type TypewriterProps,
  type TypewriterSpeed,
  type TypewriterAs,
} from "./components/typewriter";

export {
  BlinkCursor,
  type BlinkCursorProps,
  type BlinkCursorVariant,
  type BlinkCursorAs,
} from "./components/blink-cursor";

// --- Shared Utilities ---
export { cn } from "./lib/utils";
export {
  lockBodyScroll,
  unlockBodyScroll,
  getOrCreatePortalRoot,
  computeFloatingPosition,
  type OverlaySide,
  type OverlayAlign,
} from "./lib/overlay-utils";
