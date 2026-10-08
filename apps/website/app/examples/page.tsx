import type { Metadata } from "next";
import { ExamplesLandingClient } from "./examples-landing-client";

export const metadata: Metadata = {
  title: "Real-World Examples & Templates — Ditherweb",
  description:
    "Explore complete, real-world application interfaces composed entirely from Ditherweb primitives. Demonstrating retro-inspired appearance with modern React engineering.",
  alternates: {
    canonical: "/examples",
  },
  openGraph: {
    title: "Real-World Examples & Templates — Ditherweb",
    description:
      "Explore complete, real-world application interfaces composed entirely from Ditherweb primitives. Demonstrating retro-inspired appearance with modern React engineering.",
    url: "https://ditherweb.mrinshad.site/examples",
    images: ["/og-image.png"],
  },
};

export default function ExamplesPage() {
  return <ExamplesLandingClient />;
}
