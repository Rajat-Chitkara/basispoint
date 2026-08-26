# Duplicated markup

No build step means no includes. Three blocks are copy-pasted across pages.
When you change one, change all of them.

| Block | Files |
|---|---|
| `<nav class="nav">` | `index.html`, `about.html`, `methodology.html`, `services.html`, `reports/index.html`, `404.html` |
| `<footer>` | the same six (`404.html` uses a cut-down version) |
| `<noscript>` nav override in `<head>` | the same six |

## Path differences — the thing that breaks

The same nav has three different link forms depending on where the file sits:

- **Root pages** (`index`, `about`, `methodology`, `services`): `reports/`, `about.html`
- **`reports/index.html`**: `../about.html`, `./` for itself
- **`404.html`**: root-absolute — `/about.html`, `/reports/` — because it is served from
  arbitrary URLs

Copying a nav from a root page into `reports/index.html` without adding `../` is the
mistake to watch for. After any nav edit, load `/reports/` and click every link.

## Also per-page, do not blindly copy

- `<title>`, `<meta name="description">`, `<link rel="canonical">`, and the four `og:`/
  `twitter:` tags — all unique per page
- `aria-current="page"` on the nav link for the current page — exactly one per page
- Stylesheet, favicon and script `src`/`href` — same three path forms as above

## When this stops being worth it

Around 8–10 pages, or when you add per-report HTML pages. At that point move to Eleventy
or Astro with layout templates. The CSS in `assets/css/site.css` transfers unchanged;
only the HTML gets split into layouts and content.
