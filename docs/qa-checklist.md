# Manual QA checklist — portal foundation

Use this for the home slice only. Catalogue, Halo, and dashboard checks are out of scope until those pages exist.

Repeat on `/` at 375px, 768px, and 1280px.

- [ ] Tab order is skip link, Hackney home link, search field, search button, service nav, hero CTAs, work links, then footer links.
- [ ] Skip link moves focus to `#main-content`.
- [ ] Focused controls show a visible focus ring (yellow `#ffc845` on the service nav).
- [ ] Service nav is a link list and wraps instead of causing horizontal scroll.
- [ ] The page has one `h1`: “Practical digital solutions for Hackney Council”.
- [ ] Search is labelled “Search this site” and submits with GET to `/services`.
- [ ] Get support goes to `/support`. Explore our services goes to `/services`. View all our work and View project go to `/our-work`.
- [ ] The example notice is visible and says the project cards are illustrative examples, not live council work.
- [ ] No horizontal overflow at 375, 768, or 1280.
- [ ] Footer Cookies is visible text without a link until an official cookies URL is confirmed.
