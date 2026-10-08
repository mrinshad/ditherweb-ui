import type { Metadata } from "next";
import ComponentsCatalogClient from "./components-catalog-client";

export const metadata: Metadata = {
  title: "Ditherweb Components — Retro React UI Library",
  description:
    "Explore Ditherweb's full catalog of retro React components: buttons, inputs, dialogs, cards, forms, and surfaces with authentic classic desktop bevels and Bayer dithering.",
  alternates: {
    canonical: "/components",
  },
  openGraph: {
    title: "Ditherweb Components — Retro React UI Library",
    description:
      "Explore Ditherweb's full catalog of retro React components: buttons, inputs, dialogs, cards, forms, and surfaces with authentic classic desktop bevels and Bayer dithering.",
    url: "https://ditherweb.mrinshad.site/components",
    images: ["/og-image.png"],
  },
};

export default function ComponentsPage() {
  return <ComponentsCatalogClient />;
}
