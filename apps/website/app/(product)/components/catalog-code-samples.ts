export interface ComponentCodeSample {
  badge: string;
  code: string;
}

export const componentCodeSamples: Record<string, ComponentCodeSample> = {
  heading: {
    badge: "@ditherweb/ui/heading",
    code: `import { Heading } from "@ditherweb/ui";

// Semantic level with decoupled visual scale
<Heading level={1} size="xl">System Core</Heading>
<Heading level={2} size="lg">Subsystem Module Protocol</Heading>
<Heading level={3} size="md">Peripheral Controller</Heading>`,
  },
  text: {
    badge: "@ditherweb/ui/text",
    code: `import { Text } from "@ditherweb/ui";

<Text size="base">Standard monospace paragraph content.</Text>
<Text size="sm" tone="muted">Secondary status annotation.</Text>
<Text size="xs" weight="bold" uppercase>Hardware Flag: OK</Text>`,
  },
  link: {
    badge: "@ditherweb/ui/link",
    code: `import { Link } from "@ditherweb/ui";

<Link href="/docs" variant="default">Documentation</Link>
<Link href="https://github.com" external variant="subtle">Source Repository ↗</Link>`,
  },
  "code-kbd": {
    badge: "@ditherweb/ui/code",
    code: `import { Code, Kbd } from "@ditherweb/ui";

<p>
  Execute <Code>CONFIG.SYS</Code> with <Kbd>Ctrl</Kbd> + <Kbd>Alt</Kbd> + <Kbd>Del</Kbd>.
</p>`,
  },
  "blockquote-list": {
    badge: "@ditherweb/ui/list",
    code: `import { Blockquote, List, ListItem } from "@ditherweb/ui";

<Blockquote cite="MS-DOS Technical Reference">
  Conventional memory is limited to 640 KB of base RAM.
</Blockquote>

<List variant="pixel">
  <ListItem>Load high memory drivers (HIMEM.SYS)</ListItem>
  <ListItem>Allocate expanded memory page frame (EMS 4.0)</ListItem>
</List>`,
  },
  "container-box": {
    badge: "@ditherweb/ui/container",
    code: `import { Container, Box } from "@ditherweb/ui";

<Container size="md" className="py-6">
  <Box className="bevel-raised p-4 bg-surface">
    Contained content block
  </Box>
</Container>`,
  },
  "stack-flex-grid": {
    badge: "@ditherweb/ui/layout",
    code: `import { Stack, Flex, Grid, Spacer } from "@ditherweb/ui";

<Stack gap="md">
  <Flex justify="between" align="center">
    <span>Module A</span>
    <Spacer />
    <span>Status: Active</span>
  </Flex>
  <Grid cols={3} gap="sm">
    <div className="bevel-inset p-2">Slot 1</div>
    <div className="bevel-inset p-2">Slot 2</div>
    <div className="bevel-inset p-2">Slot 3</div>
  </Grid>
</Stack>`,
  },
  "aspect-scroll": {
    badge: "@ditherweb/ui/scroll-area",
    code: `import { AspectRatio, ScrollArea } from "@ditherweb/ui";

<AspectRatio ratio={4 / 3} className="bevel-inset bg-background">
  <ScrollArea className="h-48 p-4">
    <pre>Long terminal output log buffer...</pre>
  </ScrollArea>
</AspectRatio>`,
  },
  textarea: {
    badge: "@ditherweb/ui/textarea",
    code: `import { Textarea } from "@ditherweb/ui";

<Textarea
  rows={4}
  placeholder="Enter system configuration instructions..."
  defaultValue="DOS=HIGH,UMB\nDEVICE=C:\\DOS\\HIMEM.SYS"
/>`,
  },
  "password-input": {
    badge: "@ditherweb/ui/password-input",
    code: `import { PasswordInput } from "@ditherweb/ui";

<PasswordInput
  placeholder="Enter BIOS master key"
  defaultValue="SecretPassword99"
/>`,
  },
  "search-input": {
    badge: "@ditherweb/ui/search-input",
    code: `import { SearchInput } from "@ditherweb/ui";

<SearchInput
  placeholder="Search buffer entries..."
  onClear={() => console.log("Cleared")}
/>`,
  },
  "number-input": {
    badge: "@ditherweb/ui/number-input",
    code: `import { NumberInput } from "@ditherweb/ui";

<NumberInput
  min={0}
  max={1024}
  step={16}
  defaultValue={64}
  suffix="KB"
/>`,
  },
  select: {
    badge: "@ditherweb/ui/select",
    code: `import { Select } from "@ditherweb/ui";

<Select defaultValue="vga">
  <option value="cga">CGA (320x200, 4 Colors)</option>
  <option value="ega">EGA (640x350, 16 Colors)</option>
  <option value="vga">VGA (640x480, 256 Colors)</option>
</Select>`,
  },
  combobox: {
    badge: "@ditherweb/ui/combobox",
    code: `import { Combobox } from "@ditherweb/ui";

<Combobox
  options={[
    { label: "CGA Mode 1 (320x200)", value: "cga" },
    { label: "EGA Hi-Res (640x350)", value: "ega" },
    { label: "VGA Mode 13h (320x200)", value: "vga" },
  ]}
  placeholder="Select display standard..."
/>`,
  },
  slider: {
    badge: "@ditherweb/ui/slider",
    code: `import { Slider } from "@ditherweb/ui";

<Slider
  min={0}
  max={100}
  step={5}
  defaultValue={65}
  aria-label="Audio Gain Level"
/>`,
  },
  toggle: {
    badge: "@ditherweb/ui/toggle",
    code: `import { Toggle } from "@ditherweb/ui";

<Toggle aria-label="Toggle Turbo Mode">
  [TURBO 66MHz]
</Toggle>`,
  },
  "toggle-group": {
    badge: "@ditherweb/ui/toggle-group",
    code: `import { ToggleGroup, ToggleGroupItem } from "@ditherweb/ui";

<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">LEFT</ToggleGroupItem>
  <ToggleGroupItem value="center">CENTER</ToggleGroupItem>
  <ToggleGroupItem value="right">RIGHT</ToggleGroupItem>
</ToggleGroup>`,
  },
  field: {
    badge: "@ditherweb/ui/field",
    code: `import { Field, FieldLabel, FieldDescription, FieldError, Input } from "@ditherweb/ui";

<Field>
  <FieldLabel required>Device Port Address</FieldLabel>
  <Input placeholder="0x03F8" />
  <FieldDescription>Standard COM1 serial port IO address</FieldDescription>
  <FieldError message="Port already bound by TSR driver" />
</Field>`,
  },
  button: {
    badge: "@ditherweb/ui/button",
    code: `import { Button } from "@ditherweb/ui";

<Button variant="default">OK</Button>
<Button variant="primary">Submit</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="destructive">Purge</Button>
<Button variant="outline">Browse...</Button>`,
  },
  input: {
    badge: "@ditherweb/ui/input",
    code: `import { Input } from "@ditherweb/ui";

<Input type="text" placeholder="CONFIG.SYS" />
<Input type="text" disabled value="READONLY.BIN" />`,
  },
  label: {
    badge: "@ditherweb/ui/label",
    code: `import { Label, Input } from "@ditherweb/ui";

<div className="space-y-1">
  <Label htmlFor="baud-rate" required>Baud Rate</Label>
  <Input id="baud-rate" defaultValue="57600" />
</div>`,
  },
  checkbox: {
    badge: "@ditherweb/ui/checkbox",
    code: `import { Checkbox } from "@ditherweb/ui";

<label className="flex items-center gap-2">
  <Checkbox defaultChecked />
  <span>Enable Extended Memory (XMS)</span>
</label>`,
  },
  radio: {
    badge: "@ditherweb/ui/radio",
    code: `import { Radio } from "@ditherweb/ui";

<div className="space-y-2">
  <label className="flex items-center gap-2">
    <Radio name="irq" value="5" defaultChecked />
    <span>IRQ 5 (Sound Blaster 16)</span>
  </label>
  <label className="flex items-center gap-2">
    <Radio name="irq" value="7" />
    <span>IRQ 7 (Parallel Port LPT1)</span>
  </label>
</div>`,
  },
  switch: {
    badge: "@ditherweb/ui/switch",
    code: `import { Switch } from "@ditherweb/ui";

<label className="flex items-center gap-2">
  <Switch defaultChecked />
  <span>Math Coprocessor (80387)</span>
</label>`,
  },
  card: {
    badge: "@ditherweb/ui/card",
    code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "@ditherweb/ui";

<Card variant="raised">
  <CardHeader>
    <CardTitle>Display Controller</CardTitle>
    <CardDescription>VGA BIOS v1.02 — 256KB Video RAM</CardDescription>
  </CardHeader>
  <CardContent>
    Raster interrupts mapped to INT 10h.
  </CardContent>
  <CardFooter className="justify-end">
    <Button size="sm">Calibrate</Button>
  </CardFooter>
</Card>`,
  },
  separator: {
    badge: "@ditherweb/ui/separator",
    code: `import { Separator } from "@ditherweb/ui";

<Separator orientation="horizontal" />
<div className="flex h-5 items-center space-x-2">
  <span>Buffer A</span>
  <Separator orientation="vertical" />
  <span>Buffer B</span>
</div>`,
  },
  badge: {
    badge: "@ditherweb/ui/badge",
    code: `import { Badge } from "@ditherweb/ui";

<Badge variant="default">DEFAULT</Badge>
<Badge variant="primary">ONLINE</Badge>
<Badge variant="success">OK</Badge>
<Badge variant="warning">ALERT</Badge>
<Badge variant="destructive">PANIC</Badge>
<Badge variant="outline">IDLE</Badge>`,
  },
  alert: {
    badge: "@ditherweb/ui/alert",
    code: `import { Alert, AlertTitle, AlertDescription } from "@ditherweb/ui";

<Alert variant="info">
  <AlertTitle>System Notice</AlertTitle>
  <AlertDescription>Dialup handshake established at 57,600 baud.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Fatal Exception</AlertTitle>
  <AlertDescription>Stack overflow in TSR driver module at 0028:C0011E36.</AlertDescription>
</Alert>`,
  },
  panel: {
    badge: "@ditherweb/ui/panel",
    code: `import { Panel, PanelHeader, PanelTitle, PanelContent, PanelFooter, Button } from "@ditherweb/ui";

<Panel variant="raised">
  <PanelHeader>
    <PanelTitle>ISA Bus Configuration</PanelTitle>
  </PanelHeader>
  <PanelContent>
    IRQ 7 assigned to LPT1. DMA channel 1 allocated.
  </PanelContent>
  <PanelFooter>
    <Button size="sm">Save Configuration</Button>
  </PanelFooter>
</Panel>`,
  },
  "group-box": {
    badge: "@ditherweb/ui/group-box",
    code: `import { GroupBox, GroupBoxLegend, Radio } from "@ditherweb/ui";

<GroupBox>
  <GroupBoxLegend>Display Driver Standard</GroupBoxLegend>
  <div className="space-y-2">
    <label className="flex items-center gap-2">
      <Radio name="drv" value="vga" defaultChecked />
      <span>Standard VGA (640x480x16)</span>
    </label>
    <label className="flex items-center gap-2">
      <Radio name="drv" value="svga" />
      <span>Super VGA (800x600x256)</span>
    </label>
  </div>
</GroupBox>`,
  },
  "well-inset": {
    badge: "@ditherweb/ui/well",
    code: `import { Well, Inset } from "@ditherweb/ui";

<Well className="p-4">
  <p className="font-mono text-xs">Recessed control surface cavity.</p>
</Well>

<Inset className="p-3">
  <code>0x0000:7C00  31 C0 8E D8 8E C0</code>
</Inset>`,
  },
  progress: {
    badge: "@ditherweb/ui/progress",
    code: `import { Progress } from "@ditherweb/ui";

<Progress value={65} max={100} showValue label="Buffer Transfer" />`,
  },
  "spinner-loading": {
    badge: "@ditherweb/ui/spinner",
    code: `import { Spinner, Loading } from "@ditherweb/ui";

<Spinner size="md" />
<Loading text="Loading palette textures..." />`,
  },
  skeleton: {
    badge: "@ditherweb/ui/skeleton",
    code: `import { Skeleton } from "@ditherweb/ui";

<div className="space-y-2">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
  <Skeleton className="h-24 w-full" />
</div>`,
  },
  "empty-state": {
    badge: "@ditherweb/ui/empty-state",
    code: `import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateAction, Button } from "@ditherweb/ui";

<EmptyState>
  <EmptyStateIcon>💾</EmptyStateIcon>
  <EmptyStateTitle>No Disks Mounted</EmptyStateTitle>
  <EmptyStateDescription>Insert a 3.5" 1.44MB high-density floppy disk in drive A:.</EmptyStateDescription>
  <EmptyStateAction>
    <Button size="sm">Scan Drives</Button>
  </EmptyStateAction>
</EmptyState>`,
  },
  result: {
    badge: "@ditherweb/ui/result",
    code: `import { Result, ResultTitle, ResultDescription, ResultAction, Button } from "@ditherweb/ui";

<Result status="success">
  <ResultTitle>Firmware Flashed Successfully</ResultTitle>
  <ResultDescription>BIOS ROM checksum verified: 0x9AF2 (Matches factory hash).</ResultDescription>
  <ResultAction>
    <Button size="sm">Reboot System</Button>
  </ResultAction>
</Result>`,
  },
  dialog: {
    badge: "@ditherweb/ui/dialog",
    code: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogClose, Button } from "@ditherweb/ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Setup</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Setup Utility</DialogTitle>
    </DialogHeader>
    <DialogBody>
      Configure hardware clock and memory timings.
    </DialogBody>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DialogClose>
      <Button variant="primary">Save Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  },
  "alert-dialog": {
    badge: "@ditherweb/ui/alert-dialog",
    code: `import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogBody, AlertDialogFooter, AlertDialogAction, AlertDialogCancel, Button } from "@ditherweb/ui";

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Format Drive C:</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Format Fixed Disk</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogBody>
      ALL DATA ON DRIVE C: WILL BE LOST! Proceed with format?
    </AlertDialogBody>
    <AlertDialogFooter>
      <AlertDialogCancel asChild>
        <Button variant="secondary">Cancel</Button>
      </AlertDialogCancel>
      <AlertDialogAction asChild>
        <Button variant="destructive">Proceed</Button>
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  },
  popover: {
    badge: "@ditherweb/ui/popover",
    code: `import { Popover, PopoverTrigger, PopoverContent, Button } from "@ditherweb/ui";

<Popover>
  <PopoverTrigger asChild>
    <Button size="sm">Port Properties</Button>
  </PopoverTrigger>
  <PopoverContent className="p-3 w-64 space-y-2">
    <div className="font-bold text-xs uppercase">COM1 Parameters</div>
    <div className="text-xs text-muted-foreground">9600-8-N-1 Hardware Handshake</div>
  </PopoverContent>
</Popover>`,
  },
  tooltip: {
    badge: "@ditherweb/ui/tooltip",
    code: `import { Tooltip, TooltipTrigger, TooltipContent, Button } from "@ditherweb/ui";

<Tooltip>
  <TooltipTrigger asChild>
    <Button size="sm">Help [F1]</Button>
  </TooltipTrigger>
  <TooltipContent>
    Opens context-sensitive DOS help index.
  </TooltipContent>
</Tooltip>`,
  },
  "hover-card": {
    badge: "@ditherweb/ui/hover-card",
    code: `import { HoverCard, HoverCardTrigger, HoverCardContent } from "@ditherweb/ui";

<HoverCard>
  <HoverCardTrigger asChild>
    <span className="underline decoration-dotted cursor-help">COMMAND.COM</span>
  </HoverCardTrigger>
  <HoverCardContent className="w-64 p-3 text-xs space-y-1">
    <p className="font-bold">Command Interpreter</p>
    <p className="text-muted-foreground">File size: 54,645 bytes (MS-DOS 6.22)</p>
  </HoverCardContent>
</HoverCard>`,
  },
  drawer: {
    badge: "@ditherweb/ui/drawer",
    code: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerBody, DrawerClose, Button } from "@ditherweb/ui";

<Drawer side="bottom">
  <DrawerTrigger asChild>
    <Button>System Monitor Tray</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Bus Activity Monitor</DrawerTitle>
    </DrawerHeader>
    <DrawerBody>
      Real-time DMA channel transactions and port registers.
    </DrawerBody>
  </DrawerContent>
</Drawer>`,
  },
  sheet: {
    badge: "@ditherweb/ui/sheet",
    code: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetBody, Button } from "@ditherweb/ui";

<Sheet side="right">
  <SheetTrigger asChild>
    <Button>File Details Pane</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>FAT16 Cluster Allocation</SheetTitle>
    </SheetHeader>
    <SheetBody>
      Cluster size: 32 KB (64 sectors per cluster).
    </SheetBody>
  </SheetContent>
</Sheet>`,
  },
  infrastructure: {
    badge: "@ditherweb/ui/backdrop",
    code: `import { Backdrop, Overlay, Portal } from "@ditherweb/ui";

// Backdrop with vintage screen door pixel dither
<Backdrop variant="dither" open={isOpen} onClick={() => setIsOpen(false)} />

// Teleporting root container
<Portal>
  <Overlay variant="dimmed">
    <div className="bevel-raised p-4 bg-surface">Overlay Dialog</div>
  </Overlay>
</Portal>`,
  },
  "demo-tabs-section": {
    badge: "@ditherweb/ui/tabs",
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@ditherweb/ui";

<Tabs defaultValue="hardware">
  <TabsList>
    <TabsTrigger value="hardware">Hardware</TabsTrigger>
    <TabsTrigger value="memory">Memory</TabsTrigger>
    <TabsTrigger value="display">Display</TabsTrigger>
  </TabsList>
  <TabsContent value="hardware" className="p-4 bevel-inset bg-background">
    CPU: Intel 486DX2 66MHz with internal FPU
  </TabsContent>
  <TabsContent value="memory" className="p-4 bevel-inset bg-background">
    Base RAM: 640 KB • Extended RAM: 15,360 KB
  </TabsContent>
  <TabsContent value="display" className="p-4 bevel-inset bg-background">
    Video: Cirrus Logic CL-GD5428 1MB VLB
  </TabsContent>
</Tabs>`,
  },
  "demo-breadcrumb-section": {
    badge: "@ditherweb/ui/breadcrumb",
    code: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@ditherweb/ui";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">C:\\</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/dos">DOS</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>DRIVERS</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  },
  "demo-pagination-section": {
    badge: "@ditherweb/ui/pagination",
    code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@ditherweb/ui";

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
  },
  "demo-navigation-menu-section": {
    badge: "@ditherweb/ui/navigation-menu",
    code: `import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@ditherweb/ui";

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem value="file-system">
      <NavigationMenuTrigger>File System</NavigationMenuTrigger>
      <NavigationMenuContent className="p-2 space-y-1">
        <NavigationMenuLink href="#">Directory Tree</NavigationMenuLink>
        <NavigationMenuLink href="#">Volume Information</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  },
  "demo-menubar-section": {
    badge: "@ditherweb/ui/menubar",
    code: `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut } from "@ditherweb/ui";

<Menubar>
  <MenubarMenu value="file">
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Buffer
        <MenubarShortcut>Ctrl+N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Open Image...
        <MenubarShortcut>Ctrl+O</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Exit
        <MenubarShortcut>Alt+F4</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
  },
  "demo-table-section": {
    badge: "@ditherweb/ui/table",
    code: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@ditherweb/ui";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>DEVICE</TableHead>
      <TableHead>TYPE</TableHead>
      <TableHead>IO PORT</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-bold">COM1</TableCell>
      <TableCell>Serial UART</TableCell>
      <TableCell>0x03F8</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold">LPT1</TableCell>
      <TableCell>Parallel Port</TableCell>
      <TableCell>0x0378</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  },
  "demo-data-table-section": {
    badge: "@ditherweb/ui/data-table",
    code: `import { DataTable } from "@ditherweb/ui";

const columns = [
  { key: "pid", header: "PID" },
  { key: "name", header: "Process Name" },
  { key: "memory", header: "RAM Usage" },
];

const data = [
  { id: "1", pid: 104, name: "KERNEL.SYS", memory: "128 KB" },
  { id: "2", pid: 218, name: "VGA_DRIVER.BIN", memory: "64 KB" },
];

<DataTable
  columns={columns}
  data={data}
  selectable
  onSelectionChange={(keys) => console.log(keys)}
/>`,
  },
  "demo-description-list-section": {
    badge: "@ditherweb/ui/description-list",
    code: `import { DescriptionList, DescriptionTerm, DescriptionDetails } from "@ditherweb/ui";

<DescriptionList orientation="horizontal">
  <DescriptionTerm>Processor</DescriptionTerm>
  <DescriptionDetails>Intel 80486DX2 66MHz</DescriptionDetails>
  <DescriptionTerm>Base RAM</DescriptionTerm>
  <DescriptionDetails>640 KB Conventional</DescriptionDetails>
  <DescriptionTerm>Operating System</DescriptionTerm>
  <DescriptionDetails>MS-DOS Version 6.22</DescriptionDetails>
</DescriptionList>`,
  },
  "demo-tree-section": {
    badge: "@ditherweb/ui/tree",
    code: `import { Tree, TreeNodeData } from "@ditherweb/ui";

const treeData: TreeNodeData[] = [
  {
    id: "root",
    label: "C:\\ (SYSTEM)",
    children: [
      { id: "dos", label: "DOS", children: [{ id: "cmd", label: "COMMAND.COM" }] },
      { id: "autoexec", label: "AUTOEXEC.BAT" },
    ],
  },
];

<Tree
  data={treeData}
  selectedId={selectedId}
  onSelectNode={(node) => setSelectedId(node.id)}
/>`,
  },
  "demo-avatar-section": {
    badge: "@ditherweb/ui/avatar",
    code: `import { Avatar, AvatarImage, AvatarFallback } from "@ditherweb/ui";

<Avatar size="md" variant="raised">
  <AvatarImage src="/operator.png" alt="SysOp" />
  <AvatarFallback>OP</AvatarFallback>
</Avatar>`,
  },
  "demo-web-ring": {
    badge: "@ditherweb/ui/web-ring",
    code: `import {
  WebRing,
  WebRingHeader,
  WebRingTitle,
  WebRingSite,
  WebRingNavigation,
  WebRingLink,
} from "@ditherweb/ui";

<WebRing variant="default">
  <WebRingHeader>
    <WebRingTitle>Vintage Computing WebRing</WebRingTitle>
    <WebRingSite name="RetroStation" memberIndex={4} totalMembers={18} />
  </WebRingHeader>
  <WebRingNavigation>
    <WebRingLink direction="prev" href="#prev">[« Previous]</WebRingLink>
    <WebRingLink direction="random" href="#random">[? Random]</WebRingLink>
    <WebRingLink direction="hub" href="#hub">[Ring Hub]</WebRingLink>
    <WebRingLink direction="next" href="#next">[Next »]</WebRingLink>
  </WebRingNavigation>
</WebRing>`,
  },
  "demo-guestbook": {
    badge: "@ditherweb/ui/guestbook",
    code: `import {
  Guestbook,
  GuestbookHeader,
  GuestbookTitle,
  GuestbookEntryList,
  GuestbookEntry,
  GuestbookFooter,
} from "@ditherweb/ui";

<Guestbook>
  <GuestbookHeader>
    <GuestbookTitle>Dave's Digital Guestbook</GuestbookTitle>
    <span>124 Total Signatures</span>
  </GuestbookHeader>
  <GuestbookEntryList>
    <GuestbookEntry
      entryNumber={124}
      author="pixel_surfer"
      location="Portland, OR"
      date="OCT 08, 1997"
      websiteUrl="https://example.com"
      websiteName="PixelCave"
      message="Found your ring from GeoCities SiliconValley! Awesome palette choices, keep it up!"
    />
  </GuestbookEntryList>
  <GuestbookFooter>
    <span>Showing page 1 of 12</span>
  </GuestbookFooter>
</Guestbook>`,
  },
  "demo-visitor-counter": {
    badge: "@ditherweb/ui/visitor-counter",
    code: `import { VisitorCounter } from "@ditherweb/ui";

// Classic mechanical rolling odometer
<VisitorCounter value={12847} minDigits={6} variant="odometer" label="VISITORS" />

// Green LED & gray LCD variants
<VisitorCounter value={42069} minDigits={6} variant="led" label="HITS" />
<VisitorCounter value={8921} minDigits={6} variant="lcd" label="PAGE VIEWS" />`,
  },
  "demo-under-construction": {
    badge: "@ditherweb/ui/under-construction",
    code: `import {
  UnderConstruction,
  UnderConstructionIcon,
  UnderConstructionTitle,
  UnderConstructionMessage,
  UnderConstructionEstimatedDate,
  UnderConstructionAction,
  Button,
} from "@ditherweb/ui";

<UnderConstruction variant="stripes">
  <div className="flex flex-col items-center text-center space-y-2">
    <UnderConstructionIcon size="md" />
    <UnderConstructionTitle>CYBER DECK UNDER CONSTRUCTION</UnderConstructionTitle>
    <UnderConstructionMessage>
      Pardon our virtual dust! Netscape 3.0 optimized graphics currently being calibrated.
    </UnderConstructionMessage>
    <UnderConstructionEstimatedDate date="NOVEMBER 1997" />
    <UnderConstructionAction>
      <Button size="sm" variant="outline">Return to Portal</Button>
    </UnderConstructionAction>
  </div>
</UnderConstruction>`,
  },
  "demo-marquee": {
    badge: "@ditherweb/ui/marquee",
    code: `import { Marquee } from "@ditherweb/ui";

// Modern CSS marquee with pause-on-hover & reduced-motion fallback
<Marquee speed="normal" direction="left" pauseOnHover>
  <span>★ WELCOME TO DITHERWEB ★</span>
  <span>BEST VIEWED AT 800x600 IN 16-BIT COLOR</span>
  <span>LATEST DISK IMAGE DOWNLOADED (2.88MB)</span>
</Marquee>`,
  },
  "demo-blink": {
    badge: "@ditherweb/ui/blink",
    code: `import { Blink } from "@ditherweb/ui";

// Opt-in blinking animation with calm 1s cycle and reduced-motion safety
<Blink enabled speed="normal" className="bg-amber-400 text-black px-1 font-bold">
  NEW!
</Blink>`,
  },
  "demo-button-88x31": {
    badge: "@ditherweb/ui/button-88x31",
    code: `import { Button88x31 } from "@ditherweb/ui";

// Strict 88x31 micro-badges: image-based or two-tone retro text
<Button88x31 href="https://ditherweb.org" external>
  DITHERWEB
</Button88x31>

<Button88x31 label="NETSCAPE" value="NOW!" href="#" />
<Button88x31 label="HTML 4.0" value="VALID" variant="flat" href="#" />`,
  },
  "demo-retro-banner": {
    badge: "@ditherweb/ui/retro-banner",
    code: `import {
  RetroBanner,
  RetroBannerTitle,
  RetroBannerSubtitle,
  RetroBannerAction,
  Button,
} from "@ditherweb/ui";

<RetroBanner format="standard" variant="dither" href="#">
  <div className="space-y-0.5">
    <RetroBannerTitle>CYBERNET BBS • DIAL (555) 019-2831</RetroBannerTitle>
    <RetroBannerSubtitle>56K V.90 High Speed Nodes • ANSI Graphics</RetroBannerSubtitle>
  </div>
  <RetroBannerAction>
    <Button size="sm">CONNECT</Button>
  </RetroBannerAction>
</RetroBanner>`,
  },
  "demo-pixel-image": {
    badge: "@ditherweb/ui/pixel-image",
    code: `import { PixelImage } from "@ditherweb/ui";

// Nearest-neighbor bitmap scaling with vintage beveled or dithered frames
<PixelImage
  src="/artwork/ditherweb_hero.png"
  alt="Retro Artwork"
  width={160}
  height={120}
  frame="bevel"
  caption="Fig 1. ISA Graphics Controller (160x120px)"
/>`,
  },
  "demo-web-directory": {
    badge: "@ditherweb/ui/web-directory",
    code: `import {
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

<WebDirectory>
  <WebDirectoryHeader>
    <h3 className="font-bold text-sm uppercase">Early Web Portal Index</h3>
    <p className="text-xs text-muted-foreground">Human-curated directory hierarchy</p>
  </WebDirectoryHeader>
  <WebDirectoryGrid cols={3}>
    <WebDirectoryCategory>
      <WebDirectoryTitle count={3}>COMMUNITY</WebDirectoryTitle>
      <WebDirectoryList>
        <WebDirectoryItem>
          <WebDirectoryLink href="#" isNew>WebRings</WebDirectoryLink>
          <WebDirectoryDescription>Themed circular website collection</WebDirectoryDescription>
        </WebDirectoryItem>
        <WebDirectoryItem>
          <WebDirectoryLink href="#">Guestbooks</WebDirectoryLink>
          <WebDirectoryDescription>Visitor signature logs</WebDirectoryDescription>
        </WebDirectoryItem>
      </WebDirectoryList>
    </WebDirectoryCategory>
  </WebDirectoryGrid>
</WebDirectory>`,
  },
  "demo-window": {
    badge: "@ditherweb/ui/window",
    code: `import {
  Window,
  WindowTitleBar,
  WindowTitle,
  WindowControls,
  WindowContent,
  WindowFooter,
  WindowStatusBar,
  WindowStatusItem,
  Button,
} from "@ditherweb/ui";

<Window active size="md">
  <WindowTitleBar active>
    <WindowTitle>DIALUP_MANAGER.EXE</WindowTitle>
    <WindowControls onMinimize={() => {}} onMaximize={() => {}} onClose={() => {}} />
  </WindowTitleBar>
  <WindowContent>
    <p>Network adapter initialized on COM3 (57600 baud).</p>
  </WindowContent>
  <WindowFooter>
    <Button variant="primary" size="sm">Connect</Button>
  </WindowFooter>
  <WindowStatusBar>
    <WindowStatusItem sunken>READY</WindowStatusItem>
    <WindowStatusItem sunken>LINE 1</WindowStatusItem>
  </WindowStatusBar>
</Window>`,
  },
  "demo-window-titlebar": {
    badge: "@ditherweb/ui/window-titlebar",
    code: `import { WindowTitleBar, WindowTitle, WindowIcon, WindowControls } from "@ditherweb/ui";

// Active titlebar with high-contrast background
<WindowTitleBar active>
  <WindowIcon />
  <WindowTitle>CONFIG.SYS [ACTIVE]</WindowTitle>
  <WindowControls />
</WindowTitleBar>

// Inactive titlebar with muted sunken contrast
<WindowTitleBar active={false}>
  <WindowIcon />
  <WindowTitle>AUTOEXEC.BAT [INACTIVE]</WindowTitle>
  <WindowControls disabled />
</WindowTitleBar>`,
  },
  "demo-window-controls": {
    badge: "@ditherweb/ui/window-controls",
    code: `import { WindowControls } from "@ditherweb/ui";

<WindowControls
  isMaximized={false}
  onMinimize={() => console.log("Minimized")}
  onMaximize={() => console.log("Maximized")}
  onClose={() => console.log("Closed")}
/>`,
  },
  "demo-taskbar": {
    badge: "@ditherweb/ui/taskbar",
    code: `import {
  Taskbar,
  TaskbarStart,
  TaskbarTasks,
  TaskbarTask,
  TaskbarStatus,
  TaskbarClock,
} from "@ditherweb/ui";

<Taskbar>
  <TaskbarStart active={false}>START</TaskbarStart>
  <TaskbarTasks>
    <TaskbarTask active>TERMINAL.EXE</TaskbarTask>
    <TaskbarTask active={false}>PAINT.BMP</TaskbarTask>
    <TaskbarTask active={false}>BROWSER.HTM</TaskbarTask>
  </TaskbarTasks>
  <TaskbarStatus>
    <span>100% DISK</span>
    <TaskbarClock />
  </TaskbarStatus>
</Taskbar>`,
  },
  "demo-menu": {
    badge: "@ditherweb/ui/menu",
    code: `import {
  MenuBar,
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
} from "@ditherweb/ui";

<MenuBar>
  <Menu>
    <MenuTrigger>File</MenuTrigger>
    <MenuContent>
      <MenuItem shortcut="Ctrl+N">New Project</MenuItem>
      <MenuItem shortcut="Ctrl+O">Open Sector...</MenuItem>
      <MenuSeparator />
      <MenuItem shortcut="Ctrl+S">Save Binary</MenuItem>
      <MenuItem disabled>Export to Tape</MenuItem>
      <MenuSeparator />
      <MenuItem shortcut="Alt+F4">Exit</MenuItem>
    </MenuContent>
  </Menu>
  <Menu>
    <MenuTrigger>Edit</MenuTrigger>
    <MenuContent>
      <MenuItem shortcut="Ctrl+Z">Undo</MenuItem>
      <MenuItem shortcut="Ctrl+Y">Redo</MenuItem>
    </MenuContent>
  </Menu>
</MenuBar>`,
  },
  "demo-context-menu": {
    badge: "@ditherweb/ui/context-menu",
    code: `import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
} from "@ditherweb/ui";

<ContextMenu>
  <ContextMenuTrigger className="p-6 border border-dashed border-border text-center">
    Right click or press Shift+F10 anywhere in this area
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Desktop Actions</ContextMenuLabel>
    <ContextMenuItem shortcut="Ctrl+R">Refresh Canvas</ContextMenuItem>
    <ContextMenuItem>Arrange Icons</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Create Shortcut</ContextMenuItem>
    <ContextMenuItem disabled>Delete Sector</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Properties</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
  },
  "demo-desktop": {
    badge: "@ditherweb/ui/desktop",
    code: `import {
  Desktop,
  DesktopIconGrid,
  DesktopIcon,
  Window,
  WindowTitleBar,
  WindowTitle,
  WindowControls,
  WindowContent,
  Taskbar,
  TaskbarStart,
  TaskbarTasks,
  TaskbarTask,
  TaskbarStatus,
  TaskbarClock,
} from "@ditherweb/ui";

<Desktop wallpaper="dither" className="min-h-[400px]">
  <div className="flex-1 flex gap-4 p-3">
    <DesktopIconGrid>
      <DesktopIcon label="Hard Drive" selected />
      <DesktopIcon label="Network" />
      <DesktopIcon label="Recycle Bin" />
    </DesktopIconGrid>
    <Window size="sm" className="self-start">
      <WindowTitleBar>
        <WindowTitle>System Monitor</WindowTitle>
        <WindowControls />
      </WindowTitleBar>
      <WindowContent>
        <p className="text-xs">CPU: 486 DX2-66 MHz</p>
        <p className="text-xs">RAM: 16,384 KB</p>
      </WindowContent>
    </Window>
  </div>
  <Taskbar>
    <TaskbarStart>START</TaskbarStart>
    <TaskbarTasks>
      <TaskbarTask active>System Monitor</TaskbarTask>
    </TaskbarTasks>
    <TaskbarStatus>
      <TaskbarClock />
    </TaskbarStatus>
  </Taskbar>
</Desktop>`,
  },
  "demo-terminal": {
    badge: "@ditherweb/ui/terminal",
    code: `import {
  Terminal,
  TerminalHeader,
  TerminalBody,
  TerminalLine,
  TerminalPrompt,
  TerminalCommand,
  TerminalOutput,
  TerminalCursor,
} from "@ditherweb/ui";

<Terminal variant="matrix">
  <TerminalHeader title="VT-100 SHELL" />
  <TerminalBody>
    <TerminalLine>
      <TerminalPrompt>admin@station:~$</TerminalPrompt>
      <TerminalCommand>ditherweb --status</TerminalCommand>
    </TerminalLine>
    <TerminalOutput>
      [OK] ISA Bus Initialized
      [OK] VGA DAC 256-color palette ready
      [OK] 86 Production Primitives loaded
    </TerminalOutput>
    <TerminalLine>
      <TerminalPrompt>admin@station:~$</TerminalPrompt>
      <TerminalCursor />
    </TerminalLine>
  </TerminalBody>
</Terminal>`,
  },
  "demo-pixel-art": {
    badge: "@ditherweb/ui/pixel-art",
    code: `import { PixelArt } from "@ditherweb/ui";

<PixelArt
  src="/images/pixel-sprite.png"
  alt="16-bit retro computer sprite"
  scale={3}
  frame="pixel"
  ditherOverlay
  caption="Sprite: 16x16 scaled 3x with crisp nearest-neighbor rendering"
/>`,
  },
  "demo-bitmap-canvas": {
    badge: "@ditherweb/ui/bitmap-canvas",
    code: `import { BitmapCanvas, DEFAULT_RETRO_PALETTE } from "@ditherweb/ui";

<BitmapCanvas
  width={16}
  height={16}
  pixelSize={14}
  grid
  interactive
  palette={DEFAULT_RETRO_PALETTE}
  alt="Interactive 16x16 pixel editor matrix"
  onChange={(grid) => console.log("Grid updated", grid)}
/>`,
  },
  "demo-dither": {
    badge: "@ditherweb/ui/dither",
    code: `import { Dither } from "@ditherweb/ui";

// Bayer matrix procedural overlay
<Dither pattern="bayer" intensity="medium">
  <div className="p-6 bg-surface-sunken border border-border">
    Textured content with Bayer 4x4 dither overlay
  </div>
</Dither>

// Fine dither backdrop
<Dither pattern="fine" mode="backdrop" className="p-6">
  Backdrop pattern mode
</Dither>`,
  },
  "demo-halftone": {
    badge: "@ditherweb/ui/halftone",
    code: `import { Halftone } from "@ditherweb/ui";

// Dot-matrix screen overlay
<Halftone size="md" density="medium" opacity={0.4}>
  <div className="p-6 bg-surface border border-border">
    Dot-matrix halftone screen overlay
  </div>
</Halftone>`,
  },
  "demo-pixelate": {
    badge: "@ditherweb/ui/pixelate",
    code: `import { Pixelate } from "@ditherweb/ui";

// Nearest-neighbor crisp pixel scaling
<Pixelate rendering="pixelated" crispText scale={1}>
  <div className="p-4 border border-border">
    Crisp nearest-neighbor typography and graphics
  </div>
</Pixelate>`,
  },
  "demo-noise": {
    badge: "@ditherweb/ui/noise",
    code: `import { Noise } from "@ditherweb/ui";

// Film grain texture with opt-in micro jitter
<Noise intensity="medium" animated={false}>
  <div className="p-6 bg-surface border border-border">
    Micro-grain procedural surface texture
  </div>
</Noise>`,
  },
  "demo-image-frame": {
    badge: "@ditherweb/ui/image-frame",
    code: `import { ImageFrame } from "@ditherweb/ui";

<ImageFrame
  variant="bitmap"
  ditherOverlay="bayer"
  pixelated
  caption="FIG 1.0 — High-contrast 1-bit scan specimen"
>
  <img src="/images/hero-preview.png" alt="Specimen" className="w-full h-40 object-cover" />
</ImageFrame>`,
  },
  "demo-scanline": {
    badge: "@ditherweb/ui/scanline",
    code: `import { Scanline } from "@ditherweb/ui";

// CRT scanline overlay with fine stripes
<Scanline density="fine" orientation="horizontal" opacity={0.3}>
  <div className="p-6 bg-black text-green-400 font-mono">
    Cathode ray tube scanline simulation
  </div>
</Scanline>`,
  },
  "demo-crt": {
    badge: "@ditherweb/ui/crt",
    code: `import { CRT } from "@ditherweb/ui";

// Complete phosphor monitor enclosure
<CRT
  phosphor="green"
  curvature="subtle"
  vignette
  scanlines="medium"
  flicker={false}
>
  <div>&gt; SYSTEM DIAGNOSTIC: ALL PRINTERS ONLINE</div>
  <div>&gt; READY.</div>
</CRT>`,
  },
  "demo-pixel-text": {
    badge: "@ditherweb/ui/pixel-text",
    code: `import { PixelText } from "@ditherweb/ui";

<PixelText as="h2" size="2xl" shadow="stepped" crisp glow>
  DITHERWEB v1.0
</PixelText>
<PixelText as="p" size="base" shadow="pixel">
  Stepped retro drop shadow typography
</PixelText>`,
  },
  "demo-typewriter": {
    badge: "@ditherweb/ui/typewriter",
    code: `import { Typewriter } from "@ditherweb/ui";

// Screen-reader accessible character reveal
<Typewriter
  text="Connecting to Ditherweb host gateway..."
  speed="medium"
  cursor
  loop
/>`,
  },
  "demo-blink-cursor": {
    badge: "@ditherweb/ui/blink-cursor",
    code: `import { BlinkCursor } from "@ditherweb/ui";

<span>Command prompt</span>
<BlinkCursor variant="block" blink />
<BlinkCursor variant="underline" blink />
<BlinkCursor variant="line" blink />`,
  },
};


