import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Ditherweb — Retro Appearance. Modern Engineering.",
  description:
    "A modern React UI framework inspired by the visual language of the early Internet and classic computer interfaces.",
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
      </head>
      <body className="min-h-dvh flex flex-col antialiased bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1 w-full">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
