import type { Metadata } from "next";
import PlaygroundClient from "./playground-client";

export const metadata: Metadata = {
  title: "Ditherweb Playground — Interactive Retro UI",
  description:
    "Interactive component workbench for Ditherweb. Test buttons, alerts, inputs, switches, and badges across light and dark retro themes with real-time code generation.",
  alternates: {
    canonical: "/playground",
  },
  openGraph: {
    title: "Ditherweb Playground — Interactive Retro UI",
    description:
      "Interactive component workbench for Ditherweb. Test buttons, alerts, inputs, switches, and badges across light and dark retro themes with real-time code generation.",
    url: "https://ditherweb.mrinshad.site/playground",
    images: ["/og-image.png"],
  },
};

export default function PlaygroundPage() {
  return <PlaygroundClient />;
}
