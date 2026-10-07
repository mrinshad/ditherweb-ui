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


