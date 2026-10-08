"use client";

import * as React from "react";
import Link from "next/link";
import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Separator,
} from "@ditherweb/ui";
import { EXAMPLES_LIST } from "@/lib/examples-registry";

export function ExamplesLandingClient() {
  const featured = EXAMPLES_LIST.find((ex) => ex.slug === "dashboard");
  const upcoming = EXAMPLES_LIST.filter((ex) => ex.slug !== "dashboard");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      {/* Hero Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="bevel-inset bg-primary px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            PHASE 8
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Templates &amp; Compositions
          </span>
        </div>

        <h1 className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground uppercase">
          Real-World Examples
        </h1>

        <p className="font-mono text-sm text-muted-foreground leading-relaxed">
          Complete, usable interfaces composed entirely from Ditherweb primitives.
          Examples demonstrate how retro-inspired aesthetics, pixel discipline, and
          modern React engineering come together in real application contexts.
        </p>
      </div>

      <Separator />

      {/* Featured Live Example: BYTEBASE Dashboard */}
      {featured && (
        <section aria-labelledby="featured-example-heading" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2
              id="featured-example-heading"
              className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Featured Implementation
            </h2>
            <Badge variant="outline" className="font-mono text-[10px] uppercase font-bold text-success border-success">
              ● Ready to explore
            </Badge>
          </div>

          <Card className="p-0 overflow-hidden border-2 border-border bg-surface">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Details & Launch */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bevel-inset bg-accent px-1.5 py-0.5 font-mono text-[9px] font-bold text-accent-foreground uppercase">
                      {featured.category}
                    </span>
                    <Badge variant="outline" className="font-mono text-[10px] uppercase">
                      {featured.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-mono text-2xl font-bold uppercase tracking-tight text-foreground">
                      {featured.title}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">
                      {featured.subtitle}
                    </p>
                  </div>

                  <p className="font-mono text-xs text-foreground/90 leading-relaxed">
                    {featured.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-border/60">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                      Composition Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-muted-foreground">
                      {featured.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-primary font-bold">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bevel-inset px-2 py-0.5 font-mono text-[10px] text-muted-foreground uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={featured.targetHref}
                    className="bevel-raised active:bevel-pressed bg-primary text-primary-foreground px-6 py-2.5 font-mono text-sm font-bold uppercase select-none transition-transform active:translate-y-px inline-flex items-center gap-1.5 shadow-hard"
                  >
                    Launch Dashboard Example →
                  </Link>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    100% Client/PPR Compatible
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Preview Wireframe */}
              <div className="lg:col-span-5 bg-muted/40 border-t lg:border-t-0 lg:border-l border-border p-6 flex flex-col justify-center items-center">
                <div className="w-full max-w-sm bevel-raised bg-surface p-3 font-mono text-[10px] space-y-2.5 select-none shadow-sm">
                  {/* Mock Window Titlebar */}
                  <div className="flex items-center justify-between border-b border-border pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 bg-primary inline-block" />
                      <span className="font-bold tracking-wider text-foreground uppercase">
                        BYTEBASE // OPS DESK
                      </span>
                    </div>
                    <span className="text-[9px] text-success font-bold">ONLINE</span>
                  </div>

                  {/* Mock Layout Body */}
                  <div className="grid grid-cols-4 gap-2 h-44">
                    {/* Mock Rail Sidebar */}
                    <div className="col-span-1 bevel-inset bg-background/50 p-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="bg-primary/20 text-primary font-bold px-1 py-0.5 text-[8px]">
                          [#] OVR
                        </div>
                        <div className="text-muted-foreground px-1 py-0.5 text-[8px]">
                          [-] PRJ
                        </div>
                        <div className="text-muted-foreground px-1 py-0.5 text-[8px]">
                          [-] TSK
                        </div>
                      </div>
                      <div className="text-[7px] text-muted-foreground border-t border-border pt-1">
                        SYS:OK
                      </div>
                    </div>

                    {/* Mock Content */}
                    <div className="col-span-3 space-y-2 flex flex-col justify-between">
                      {/* Mock KPI Row */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bevel-inset bg-surface p-1.5">
                          <div className="text-[8px] text-muted-foreground">PROJECTS</div>
                          <div className="text-sm font-bold text-foreground">08</div>
                          <div className="h-1 bg-primary/40 mt-1 w-3/4" />
                        </div>
                        <div className="bevel-inset bg-surface p-1.5">
                          <div className="text-[8px] text-muted-foreground">TASKS</div>
                          <div className="text-sm font-bold text-foreground">42</div>
                          <div className="h-1 bg-success/60 mt-1 w-4/5" />
                        </div>
                      </div>

                      {/* Mock Table */}
                      <div className="bevel-inset bg-background p-1.5 space-y-1 flex-1">
                        <div className="flex justify-between text-[7px] text-muted-foreground border-b border-border/50 pb-0.5">
                          <span>TASK</span>
                          <span>STATUS</span>
                        </div>
                        <div className="flex justify-between text-[8px] text-foreground">
                          <span className="truncate">Shader pipeline</span>
                          <span className="text-primary font-bold">ACT</span>
                        </div>
                        <div className="flex justify-between text-[8px] text-foreground">
                          <span className="truncate">WCAG focus ring</span>
                          <span className="text-success font-bold">DONE</span>
                        </div>
                        <div className="flex justify-between text-[8px] text-foreground">
                          <span className="truncate">Pixel fallback</span>
                          <span className="text-muted-foreground">QUE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mock Footer Status */}
                  <div className="flex items-center justify-between text-[8px] text-muted-foreground border-t border-border pt-1">
                    <span>STATUS: 99.98% UPTIME</span>
                    <span>v0.1.0-alpha</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Upcoming Examples Roadmap */}
      <section aria-labelledby="upcoming-examples-heading" className="space-y-6">
        <div>
          <h2
            id="upcoming-examples-heading"
            className="font-mono text-base font-bold uppercase tracking-wider text-foreground"
          >
            Phase 8 Roadmap Compositions
          </h2>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            Additional full-screen application templates scheduled for subsequent Phase 8 increments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcoming.map((example) => (
            <Card
              key={example.slug}
              className="border border-border bg-surface flex flex-col justify-between"
            >
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bevel-inset bg-muted px-1.5 py-0.5 font-mono text-[9px] font-bold text-muted-foreground uppercase">
                    {example.category}
                  </span>
                  <Badge variant="outline" className="font-mono text-[9px] uppercase opacity-75">
                    {example.badge}
                  </Badge>
                </div>

                <div>
                  <CardTitle className="font-mono text-lg font-bold uppercase tracking-tight">
                    {example.title}
                  </CardTitle>
                  <CardDescription className="font-mono text-xs text-muted-foreground">
                    {example.subtitle}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="font-mono text-xs text-foreground/80 leading-relaxed">
                  {example.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-border/50">
                  <span className="font-mono text-[10px] font-bold uppercase text-muted-foreground block">
                    Planned Primitives:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {example.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bevel-inset px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t border-border pt-3 flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted-foreground italic">
                  In Design Phase
                </span>
                <span className="bevel-inset px-2 py-0.5 font-mono text-[10px] text-muted-foreground uppercase select-none">
                  Part B Roadmap
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="bevel-raised bg-surface p-6 sm:p-8 space-y-4">
        <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
          The Ditherweb Composition Standard
        </h3>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed max-w-3xl">
          Unlike generic design systems that require endless custom CSS or one-off component abstractions,
          every screen in Ditherweb is built by compositing the existing 96 primitives.
          We test and verify real application workflows to guarantee zero visual leakage, robust keyboard focus,
          and rock-solid accessibility.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/components"
            className="bevel-raised active:bevel-pressed px-3 py-1.5 font-mono text-xs font-bold text-foreground uppercase"
          >
            Explore 96 Components →
          </Link>
          <Link
            href="/docs"
            className="bevel-raised active:bevel-pressed px-3 py-1.5 font-mono text-xs font-bold text-foreground uppercase"
          >
            Read Documentation →
          </Link>
        </div>
      </section>
    </div>
  );
}
