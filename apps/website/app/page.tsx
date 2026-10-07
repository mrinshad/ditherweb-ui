import type { Metadata } from "next";
import HomePageClient from "./home-page-client";

export const metadata: Metadata = {
  title: "Ditherweb — Retro UI Framework for React",
  description:
    "Ditherweb is a retro-inspired React UI framework and component library combining classic Web and computer UI aesthetics with modern engineering.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ditherweb — Retro UI Framework for React",
    description:
      "Ditherweb is a retro-inspired React UI framework and component library combining classic Web and computer UI aesthetics with modern engineering.",
    url: "https://ditherweb.mrinshad.site",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <HomePageClient />;
}
