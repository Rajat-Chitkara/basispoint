# Before this site goes live

Seven things. Nothing else is blocking.

## 1. Substack URL — `SUBSTACK_URL_HERE`

Appears in 8 places. Find them all:

```
grep -rn "SUBSTACK_URL_HERE" .
```

- `index.html` — CTA band + footer
- `reports/index.html` — Issue 02 card, CTA band, footer
- `about.html`, `methodology.html`, `services.html` — footer

## 2. ~~The Issue 01 PDF~~ — DONE

In place at `reports/issue-01-financial-literacy-gap.pdf` (938 KB, 10 pages).
Linked from `index.html`, `reports/index.html`, and the footer of every page.
If you rename it, update all six references.

## 3. Hero image — `assets/img/hero.svg`

Currently a generated placeholder graphic. Replace with a real **600×600** image
(`assets/img/hero.jpg`) and change the `<img src>` in `index.html`. It is decorative
(`alt=""`), so if you have no good image, deleting the whole `.hero-circle` div is a
legitimate choice — the hero still reads well without it.

## 4. Canonical domain

Every page hard-codes `https://thebasispoint.in`. If the real domain differs, replace it in:

```
grep -rn "thebasispoint.in" . --include=*.html --include=*.xml --include=*.txt
```

Note this also matches the email address — only change the URLs.

## 5. About page — `[TODO]` blanks

`about.html` has four bracketed blanks under **Who runs it**: background, qualifications,
why you started, and the single-analyst note. **These must be filled or the paragraphs
deleted before publishing.** Nothing about your credentials was invented — the blanks are
literal and will render on the page as-is if you forget.

## 6. `<!-- DRAFT -->` blocks

Copy written to match your voice, but not verified by you:

- `about.html` — the **Who runs it** section
- `services.html` — the **Terms** list (fixed fees, confidentiality, capacity)

Confirm the commercial terms describe how you actually intend to work.

## 7. OG cover — optional

`assets/img/og-cover.png` is generated and on-brand. Replace if you want a designed one.
Must stay **1200×630 PNG or JPG** — SVG does not work as a social preview image.

---

# Deploying

Any static host. No build step, no dependencies.

**Cloudflare Pages / Netlify** — connect the folder or drag it in. Both serve `404.html`
automatically and `reports/index.html` at `/reports/`.

Locally, always test over HTTP, not by double-clicking the file:

```
python -m http.server 8000
```

The `reports/` subdirectory and root-absolute paths in `404.html` only resolve correctly
over a server.

---

# Maintaining it

There is no build step, which means **nav and footer are duplicated across all six HTML
files**. Changing a nav link means six edits. This is deliberate — worth it until the site
outgrows it. See `PARTIALS.md`.

**Publishing Issue 02:** copy one `<article class="pub">` block in `reports/index.html`,
change the metadata, stats and PDF path, add the PDF, and update `sitemap.xml`.
The homepage shows only the latest issue, so update that block too.
