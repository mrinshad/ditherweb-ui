# Ditherweb Search Discoverability & SEO Guide

## 1. Overview & Strategy

Ditherweb (`https://ditherweb.mrinshad.site`) is positioned in search engines as:
> **"A retro-inspired React UI framework and component library combining classic Web and computer UI aesthetics with modern engineering."**

### Target Search Phrases
- **Primary:** `Ditherweb`, `Ditherweb UI`, `Ditherweb UI framework`, `Ditherweb React`, `Ditherweb Next.js`, `Ditherweb components`, `Ditherweb component library`, `Ditherweb design system`
- **Secondary / Topical:** `retro UI framework`, `retro React UI`, `retro web UI`, `pixel UI React`, `old web UI components`, `retro component library`, `bitmap UI`, `dithered UI`, `Bayer dithering`

### Brand Entity vs. Generic Term Separation
"Dither" is an established computer graphics term. To avoid confusion with general algorithms, Ditherweb establishes topical authority around the intersection of **dithering + retro web interfaces + React 19 component engineering**. No keyword stuffing or misleading techniques are used.

---

## 2. Technical Architecture

### 2.1 Next.js 16 Metadata & Canonical URLs
- **Canonical Domain:** `https://ditherweb.mrinshad.site`
- **Root Layout (`apps/website/app/layout.tsx`):**
  - `metadataBase: new URL("https://ditherweb.mrinshad.site")`
  - Title template: `%s | Ditherweb` with default `Ditherweb — Retro UI Framework for React`
  - Canonical `alternates`: `/`
  - Complete `robots` directives with Googlebot image preview and snippet permissions
  - `openGraph` and `twitter` summary cards pointing to `/og-image.png`
- **Route Segments:**
  - `/` — `Ditherweb — Retro UI Framework for React`
  - `/components` — `Ditherweb Components — Retro React UI Library | Ditherweb`
  - `/docs` — `Ditherweb Documentation — Retro UI Framework | Ditherweb`
  - `/playground` — `Ditherweb Playground — Interactive Retro UI | Ditherweb`

### 2.2 Next.js 16 Native Crawling Routes
- **`apps/website/app/robots.ts`:**
  - Emits `/robots.txt` allowing `*` on `/`
  - References canonical sitemap: `https://ditherweb.mrinshad.site/sitemap.xml`
- **`apps/website/app/sitemap.ts`:**
  - Emits `/sitemap.xml` listing all indexable public pages (`/`, `/components`, `/docs`, `/playground`) with last-modified timestamps and priority values.

### 2.3 Structured Data (JSON-LD)
The site serves static Schema.org JSON-LD in the HTML `<head>`:
- **`WebSite`:** Identifies `Ditherweb` with canonical URL and organization publisher.
- **`SoftwareApplication`:** Identifies Ditherweb as a `DeveloperApplication` requiring React 19, Next.js, and Tailwind CSS, linking directly to the open source repository (`https://github.com/mrinshad/ditherweb-ui`).
- No fabricated ratings, reviews, pricing, or misleading claims.

### 2.4 Social Preview Asset
- **Asset:** `/public/og-image.png` (1200×630 px)
- Renders high-contrast retro branding, 3D beveled container, and ordered Bayer dither accents.

---

## 3. Search Engine Submission Checklist

### Google Search Console
1. **Property Setup:**
   - Log in to [Google Search Console](https://search.google.com/search-console).
   - Add property for domain `ditherweb.mrinshad.site` (Domain or URL prefix `https://ditherweb.mrinshad.site/`).
   - Verify ownership via DNS TXT record or HTML file/tag.
2. **Sitemap Submission:**
   - Navigate to **Sitemaps** in the sidebar.
   - Enter `sitemap.xml` and click **Submit**.
   - Verify status transitions to "Success".
3. **URL Inspection:**
   - Inspect `https://ditherweb.mrinshad.site/`.
   - Click **Request Indexing**.
   - Repeat for key landing pages: `https://ditherweb.mrinshad.site/components` and `https://ditherweb.mrinshad.site/docs`.

### Bing Webmaster Tools
1. Log in to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Import verified property from Google Search Console or verify directly.
3. Submit sitemap: `https://ditherweb.mrinshad.site/sitemap.xml`.

---

## 4. Policy & Ethical Guidelines
- **Zero Black-Hat SEO:** Strictly no hidden text, keyword stuffing, cloaking, fake backlinks, doorway pages, or false schema markup.
- **Performance First:** No third-party SEO scripts or heavy bundles added; 100% native Next.js 16 metadata and static crawling.
