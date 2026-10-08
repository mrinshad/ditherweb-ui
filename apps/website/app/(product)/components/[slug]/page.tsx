import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPONENT_DOCS_REGISTRY } from "@/lib/component-docs-registry";
import { ComponentDocClient } from "./component-doc-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(COMPONENT_DOCS_REGISTRY).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = COMPONENT_DOCS_REGISTRY[slug];

  if (!entry) {
    return {
      title: "Component Not Found — Ditherweb",
    };
  }

  return {
    title: `Ditherweb ${entry.name} — ${entry.category} React UI Component`,
    description: `${entry.name} component in Ditherweb: ${entry.description}`,
    alternates: {
      canonical: `/components/${entry.slug}`,
    },
    openGraph: {
      title: `Ditherweb ${entry.name} — ${entry.category} React UI Component`,
      description: entry.description,
      url: `https://ditherweb.mrinshad.site/components/${entry.slug}`,
      images: ["/og-image.png"],
    },
  };
}

function ComponentDocSkeleton() {
  return (
    <div className="space-y-8 font-mono animate-pulse">
      <div className="h-4 w-48 bg-muted bevel-inset" />
      <div className="space-y-3">
        <div className="h-6 w-32 bg-muted bevel-inset" />
        <div className="h-10 w-64 bg-muted bevel-inset" />
        <div className="h-12 w-full max-w-xl bg-muted/60" />
      </div>
      <div className="h-64 w-full bg-surface bevel-raised p-6" />
    </div>
  );
}

async function ComponentDocContent({ params }: PageProps) {
  const { slug } = await params;
  const entry = COMPONENT_DOCS_REGISTRY[slug];

  if (!entry) {
    notFound();
  }

  return <ComponentDocClient entry={entry} />;
}

export default function ComponentDocPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ComponentDocSkeleton />}>
      <ComponentDocContent params={params} />
    </Suspense>
  );
}
