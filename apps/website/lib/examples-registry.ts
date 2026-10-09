// ============================================================================
// Ditherweb — Phase 8 Examples Registry
// Defines metadata for real-world interface compositions dogfooding @ditherweb/ui.
// ============================================================================

export type ExampleStatus = "available" | "coming-soon";

export interface ExampleEntry {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: ExampleStatus;
  description: string;
  badge: string;
  tags: string[];
  highlights: string[];
  targetHref: string;
}

export const EXAMPLES_REGISTRY: Record<string, ExampleEntry> = {
  dashboard: {
    slug: "dashboard",
    title: "BYTEBASE Operations",
    subtitle: "Digital Studio & Engineering Operations Desk",
    category: "Application & Operations",
    status: "available",
    badge: "AVAILABLE NOW",
    description:
      "A complete operational telemetry and workflow dashboard for software teams. Combines responsive sidebars, KPI telemetry cards, work queue tables, project milestones, and live notices.",
    tags: ["Sidebar", "DataTable", "Panel", "Progress", "Badge", "Tabs", "Avatar"],
    highlights: [
      "Responsive 2-column desk with collapsible sidebar navigation",
      "Live KPI cards with visual progress meters and delta metrics",
      "Interactive task queue table with priority and status tags",
      "Project milestone tracker and deployment audit stream",
    ],
    targetHref: "/examples/dashboard",
  },
  admin: {
    slug: "admin",
    title: "System Administration",
    subtitle: "User Directory & Permission Matrix",
    category: "Management & Directory",
    status: "available",
    badge: "AVAILABLE NOW",
    description:
      "An administrative workspace featuring structured user tables, granular permission inspection, batch operations, security logs, and role management.",
    tags: ["Table", "Dialog", "AlertDialog", "Select", "SearchInput", "Checkbox", "Badge"],
    highlights: [
      "User directory table with client-side searching and role/status filtering",
      "Interactive Add User and Edit User dialog forms with validation",
      "AlertDialog account deletion and status suspension flows",
      "Selected user access matrix inspector and dynamic audit trail",
    ],
    targetHref: "/examples/admin",
  },
  "classic-web": {
    slug: "classic-web",
    title: "Classic Web Homepage",
    subtitle: "1999 Personal Site & Web Directory",
    category: "Retro & Community",
    status: "available",
    badge: "AVAILABLE NOW",
    description:
      "A nostalgic personal homepage reminiscent of early web culture. Features curated web directory rings, an interactive visitor guestbook, retro banners, hit counters, and 88x31 badges.",
    tags: ["WebRing", "Guestbook", "VisitorCounter", "UnderConstruction", "Marquee", "Blink", "Button88x31", "RetroBanner", "PixelImage", "WebDirectory"],
    highlights: [
      "Authentic late-1990s personal website composition with multi-column layout",
      "Interactive visitor guestbook with real-time signature submission",
      "Curated WebDirectory portal trees and interactive WebRing carousel",
      "Animated ticker marquee, odometer hit counter, and 88x31 button showcase",
    ],
    targetHref: "/examples/classic-web",
  },
  terminal: {
    slug: "terminal",
    title: "UNIX Workstation",
    subtitle: "Console Monitor & Process Inspector",
    category: "System & Tooling",
    status: "available",
    badge: "AVAILABLE NOW",
    description:
      "A retro developer workstation simulating a classic computing environment with interactive terminal commands, directory tree browsing, live system telemetry, and a bitmap canvas.",
    tags: ["Desktop", "Window", "Taskbar", "Terminal", "Menu", "ContextMenu", "PixelArt", "BitmapCanvas"],
    highlights: [
      "Authentic multi-window desktop with active focus and taskbar switching",
      "Interactive fictional terminal shell with command history and prompt",
      "Hierarchical file tree browser with permissions inspector and detail view",
      "Stepped system telemetry gauges and interactive 16x16 pixel bitmap editor",
    ],
    targetHref: "/examples/terminal",
  },
  editorial: {
    slug: "editorial",
    title: "FIELD NOTES Publication",
    subtitle: "Independent Journal on Computing, Design & Digital Culture",
    category: "Publishing & Editorial",
    status: "available",
    badge: "AVAILABLE NOW",
    description:
      "A carefully art-directed digital magazine exploring early web culture, durable computing protocols, and classic typography with generous whitespace and restrained Ditherweb character.",
    tags: ["Heading", "Text", "Separator", "Blockquote", "ImageFrame", "Badge", "Container", "Stack", "Grid"],
    highlights: [
      "Art-directed editorial masthead with issue metadata and minimal navigation",
      "Featured long-form essay with theme-reactive dithered workstation artwork",
      "Narrow reading column with styled pull quotes and historical annotations",
      "Curated secondary dispatch grid with varied typography and asymmetrical layouts",
    ],
    targetHref: "/examples/editorial",
  },
};

export const EXAMPLES_LIST = Object.values(EXAMPLES_REGISTRY);
