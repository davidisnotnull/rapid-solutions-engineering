# Portal application

## Purpose

Static Astro pages for the Rapid Solutions Engineering portal.

## Ownership

`src/` owns layouts, components, styles, client scripts, route pages, and in-repo content data.

## Local Contracts

- Pages are static. Do not add an API, database, or SSR adapter
- `src/styles/global.scss` sets `$lbh-global-styles: true`, sets `$lbh-asset-path` to `/assets` (the variable name in lbh-frontend 4.1.1), imports `lbh-frontend/lbh/all`, then a small layout layer
- `scripts/copy-lbh-assets.mjs` copies package assets into `public/assets` before dev and build. `public/assets` is generated and gitignored
- Header markup uses `lbh-header`. lbh-frontend 4.1.1 paints that bar black with green rules. Do not recolour it to imitate the wireframe
- Service title, the search field, and the horizontal nav are a layout exception on that header. Navigation is a real link list, works without JavaScript, and wraps. Search is a GET form to `/services` with the label “Search this site”
- `src/scripts/lbh.ts` initialises the lbh button module for link buttons. Do not call `initAll`: that entry pulls the React dialog
- Footer markup uses `lbh-footer`. Version 4.1.1 does not ship footer CSS, so the layout layer only places the logo, legal links, and tagline
- Footer hrefs must be verified `hackney.gov.uk` URLs. Cookies has no href until an official cookies URL is confirmed
- `src/data/work.example.json` records must keep `example: true`. The home page must show the example notice. View project links go to `/our-work` only
- `/services`, `/how-it-works`, `/support`, `/our-work`, and `/about` stay honest shells until their own page tasks. Do not implement those wireframes here
- One `h1` per page. The header logo link is not an `h1`

## Work Guidance

- Keep Hackney colours on the design-system values: green `#00664f`, links `#025ea6`, focus `#ffc845`, text `#0b0c0c`, panel `#e7eaec`, border `#bfc1c3`
- Spacing in the layout layer is 4, 8, 16, and 24
- Reset lbh sibling spacing (`* + *`) on horizontal rows: header, nav, hero, benefit panel, work grid, and footer. Leave it in place for stacked body copy

## Verification

- `npm run check`
- `npm run lint`
- `npm test`
- `npm run build`
- `docs/qa-checklist.md` for the home slice

## Child DOX Index

None.
