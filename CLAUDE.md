# Integrity Fire Protection — CLAUDE.md

This is the master routing document. Start here to understand the project layout before touching any files.

---

## Project Overview

**Client:** Integrity Fire Protection (integrityfireprotection.ca)
**Stack:** Astro + Tailwind CSS
**Deploy target:** GitHub Pages (static export via `npm run build`)
**Status:** In progress — all 4 pages built, contact form is decorative (no backend)

---

## Folder Structure

```
/
├── CLAUDE.md                          ← You are here
├── integrity-fire-protection-website-overview.md  ← Original site audit & content reference
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
│       ├── logo-dark.jpg              ← Brand logo (white background — handle with white container in dark nav)
│       ├── slideshow-1.jpeg           ← Full team shot (5 people, van) — used as hero
│       ├── slideshow-2.jpeg           ← Team with ladder rack + multiple vans — used in home CTA section
│       ├── slideshow-3.jpeg           ← Fleet lineup (3 vehicles) — used in services CTA
│       ├── slideshow-4.jpeg           ← Two technicians with tools — used in about team section
│       └── slideshow-5.jpeg           ← Owners couple — used as about page story photo
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

- **Logo:** Has a white background — always place inside a `bg-white rounded px-3 py-1.5` container on dark backgrounds.
- **Contact form:** Decorative only — `type="button"` on submit, no `action` attribute. Wire up with Formspree or EmailJS when ready.
- **YouTube links:** All service cards have `youtubeUrl: '#'` placeholder in `src/data/services.js` — update with real YouTube links.
- **Social links:** Facebook and Instagram `href="#"` in Nav and Footer — update with real URLs.
- **GitHub Pages deploy:** Configured for `https://pachets13.github.io/integrity-fire-protection`. If a custom domain is added later, remove `base` from `astro.config.mjs` and update `site`.
- **Map:** Contact page has a placeholder div at the bottom — replace with a Google Maps embed `<iframe>`.

---

## How to Run Locally

```bash
cd /Users/shawn/Desktop/Website-2
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
