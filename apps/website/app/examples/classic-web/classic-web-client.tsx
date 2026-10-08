"use client";

import * as React from "react";
import Link from "next/link";
import {
  WebRing,
  WebRingHeader,
  WebRingTitle,
  WebRingSite,
  WebRingNavigation,
  WebRingLink,
  Guestbook,
  GuestbookHeader,
  GuestbookTitle,
  GuestbookEntryList,
  GuestbookEntry,
  GuestbookFooter,
  VisitorCounter,
  UnderConstruction,
  UnderConstructionIcon,
  UnderConstructionTitle,
  UnderConstructionMessage,
  UnderConstructionEstimatedDate,
  Marquee,
  Blink,
  Button88x31,
  RetroBanner,
  RetroBannerTitle,
  RetroBannerSubtitle,
  PixelImage,
  WebDirectory,
  WebDirectoryHeader,
  WebDirectoryGrid,
  WebDirectoryCategory,
  WebDirectoryTitle,
  WebDirectoryList,
  WebDirectoryItem,
  WebDirectoryLink,
  WebDirectoryDescription,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Button,
  Input,
  Separator,
  Well,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Alert,
  AlertTitle,
  AlertDescription,
  cn,
} from "@ditherweb/ui";

export type ClassicSection =
  | "home"
  | "about"
  | "projects"
  | "links"
  | "guestbook"
  | "webring";

interface GuestbookSignature {
  id: string;
  entryNumber: number;
  author: string;
  location: string;
  date: string;
  websiteUrl?: string;
  websiteName?: string;
  message: string;
}

const INITIAL_GUESTBOOK_ENTRIES: GuestbookSignature[] = [
  {
    id: "gb-5",
    entryNumber: 5,
    author: "CyberSam",
    location: "Seattle, WA, USA",
    date: "03/12/2000 21:42",
    websiteUrl: "https://example.com/cybersam",
    websiteName: "CyberSam's Nook",
    message:
      "Greetings from the Pacific Northwest! Love the Floyd-Steinberg dither textures. Your site loaded blazing fast over my 56k US Robotics modem. Added your 88x31 button to my hotlist!",
  },
  {
    id: "gb-4",
    entryNumber: 4,
    author: "PixelWitch",
    location: "Tokyo, Japan",
    date: "02/28/2000 14:15",
    websiteUrl: "https://example.com/pixelwitch",
    websiteName: "Chibi Pixel Realm",
    message:
      "Konnichiwa! Your pixel typography generator is extraordinary! It is so refreshing to see hand-coded HTML with proper bevels instead of bloated corporate portals. Keep the personal web alive!",
  },
  {
    id: "gb-3",
    entryNumber: 3,
    author: "BitFlipper",
    location: "Berlin, Germany",
    date: "02/14/2000 09:30",
    message:
      "Surfed in via the Retro Web Ring. Excellent curated web directory links! Testing this on Netscape Communicator 4.75 under Debian Linux. The table alignment is immaculate.",
  },
  {
    id: "gb-2",
    entryNumber: 2,
    author: "ModemMaster",
    location: "Toronto, Canada",
    date: "01/22/2000 18:04",
    websiteUrl: "https://example.com/modem",
    websiteName: "BBS Archive 99",
    message:
      "Glad to see your site survived the Y2K bug unscathed! The odometer visitor counter looks authentic. Looking forward to the MIDI jukebox update you teased in the sidebar.",
  },
  {
    id: "gb-1",
    entryNumber: 1,
    author: "RetroCoder",
    location: "London, UK",
    date: "11/12/1999 00:01",
    message:
      "First signature on the guestbook! Welcome to the World Wide Web, webmaster Rinshad. May your bandwidth be plentiful and your server uptime eternal.",
  },
];

interface WebRingMember {
  id: number;
  name: string;
  url: string;
  owner: string;
  description: string;
}

const WEBRING_MEMBERS: WebRingMember[] = [
  {
    id: 1,
    name: "Rinshad's Homepage",
    url: "/examples/classic-web",
    owner: "Webmaster Rinshad",
    description: "A cozy personal nook dedicated to handcraft HTML, pixel art, and computing history.",
  },
  {
    id: 2,
    name: "BitStream Oasis",
    url: "https://bitstream-oasis.fictional",
    owner: "Alex Vance",
    description: "Digital preservation shrine for early telecom, acoustic couplers, and dial-up culture.",
  },
  {
    id: 3,
    name: "Pixel Haven BBS",
    url: "https://pixel-haven.fictional",
    owner: "Kira Thorne",
    description: "Isometric pixel illustrations, ANSI art galleries, and demoscene tracker tunes.",
  },
  {
    id: 4,
    name: "Dialup Dreams",
    url: "https://dialup-dreams.fictional",
    owner: "Marcus Brody",
    description: "Essays on 1990s cyber-culture, Usenet discussions, and browser engine wars.",
  },
  {
    id: 5,
    name: "The 8-Bit Sanctuary",
    url: "https://8bit-sanctuary.fictional",
    owner: "Elena Rostova",
    description: "Hardware schematics, 6502 assembly tutorials, and vintage computer restoration logs.",
  },
];

export function ClassicWebClient() {
  const [activeSection, setActiveSection] = React.useState<ClassicSection>("home");
  const [hitCount, setHitCount] = React.useState(1337);
  const [hasRefreshedHit, setHasRefreshedHit] = React.useState(false);

  // WebRing state
  const [currentRingIndex, setCurrentRingIndex] = React.useState(0);

  // Guestbook state
  const [guestbookEntries, setGuestbookEntries] =
    React.useState<GuestbookSignature[]>(INITIAL_GUESTBOOK_ENTRIES);
  const [formAuthor, setFormAuthor] = React.useState("");
  const [formLocation, setFormLocation] = React.useState("");
  const [formWebsite, setFormWebsite] = React.useState("");
  const [formMessage, setFormMessage] = React.useState("");
  const [formFeedback, setFormFeedback] = React.useState<string | null>(null);
  const [formError, setFormError] = React.useState<string | null>(null);

  const currentRingMember = WEBRING_MEMBERS[currentRingIndex];

  const handleNextRing = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentRingIndex((prev) => (prev + 1) % WEBRING_MEMBERS.length);
  };

  const handlePrevRing = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentRingIndex((prev) =>
      prev === 0 ? WEBRING_MEMBERS.length - 1 : prev - 1
    );
  };

  const handleRandomRing = (e: React.MouseEvent) => {
    e.preventDefault();
    let next = Math.floor(Math.random() * WEBRING_MEMBERS.length);
    if (next === currentRingIndex) {
      next = (next + 1) % WEBRING_MEMBERS.length;
    }
    setCurrentRingIndex(next);
  };

  const handleIncrementHit = () => {
    setHitCount((prev) => prev + 1);
    setHasRefreshedHit(true);
    setTimeout(() => setHasRefreshedHit(false), 2000);
  };

  const handleGuestbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formAuthor.trim()) {
      setFormError("Please enter your name or handle.");
      return;
    }
    if (!formMessage.trim()) {
      setFormError("Please write a guestbook message.");
      return;
    }

    const newNumber = guestbookEntries.length + 1;
    const newEntry: GuestbookSignature = {
      id: `gb-${Date.now()}`,
      entryNumber: newNumber,
      author: formAuthor.trim(),
      location: formLocation.trim() || "Earth, Cyberspace",
      date: "Just now",
      websiteUrl: formWebsite.trim() ? formWebsite.trim() : undefined,
      websiteName: formWebsite.trim() ? "Personal Website" : undefined,
      message: formMessage.trim(),
    };

    setGuestbookEntries((prev) => [newEntry, ...prev]);
    setFormAuthor("");
    setFormLocation("");
    setFormWebsite("");
    setFormMessage("");
    setFormFeedback(`Thank you for signing the guestbook! Entry #${String(newNumber).padStart(3, "0")} posted.`);

    setTimeout(() => {
      setFormFeedback(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex flex-col selection:bg-primary selection:text-primary-foreground">
      {/* 1. Context Navigation Bar */}
      <div className="border-b border-border bg-surface/80 backdrop-blur px-4 py-2 text-xs">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
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
              RINSHAD&apos;S HOMEPAGE
            </span>
            <Badge variant="primary" className="text-[9px] py-0 hidden md:inline-flex">
              CLASSIC WEB 1999–2001
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

      {/* 2. Main Classic Web Frame */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3 py-4 sm:px-6 sm:py-6 space-y-4">
        {/* Retro Header Banner */}
        <RetroBanner
          format="full"
          variant="dither"
          className="w-full flex-col sm:flex-row items-center justify-between p-3 sm:p-4 gap-3 bevel-raised"
        >
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <RetroBannerTitle as="h2" className="text-base sm:text-xl font-bold tracking-wider">
                RINSHAD&apos;S CYBER-HOMEPAGE
              </RetroBannerTitle>
              <Badge variant="outline" className="text-[10px] bg-background">
                EST. NOV 1999
              </Badge>
            </div>
            <RetroBannerSubtitle className="text-xs sm:text-sm text-muted-foreground">
              A quiet, hand-crafted corner of the World Wide Web • Cyberspace Node #42
            </RetroBannerSubtitle>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-1.5 text-[10px] text-muted-foreground">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="inline-block w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-foreground">HOSTED ON NEOCITIES</span>
            </div>
            <div>LAST UPDATED: 03/14/2000</div>
          </div>
        </RetroBanner>

        {/* Scrolling Announcement Marquee */}
        <div className="w-full">
          <Marquee speed="normal" pauseOnHover pauseOnFocus repeat={3}>
            <span className="text-primary font-bold">★★★ WELCOME TO MY CYBER-NOOK! ★★★</span>
            <span>BEST VIEWED AT 800×600 RESOLUTION</span>
            <span className="text-accent font-bold">NEW: EXPANDED WEB DIRECTORY &amp; PROJECTS SECTION!</span>
            <span>PLEASE SIGN THE GUESTBOOK BEFORE YOU SURF AWAY!</span>
            <span className="text-success font-bold">HAND-CODED IN VALID HTML 4.01 • ZERO TRACKERS • PURE ETHOS</span>
          </Marquee>
        </div>

        {/* Classic Navigation Bar */}
        <nav
          aria-label="Classic Web Sections"
          className="bevel-raised bg-surface p-1.5 sm:p-2 overflow-x-auto scrollbar-none"
        >
          <div className="flex items-center justify-start sm:justify-center gap-1 sm:gap-2 min-w-max">
            {(
              [
                { id: "home", label: "HOME", icon: "🏠" },
                { id: "about", label: "ABOUT ME", icon: "👤" },
                { id: "projects", label: "PROJECTS", icon: "💾" },
                { id: "links", label: "WEB DIRECTORY", icon: "🌐" },
                { id: "guestbook", label: "GUESTBOOK", icon: "📖", isNew: true },
                { id: "webring", label: "WEB RING", icon: "🔗" },
              ] as const
            ).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "px-2.5 py-1 text-xs font-bold uppercase transition-all select-none flex items-center gap-1.5",
                    isActive
                      ? "bevel-pressed bg-primary text-primary-foreground shadow-inner"
                      : "bevel-raised bg-surface text-foreground hover:bg-muted"
                  )}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                  {"isNew" in item && item.isNew && (
                    <Blink enabled={true} speed="slow">
                      <span className="text-[9px] text-amber-500 font-extrabold ml-0.5">
                        ★
                      </span>
                    </Blink>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Multi-Column Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* Left Column: Cyber-Sidebar */}
          <aside
            aria-label="Sidebar information"
            className="w-full lg:w-72 shrink-0 space-y-4"
          >
            {/* Webmaster Profile Card */}
            <Panel variant="raised" className="bg-surface shadow-hard-sm">
              <PanelHeader className="bg-muted/30 border-b border-border py-1.5 px-3">
                <PanelTitle className="text-xs uppercase flex items-center justify-between">
                  <span>WEBMASTER CARD</span>
                  <Badge variant="outline" className="text-[9px]">ONLINE</Badge>
                </PanelTitle>
              </PanelHeader>
              <PanelContent className="p-3 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bevel-inset p-1 bg-background shrink-0">
                    <PixelImage
                      src="/apple-touch-icon.png"
                      alt="Pixel Webmaster Avatar"
                      width={48}
                      height={48}
                      className="w-12 h-12 image-rendering-pixelated"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-foreground truncate">
                      Rinshad
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      Cyber-Smith &amp; Hobbyist
                    </div>
                    <div className="text-[10px] text-primary font-bold mt-0.5">
                      @mrinshad
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="text-xs space-y-1.5 text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-bold text-foreground">Location:</span>
                    <span>Cyberspace / India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-foreground">Browser:</span>
                    <span>Netscape 4.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-foreground">Editor:</span>
                    <span>Vim &amp; Notepad</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-foreground">Connection:</span>
                    <span>56k V.90 Dialup</span>
                  </div>
                </div>
              </PanelContent>
            </Panel>

            {/* Visitor Counter */}
            <Well variant="sunken" className="text-center p-3 space-y-2">
              <div className="text-[10px] uppercase font-bold text-muted-foreground">
                TELEMETRY METER
              </div>
              <VisitorCounter
                value={hitCount}
                minDigits={6}
                variant="odometer"
                size="md"
                label="YOU ARE VISITOR #"
                labelPosition="top"
              />
              <div className="pt-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleIncrementHit}
                  className="text-[10px] py-0.5 h-6 px-2 w-full bevel-raised"
                >
                  {hasRefreshedHit ? "✓ COUNTER CLICKED!" : "+1 Click Hit Counter"}
                </Button>
              </div>
            </Well>

            {/* Quick Section Shortcuts */}
            <Panel variant="raised" className="bg-surface shadow-hard-sm">
              <PanelHeader className="bg-muted/30 border-b border-border py-1.5 px-3">
                <PanelTitle className="text-xs uppercase">
                  SITE DIRECTORY INDEX
                </PanelTitle>
              </PanelHeader>
              <PanelContent className="p-2 space-y-1 text-xs">
                {(
                  [
                    { id: "home", label: "» Welcome Desk & Manifesto" },
                    { id: "about", label: "» Webmaster Hardware & Specs" },
                    { id: "projects", label: "» Personal Software Experiments" },
                    { id: "links", label: "» Curated World Wide Links" },
                    { id: "guestbook", label: "» Public Visitor Guestbook" },
                    { id: "webring", label: "» Retro Ring Directory Hub" },
                  ] as const
                ).map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setActiveSection(sec.id)}
                    className={cn(
                      "w-full text-left px-2 py-1 transition-colors select-none",
                      activeSection === sec.id
                        ? "bg-primary text-primary-foreground font-bold"
                        : "hover:bg-muted text-foreground"
                    )}
                  >
                    {sec.label}
                  </button>
                ))}
              </PanelContent>
            </Panel>

            {/* Under Construction Notice */}
            <UnderConstruction variant="stripes">
              <div className="flex flex-col items-center text-center space-y-2">
                <UnderConstructionIcon size="md" />
                <UnderConstructionTitle>MIDI JUKEBOX v2.1</UnderConstructionTitle>
                <UnderConstructionMessage>
                  Constructing embedded synthetic background audio stream. Pardon our virtual dust!
                </UnderConstructionMessage>
                <UnderConstructionEstimatedDate date="SUMMER 2000" />
              </div>
            </UnderConstruction>

            {/* Currently... Well */}
            <Well variant="sunken" className="p-3 text-xs space-y-2">
              <div className="font-bold text-foreground text-[11px] uppercase border-b border-border/50 pb-1 flex items-center gap-1.5">
                <span>📻</span>
                <span>TRANSMISSION STATUS</span>
              </div>
              <div className="space-y-1 text-[11px] text-muted-foreground">
                <div>
                  <strong className="text-foreground">Listening:</strong> Daft Punk - Homework (1997)
                </div>
                <div>
                  <strong className="text-foreground">Reading:</strong> Neuromancer by W. Gibson
                </div>
                <div>
                  <strong className="text-foreground">Status:</strong> Sipping chai &amp; dithering pixels
                </div>
              </div>
            </Well>

            {/* Compact WebRing Widget */}
            <div className="w-full flex justify-center">
              <WebRing
                variant="vintage"
                className="w-full text-center"
              >
                <div className="flex flex-col items-center gap-1.5 text-center text-xs">
                  <WebRingTitle>RETRO WEB DEVELOPERS RING</WebRingTitle>
                  <WebRingSite name={currentRingMember.name} memberIndex={currentRingMember.id} totalMembers={WEBRING_MEMBERS.length} />
                  <WebRingNavigation>
                    <WebRingLink direction="prev" href="#prev" onClick={handlePrevRing}>
                      [« Prev]
                    </WebRingLink>
                    <WebRingLink direction="random" href="#random" onClick={handleRandomRing}>
                      [? Rnd]
                    </WebRingLink>
                    <WebRingLink direction="next" href="#next" onClick={handleNextRing}>
                      [Next »]
                    </WebRingLink>
                  </WebRingNavigation>
                </div>
              </WebRing>
            </div>
          </aside>

          {/* Right / Main Content Column */}
          <section
            aria-label="Main content panel"
            className="flex-1 min-w-0 w-full space-y-4"
          >
            {/* Status Announcement when guestbook form signs */}
            {formFeedback && (
              <Alert variant="default" className="bevel-raised bg-surface border-success">
                <AlertTitle className="text-success font-bold flex items-center gap-2">
                  <span>✓</span>
                  <span>GUESTBOOK SIGNATURE RECORDED</span>
                </AlertTitle>
                <AlertDescription className="text-xs text-muted-foreground">
                  {formFeedback}
                </AlertDescription>
              </Alert>
            )}

            {/* 1. HOME SECTION */}
            {activeSection === "home" && (
              <div className="space-y-4">
                <Panel variant="raised" className="bg-surface shadow-hard-sm">
                  <PanelHeader className="bg-muted/30 border-b border-border p-3">
                    <PanelTitle className="text-sm font-bold uppercase flex items-center gap-2">
                      <span>🏠</span>
                      <span>WELCOME TO MY CORNER OF CYBERSPACE</span>
                    </PanelTitle>
                  </PanelHeader>
                  <PanelContent className="p-4 space-y-4 text-xs leading-relaxed">
                    <p className="text-foreground">
                      Hello and welcome to my personal World Wide Web presence! I built this homepage
                      to celebrate the raw, open spirit of the early internet. Before algorithms, corporate
                      silos, and surveillance telemetry took over the web, people crafted small digital cabins
                      out of pure HTML, text files, and hand-tweaked pixel graphics.
                    </p>

                    <Well variant="default" className="p-3 border-l-4 border-l-primary space-y-1.5">
                      <div className="font-bold text-foreground uppercase tracking-wide text-[11px]">
                        THE PERSONAL HOMEPAGE MANIFESTO:
                      </div>
                      <p className="text-muted-foreground">
                        &quot;A website is not a product; it is a room in your digital home. You decorate it
                        with your own curiosities, link to your companions, and leave the front door unlocked
                        for friendly wanderers.&quot;
                      </p>
                    </Well>

                    <p className="text-muted-foreground">
                      Take your time exploring the sections using the top navigation bar. You will find my
                      handcrafted software experiments in the <strong>PROJECTS</strong> tab, a curated directory of
                      independent web links in the <strong>WEB DIRECTORY</strong>, and my guestbook where you can leave a note!
                    </p>
                  </PanelContent>
                </Panel>

                {/* Chronological Update Log */}
                <Panel variant="raised" className="bg-surface shadow-hard-sm">
                  <PanelHeader className="bg-muted/30 border-b border-border p-3 flex items-center justify-between">
                    <PanelTitle className="text-xs font-bold uppercase flex items-center gap-2">
                      <span>📜</span>
                      <span>CHRONOLOGICAL SITE DISPATCH LOG</span>
                    </PanelTitle>
                    <span className="text-[10px] text-muted-foreground">4 LOG ENTRIES</span>
                  </PanelHeader>
                  <PanelContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-28 text-[11px]">DATE</TableHead>
                          <TableHead className="text-[11px]">DISPATCH NOTE</TableHead>
                          <TableHead className="w-24 text-[11px] text-right">SECTOR</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="text-xs">
                        <TableRow>
                          <TableCell className="font-bold text-foreground">03/14/2000</TableCell>
                          <TableCell>Added 4 new link hubs to the Web Directory; updated Floyd-Steinberg algorithm notes.</TableCell>
                          <TableCell className="text-right">
                            <Badge variant="outline" className="text-[9px]">LINKS</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold text-foreground">02/28/2000</TableCell>
                          <TableCell>Re-calibrated 88×31 button showcase; verified table layout on 640×480 and 800×600 monitors.</TableCell>
                          <TableCell className="text-right">
                            <Badge variant="outline" className="text-[9px]">AESTHETICS</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold text-foreground">01/15/2000</TableCell>
                          <TableCell>Survived the Millennium Y2K transition without server meltdown! Guestbook counter restored.</TableCell>
                          <TableCell className="text-right">
                            <Badge variant="outline" className="text-[9px]">SYSTEM</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold text-foreground">11/12/1999</TableCell>
                          <TableCell>Initial website launch on the World Wide Web. Hand-coded with pride in valid HTML 4.01.</TableCell>
                          <TableCell className="text-right">
                            <Badge variant="outline" className="text-[9px]">LAUNCH</Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </PanelContent>
                </Panel>

                {/* Featured Project Teaser */}
                <Card className="bevel-raised bg-surface">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="default" className="text-[10px]">FEATURED CREATION</Badge>
                      <span className="text-[10px] text-muted-foreground font-mono">v0.9 BETA</span>
                    </div>
                    <CardTitle className="text-sm font-bold uppercase mt-1">
                      DitherCanvas: Realtime Floyd-Steinberg Dithering Engine
                    </CardTitle>
                    <CardDescription className="text-xs">
                      A lightweight algorithmic canvas script converting truecolor bitmaps into 1-bit Bayer and error-diffusion patterns.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-muted-foreground">
                    Runs directly in your browser without plugins. Implements Floyd-Steinberg, Atkinson, and ordered 4×4 Bayer matrix kernels.
                  </CardContent>
                  <CardFooter className="pt-2 border-t border-border flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setActiveSection("projects")}
                      className="bevel-raised active:bevel-pressed bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase"
                    >
                      View All Projects →
                    </button>
                    <span className="text-[10px] text-muted-foreground">Pure Vanilla JavaScript</span>
                  </CardFooter>
                </Card>
              </div>
            )}

            {/* 2. ABOUT ME SECTION */}
            {activeSection === "about" && (
              <div className="space-y-4">
                <Panel variant="raised" className="bg-surface shadow-hard-sm">
                  <PanelHeader className="bg-muted/30 border-b border-border p-3">
                    <PanelTitle className="text-sm font-bold uppercase flex items-center gap-2">
                      <span>👤</span>
                      <span>ABOUT THE WEBMASTER: RINSHAD</span>
                    </PanelTitle>
                  </PanelHeader>
                  <PanelContent className="p-4 space-y-4 text-xs leading-relaxed">
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <div className="shrink-0 bevel-raised p-1.5 bg-background">
                        <PixelImage
                          src="/apple-touch-icon.png"
                          alt="Webmaster Rinshad Portrait"
                          width={88}
                          height={88}
                          className="w-24 h-24 image-rendering-pixelated"
                          caption="Webmaster Rinshad (c. 1999)"
                        />
                      </div>
                      <div className="space-y-2">
                        <p className="text-foreground">
                          Greetings! I am Rinshad, a student and digital craftsman tinkering from my
                          bedroom terminal in Kerala, India. When I am not studying mathematics and computer
                          science, I spend my late evenings exploring Usenet, compiling open-source utilities,
                          and crafting retro user interfaces.
                        </p>
                        <p className="text-muted-foreground">
                          I strongly believe the web should be human-scale. Rather than consuming passive feeds,
                          I enjoy building tools from scratch: writing assembly subroutines, creating 1-bit textures,
                          and preserving early digital culture for future generations.
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xs uppercase text-foreground mb-2">
                        WORKSTATION &amp; HARDWARE RIG SPECIFICATIONS:
                      </h3>
                      <div className="bevel-inset bg-background p-3 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                          <div><strong className="text-foreground">CPU:</strong> Intel Pentium III @ 500 MHz</div>
                          <div><strong className="text-foreground">Memory:</strong> 128 MB PC100 SDRAM</div>
                          <div><strong className="text-foreground">Storage:</strong> 10.2 GB Western Digital IDE HDD</div>
                          <div><strong className="text-foreground">Graphics:</strong> 3dfx Voodoo3 3000 AGP (16MB)</div>
                          <div><strong className="text-foreground">Display:</strong> 17&quot; Sony Trinitron CRT (1024×768 @ 85Hz)</div>
                          <div><strong className="text-foreground">Modem:</strong> US Robotics 56k V.90 External FaxModem</div>
                          <div><strong className="text-foreground">Operating OS:</strong> Red Hat Linux 6.0 &amp; Windows 98 SE</div>
                          <div><strong className="text-foreground">Toolchain:</strong> GCC 2.95, Vim, Perl 5.005, Netscape 4.75</div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="font-bold text-xs uppercase text-foreground">
                        INTERESTS &amp; CURIOUS PASTIMES:
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li><strong>Demoscene Culture:</strong> Tracking MOD files, FastTracker II music, and algorithmic graphics demos.</li>
                        <li><strong>Retro Computing:</strong> 68k Macintosh systems, Commodore 64 BASIC, and vintage mainframe architectures.</li>
                        <li><strong>Loose-Leaf Chai:</strong> Brewing authentic cardamom tea during midnight programming sessions.</li>
                        <li><strong>Digital Archiving:</strong> Mirroring vanishing personal homepages and preserving BBS bulletin board history.</li>
                      </ul>
                    </div>
                  </PanelContent>
                </Panel>
              </div>
            )}

            {/* 3. PROJECTS SECTION */}
            {activeSection === "projects" && (
              <div className="space-y-4">
                <Panel variant="raised" className="bg-surface shadow-hard-sm">
                  <PanelHeader className="bg-muted/30 border-b border-border p-3 flex items-center justify-between">
                    <PanelTitle className="text-sm font-bold uppercase flex items-center gap-2">
                      <span>💾</span>
                      <span>SOFTWARE EXPERIMENTS &amp; ARCHIVES</span>
                    </PanelTitle>
                    <Badge variant="outline" className="text-[10px]">4 ACTIVE PROJECTS</Badge>
                  </PanelHeader>
                  <PanelContent className="p-4 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Project 1 */}
                      <Card className="bevel-raised bg-surface flex flex-col justify-between">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="default" className="text-[9px]">JAVASCRIPT</Badge>
                            <span className="text-[10px] text-muted-foreground">v0.9</span>
                          </div>
                          <CardTitle className="text-xs font-bold uppercase mt-1">
                            DitherCanvas Engine
                          </CardTitle>
                          <CardDescription className="text-[11px]">
                            Floyd-Steinberg, Atkinson, and Bayer error diffusion routines compiled in client-side script.
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-2 border-t border-border flex justify-between items-center text-[10px]">
                          <span className="text-success font-bold">● WORKING</span>
                          <span className="text-muted-foreground">MIT License</span>
                        </CardFooter>
                      </Card>

                      {/* Project 2 */}
                      <Card className="bevel-raised bg-surface flex flex-col justify-between">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="default" className="text-[9px]">PERL CGI</Badge>
                            <span className="text-[10px] text-muted-foreground">v1.2</span>
                          </div>
                          <CardTitle className="text-xs font-bold uppercase mt-1">
                            CyberRing Hub Protocol
                          </CardTitle>
                          <CardDescription className="text-[11px]">
                            A decentralized Perl 5 script that automatically manages webring rings without centralized ad servers.
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-2 border-t border-border flex justify-between items-center text-[10px]">
                          <span className="text-success font-bold">● DEPLOYED</span>
                          <span className="text-muted-foreground">GPL v2</span>
                        </CardFooter>
                      </Card>

                      {/* Project 3 */}
                      <Card className="bevel-raised bg-surface flex flex-col justify-between">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="default" className="text-[9px]">ANSI / ASCII</Badge>
                            <span className="text-[10px] text-muted-foreground">v0.5b</span>
                          </div>
                          <CardTitle className="text-xs font-bold uppercase mt-1">
                            BBS AsciiArt Generator
                          </CardTitle>
                          <CardDescription className="text-[11px]">
                            Converts 8-bit bitmap icons into pure CP437 ASCII blocks for BBS forum signatures and terminal banners.
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-2 border-t border-border flex justify-between items-center text-[10px]">
                          <span className="text-primary font-bold">● BETA</span>
                          <span className="text-muted-foreground">Freeware</span>
                        </CardFooter>
                      </Card>

                      {/* Project 4 */}
                      <Card className="bevel-raised bg-surface flex flex-col justify-between">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="default" className="text-[9px]">TYPOGRAPHY</Badge>
                            <span className="text-[10px] text-muted-foreground">v1.0</span>
                          </div>
                          <CardTitle className="text-xs font-bold uppercase mt-1">
                            PixelFont 8×8 Studio
                          </CardTitle>
                          <CardDescription className="text-[11px]">
                            A geometric 8×8 bitmap font family crafted for high legibility on 640×480 monochrome CRTs.
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-2 border-t border-border flex justify-between items-center text-[10px]">
                          <span className="text-success font-bold">● COMPLETE</span>
                          <span className="text-muted-foreground">Public Domain</span>
                        </CardFooter>
                      </Card>
                    </div>
                  </PanelContent>
                </Panel>
              </div>
            )}

            {/* 4. WEB DIRECTORY / LINKS SECTION */}
            {activeSection === "links" && (
              <div className="space-y-4">
                <Panel variant="raised" className="bg-surface shadow-hard-sm">
                  <PanelHeader className="bg-muted/30 border-b border-border p-3">
                    <PanelTitle className="text-sm font-bold uppercase flex items-center gap-2">
                      <span>🌐</span>
                      <span>CURATED WEB DIRECTORY &amp; COOL SITES</span>
                    </PanelTitle>
                  </PanelHeader>
                  <PanelContent className="p-4 space-y-4">
                    <p className="text-xs text-muted-foreground">
                      An annotated directory of hand-selected links celebrating indie webmasters,
                      pixel artists, retro hardware museums, and open web standards.
                    </p>

                    <WebDirectory>
                      <WebDirectoryHeader className="text-xs font-bold">
                        <span>CLASSIFIED TOPICAL CATEGORIES</span>
                      </WebDirectoryHeader>

                      <WebDirectoryGrid cols={2}>
                        {/* Category 1 */}
                        <WebDirectoryCategory>
                          <WebDirectoryTitle count={4} icon="📐">
                            Web Standards &amp; Handcraft
                          </WebDirectoryTitle>
                          <WebDirectoryList>
                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://www.w3.org/TR/html401/" isNew>
                                W3C HTML 4.01 Specification
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                The canonical reference for semantic, clean, and accessible markup.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="http://www.csszengarden.com/">
                                CSS Zen Garden
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Demonstrating the beauty and power of CSS style sheet separation.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://alistapart.com/">
                                A List Apart
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Exploring web design, code quality, and progressive enhancement.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://webstandards.org/">
                                The Web Standards Project (WaSP)
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Fighting browser fragmentation to ensure the web remains open to everyone.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>
                          </WebDirectoryList>
                        </WebDirectoryCategory>

                        {/* Category 2 */}
                        <WebDirectoryCategory>
                          <WebDirectoryTitle count={4} icon="🎨">
                            Pixel Art &amp; Dithering
                          </WebDirectoryTitle>
                          <WebDirectoryList>
                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://pixeljoint.com/" isNew>
                                Pixel Joint Showcase
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Incredible community gallery of handcrafted pixel illustrations.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering">
                                Error-Diffusion Dither Archives
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Mathematical derivations of 1-bit quantization and serpentine scanning.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://modarchive.org/">
                                The MOD Archive
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Thousands of authentic 4-channel tracker tunes and ProTracker samples.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://scene.org/">
                                Scene.org Demoparty Vault
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                The central digital repository of the global demoscene movement.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>
                          </WebDirectoryList>
                        </WebDirectoryCategory>

                        {/* Category 3 */}
                        <WebDirectoryCategory>
                          <WebDirectoryTitle count={4} icon="💾">
                            Classic Computing &amp; Emulation
                          </WebDirectoryTitle>
                          <WebDirectoryList>
                            <WebDirectoryItem>
                              <WebDirectoryLink href="http://www.vintage.org/">
                                Vintage Computer Festival (VCF)
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Celebrating historic computing machinery and hands-on demonstrations.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://www.invisibles.org/" isNew>
                                Retro Mac OS Preservation
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                System 7 and Mac OS 8 software archives running in 68k emulation.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://www.computerhistory.org/">
                                Computer History Museum
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Virtual tours of computing evolution from ENIAC to the microprocessor.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="http://telehack.com/">
                                Telehack Terminal Simulator
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Simulation of 1980s ARPANET, Usenet, and text-based network nodes.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>
                          </WebDirectoryList>
                        </WebDirectoryCategory>

                        {/* Category 4 */}
                        <WebDirectoryCategory>
                          <WebDirectoryTitle count={4} icon="🏡">
                            The Indie &amp; Personal Web
                          </WebDirectoryTitle>
                          <WebDirectoryList>
                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://neocities.org/" isNew>
                                Neocities Homepage Revival
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Bringing back independent personal websites with modern static hosting.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://archive.org/web/geocities.php">
                                GeoCities Internet Archive Project
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Preserving 38 million personal homepages from the late 1990s.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://indieweb.org/">
                                The IndieWeb Movement
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                Own your content and identity instead of giving it to closed platforms.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>

                            <WebDirectoryItem>
                              <WebDirectoryLink href="https://yesterweb.org/">
                                The Yesterweb Manifesto
                              </WebDirectoryLink>
                              <WebDirectoryDescription>
                                An inclusive sanctuary celebrating non-commercial digital craft.
                              </WebDirectoryDescription>
                            </WebDirectoryItem>
                          </WebDirectoryList>
                        </WebDirectoryCategory>
                      </WebDirectoryGrid>
                    </WebDirectory>
                  </PanelContent>
                </Panel>
              </div>
            )}

            {/* 5. GUESTBOOK SECTION */}
            {activeSection === "guestbook" && (
              <div className="space-y-4">
                <Panel variant="raised" className="bg-surface shadow-hard-sm">
                  <PanelHeader className="bg-muted/30 border-b border-border p-3 flex items-center justify-between">
                    <PanelTitle className="text-sm font-bold uppercase flex items-center gap-2">
                      <span>📖</span>
                      <span>PUBLIC VISITOR GUESTBOOK</span>
                    </PanelTitle>
                    <Badge variant="outline" className="text-[10px]">
                      {guestbookEntries.length} SIGNATURES RECORDED
                    </Badge>
                  </PanelHeader>
                  <PanelContent className="p-4 space-y-6">
                    {/* Sign Guestbook Form */}
                    <div className="bevel-inset bg-background p-4 space-y-3">
                      <div className="font-bold text-xs uppercase text-foreground flex items-center justify-between border-b border-border pb-2">
                        <span>✍ LEAVE YOUR SIGNATURE ON MY HOMEPAGE</span>
                        <span className="text-[10px] text-muted-foreground font-normal">* Required fields</span>
                      </div>

                      {formError && (
                        <Alert variant="destructive" className="py-2 text-xs">
                          <AlertDescription>⚠ {formError}</AlertDescription>
                        </Alert>
                      )}

                      <form onSubmit={handleGuestbookSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label htmlFor="gb-author" className="text-[11px] font-bold text-foreground">
                              YOUR NAME / HANDLE *
                            </label>
                            <Input
                              id="gb-author"
                              value={formAuthor}
                              onChange={(e) => setFormAuthor(e.target.value)}
                              placeholder="e.g. CyberSurfer99"
                              className="text-xs h-8"
                            />
                          </div>

                          <div className="space-y-1">
                            <label htmlFor="gb-location" className="text-[11px] font-bold text-foreground">
                              CITY / REGION
                            </label>
                            <Input
                              id="gb-location"
                              value={formLocation}
                              onChange={(e) => setFormLocation(e.target.value)}
                              placeholder="e.g. Kyoto, Japan"
                              className="text-xs h-8"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="gb-website" className="text-[11px] font-bold text-foreground">
                            YOUR WEBSITE URL (OPTIONAL)
                          </label>
                          <Input
                            id="gb-website"
                            value={formWebsite}
                            onChange={(e) => setFormWebsite(e.target.value)}
                            placeholder="e.g. https://my-nook.neocities.org"
                            className="text-xs h-8"
                          />
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="gb-message" className="text-[11px] font-bold text-foreground">
                            MESSAGE / NOTES *
                          </label>
                          <Input
                            id="gb-message"
                            value={formMessage}
                            onChange={(e) => setFormMessage(e.target.value)}
                            placeholder="Write your note to webmaster Rinshad..."
                            className="text-xs h-8"
                          />
                        </div>

                        <div className="pt-1 flex items-center justify-between">
                          <span className="text-[10px] text-muted-foreground">
                            Entries are recorded immediately in local state.
                          </span>
                          <Button
                            type="submit"
                            size="sm"
                            className="bevel-raised active:bevel-pressed bg-primary text-primary-foreground font-bold uppercase text-xs"
                          >
                            Sign Guestbook ✍
                          </Button>
                        </div>
                      </form>
                    </div>

                    {/* Guestbook Entries List */}
                    <Guestbook>
                      <GuestbookHeader>
                        <GuestbookTitle as="h3">
                          <span>SIGNATURE ARCHIVE</span>
                        </GuestbookTitle>
                        <span className="text-[10px] text-muted-foreground">
                          CHRONOLOGICAL DESCENDING
                        </span>
                      </GuestbookHeader>

                      <GuestbookEntryList>
                        {guestbookEntries.map((entry) => (
                          <GuestbookEntry
                            key={entry.id}
                            entryNumber={entry.entryNumber}
                            author={entry.author}
                            date={entry.date}
                            location={entry.location}
                            websiteUrl={entry.websiteUrl}
                            websiteName={entry.websiteName}
                            message={entry.message}
                            avatar={
                              <div className="w-6 h-6 bevel-inset bg-muted text-foreground flex items-center justify-center font-bold text-[10px] uppercase shrink-0">
                                {entry.author.substring(0, 2)}
                              </div>
                            }
                          />
                        ))}
                      </GuestbookEntryList>

                      <GuestbookFooter>
                        <span>END OF ARCHIVED GUESTBOOK PAGES</span>
                        <span>HOSTED CYBERSPACE NODE</span>
                      </GuestbookFooter>
                    </Guestbook>
                  </PanelContent>
                </Panel>
              </div>
            )}

            {/* 6. WEBRING SECTION */}
            {activeSection === "webring" && (
              <div className="space-y-4">
                <Panel variant="raised" className="bg-surface shadow-hard-sm">
                  <PanelHeader className="bg-muted/30 border-b border-border p-3 flex items-center justify-between">
                    <PanelTitle className="text-sm font-bold uppercase flex items-center gap-2">
                      <span>🔗</span>
                      <span>RETRO WEB DEVELOPERS RING</span>
                    </PanelTitle>
                    <Badge variant="outline" className="text-[10px]">RING HUB #042</Badge>
                  </PanelHeader>
                  <PanelContent className="p-4 space-y-4 text-xs leading-relaxed">
                    <p className="text-foreground">
                      A <strong>WebRing</strong> is an interconnected loop of independent personal websites
                      sharing a common interest. Before search engines became giant monopolistic gatekeepers,
                      webrings allowed curious visitors to discover related sites by following the &quot;Previous&quot;
                      and &quot;Next&quot; links!
                    </p>

                    <div className="bevel-raised bg-background p-4 space-y-4 text-center">
                      <WebRing variant="vintage" className="w-full max-w-lg mx-auto">
                        <WebRingHeader>
                          <WebRingTitle>RETRO WEB DEVELOPERS RING</WebRingTitle>
                          <Badge variant="outline" className="text-[10px]">
                            MEMBER #{currentRingMember.id} OF {WEBRING_MEMBERS.length}
                          </Badge>
                        </WebRingHeader>
                        <WebRingSite name={currentRingMember.name} memberIndex={currentRingMember.id} totalMembers={WEBRING_MEMBERS.length}>
                          <div className="space-y-1">
                            <div>
                              Current Ring Member: <strong className="text-foreground text-sm">{currentRingMember.name}</strong>
                            </div>
                            <div className="text-[11px] text-muted-foreground">
                              Webmaster: <strong className="text-foreground">{currentRingMember.owner}</strong>
                            </div>
                            <p className="text-xs text-foreground italic pt-1">
                              &quot;{currentRingMember.description}&quot;
                            </p>
                          </div>
                        </WebRingSite>
                        <WebRingNavigation>
                          <WebRingLink direction="prev" href="#prev" onClick={handlePrevRing}>
                            [« Previous]
                          </WebRingLink>
                          <WebRingLink direction="random" href="#random" onClick={handleRandomRing}>
                            [? Random]
                          </WebRingLink>
                          <WebRingLink direction="hub" href="#hub" onClick={() => setActiveSection("webring")}>
                            [Ring Hub]
                          </WebRingLink>
                          <WebRingLink direction="next" href="#next" onClick={handleNextRing}>
                            [Next »]
                          </WebRingLink>
                        </WebRingNavigation>
                      </WebRing>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xs uppercase text-foreground mb-2">
                        ALL CURRENT RING MEMBERS:
                      </h3>
                      <div className="bevel-inset bg-background p-0">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-12 text-[10px]">ID</TableHead>
                              <TableHead className="text-[10px]">SITE NAME</TableHead>
                              <TableHead className="text-[10px]">WEBMASTER</TableHead>
                              <TableHead className="w-20 text-[10px] text-right">ACTION</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="text-xs">
                            {WEBRING_MEMBERS.map((m, idx) => (
                              <TableRow key={m.id} className={idx === currentRingIndex ? "bg-muted/50" : ""}>
                                <TableCell className="font-bold">#{m.id}</TableCell>
                                <TableCell className="font-bold text-foreground">
                                  {m.name}
                                  {idx === currentRingIndex && (
                                    <span className="ml-1 text-[9px] text-primary uppercase font-bold">
                                      [Viewing]
                                    </span>
                                  )}
                                </TableCell>
                                <TableCell className="text-muted-foreground">{m.owner}</TableCell>
                                <TableCell className="text-right">
                                  <button
                                    type="button"
                                    onClick={() => setCurrentRingIndex(idx)}
                                    className="text-[10px] text-primary hover:underline font-bold"
                                  >
                                    Select
                                  </button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </PanelContent>
                </Panel>
              </div>
            )}

            {/* 88×31 Badges & Web Awards Strip */}
            <Panel variant="raised" className="bg-surface shadow-hard-sm">
              <PanelHeader className="bg-muted/30 border-b border-border py-1.5 px-3 flex items-center justify-between">
                <PanelTitle className="text-xs uppercase font-bold flex items-center gap-1.5">
                  <span>🎖</span>
                  <span>88×31 BUTTON SHOWCASE &amp; WEB STANDARDS</span>
                </PanelTitle>
                <span className="text-[10px] text-muted-foreground">8 BADGES</span>
              </PanelHeader>
              <PanelContent className="p-3 space-y-3">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Button88x31 label="BEST VIEWED" value="800×600" />
                  <Button88x31 label="HAND" value="CODED" />
                  <Button88x31 label="HTML" value="4.01" />
                  <Button88x31 label="CSS" value="VALID" />
                  <Button88x31 label="OPEN" value="WEB" />
                  <Button88x31 label="ZERO" value="TRACKING" />
                  <Button88x31 label="NEOCITIES" value="HOSTED" />
                  <Button88x31 label="CAFFEINE" value="POWERED" />
                </div>

                <div className="text-[10px] text-center text-muted-foreground">
                  Feel free to copy our 88×31 button and hotlink it to your own personal links page!
                </div>
              </PanelContent>
            </Panel>
          </section>
        </div>

        {/* Footer */}
        <footer className="bevel-raised bg-surface p-3 text-center text-xs space-y-1.5 text-muted-foreground border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-3 font-bold text-foreground">
            <button
              type="button"
              onClick={() => setActiveSection("home")}
              className="hover:text-primary uppercase"
            >
              Home
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveSection("about")}
              className="hover:text-primary uppercase"
            >
              About
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveSection("projects")}
              className="hover:text-primary uppercase"
            >
              Projects
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveSection("links")}
              className="hover:text-primary uppercase"
            >
              Links
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveSection("guestbook")}
              className="hover:text-primary uppercase"
            >
              Guestbook
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveSection("webring")}
              className="hover:text-primary uppercase"
            >
              Web Ring
            </button>
          </div>
          <div className="text-[10px]">
            &copy; 1999–2001 Webmaster Rinshad • Hand-crafted with @ditherweb/ui primitives • All rights reserved in cyberspace
          </div>
        </footer>
      </main>
    </div>
  );
}
