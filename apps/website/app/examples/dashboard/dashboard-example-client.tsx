"use client";

import * as React from "react";
import Link from "next/link";
import {
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
  useSidebar,
  Card,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
  PanelContent,
  Badge,
  Button,
  Progress,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Avatar,
  AvatarFallback,
  AvatarBadge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Alert,
  AlertTitle,
  AlertDescription,
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
  Well,
  cn,
} from "@ditherweb/ui";

interface TaskItem {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  assignee: { name: string; initials: string };
  status: "in-progress" | "review" | "done" | "planned";
  category: string;
}

const INITIAL_TASKS: TaskItem[] = [
  {
    id: "TSK-104",
    title: "Bayer 4x4 shader pipeline optimization",
    priority: "high",
    assignee: { name: "Alice Lin", initials: "AL" },
    status: "in-progress",
    category: "Graphics Engine",
  },
  {
    id: "TSK-108",
    title: "Keyboard focus rings on modal overlays",
    priority: "medium",
    assignee: { name: "Marcus Klein", initials: "MK" },
    status: "review",
    category: "Accessibility",
  },
  {
    id: "TSK-112",
    title: "Calibrate 96-component documentation routes",
    priority: "high",
    assignee: { name: "Rin Nakata", initials: "RN" },
    status: "in-progress",
    category: "Design System",
  },
  {
    id: "TSK-115",
    title: "Asset bundler cache invalidation",
    priority: "low",
    assignee: { name: "Sarah Taylor", initials: "ST" },
    status: "planned",
    category: "Build Tools",
  },
  {
    id: "TSK-119",
    title: "Verify Turbopack PPR route pre-rendering",
    priority: "medium",
    assignee: { name: "Alice Lin", initials: "AL" },
    status: "done",
    category: "Infrastructure",
  },
];

function DashboardSidebar({
  activeNav,
  setActiveNav,
}: {
  activeNav: string;
  setActiveNav: (val: string) => void;
}) {
  const { state } = useSidebar();

  return (
    <Sidebar className="border-r border-border bg-surface">
      <SidebarHeader>
        <div
          className={cn(
            "flex items-center gap-2 w-full",
            state === "collapsed" ? "justify-center" : "justify-between",
          )}
        >
          {state === "expanded" && (
            <div className="flex items-center gap-2 min-w-0">
              <Badge variant="primary" className="text-[9px] py-0 px-1.5 shrink-0">
                BYTEBASE
              </Badge>
              <span className="font-bold text-foreground truncate text-xs">
                OPS DESK
              </span>
            </div>
          )}
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Operations Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Operations</SidebarGroupLabel>
          <SidebarItem
            active={activeNav === "overview"}
            onClick={() => setActiveNav("overview")}
            icon={<span className="text-sm">▦</span>}
          >
            Overview
          </SidebarItem>
          <SidebarItem
            active={activeNav === "projects"}
            onClick={() => setActiveNav("projects")}
            badge="8"
            icon={<span className="text-sm">📁</span>}
          >
            Projects
          </SidebarItem>
          <SidebarItem
            active={activeNav === "tasks"}
            onClick={() => setActiveNav("tasks")}
            badge="14"
            icon={<span className="text-sm">📋</span>}
          >
            Work Queue
          </SidebarItem>
          <SidebarItem
            active={activeNav === "activity"}
            onClick={() => setActiveNav("activity")}
            icon={<span className="text-sm">⚡</span>}
          >
            Activity
          </SidebarItem>
        </SidebarGroup>

        {/* Management Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarItem
            active={activeNav === "reports"}
            onClick={() => setActiveNav("reports")}
            icon={<span className="text-sm">📊</span>}
          >
            Reports
          </SidebarItem>
          <SidebarItem
            active={activeNav === "settings"}
            onClick={() => setActiveNav("settings")}
            icon={<span className="text-sm">⚙</span>}
          >
            System Settings
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div
          className={cn(
            "flex items-center gap-2 p-1.5 border border-border bg-background/50",
            state === "collapsed" && "justify-center p-1",
          )}
        >
          <Avatar size="sm" status="online">
            <AvatarFallback className="font-bold text-[10px]">OP</AvatarFallback>
            <AvatarBadge status="online" />
          </Avatar>
          {state === "expanded" && (
            <div className="min-w-0 flex-1 font-mono">
              <div className="text-[11px] font-bold text-foreground truncate">sys_adm</div>
              <div className="text-[9px] text-success flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 bg-success rounded-full" />
                <span>ONLINE</span>
              </div>
            </div>
          )}
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

export function DashboardExampleClient() {
  const [activeNav, setActiveNav] = React.useState("overview");
  const [taskFilter, setTaskFilter] = React.useState<"all" | "in-progress" | "high">("all");
  const [tasks, setTasks] = React.useState<TaskItem[]>(INITIAL_TASKS);
  const [actionNotice, setActionNotice] = React.useState<string | null>(null);

  const filteredTasks = React.useMemo(() => {
    if (taskFilter === "in-progress") {
      return tasks.filter((t) => t.status === "in-progress");
    }
    if (taskFilter === "high") {
      return tasks.filter((t) => t.priority === "high");
    }
    return tasks;
  }, [tasks, taskFilter]);

  const handleTaskAction = (id: string) => {
    setActionNotice(`Acknowledged action on ${id}. Operator timestamp logged.`);
    setTimeout(() => setActionNotice(null), 4000);
  };

  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-3.5rem)] bg-background">
      {/* 1. Explanatory Header Bar */}
      <div className="border-b border-border bg-surface px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono text-xs">
            <Link
              href="/examples"
              className="text-primary hover:underline font-bold flex items-center gap-1"
            >
              <span>←</span>
              <span>All Examples</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-bold text-foreground uppercase tracking-wide">
              BYTEBASE Operations
            </span>
            <Badge variant="primary" className="text-[9px] py-0 hidden md:inline-flex">
              REFERENCE IMPLEMENTATION
            </Badge>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <span className="hidden sm:inline">Composed 100% from @ditherweb/ui primitives</span>
            <Badge variant="outline" className="text-[10px] py-0">
              DOGFOODING
            </Badge>
          </div>
        </div>
      </div>

      {/* 2. Interactive Dashboard Workspace with Sidebar */}
      <SidebarProvider defaultOpen>
        <div className="flex w-full flex-1 min-h-[calc(100vh-6.5rem)]">
          {/* Dashboard Left Sidebar */}
          <DashboardSidebar activeNav={activeNav} setActiveNav={setActiveNav} />

          {/* Main Dashboard Desk */}
          <div className="flex-1 min-w-0 max-w-full flex flex-col">
            {/* Mobile Bar (<1024px) */}
            <div className="lg:hidden flex items-center justify-between border-b border-border bg-surface p-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <span className="font-bold text-foreground">BYTEBASE Operations</span>
              </div>
              <Badge variant="outline" className="text-success border-success text-[10px] font-bold uppercase">
                ● ONLINE
              </Badge>
            </div>

            {/* Dashboard Content Container */}
            <div className="mx-auto max-w-7xl w-full px-4 py-6 sm:px-6 lg:px-8 space-y-6 flex-1">
              {/* Desk Titlebar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                      BYTEBASE // Studio Operations
                    </h1>
                    <Badge variant="outline" className="hidden sm:inline-flex text-success border-success font-mono text-[10px] font-bold">
                      ● NOMINAL
                    </Badge>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mt-1">
                    Real-time software telemetry, sprint velocity, and active service health.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="font-mono text-xs font-bold uppercase"
                    onClick={() => {
                      setActionNotice("Refreshed workspace telemetry. Metrics synchronised.");
                      setTimeout(() => setActionNotice(null), 3000);
                    }}
                  >
                    Refresh
                  </Button>
                  <Button
                    size="sm"
                    className="font-mono text-xs font-bold uppercase"
                    onClick={() => {
                      const newId = `TSK-${Math.floor(120 + Math.random() * 20)}`;
                      setTasks((prev) => [
                        {
                          id: newId,
                          title: "Telemetry buffer calibration",
                          priority: "medium",
                          assignee: { name: "sys_adm", initials: "SA" },
                          status: "in-progress",
                          category: "Operations",
                        },
                        ...prev,
                      ]);
                      setActionNotice(`Created task ${newId} in active queue.`);
                      setTimeout(() => setActionNotice(null), 3000);
                    }}
                  >
                    + New Task
                  </Button>
                </div>
              </div>

              {/* Action Notification Alert */}
              {actionNotice && (
                <Alert variant="default" className="bevel-inset bg-surface border-primary font-mono text-xs">
                  <AlertTitle className="font-bold text-primary">OPERATOR EVENT</AlertTitle>
                  <AlertDescription className="text-foreground">{actionNotice}</AlertDescription>
                </Alert>
              )}

              {/* 3. Summary KPI Cards (4 cards in responsive grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* KPI 1 */}
                <Card className="border border-border bg-surface p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                      Active Projects
                    </span>
                    <Badge variant="outline" className="font-mono text-[9px] py-0">
                      Q4 TARGET
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold tracking-tight text-foreground">
                      08
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">/ 10</span>
                  </div>
                  <Progress value={80} className="h-1.5" />
                  <p className="font-mono text-[10px] text-muted-foreground pt-1">
                    +2 projects slated for sprint release
                  </p>
                </Card>

                {/* KPI 2 */}
                <Card className="border border-border bg-surface p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                      Completed Tasks
                    </span>
                    <Badge variant="outline" className="font-mono text-[9px] text-success border-success">
                      75%
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold tracking-tight text-foreground">
                      42
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">/ 56</span>
                  </div>
                  <Progress value={75} className="h-1.5" />
                  <p className="font-mono text-[10px] text-muted-foreground pt-1">
                    14 items remaining in sprint backlog
                  </p>
                </Card>

                {/* KPI 3 */}
                <Card className="border border-border bg-surface p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                      Open Issues
                    </span>
                    <Badge variant="warning" className="font-mono text-[9px] py-0">
                      ATTENTION
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold tracking-tight text-foreground">
                      03
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">open</span>
                  </div>
                  <Progress value={20} className="h-1.5" />
                  <p className="font-mono text-[10px] text-muted-foreground pt-1">
                    1 blocker · 2 non-critical UI items
                  </p>
                </Card>

                {/* KPI 4 */}
                <Card className="border border-border bg-surface p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                      Node Telemetry
                    </span>
                    <Badge variant="outline" className="font-mono text-[9px] text-success border-success">
                      NOMINAL
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold tracking-tight text-foreground">
                      99.98%
                    </span>
                  </div>
                  <Progress value={100} className="h-1.5" />
                  <p className="font-mono text-[10px] text-muted-foreground pt-1">
                    Zero downtime across 6 edge nodes
                  </p>
                </Card>
              </div>

              {/* 4. Tabbed Content Views */}
              <Tabs defaultValue="overview" className="w-full space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-2">
                  <TabsList className="font-mono text-xs">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="queue">
                      Work Queue ({tasks.length})
                    </TabsTrigger>
                    <TabsTrigger value="telemetry">System Telemetry</TabsTrigger>
                  </TabsList>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="text-[10px] text-muted-foreground uppercase mr-1">
                      Filter:
                    </span>
                    <button
                      type="button"
                      onClick={() => setTaskFilter("all")}
                      className={cn(
                        "px-2 py-0.5 text-[11px] font-bold transition-all",
                        taskFilter === "all"
                          ? "bevel-inset bg-muted text-primary"
                          : "bevel-raised text-muted-foreground hover:text-foreground",
                      )}
                    >
                      All
                    </button>
                    <button
                      type="button"
                      onClick={() => setTaskFilter("in-progress")}
                      className={cn(
                        "px-2 py-0.5 text-[11px] font-bold transition-all",
                        taskFilter === "in-progress"
                          ? "bevel-inset bg-muted text-primary"
                          : "bevel-raised text-muted-foreground hover:text-foreground",
                      )}
                    >
                      Active
                    </button>
                    <button
                      type="button"
                      onClick={() => setTaskFilter("high")}
                      className={cn(
                        "px-2 py-0.5 text-[11px] font-bold transition-all",
                        taskFilter === "high"
                          ? "bevel-inset bg-muted text-primary"
                          : "bevel-raised text-muted-foreground hover:text-foreground",
                      )}
                    >
                      High Priority
                    </button>
                  </div>
                </div>

                {/* Tab 1: Overview (Responsive 2-Column Split) */}
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column (8 cols): Tasks Table & Activity */}
                    <div className="lg:col-span-8 space-y-6">
                      {/* Active Tasks Panel */}
                      <Panel className="border border-border bg-surface">
                        <PanelHeader className="flex items-center justify-between">
                          <div>
                            <PanelTitle className="font-mono text-sm font-bold uppercase tracking-wider">
                              Active Sprint Tasks
                            </PanelTitle>
                            <PanelDescription className="font-mono text-xs text-muted-foreground">
                              Showing {filteredTasks.length} engineering work items
                            </PanelDescription>
                          </div>
                          <Badge variant="outline" className="font-mono text-[10px]">
                            SPRINT 24
                          </Badge>
                        </PanelHeader>

                        <PanelContent className="p-0">
                          <div className="w-full overflow-x-auto">
                            <Table className="w-full font-mono text-xs">
                              <TableHeader>
                                <TableRow className="border-b border-border bg-muted/30">
                                  <TableHead className="w-20 font-bold">ID</TableHead>
                                  <TableHead className="font-bold">Task Name</TableHead>
                                  <TableHead className="w-24 font-bold">Priority</TableHead>
                                  <TableHead className="w-28 font-bold">Assignee</TableHead>
                                  <TableHead className="w-28 font-bold">Status</TableHead>
                                  <TableHead className="w-20 text-right font-bold">Action</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {filteredTasks.map((task) => (
                                  <TableRow key={task.id} className="border-b border-border/60 hover:bg-muted/40 transition-colors">
                                    <TableCell className="font-bold text-muted-foreground">
                                      {task.id}
                                    </TableCell>
                                    <TableCell className="font-medium text-foreground">
                                      <div className="flex flex-col">
                                        <span>{task.title}</span>
                                        <span className="text-[10px] text-muted-foreground">
                                          {task.category}
                                        </span>
                                      </div>
                                    </TableCell>
                                    <TableCell>
                                      {task.priority === "high" && (
                                        <Badge variant="destructive" className="text-[9px] py-0">
                                          HIGH
                                        </Badge>
                                      )}
                                      {task.priority === "medium" && (
                                        <Badge variant="warning" className="text-[9px] py-0">
                                          MEDIUM
                                        </Badge>
                                      )}
                                      {task.priority === "low" && (
                                        <Badge variant="secondary" className="text-[9px] py-0 font-normal">
                                          LOW
                                        </Badge>
                                      )}
                                    </TableCell>
                                    <TableCell>
                                      <div className="flex items-center gap-1.5">
                                        <Avatar size="sm">
                                          <AvatarFallback className="text-[9px] font-bold">
                                            {task.assignee.initials}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="text-xs truncate max-w-[80px]">
                                          {task.assignee.name}
                                        </span>
                                      </div>
                                    </TableCell>
                                    <TableCell>
                                      {task.status === "in-progress" && (
                                        <Badge variant="outline" className="text-[9px] font-bold text-primary border-primary">
                                          IN PROGRESS
                                        </Badge>
                                      )}
                                      {task.status === "review" && (
                                        <Badge variant="outline" className="text-[9px] font-bold text-info border-info">
                                          REVIEW
                                        </Badge>
                                      )}
                                      {task.status === "done" && (
                                        <Badge variant="outline" className="text-[9px] font-bold text-success border-success">
                                          COMPLETE
                                        </Badge>
                                      )}
                                      {task.status === "planned" && (
                                        <Badge variant="outline" className="text-[9px] font-bold text-muted-foreground border-border">
                                          QUEUED
                                        </Badge>
                                      )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-7 px-2 font-mono text-[10px] uppercase font-bold"
                                        onClick={() => handleTaskAction(task.id)}
                                      >
                                        Sync
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </PanelContent>
                      </Panel>

                      {/* Recent Activity Stream */}
                      <Panel className="border border-border bg-surface">
                        <PanelHeader>
                          <PanelTitle className="font-mono text-sm font-bold uppercase tracking-wider">
                            Deployment &amp; Operational Log
                          </PanelTitle>
                          <PanelDescription className="font-mono text-xs text-muted-foreground">
                            Verified automated logs from continuous delivery pipelines
                          </PanelDescription>
                        </PanelHeader>

                        <PanelContent>
                          <DescriptionList layout="horizontal" className="font-mono text-xs space-y-3">
                            <DescriptionItem>
                              <DescriptionTerm className="text-muted-foreground text-[11px] w-28 shrink-0">
                                14:32:08 UTC
                              </DescriptionTerm>
                              <DescriptionDetails className="text-foreground">
                                <span className="font-bold text-primary mr-1">COMMIT ec70acd:</span>
                                Sidebar rail overflow resolved symmetrically across desktop &amp; mobile viewports.
                              </DescriptionDetails>
                            </DescriptionItem>
                            <DescriptionItem>
                              <DescriptionTerm className="text-muted-foreground text-[11px] w-28 shrink-0">
                                13:10:45 UTC
                              </DescriptionTerm>
                              <DescriptionDetails className="text-foreground">
                                <span className="font-bold text-success mr-1">BUILD prod-9812:</span>
                                113 routes pre-rendered successfully via Next.js Turbopack engine in 1,509ms.
                              </DescriptionDetails>
                            </DescriptionItem>
                            <DescriptionItem>
                              <DescriptionTerm className="text-muted-foreground text-[11px] w-28 shrink-0">
                                11:45:19 UTC
                              </DescriptionTerm>
                              <DescriptionDetails className="text-foreground">
                                <span className="font-bold text-info mr-1">TELEMETRY:</span>
                                Edge cache warm hit ratio 99.4%; zero packet drops across 6 distributed cluster nodes.
                              </DescriptionDetails>
                            </DescriptionItem>
                            <DescriptionItem>
                              <DescriptionTerm className="text-muted-foreground text-[11px] w-28 shrink-0">
                                09:20:00 UTC
                              </DescriptionTerm>
                              <DescriptionDetails className="text-foreground">
                                <span className="font-bold text-muted-foreground mr-1">MAINTENANCE:</span>
                                Daily automated token registry compaction and dependency tree verification complete.
                              </DescriptionDetails>
                            </DescriptionItem>
                          </DescriptionList>
                        </PanelContent>
                      </Panel>
                    </div>

                    {/* Right Column (4 cols): Milestones, Notices, Node Specs */}
                    <div className="lg:col-span-4 space-y-6">
                      {/* Project Milestones */}
                      <Panel className="border border-border bg-surface">
                        <PanelHeader>
                          <PanelTitle className="font-mono text-sm font-bold uppercase tracking-wider">
                            Sprint Milestones
                          </PanelTitle>
                          <PanelDescription className="font-mono text-xs text-muted-foreground">
                            Target deliverables for milestone v0.1.0
                          </PanelDescription>
                        </PanelHeader>

                        <PanelContent className="space-y-4">
                          <div className="space-y-1.5 font-mono">
                            <div className="flex justify-between text-xs">
                              <span className="font-bold text-foreground">Ditherweb Core v1.0</span>
                              <span className="text-primary font-bold">92%</span>
                            </div>
                            <Progress value={92} className="h-1.5" />
                          </div>

                          <div className="space-y-1.5 font-mono">
                            <div className="flex justify-between text-xs">
                              <span className="font-bold text-foreground">Shader &amp; Texture Pipeline</span>
                              <span className="text-primary font-bold">68%</span>
                            </div>
                            <Progress value={68} className="h-1.5" />
                          </div>

                          <div className="space-y-1.5 font-mono">
                            <div className="flex justify-between text-xs">
                              <span className="font-bold text-foreground">A11y / WCAG 2.1 AA Audit</span>
                              <span className="text-success font-bold">100%</span>
                            </div>
                            <Progress value={100} className="h-1.5" />
                          </div>

                          <div className="space-y-1.5 font-mono">
                            <div className="flex justify-between text-xs">
                              <span className="font-bold text-foreground">Admin &amp; Console Templates</span>
                              <span className="text-muted-foreground font-bold">35%</span>
                            </div>
                            <Progress value={35} className="h-1.5" />
                          </div>
                        </PanelContent>
                      </Panel>

                      {/* Studio Notice */}
                      <Alert variant="default" className="border border-border bg-surface">
                        <AlertTitle className="font-mono text-xs font-bold uppercase text-foreground">
                          Operational Directive
                        </AlertTitle>
                        <AlertDescription className="font-mono text-xs text-muted-foreground mt-1 leading-relaxed">
                          Scheduled pipeline calibration window tonight at 02:00 UTC.
                          Secondary failover standby is verified active.
                        </AlertDescription>
                      </Alert>

                      {/* System Environment */}
                      <Well className="p-4 space-y-2.5 font-mono text-xs">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-1">
                          Node Environment
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Cluster Host:</span>
                          <span className="font-bold text-foreground">edge-node-04.dal</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Engine:</span>
                          <span className="font-bold text-foreground">Next.js 16.4.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Runtime:</span>
                          <span className="font-bold text-foreground">React 19.3 / TS 5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Allocated RAM:</span>
                          <span className="font-bold text-foreground">142 MB / 512 MB</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">UI Primitives:</span>
                          <span className="font-bold text-success">97 Verified</span>
                        </div>
                      </Well>
                    </div>
                  </div>
                </TabsContent>

                {/* Tab 2: Work Queue Full View */}
                <TabsContent value="queue">
                  <Card className="border border-border bg-surface p-6 font-mono space-y-4">
                    <h3 className="text-sm font-bold uppercase text-foreground">
                      Full Engineering Work Queue
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      14 total sprint items categorized across graphics engine, component system, and accessibility tracks.
                    </p>
                    <div className="w-full overflow-x-auto">
                      <Table className="w-full text-xs">
                        <TableHeader>
                          <TableRow className="border-b border-border bg-muted/40">
                            <TableHead className="font-bold">ID</TableHead>
                            <TableHead className="font-bold">Title</TableHead>
                            <TableHead className="font-bold">Category</TableHead>
                            <TableHead className="font-bold">Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tasks.map((t) => (
                            <TableRow key={t.id} className="border-b border-border/60">
                              <TableCell className="font-bold text-muted-foreground">{t.id}</TableCell>
                              <TableCell className="font-medium text-foreground">{t.title}</TableCell>
                              <TableCell className="text-muted-foreground">{t.category}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="text-[9px] py-0">
                                  {t.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </Card>
                </TabsContent>

                {/* Tab 3: System Telemetry Log View */}
                <TabsContent value="telemetry">
                  <Card className="border border-border bg-surface p-6 font-mono space-y-4">
                    <h3 className="text-sm font-bold uppercase text-foreground">
                      Continuous Service Telemetry
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Live cluster diagnostics reported by edge monitoring daemons.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                      <div className="bevel-inset bg-background p-3 space-y-1">
                        <div className="text-[10px] text-muted-foreground">CPU LOAD</div>
                        <div className="text-xl font-bold text-foreground">12.4%</div>
                        <div className="text-[9px] text-success">NORMAL RANGE</div>
                      </div>
                      <div className="bevel-inset bg-background p-3 space-y-1">
                        <div className="text-[10px] text-muted-foreground">HEAP USAGE</div>
                        <div className="text-xl font-bold text-foreground">142 MB</div>
                        <div className="text-[9px] text-success">28% CAPACITY</div>
                      </div>
                      <div className="bevel-inset bg-background p-3 space-y-1">
                        <div className="text-[10px] text-muted-foreground">EDGE LATENCY</div>
                        <div className="text-xl font-bold text-foreground">14 ms</div>
                        <div className="text-[9px] text-success">P95 MEASUREMENT</div>
                      </div>
                      <div className="bevel-inset bg-background p-3 space-y-1">
                        <div className="text-[10px] text-muted-foreground">ERROR RATE</div>
                        <div className="text-xl font-bold text-foreground">0.00%</div>
                        <div className="text-[9px] text-success">ZERO ANOMALIES</div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* 5. Bottom Telemetry Bar */}
              <div className="bevel-inset bg-surface/80 p-3 font-mono text-[11px] text-muted-foreground flex flex-wrap items-center justify-between gap-3 border border-border">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 bg-success inline-block" />
                    <span className="font-bold text-foreground">STATUS:</span> OPERATIONAL
                  </span>
                  <span>
                    <span className="font-bold text-foreground">NODES:</span> 6/6 SYNCED
                  </span>
                  <span>
                    <span className="font-bold text-foreground">MEMORY:</span> 142 MB
                  </span>
                  <span>
                    <span className="font-bold text-foreground">CACHE HIT:</span> 99.4%
                  </span>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  BYTEBASE OPS · DITHERWEB DOGFOODING REF
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
