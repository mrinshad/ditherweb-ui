import type { PropDefinition } from "@/components/docs/api-table";

export interface ComponentDocEntry {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: "stable";
  importStatement: string;
  usageSnippet: string;
  props: PropDefinition[];
  accessibilityNotes: string[];
  compositionNotes?: string[];
}

export const COMPONENT_DOCS_REGISTRY: Record<string, ComponentDocEntry> = {
  // =========================================================================
  // CORE UI PRIMITIVES
  // =========================================================================
  button: {
    slug: "button",
    name: "Button",
    category: "Core UI",
    description:
      "A tactile interactive button primitive with authentic raised and pressed bevel states, high-contrast focus indicators, and comprehensive variant scaling.",
    status: "stable",
    importStatement: `import { Button } from "@ditherweb/ui";`,
    usageSnippet: `import { Button } from "@ditherweb/ui";

export function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Execute Command</Button>
      <Button variant="outline">Abort</Button>
      <Button variant="destructive" size="sm">Purge</Button>
    </div>
  );
}`,
    props: [
      {
        name: "variant",
        type: '"default" | "primary" | "secondary" | "outline" | "destructive" | "ghost"',
        default: '"default"',
        description: "Visual appearance and bevel color token mapping.",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Padding and font size scaling.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables pointer interaction, applies inset bevel and lowered opacity.",
      },
      {
        name: "asChild",
        type: "boolean",
        default: "false",
        description: "Merges button props onto immediate child element instead of rendering HTML button.",
      },
    ],
    accessibilityNotes: [
      "Renders native <button> element with type='button' by default.",
      "Supports standard keyboard activation via Enter and Space keys.",
      "High-contrast focus ring (.focus-visible:outline-ring) discerns active focus in light and dark modes.",
      "Reflects disabled state with aria-disabled when disabled prop is provided.",
    ],
    compositionNotes: [
      "Use as DialogTrigger or DrawerTrigger using the asChild prop.",
      "Compose inside CardFooter or WindowFooter for standardized action rows.",
    ],
  },

  input: {
    slug: "input",
    name: "Input",
    category: "Core UI",
    description:
      "A sunken tactile text input field simulating classic OS input wells with pixel-perfect borders and invalid validation states.",
    status: "stable",
    importStatement: `import { Input } from "@ditherweb/ui";`,
    usageSnippet: `import { Input, Label } from "@ditherweb/ui";

export function InputDemo() {
  return (
    <div className="space-y-1.5 max-w-sm">
      <Label htmlFor="node-id">Host Node ID</Label>
      <Input id="node-id" placeholder="e.g. 192.168.1.1" />
    </div>
  );
}`,
    props: [
      {
        name: "invalid",
        type: "boolean",
        default: "false",
        description: "Applies high-visibility destructive border and marks input as aria-invalid.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables text entry and applies sunken muted substrate styling.",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Input height and font sizing.",
      },
    ],
    accessibilityNotes: [
      "Native HTML <input> element inherits all HTMLInputElement attributes.",
      "Properly links to <Label> primitives using id and htmlFor attributes.",
      "Sets aria-invalid='true' automatically when invalid={true}.",
    ],
    compositionNotes: [
      "Wrap inside Field along with FieldLabel and FieldError for structured form layouts.",
    ],
  },

  label: {
    slug: "label",
    name: "Label",
    category: "Core UI",
    description:
      "Accessible form label primitive rendered in crisp uppercase monospace typography with required indicator support.",
    status: "stable",
    importStatement: `import { Label } from "@ditherweb/ui";`,
    usageSnippet: `import { Label, Input } from "@ditherweb/ui";

export function LabelDemo() {
  return (
    <div className="space-y-1">
      <Label htmlFor="callsign">Station Callsign</Label>
      <Input id="callsign" defaultValue="K-ROB-95" />
    </div>
  );
}`,
    props: [
      {
        name: "required",
        type: "boolean",
        default: "false",
        description: "Appends high-contrast required asterisk indicator.",
      },
      {
        name: "htmlFor",
        type: "string",
        description: "Target input element ID for screen-reader and pointer association.",
      },
    ],
    accessibilityNotes: [
      "Renders native <label> element providing programmatic label attachment to assistive tech.",
      "Clicking focuses associated target input automatically.",
    ],
  },

  checkbox: {
    slug: "checkbox",
    name: "Checkbox",
    category: "Core UI",
    description:
      "A pixelated square toggle box with tactile inset sunken well and checkmark indicator.",
    status: "stable",
    importStatement: `import { Checkbox } from "@ditherweb/ui";`,
    usageSnippet: `import { Checkbox, Label } from "@ditherweb/ui";

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" defaultChecked />
      <Label htmlFor="terms">Acknowledge Telemetry Protocol</Label>
    </div>
  );
}`,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Controlled checked state boolean.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables interaction and dims appearance.",
      },
    ],
    accessibilityNotes: [
      "Uses native input checkbox with keyboard Space toggle support.",
      "Reflects aria-checked state to accessibility tree.",
    ],
  },

  radio: {
    slug: "radio",
    name: "Radio",
    category: "Core UI",
    description:
      "Circular tactile radio selection control with diamond pixel center for mutually exclusive option groups.",
    status: "stable",
    importStatement: `import { Radio } from "@ditherweb/ui";`,
    usageSnippet: `import { Radio, Label } from "@ditherweb/ui";

export function RadioDemo() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Radio id="vga" name="res" value="vga" defaultChecked />
        <Label htmlFor="vga">VGA 640x480</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="svga" name="res" value="svga" />
        <Label htmlFor="svga">SVGA 800x600</Label>
      </div>
    </div>
  );
}`,
    props: [
      {
        name: "name",
        type: "string",
        required: true,
        description: "Group name grouping mutual radio items.",
      },
      {
        name: "value",
        type: "string",
        required: true,
        description: "Value represented by this option.",
      },
    ],
    accessibilityNotes: [
      "Supports native arrow key navigation between grouped radio items.",
    ],
  },

  switch: {
    slug: "switch",
    name: "Switch",
    category: "Core UI",
    description:
      "A tactile physical rocker switch primitive toggling binary states with embossed indicator track.",
    status: "stable",
    importStatement: `import { Switch } from "@ditherweb/ui";`,
    usageSnippet: `import { Switch, Label } from "@ditherweb/ui";

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="hw-accel" defaultChecked />
      <Label htmlFor="hw-accel">Hardware Acceleration</Label>
    </div>
  );
}`,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Controlled checked state.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables toggle interaction.",
      },
    ],
    accessibilityNotes: [
      "Carries role='switch' with explicit aria-checked attribute.",
      "Activates on Space key press.",
    ],
  },

  card: {
    slug: "card",
    name: "Card",
    category: "Core UI",
    description:
      "A structured content container with raised bevel contour, distinct header, content, and footer sub-components.",
    status: "stable",
    importStatement: `import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@ditherweb/ui";`,
    usageSnippet: `import { Card, CardHeader, CardTitle, CardContent, CardFooter, Button } from "@ditherweb/ui";

export function CardDemo() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>System Diagnostic</CardTitle>
      </CardHeader>
      <CardContent>
        All 16 memory banks report nominal parity.
      </CardContent>
      <CardFooter>
        <Button variant="primary">Run Diagnostic</Button>
      </CardFooter>
    </Card>
  );
}`,
    props: [
      {
        name: "as",
        type: '"div" | "article" | "section"',
        default: '"div"',
        description: "Semantic HTML element rendered as outer container.",
      },
    ],
    accessibilityNotes: [
      "Use as='article' or as='section' when containing self-contained thematic content.",
    ],
  },

  badge: {
    slug: "badge",
    name: "Badge",
    category: "Core UI",
    description:
      "A compact status chip primitive in retro pixel format for annotations, versions, and system indicators.",
    status: "stable",
    importStatement: `import { Badge } from "@ditherweb/ui";`,
    usageSnippet: `import { Badge } from "@ditherweb/ui";

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge variant="primary">ACTIVE</Badge>
      <Badge variant="success">ONLINE</Badge>
      <Badge variant="destructive">HALTED</Badge>
    </div>
  );
}`,
    props: [
      {
        name: "variant",
        type: '"default" | "primary" | "secondary" | "success" | "warning" | "destructive" | "outline"',
        default: '"default"',
        description: "Color token mapping and border treatment.",
      },
    ],
    accessibilityNotes: [
      "Non-interactive annotation chip with high text contrast.",
    ],
  },

  alert: {
    slug: "alert",
    name: "Alert",
    category: "Core UI",
    description:
      "A high-priority notification callout with raised bevel framing and semantic variant status levels.",
    status: "stable",
    importStatement: `import { Alert, AlertTitle, AlertDescription } from "@ditherweb/ui";`,
    usageSnippet: `import { Alert, AlertTitle, AlertDescription } from "@ditherweb/ui";

export function AlertDemo() {
  return (
    <Alert variant="warning">
      <AlertTitle>Carrier Lost</AlertTitle>
      <AlertDescription>
        Serial link interrupted on COM2 port. Reconnecting...
      </AlertDescription>
    </Alert>
  );
}`,
    props: [
      {
        name: "variant",
        type: '"default" | "info" | "success" | "warning" | "destructive"',
        default: '"default"',
        description: "Semantic alert tone and border coloration.",
      },
    ],
    accessibilityNotes: [
      "Carries role='alert' for screen-reader immediate announcement.",
    ],
  },

  separator: {
    slug: "separator",
    name: "Separator",
    category: "Core UI",
    description:
      "A tactile divider primitive implementing classic dual-tone etched grooved line aesthetics.",
    status: "stable",
    importStatement: `import { Separator } from "@ditherweb/ui";`,
    usageSnippet: `import { Separator } from "@ditherweb/ui";

export function SeparatorDemo() {
  return (
    <div className="space-y-4">
      <div>Section Alpha</div>
      <Separator />
      <div>Section Beta</div>
    </div>
  );
}`,
    props: [
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        default: '"horizontal"',
        description: "Divider direction.",
      },
    ],
    accessibilityNotes: [
      "Carries role='separator' with aria-orientation set appropriately.",
    ],
  },

  // =========================================================================
  // OVERLAYS & LAYERS
  // =========================================================================
  dialog: {
    slug: "dialog",
    name: "Dialog",
    category: "Overlays & Layers",
    description:
      "An accessible modal dialog primitive with backdrop scrim, focus trap, Escape key dismissal, and authentic window borders.",
    status: "stable",
    importStatement: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from "@ditherweb/ui";`,
    usageSnippet: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose, Button } from "@ditherweb/ui";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Launch Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hardware Reconfiguration</DialogTitle>
          <DialogDescription>Apply IRQ and DMA channel overrides.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          Confirming will reset current serial buffers.
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Abort</Button>
          </DialogClose>
          <Button variant="primary">Apply Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Callback fired when dialog open state transitions.",
      },
    ],
    accessibilityNotes: [
      "Traps keyboard focus inside dialog while open.",
      "Closes automatically on Escape key press.",
      "Restores focus to trigger element upon closing.",
      "Carries role='dialog' and links aria-labelledby to DialogTitle.",
    ],
  },

  "alert-dialog": {
    slug: "alert-dialog",
    name: "AlertDialog",
    category: "Overlays & Layers",
    description:
      "A high-interruption confirmation overlay requiring explicit user confirmation before executing destructive workflows.",
    status: "stable",
    importStatement: `import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel, Button } from "@ditherweb/ui";`,
    usageSnippet: `import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel, Button } from "@ditherweb/ui";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Format Drive</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Format Fixed Disk C:?</AlertDialogTitle>
          <AlertDialogDescription>
            All data will be permanently purged. This action is irreversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Abort</AlertDialogCancel>
          <AlertDialogAction>Proceed</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state.",
      },
    ],
    accessibilityNotes: [
      "Carries role='alertdialog' for high-priority confirmation.",
      "Traps focus and automatically focuses the cancel button on mount.",
    ],
  },

  popover: {
    slug: "popover",
    name: "Popover",
    category: "Overlays & Layers",
    description:
      "A floating contextual overlay positioned relative to its anchor trigger with outside click dismissal.",
    status: "stable",
    importStatement: `import { Popover, PopoverTrigger, PopoverContent, Button } from "@ditherweb/ui";`,
    usageSnippet: `import { Popover, PopoverTrigger, PopoverContent, Button } from "@ditherweb/ui";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default">Channel Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4 font-mono text-xs space-y-2">
        <div className="font-bold">Baud Rate: 56,000</div>
        <p className="text-muted-foreground">Parity: None, Stop bits: 1</p>
      </PopoverContent>
    </Popover>
  );
}`,
    props: [
      {
        name: "side",
        type: '"top" | "bottom" | "left" | "right"',
        default: '"bottom"',
        description: "Preferred positioning side relative to trigger.",
      },
    ],
    accessibilityNotes: [
      "Closes automatically on Escape or outside click.",
    ],
  },

  tooltip: {
    slug: "tooltip",
    name: "Tooltip",
    category: "Overlays & Layers",
    description:
      "A brief informative popup displayed on pointer hover or keyboard focus.",
    status: "stable",
    importStatement: `import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, Button } from "@ditherweb/ui";`,
    usageSnippet: `import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, Button } from "@ditherweb/ui";

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Help</Button>
        </TooltipTrigger>
        <TooltipContent>Inspect technical memory manual</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
    props: [
      {
        name: "delayDuration",
        type: "number",
        default: "300",
        description: "Hover delay before appearance in milliseconds.",
      },
    ],
    accessibilityNotes: [
      "Triggers on both pointer hover and keyboard focus-visible.",
      "Dismisses on Escape key without moving focus.",
    ],
  },

  "hover-card": {
    slug: "hover-card",
    name: "HoverCard",
    category: "Overlays & Layers",
    description:
      "A richer interactive hover preview card allowing users to preview link metadata or profile statistics.",
    status: "stable",
    importStatement: `import { HoverCard, HoverCardTrigger, HoverCardContent } from "@ditherweb/ui";`,
    usageSnippet: `import { HoverCard, HoverCardTrigger, HoverCardContent, Link } from "@ditherweb/ui";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="#node">@sys_admin</Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 p-3 font-mono text-xs">
        <div className="font-bold">Root Administrator</div>
        <div className="text-muted-foreground">Gateway node manager since 1994.</div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
    props: [],
    accessibilityNotes: [
      "Accessible via keyboard hover or pointer interaction.",
    ],
  },

  drawer: {
    slug: "drawer",
    name: "Drawer",
    category: "Overlays & Layers",
    description:
      "An edge-anchored sliding sheet sliding from the bottom, top, left, or right edge of the viewport.",
    status: "stable",
    importStatement: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerBody, Button } from "@ditherweb/ui";`,
    usageSnippet: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerBody, Button } from "@ditherweb/ui";

export function DrawerDemo() {
  return (
    <Drawer side="bottom">
      <DrawerTrigger asChild>
        <Button variant="primary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>System Control Center</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>Configure display resolutions and raster matrices.</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}`,
    props: [
      {
        name: "side",
        type: '"top" | "bottom" | "left" | "right"',
        default: '"bottom"',
        description: "Edge from which drawer animates into view.",
      },
    ],
    accessibilityNotes: [
      "Traps focus and locks body scrolling while active.",
    ],
  },

  sheet: {
    slug: "sheet",
    name: "Sheet",
    category: "Overlays & Layers",
    description:
      "A side-docked panel overlay sliding from the left or right edge for complex configuration inspectors.",
    status: "stable",
    importStatement: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetBody, Button } from "@ditherweb/ui";`,
    usageSnippet: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetBody, Button } from "@ditherweb/ui";

export function SheetDemo() {
  return (
    <Sheet side="right">
      <SheetTrigger asChild>
        <Button variant="outline">Open Inspector</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Device Inspector</SheetTitle>
        </SheetHeader>
        <SheetBody>Detailed telemetry metrics.</SheetBody>
      </SheetContent>
    </Sheet>
  );
}`,
    props: [
      {
        name: "side",
        type: '"left" | "right"',
        default: '"right"',
        description: "Screen edge anchoring.",
      },
    ],
    accessibilityNotes: ["Esc-dismissable with focus restoration."],
  },

  backdrop: {
    slug: "backdrop",
    name: "Backdrop",
    category: "Overlays & Layers",
    description:
      "A procedural overlay scrim applying Bayer dither matrices or darkened semi-transparent surfaces behind modals.",
    status: "stable",
    importStatement: `import { Backdrop } from "@ditherweb/ui";`,
    usageSnippet: `import { Backdrop } from "@ditherweb/ui";

export function BackdropDemo() {
  return <Backdrop variant="dither" />;
}`,
    props: [
      {
        name: "variant",
        type: '"dark" | "dither" | "blur"',
        default: '"dark"',
        description: "Visual texture pattern applied to backdrop.",
      },
    ],
    accessibilityNotes: ["Aria-hidden container for visual dimming."],
  },

  overlay: {
    slug: "overlay",
    name: "Overlay",
    category: "Overlays & Layers",
    description:
      "A low-level positioning wrapper for floating menus, dropdowns, and dialogs.",
    status: "stable",
    importStatement: `import { Overlay } from "@ditherweb/ui";`,
    usageSnippet: `import { Overlay } from "@ditherweb/ui";

export function OverlayDemo() {
  return <Overlay open={true}>Contained Overlay Content</Overlay>;
}`,
    props: [],
    accessibilityNotes: ["Accessible container for layered UI."],
  },

  portal: {
    slug: "portal",
    name: "Portal",
    category: "Overlays & Layers",
    description:
      "Renders children into document.body to escape parent clipping, overflow, or z-index constraints.",
    status: "stable",
    importStatement: `import { Portal } from "@ditherweb/ui";`,
    usageSnippet: `import { Portal } from "@ditherweb/ui";

export function PortalDemo() {
  return <Portal><div>Mounted into document.body</div></Portal>;
}`,
    props: [],
    accessibilityNotes: ["Maintains React event bubbling hierarchy."],
  },

  // =========================================================================
  // NAVIGATION PRIMITIVES
  // =========================================================================
  tabs: {
    slug: "tabs",
    name: "Tabs",
    category: "Navigation",
    description:
      "A multi-panel tabbed switching interface with tactile folder-tab styling and roving tabindex keyboard navigation.",
    status: "stable",
    importStatement: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@ditherweb/ui";`,
    usageSnippet: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@ditherweb/ui";

export function TabsDemo() {
  return (
    <Tabs defaultValue="status">
      <TabsList>
        <TabsTrigger value="status">Status</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>
      <TabsContent value="status">System operating normally.</TabsContent>
      <TabsContent value="logs">No critical errors reported.</TabsContent>
    </Tabs>
  );
}`,
    props: [
      {
        name: "defaultValue",
        type: "string",
        description: "Initial active tab value when uncontrolled.",
      },
      {
        name: "value",
        type: "string",
        description: "Controlled active tab value.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Callback invoked on active tab switch.",
      },
    ],
    accessibilityNotes: [
      "Implements W3C Tabs design pattern.",
      "Arrow Left / Arrow Right roves focus between tab triggers.",
      "Tab panels carry role='tabpanel' linked to triggers via aria-labelledby.",
    ],
  },

  breadcrumb: {
    slug: "breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    description:
      "Hierarchical trail navigation showing users their current depth within document tree.",
    status: "stable",
    importStatement: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@ditherweb/ui";`,
    usageSnippet: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@ditherweb/ui";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Components</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`,
    props: [],
    accessibilityNotes: ["Uses <nav aria-label='breadcrumb'> landmark."],
  },

  pagination: {
    slug: "pagination",
    name: "Pagination",
    category: "Navigation",
    description:
      "A segmented page navigation bar with previous, next, and indexed page controls.",
    status: "stable",
    importStatement: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@ditherweb/ui";`,
    usageSnippet: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@ditherweb/ui";

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious onClick={() => {}} /></PaginationItem>
        <PaginationItem><PaginationLink isActive onClick={() => {}}>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink onClick={() => {}}>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext onClick={() => {}} /></PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    props: [],
    accessibilityNotes: ["Announces aria-current='page' on active page."],
  },

  "navigation-menu": {
    slug: "navigation-menu",
    name: "NavigationMenu",
    category: "Navigation",
    description:
      "A horizontal top-level site navigation bar with accessible link list structuring.",
    status: "stable",
    importStatement: `import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@ditherweb/ui";`,
    usageSnippet: `import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@ditherweb/ui";

export function NavMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs">Docs</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/components">Catalog</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`,
    props: [],
    accessibilityNotes: ["Structured with semantic <nav> and <ul> landmarks."],
  },

  menubar: {
    slug: "menubar",
    name: "Menubar",
    category: "Navigation",
    description:
      "Classic desktop application top menu bar (File, Edit, View, Help) with cascading flyout submenus.",
    status: "stable",
    importStatement: `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "@ditherweb/ui";`,
    usageSnippet: `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "@ditherweb/ui";

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Session</MenubarItem>
          <MenubarItem>Open File...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`,
    props: [],
    accessibilityNotes: [
      "Keyboard arrow navigation between menubar triggers and items.",
    ],
  },

  sidebar: {
    slug: "sidebar",
    name: "Sidebar",
    category: "Navigation",
    description:
      "A composable, accessible application sidebar navigation system supporting expanded desktop, collapsed rail, and mobile drawer modes.",
    status: "stable",
    importStatement: `import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarFooter,
  SidebarRail,
  SidebarTrigger,
} from "@ditherweb/ui";`,
    usageSnippet: `import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarFooter,
  SidebarRail,
  SidebarTrigger,
} from "@ditherweb/ui";

export function SidebarDemo() {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex h-96 w-full border border-border bg-background">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <span className="font-bold">DitherApp</span>
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarItem href="#dashboard" active>Dashboard</SidebarItem>
              <SidebarItem href="#projects" badge="4">Projects</SidebarItem>
              <SidebarItem href="#settings">Settings</SidebarItem>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <span className="text-muted-foreground">v0.1.0</span>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <main className="flex-1 p-6 font-mono text-xs text-muted-foreground">
          Workspace Main Surface
        </main>
      </div>
    </SidebarProvider>
  );
}`,
    props: [
      {
        name: "collapsible",
        type: '"icon" | "offcanvas" | "none"',
        default: '"icon"',
        description: "Desktop collapsing strategy.",
      },
      {
        name: "side",
        type: '"left" | "right"',
        default: '"left"',
        description: "Docking edge of the viewport.",
      },
    ],
    accessibilityNotes: [
      "W3C Landmark: Renders semantic <aside aria-label='Sidebar navigation'>.",
      "Mobile drawer manages focus trap, body scroll-lock, and Escape dismissal.",
      "Collapsed rail retains accessible names via assistive labels and tooltips.",
    ],
  },

  // =========================================================================
  // DATA & CONTENT PRIMITIVES
  // =========================================================================
  table: {
    slug: "table",
    name: "Table",
    category: "Data & Content",
    description:
      "A structured tabular data presentation primitive with bevel framing, high-contrast column headers, and alternating row treatments.",
    status: "stable",
    importStatement: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@ditherweb/ui";`,
    usageSnippet: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@ditherweb/ui";

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>File</TableHead>
          <TableHead>Size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>COMMAND.COM</TableCell>
          <TableCell>54,645 bytes</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
    props: [],
    accessibilityNotes: [
      "Renders native <table> with proper scope='col' on <TableHead>.",
      "Scrollable container preserves horizontal containment on narrow viewports.",
    ],
  },

  "data-table": {
    slug: "data-table",
    name: "DataTable",
    category: "Data & Content",
    description:
      "A complete data grid primitive featuring column sorting, filtering, and row selection.",
    status: "stable",
    importStatement: `import { DataTable } from "@ditherweb/ui";`,
    usageSnippet: `import { DataTable } from "@ditherweb/ui";

export function DataTableDemo() {
  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Device" },
    { key: "status", header: "Status" },
  ];
  const data = [
    { id: "01", name: "Floppy Drive A:", status: "Ready" },
    { id: "02", name: "Hard Disk C:", status: "Mounted" },
  ];
  return <DataTable columns={columns} data={data} />;
}`,
    props: [
      {
        name: "columns",
        type: "DataTableColumn[]",
        required: true,
        description: "Column definitions array.",
      },
      {
        name: "data",
        type: "any[]",
        required: true,
        description: "Row records array.",
      },
    ],
    accessibilityNotes: ["Interactive header buttons support keyboard sorting."],
  },

  "description-list": {
    slug: "description-list",
    name: "DescriptionList",
    category: "Data & Content",
    description:
      "Semantic definition term and description pair list with tactile separator borders.",
    status: "stable",
    importStatement: `import { DescriptionList, DescriptionItem, DescriptionTerm, DescriptionDetails } from "@ditherweb/ui";`,
    usageSnippet: `import { DescriptionList, DescriptionItem, DescriptionTerm, DescriptionDetails } from "@ditherweb/ui";

export function DescriptionListDemo() {
  return (
    <DescriptionList>
      <DescriptionItem>
        <DescriptionTerm>IRQ 3</DescriptionTerm>
        <DescriptionDetails>COM2 Serial Port</DescriptionDetails>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionTerm>IRQ 4</DescriptionTerm>
        <DescriptionDetails>COM1 Serial Port</DescriptionDetails>
      </DescriptionItem>
    </DescriptionList>
  );
}`,
    props: [],
    accessibilityNotes: ["Renders semantic <dl>, <dt>, and <dd> elements."],
  },

  tree: {
    slug: "tree",
    name: "Tree",
    category: "Data & Content",
    description:
      "A hierarchical directory tree view with expandable folder nodes, pixel folder icons, and keyboard branch navigation.",
    status: "stable",
    importStatement: `import { Tree } from "@ditherweb/ui";`,
    usageSnippet: `import { Tree } from "@ditherweb/ui";

export function TreeDemo() {
  const nodes = [
    {
      id: "c",
      label: "C:\\",
      children: [
        { id: "dos", label: "DOS" },
        { id: "windows", label: "WINDOWS" },
      ],
    },
  ];
  return <Tree data={nodes} />;
}`,
    props: [
      {
        name: "data",
        type: "TreeNodeData[]",
        required: true,
        description: "Hierarchical tree nodes array.",
      },
    ],
    accessibilityNotes: [
      "Arrow Right expands nodes; Arrow Left collapses nodes.",
      "Carries role='tree' with aria-expanded states on parent branches.",
    ],
  },

  avatar: {
    slug: "avatar",
    name: "Avatar",
    category: "Data & Content",
    description:
      "An authentic pixel-framed user avatar primitive with fallback initials and status badges.",
    status: "stable",
    importStatement: `import { Avatar, AvatarFallback, AvatarImage } from "@ditherweb/ui";`,
    usageSnippet: `import { Avatar, AvatarFallback } from "@ditherweb/ui";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarFallback>DW</AvatarFallback>
    </Avatar>
  );
}`,
    props: [
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Pixel square dimensions.",
      },
    ],
    accessibilityNotes: ["Provides fallback text rendering when image fails to load."],
  },

  // =========================================================================
  // CLASSIC WEB PRIMITIVES
  // =========================================================================
  "web-ring": {
    slug: "web-ring",
    name: "WebRing",
    category: "Classic Web",
    description:
      "An authentic 1990s community WebRing navigation bar with Previous, Next, Random, and Hub links.",
    status: "stable",
    importStatement: `import { WebRing } from "@ditherweb/ui";`,
    usageSnippet: `import { WebRing } from "@ditherweb/ui";

export function WebRingDemo() {
  return (
    <WebRing
      currentSite="Retro Computing Archive"
      ringName="Cyberspace 1996 WebRing"
      prevUrl="https://example.com/prev"
      nextUrl="https://example.com/next"
      hubUrl="https://example.com"
    />
  );
}`,
    props: [
      {
        name: "currentSite",
        type: "string",
        description: "Name of the participating website.",
      },
      {
        name: "ringName",
        type: "string",
        default: '"The WebRing"',
        description: "Title of the web ring community.",
      },
      {
        name: "variant",
        type: '"default" | "compact" | "vintage" | "borderless"',
        default: '"default"',
        description: "Visual border and layout styling.",
      },
      {
        name: "prevUrl",
        type: "string",
        description: "URL for the previous web ring site.",
      },
      {
        name: "nextUrl",
        type: "string",
        description: "URL for the next web ring site.",
      },
      {
        name: "hubUrl",
        type: "string",
        description: "URL for the central index/hub of the ring.",
      },
    ],
    accessibilityNotes: ["Structured as an accessible navigation landmark with clear link text."],
  },

  guestbook: {
    slug: "guestbook",
    name: "Guestbook",
    category: "Classic Web",
    description:
      "A nostalgic guestbook interface with entry submissions, timestamps, and signature cards.",
    status: "stable",
    importStatement: `import { Guestbook } from "@ditherweb/ui";`,
    usageSnippet: `import { Guestbook } from "@ditherweb/ui";

export function GuestbookDemo() {
  return <Guestbook />;
}`,
    props: [],
    accessibilityNotes: ["Accessible form inputs for guest submissions."],
  },

  "visitor-counter": {
    slug: "visitor-counter",
    name: "VisitorCounter",
    category: "Classic Web",
    description:
      "An authentic rolling mechanical odometer counter simulating 90s CGI-bin page hit counters.",
    status: "stable",
    importStatement: `import { VisitorCounter } from "@ditherweb/ui";`,
    usageSnippet: `import { VisitorCounter } from "@ditherweb/ui";

export function CounterDemo() {
  return <VisitorCounter value={42013} minDigits={6} />;
}`,
    props: [
      {
        name: "value",
        type: "number",
        required: true,
        description: "Counter integer value.",
      },
      {
        name: "digits",
        type: "number",
        default: "6",
        description: "Total fixed odometer digit cells.",
      },
    ],
    accessibilityNotes: ["Exposes aria-label='Visitor count: [value]'."],
  },

  "under-construction": {
    slug: "under-construction",
    name: "UnderConstruction",
    category: "Classic Web",
    description:
      "The definitive classic Web banner with yellow/black hazard stripes, shovel worker graphics, and estimated date stamps.",
    status: "stable",
    importStatement: `import { UnderConstruction } from "@ditherweb/ui";`,
    usageSnippet: `import { UnderConstruction } from "@ditherweb/ui";

export function UnderConstructionDemo() {
  return (
    <UnderConstruction
      title="PAGE UNDER CONSTRUCTION"
      message="Come back soon for exciting updates!"
    />
  );
}`,
    props: [],
    accessibilityNotes: ["Hazard pattern generated via CSS gradient with high text contrast."],
  },

  marquee: {
    slug: "marquee",
    name: "Marquee",
    category: "Classic Web",
    description:
      "A modern, accessible tribute to the classic HTML <marquee> with pause-on-hover and prefers-reduced-motion honor.",
    status: "stable",
    importStatement: `import { Marquee } from "@ditherweb/ui";`,
    usageSnippet: `import { Marquee } from "@ditherweb/ui";

export function MarqueeDemo() {
  return (
    <Marquee speed="normal">
      WELCOME TO DITHERWEB • RETRO APPEARANCE • MODERN ENGINEERING •
    </Marquee>
  );
}`,
    props: [
      {
        name: "speed",
        type: "number",
        default: "30",
        description: "Scroll rate speed factor.",
      },
      {
        name: "pauseOnHover",
        type: "boolean",
        default: "true",
        description: "Pauses scrolling when pointer hovers over content.",
      },
    ],
    accessibilityNotes: [
      "Automatically disables motion when user prefers reduced motion.",
      "Pause on hover prevents reading disruption.",
    ],
  },

  blink: {
    slug: "blink",
    name: "Blink",
    category: "Classic Web",
    description:
      "A tribute to the infamous Netscape <blink> tag using smooth CSS opacity toggles with reduced motion overrides.",
    status: "stable",
    importStatement: `import { Blink } from "@ditherweb/ui";`,
    usageSnippet: `import { Blink } from "@ditherweb/ui";

export function BlinkDemo() {
  return <Blink className="font-bold text-destructive">NEW!</Blink>;
}`,
    props: [],
    accessibilityNotes: ["Respects prefers-reduced-motion by keeping text visible continuously."],
  },

  "button-88x31": {
    slug: "button-88x31",
    name: "Button88x31",
    category: "Classic Web",
    description:
      "The iconic 88x31 micro-banner button standard of the 90s Web for linking banners and tools.",
    status: "stable",
    importStatement: `import { Button88x31 } from "@ditherweb/ui";`,
    usageSnippet: `import { Button88x31 } from "@ditherweb/ui";

export function Button88x31Demo() {
  return (
    <Button88x31
      href="https://ditherweb.mrinshad.site"
      label="MADE WITH"
      value="DITHERWEB"
    />
  );
}`,
    props: [],
    accessibilityNotes: ["Renders accessible anchor with alt/label text."],
  },

  "retro-banner": {
    slug: "retro-banner",
    name: "RetroBanner",
    category: "Classic Web",
    description:
      "A horizontal promotional header banner with pixel bevel borders and retro badge callouts.",
    status: "stable",
    importStatement: `import { RetroBanner, RetroBannerTitle, RetroBannerSubtitle } from "@ditherweb/ui";`,
    usageSnippet: `import { RetroBanner, RetroBannerTitle, RetroBannerSubtitle } from "@ditherweb/ui";

export function RetroBannerDemo() {
  return (
    <RetroBanner format="standard" variant="dither">
      <RetroBannerTitle>CYBERSPACE EXPLORER</RetroBannerTitle>
      <RetroBannerSubtitle>Best viewed with 1024x768</RetroBannerSubtitle>
    </RetroBanner>
  );
}`,
    props: [],
    accessibilityNotes: ["Proper heading hierarchy inside banner."],
  },

  "pixel-image": {
    slug: "pixel-image",
    name: "PixelImage",
    category: "Classic Web",
    description:
      "An image wrapper with image-rendering: pixelated and crisp edge scaling.",
    status: "stable",
    importStatement: `import { PixelImage } from "@ditherweb/ui";`,
    usageSnippet: `import { PixelImage } from "@ditherweb/ui";

export function PixelImageDemo() {
  return <PixelImage src="/sample.png" alt="Pixel graphic" width={64} height={64} />;
}`,
    props: [],
    accessibilityNotes: ["Requires alt description for screen readers."],
  },

  "web-directory": {
    slug: "web-directory",
    name: "WebDirectory",
    category: "Classic Web",
    description:
      "A classic Yahoo!-style hierarchical link directory category index.",
    status: "stable",
    importStatement: `import { WebDirectory } from "@ditherweb/ui";`,
    usageSnippet: `import { WebDirectory } from "@ditherweb/ui";

export function WebDirectoryDemo() {
  return <WebDirectory />;
}`,
    props: [],
    accessibilityNotes: ["Structured list markup."],
  },

  // =========================================================================
  // DESKTOP & PIXEL PRIMITIVES
  // =========================================================================
  window: {
    slug: "window",
    name: "Window",
    category: "Desktop & Pixel",
    description:
      "Classic desktop application window with title bar, minimize/maximize/close controls, content pane, and status bar.",
    status: "stable",
    importStatement: `import { Window, WindowTitleBar, WindowTitle, WindowControls, WindowContent } from "@ditherweb/ui";`,
    usageSnippet: `import { Window, WindowTitleBar, WindowTitle, WindowControls, WindowContent } from "@ditherweb/ui";

export function WindowDemo() {
  return (
    <Window className="max-w-md">
      <WindowTitleBar>
        <WindowTitle>CALCULATOR.EXE</WindowTitle>
        <WindowControls />
      </WindowTitleBar>
      <WindowContent className="p-4">
        Ready for numerical input.
      </WindowContent>
    </Window>
  );
}`,
    props: [
      {
        name: "active",
        type: "boolean",
        default: "true",
        description: "Toggles active titlebar color vs inactive grey titlebar.",
      },
    ],
    accessibilityNotes: ["Window header identifies application context."],
  },

  "window-titlebar": {
    slug: "window-titlebar",
    name: "WindowTitleBar",
    category: "Desktop & Pixel",
    description:
      "Window titlebar header with gradient or solid accent background, title text, and window control buttons.",
    status: "stable",
    importStatement: `import { WindowTitleBar } from "@ditherweb/ui";`,
    usageSnippet: `import { WindowTitleBar, WindowTitle, WindowControls } from "@ditherweb/ui";

export function TitleBarDemo() {
  return (
    <WindowTitleBar>
      <WindowTitle>DIALUP_CONFIG.EXE</WindowTitle>
      <WindowControls />
    </WindowTitleBar>
  );
}`,
    props: [],
    accessibilityNotes: ["High contrast text on title bar."],
  },

  "window-controls": {
    slug: "window-controls",
    name: "WindowControls",
    category: "Desktop & Pixel",
    description:
      "The trio of minimize (_), maximize (□), and close (✕) window control buttons.",
    status: "stable",
    importStatement: `import { WindowControls } from "@ditherweb/ui";`,
    usageSnippet: `import { WindowControls } from "@ditherweb/ui";

export function ControlsDemo() {
  return <WindowControls onMinimize={() => {}} onClose={() => {}} />;
}`,
    props: [],
    accessibilityNotes: ["Explicit aria-labels on each button."],
  },

  taskbar: {
    slug: "taskbar",
    name: "Taskbar",
    category: "Desktop & Pixel",
    description:
      "Bottom application dock with Start button, active task item buttons, and digital system tray clock.",
    status: "stable",
    importStatement: `import { Taskbar, TaskbarStart, TaskbarTasks, TaskbarTask, TaskbarClock } from "@ditherweb/ui";`,
    usageSnippet: `import { Taskbar, TaskbarStart, TaskbarTasks, TaskbarTask, TaskbarClock } from "@ditherweb/ui";

export function TaskbarDemo() {
  return (
    <Taskbar>
      <TaskbarStart />
      <TaskbarTasks>
        <TaskbarTask active>Notepad</TaskbarTask>
      </TaskbarTasks>
      <TaskbarClock />
    </Taskbar>
  );
}`,
    props: [],
    accessibilityNotes: ["Accessible application task switching bar."],
  },

  menu: {
    slug: "menu",
    name: "Menu",
    category: "Desktop & Pixel",
    description:
      "A retro-styled workstation dropdown flyout menu featuring hard borders, stepped shadow, keyboard arrow navigation, fixed-width indicator gutters, and monochrome inverted video highlights.",
    status: "stable",
    importStatement: `import {
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
} from "@ditherweb/ui";`,
    usageSnippet: `import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuSeparator,
} from "@ditherweb/ui";
import { useState } from "react";

export function MenuDemo() {
  const [showGrid, setShowGrid] = useState(true);
  const [resolution, setResolution] = useState("VGA");

  return (
    <Menu>
      <MenuTrigger className="h-8 px-3 text-xs bevel-raised">
        Options Menu ▾
      </MenuTrigger>
      <MenuContent className="w-56">
        <MenuLabel>Display &amp; View</MenuLabel>
        <MenuCheckboxItem checked={showGrid} onSelect={() => setShowGrid(!showGrid)}>
          Show Grid Lines
        </MenuCheckboxItem>
        <MenuSeparator />
        <MenuLabel>Resolution</MenuLabel>
        <MenuRadioItem checked={resolution === "VGA"} onSelect={() => setResolution("VGA")}>
          640 × 480 VGA
        </MenuRadioItem>
        <MenuRadioItem checked={resolution === "SVGA"} onSelect={() => setResolution("SVGA")}>
          800 × 600 SVGA
        </MenuRadioItem>
        <MenuSeparator />
        <MenuItem shortcut="Ctrl+S">Save Preset</MenuItem>
        <MenuItem disabled>System Reboot (Locked)</MenuItem>
      </MenuContent>
    </Menu>
  );
}`,
    props: [
      {
        name: "align",
        type: '"start" | "end"',
        default: '"start"',
        description: "Alignment edge of the menu content relative to the trigger button.",
      },
    ],
    accessibilityNotes: [
      "Carries role='menu' with role='menuitem', role='menuitemcheckbox', and role='menuitemradio' children.",
      "Supports ArrowDown and ArrowUp keyboard navigation with cyclic wrapping.",
      "Supports Escape key to dismiss menu and restores focus to trigger button.",
      "First enabled item receives auto-focus upon opening.",
    ],
    compositionNotes: [
      "Use MenuTrigger inside headers, taskbars, or filter controls.",
      "Use MenuLabel to organize long command palettes into distinct retro-styled sections.",
      "Compose with SubMenu for cascading workstation utility trees.",
    ],
  },

  "context-menu": {
    slug: "context-menu",
    name: "ContextMenu",
    category: "Desktop & Pixel",
    description:
      "A right-click contextual desktop popup menu with cursor coordinate positioning, viewport collision clamping, and retro styling.",
    status: "stable",
    importStatement: `import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
} from "@ditherweb/ui";`,
    usageSnippet: `import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
} from "@ditherweb/ui";

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full h-32 border-2 border-dashed border-border flex items-center justify-center">
        Right-click this canvas
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuLabel>Canvas Actions</ContextMenuLabel>
        <ContextMenuItem shortcut="Ctrl+R">Refresh Buffer</ContextMenuItem>
        <ContextMenuItem>Invert Palette</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem disabled>Lock Workspace</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
    props: [
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables context menu interception and preserves default browser menu.",
      },
    ],
    accessibilityNotes: [
      "Triggered via onContextMenu or keyboard Shift+F10 / ContextMenu key on focused trigger.",
      "Supports ArrowDown and ArrowUp keyboard navigation with cyclic wrapping.",
      "Supports Escape key to dismiss context menu and restores focus to trigger element.",
    ],
  },

  desktop: {
    slug: "desktop",
    name: "Desktop",
    category: "Desktop & Pixel",
    description:
      "Full desktop workspace canvas with icon grid and taskbar docking.",
    status: "stable",
    importStatement: `import { Desktop } from "@ditherweb/ui";`,
    usageSnippet: `import { Desktop } from "@ditherweb/ui";

export function DesktopDemo() {
  return <Desktop />;
}`,
    props: [],
    accessibilityNotes: ["Maintains accessible tab order across desktop icons."],
  },

  terminal: {
    slug: "terminal",
    name: "Terminal",
    category: "Desktop & Pixel",
    description:
      "An authentic command-line interface terminal window with prompt styling, command history output, and blinking cursor.",
    status: "stable",
    importStatement: `import { Terminal, TerminalHeader, TerminalBody, TerminalLine, TerminalPrompt, TerminalCommand, TerminalOutput } from "@ditherweb/ui";`,
    usageSnippet: `import { Terminal, TerminalHeader, TerminalBody, TerminalLine, TerminalPrompt, TerminalCommand, TerminalOutput } from "@ditherweb/ui";

export function TerminalDemo() {
  return (
    <Terminal title="ditherweb@tty1">
      <TerminalHeader />
      <TerminalBody>
        <TerminalLine>
          <TerminalPrompt>user@gateway:~$</TerminalPrompt>
          <TerminalCommand> ping gateway.local</TerminalCommand>
        </TerminalLine>
        <TerminalLine>
          <TerminalOutput>64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=0.8 ms</TerminalOutput>
        </TerminalLine>
      </TerminalBody>
    </Terminal>
  );
}`,
    props: [
      {
        name: "title",
        type: "string",
        default: '"terminal"',
        description: "Terminal titlebar string.",
      },
    ],
    accessibilityNotes: ["Screen-reader accessible terminal output lines."],
  },

  "pixel-art": {
    slug: "pixel-art",
    name: "PixelArt",
    category: "Desktop & Pixel",
    description:
      "A procedural pixel-grid rendering primitive for rendering bitmap artwork and classic icons without raster scaling artifacts.",
    status: "stable",
    importStatement: `import { PixelArt } from "@ditherweb/ui";`,
    usageSnippet: `import { PixelArt } from "@ditherweb/ui";

export function PixelArtDemo() {
  return (
    <PixelArt
      alt="Floppy Disk Sprite"
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
  );
}`,
    props: [
      {
        name: "alt",
        type: "string",
        required: true,
        description: "Alternative text describing the pixel graphic.",
      },
      {
        name: "frame",
        type: '"none" | "bevel" | "inset" | "pixel" | "double"',
        default: '"pixel"',
        description: "Bevel or decorative border frame variant.",
      },
      {
        name: "scale",
        type: '1 | 2 | 3 | 4 | 8 | "auto"',
        default: '"auto"',
        description: "Integer pixel scaling multiplier.",
      },
      {
        name: "ditherOverlay",
        type: "boolean",
        default: "false",
        description: "Applies subtle Bayer dither texture overlay.",
      },
      {
        name: "caption",
        type: "ReactNode",
        description: "Optional caption annotation displayed beneath the graphic.",
      },
    ],
    accessibilityNotes: ["Requires alt description for screen readers."],
  },

  "bitmap-canvas": {
    slug: "bitmap-canvas",
    name: "BitmapCanvas",
    category: "Desktop & Pixel",
    description:
      "An interactive pixel paint canvas primitive allowing users to paint pixel art with classic 16-color retro palettes.",
    status: "stable",
    importStatement: `import { BitmapCanvas } from "@ditherweb/ui";`,
    usageSnippet: `import { BitmapCanvas } from "@ditherweb/ui";

export function BitmapCanvasDemo() {
  return <BitmapCanvas width={16} height={16} />;
}`,
    props: [],
    accessibilityNotes: ["Keyboard navigable pixel paint controls."],
  },

  // =========================================================================
  // EFFECTS & POLISH PRIMITIVES
  // =========================================================================
  dither: {
    slug: "dither",
    name: "Dither",
    category: "Effects & Polish",
    description:
      "A composable dithering shader treatment for images, surfaces, and compositions using procedural SVG 4x4 Bayer matrices.",
    status: "stable",
    importStatement: `import { Dither } from "@ditherweb/ui";`,
    usageSnippet: `import { Dither } from "@ditherweb/ui";

export function DitherDemo() {
  return (
    <div className="relative h-40 w-full bg-gradient-to-r from-blue-700 to-amber-600">
      <Dither pattern="bayer" intensity="medium" />
    </div>
  );
}`,
    props: [
      {
        name: "pattern",
        type: '"bayer" | "checker" | "fine" | "dense" | "noise"',
        default: '"bayer"',
        description: "Mathematical matrix algorithm used for dithering.",
      },
      {
        name: "intensity",
        type: '"subtle" | "medium" | "strong" | number',
        default: '"medium"',
        description: "Opacity and contrast level of the dither mask.",
      },
      {
        name: "mode",
        type: '"overlay" | "backdrop" | "standalone"',
        default: '"overlay"',
        description: "CSS blend technique applied.",
      },
    ],
    accessibilityNotes: [
      "Purely decorative visual treatment; does not obscure underlying readable text.",
    ],
    compositionNotes: [
      "Combine with ImageFrame or CRT for rich retro compositions.",
    ],
  },

  crt: {
    slug: "crt",
    name: "CRT",
    category: "Effects & Polish",
    description:
      "A cathode-ray tube monitor surface emulation with phosphor tinting (green, amber, mono), subtle screen curvature, and scanlines.",
    status: "stable",
    importStatement: `import { CRT } from "@ditherweb/ui";`,
    usageSnippet: `import { CRT } from "@ditherweb/ui";

export function CRTDemo() {
  return (
    <CRT phosphor="green" curvature="subtle">
      <div className="p-4 font-mono text-xs">
        SYSTEM BOOT READY.<br />
        C:\&gt;
      </div>
    </CRT>
  );
}`,
    props: [
      {
        name: "phosphor",
        type: '"none" | "amber" | "green" | "mono"',
        default: '"green"',
        description: "Monochrome cathode phosphor color tone.",
      },
      {
        name: "curvature",
        type: '"none" | "subtle" | "medium"',
        default: '"subtle"',
        description: "Bulged tube glass barrel distortion intensity.",
      },
      {
        name: "flicker",
        type: "boolean",
        default: "false",
        description: "Subtle refresh rate flicker animation (disabled under prefers-reduced-motion).",
      },
    ],
    accessibilityNotes: [
      "Honors prefers-reduced-motion by disabling any dynamic flicker.",
      "Ensures sufficient text contrast across all phosphor modes.",
    ],
  },

  halftone: {
    slug: "halftone",
    name: "Halftone",
    category: "Effects & Polish",
    description:
      "A print reprographic dot screen filter simulating newsprint halftone dot matrices.",
    status: "stable",
    importStatement: `import { Halftone } from "@ditherweb/ui";`,
    usageSnippet: `import { Halftone } from "@ditherweb/ui";

export function HalftoneDemo() {
  return <Halftone density="medium" size="md" />;
}`,
    props: [
      {
        name: "density",
        type: '"fine" | "medium" | "coarse"',
        default: '"medium"',
        description: "Halftone screen frequency.",
      },
    ],
    accessibilityNotes: ["CSS-first decorative effect."],
  },

  pixelate: {
    slug: "pixelate",
    name: "Pixelate",
    category: "Effects & Polish",
    description:
      "Downsamples child images or graphics into low-resolution mosaic blocks.",
    status: "stable",
    importStatement: `import { Pixelate } from "@ditherweb/ui";`,
    usageSnippet: `import { Pixelate } from "@ditherweb/ui";

export function PixelateDemo() {
  return (
    <Pixelate scale={4}>
      <img src="/photo.jpg" alt="Pixelated preview" />
    </Pixelate>
  );
}`,
    props: [
      {
        name: "scale",
        type: "number",
        default: "4",
        description: "Mosaic pixelation factor.",
      },
    ],
    accessibilityNotes: ["Maintains child element accessibility tree."],
  },

  noise: {
    slug: "noise",
    name: "Noise",
    category: "Effects & Polish",
    description:
      "A static grain texture overlay simulating analog RF video noise and film grain.",
    status: "stable",
    importStatement: `import { Noise } from "@ditherweb/ui";`,
    usageSnippet: `import { Noise } from "@ditherweb/ui";

export function NoiseDemo() {
  return <Noise intensity="subtle" />;
}`,
    props: [],
    accessibilityNotes: ["Low-contrast background texture."],
  },

  "image-frame": {
    slug: "image-frame",
    name: "ImageFrame",
    category: "Effects & Polish",
    description:
      "An authentic retro picture frame with bitmap borders, bevels, or photo matting.",
    status: "stable",
    importStatement: `import { ImageFrame } from "@ditherweb/ui";`,
    usageSnippet: `import { ImageFrame } from "@ditherweb/ui";

export function ImageFrameDemo() {
  return (
    <ImageFrame variant="bitmap">
      <img src="/photo.jpg" alt="Framed artwork" />
    </ImageFrame>
  );
}`,
    props: [],
    accessibilityNotes: ["Framed container preserves image semantics."],
  },

  scanline: {
    slug: "scanline",
    name: "Scanline",
    category: "Effects & Polish",
    description:
      "Horizontal or vertical interlaced raster scanline overlay for monitor interfaces.",
    status: "stable",
    importStatement: `import { Scanline } from "@ditherweb/ui";`,
    usageSnippet: `import { Scanline } from "@ditherweb/ui";

export function ScanlineDemo() {
  return <Scanline density="fine" orientation="horizontal" />;
}`,
    props: [],
    accessibilityNotes: ["Reduced motion compliant."],
  },

  "pixel-text": {
    slug: "pixel-text",
    name: "PixelText",
    category: "Effects & Polish",
    description:
      "A bitmap-style pixel font presentation component with drop shadow emboss effects.",
    status: "stable",
    importStatement: `import { PixelText } from "@ditherweb/ui";`,
    usageSnippet: `import { PixelText } from "@ditherweb/ui";

export function PixelTextDemo() {
  return <PixelText size="xl">GAME OVER</PixelText>;
}`,
    props: [],
    accessibilityNotes: ["Readable monospace font with semantic tag selection."],
  },

  typewriter: {
    slug: "typewriter",
    name: "Typewriter",
    category: "Effects & Polish",
    description:
      "A character-by-character text reveal animation with blinking cursor support.",
    status: "stable",
    importStatement: `import { Typewriter } from "@ditherweb/ui";`,
    usageSnippet: `import { Typewriter } from "@ditherweb/ui";

export function TypewriterDemo() {
  return <Typewriter text="INITIALIZING SYSTEM..." speed="medium" />;
}`,
    props: [],
    accessibilityNotes: ["Full text is rendered in DOM for screen readers."],
  },

  "blink-cursor": {
    slug: "blink-cursor",
    name: "BlinkCursor",
    category: "Effects & Polish",
    description:
      "A classic block, underline, or vertical line blinking terminal cursor.",
    status: "stable",
    importStatement: `import { BlinkCursor } from "@ditherweb/ui";`,
    usageSnippet: `import { BlinkCursor } from "@ditherweb/ui";

export function BlinkCursorDemo() {
  return <span>user@gateway:~$ <BlinkCursor variant="block" /></span>;
}`,
    props: [],
    accessibilityNotes: ["Aria-hidden decorative cursor."],
  },

  // =========================================================================
  // TYPOGRAPHY PRIMITIVES
  // =========================================================================
  heading: {
    slug: "heading",
    name: "Heading",
    category: "Typography",
    description:
      "Semantic heading primitive (h1–h6) with decoupled visual size scaling and uppercase retro font weights.",
    status: "stable",
    importStatement: `import { Heading } from "@ditherweb/ui";`,
    usageSnippet: `import { Heading } from "@ditherweb/ui";

export function HeadingDemo() {
  return (
    <div className="space-y-2">
      <Heading level={1} size="xl">System Architecture</Heading>
      <Heading level={2} size="lg">Subsystem Protocol</Heading>
    </div>
  );
}`,
    props: [
      {
        name: "level",
        type: "1 | 2 | 3 | 4 | 5 | 6",
        default: "1",
        description: "Semantic HTML heading tag (<h1> through <h6>).",
      },
      {
        name: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
        default: '"lg"',
        description: "Visual font size.",
      },
    ],
    accessibilityNotes: ["Maintains strict heading document hierarchy."],
  },

  text: {
    slug: "text",
    name: "Text",
    category: "Typography",
    description:
      "Base paragraph and inline typography primitive with semantic tones, weights, and leading options.",
    status: "stable",
    importStatement: `import { Text } from "@ditherweb/ui";`,
    usageSnippet: `import { Text } from "@ditherweb/ui";

export function TextDemo() {
  return (
    <div className="space-y-2">
      <Text size="base">Standard monospace text line.</Text>
      <Text size="sm" variant="muted">Secondary status annotation.</Text>
    </div>
  );
}`,
    props: [],
    accessibilityNotes: ["High contrast text complying with WCAG AA."],
  },

  link: {
    slug: "link",
    name: "Link",
    category: "Typography",
    description:
      "Underlined retro anchor primitive with external link indicators and focus rings.",
    status: "stable",
    importStatement: `import { Link } from "@ditherweb/ui";`,
    usageSnippet: `import { Link } from "@ditherweb/ui";

export function LinkDemo() {
  return <Link href="/docs" variant="default">Documentation Index</Link>;
}`,
    props: [],
    accessibilityNotes: ["High visibility underline decoration."],
  },

  code: {
    slug: "code",
    name: "Code",
    category: "Typography",
    description:
      "Inline code element with subtle border well and background highlight.",
    status: "stable",
    importStatement: `import { Code } from "@ditherweb/ui";`,
    usageSnippet: `import { Code } from "@ditherweb/ui";

export function CodeDemo() {
  return <p>Execute <Code>CONFIG.SYS</Code> at boot.</p>;
}`,
    props: [],
    accessibilityNotes: ["Renders semantic <code>."],
  },

  kbd: {
    slug: "kbd",
    name: "Kbd",
    category: "Typography",
    description:
      "Keyboard key badge with raised tactile keycap border aesthetics.",
    status: "stable",
    importStatement: `import { Kbd } from "@ditherweb/ui";`,
    usageSnippet: `import { Kbd } from "@ditherweb/ui";

export function KbdDemo() {
  return <span>Press <Kbd>Ctrl</Kbd> + <Kbd>Alt</Kbd> + <Kbd>Del</Kbd></span>;
}`,
    props: [],
    accessibilityNotes: ["Renders semantic <kbd>."],
  },

  blockquote: {
    slug: "blockquote",
    name: "Blockquote",
    category: "Typography",
    description:
      "Editorial quote container with left pixel bar accent and citation footer.",
    status: "stable",
    importStatement: `import { Blockquote } from "@ditherweb/ui";`,
    usageSnippet: `import { Blockquote } from "@ditherweb/ui";

export function BlockquoteDemo() {
  return (
    <Blockquote cite="MS-DOS Technical Reference">
      Conventional memory is capped at 640 KB.
    </Blockquote>
  );
}`,
    props: [],
    accessibilityNotes: ["Renders semantic <blockquote>."],
  },

  list: {
    slug: "list",
    name: "List",
    category: "Typography",
    description:
      "Structured bulleted or numbered list with pixel square bullets.",
    status: "stable",
    importStatement: `import { List, ListItem } from "@ditherweb/ui";`,
    usageSnippet: `import { List, ListItem } from "@ditherweb/ui";

export function ListDemo() {
  return (
    <List variant="pixel">
      <ListItem>HIMEM.SYS</ListItem>
      <ListItem>EMM386.EXE</ListItem>
    </List>
  );
}`,
    props: [],
    accessibilityNotes: ["Semantic <ul> and <li> elements."],
  },

  // =========================================================================
  // LAYOUT PRIMITIVES
  // =========================================================================
  container: {
    slug: "container",
    name: "Container",
    category: "Layout",
    description:
      "Centered content column wrapper with responsive max-width breakpoints.",
    status: "stable",
    importStatement: `import { Container } from "@ditherweb/ui";`,
    usageSnippet: `import { Container } from "@ditherweb/ui";

export function ContainerDemo() {
  return <Container size="md">Contained section</Container>;
}`,
    props: [],
    accessibilityNotes: ["Layout container."],
  },

  box: {
    slug: "box",
    name: "Box",
    category: "Layout",
    description:
      "Polymorphic foundation box component for layout and token application.",
    status: "stable",
    importStatement: `import { Box } from "@ditherweb/ui";`,
    usageSnippet: `import { Box } from "@ditherweb/ui";

export function BoxDemo() {
  return <Box className="bevel-raised p-4">Box layout</Box>;
}`,
    props: [],
    accessibilityNotes: ["Polymorphic box."],
  },

  stack: {
    slug: "stack",
    name: "Stack",
    category: "Layout",
    description:
      "Vertical layout flexbox primitive with consistent gap intervals.",
    status: "stable",
    importStatement: `import { Stack } from "@ditherweb/ui";`,
    usageSnippet: `import { Stack } from "@ditherweb/ui";

export function StackDemo() {
  return <Stack gap="md"><div>Top</div><div>Bottom</div></Stack>;
}`,
    props: [],
    accessibilityNotes: ["Layout container."],
  },

  flex: {
    slug: "flex",
    name: "Flex",
    category: "Layout",
    description:
      "Flexbox utility primitive managing alignment, wrapping, and distribution.",
    status: "stable",
    importStatement: `import { Flex } from "@ditherweb/ui";`,
    usageSnippet: `import { Flex } from "@ditherweb/ui";

export function FlexDemo() {
  return <Flex justify="between"><div>Left</div><div>Right</div></Flex>;
}`,
    props: [],
    accessibilityNotes: ["Layout container."],
  },

  grid: {
    slug: "grid",
    name: "Grid",
    category: "Layout",
    description:
      "CSS Grid primitive with responsive column tracks and gap scales.",
    status: "stable",
    importStatement: `import { Grid } from "@ditherweb/ui";`,
    usageSnippet: `import { Grid } from "@ditherweb/ui";

export function GridDemo() {
  return <Grid columns={3} gap="md"><div>1</div><div>2</div><div>3</div></Grid>;
}`,
    props: [],
    accessibilityNotes: ["Layout container."],
  },

  "aspect-ratio": {
    slug: "aspect-ratio",
    name: "AspectRatio",
    category: "Layout",
    description:
      "Locks child media or canvas elements to fixed proportions such as 4:3 or 16:9.",
    status: "stable",
    importStatement: `import { AspectRatio } from "@ditherweb/ui";`,
    usageSnippet: `import { AspectRatio } from "@ditherweb/ui";

export function AspectRatioDemo() {
  return <AspectRatio ratio={4 / 3}><div>4:3 CRT Display</div></AspectRatio>;
}`,
    props: [],
    accessibilityNotes: ["Layout container."],
  },

  "scroll-area": {
    slug: "scroll-area",
    name: "ScrollArea",
    category: "Layout",
    description:
      "A scrollable container with customized pixelated retro scrollbars.",
    status: "stable",
    importStatement: `import { ScrollArea } from "@ditherweb/ui";`,
    usageSnippet: `import { ScrollArea } from "@ditherweb/ui";

export function ScrollAreaDemo() {
  return <ScrollArea className="h-40">Long scrollable text...</ScrollArea>;
}`,
    props: [],
    accessibilityNotes: ["Keyboard scrollable."],
  },

  spacer: {
    slug: "spacer",
    name: "Spacer",
    category: "Layout",
    description:
      "Calibrated empty spacer block for intentional rhythm and whitespace.",
    status: "stable",
    importStatement: `import { Spacer } from "@ditherweb/ui";`,
    usageSnippet: `import { Spacer } from "@ditherweb/ui";

export function SpacerDemo() {
  return <Spacer size="lg" />;
}`,
    props: [],
    accessibilityNotes: ["Aria-hidden spacer."],
  },

  // =========================================================================
  // FORMS & SELECTION PRIMITIVES
  // =========================================================================
  textarea: {
    slug: "textarea",
    name: "Textarea",
    category: "Forms & Selection",
    description:
      "Multi-line text input with sunken well bevel and monospace font.",
    status: "stable",
    importStatement: `import { Textarea } from "@ditherweb/ui";`,
    usageSnippet: `import { Textarea } from "@ditherweb/ui";

export function TextareaDemo() {
  return <Textarea placeholder="Enter multi-line text..." rows={4} />;
}`,
    props: [],
    accessibilityNotes: ["Standard accessible <textarea>."],
  },

  "password-input": {
    slug: "password-input",
    name: "PasswordInput",
    category: "Forms & Selection",
    description:
      "Masked password input field with reveal toggle button.",
    status: "stable",
    importStatement: `import { PasswordInput } from "@ditherweb/ui";`,
    usageSnippet: `import { PasswordInput } from "@ditherweb/ui";

export function PasswordInputDemo() {
  return <PasswordInput placeholder="Enter password..." />;
}`,
    props: [],
    accessibilityNotes: ["Accessible reveal toggle button."],
  },

  "search-input": {
    slug: "search-input",
    name: "SearchInput",
    category: "Forms & Selection",
    description:
      "Search input with clear button and magnifying glass icon.",
    status: "stable",
    importStatement: `import { SearchInput } from "@ditherweb/ui";`,
    usageSnippet: `import { SearchInput } from "@ditherweb/ui";

export function SearchInputDemo() {
  return <SearchInput placeholder="Search system files..." />;
}`,
    props: [],
    accessibilityNotes: ["Type='search' with Escape clear support."],
  },

  "number-input": {
    slug: "number-input",
    name: "NumberInput",
    category: "Forms & Selection",
    description:
      "Numeric spinner input with tactile increment and decrement stepper buttons.",
    status: "stable",
    importStatement: `import { NumberInput } from "@ditherweb/ui";`,
    usageSnippet: `import { NumberInput } from "@ditherweb/ui";

export function NumberInputDemo() {
  return <NumberInput min={0} max={100} defaultValue={50} />;
}`,
    props: [],
    accessibilityNotes: ["Keyboard arrow key increments/decrements."],
  },

  select: {
    slug: "select",
    name: "Select",
    category: "Forms & Selection",
    description:
      "Tactile dropdown select input with sunken frame and arrow glyph.",
    status: "stable",
    importStatement: `import { Select } from "@ditherweb/ui";`,
    usageSnippet: `import { Select } from "@ditherweb/ui";

export function SelectDemo() {
  return (
    <Select>
      <option value="1">COM1 Serial</option>
      <option value="2">COM2 Serial</option>
    </Select>
  );
}`,
    props: [],
    accessibilityNotes: ["Native <select> for 100% device compatibility."],
  },

  combobox: {
    slug: "combobox",
    name: "Combobox",
    category: "Forms & Selection",
    description:
      "Searchable autocomplete dropdown menu primitive.",
    status: "stable",
    importStatement: `import { Combobox } from "@ditherweb/ui";`,
    usageSnippet: `import { Combobox } from "@ditherweb/ui";

export function ComboboxDemo() {
  return <Combobox options={[{ value: "1", label: "Option 1" }]} />;
}`,
    props: [],
    accessibilityNotes: ["Accessible combobox pattern."],
  },

  slider: {
    slug: "slider",
    name: "Slider",
    category: "Forms & Selection",
    description:
      "Horizontal track slider with tactile thumb handle and tick marks.",
    status: "stable",
    importStatement: `import { Slider } from "@ditherweb/ui";`,
    usageSnippet: `import { Slider } from "@ditherweb/ui";

export function SliderDemo() {
  return <Slider min={0} max={100} defaultValue={50} />;
}`,
    props: [],
    accessibilityNotes: ["Keyboard arrow key step adjustments."],
  },

  toggle: {
    slug: "toggle",
    name: "Toggle",
    category: "Forms & Selection",
    description:
      "Two-state button that can be either on or off.",
    status: "stable",
    importStatement: `import { Toggle } from "@ditherweb/ui";`,
    usageSnippet: `import { Toggle } from "@ditherweb/ui";

export function ToggleDemo() {
  return <Toggle>Bold</Toggle>;
}`,
    props: [],
    accessibilityNotes: ["Aria-pressed state reflection."],
  },

  "toggle-group": {
    slug: "toggle-group",
    name: "ToggleGroup",
    category: "Forms & Selection",
    description:
      "A segmented set of two-state buttons for single or multi selection.",
    status: "stable",
    importStatement: `import { ToggleGroup, ToggleGroupItem } from "@ditherweb/ui";`,
    usageSnippet: `import { ToggleGroup, ToggleGroupItem } from "@ditherweb/ui";

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
}`,
    props: [],
    accessibilityNotes: ["Roving tabindex."],
  },

  field: {
    slug: "field",
    name: "Field",
    category: "Forms & Selection",
    description:
      "Composite wrapper associating a label, input, description, and error message.",
    status: "stable",
    importStatement: `import { Field, FieldLabel, FieldDescription, FieldError, Input } from "@ditherweb/ui";`,
    usageSnippet: `import { Field, FieldLabel, FieldDescription, FieldError, Input } from "@ditherweb/ui";

export function FieldDemo() {
  return (
    <Field>
      <FieldLabel>Baud Rate</FieldLabel>
      <Input placeholder="9600" />
      <FieldDescription>Standard serial speed.</FieldDescription>
    </Field>
  );
}`,
    props: [],
    accessibilityNotes: ["Automatic aria-describedby and aria-invalid wiring."],
  },

  // =========================================================================
  // SURFACES & FEEDBACK PRIMITIVES
  // =========================================================================
  panel: {
    slug: "panel",
    name: "Panel",
    category: "Surfaces & Feedback",
    description:
      "A raised or inset panel surface with custom headers, footers, and bevel borders.",
    status: "stable",
    importStatement: `import { Panel, PanelHeader, PanelTitle, PanelContent } from "@ditherweb/ui";`,
    usageSnippet: `import { Panel, PanelHeader, PanelTitle, PanelContent } from "@ditherweb/ui";

export function PanelDemo() {
  return (
    <Panel>
      <PanelHeader><PanelTitle>I/O Controller</PanelTitle></PanelHeader>
      <PanelContent>Port 0x3F8 operational.</PanelContent>
    </Panel>
  );
}`,
    props: [],
    accessibilityNotes: ["Thematic sectioning."],
  },

  "group-box": {
    slug: "group-box",
    name: "GroupBox",
    category: "Surfaces & Feedback",
    description:
      "Classic etched fieldset container with embedded legend title on the top border.",
    status: "stable",
    importStatement: `import { GroupBox, GroupBoxLegend } from "@ditherweb/ui";`,
    usageSnippet: `import { GroupBox, GroupBoxLegend } from "@ditherweb/ui";

export function GroupBoxDemo() {
  return (
    <GroupBox>
      <GroupBoxLegend>Modem Settings</GroupBoxLegend>
      <div className="p-3">Dial pulse or tone.</div>
    </GroupBox>
  );
}`,
    props: [],
    accessibilityNotes: ["Renders semantic <fieldset> and <legend>."],
  },

  well: {
    slug: "well",
    name: "Well",
    category: "Surfaces & Feedback",
    description:
      "A deeply recessed, sunken container for telemetry, logs, or secondary information.",
    status: "stable",
    importStatement: `import { Well } from "@ditherweb/ui";`,
    usageSnippet: `import { Well } from "@ditherweb/ui";

export function WellDemo() {
  return <Well>Recessed substrate well.</Well>;
}`,
    props: [],
    accessibilityNotes: ["Accessible sunken container."],
  },

  inset: {
    slug: "inset",
    name: "Inset",
    category: "Surfaces & Feedback",
    description:
      "Applies an inset beveled border to child elements.",
    status: "stable",
    importStatement: `import { Inset } from "@ditherweb/ui";`,
    usageSnippet: `import { Inset } from "@ditherweb/ui";

export function InsetDemo() {
  return <Inset>Sunken content.</Inset>;
}`,
    props: [],
    accessibilityNotes: ["Border utility wrapper."],
  },

  progress: {
    slug: "progress",
    name: "Progress",
    category: "Surfaces & Feedback",
    description:
      "A segmented progress bar with blue fill blocks simulating 90s installation progress.",
    status: "stable",
    importStatement: `import { Progress } from "@ditherweb/ui";`,
    usageSnippet: `import { Progress } from "@ditherweb/ui";

export function ProgressDemo() {
  return <Progress value={65} max={100} />;
}`,
    props: [
      {
        name: "value",
        type: "number",
        required: true,
        description: "Current completed value.",
      },
    ],
    accessibilityNotes: ["Carries role='progressbar' with aria-valuenow."],
  },

  spinner: {
    slug: "spinner",
    name: "Spinner",
    category: "Surfaces & Feedback",
    description:
      "A rotating ASCII or pixel spinner indicating background activity.",
    status: "stable",
    importStatement: `import { Spinner } from "@ditherweb/ui";`,
    usageSnippet: `import { Spinner } from "@ditherweb/ui";

export function SpinnerDemo() {
  return <Spinner size="md" />;
}`,
    props: [],
    accessibilityNotes: ["Aria-label='Loading' for screen readers."],
  },

  skeleton: {
    slug: "skeleton",
    name: "Skeleton",
    category: "Surfaces & Feedback",
    description:
      "A dither-textured placeholder skeleton for loading states.",
    status: "stable",
    importStatement: `import { Skeleton } from "@ditherweb/ui";`,
    usageSnippet: `import { Skeleton } from "@ditherweb/ui";

export function SkeletonDemo() {
  return <Skeleton className="h-6 w-32" />;
}`,
    props: [],
    accessibilityNotes: ["Aria-hidden placeholder."],
  },

  "empty-state": {
    slug: "empty-state",
    name: "EmptyState",
    category: "Surfaces & Feedback",
    description:
      "A centered feedback display when a dataset, folder, or inbox is empty.",
    status: "stable",
    importStatement: `import { EmptyState, EmptyStateTitle, EmptyStateDescription } from "@ditherweb/ui";`,
    usageSnippet: `import { EmptyState, EmptyStateTitle, EmptyStateDescription } from "@ditherweb/ui";

export function EmptyStateDemo() {
  return (
    <EmptyState>
      <EmptyStateTitle>No Files Found</EmptyStateTitle>
      <EmptyStateDescription>Directory is empty.</EmptyStateDescription>
    </EmptyState>
  );
}`,
    props: [],
    accessibilityNotes: ["Clear heading and status announcement."],
  },

  result: {
    slug: "result",
    name: "Result",
    category: "Surfaces & Feedback",
    description:
      "Full outcome status screen for success, error, 404, or process completion.",
    status: "stable",
    importStatement: `import { Result, ResultTitle, ResultDescription } from "@ditherweb/ui";`,
    usageSnippet: `import { Result, ResultTitle, ResultDescription } from "@ditherweb/ui";

export function ResultDemo() {
  return (
    <Result variant="success">
      <ResultTitle>Upload Complete</ResultTitle>
      <ResultDescription>3 files successfully archived.</ResultDescription>
    </Result>
  );
}`,
    props: [],
    accessibilityNotes: ["Clear status outcome presentation."],
  },

  loading: {
    slug: "loading",
    name: "Loading",
    category: "Surfaces & Feedback",
    description:
      "A status banner with progress indicator and status message.",
    status: "stable",
    importStatement: `import { Loading } from "@ditherweb/ui";`,
    usageSnippet: `import { Loading } from "@ditherweb/ui";

export function LoadingDemo() {
  return <Loading text="Reading floppy sector 14..." />;
}`,
    props: [],
    accessibilityNotes: ["Aria-live='polite' region."],
  },
};
