"use client";

import * as React from "react";
import Link from "next/link";
import {
  Desktop,
  DesktopIconGrid,
  DesktopIcon,
  Window,
  WindowContent,
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
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
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
  Tree,
  type TreeNodeData,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Progress,
  Badge,
  Button,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelContent,
  Separator,
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
  Alert,
  AlertTitle,
  AlertDescription,
  cn,
} from "@ditherweb/ui";

type WindowId = "terminal" | "files" | "monitor" | "canvas";

interface WindowState {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: string;
}

interface FictionalFile {
  name: string;
  size: string;
  mode: string;
  date: string;
  type: "file" | "image" | "config" | "log";
  content: string;
}

const FICTIONAL_FILES: Record<string, FictionalFile> = {
  "README.txt": {
    name: "README.txt",
    size: "1.2 KB",
    mode: "-rw-r--r--",
    date: "10/08/2001 09:14",
    type: "file",
    content:
      "====================================================\n" +
      "BYTEWORKS WORKSTATION // NODE 01\n" +
      "Virtual Architecture: Ditherweb 0.1.0\n" +
      "====================================================\n\n" +
      "Welcome to the developer workstation session. This environment\n" +
      "demonstrates composite window management, presentation terminals,\n" +
      "and bitmap graphic primitives. All metrics and files are virtual.",
  },
  "todo.txt": {
    name: "todo.txt",
    size: "420 B",
    mode: "-rw-r--r--",
    date: "10/08/2001 11:30",
    type: "file",
    content:
      "[x] 1. Calibrate Floyd-Steinberg dithering lookup matrix\n" +
      "[x] 2. Verify 88x31 button palette consistency\n" +
      "[ ] 3. Synthesize 4-channel MOD audio routine\n" +
      "[ ] 4. Benchmark 16x16 bitmap rasterizer on low-RAM profiles\n" +
      "[x] 5. Verify zero horizontal page-level overflow across viewports",
  },
  "system.cfg": {
    name: "system.cfg",
    size: "680 B",
    mode: "-rw-------",
    date: "09/24/2001 18:02",
    type: "config",
    content:
      "[workstation]\n" +
      "hostname=byteworks-node01\n" +
      "domain=virtual.local\n" +
      "architecture=ditherweb-x86\n" +
      "display=1024x768_85hz\n" +
      "palette=bayer_monochrome\n\n" +
      "[network]\n" +
      "interface=modem0\n" +
      "protocol=v90_56k\n" +
      "baud_rate=57600\n" +
      "compression=v42bis",
  },
  "project.log": {
    name: "project.log",
    size: "2.4 KB",
    mode: "-rw-r--r--",
    date: "10/08/2001 14:22",
    type: "log",
    content:
      "08:00:12 [KERNEL] Boot sequence completed in 420ms.\n" +
      "08:00:13 [WM] Ditherweb Window Manager initialized.\n" +
      "08:00:15 [FS] Virtual volume /home/operator mounted (3.1 GB allocated).\n" +
      "08:00:18 [TTY] Session tty1 attached to operator.\n" +
      "08:00:22 [STATUS] All 4 desktop subsystems operational.",
  },
  "wallpaper.bmp": {
    name: "wallpaper.bmp",
    size: "8.1 KB",
    mode: "-rw-r--r--",
    date: "08/15/2001 22:45",
    type: "image",
    content:
      "[BITMAP IMAGE DATA: 64x64 1-bit Bayer Dither Texture]\n" +
      "Header: BM\n" +
      "Dimensions: 64 x 64 pixels\n" +
      "Color Depth: 1-bit monochrome indexed\n" +
      "Compression: None (Raw uncompressed bitmap)",
  },
};

const FILE_TREE_DATA: TreeNodeData[] = [
  {
    id: "root",
    label: "/home/operator",
    children: [
      {
        id: "projects",
        label: "projects",
        children: [
          { id: "dither-canvas", label: "dither-canvas.ts" },
          { id: "matrix-font", label: "matrix-font.bdf" },
        ],
      },
      {
        id: "notes",
        label: "notes",
        children: [
          { id: "ideas", label: "ideas.txt" },
          { id: "specs", label: "workstation-specs.doc" },
        ],
      },
      {
        id: "screens",
        label: "screens",
        children: [{ id: "shot01", label: "boot-screen.bmp" }],
      },
      {
        id: "archive",
        label: "archive",
        children: [{ id: "bbs-dumps", label: "bbs-logs-99.tar.gz" }],
      },
    ],
  },
];

// 16x16 pixel icon matrix for bitmap canvas
const INITIAL_CANVAS_GRID: string[][] = [
  ["#000000", "#000000", "#000000", "#008080", "#008080", "#008080", "#008080", "#008080", "#008080", "#008080", "#008080", "#008080", "#000000", "#000000", "#000000", "#000000"],
  ["#000000", "#000000", "#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080", "#000000", "#000000", "#000000"],
  ["#000000", "#008080", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#008080", "#000000", "#000000"],
  ["#000000", "#008080", "#ffffff", "#000000", "#00ff00", "#00ff00", "#000000", "#000000", "#000000", "#00ff00", "#00ff00", "#000000", "#ffffff", "#008080", "#000000", "#000000"],
  ["#000000", "#008080", "#ffffff", "#000000", "#00ff00", "#00ff00", "#000000", "#000000", "#000000", "#00ff00", "#00ff00", "#000000", "#ffffff", "#008080", "#000000", "#000000"],
  ["#000000", "#008080", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#008080", "#000000", "#000000"],
  ["#000000", "#008080", "#ffffff", "#000000", "#000000", "#00ff00", "#00ff00", "#00ff00", "#00ff00", "#000000", "#000000", "#000000", "#ffffff", "#008080", "#000000", "#000000"],
  ["#000000", "#008080", "#ffffff", "#000000", "#00ff00", "#000000", "#000000", "#000000", "#000000", "#00ff00", "#000000", "#000000", "#ffffff", "#008080", "#000000", "#000000"],
  ["#000000", "#008080", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#008080", "#000000", "#000000"],
  ["#000000", "#000000", "#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080", "#000000", "#000000", "#000000"],
  ["#000000", "#000000", "#000000", "#008080", "#008080", "#008080", "#008080", "#008080", "#008080", "#008080", "#008080", "#008080", "#000000", "#000000", "#000000", "#000000"],
  ["#000000", "#000000", "#000000", "#000000", "#000000", "#008080", "#008080", "#008080", "#008080", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
  ["#000000", "#000000", "#000000", "#000000", "#000000", "#008080", "#008080", "#008080", "#008080", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
  ["#000000", "#000000", "#000000", "#000000", "#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
  ["#000000", "#000000", "#000000", "#008080", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#008080", "#000000", "#000000", "#000000", "#000000", "#000000"],
  ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
];

export function TerminalExampleClient() {
  // Window states
  const [windows, setWindows] = React.useState<Record<WindowId, WindowState>>({
    terminal: { isOpen: true, isMinimized: false, isMaximized: false },
    files: { isOpen: true, isMinimized: false, isMaximized: false },
    monitor: { isOpen: true, isMinimized: false, isMaximized: false },
    canvas: { isOpen: true, isMinimized: false, isMaximized: false },
  });

  const [activeWindow, setActiveWindow] = React.useState<WindowId>("terminal");

  // Terminal state
  const [terminalInput, setTerminalInput] = React.useState("");
  const [terminalHistory, setTerminalHistory] = React.useState<CommandHistoryItem[]>([
    {
      id: "h1",
      command: "whoami",
      output: "operator",
    },
    {
      id: "h2",
      command: "pwd",
      output: "/home/operator",
    },
    {
      id: "h3",
      command: "status",
      output:
        "CPU Load ....... 18%\n" +
        "Memory ......... 42% (54MB / 128MB SDRAM)\n" +
        "Disk Storage ... 31% (3.1GB / 10.0GB IDE)\n" +
        "Network ........ IDLE (56k V.90 FaxModem)\n" +
        "Uptime ......... 42 days, 07:18:22",
    },
  ]);

  // File browser state
  const [selectedFileName, setSelectedFileName] = React.useState<string>("README.txt");

  // Pixel Canvas state
  const [canvasGrid, setCanvasGrid] = React.useState<string[][]>(INITIAL_CANVAS_GRID);
  const [activeColor, setActiveColor] = React.useState<string>("#00ff00");

  // Notification announcement
  const [desktopNotice, setDesktopNotice] = React.useState<string | null>(null);

  const announce = (msg: string) => {
    setDesktopNotice(msg);
    setTimeout(() => setDesktopNotice(null), 4000);
  };

  const focusWindow = (id: WindowId) => {
    setActiveWindow(id);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, isMinimized: false },
    }));
  };

  const closeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
    // Shift focus to another open window
    const otherKeys = (Object.keys(windows) as WindowId[]).filter(
      (k) => k !== id && windows[k].isOpen && !windows[k].isMinimized
    );
    if (otherKeys.length > 0) {
      setActiveWindow(otherKeys[0]);
    }
  };

  const toggleMinimize = (id: WindowId) => {
    setWindows((prev) => {
      const willMinimize = !prev[id].isMinimized;
      return {
        ...prev,
        [id]: { ...prev[id], isMinimized: willMinimize },
      };
    });
  };

  const toggleMaximize = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMaximized: !prev[id].isMaximized },
    }));
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim();
    if (!cmd) return;

    let output = "";
    const lower = cmd.toLowerCase();

    if (lower === "help") {
      output =
        "AVAILABLE FICTIONAL COMMANDS:\n" +
        "  help       - Display this list of commands\n" +
        "  status     - Show system telemetry and hardware health\n" +
        "  ls         - List files in current directory\n" +
        "  pwd        - Print working directory\n" +
        "  whoami     - Print current virtual user\n" +
        "  date       - Display current system time\n" +
        "  uptime     - Display workstation uptime\n" +
        "  cat <file> - Inspect file contents (e.g. cat README.txt)\n" +
        "  about      - Display Byteworks workstation architecture summary\n" +
        "  clear      - Clear terminal session history";
    } else if (lower === "status") {
      output =
        "CPU Load ....... 18%\n" +
        "Memory ......... 42% (54MB / 128MB SDRAM)\n" +
        "Disk Storage ... 31% (3.1GB / 10.0GB IDE)\n" +
        "Network ........ IDLE (56k V.90 FaxModem)\n" +
        "Uptime ......... 42 days, 07:18:22";
    } else if (lower === "ls") {
      output = "projects/  notes/  screens/  archive/  README.txt  todo.txt  project.log  system.cfg  wallpaper.bmp";
    } else if (lower === "pwd") {
      output = "/home/operator";
    } else if (lower === "whoami") {
      output = "operator";
    } else if (lower === "date") {
      output = new Date().toUTCString();
    } else if (lower === "uptime") {
      output = "42 days, 07:18:22, load average: 0.18, 0.24, 0.19";
    } else if (lower === "about") {
      output =
        "BYTEWORKS VIRTUAL WORKSTATION // NODE 01\n" +
        "Architecture: Ditherweb UI Framework\n" +
        "Kernel: Web-Standards Monolithic (Pure CSS/JS)\n" +
        "Status: 100% Operational • Zero System Access";
    } else if (lower.startsWith("cat ")) {
      const fileName = cmd.substring(4).trim();
      if (FICTIONAL_FILES[fileName]) {
        output = FICTIONAL_FILES[fileName].content;
      } else {
        output = `cat: ${fileName}: No such file or directory`;
      }
    } else if (lower === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    } else {
      output = `sh: ${cmd}: command not found. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [
      ...prev,
      { id: `cmd-${Date.now()}`, command: cmd, output },
    ]);
    setTerminalInput("");
  };

  const handleResetCanvas = () => {
    setCanvasGrid(INITIAL_CANVAS_GRID);
    announce("Bitmap Canvas reset to default matrix pattern.");
  };

  const handleClearCanvas = () => {
    setCanvasGrid(
      Array.from({ length: 16 }, () =>
        Array.from({ length: 16 }, () => "#000000")
      )
    );
    announce("Bitmap Canvas cleared to monochrome background.");
  };

  const selectedFile = FICTIONAL_FILES[selectedFileName] || FICTIONAL_FILES["README.txt"];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex flex-col selection:bg-primary selection:text-primary-foreground">
      {/* 1. Context Navigation Bar */}
      <div className="border-b border-border bg-surface/80 backdrop-blur px-4 py-2 text-xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
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
              BYTEWORKS WORKSTATION
            </span>
            <Badge variant="primary" className="text-[9px] py-0 hidden md:inline-flex">
              CLASSIC WORKSTATION
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

      {/* 2. Workstation Menu Bar */}
      <div className="max-w-6xl w-full mx-auto px-2 pt-2">
        <MenuBar className="border-b-0 rounded-none w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Menu>
              <MenuTrigger className="px-2 py-0.5 text-xs font-bold hover:bg-muted select-none">
                SYSTEM
              </MenuTrigger>
              <MenuContent className="w-56 font-mono text-xs">
                <MenuItem onClick={() => announce("BYTEWORKS NODE 01: Ditherweb Virtual Workstation v2001.04. Status: Operational.")}>
                  System Information...
                </MenuItem>
                <MenuItem onClick={() => announce("Display mode: 1024x768 True-Color with Bayer Dither Overlay.")}>
                  Display Setup...
                </MenuItem>
                <MenuSeparator />
                <MenuItem onClick={() => {
                  setWindows({
                    terminal: { isOpen: false, isMinimized: false, isMaximized: false },
                    files: { isOpen: false, isMinimized: false, isMaximized: false },
                    monitor: { isOpen: false, isMinimized: false, isMaximized: false },
                    canvas: { isOpen: false, isMinimized: false, isMaximized: false },
                  });
                  announce("All windows closed. Launch applications via Desktop Icons.");
                }}>
                  Close All Windows
                </MenuItem>
              </MenuContent>
            </Menu>

            <Menu>
              <MenuTrigger className="px-2 py-0.5 text-xs font-bold hover:bg-muted select-none">
                APPLICATIONS
              </MenuTrigger>
              <MenuContent className="w-48 font-mono text-xs">
                <MenuItem onClick={() => focusWindow("terminal")}>
                  Terminal (TTY1)
                </MenuItem>
                <MenuItem onClick={() => focusWindow("files")}>
                  File Manager
                </MenuItem>
                <MenuItem onClick={() => focusWindow("monitor")}>
                  System Monitor
                </MenuItem>
                <MenuItem onClick={() => focusWindow("canvas")}>
                  Pixel Canvas
                </MenuItem>
              </MenuContent>
            </Menu>

            <Menu>
              <MenuTrigger className="px-2 py-0.5 text-xs font-bold hover:bg-muted select-none">
                VIEW
              </MenuTrigger>
              <MenuContent className="w-48 font-mono text-xs">
                <MenuItem onClick={() => {
                  const keys: WindowId[] = ["terminal", "files", "monitor", "canvas"];
                  const next = keys[(keys.indexOf(activeWindow) + 1) % keys.length];
                  focusWindow(next);
                }}>
                  Cycle Next Window
                </MenuItem>
                <MenuItem onClick={() => {
                  setWindows({
                    terminal: { isOpen: true, isMinimized: false, isMaximized: false },
                    files: { isOpen: true, isMinimized: false, isMaximized: false },
                    monitor: { isOpen: true, isMinimized: false, isMaximized: false },
                    canvas: { isOpen: true, isMinimized: false, isMaximized: false },
                  });
                  announce("All 4 application windows restored to desktop.");
                }}>
                  Tile All Windows
                </MenuItem>
              </MenuContent>
            </Menu>

            <Menu>
              <MenuTrigger className="px-2 py-0.5 text-xs font-bold hover:bg-muted select-none">
                HELP
              </MenuTrigger>
              <MenuContent className="w-56 font-mono text-xs">
                <MenuItem onClick={() => announce("Press Tab to navigate icons. Right-click desktop for Context Menu. Type 'help' in Terminal.")}>
                  Workstation Manual
                </MenuItem>
                <MenuItem onClick={() => announce("Virtual session running inside Ditherweb. No local system access.")}>
                  About Security
                </MenuItem>
              </MenuContent>
            </Menu>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-muted-foreground pr-2 font-mono">
            <span className="hidden sm:inline">BYTEWORKS NODE 01</span>
            <Badge variant="outline" className="text-[9px] py-0">VIRTUAL TTY</Badge>
          </div>
        </MenuBar>
      </div>

      {/* 3. Main Workstation Canvas */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-2 pb-2 flex flex-col">
        {desktopNotice && (
          <div className="pt-2">
            <Alert variant="default" className="bevel-raised bg-surface py-2 text-xs">
              <AlertTitle className="text-primary font-bold flex items-center gap-1.5">
                <span>ℹ</span>
                <span>WORKSTATION NOTICE</span>
              </AlertTitle>
              <AlertDescription className="text-xs text-muted-foreground">
                {desktopNotice}
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Desktop Container with Right-Click ContextMenu */}
        <ContextMenu>
          <ContextMenuTrigger className="flex-1 flex flex-col min-h-[580px] sm:min-h-[640px]">
            <Desktop
              wallpaper="dither"
              className="flex-1 w-full relative p-2 sm:p-4 flex flex-col justify-between"
            >
              {/* Desktop Icons Layer (Visible on tablet/desktop) */}
              <DesktopIconGrid className="hidden sm:flex absolute top-2 left-2 z-10 flex-col gap-2">
                <DesktopIcon
                  label="Terminal"
                  selected={activeWindow === "terminal" && windows.terminal.isOpen}
                  onClick={() => focusWindow("terminal")}
                  onOpen={() => focusWindow("terminal")}
                  icon={
                    <div className="w-7 h-7 bevel-raised bg-black text-emerald-400 flex items-center justify-center font-bold text-xs">
                      &gt;_
                    </div>
                  }
                />
                <DesktopIcon
                  label="Files"
                  selected={activeWindow === "files" && windows.files.isOpen}
                  onClick={() => focusWindow("files")}
                  onOpen={() => focusWindow("files")}
                  icon={
                    <div className="w-7 h-7 bevel-raised bg-amber-400 text-black flex items-center justify-center font-bold text-xs">
                      📁
                    </div>
                  }
                />
                <DesktopIcon
                  label="Monitor"
                  selected={activeWindow === "monitor" && windows.monitor.isOpen}
                  onClick={() => focusWindow("monitor")}
                  onOpen={() => focusWindow("monitor")}
                  icon={
                    <div className="w-7 h-7 bevel-raised bg-zinc-800 text-cyan-400 flex items-center justify-center font-bold text-xs">
                      📊
                    </div>
                  }
                />
                <DesktopIcon
                  label="Pixel Viewer"
                  selected={activeWindow === "canvas" && windows.canvas.isOpen}
                  onClick={() => focusWindow("canvas")}
                  onOpen={() => focusWindow("canvas")}
                  icon={
                    <div className="w-7 h-7 bevel-raised bg-indigo-900 text-white flex items-center justify-center font-bold text-xs">
                      🎨
                    </div>
                  }
                />
              </DesktopIconGrid>

              {/* Windows Layer (Desktop Layout: Grid or Stacking) */}
              <div className="flex-1 w-full pl-0 sm:pl-24 pt-2 sm:pt-0 pb-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-start content-start z-20">
                {/* WINDOW 1: TERMINAL */}
                {windows.terminal.isOpen && !windows.terminal.isMinimized && (
                  <Window
                    active={activeWindow === "terminal"}
                    onClick={() => setActiveWindow("terminal")}
                    className={cn(
                      "w-full transition-shadow duration-150",
                      windows.terminal.isMaximized ? "md:col-span-2" : "col-span-1",
                      activeWindow === "terminal" ? "ring-2 ring-primary shadow-hard-lg" : "opacity-95"
                    )}
                  >
                    <WindowTitleBar active={activeWindow === "terminal"}>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <WindowIcon icon={<span className="text-[10px]">⌨</span>} />
                        <WindowTitle>BYTEWORKS TERMINAL // TTY1</WindowTitle>
                      </div>
                      <WindowControls
                        isMaximized={windows.terminal.isMaximized}
                        onMinimize={(e) => {
                          e.stopPropagation();
                          toggleMinimize("terminal");
                        }}
                        onMaximize={(e) => {
                          e.stopPropagation();
                          toggleMaximize("terminal");
                        }}
                        onClose={(e) => {
                          e.stopPropagation();
                          closeWindow("terminal");
                        }}
                      />
                    </WindowTitleBar>

                    <WindowContent padded={false} className="bg-black text-zinc-100 flex flex-col">
                      <Terminal variant="dark" className="border-0 rounded-none h-full">
                        <TerminalHeader title="operator@byteworks: ~ (bash-compat v3.2)" />
                        <TerminalBody className="max-h-[220px] sm:max-h-[260px] text-xs">
                          <TerminalLine>
                            <TerminalOutput>
                              BYTEWORKS WORKSTATION NODE 01 (Virtual Architecture){"\n"}
                              Type &apos;help&apos; for available commands. All sessions are simulated.
                            </TerminalOutput>
                          </TerminalLine>

                          {terminalHistory.map((h) => (
                            <React.Fragment key={h.id}>
                              <TerminalLine>
                                <TerminalPrompt>operator@byteworks:~$</TerminalPrompt>
                                <TerminalCommand>{h.command}</TerminalCommand>
                              </TerminalLine>
                              <TerminalLine>
                                <TerminalOutput>{h.output}</TerminalOutput>
                              </TerminalLine>
                            </React.Fragment>
                          ))}

                          {/* Interactive Command Prompt Line */}
                          <form onSubmit={handleCommandSubmit} className="flex items-center gap-1 mt-1">
                            <TerminalPrompt>operator@byteworks:~$</TerminalPrompt>
                            <input
                              id="term-cmd-input"
                              type="text"
                              value={terminalInput}
                              onChange={(e) => setTerminalInput(e.target.value)}
                              placeholder="type 'help', 'status', 'ls'..."
                              aria-label="Terminal Command Input"
                              className="bg-transparent border-none text-emerald-400 font-mono text-xs focus:outline-none flex-1 min-w-0 p-0 m-0"
                            />
                            <TerminalCursor />
                          </form>
                        </TerminalBody>
                      </Terminal>
                    </WindowContent>

                    <WindowStatusBar>
                      <WindowStatusItem>TTY1 • 80×24 • VT100</WindowStatusItem>
                      <WindowStatusItem className="ml-auto">BASH v3.2</WindowStatusItem>
                    </WindowStatusBar>
                  </Window>
                )}

                {/* WINDOW 2: FILE MANAGER */}
                {windows.files.isOpen && !windows.files.isMinimized && (
                  <Window
                    active={activeWindow === "files"}
                    onClick={() => setActiveWindow("files")}
                    className={cn(
                      "w-full transition-shadow duration-150",
                      windows.files.isMaximized ? "md:col-span-2" : "col-span-1",
                      activeWindow === "files" ? "ring-2 ring-primary shadow-hard-lg" : "opacity-95"
                    )}
                  >
                    <WindowTitleBar active={activeWindow === "files"}>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <WindowIcon icon={<span className="text-[10px]">📁</span>} />
                        <WindowTitle>FILE MANAGER // /home/operator</WindowTitle>
                      </div>
                      <WindowControls
                        isMaximized={windows.files.isMaximized}
                        onMinimize={(e) => {
                          e.stopPropagation();
                          toggleMinimize("files");
                        }}
                        onMaximize={(e) => {
                          e.stopPropagation();
                          toggleMaximize("files");
                        }}
                        onClose={(e) => {
                          e.stopPropagation();
                          closeWindow("files");
                        }}
                      />
                    </WindowTitleBar>

                    <WindowContent className="p-2 space-y-2 text-xs">
                      <div className="flex flex-col sm:flex-row gap-2 items-start">
                        {/* Directory Tree */}
                        <div className="w-full sm:w-44 shrink-0 bevel-inset bg-background p-1.5 text-xs max-h-[160px] overflow-auto">
                          <Tree
                            data={FILE_TREE_DATA}
                            defaultExpandedIds={["root", "projects", "notes"]}
                            className="font-mono text-xs"
                          />
                        </div>

                        {/* File Table */}
                        <div className="flex-1 w-full bevel-inset bg-background overflow-auto max-h-[160px]">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-[10px] py-1">NAME</TableHead>
                                <TableHead className="text-[10px] py-1">SIZE</TableHead>
                                <TableHead className="text-[10px] py-1">PERMS</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {Object.values(FICTIONAL_FILES).map((f) => (
                                <TableRow
                                  key={f.name}
                                  onClick={() => setSelectedFileName(f.name)}
                                  className={cn(
                                    "cursor-pointer select-none",
                                    selectedFileName === f.name ? "bg-primary text-primary-foreground font-bold" : ""
                                  )}
                                >
                                  <TableCell className="py-1 flex items-center gap-1">
                                    <span>{f.type === "image" ? "🖼" : f.type === "config" ? "⚙" : "📄"}</span>
                                    <span>{f.name}</span>
                                  </TableCell>
                                  <TableCell className="py-1 text-[11px]">{f.size}</TableCell>
                                  <TableCell className="py-1 text-[10px]">{f.mode}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>

                      {/* File Details / Preview Panel */}
                      <Panel variant="raised" className="bg-surface p-0 text-xs">
                        <PanelHeader className="px-2 py-1 border-b border-border text-[11px] flex justify-between items-center">
                          <PanelTitle className="font-bold text-[11px] text-foreground">INSPECTING: {selectedFile.name}</PanelTitle>
                          <span className="text-muted-foreground">{selectedFile.size} • {selectedFile.date}</span>
                        </PanelHeader>
                        <PanelContent className="p-2">
                          <pre className="text-[11px] font-mono text-muted-foreground whitespace-pre-wrap max-h-[70px] overflow-y-auto leading-relaxed">
                            {selectedFile.content}
                          </pre>
                        </PanelContent>
                      </Panel>
                    </WindowContent>

                    <WindowStatusBar>
                      <WindowStatusItem>5 Objects • 12.8 KB</WindowStatusItem>
                      <WindowStatusItem className="ml-auto">Disk Free: 6.9 GB</WindowStatusItem>
                    </WindowStatusBar>
                  </Window>
                )}

                {/* WINDOW 3: SYSTEM MONITOR */}
                {windows.monitor.isOpen && !windows.monitor.isMinimized && (
                  <Window
                    active={activeWindow === "monitor"}
                    onClick={() => setActiveWindow("monitor")}
                    className={cn(
                      "w-full transition-shadow duration-150",
                      windows.monitor.isMaximized ? "md:col-span-2" : "col-span-1",
                      activeWindow === "monitor" ? "ring-2 ring-primary shadow-hard-lg" : "opacity-95"
                    )}
                  >
                    <WindowTitleBar active={activeWindow === "monitor"}>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <WindowIcon icon={<span className="text-[10px]">📊</span>} />
                        <WindowTitle>SYS_MONITOR // DIAGNOSTICS</WindowTitle>
                      </div>
                      <WindowControls
                        isMaximized={windows.monitor.isMaximized}
                        onMinimize={(e) => {
                          e.stopPropagation();
                          toggleMinimize("monitor");
                        }}
                        onMaximize={(e) => {
                          e.stopPropagation();
                          toggleMaximize("monitor");
                        }}
                        onClose={(e) => {
                          e.stopPropagation();
                          closeWindow("monitor");
                        }}
                      />
                    </WindowTitleBar>

                    <WindowContent className="p-3 space-y-3 text-xs">
                      {/* Telemetry Stepped Bars */}
                      <div className="space-y-2">
                        <div className="space-y-0.5">
                          <div className="flex justify-between text-[11px]">
                            <span className="font-bold">CPU ALLOCATION</span>
                            <span className="text-primary font-bold">18% (PENTIUM III @ 500MHz)</span>
                          </div>
                          <Progress value={18} max={100} variant="stepped" className="w-full h-3" />
                        </div>

                        <div className="space-y-0.5">
                          <div className="flex justify-between text-[11px]">
                            <span className="font-bold">RAM MEMORY</span>
                            <span className="text-primary font-bold">42% (54MB / 128MB SDRAM)</span>
                          </div>
                          <Progress value={42} max={100} variant="stepped" className="w-full h-3" />
                        </div>

                        <div className="space-y-0.5">
                          <div className="flex justify-between text-[11px]">
                            <span className="font-bold">DISK STORAGE</span>
                            <span className="text-primary font-bold">31% (3.1GB / 10.0GB IDE)</span>
                          </div>
                          <Progress value={31} max={100} variant="stepped" className="w-full h-3" />
                        </div>
                      </div>

                      <Separator />

                      {/* Process Table */}
                      <div className="bevel-inset bg-background p-1 max-h-[100px] overflow-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="py-0.5 text-[10px]">PID</TableHead>
                              <TableHead className="py-0.5 text-[10px]">COMMAND</TableHead>
                              <TableHead className="py-0.5 text-[10px]">CPU</TableHead>
                              <TableHead className="py-0.5 text-[10px] text-right">STATE</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="text-[11px]">
                            <TableRow>
                              <TableCell className="py-0.5">001</TableCell>
                              <TableCell className="py-0.5 font-bold">init</TableCell>
                              <TableCell className="py-0.5">0.1%</TableCell>
                              <TableCell className="py-0.5 text-right"><Badge variant="outline" className="text-[9px]">SLEEP</Badge></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="py-0.5">042</TableCell>
                              <TableCell className="py-0.5 font-bold">byteworks-wm</TableCell>
                              <TableCell className="py-0.5">3.2%</TableCell>
                              <TableCell className="py-0.5 text-right"><Badge variant="default" className="text-[9px]">ACTIVE</Badge></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="py-0.5">112</TableCell>
                              <TableCell className="py-0.5 font-bold">bash (tty1)</TableCell>
                              <TableCell className="py-0.5">0.4%</TableCell>
                              <TableCell className="py-0.5 text-right"><Badge variant="outline" className="text-[9px]">IDLE</Badge></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="py-0.5">180</TableCell>
                              <TableCell className="py-0.5 font-bold">sys-monitor</TableCell>
                              <TableCell className="py-0.5">2.1%</TableCell>
                              <TableCell className="py-0.5 text-right"><Badge variant="default" className="text-[9px]">ACTIVE</Badge></TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <DescriptionList className="grid grid-cols-2 gap-2 text-[10px] pt-1 border-t border-border/50 text-muted-foreground">
                        <DescriptionItem>
                          <DescriptionTerm className="font-bold text-foreground">ARCH:</DescriptionTerm>
                          <DescriptionDetails>x86 Virtual</DescriptionDetails>
                        </DescriptionItem>
                        <DescriptionItem>
                          <DescriptionTerm className="font-bold text-foreground">MODEM:</DescriptionTerm>
                          <DescriptionDetails>56k Connected</DescriptionDetails>
                        </DescriptionItem>
                      </DescriptionList>
                    </WindowContent>

                    <WindowStatusBar>
                      <WindowStatusItem>Uptime: 42d 07h</WindowStatusItem>
                      <WindowStatusItem className="ml-auto">Load: 0.18, 0.24, 0.19</WindowStatusItem>
                    </WindowStatusBar>
                  </Window>
                )}

                {/* WINDOW 4: PIXEL VIEWER / BITMAP CANVAS */}
                {windows.canvas.isOpen && !windows.canvas.isMinimized && (
                  <Window
                    active={activeWindow === "canvas"}
                    onClick={() => setActiveWindow("canvas")}
                    className={cn(
                      "w-full transition-shadow duration-150",
                      windows.canvas.isMaximized ? "md:col-span-2" : "col-span-1",
                      activeWindow === "canvas" ? "ring-2 ring-primary shadow-hard-lg" : "opacity-95"
                    )}
                  >
                    <WindowTitleBar active={activeWindow === "canvas"}>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <WindowIcon icon={<span className="text-[10px]">🎨</span>} />
                        <WindowTitle>PIXEL VIEWER // BITMAP CANVAS</WindowTitle>
                      </div>
                      <WindowControls
                        isMaximized={windows.canvas.isMaximized}
                        onMinimize={(e) => {
                          e.stopPropagation();
                          toggleMinimize("canvas");
                        }}
                        onMaximize={(e) => {
                          e.stopPropagation();
                          toggleMaximize("canvas");
                        }}
                        onClose={(e) => {
                          e.stopPropagation();
                          closeWindow("canvas");
                        }}
                      />
                    </WindowTitleBar>

                    <WindowContent className="p-3 space-y-3 text-xs flex flex-col items-center">
                      <div className="flex items-center gap-3 pb-2 border-b border-border/50 w-full justify-center">
                        <PixelArt
                          src="/apple-touch-icon.png"
                          alt="Virtual Graphics Matrix"
                          frame="pixel"
                          width={24}
                          height={24}
                          scale={1}
                        />
                        <div className="text-[11px]">
                          <div className="font-bold text-foreground">VIRTUAL GRAPHICS MATRIX</div>
                          <div className="text-muted-foreground">16×16 Raster Display • Bayer Indexed</div>
                        </div>
                      </div>

                      <div className="w-full flex flex-col sm:flex-row gap-3 items-center justify-center">
                        {/* Interactive 16x16 Bitmap Canvas */}
                        <div className="bevel-inset bg-black p-1 flex justify-center">
                          <BitmapCanvas
                            width={16}
                            height={16}
                            pixelSize={11}
                            interactive={true}
                            activeColor={activeColor}
                            value={canvasGrid}
                            onChange={(next) => setCanvasGrid(next)}
                            alt="Interactive 16x16 Retro Icon Canvas"
                          />
                        </div>

                        {/* Controls & Palette */}
                        <div className="space-y-2 flex flex-col items-center sm:items-start text-xs">
                          <div className="font-bold text-[11px] uppercase">
                            PALETTE SELECTOR:
                          </div>
                          <div className="flex flex-wrap gap-1 max-w-[140px]">
                            {DEFAULT_RETRO_PALETTE.map((color) => (
                              <button
                                key={color}
                                type="button"
                                onClick={() => setActiveColor(color)}
                                aria-label={`Select color ${color}`}
                                style={{ backgroundColor: color }}
                                className={cn(
                                  "w-5 h-5 border select-none transition-transform",
                                  activeColor === color ? "ring-2 ring-primary scale-110 border-white" : "border-border"
                                )}
                              />
                            ))}
                          </div>

                          <div className="pt-2 flex flex-wrap gap-1.5">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={handleResetCanvas}
                              className="text-[10px] h-6 px-2 bevel-raised font-bold"
                            >
                              Reset Icon
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={handleClearCanvas}
                              className="text-[10px] h-6 px-2 bevel-raised font-bold"
                            >
                              Clear Grid
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="text-[10px] text-muted-foreground text-center">
                        Click on the 16×16 raster matrix to toggle pixel states with active palette swatch.
                      </div>
                    </WindowContent>

                    <WindowStatusBar>
                      <WindowStatusItem>16×16 Matrix • 8 Colors</WindowStatusItem>
                      <WindowStatusItem className="ml-auto">Interactive Rasterizer</WindowStatusItem>
                    </WindowStatusBar>
                  </Window>
                )}
              </div>

              {/* Taskbar at Desktop Bottom */}
              <Taskbar position="relative" className="w-full mt-auto">
                <TaskbarStart
                  onClick={() => announce("BYTEWORKS Virtual Workstation Node 01. Click Desktop Icons to launch.")}
                  icon={<span className="text-xs">⚡</span>}
                >
                  BYTEWORKS
                </TaskbarStart>

                <TaskbarTasks>
                  <TaskbarTask
                    active={activeWindow === "terminal" && windows.terminal.isOpen && !windows.terminal.isMinimized}
                    onClick={() => focusWindow("terminal")}
                    icon={<span>⌨</span>}
                  >
                    Terminal
                  </TaskbarTask>

                  <TaskbarTask
                    active={activeWindow === "files" && windows.files.isOpen && !windows.files.isMinimized}
                    onClick={() => focusWindow("files")}
                    icon={<span>📁</span>}
                  >
                    Files
                  </TaskbarTask>

                  <TaskbarTask
                    active={activeWindow === "monitor" && windows.monitor.isOpen && !windows.monitor.isMinimized}
                    onClick={() => focusWindow("monitor")}
                    icon={<span>📊</span>}
                  >
                    Monitor
                  </TaskbarTask>

                  <TaskbarTask
                    active={activeWindow === "canvas" && windows.canvas.isOpen && !windows.canvas.isMinimized}
                    onClick={() => focusWindow("canvas")}
                    icon={<span>🎨</span>}
                  >
                    Canvas
                  </TaskbarTask>
                </TaskbarTasks>

                <TaskbarStatus>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="hidden sm:inline font-bold text-foreground">ONLINE</span>
                  </div>
                  <TaskbarClock />
                </TaskbarStatus>
              </Taskbar>
            </Desktop>
          </ContextMenuTrigger>

          {/* Context Menu Content */}
          <ContextMenuContent className="w-56 font-mono text-xs">
            <ContextMenuLabel>BYTEWORKS WORKSPACE</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={() => focusWindow("terminal")}>
              Open Terminal
            </ContextMenuItem>
            <ContextMenuItem onClick={() => focusWindow("files")}>
              Open File Manager
            </ContextMenuItem>
            <ContextMenuItem onClick={() => focusWindow("monitor")}>
              Open System Monitor
            </ContextMenuItem>
            <ContextMenuItem onClick={() => focusWindow("canvas")}>
              Open Pixel Canvas
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={() => announce("System Info: BYTEWORKS Virtual Node 01. 100% Client-Side.")}>
              System Information
            </ContextMenuItem>
            <ContextMenuItem onClick={() => {
              setWindows({
                terminal: { isOpen: true, isMinimized: false, isMaximized: false },
                files: { isOpen: true, isMinimized: false, isMaximized: false },
                monitor: { isOpen: true, isMinimized: false, isMaximized: false },
                canvas: { isOpen: true, isMinimized: false, isMaximized: false },
              });
              announce("Desktop refreshed and arranged.");
            }}>
              Refresh Desktop
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </main>
    </div>
  );
}
