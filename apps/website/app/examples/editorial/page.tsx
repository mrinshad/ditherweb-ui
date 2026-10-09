import type { Metadata } from "next";
import { EditorialExampleClient } from "./editorial-example-client";

export const metadata: Metadata = {
  title: "FIELD NOTES — Independent Journal on Computing & Culture — Ditherweb",
  description:
    "An art-directed editorial publication exploring early web culture, durable computing protocols, and classic typography with generous whitespace and restrained Ditherweb character.",
  alternates: {
    canonical: "/examples/editorial",
  },
  openGraph: {
    title: "FIELD NOTES — Independent Journal on Computing & Culture — Ditherweb",
    description:
      "An art-directed editorial publication exploring early web culture, durable computing protocols, and classic typography with generous whitespace and restrained Ditherweb character.",
    url: "https://ditherweb.mrinshad.site/examples/editorial",
    images: ["/og-image.png"],
  },
};

export default function EditorialPage() {
  return <EditorialExampleClient />;
}
