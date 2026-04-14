# Shield Fire Protection — CLAUDE.md

This is the master routing document. Start here to understand the project layout before touching any files.

---

## Portfolio Demo Notice

**This is a sanitized portfolio/demonstration version of a real client project.**

- The business name, phone number, address, and email are all fictional. "Shield Fire Protection" is a placeholder — the real client is not named or identifiable in this repo.
- The logo has been replaced with a text-based element.
- All photos of people, vehicles, and real-world branding have been replaced with stock/generic images. No real client photos are present.
- The Google Maps embed points to generic downtown Winnipeg coordinates — no business pin.
- This repo exists solely to demonstrate design, code structure, and Astro/Tailwind implementation. It is not the live client site.

---

## Project Overview

**Demo name:** Shield Fire Protection (fictional)
**Stack:** Astro + Tailwind CSS
**Deploy target:** GitHub Pages (static export via `npm run build`)
**Status:** Complete — all 4 pages built, contact form is decorative (no backend)

---

## Folder Structure

```
/
├── CLAUDE.md                          ← You are here
├── astro.config.mjs                   ← Astro config (integrations, output mode)
├── tailwind.config.mjs                ← Brand colors, fonts, Tailwind setup
├── tsconfig.json                      ← TypeScript config (minimal, extends Astro base)
├── package.json                       ← Dependencies: astro, @astrojs/tailwind, tailwindcss
├── .gitignore
│
├── .github/
│   └── workflows/
│       └── deploy.yml                 ← GitHub Actions — auto-deploys to GitHub Pages on push to main
│
├── public/
│   └── images/                        ← All static image assets served as-is
│       ├── logo-dark.jpg              ← Orphaned (no longer referenced — logo is now a text element)
│       ├── slideshow-1.jpg            ← Stock/generic photo — used as hero slide 1, about team section
│       ├── slideshow-2.jpg            ← Stock/generic photo — used as hero slide 2, home CTA, about fleet
│       ├── slideshow-3.jpg            ← Stock/generic photo — used as hero slide 3, services CTA, about fleet
│       ├── slideshow-4.jpg            ← Stock/generic photo — used as hero slide 4, about team section
│       └── slideshow-5.jpg            ← Stock/generic photo — used as hero slide 5, about story section
│
└── src/
    ├── styles/
    │   ├── global.css                 ← Tailwind directives + custom component classes (btn-primary, section-label, input-field)
    │   └── README.md
    │
    ├── layouts/
    │   ├── BaseLayout.astro           ← HTML shell: <head>, Nav, Footer, <slot />. All pages use this.
    │   └── README.md
    │
    ├── components/
    │   ├── Nav.astro                  ← Sticky top nav with logo, links, phone, CTA button, mobile drawer
    │   ├── Footer.astro               ← Footer with logo, nav links, contact info, copyright
    │   └── README.md
    │
    ├── data/
    │   ├── services.js                ← All 11 services + inspection frequency schedule (used by services.astro)
    │   └── README.md
    │
    └── pages/
        ├── index.astro                ← Home: hero, stats, value props, certs, photo CTA, contact form
        ├── about.astro                ← About: story, team photos, fleet section, CTA
        ├── services.astro             ← Services: 11 service cards, inspection frequency table, CTA
        ├── contact.astro              ← Contact: phone, hours, address, decorative form, map placeholder
        └── README.md
```

---

## Brand Colors (defined in `tailwind.config.mjs`)

| Token | Hex | Use |
|---|---|---|
| `brand-orange` | `#E8721C` | Primary accent — CTAs, highlights, icons |
| `brand-orange-dark` | `#C55E0F` | Hover state for orange buttons |
| `brand-orange-light` | `#F0892A` | Hover state for orange text links |
| `brand-dark` | `#0F172A` | Primary background (dark sections, cards) |
| `brand-dark-2` | `#1E293B` | Secondary background (alternating sections) |
| `brand-light` | `#F8FAFC` | Light sections (certifications, frequency table) |

---

## Global CSS Classes (defined in `src/styles/global.css`)

| Class | Description |
|---|---|
| `.btn-primary` | Orange filled button — uppercase, tracked, hover darkens |
| `.btn-outline` | White outline button — hover adds subtle fill |
| `.section-label` | Small orange uppercase label above headings |
| `.input-field` | Dark form input with orange focus border |

---

## Pages at a Glance

| Page | File | Key Sections |
|---|---|---|
| Home | `src/pages/index.astro` | Hero (team photo), stats bar, value props, certifications, photo CTA, contact form |
| About | `src/pages/about.astro` | Page hero, story (owners photo), commitment pillars, team photos, fleet photos, CTA |
| Services | `src/pages/services.astro` | Page hero, 11 service cards (2-col grid), inspection frequency table, CTA |
| Contact | `src/pages/contact.astro` | Page hero, phone/hours/address, decorative form, map placeholder |

---

## Key Decisions & Notes

- **Logo:** Replaced with a styled text element (`Shield Fire Protection` on brand-orange background) in Nav and Footer. The original `logo-dark.jpg` still exists in `public/images/` but is no longer referenced.
- **Business info:** All fictional — name "Shield Fire Protection", phone `(204) 555-0100`, address `123 Main Street, Winnipeg, MB R3C 0A1`, email `info@shieldfireprotection.ca`.
- **Photos:** `slideshow-1` through `slideshow-5` and `about/about-us-hero.jpg` are stock/generic images with no real client connection. Service card images in `public/images/services/` are technical reference photos, not client-specific.
- **Contact form:** Decorative only — `type="button"` on submit, no `action` attribute.
- **YouTube links:** All service cards have real YouTube embed URLs in `src/data/services.js` (generic fire protection demos, not client-produced).
- **Social links:** Facebook and Instagram `href="#"` in Nav and Footer — not wired to any real account.
- **Map:** Contact page embeds a generic Google Maps view of downtown Winnipeg — no business pin.
- **GitHub Pages deploy:** Configured in `astro.config.mjs` — update `site` and `base` if deploying under a different repo name.

---

## How to Run Locally

```bash
cd /Users/shawn/Desktop/fire-protection-demo
npm install
npm run dev
```

Then open `http://localhost:4321` in your browser.

## How to Build for Production

```bash
npm run build
# Output goes to ./dist/
```

## How to Deploy

Push to the `main` branch on GitHub. The GitHub Actions workflow in `.github/workflows/deploy.yml` handles the rest — it builds the site and deploys to GitHub Pages automatically.
