# src/pages/

Astro's file-based router — every `.astro` file here becomes a page URL.

## Files

| File | URL | Purpose |
|---|---|---|
| `index.astro` | `/` | Home page — hero, value props, certifications, contact form |
| `about.astro` | `/about` | About — story, team photos, fleet |
| `services.astro` | `/services` | All 11 services + inspection frequency table |
| `contact.astro` | `/contact` | Contact info, decorative form, map placeholder |

## How to add a new page

Create a new `.astro` file here. Start it with:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Page Title">
  <!-- your content -->
</BaseLayout>
```

The Nav and Footer are added automatically by BaseLayout.

## Brand voice reminders

- **Tone:** Direct, confident, plain-spoken. No jargon, no fluff.
- **Headlines:** Bold, declarative. "We do what we say." Not "Our commitment to excellence."
- **Body copy:** Short paragraphs, max 2–3 sentences. This is a trades company — their clients want information, not marketing speak.
- **CTAs:** Always "Work With Us" or "Contact Us" — never "Get a Quote Today!" or other pushy language.
