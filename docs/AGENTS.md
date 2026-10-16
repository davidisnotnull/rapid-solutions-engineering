# Project docs

## Purpose

Hold the working sitemap draft and the manual QA checklist for the current portal slice.

## Ownership

`docs/` owns `sitemap.md` and `qa-checklist.md`. Application behaviour stays in `src/`.

## Local Contracts

- `sitemap.md` lists the six routes the app actually serves. It is input to the information-architecture task. It is not content approval, staff terminology review, or a signed content inventory
- `qa-checklist.md` covers keyboard, focus, responsive layout, and the example-data notice on `/`. Leave catalogue, Halo, and dashboard cases out until those surfaces exist
- When a route is added or removed, update `sitemap.md` in the same change

## Work Guidance

## Verification

`npm test` checks that `sitemap.md` still names the six routes.

## Child DOX Index

None.
