import type { Metadata } from "next";
import { AdminExampleClient } from "./admin-example-client";

export const metadata: Metadata = {
  title: "USER DIRECTORY Admin Console — Ditherweb Examples",
  description:
    "An administrative user directory and permission matrix reference implementation composed entirely from Ditherweb primitives. Demonstrating CRUD workflows, dialogs, alerts, and structured tables.",
  alternates: {
    canonical: "/examples/admin",
  },
  openGraph: {
    title: "USER DIRECTORY Admin Console — Ditherweb Examples",
    description:
      "An administrative user directory and permission matrix reference implementation composed entirely from Ditherweb primitives.",
    url: "https://ditherweb.mrinshad.site/examples/admin",
    images: ["/og-image.png"],
  },
};

export default function AdminExamplePage() {
  return <AdminExampleClient />;
}
