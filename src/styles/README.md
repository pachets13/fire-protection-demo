# src/styles/

## `global.css`

The single stylesheet for the whole site. Loaded in `BaseLayout.astro`.

**Contains:**
1. Tailwind directives (`@tailwind base/components/utilities`)
2. Google Fonts import (Inter, all weights)
3. Base styles (`html` scroll-behavior, `body` background and font)
4. Reusable component classes:

| Class | Description |
|---|---|
| `.btn-primary` | Orange filled CTA button |
| `.btn-outline` | White outline button |
| `.section-label` | Small orange uppercase label (used above section headings) |
| `.input-field` | Dark form input with focus state |

**To add a new global class:** add it inside `@layer components { }` so Tailwind can tree-shake it properly.

## Brand Color Reference

Defined in `tailwind.config.mjs` — use these tokens, not raw hex values in templates.

- `bg-brand-orange` / `text-brand-orange` — primary accent
- `bg-brand-dark` — darkest background
- `bg-brand-dark-2` — secondary background (alternating sections)
- `bg-brand-light` — light sections
