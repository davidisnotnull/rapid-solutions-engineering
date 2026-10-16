# Rapid Solutions Engineering

Static portal for Hackney Rapid Solutions Engineering. It is an Astro site with TypeScript and Sass, styled with [lbh-frontend](https://design-system.hackney.gov.uk/developing/installing-from-npm/).

Hosting, authentication, and access are not decided. This repository does not deploy the site, does not set a GitHub Pages base path, and does not treat a private repository as an access control.

## Local development

Requires Node.js 24.

```sh
npm install
npm run dev
```

`npm run dev` copies lbh-frontend assets into `public/assets` and starts the dev server.

## Checks

```sh
npm run check
npm run lint
npm test
npm run build
```

CI runs those checks on pull requests. There is no deploy job.

## What is published in the app

`/` follows the revised homepage wireframe in `designs/01-home-hackney-m3.png`. The current-work cards are labelled example data, not live council work. The other five routes are shells that say the page is not published yet.

Homepage wording is the wireframe text. It is not approved public copy.

`docs/sitemap.md` is a working six-route draft for the information-architecture task. It is not a content inventory approval.
