# src/components/

Reusable Astro components. These are building blocks used across pages.

## Current Components

### `Nav.astro`
Sticky top navigation bar. Fixed position, `z-50`, dark background with backdrop blur.
- Logo wrapped in a white `bg-white rounded` pill (logo file has white background)
- Links: About, Services, Contact
- Right side: phone number + "Work With Us" CTA button
- Mobile: hamburger menu toggling a vertical drawer
- Active link is highlighted in `brand-orange` using `Astro.url.pathname`

### `Footer.astro`
Full-width footer with three columns: brand/tagline, navigation, contact info.
- Auto-updates copyright year via `new Date().getFullYear()`
- Facebook and Instagram links are `href="#"` placeholders — update when URLs are known

## When to create a new component

Create a component when the same UI block is used on 2+ pages. For one-off sections, just write the HTML inline in the page file — don't over-abstract.

## Naming convention

PascalCase, `.astro` extension. Descriptive — `ServiceCard.astro`, not `Card.astro`.
