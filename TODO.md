# Launch checklist

All content placeholders are cleared. Two infrastructure items remain.

## 1. Point the domain and set up the mailbox

Every page hard-codes `https://thebasispoint.in` in its canonical URL, Open Graph tags,
`robots.txt` and `sitemap.xml`. Those are correct only once the domain points at the
deployment.

`rajat@thebasispoint.in` is the only contact route on the site — nav, footer, the services
enquiry link, and the corrections link on the methodology page. **It must be receiving mail
before launch**, or every enquiry bounces silently.

If the domain changes, update it everywhere:

```
grep -rn "thebasispoint.in" . --include=*.html --include=*.xml --include=*.txt
```

## 2. Hero image — interim

`assets/img/hero.png` is Figure 4 from Issue 01 (effective IEA rate vs passive share),
cropped square from the PDF. It's real work rather than stock, so it can ship as-is.

When you have the image you want: drop it in at 600×600 and point the one `<img src>` in
`index.html` at it. It is decorative (`alt=""`), so no alt text is needed.

Regenerating the current crop, if ever needed: extract page 8's embedded image from the
report PDF, crop to `(205, 98, 900, 500)`, pad to square on `#FDFDFD`, resize to 600×600.
Tighter crops pull in clipped axis labels — the surrounding whitespace is deliberate.

---

# Worth knowing

**Substack link** — all 11 subscribe links point to `https://substack.com/@rajat426302`,
which is your **profile** page rather than a publication. It works, but if you create a
named publication later, update it in one pass:

```
grep -rl "substack.com/@rajat426302" --include=*.html . | xargs sed -i 's|OLD|NEW|g'
```

**Corrections go to sales@** — the methodology page invites factual corrections at the same
address as commercial enquiries. Fine for now; worth splitting if volume ever justifies it.

---

# Deploying

Any static host. No build step, no dependencies.

**Cloudflare Pages / Netlify** — connect the repo, set build command to none and output
directory to `/`. Both serve `404.html` and `/reports/` correctly with no extra config.

Locally, always test over HTTP rather than opening files directly:

```
python -m http.server 8000
```

---

# Publishing Issue 02

1. Add the PDF to `reports/`.
2. Copy one `<article class="pub">` block in `reports/index.html`; update metadata, summary,
   stats and PDF path. Newest first.
3. Update the matching block in `index.html` — the home page shows only the latest issue.
4. Replace the "in progress" card if Issue 03 isn't started.
5. Add a `<url>` entry to `sitemap.xml`.

Nav and footer are duplicated across all six pages — see [PARTIALS.md](PARTIALS.md).
