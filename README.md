# The Basis Point

Website for [The Basis Point](https://thebasispoint.in) — an independent research practice
publishing free primary-source research on Indian markets, and taking on commissioned work
to the same standard.

Static HTML. No build step, no dependencies, no framework.

## Running it locally

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

Test over HTTP rather than opening the files directly — the `reports/` subdirectory and the
root-absolute paths in `404.html` only resolve correctly through a server.

## Structure

```
index.html            Home — latest issue, capabilities, services, subscribe
about.html            Who runs it, what independence means here
methodology.html      How a report is built: sources, reconciliation, assumptions
services.html         Commissioned work, engagement process, terms
reports/
  index.html          Archive of published issues
  *.pdf               The issues themselves
404.html
assets/
  css/site.css        All styling. Design tokens at the top.
  js/site.js          Mobile nav toggle — the only JavaScript on the site.
  img/                Favicon, hero, Open Graph card
robots.txt
sitemap.xml
```

## Publishing a new issue

1. Add the PDF to `reports/`.
2. Copy one `<article class="pub">` block in `reports/index.html`; update the metadata,
   summary, stats and PDF path. Newest first.
3. Update the matching block in `index.html` — the home page shows only the latest issue.
4. Add a `<url>` entry to `sitemap.xml`.

## Conventions worth knowing

- **Design tokens** live in `:root` at the top of `assets/css/site.css`. Change colours there,
  not inline.
- **`--amber` (`#FFA200`) is for fills only.** It fails WCAG AA as text on light backgrounds
  (2.0:1). Use `--amber-text` for amber-coloured text.
- **Nav and footer are duplicated** across all six pages, with three different relative-path
  forms. See [PARTIALS.md](PARTIALS.md) before editing either.
- **Accessibility** is checked, not assumed: all text pairs clear 4.5:1, every interactive
  element has a visible focus ring, and the site works with JavaScript disabled.

## Before deploying

See [TODO.md](TODO.md) for the outstanding placeholders.

## Deploying

Any static host — Cloudflare Pages, Netlify, GitHub Pages. Point it at the repository root;
there is nothing to build.

---

© The Basis Point. Research content is not investment advice.
