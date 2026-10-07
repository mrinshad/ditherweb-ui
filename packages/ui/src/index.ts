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

// --- Shared Utilities ---
export { cn } from "./lib/utils";
