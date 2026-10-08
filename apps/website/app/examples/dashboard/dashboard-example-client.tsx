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
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Avatar,
  AvatarFallback,
  Alert,
  AlertTitle,
  AlertDescription,
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
            active={activeNav === "deployments"}
            onClick={() => setActiveNav("deployments")}
            icon={<span className="text-sm">🚀</span>}
          >
            Deployments
          </SidebarItem>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarItem
            active={activeNav === "nodes"}
            onClick={() => setActiveNav("nodes")}
            badge="6"
            icon={<span className="text-sm">⚡</span>}
          >
            Edge Nodes
          </SidebarItem>
          <SidebarItem
            active={activeNav === "settings"}
            onClick={() => setActiveNav("settings")}
            icon={<span className="text-sm">⚙</span>}
          >
            Settings
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {state === "expanded" && (
          <div className="p-3 text-[11px] font-mono text-muted-foreground border-t border-border/60">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-success inline-block" />
              <span className="font-bold text-foreground">Cluster Nominal</span>
            </div>
            <div className="text-[10px] mt-0.5">edge-node-04.dal</div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}

export function DashboardExampleClient() {
  const [activeNav, setActiveNav] = React.useState("overview");
  const [tasks, setTasks] = React.useState<TaskItem[]>(INITIAL_TASKS);
  const [taskFilter, setTaskFilter] = React.useState<"all" | "in-progress" | "high">("all");
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

  const handleTaskAction = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: "done" } : t)),
    );
    setActionNotice(`Task ${taskId} marked as completed.`);
    setTimeout(() => setActionNotice(null), 3000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-mono">
      {/* 1. Context Navigation Bar */}
      <div className="border-b border-border bg-surface px-4 py-2 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
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
            <div className="mx-auto max-w-5xl w-full px-4 py-8 sm:px-8 space-y-8 flex-1 min-w-0">
              {/* Desk Titlebar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h1 className="font-mono text-2xl font-bold uppercase tracking-tight text-foreground">
                      BYTEBASE // Studio Operations
                    </h1>
                    <Badge variant="outline" className="text-success border-success font-mono text-[10px] font-bold">
                      ● NOMINAL
                    </Badge>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    Engineering delivery velocity and active service health for Sprint 24.
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

              {/* 3. High-Signal Operational Cards (2 Focused Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-border bg-surface p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
                      Sprint 24 Delivery
                    </span>
                    <Badge variant="outline" className="font-mono text-[10px] text-success border-success">
                      75% ON TRACK
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-4xl font-bold tracking-tight text-foreground">
                      42
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">/ 56 tasks closed</span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed pt-1">
                    14 items remaining in sprint backlog. Targeted for Friday production deployment.
                  </p>
                </Card>

                <Card className="border border-border bg-surface p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
                      Cluster Availability
                    </span>
                    <Badge variant="outline" className="font-mono text-[10px] text-success border-success">
                      6 NODES ONLINE
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-4xl font-bold tracking-tight text-foreground">
                      99.98%
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">uptime 30d</span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed pt-1">
                    Zero unplanned downtime across North America and Europe edge clusters.
                  </p>
                </Card>
              </div>

              {/* 4. Main Workflow: Active Sprint Tasks Panel */}
              <Panel className="border border-border bg-surface">
                <PanelHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5">
                  <div className="space-y-1">
                    <PanelTitle className="font-mono text-sm font-bold uppercase tracking-wider">
                      Active Sprint Tasks
                    </PanelTitle>
                    <PanelDescription className="font-mono text-xs text-muted-foreground">
                      Showing {filteredTasks.length} engineering work items
                    </PanelDescription>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="text-[10px] text-muted-foreground uppercase mr-1">
                      Filter:
                    </span>
                    <button
                      type="button"
                      onClick={() => setTaskFilter("all")}
                      className={cn(
                        "px-2.5 py-1 text-xs font-bold transition-all",
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
                        "px-2.5 py-1 text-xs font-bold transition-all",
                        taskFilter === "in-progress"
                          ? "bevel-inset bg-muted text-primary"
                          : "bevel-raised text-muted-foreground hover:text-foreground",
                      )}
                    >
                      In Progress
                    </button>
                    <button
                      type="button"
                      onClick={() => setTaskFilter("high")}
                      className={cn(
                        "px-2.5 py-1 text-xs font-bold transition-all",
                        taskFilter === "high"
                          ? "bevel-inset bg-muted text-primary"
                          : "bevel-raised text-muted-foreground hover:text-foreground",
                      )}
                    >
                      High Priority
                    </button>
                  </div>
                </PanelHeader>

                <PanelContent className="p-0">
                  <div className="w-full overflow-x-auto">
                    <Table className="w-full font-mono text-xs">
                      <TableHeader>
                        <TableRow className="border-b border-border bg-muted/30">
                          <TableHead className="w-24 font-bold py-3 pl-5">ID</TableHead>
                          <TableHead className="font-bold py-3">Task Name</TableHead>
                          <TableHead className="w-28 font-bold py-3">Priority</TableHead>
                          <TableHead className="w-36 font-bold py-3">Assignee</TableHead>
                          <TableHead className="w-32 font-bold py-3">Status</TableHead>
                          <TableHead className="w-24 text-right font-bold py-3 pr-5">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredTasks.map((task) => (
                          <TableRow
                            key={task.id}
                            className="border-b border-border/60 hover:bg-muted/40 transition-colors"
                          >
                            <TableCell className="font-bold text-muted-foreground py-3 pl-5">
                              {task.id}
                            </TableCell>
                            <TableCell className="font-medium text-foreground py-3">
                              <div className="flex flex-col">
                                <span className="text-xs">{task.title}</span>
                                <span className="text-[10px] text-muted-foreground">
                                  {task.category}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell className="py-3">
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
                            <TableCell className="py-3">
                              <div className="flex items-center gap-2">
                                <Avatar size="sm">
                                  <AvatarFallback className="text-[9px] font-bold">
                                    {task.assignee.initials}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-xs truncate max-w-[90px]">
                                  {task.assignee.name}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell className="py-3">
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
                            <TableCell className="text-right py-3 pr-5">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 px-2 font-mono text-[10px] uppercase font-bold"
                                onClick={() => handleTaskAction(task.id)}
                              >
                                {task.status === "done" ? "Synced" : "Sync"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </PanelContent>
              </Panel>

              {/* 5. Editorial Sprint Highlights Card */}
              <Card className="border border-border bg-surface p-6 space-y-4 font-mono">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div>
                    <h3 className="text-sm font-bold uppercase text-foreground">
                      Sprint 24 Release Dispatch
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Verified architectural milestones ready for deployment
                    </p>
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    v0.1.0-RC3
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1 text-xs">
                  <div className="space-y-1.5">
                    <div className="font-bold text-foreground flex items-center gap-1.5">
                      <span className="text-success">✓</span>
                      <span>Bayer Shader Engine</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-[11px]">
                      Optimized 4x4 matrix ordered dithering pipeline with steady 60fps canvas rasterization.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="font-bold text-foreground flex items-center gap-1.5">
                      <span className="text-success">✓</span>
                      <span>Next.js Static Pages</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-[11px]">
                      Pre-rendered 118 catalog and documentation routes in under 2.5s with zero hydration mismatch.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="font-bold text-foreground flex items-center gap-1.5">
                      <span className="text-success">✓</span>
                      <span>High-Contrast Focus</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-[11px]">
                      Certified WCAG 2.1 AA focus rings and tactile keyboard cyclic arrow navigation across overlays.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
