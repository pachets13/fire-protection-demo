# Shield Fire Protection — CLAUDE.md

This is the master routing document. Start here to understand the project layout before touching any files.

---

## Portfolio Demo Notice

**This is a sanitized portfolio/demonstration version of a real client project.**

- The business name, phone number, address, and email are all fictional. "Shield Fire Protection" is a placeholder — the real client is not named or identifiable in this repo. **This is enforced, not asserted:** `npm run build` runs `scripts/check-anonymity.mjs` and fails if it stops being true. See *Anonymity gate* below.
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
├── scripts/
│   └── deploy.sh                      ← Publishes dist/ to the gh-pages branch. Run via npm run deploy
│
├── public/
│   └── .nojekyll                      ← Load-bearing. Branch Pages runs Jekyll and hard-fails without it
│
├── public/
│   └── images/                        ← All static image assets served as-is
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
    │   ├── BaseLayout.astro           ← HTML shell: <head>, Nav, Footer, floating Call Now FAB, <slot />. All pages use this.
    │   └── README.md
    │
    ├── components/
    │   ├── Nav.astro                  ← Sticky top nav with logo, links, "Work With Us" CTA, mobile drawer. Scroll-aware opacity, animated link underlines, smooth mobile drawer with backdrop.
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
| Contact | `src/pages/contact.astro` | Page hero, phone/hours/address, decorative form, Google Maps embed |

---

## Key Decisions & Notes

- **Logo:** Replaced with a styled text element (`Shield Fire Protection` on brand-orange background) in Nav and Footer. The real client's `logo-dark.jpg` was **deleted** on 2026-08-07. It had been left in `public/images/` as "orphaned, no longer referenced" — but an unreferenced file still serves at a guessable public URL, and this one was byte-identical to the real company's logo. Not referenced is not removed.
- **Business info:** All fictional — name "Shield Fire Protection", address `123 Main Street, Winnipeg, MB R3C 0A1`, email `info@shieldfireprotection.ca`.
- **Phone number:** `(204) 555-0100` everywhere — a fictional placeholder in the 555-01xx reserved range. This is the only number in the codebase; every `tel:` link and every displayed number uses it. Do not introduce a second one.
- **Nav:** Phone number removed from the nav bar entirely. Nav now has: logo (left), three nav links (center), "Work With Us" CTA (right). Scroll behavior solidifies background opacity and adds an orange border after 20px. Inactive links get a left-to-right underline slide on hover. CTA has a one-time attention pulse on load. Mobile drawer slides down smoothly with a backdrop overlay; closes on link tap or backdrop tap.
- **Floating Call Now button:** Fixed bottom-right, defined in `BaseLayout.astro` so it appears on all pages. Fades in after 1.5s. Fades out when the footer is in view (Intersection Observer). Links to the fictional number. Icon + "Call Now" text shown on all screen sizes.
- **Photos:** `slideshow-1` through `slideshow-5` and `about/about-us-hero.jpg` are stock/generic images with no real client connection. Service card images in `public/images/services/` are technical reference photos, not client-specific.
- **Contact form:** Decorative only — `type="button"` on submit, no `action` attribute.
- **YouTube links:** All service cards have real YouTube embed URLs in `src/data/services.js` (generic fire protection demos, not client-produced).
- **Social links:** Facebook and Instagram `href="#"` in Nav and Footer — not wired to any real account.
- **Map:** Contact page embeds a generic Google Maps view of downtown Winnipeg — no business pin.
- **GitHub Pages deploy:** `astro.config.mjs` has `base: '/fire-protection-demo'` and `site: 'https://pachets13.github.io'`. Update both if the repo or username changes.

---

## How to Run Locally

```bash
cd ~/Desktop/PachetDigital-Partner/concept-sites/fire-protection-demo
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

### ⚠️ Pushing to `main` does NOT update the live site

The live site is served from the `gh-pages` branch. Publishing is a deliberate
second step:

```bash
git push origin main     # source only — the live site does not change
npm run deploy           # build + publish (scripts/deploy.sh)
```

This replaced a GitHub Actions workflow on 2026-08-06. All three published
concept sites now deploy the same way, so there is no per-repo model to
remember. The change was forced by an Actions major outage during which
neither Actions-based site could ship, while the branch-based one deployed
fine.

`dist/.nojekyll` is load-bearing — branch-based Pages runs Jekyll over the
branch and hard-fails without it. It comes from `public/.nojekyll`; the deploy
script refuses to run if it is missing.

Pages takes 1–2 minutes. Verify the **live bundle hash**, not the command's
exit code.
