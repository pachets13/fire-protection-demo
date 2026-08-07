# src/data/

Static data files. No database — just JavaScript objects imported into pages.

## `services.js`

Exports two arrays:

### `services`
Array of 11 service objects. Each has:
- `id` — URL-safe identifier (for future anchor links or detail pages)
- `title` — display name
- `description` — 2–3 sentence description of the service
- `frequency` — inspection/testing schedule
- `standards` — NFPA or other regulatory reference
- `youtubeUrl` — currently `'#'` placeholder; replace with real YouTube links

**To add or edit a service:** update this array. The services page (`src/pages/services.astro`) maps over it automatically.

### `inspectionSchedule`
Array of `{ item, frequency }` objects displayed as the quick-reference table at the bottom of the Services page.

## Philosophy

Content that appears on the site lives in data files, not hardcoded in page templates. This makes it easy to update without touching layout code. If a client wants to add a new service, you only touch `services.js`.
