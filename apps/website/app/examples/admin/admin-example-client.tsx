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
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  Button,
  Input,
  SearchInput,
  Select,
  Checkbox,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarBadge,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
  PanelContent,
  Card,
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
  Alert,
  AlertTitle,
  AlertDescription,
  cn,
} from "@ditherweb/ui";

export type UserRole =
  | "Administrator"
  | "Senior Engineer"
  | "Product Designer"
  | "Security Auditor";

export type UserStatus = "active" | "pending" | "suspended";

export interface DirectoryUser {
  id: string;
  name: string;
  email: string;
  initials: string;
  role: UserRole;
  team: string;
  status: UserStatus;
  lastActive: string;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
}

const INITIAL_USERS: DirectoryUser[] = [
  {
    id: "USR-001",
    name: "Alice Lin",
    email: "alice.lin@ditherweb.org",
    initials: "AL",
    role: "Senior Engineer",
    team: "Core Engine",
    status: "active",
    lastActive: "Just now",
  },
  {
    id: "USR-002",
    name: "Marcus Klein",
    email: "marcus.k@ditherweb.org",
    initials: "MK",
    role: "Senior Engineer",
    team: "Accessibility",
    status: "active",
    lastActive: "14 mins ago",
  },
  {
    id: "USR-003",
    name: "Rin Nakata",
    email: "rin.nakata@ditherweb.org",
    initials: "RN",
    role: "Administrator",
    team: "Core Architecture",
    status: "active",
    lastActive: "1 hr ago",
  },
  {
    id: "USR-004",
    name: "Sarah Taylor",
    email: "sarah.t@ditherweb.org",
    initials: "ST",
    role: "Product Designer",
    team: "Design Systems",
    status: "suspended",
    lastActive: "3 days ago",
  },
  {
    id: "USR-005",
    name: "David Chen",
    email: "david.chen@ditherweb.org",
    initials: "DC",
    role: "Security Auditor",
    team: "Infrastructure",
    status: "active",
    lastActive: "4 hrs ago",
  },
  {
    id: "USR-006",
    name: "Maya Patel",
    email: "maya.patel@ditherweb.org",
    initials: "MP",
    role: "Product Designer",
    team: "Design Systems",
    status: "pending",
    lastActive: "Invited 2d ago",
  },
  {
    id: "USR-007",
    name: "Elena Rostova",
    email: "elena.r@ditherweb.org",
    initials: "ER",
    role: "Senior Engineer",
    team: "Shader & WebGL",
    status: "active",
    lastActive: "2 hrs ago",
  },
  {
    id: "USR-008",
    name: "Samira Khan",
    email: "samira.k@ditherweb.org",
    initials: "SK",
    role: "Security Auditor",
    team: "Compliance",
    status: "pending",
    lastActive: "Invited 1d ago",
  },
  {
    id: "USR-009",
    name: "Liam Vance",
    email: "liam.vance@ditherweb.org",
    initials: "LV",
    role: "Senior Engineer",
    team: "Core Engine",
    status: "active",
    lastActive: "5 mins ago",
  },
  {
    id: "USR-010",
    name: "Jordan Lee",
    email: "jordan.lee@ditherweb.org",
    initials: "JL",
    role: "Administrator",
    team: "DevOps",
    status: "active",
    lastActive: "30 mins ago",
  },
];

const INITIAL_AUDIT_LOG: AuditEvent[] = [
  {
    id: "AUD-101",
    timestamp: "14:32:10 UTC",
    actor: "sys_admin",
    action: "Assigned Marcus Klein role Senior Engineer",
  },
  {
    id: "AUD-102",
    timestamp: "13:48:02 UTC",
    actor: "sys_admin",
    action: "Account suspended for Sarah Taylor (Design Systems)",
  },
  {
    id: "AUD-103",
    timestamp: "12:10:45 UTC",
    actor: "sys_admin",
    action: "Provisioned pending invitation for Maya Patel",
  },
  {
    id: "AUD-104",
    timestamp: "09:42:18 UTC",
    actor: "sys_admin",
    action: "Verified MFA policy for David Chen (Infrastructure)",
  },
];

// Admin Sidebar Subcomponent
function AdminSidebar({
  activeNav,
  setActiveNav,
  userCount,
}: {
  activeNav: string;
  setActiveNav: (val: string) => void;
  userCount: number;
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
              <span className="bevel-inset bg-primary px-1.5 py-0.5 text-[9px] font-bold text-primary-foreground uppercase shrink-0">
                USER DIR
              </span>
              <span className="font-bold text-foreground truncate text-xs">
                SYS_ADMIN
              </span>
            </div>
          )}
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Directory Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Directory</SidebarGroupLabel>
          <SidebarItem
            active={activeNav === "users"}
            onClick={() => setActiveNav("users")}
            badge={String(userCount)}
            icon={<span className="text-sm">👥</span>}
          >
            Users
          </SidebarItem>
          <SidebarItem
            active={activeNav === "teams"}
            onClick={() => setActiveNav("teams")}
            badge="4"
            icon={<span className="text-sm">📁</span>}
          >
            Teams
          </SidebarItem>
          <SidebarItem
            active={activeNav === "roles"}
            onClick={() => setActiveNav("roles")}
            badge="4"
            icon={<span className="text-sm">🛡️</span>}
          >
            Roles
          </SidebarItem>
          <SidebarItem
            active={activeNav === "permissions"}
            onClick={() => setActiveNav("permissions")}
            icon={<span className="text-sm">🔑</span>}
          >
            Permissions
          </SidebarItem>
        </SidebarGroup>

        {/* Security Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Governance</SidebarGroupLabel>
          <SidebarItem
            active={activeNav === "audit"}
            onClick={() => setActiveNav("audit")}
            icon={<span className="text-sm">📜</span>}
          >
            Audit Log
          </SidebarItem>
          <SidebarItem
            active={activeNav === "settings"}
            onClick={() => setActiveNav("settings")}
            icon={<span className="text-sm">⚙️</span>}
          >
            Directory Settings
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
            <AvatarFallback className="font-bold text-[10px]">SA</AvatarFallback>
            <AvatarBadge status="online" />
          </Avatar>
          {state === "expanded" && (
            <div className="min-w-0 flex-1 font-mono">
              <div className="text-[11px] font-bold text-foreground truncate">sys_admin</div>
              <div className="text-[9px] text-success flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 bg-success rounded-full" />
                <span>SUPERUSER</span>
              </div>
            </div>
          )}
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

export function AdminExampleClient() {
  const [activeNav, setActiveNav] = React.useState("users");
  const [users, setUsers] = React.useState<DirectoryUser[]>(INITIAL_USERS);
  const [auditLog, setAuditLog] = React.useState<AuditEvent[]>(INITIAL_AUDIT_LOG);

  // Selection & Inspector State
  const [selectedUserId, setSelectedUserId] = React.useState<string>("USR-001");
  const [checkedIds, setCheckedIds] = React.useState<Set<string>>(new Set());

  // Filter States
  const [searchQuery, setSearchQuery] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("ALL");
  const [statusFilter, setStatusFilter] = React.useState("ALL");

  // Notifications
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);

  // Dialog States
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [addFormName, setAddFormName] = React.useState("");
  const [addFormEmail, setAddFormEmail] = React.useState("");
  const [addFormRole, setAddFormRole] = React.useState<UserRole>("Senior Engineer");
  const [addFormTeam, setAddFormTeam] = React.useState("Core Engine");
  const [addFormStatus, setAddFormStatus] = React.useState<UserStatus>("active");
  const [addFormError, setAddFormError] = React.useState<string | null>(null);

  // Edit Dialog State
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<DirectoryUser | null>(null);

  // Delete Alert Dialog State
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
  const [deletingUser, setDeletingUser] = React.useState<DirectoryUser | null>(null);

  // Filter logic
  const filteredUsers = React.useMemo(() => {
    return users.filter((u) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.id.toLowerCase().includes(q);

      const matchesRole = roleFilter === "ALL" || u.role === roleFilter;
      const matchesStatus = statusFilter === "ALL" || u.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchQuery, roleFilter, statusFilter]);

  // Selected User Object for Permission Inspection
  const selectedUser = React.useMemo(() => {
    return users.find((u) => u.id === selectedUserId) || users[0] || null;
  }, [users, selectedUserId]);

  // Counts
  const activeCount = users.filter((u) => u.status === "active").length;
  const pendingCount = users.filter((u) => u.status === "pending").length;
  const suspendedCount = users.filter((u) => u.status === "suspended").length;

  const announce = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 4000);
  };

  // Checkbox helpers
  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (checkedIds.size === filteredUsers.length) {
      setCheckedIds(new Set());
    } else {
      setCheckedIds(new Set(filteredUsers.map((u) => u.id)));
    }
  };

  // CRUD: Add User Submit
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addFormName.trim() || !addFormEmail.trim()) {
      setAddFormError("Full Name and Corporate Email are required.");
      return;
    }

    const parts = addFormName.trim().split(" ");
    const initials = (
      (parts[0]?.[0] || "") + (parts[1]?.[0] || parts[0]?.[1] || "U")
    ).toUpperCase();

    const newId = `USR-0${Math.floor(10 + Math.random() * 90)}`;
    const newUser: DirectoryUser = {
      id: newId,
      name: addFormName.trim(),
      email: addFormEmail.trim(),
      initials,
      role: addFormRole,
      team: addFormTeam,
      status: addFormStatus,
      lastActive: "Just now",
    };

    setUsers((prev) => [newUser, ...prev]);
    setSelectedUserId(newId);

    // Append to audit
    const nowTime = new Date().toISOString().substring(11, 19) + " UTC";
    setAuditLog((prev) => [
      {
        id: `AUD-${Math.floor(100 + Math.random() * 900)}`,
        timestamp: nowTime,
        actor: "sys_admin",
        action: `Provisioned new account for ${newUser.name} (${newUser.role})`,
      },
      ...prev,
    ]);

    setIsAddOpen(false);
    setAddFormName("");
    setAddFormEmail("");
    setAddFormError(null);
    announce(`User ${newUser.name} (${newId}) created successfully.`);
  };

  // CRUD: Edit User Submit
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;

    setUsers((prev) =>
      prev.map((u) => (u.id === editingUser.id ? editingUser : u)),
    );

    const nowTime = new Date().toISOString().substring(11, 19) + " UTC";
    setAuditLog((prev) => [
      {
        id: `AUD-${Math.floor(100 + Math.random() * 900)}`,
        timestamp: nowTime,
        actor: "sys_admin",
        action: `Updated profile & role assignments for ${editingUser.name}`,
      },
      ...prev,
    ]);

    setIsEditOpen(false);
    announce(`Account details updated for ${editingUser.name}.`);
  };

  // CRUD: Suspend Toggle
  const handleSuspendToggle = (user: DirectoryUser) => {
    const nextStatus: UserStatus =
      user.status === "suspended" ? "active" : "suspended";
    setUsers((prev) =>
      prev.map((u) => (u.id === user.id ? { ...u, status: nextStatus } : u)),
    );

    const actionText =
      nextStatus === "suspended"
        ? `Suspended account access for ${user.name}`
        : `Reactivated account privileges for ${user.name}`;

    const nowTime = new Date().toISOString().substring(11, 19) + " UTC";
    setAuditLog((prev) => [
      {
        id: `AUD-${Math.floor(100 + Math.random() * 900)}`,
        timestamp: nowTime,
        actor: "sys_admin",
        action: actionText,
      },
      ...prev,
    ]);

    announce(actionText);
  };

  // CRUD: Delete Confirm
  const handleDeleteConfirm = () => {
    if (!deletingUser) return;

    setUsers((prev) => prev.filter((u) => u.id !== deletingUser.id));
    setCheckedIds((prev) => {
      const next = new Set(prev);
      next.delete(deletingUser.id);
      return next;
    });

    if (selectedUserId === deletingUser.id) {
      const remaining = users.filter((u) => u.id !== deletingUser.id);
      if (remaining[0]) setSelectedUserId(remaining[0].id);
    }

    const nowTime = new Date().toISOString().substring(11, 19) + " UTC";
    setAuditLog((prev) => [
      {
        id: `AUD-${Math.floor(100 + Math.random() * 900)}`,
        timestamp: nowTime,
        actor: "sys_admin",
        action: `Permanently removed ${deletingUser.name} from directory`,
      },
      ...prev,
    ]);

    setIsDeleteOpen(false);
    announce(`User account for ${deletingUser.name} was permanently removed.`);
    setDeletingUser(null);
  };

  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-3.5rem)] bg-background">
      {/* 1. Explanatory Context Header Bar */}
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
              USER DIRECTORY
            </span>
            <span className="bevel-inset bg-primary px-1.5 py-0.2 text-[9px] font-bold text-primary-foreground uppercase hidden md:inline-block">
              REFERENCE IMPLEMENTATION
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <span className="hidden sm:inline">Composed 100% from @ditherweb/ui primitives</span>
            <span className="bevel-raised px-1.5 py-0.5 text-[10px] text-foreground font-bold select-none">
              DOGFOODING
            </span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Workspace with Sidebar */}
      <SidebarProvider defaultOpen>
        <div className="flex w-full flex-1 min-h-[calc(100vh-6.5rem)]">
          {/* Admin Left Sidebar */}
          <AdminSidebar
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            userCount={users.length}
          />

          {/* Main Content Workspace */}
          <div className="flex-1 min-w-0 max-w-full flex flex-col">
            {/* Mobile Top Navigation Bar (<1024px) */}
            <div className="lg:hidden flex items-center justify-between border-b border-border bg-surface p-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <span className="font-bold text-foreground">User Directory</span>
              </div>
              <Badge variant="outline" className="text-success border-success text-[10px] font-bold uppercase">
                ● OPERATIONAL
              </Badge>
            </div>

            {/* Content Container */}
            <div className="mx-auto max-w-7xl w-full px-4 py-6 sm:px-6 lg:px-8 space-y-6 flex-1">
              {/* Page Title & Top Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                      Users
                    </h1>
                    <Badge variant="outline" className="hidden sm:inline-flex text-success border-success font-mono text-[10px] font-bold">
                      ● SYSTEM OPERATIONAL
                    </Badge>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mt-1">
                    Manage directory accounts, access assignments, and organizational teams.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="font-mono text-xs font-bold uppercase"
                    onClick={() => announce("Exported user roster in CSV format.")}
                  >
                    Export CSV
                  </Button>
                  <Button
                    size="sm"
                    className="font-mono text-xs font-bold uppercase"
                    onClick={() => {
                      setAddFormError(null);
                      setIsAddOpen(true);
                    }}
                  >
                    + Add User
                  </Button>
                </div>
              </div>

              {/* Status Announcement Alert */}
              {statusMessage && (
                <Alert variant="default" className="bevel-inset bg-surface border-primary font-mono text-xs">
                  <AlertTitle className="font-bold text-primary">DIRECTORY STATUS</AlertTitle>
                  <AlertDescription className="text-foreground">{statusMessage}</AlertDescription>
                </Alert>
              )}

              {/* Summary Strip (4 KPI Panels) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Card className="border border-border bg-surface p-3 space-y-1">
                  <div className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                    Total Users
                  </div>
                  <div className="font-mono text-2xl font-bold text-foreground">
                    {users.length}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    All managed seats
                  </div>
                </Card>

                <Card className="border border-border bg-surface p-3 space-y-1">
                  <div className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                    Active
                  </div>
                  <div className="font-mono text-2xl font-bold text-foreground">
                    {activeCount}
                  </div>
                  <div className="font-mono text-[10px] text-success">
                    ● Granted access
                  </div>
                </Card>

                <Card className="border border-border bg-surface p-3 space-y-1">
                  <div className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                    Pending
                  </div>
                  <div className="font-mono text-2xl font-bold text-foreground">
                    {pendingCount}
                  </div>
                  <div className="font-mono text-[10px] text-warning">
                    ▲ Awaiting sign-on
                  </div>
                </Card>

                <Card className="border border-border bg-surface p-3 space-y-1">
                  <div className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                    Suspended
                  </div>
                  <div className="font-mono text-2xl font-bold text-foreground">
                    {suspendedCount}
                  </div>
                  <div className="font-mono text-[10px] text-destructive">
                    ✕ Locked accounts
                  </div>
                </Card>
              </div>

              {/* Filters & Search Toolbar */}
              <div className="border border-border bg-surface p-3 space-y-3 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  {/* Search Input */}
                  <div className="sm:col-span-6">
                    <label htmlFor="user-directory-search" className="sr-only">
                      Search accounts
                    </label>
                    <SearchInput
                      id="user-directory-search"
                      placeholder="Search users by name, email, or ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onClear={() => setSearchQuery("")}
                    />
                  </div>

                  {/* Role Select Filter */}
                  <div className="sm:col-span-3">
                    <label htmlFor="filter-role-select" className="sr-only">
                      Filter by role
                    </label>
                    <Select
                      id="filter-role-select"
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value)}
                    >
                      <option value="ALL">All Roles ({users.length})</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Senior Engineer">Senior Engineer</option>
                      <option value="Product Designer">Product Designer</option>
                      <option value="Security Auditor">Security Auditor</option>
                    </Select>
                  </div>

                  {/* Status Select Filter */}
                  <div className="sm:col-span-3">
                    <label htmlFor="filter-status-select" className="sr-only">
                      Filter by status
                    </label>
                    <Select
                      id="filter-status-select"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="ALL">All Statuses ({users.length})</option>
                      <option value="active">Active ({activeCount})</option>
                      <option value="pending">Pending ({pendingCount})</option>
                      <option value="suspended">Suspended ({suspendedCount})</option>
                    </Select>
                  </div>
                </div>

                {/* Filter Indicator / Reset */}
                {(searchQuery || roleFilter !== "ALL" || statusFilter !== "ALL") && (
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-border/50 text-muted-foreground">
                    <span>
                      Filtered: Showing {filteredUsers.length} of {users.length} accounts
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setRoleFilter("ALL");
                        setStatusFilter("ALL");
                      }}
                      className="text-primary hover:underline font-bold"
                    >
                      Reset Filters ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Primary User Directory Table */}
              <Panel className="border border-border bg-surface">
                <PanelHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <PanelTitle className="font-mono text-sm font-bold uppercase tracking-wider">
                      Directory Accounts
                    </PanelTitle>
                    <PanelDescription className="font-mono text-xs text-muted-foreground">
                      Displaying {filteredUsers.length} user records with role policies
                    </PanelDescription>
                  </div>
                  {checkedIds.size > 0 && (
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="text-primary font-bold">
                        {checkedIds.size} selected
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 px-2 text-[10px] font-bold"
                        onClick={() => {
                          announce(`Batch exported ${checkedIds.size} records.`);
                          setCheckedIds(new Set());
                        }}
                      >
                        Batch Export
                      </Button>
                    </div>
                  )}
                </PanelHeader>

                <PanelContent className="p-0">
                  <div className="w-full overflow-x-auto">
                    <Table className="w-full font-mono text-xs">
                      <TableHeader>
                        <TableRow className="border-b border-border bg-muted/40">
                          <TableHead className="w-10">
                            <Checkbox
                              id="select-all-users"
                              checked={
                                filteredUsers.length > 0 &&
                                checkedIds.size === filteredUsers.length
                              }
                              onChange={toggleAll}
                              aria-label="Select all displayed users"
                            />
                          </TableHead>
                          <TableHead className="w-20 font-bold">ID</TableHead>
                          <TableHead className="font-bold">User</TableHead>
                          <TableHead className="w-36 font-bold">Role</TableHead>
                          <TableHead className="w-32 font-bold">Team</TableHead>
                          <TableHead className="w-28 font-bold">Status</TableHead>
                          <TableHead className="w-28 font-bold">Last Active</TableHead>
                          <TableHead className="w-44 text-right font-bold">Actions</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        {filteredUsers.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                              <div className="space-y-1">
                                <p className="font-bold">No user records matched your filter criteria.</p>
                                <p className="text-[11px]">Try adjusting your search query or reset filter selections.</p>
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredUsers.map((user) => {
                            const isSelected = selectedUserId === user.id;
                            const isChecked = checkedIds.has(user.id);

                            return (
                              <TableRow
                                key={user.id}
                                className={cn(
                                  "border-b border-border/60 hover:bg-muted/40 transition-colors cursor-pointer",
                                  isSelected && "bg-muted/60",
                                )}
                                onClick={() => setSelectedUserId(user.id)}
                              >
                                <TableCell onClick={(e) => e.stopPropagation()}>
                                  <Checkbox
                                    id={`check-${user.id}`}
                                    checked={isChecked}
                                    onChange={() => toggleCheck(user.id)}
                                    aria-label={`Select ${user.name}`}
                                  />
                                </TableCell>
                                <TableCell className="font-bold text-muted-foreground">
                                  {user.id}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Avatar size="sm">
                                      <AvatarFallback className="text-[9px] font-bold">
                                        {user.initials}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-bold text-foreground truncate">
                                        {user.name}
                                      </span>
                                      <span className="text-[10px] text-muted-foreground truncate">
                                        {user.email}
                                      </span>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <span className="bevel-inset bg-muted px-1.5 py-0.5 text-[10px] font-bold text-foreground">
                                    {user.role}
                                  </span>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                  {user.team}
                                </TableCell>
                                <TableCell>
                                  {user.status === "active" && (
                                    <Badge variant="outline" className="text-[9px] font-bold text-success border-success">
                                      ACTIVE
                                    </Badge>
                                  )}
                                  {user.status === "pending" && (
                                    <Badge variant="outline" className="text-[9px] font-bold text-warning border-warning">
                                      PENDING
                                    </Badge>
                                  )}
                                  {user.status === "suspended" && (
                                    <Badge variant="outline" className="text-[9px] font-bold text-destructive border-destructive">
                                      SUSPENDED
                                    </Badge>
                                  )}
                                </TableCell>
                                <TableCell className="text-muted-foreground text-[11px]">
                                  {user.lastActive}
                                </TableCell>
                                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                  <div className="inline-flex items-center gap-1 justify-end">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-6 px-1.5 font-mono text-[10px] font-bold uppercase"
                                      onClick={() => {
                                        setEditingUser({ ...user });
                                        setIsEditOpen(true);
                                      }}
                                    >
                                      Edit
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className={cn(
                                        "h-6 px-1.5 font-mono text-[10px] font-bold uppercase",
                                        user.status === "suspended"
                                          ? "text-success border-success/60"
                                          : "text-warning border-warning/60",
                                      )}
                                      onClick={() => handleSuspendToggle(user)}
                                    >
                                      {user.status === "suspended" ? "Unsuspend" : "Suspend"}
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      className="h-6 px-1.5 font-mono text-[10px] font-bold uppercase"
                                      onClick={() => {
                                        setDeletingUser(user);
                                        setIsDeleteOpen(true);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </PanelContent>
              </Panel>

              {/* 3. Bottom Columns: Permissions Inspector + Audit Log */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Permissions & Profile Inspector (7 cols) */}
                <div className="lg:col-span-7">
                  <Panel className="border border-border bg-surface h-full flex flex-col justify-between">
                    <PanelHeader>
                      <PanelTitle className="font-mono text-sm font-bold uppercase tracking-wider">
                        Access Profile &amp; Permission Matrix
                      </PanelTitle>
                      <PanelDescription className="font-mono text-xs text-muted-foreground">
                        Selected directory identity security policy inspection
                      </PanelDescription>
                    </PanelHeader>

                    <PanelContent className="space-y-4">
                      {selectedUser ? (
                        <>
                          <div className="bevel-inset bg-background/50 p-3 flex items-center justify-between gap-3 font-mono">
                            <div className="flex items-center gap-2.5">
                              <Avatar size="md">
                                <AvatarFallback className="font-bold text-xs">
                                  {selectedUser.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="text-xs font-bold text-foreground">
                                  {selectedUser.name} ({selectedUser.id})
                                </div>
                                <div className="text-[11px] text-muted-foreground">
                                  {selectedUser.email} · {selectedUser.team}
                                </div>
                              </div>
                            </div>
                            <span className="bevel-inset px-2 py-0.5 text-[10px] font-bold uppercase text-primary">
                              {selectedUser.role}
                            </span>
                          </div>

                          <DescriptionList layout="horizontal" className="font-mono text-xs space-y-2.5">
                            <DescriptionItem>
                              <DescriptionTerm className="text-muted-foreground w-40 shrink-0">
                                Repository Code:
                              </DescriptionTerm>
                              <DescriptionDetails className="text-foreground">
                                <span className="bevel-raised px-1.5 py-0.2 text-[10px] font-bold text-success mr-1">
                                  READ / WRITE
                                </span>
                                Full branch push and PR creation
                              </DescriptionDetails>
                            </DescriptionItem>

                            <DescriptionItem>
                              <DescriptionTerm className="text-muted-foreground w-40 shrink-0">
                                Production Deploys:
                              </DescriptionTerm>
                              <DescriptionDetails className="text-foreground">
                                {selectedUser.role === "Administrator" || selectedUser.role === "Senior Engineer" ? (
                                  <span className="bevel-raised px-1.5 py-0.2 text-[10px] font-bold text-success mr-1">
                                    AUTHORIZED
                                  </span>
                                ) : (
                                  <span className="bevel-inset px-1.5 py-0.2 text-[10px] font-bold text-muted-foreground mr-1">
                                    RESTRICTED
                                  </span>
                                )}
                                Stage gate pipeline execution
                              </DescriptionDetails>
                            </DescriptionItem>

                            <DescriptionItem>
                              <DescriptionTerm className="text-muted-foreground w-40 shrink-0">
                                Directory Admin:
                              </DescriptionTerm>
                              <DescriptionDetails className="text-foreground">
                                {selectedUser.role === "Administrator" ? (
                                  <span className="bevel-raised px-1.5 py-0.2 text-[10px] font-bold text-success mr-1">
                                    FULL ACCESS
                                  </span>
                                ) : (
                                  <span className="bevel-inset px-1.5 py-0.2 text-[10px] font-bold text-muted-foreground mr-1">
                                    NO ACCESS
                                  </span>
                                )}
                                User provisioning &amp; role assignment
                              </DescriptionDetails>
                            </DescriptionItem>

                            <DescriptionItem>
                              <DescriptionTerm className="text-muted-foreground w-40 shrink-0">
                                Governance Audits:
                              </DescriptionTerm>
                              <DescriptionDetails className="text-foreground">
                                <span className="bevel-raised px-1.5 py-0.2 text-[10px] font-bold text-info mr-1">
                                  AUDIT LOGGED
                                </span>
                                Read &amp; export security logs
                              </DescriptionDetails>
                            </DescriptionItem>
                          </DescriptionList>
                        </>
                      ) : (
                        <p className="font-mono text-xs text-muted-foreground">
                          Select a user row above to inspect security policies.
                        </p>
                      )}
                    </PanelContent>
                  </Panel>
                </div>

                {/* Audit Log Stream (5 cols) */}
                <div className="lg:col-span-5">
                  <Panel className="border border-border bg-surface h-full flex flex-col justify-between">
                    <PanelHeader>
                      <PanelTitle className="font-mono text-sm font-bold uppercase tracking-wider">
                        Administrative Audit Trail
                      </PanelTitle>
                      <PanelDescription className="font-mono text-xs text-muted-foreground">
                        Recent privileged directory events
                      </PanelDescription>
                    </PanelHeader>

                    <PanelContent className="space-y-3">
                      <div className="space-y-2.5 font-mono text-xs">
                        {auditLog.slice(0, 5).map((log) => (
                          <div
                            key={log.id}
                            className="border-b border-border/50 pb-2 flex flex-col gap-0.5"
                          >
                            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                              <span>{log.timestamp}</span>
                              <span className="font-bold text-primary">{log.actor}</span>
                            </div>
                            <div className="text-foreground text-[11px] leading-tight">
                              {log.action}
                            </div>
                          </div>
                        ))}
                      </div>
                    </PanelContent>
                  </Panel>
                </div>
              </div>

              {/* 4. Bottom System Status Strip */}
              <div className="bevel-inset bg-surface/80 p-3 font-mono text-[11px] text-muted-foreground flex flex-wrap items-center justify-between gap-3 border border-border">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 bg-success inline-block" />
                    <span className="font-bold text-foreground">DIRECTORY:</span> ONLINE
                  </span>
                  <span>
                    <span className="font-bold text-foreground">SEATS:</span> {users.length} / 50 ASSIGNED
                  </span>
                  <span>
                    <span className="font-bold text-foreground">MFA POLICY:</span> ENFORCED (100%)
                  </span>
                  <span>
                    <span className="font-bold text-foreground">ENCRYPTION:</span> AES-256-GCM
                  </span>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  USER DIRECTORY · DITHERWEB DOGFOODING REF
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>

      {/* ==================================================================== */}
      {/* ADD USER MODAL DIALOG                                                */}
      {/* ==================================================================== */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="max-w-md border-2 border-border bg-surface p-0 font-mono">
          <form onSubmit={handleAddSubmit}>
            <DialogHeader className="border-b border-border p-4">
              <DialogTitle className="text-base font-bold uppercase tracking-wider text-foreground">
                Provision New User
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-1">
                Add an individual directory account with designated role &amp; team assignments.
              </DialogDescription>
            </DialogHeader>

            <DialogBody className="p-4 space-y-4 text-xs">
              {addFormError && (
                <div className="bevel-inset bg-destructive/15 text-destructive p-2 font-bold text-[11px]">
                  {addFormError}
                </div>
              )}

              <div className="space-y-1">
                <label htmlFor="add-user-name" className="font-bold text-foreground block">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="add-user-name"
                  placeholder="e.g. Victor Thorne"
                  value={addFormName}
                  onChange={(e) => setAddFormName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="add-user-email" className="font-bold text-foreground block">
                  Corporate Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="add-user-email"
                  type="email"
                  placeholder="e.g. victor.thorne@ditherweb.org"
                  value={addFormEmail}
                  onChange={(e) => setAddFormEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="add-user-role" className="font-bold text-foreground block">
                    Role Assignment
                  </label>
                  <Select
                    id="add-user-role"
                    value={addFormRole}
                    onChange={(e) => setAddFormRole(e.target.value as UserRole)}
                  >
                    <option value="Senior Engineer">Senior Engineer</option>
                    <option value="Product Designer">Product Designer</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Security Auditor">Security Auditor</option>
                  </Select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="add-user-team" className="font-bold text-foreground block">
                    Assigned Team
                  </label>
                  <Select
                    id="add-user-team"
                    value={addFormTeam}
                    onChange={(e) => setAddFormTeam(e.target.value)}
                  >
                    <option value="Core Engine">Core Engine</option>
                    <option value="Design Systems">Design Systems</option>
                    <option value="Accessibility">Accessibility</option>
                    <option value="Infrastructure">Infrastructure</option>
                  </Select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="add-user-status" className="font-bold text-foreground block">
                  Initial Account State
                </label>
                <Select
                  id="add-user-status"
                  value={addFormStatus}
                  onChange={(e) => setAddFormStatus(e.target.value as UserStatus)}
                >
                  <option value="active">Active (Immediate Login)</option>
                  <option value="pending">Pending (Invitation Sent)</option>
                </Select>
              </div>
            </DialogBody>

            <DialogFooter className="border-t border-border p-4 flex justify-end gap-2 bg-muted/20">
              <Button
                type="button"
                variant="outline"
                className="font-mono text-xs uppercase font-bold"
                onClick={() => setIsAddOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="font-mono text-xs uppercase font-bold"
              >
                Create Account
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ==================================================================== */}
      {/* EDIT USER MODAL DIALOG                                               */}
      {/* ==================================================================== */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-md border-2 border-border bg-surface p-0 font-mono">
          {editingUser && (
            <form onSubmit={handleEditSubmit}>
              <DialogHeader className="border-b border-border p-4">
                <DialogTitle className="text-base font-bold uppercase tracking-wider text-foreground">
                  Edit Account: {editingUser.name}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-1">
                  Modify organizational role, team assignment, or directory status.
                </DialogDescription>
              </DialogHeader>

              <DialogBody className="p-4 space-y-4 text-xs">
                <div className="space-y-1">
                  <label htmlFor="edit-user-name" className="font-bold text-foreground block">
                    Full Name
                  </label>
                  <Input
                    id="edit-user-name"
                    value={editingUser.name}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="edit-user-email" className="font-bold text-foreground block">
                    Corporate Email
                  </label>
                  <Input
                    id="edit-user-email"
                    type="email"
                    value={editingUser.email}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="edit-user-role" className="font-bold text-foreground block">
                      Role
                    </label>
                    <Select
                      id="edit-user-role"
                      value={editingUser.role}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          role: e.target.value as UserRole,
                        })
                      }
                    >
                      <option value="Administrator">Administrator</option>
                      <option value="Senior Engineer">Senior Engineer</option>
                      <option value="Product Designer">Product Designer</option>
                      <option value="Security Auditor">Security Auditor</option>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="edit-user-team" className="font-bold text-foreground block">
                      Team
                    </label>
                    <Select
                      id="edit-user-team"
                      value={editingUser.team}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          team: e.target.value,
                        })
                      }
                    >
                      <option value="Core Engine">Core Engine</option>
                      <option value="Design Systems">Design Systems</option>
                      <option value="Accessibility">Accessibility</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Shader & WebGL">Shader &amp; WebGL</option>
                      <option value="Compliance">Compliance</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="edit-user-status" className="font-bold text-foreground block">
                    Account Status
                  </label>
                  <Select
                    id="edit-user-status"
                    value={editingUser.status}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        status: e.target.value as UserStatus,
                      })
                    }
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="suspended">Suspended</option>
                  </Select>
                </div>
              </DialogBody>

              <DialogFooter className="border-t border-border p-4 flex justify-end gap-2 bg-muted/20">
                <Button
                  type="button"
                  variant="outline"
                  className="font-mono text-xs uppercase font-bold"
                  onClick={() => setIsEditOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="font-mono text-xs uppercase font-bold"
                >
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* ==================================================================== */}
      {/* DELETE CONFIRMATION ALERT DIALOG                                     */}
      {/* ==================================================================== */}
      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent className="max-w-md border-2 border-border bg-surface p-0 font-mono">
          <AlertDialogHeader className="border-b border-border p-4">
            <AlertDialogTitle className="text-base font-bold uppercase tracking-wider text-destructive">
              Delete User Account?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-xs text-muted-foreground mt-1">
              {deletingUser
                ? `Are you sure you want to remove "${deletingUser.name}" (${deletingUser.email}) from this directory? This action cannot be undone.`
                : "Confirm permanent removal of this account."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogBody className="p-4 text-xs space-y-2">
            <p className="text-foreground">
              Revoking directory access will terminate all active session tokens, invalidate API keys,
              and purge team assignments across the organization.
            </p>
          </AlertDialogBody>

          <AlertDialogFooter className="border-t border-border p-4 flex justify-end gap-2 bg-muted/20">
            <AlertDialogCancel
              className="font-mono text-xs uppercase font-bold"
              onClick={() => setIsDeleteOpen(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="font-mono text-xs uppercase font-bold bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDeleteConfirm}
            >
              Delete User
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
