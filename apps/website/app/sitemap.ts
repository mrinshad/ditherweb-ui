import type { MetadataRoute } from "next";
import { COMPONENT_DOCS_REGISTRY } from "@/lib/component-docs-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ditherweb.mrinshad.site";
  const lastModified = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/components`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playground`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs/installation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/theming`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/accessibility`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/composition`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const exampleRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/examples`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/examples/dashboard`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/examples/admin`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/examples/classic-web`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/examples/terminal`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const componentRoutes: MetadataRoute.Sitemap = Object.keys(COMPONENT_DOCS_REGISTRY).map(
    (slug) => ({
      url: `${baseUrl}/components/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    }),
  );

  return [...coreRoutes, ...guideRoutes, ...exampleRoutes, ...componentRoutes];
}

