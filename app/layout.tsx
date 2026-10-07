import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ditherweb",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body className="min-h-dvh flex flex-col antialiased">{children}</body>
    </html>
  );
}
