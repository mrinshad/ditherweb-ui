"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heading,
  Text,
  Separator,
  Blockquote,
  Badge,
  ImageFrame,
} from "@ditherweb/ui";

interface StoryItem {
  id: string;
  category: string;
  issue: string;
  date: string;
  title: string;
  deck: string;
  author: string;
  readTime: string;
  abstract: string;
  accentQuote?: string;
  tag: string;
}

const FEATURED_STORY: StoryItem = {
  id: "featured-web-before-apps",
  category: "Essay",
  issue: "Issue 04",
  date: "October 2026",
  title: "The Web Before Everything Became an App",
  deck: "How the quiet protocols of hypertext, client-side rendering, and hand-stitched documents gave way to centralized walled gardens—and why the enduring principles of early computing are quietly returning.",
  author: "Elena Rostova",
  readTime: "14 min read",
  abstract:
    "To visit a website in 1997 was to inspect a remote document. The browser did not negotiate authorization tokens, telemetry beacons, or dynamic websocket graphs. It requested a file by name, received bytes over port 80, and rendered them using an engine that fit comfortably inside four megabytes of resident memory. We trace how this architectural sovereignty was gradually traded for cloud convenience, and why local-first engineering offers a path back.",
  accentQuote:
    "We traded the open document for the cloud application, and in doing so, surrendered our ownership of the tools we think with.",
  tag: "ESSAY",
};

const MORE_STORIES: StoryItem[] = [
  {
    id: "story-plain-text",
    category: "Protocols",
    issue: "Issue 04",
    date: "September 2026",
    title: "The Architecture of Plain Text: Why Durable Formats Outlive Platforms",
    deck: "From the Gemini protocol to local Markdown vaults, a growing counter-culture of engineers is choosing formats designed to survive fifty years without updates.",
    author: "Marcus Vance",
    readTime: "8 min read",
    abstract:
      "When software dependencies require weekly security patches, a document written in plain UTF-8 remains as legible today as it will be in the year 2076. We examine the quiet endurance of ASCII, Gemini line types, and the offline-first renaissance.",
    accentQuote:
      "A format that cannot be read with a hundred lines of C is not a document; it is a proprietary rental agreement.",
    tag: "PROTOCOLS",
  },
  {
    id: "story-bayer-matrices",
    category: "Visual Craft",
    issue: "Issue 04",
    date: "August 2026",
    title: "Bayer Matrices and the 1-Bit Palette: How Constraints Birthed a Visual Language",
    deck: "Ordered dithering was never conceived as nostalgia. It was a rigorous mathematical compromise to represent continuous photographic tone on sixteen-color framebuffers.",
    author: "Siddharth Nair",
    readTime: "14 min read",
    abstract:
      "By interleaving threshold matrices across monochrome phosphors, early computer graphics pioneers created optical illusions of depth and luminance without consuming precious video RAM. An architectural tour of Atkinson, Floyd-Steinberg, and 8x8 Bayer matrices.",
    tag: "GRAPHICS",
  },
  {
    id: "story-personal-website",
    category: "Hypertext",
    issue: "Issue 04",
    date: "July 2026",
    title: "In Defense of the Personal Website: Carving Out a Digital Plot in the Walled Era",
    deck: "Why cultivating your own quiet, independently hosted domain remains the most radical creative act on the modern Internet.",
    author: "Claire Chen",
    readTime: "6 min read",
    abstract:
      "Before social algorithmic feeds flattened human expression into engagement metrics, personal websites were idiosyncratic digital homes. How independent webmasters are reclaiming the craft of slow publishing, hand-written HTML, and personal web rings.",
    tag: "HYPERTEXT",
  },
];

const ISSUES_LIST = [
  { id: "issue-04", label: "Issue 04", title: "The Durable Web", season: "Autumn 2026", current: true },
  { id: "issue-03", label: "Issue 03", title: "Tactile Interfaces", season: "Summer 2026", current: false },
  { id: "issue-02", label: "Issue 02", title: "Local-First Systems", season: "Spring 2026", current: false },
  { id: "issue-01", label: "Issue 01", title: "Genesis of the Pixel", season: "Winter 2025", current: false },
];

export function EditorialExampleClient() {
  const [selectedIssue, setSelectedIssue] = React.useState("issue-04");
  const [showManifesto, setShowManifesto] = React.useState(false);
  const [activeStoryModal, setActiveStoryModal] = React.useState<StoryItem | null>(null);

  const currentIssue = ISSUES_LIST.find((iss) => iss.id === selectedIssue) || ISSUES_LIST[0];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex flex-col selection:bg-primary selection:text-primary-foreground">
      {/* 1. Context Navigation Bar */}
      <nav
        aria-label="Examples Context Navigation"
        className="border-b border-border bg-surface/80 backdrop-blur px-4 py-2 text-xs"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              href="/examples"
              className="text-primary hover:underline font-bold flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-ring"
            >
              <span>←</span>
              <span>All Examples</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-bold text-foreground uppercase tracking-wider">
              FIELD NOTES
            </span>
            <Badge variant="flat" className="text-[9px] py-0 hidden sm:inline-flex">
              PHASE 8 • EDITORIAL
            </Badge>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
            <span className="hidden md:inline">
              Dogfooding @ditherweb/ui typography &amp; layout primitives
            </span>
            <div className="flex items-center gap-1.5 border border-border/60 px-2 py-0.5 bg-background">
              <span className="h-1.5 w-1.5 rounded-full bg-success inline-block" />
              <span className="text-[10px] font-bold text-foreground">{currentIssue.label.toUpperCase()} LIVE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Main Publication Shell */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        {/* ====================================================================
            MASTHEAD
            ==================================================================== */}
        <header className="space-y-6 pt-2">
          {/* Top publication rule and date metadata */}
          <div className="border-y border-border py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">{currentIssue.season}</span>
              <span>•</span>
              <span>{currentIssue.label}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span>ISSN 2841-9021</span>
              <span>•</span>
              <span className="text-foreground">DITHERWEB RESEARCH GROUP</span>
            </div>
          </div>

          {/* Large Expressive Editorial Identity */}
          <div className="text-center py-4 sm:py-8 space-y-4">
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold tracking-[0.18em] sm:tracking-[0.24em] uppercase text-foreground transition-all">
              FIELD NOTES
            </h1>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-muted-foreground tracking-wide uppercase leading-relaxed">
              An independent journal of computing, design, digital craft, and early Web culture.
              Examining durable systems and personal software tools.
            </p>
          </div>

          {/* Minimal Editorial Navigation with Secondary Issue Switcher */}
          <div className="border-t-2 border-b border-border py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#featured"
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Lead Essay
              </a>
              <a
                href="#reading-room"
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Excerpt
              </a>
              <a
                href="#stories"
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Dispatches (3)
              </a>
              <a
                href="#colophon"
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Colophon
              </a>
              <button
                type="button"
                onClick={() => setShowManifesto((prev) => !prev)}
                className="text-muted-foreground hover:text-foreground transition-colors underline decoration-dotted underline-offset-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {showManifesto ? "Close Manifesto [−]" : "Publication Manifesto [+]"}
              </button>
            </div>

            {/* Simplified Issue Switcher: Current Issue Visible, Switching Secondary */}
            <div className="flex flex-wrap items-center gap-2 text-xs normal-case">
              <span className="text-muted-foreground text-[11px] uppercase tracking-wider">Issue:</span>
              <span className="font-bold text-foreground uppercase tracking-wider">{currentIssue.label}</span>
              <span className="text-muted-foreground text-[11px] hidden sm:inline">— {currentIssue.title}</span>

              {/* Secondary Switcher Control */}
              <label htmlFor="issue-select" className="sr-only">Switch Publication Issue</label>
              <select
                id="issue-select"
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
                className="bg-surface border border-border text-[11px] font-mono text-muted-foreground hover:text-foreground px-2 py-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider max-w-[130px] sm:max-w-none truncate"
              >
                {ISSUES_LIST.map((iss) => (
                  <option key={iss.id} value={iss.id}>
                    {iss.label}: {iss.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Expandable Manifesto Callout */}
          {showManifesto && (
            <aside
              aria-label="Field Notes Editorial Manifesto"
              className="border border-border/80 bg-surface/50 p-6 sm:p-8 space-y-4 transition-all"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                  The Editorial Manifesto
                </span>
                <Badge variant="flat" className="text-[9px]">
                  EST. 2026
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed max-w-4xl">
                We reject the false premise that modern computing must be defined by algorithmic feeds,
                rent-seeking software subscriptions, and transient cloud services. <em>Field Notes</em> documents
                the timeless ideals of personal computing: local file sovereignty, understandable protocols,
                human-scale websites, and digital artifacts built to last a lifetime.
              </p>
              <div className="flex items-center gap-4 text-[11px] text-muted-foreground pt-1">
                <span>Edited by Elena Rostova &amp; Julian Thorne</span>
                <span>•</span>
                <span>Typeset in Monospace &amp; System Primitives</span>
              </div>
            </aside>
          )}
        </header>

        {/* ====================================================================
            FEATURED STORY
            ==================================================================== */}
        <section
          id="featured"
          aria-labelledby="featured-story-title"
          className="space-y-8 pt-4"
        >
          {/* Streamlined Metadata Bar: Category + Title + One Useful Info */}
          <div className="flex items-center justify-between text-xs border-b border-border pb-2.5 uppercase tracking-wider">
            <span className="font-bold text-primary">{FEATURED_STORY.category}</span>
            <span className="text-muted-foreground">
              By {FEATURED_STORY.author} • {FEATURED_STORY.readTime}
            </span>
          </div>

          {/* Large Expressive Headline & Deck */}
          <div className="space-y-6 max-w-4xl">
            <Heading
              id="featured-story-title"
              level={2}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.08] text-foreground"
            >
              {FEATURED_STORY.title}
            </Heading>

            <Text
              size="lg"
              className="text-base sm:text-xl text-foreground/80 leading-relaxed font-normal"
            >
              {FEATURED_STORY.deck}
            </Text>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#reading-room"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary border-b-2 border-primary pb-0.5 hover:opacity-80 transition-opacity focus-visible:ring-1 focus-visible:ring-ring"
              >
                <span>Read excerpt below</span>
                <span>↓</span>
              </a>
              <span className="text-muted-foreground text-xs">•</span>
              <button
                type="button"
                onClick={() => setActiveStoryModal(FEATURED_STORY)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 cursor-pointer focus-visible:ring-1 focus-visible:ring-ring"
              >
                Read full essay in archive →
              </button>
            </div>
          </div>

          {/* Preserved Editorial Illustration Plate */}
          <div className="space-y-3">
            <ImageFrame
              variant="plain"
              className="w-full overflow-hidden border border-border bg-surface"
              caption={
                <div className="p-3 bg-surface/80 border-t border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-muted-foreground">
                  <p>
                    <strong className="text-foreground uppercase tracking-wide">FIG. 1.1</strong> — The
                    terminal workstation at 02:40 UTC. Phosphor glow, dedicated local binaries, and an
                    unmediated connection to remote hosts over TCP/IP.
                  </p>
                  <span className="shrink-0 text-[10px] uppercase font-mono">
                    Plate courtesy of Ditherweb Archive
                  </span>
                </div>
              }
            >
              <div className="relative w-full aspect-[16/9] max-h-[640px] bg-surface-sunken">
                {/* Dark mode artwork */}
                <Image
                  src="/images/hero-artwork.jpg"
                  alt="A classic retro computing workstation at night with monitor displaying Ditherweb and city skyline view"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                  className="object-cover hidden dark:block"
                />
                {/* Light mode artwork */}
                <Image
                  src="/images/hero-artwork-light.jpg"
                  alt="A classic retro computing workstation in daylight with CRT monitor and city view"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                  className="object-cover block dark:hidden"
                />
              </div>
            </ImageFrame>
          </div>
        </section>

        <Separator className="border-border/60" />

        {/* ====================================================================
            ARTICLE PREVIEW & LONG-FORM EXCERPT (STREAMLINED READING ROOM)
            ==================================================================== */}
        <section
          id="reading-room"
          aria-labelledby="reading-room-heading"
          className="space-y-8 pt-2"
        >
          {/* Section Subheading: Clean, No Fidgety Type-Size Buttons */}
          <div className="border-b border-border pb-3">
            <Heading
              id="reading-room-heading"
              level={3}
              size="md"
              className="text-sm sm:text-base font-bold uppercase tracking-wider text-foreground"
            >
              I. The Architecture of Permeability
            </Heading>
          </div>

          {/* Asymmetrical Reading Grid: Left Main Prose, Right Pull Quote & Historical Note */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Narrow, uninterrupted reading column (65ch) */}
            <article className="lg:col-span-8 space-y-6 text-sm sm:text-base text-foreground/90 leading-relaxed font-mono">
              <p>
                To visit a website in 1997 was not to initialize a multi-tenant session inside a cloud platform;
                it was to inspect a remote document. The browser did not negotiate authorization tokens,
                telemetry beacons, or dynamic websocket graphs. It requested a file by name, received bytes
                over port 80, and rendered them using an engine that fit comfortably inside four megabytes of
                resident memory.
              </p>

              <p>
                This simplicity was not a defect of early engineering—it was its profound thesis. A URL was
                an address in an open universe of navigable papers. You could right-click, choose{" "}
                <strong className="text-foreground font-bold">&ldquo;View Source,&rdquo;</strong> and within
                forty lines comprehend every layout tag, anchor reference, and inline styling rule that formed
                the screen before you. The software did not hide behind obfuscated bundles or dynamic hydration
                cascades; it introduced itself openly.
              </p>

              <p>
                Somewhere during the mid-2010s, the document model was quietly declared obsolete. We were told
                that every human interaction required a single-page application, an asynchronous GraphQL schema,
                and fifty thousand lines of build-time machinery. Yet when cloud connectivity stutters today,
                the modern web application vanishes into an empty spinner. A static HTML page from 1994, by
                contrast, renders today with bit-for-bit fidelity.
              </p>

              {/* Straightforward Article Link */}
              <div className="pt-4 border-t border-border/60">
                <button
                  type="button"
                  onClick={() => setActiveStoryModal(FEATURED_STORY)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline cursor-pointer focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <span>Read full essay in archive</span>
                  <span>→</span>
                </button>
              </div>
            </article>

            {/* Right Column: Pull Quote & Historical Callout */}
            <aside
              aria-label="Editorial Commentary and Notes"
              className="lg:col-span-4 space-y-6 pt-2"
            >
              {/* Prominent Editorial Blockquote */}
              <Blockquote className="border-l-4 border-primary bg-surface/60 p-5 space-y-3">
                <p className="text-sm sm:text-base italic text-foreground leading-snug">
                  &ldquo;We traded the open document for the cloud application, and in doing so, surrendered
                  our ownership of the tools we think with.&rdquo;
                </p>
                <footer className="text-[11px] uppercase tracking-wider text-muted-foreground not-italic font-bold">
                  — Julian Thorne, <span className="font-normal">The Quiet Architecture of Local-First Systems (2001)</span>
                </footer>
              </Blockquote>

              {/* Historical Marginalia Card */}
              <div className="border border-border bg-surface p-4 space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-1.5">
                  <span className="font-bold uppercase tracking-wider text-[10px] text-foreground">
                    ARCHIVAL NOTE // RFC 1945
                  </span>
                  <span className="text-[9px] text-muted-foreground">MAY 1996</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  RFC 1945 defined HTTP 1.0 in just 59 pages. A complete server could be written in an afternoon
                  by a single undergraduate. Today&apos;s web platform requires tens of thousands of pages of
                  specifications. The price of convenience has been total computational opacity.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <Separator className="border-border/60" />

        {/* ====================================================================
            MORE STORIES (CURATED, ASYMMETRICAL EDITORIAL GRID)
            ==================================================================== */}
        <section
          id="stories"
          aria-labelledby="dispatches-heading"
          className="space-y-8 pt-2"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-border pb-3">
            <Heading
              id="dispatches-heading"
              level={2}
              size="lg"
              className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground"
            >
              Selected Writing &amp; Investigations
            </Heading>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {currentIssue.label} Archive
            </span>
          </div>

          {/* Varied Typography & Asymmetrical Layout */}
          <div className="space-y-10">
            {MORE_STORIES.map((story) => {
              return (
                <article
                  key={story.id}
                  className="border-b border-border/80 pb-8 space-y-3 group"
                >
                  {/* Category + One Useful Piece of Information (Author & Read Time) */}
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider">
                    <span className="font-bold text-primary">{story.category}</span>
                    <span className="text-muted-foreground">
                      By {story.author} • {story.readTime}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                    {/* Story Title & Deck */}
                    <div className="lg:col-span-8 space-y-2.5">
                      <Heading
                        level={3}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight leading-snug group-hover:text-primary transition-colors cursor-pointer"
                        onClick={() => setActiveStoryModal(story)}
                      >
                        {story.title}
                      </Heading>

                      <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        {story.deck}
                      </p>

                      <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                        {story.abstract}
                      </p>
                    </div>

                    {/* Accent Quote and Direct Action Link */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-4 lg:border-l lg:border-border/60 lg:pl-6">
                      {story.accentQuote && (
                        <p className="text-xs italic text-muted-foreground border-l-2 border-primary/60 pl-3">
                          &ldquo;{story.accentQuote}&rdquo;
                        </p>
                      )}

                      <div className="flex items-center justify-end pt-2">
                        <button
                          type="button"
                          onClick={() => setActiveStoryModal(story)}
                          className="text-xs font-bold uppercase tracking-wider text-primary hover:underline flex items-center gap-1 cursor-pointer focus-visible:ring-1 focus-visible:ring-ring"
                        >
                          <span>Read dispatch</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Modal / Dialog for reading selected dispatch */}
        {activeStoryModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-story-title"
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <div className="bg-surface border-2 border-border max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {activeStoryModal.category} • {activeStoryModal.readTime}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStoryModal(null)}
                  className="text-xs font-bold uppercase px-2 py-1 border border-border hover:bg-muted/60 transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="space-y-3">
                <Heading
                  id="modal-story-title"
                  level={2}
                  className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground"
                >
                  {activeStoryModal.title}
                </Heading>
                <div className="text-xs text-muted-foreground">
                  By {activeStoryModal.author} • {activeStoryModal.readTime}
                </div>
              </div>

              <Separator />

              <div className="space-y-4 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                <p className="font-bold text-foreground">
                  {activeStoryModal.deck}
                </p>
                <p>
                  {activeStoryModal.abstract}
                </p>
                <p>
                  In this dispatch, the author demonstrates how early computing disciplines—monochrome display
                  matrices, strict ASCII protocols, and client-rendered layouts—provide an indispensable framework
                  for crafting sustainable digital tools in an era of platform fragility.
                </p>
                {activeStoryModal.accentQuote && (
                  <Blockquote className="p-3 my-4">
                    {activeStoryModal.accentQuote}
                  </Blockquote>
                )}
              </div>

              <div className="border-t border-border pt-4 flex items-center justify-between text-xs">
                <span className="text-muted-foreground text-[11px]">
                  Ditherweb Field Notes Reader
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStoryModal(null)}
                  className="font-bold text-primary hover:underline cursor-pointer"
                >
                  Return to Table of Contents →
                </button>
              </div>
            </div>
          </div>
        )}

        <Separator className="border-border/60" />

        {/* ====================================================================
            COLOPHON & FOOTER
            ==================================================================== */}
        <footer
          id="colophon"
          aria-labelledby="colophon-heading"
          className="space-y-8 pt-4 pb-12 text-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Publication Identity & Colophon Note */}
            <div className="md:col-span-6 space-y-3">
              <Heading
                id="colophon-heading"
                level={3}
                size="sm"
                className="text-sm font-bold uppercase tracking-wider text-foreground"
              >
                Colophon &amp; Technical Note
              </Heading>
              <p className="text-muted-foreground leading-relaxed">
                <em>Field Notes</em> is an independent quarterly publication composed entirely from
                the Ditherweb component library. Typeset with system monospace typography, CSS-first
                ordered dithering matrices, and zero runtime bloat.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <Badge variant="flat" className="text-[9px]">
                  ZERO RUNTIME SHADERS
                </Badge>
                <Badge variant="flat" className="text-[9px]">
                  VALID W3C SEMANTICS
                </Badge>
                <Badge variant="flat" className="text-[9px]">
                  STATIC HYPERTEXT
                </Badge>
              </div>
            </div>

            {/* Navigation & Archive Links */}
            <div className="md:col-span-3 space-y-2">
              <span className="font-bold uppercase tracking-wider text-[10px] text-foreground block">
                Directory
              </span>
              <ul className="space-y-1.5 text-muted-foreground">
                <li>
                  <a href="#featured" className="hover:text-foreground transition-colors">
                    Featured: The Pre-App Web
                  </a>
                </li>
                <li>
                  <a href="#reading-room" className="hover:text-foreground transition-colors">
                    Reading Room Excerpt
                  </a>
                </li>
                <li>
                  <a href="#stories" className="hover:text-foreground transition-colors">
                    Issue 04 Dispatches
                  </a>
                </li>
                <li>
                  <Link href="/examples" className="text-primary hover:underline font-bold">
                    ← All Ditherweb Examples
                  </Link>
                </li>
              </ul>
            </div>

            {/* Publishing Metadata */}
            <div className="md:col-span-3 space-y-2">
              <span className="font-bold uppercase tracking-wider text-[10px] text-foreground block">
                Masthead
              </span>
              <p className="text-muted-foreground leading-relaxed text-[11px]">
                Elena Rostova, Editor-in-Chief<br />
                Julian Thorne, Technical Editor<br />
                Published by Ditherweb Research<br />
                Volume IV • Issue 04 • 2026
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
            <p>© 2026 FIELD NOTES Publication. All essays archived in plain UTF-8 text.</p>
            <div className="flex items-center gap-3">
              <Link href="/examples" className="hover:text-foreground transition-colors">
                Ditherweb Gallery
              </Link>
              <span>•</span>
              <Link href="/components" className="hover:text-foreground transition-colors">
                Component Library
              </Link>
              <span>•</span>
              <Link href="/docs" className="hover:text-foreground transition-colors">
                Documentation
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
