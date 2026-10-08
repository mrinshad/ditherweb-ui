import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ditherweb.mrinshad.site"),
  title: {
    default: "Ditherweb — Retro UI Framework for React",
    template: "%s | Ditherweb",
  },
  description:
    "Ditherweb is a retro-inspired React UI framework and component library combining classic Web and computer UI aesthetics with modern engineering.",
  keywords: [
    "Ditherweb",
    "Ditherweb UI",
    "Ditherweb UI framework",
    "Ditherweb React",
    "Ditherweb Next.js",
    "Ditherweb components",
    "Ditherweb component library",
    "Ditherweb design system",
    "dither UI",
    "retro UI framework",
    "retro React UI",
    "retro web UI",
    "pixel UI React",
    "old web UI components",
    "retro component library",
    "bitmap UI",
    "dithered UI",
    "Bayer dithering",
  ],
  authors: [{ name: "Ditherweb", url: "https://ditherweb.mrinshad.site" }],
  creator: "Ditherweb",
  publisher: "Ditherweb",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon-light.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/icon-dark.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
    ],
    shortcut: "/icon-dark.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ditherweb — Retro UI Framework for React",
    description:
      "Ditherweb is a retro-inspired React UI framework and component library combining classic Web and computer UI aesthetics with modern engineering.",
    url: "https://ditherweb.mrinshad.site",
    siteName: "Ditherweb",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ditherweb — Retro UI Framework for React",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ditherweb — Retro UI Framework for React",
    description:
      "Ditherweb is a retro-inspired React UI framework and component library combining classic Web and computer UI aesthetics with modern engineering.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://ditherweb.mrinshad.site/#website",
      url: "https://ditherweb.mrinshad.site",
      name: "Ditherweb",
      description:
        "A retro-inspired React UI framework and component library combining classic Web and computer UI aesthetics with modern engineering.",
      publisher: {
        "@type": "Organization",
        name: "Ditherweb",
        url: "https://ditherweb.mrinshad.site",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://ditherweb.mrinshad.site/#software",
      name: "Ditherweb",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      url: "https://ditherweb.mrinshad.site",
      description:
        "Ditherweb is a retro-inspired React UI framework and component library combining classic Web and computer UI aesthetics with modern engineering.",
      softwareRequirements: "React 19, Next.js, Tailwind CSS",
      license: "https://github.com/mrinshad/ditherweb-ui/blob/main/LICENSE",
      codeRepository: "https://github.com/mrinshad/ditherweb-ui",
    },
  ],
};

/**
 * Inline script to set dark mode class before first paint.
 * Avoids flash of wrong theme. Reads localStorage, falls back to system preference.
 */
const darkModeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('ditherweb-theme');
      if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh flex flex-col antialiased bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1 w-full">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
