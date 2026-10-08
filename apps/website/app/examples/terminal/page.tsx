import type { Metadata } from "next";
import { TerminalExampleClient } from "./terminal-example-client";

export const metadata: Metadata = {
  title: "UNIX Workstation Example — Ditherweb",
  description:
    "A classic developer workstation reference implementation composed entirely from Ditherweb primitives. Featuring an interactive terminal console, file tree manager, system monitor diagnostics, and bitmap pixel canvas.",
  alternates: {
    canonical: "/examples/terminal",
  },
  openGraph: {
    title: "UNIX Workstation Example — Ditherweb",
    description:
      "A classic developer workstation reference implementation composed entirely from Ditherweb primitives.",
    url: "https://ditherweb.mrinshad.site/examples/terminal",
    images: ["/og-image.png"],
  },
};

export default function TerminalExamplePage() {
  return <TerminalExampleClient />;
}
