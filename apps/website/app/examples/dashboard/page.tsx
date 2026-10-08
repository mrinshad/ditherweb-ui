import type { Metadata } from "next";
import { DashboardExampleClient } from "./dashboard-example-client";

export const metadata: Metadata = {
  title: "BYTEBASE Operations Dashboard — Ditherweb Examples",
  description:
    "A digital studio operations dashboard reference implementation composed entirely from Ditherweb primitives. Demonstrating real-world UI composition, responsive sidebar navigation, and retro styling.",
  alternates: {
    canonical: "/examples/dashboard",
  },
  openGraph: {
    title: "BYTEBASE Operations Dashboard — Ditherweb Examples",
    description:
      "A digital studio operations dashboard reference implementation composed entirely from Ditherweb primitives.",
    url: "https://ditherweb.mrinshad.site/examples/dashboard",
    images: ["/og-image.png"],
  },
};

export default function DashboardExamplePage() {
  return <DashboardExampleClient />;
}
