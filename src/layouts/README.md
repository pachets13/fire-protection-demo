# src/layouts/

Astro layout files — define the outer HTML shell that pages slot into.

## `BaseLayout.astro`

The only layout. Every page uses it.

**What it provides:**
- Full HTML document (`<!DOCTYPE html>`, `<head>`, `<body>`)
- Google Fonts (Inter) loaded in `<head>`
- `<meta name="description">` — accepts a `description` prop
- `<title>` — auto-formats as `{title} | Integrity Fire Protection`
- `<Nav />` before the main content
- `<Footer />` after the main content

**Props:**
- `title` (required) — the page title
- `description` (optional) — meta description for SEO; has a sensible default

**Usage in pages:**
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Services" description="Optional custom description.">
  <!-- page content here -->
</BaseLayout>
```
