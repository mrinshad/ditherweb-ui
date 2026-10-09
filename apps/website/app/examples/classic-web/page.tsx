import type { Metadata } from "next";
import { ClassicWebClient } from "./classic-web-client";

export const metadata: Metadata = {
  title: "RINSHAD'S HOMEPAGE — Classic Web Example — Ditherweb",
  description:
    "An authentic late-1990s / early-2000s personal homepage reference implementation composed entirely from Ditherweb primitives. Featuring web rings, visitor counters, guestbooks, retro banners, and 88x31 badges.",
  alternates: {
    canonical: "/examples/classic-web",
  },
  openGraph: {
    title: "RINSHAD'S HOMEPAGE — Classic Web Example — Ditherweb",
    description:
      "An authentic late-1990s / early-2000s personal homepage reference implementation composed entirely from Ditherweb primitives.",
    url: "https://ditherweb.mrinshad.site/examples/classic-web",
    images: ["/og-image.png"],
  },
};

export default function ClassicWebPage() {
  return <ClassicWebClient />;
}
