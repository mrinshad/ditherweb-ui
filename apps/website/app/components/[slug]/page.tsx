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

export default async function ComponentDocPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = COMPONENT_DOCS_REGISTRY[slug];

  if (!entry) {
    notFound();
  }

  return <ComponentDocClient entry={entry} />;
}
