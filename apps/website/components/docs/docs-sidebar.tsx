"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@ditherweb/ui";

export interface NavLinkItem {
  title: string;
  href: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavLinkItem[];
}

export const DOCS_GUIDES: NavSection = {
  title: "Getting Started",
  items: [
    { title: "Introduction", href: "/docs" },
    { title: "Installation", href: "/docs/installation" },
    { title: "Theming & Tokens", href: "/docs/theming" },
    { title: "Accessibility", href: "/docs/accessibility" },
    { title: "Composition", href: "/docs/composition" },
  ],
};

export const COMPONENT_SECTIONS: NavSection[] = [
  {
    title: "Core UI",
    items: [
      { title: "Button", href: "/components/button" },
      { title: "Input", href: "/components/input" },
      { title: "Label", href: "/components/label" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Radio", href: "/components/radio" },
      { title: "Switch", href: "/components/switch" },
      { title: "Card", href: "/components/card" },
      { title: "Badge", href: "/components/badge" },
      { title: "Alert", href: "/components/alert" },
      { title: "Separator", href: "/components/separator" },
    ],
  },
  {
    title: "Typography",
    items: [
      { title: "Heading", href: "/components/heading" },
      { title: "Text", href: "/components/text" },
      { title: "Link", href: "/components/link" },
      { title: "Code", href: "/components/code" },
      { title: "Kbd", href: "/components/kbd" },
      { title: "Blockquote", href: "/components/blockquote" },
      { title: "List", href: "/components/list" },
      { title: "PixelText", href: "/components/pixel-text" },
    ],
  },
  {
    title: "Layout",
    items: [
      { title: "Container", href: "/components/container" },
      { title: "Box", href: "/components/box" },
      { title: "Stack", href: "/components/stack" },
      { title: "Flex", href: "/components/flex" },
      { title: "Grid", href: "/components/grid" },
      { title: "AspectRatio", href: "/components/aspect-ratio" },
      { title: "ScrollArea", href: "/components/scroll-area" },
      { title: "Spacer", href: "/components/spacer" },
    ],
  },
  {
    title: "Forms & Selection",
    items: [
      { title: "Textarea", href: "/components/textarea" },
      { title: "PasswordInput", href: "/components/password-input" },
      { title: "SearchInput", href: "/components/search-input" },
      { title: "NumberInput", href: "/components/number-input" },
      { title: "Select", href: "/components/select" },
      { title: "Combobox", href: "/components/combobox" },
      { title: "Slider", href: "/components/slider" },
      { title: "Toggle", href: "/components/toggle" },
      { title: "ToggleGroup", href: "/components/toggle-group" },
      { title: "Field", href: "/components/field" },
    ],
  },
  {
    title: "Surfaces & Feedback",
    items: [
      { title: "Panel", href: "/components/panel" },
      { title: "GroupBox", href: "/components/group-box" },
      { title: "Well", href: "/components/well" },
      { title: "Inset", href: "/components/inset" },
      { title: "Progress", href: "/components/progress" },
      { title: "Spinner", href: "/components/spinner" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "EmptyState", href: "/components/empty-state" },
      { title: "Result", href: "/components/result" },
      { title: "Loading", href: "/components/loading" },
    ],
  },
  {
    title: "Overlays & Layers",
    items: [
      { title: "Dialog", href: "/components/dialog" },
      { title: "AlertDialog", href: "/components/alert-dialog" },
      { title: "Popover", href: "/components/popover" },
      { title: "Tooltip", href: "/components/tooltip" },
      { title: "HoverCard", href: "/components/hover-card" },
      { title: "Drawer", href: "/components/drawer" },
      { title: "Sheet", href: "/components/sheet" },
      { title: "Backdrop", href: "/components/backdrop" },
      { title: "Overlay", href: "/components/overlay" },
      { title: "Portal", href: "/components/portal" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Tabs", href: "/components/tabs" },
      { title: "Breadcrumb", href: "/components/breadcrumb" },
      { title: "Pagination", href: "/components/pagination" },
      { title: "NavigationMenu", href: "/components/navigation-menu" },
      { title: "Menubar", href: "/components/menubar" },
    ],
  },
  {
    title: "Data & Content",
    items: [
      { title: "Table", href: "/components/table" },
      { title: "DataTable", href: "/components/data-table" },
      { title: "DescriptionList", href: "/components/description-list" },
      { title: "Tree", href: "/components/tree" },
      { title: "Avatar", href: "/components/avatar" },
    ],
  },
  {
    title: "Classic Web",
    items: [
      { title: "WebRing", href: "/components/web-ring" },
      { title: "Guestbook", href: "/components/guestbook" },
      { title: "VisitorCounter", href: "/components/visitor-counter" },
      { title: "UnderConstruction", href: "/components/under-construction" },
      { title: "Marquee", href: "/components/marquee" },
      { title: "Blink", href: "/components/blink" },
      { title: "Button88x31", href: "/components/button-88x31" },
      { title: "RetroBanner", href: "/components/retro-banner" },
      { title: "PixelImage", href: "/components/pixel-image" },
      { title: "WebDirectory", href: "/components/web-directory" },
    ],
  },
  {
    title: "Desktop & Pixel",
    items: [
      { title: "Window", href: "/components/window" },
      { title: "WindowTitleBar", href: "/components/window-titlebar" },
      { title: "WindowControls", href: "/components/window-controls" },
      { title: "Taskbar", href: "/components/taskbar" },
      { title: "Menu", href: "/components/menu" },
      { title: "ContextMenu", href: "/components/context-menu" },
      { title: "Desktop", href: "/components/desktop" },
      { title: "Terminal", href: "/components/terminal" },
      { title: "PixelArt", href: "/components/pixel-art" },
      { title: "BitmapCanvas", href: "/components/bitmap-canvas" },
    ],
  },
  {
    title: "Effects & Polish",
    items: [
      { title: "Dither", href: "/components/dither" },
      { title: "Halftone", href: "/components/halftone" },
      { title: "Pixelate", href: "/components/pixelate" },
      { title: "Noise", href: "/components/noise" },
      { title: "ImageFrame", href: "/components/image-frame" },
      { title: "Scanline", href: "/components/scanline" },
      { title: "CRT", href: "/components/crt" },
      { title: "Typewriter", href: "/components/typewriter" },
      { title: "BlinkCursor", href: "/components/blink-cursor" },
      { title: "MatrixRain", href: "/components/matrix-rain" },
    ],
  },
];

export interface DocsSidebarProps {
  onLinkClick?: () => void;
  className?: string;
}

export function DocsSidebar({ onLinkClick, className }: DocsSidebarProps) {
  const pathname = usePathname();
  const [filterQuery, setFilterQuery] = useState("");

  const normalizedFilter = filterQuery.trim().toLowerCase();

  return (
    <aside
      aria-label="Documentation navigation"
      className={cn("w-full space-y-6 font-mono text-xs", className)}
    >
      {/* Quick Filter Box */}
      <div className="space-y-1">
        <label htmlFor="docs-sidebar-filter" className="sr-only">
          Filter documentation
        </label>
        <div className="relative">
          <input
            id="docs-sidebar-filter"
            type="search"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search docs & primitives..."
            className="bevel-inset w-full bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:outline-primary"
          />
          {filterQuery && (
            <button
              type="button"
              onClick={() => setFilterQuery("")}
              className="absolute right-2 top-1.5 text-muted-foreground hover:text-foreground text-[10px]"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Guides Section */}
      {(!normalizedFilter ||
        DOCS_GUIDES.items.some((i) =>
          i.title.toLowerCase().includes(normalizedFilter),
        )) && (
        <div className="space-y-1.5">
          <div className="px-2 font-bold uppercase tracking-wider text-foreground text-[11px] flex items-center justify-between">
            <span>{DOCS_GUIDES.title}</span>
            <span className="bevel-inset bg-muted/40 px-1 py-0.2 text-[9px] text-muted-foreground">
              Guide
            </span>
          </div>
          <ul className="space-y-0.5">
            {DOCS_GUIDES.items
              .filter(
                (i) =>
                  !normalizedFilter ||
                  i.title.toLowerCase().includes(normalizedFilter),
              )
              .map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onLinkClick}
                      className={cn(
                        "block px-2.5 py-1 transition-colors hover:text-foreground",
                        isActive
                          ? "bevel-inset bg-primary text-primary-foreground font-bold"
                          : "text-muted-foreground hover:bg-muted/40",
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      )}

      {/* Components Sections */}
      <div className="space-y-4">
        <div className="px-2 font-bold uppercase tracking-wider text-muted-foreground text-[10px] border-b border-border pb-1">
          Components (96 Primitives)
        </div>
        {COMPONENT_SECTIONS.map((section) => {
          const matchingItems = section.items.filter(
            (i) =>
              !normalizedFilter ||
              i.title.toLowerCase().includes(normalizedFilter) ||
              section.title.toLowerCase().includes(normalizedFilter),
          );

          if (matchingItems.length === 0) return null;

          return (
            <div key={section.title} className="space-y-1">
              <div className="px-2 font-bold uppercase tracking-wider text-foreground text-[11px] flex items-center justify-between">
                <span>{section.title}</span>
                <span className="text-[10px] text-muted-foreground">
                  ({matchingItems.length})
                </span>
              </div>
              <ul className="space-y-0.5">
                {matchingItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onLinkClick}
                        className={cn(
                          "block px-2.5 py-1 transition-colors hover:text-foreground",
                          isActive
                            ? "bevel-inset bg-primary text-primary-foreground font-bold"
                            : "text-muted-foreground hover:bg-muted/40",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
