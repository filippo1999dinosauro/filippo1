# Cal Soci — Web concept

Redesign proposal for **Cal Soci**, a neighborhood taberna in Sant Antoni, Barcelona.
A static, mobile-first site intended as a visual pitch for the owner.

- **Name:** Cal Soci
- **Address:** C. de Viladomat 27, 08015 Barcelona
- **Phone:** 930 29 89 12
- **Neighborhood:** Sant Antoni

---

## Run locally

No build step. Three equally good options — pick whichever is most convenient:

```bash
# Option 1 — Python (built-in on macOS/Linux)
python3 -m http.server 8080

# Option 2 — Node
npx serve .

# Option 3 — just open index.html in a browser
open index.html
```

Then visit `http://localhost:8080`.

Also works by double-clicking `index.html`. For the best demo feel, **preview on a real phone** — connect the phone to the same network and open the local IP.

---

## Pages

- `index.html` — Home (hero, identity, highlights, experience, gallery, contact/reservation)
- `menu.html` — Menu (sticky category tabs, seven sections)
- `assets/css/styles.css` — all styling
- `assets/js/main.js` — nav scroll-state, mobile drawer, scroll-reveal, menu-tab scroll spy

---

## Design direction

- **Palette** — warm paper, cream, deep ink, terracotta accent, muted olive.
  Taberna-inspired, not corporate, not luxury.
- **Typography** — *Fraunces* (editorial serif) + *Inter* (clean sans), both from Google Fonts.
- **Layout** — generous spacing, asymmetric grid, editorial headings, ruled dividers, tabular prices.
- **Motion** — subtle only: nav shrink on scroll, fade-up reveals, hover image-pan. Respects `prefers-reduced-motion`.
- **Mobile-first** — designed for a phone demo; tablet and desktop layouts expand from there.

---

## What came from real sources vs. what was inferred

No assets were provided in the repository, so the content is structured around verified facts only and clearly marked placeholders elsewhere.

**Directly sourced / verified**
- Name, address, phone, neighborhood (as given in the brief).

**Inferred from tone & positioning (placeholder copy)**
- Positioning lines, the "La casa" story, the four "Momentos" sections, and the hero tagline. Written in Spanish with light Catalan touches (natural for Sant Antoni); can be swapped for the owner's voice.
- Menu items and prices in `menu.html` are a **coherent placeholder selection** — typical Barcelona taberna dishes with a couple of Menorcan accents (formatge de Maó, sobrassada, caldereta, mel i mató) to reflect the brief's Menorcan influence. Prices are realistic neighborhood ranges, **not real**. A visible "muestra orientativa" note is shown at the top of the menu page, and the fact is repeated in code comments.
- Reservation form is a **UI demo** — it does not submit anywhere. Submitting shows a confirmation message only. Swap for a real endpoint (email, WhatsApp handoff, or a booking provider) when ready.
- Instagram link points to the Instagram root (`https://www.instagram.com/`) because the exact handle was not provided — replace with the real `@calsoci` URL once confirmed.
- Opening hours are **intentionally not listed** — the hero explicitly says "consulta horarios al teléfono" so no false hours are published.
- Images are Unsplash placeholders chosen for vibe (warm interiors, wine, tapas, brasa). Each one has a graceful fallback to a typographic placeholder if the URL ever breaks.

**Nothing invented**
- No awards, no fake history, no reviews, no chef names, no press quotes, no specific dates, no booking partner logos.

---

## What could be improved with real materials

In order of impact:

1. **Photography.** The single biggest lift. Commission a half-day shoot (interior, brasa, bravas, vermut, staff hands, a full table). Replace all Unsplash URLs — they are marked by section. The layout is built to let good photography carry the site.
2. **Real menu + current prices.** Drop in the real carta in `menu.html`; the section structure is already in place. Keep the "orientativo" note if the carta changes often.
3. **Owner's voice.** Two or three short paragraphs from the owner about why Cal Soci exists — to replace the inferred "La casa" copy and the hero tagline.
4. **Opening hours.** Once confirmed, add them to the contact block and the footer.
5. **Instagram handle.** Replace the placeholder link.
6. **Reservation flow.** Pick a destination for the form: an email address, a WhatsApp number (`wa.me`), or a booking provider (Cover Manager, TheFork, OpenTable). The form markup stays the same; only the submit handler changes.
7. **Menorcan story.** If the owners have a specific Menorcan root worth telling, a short "Raíces menorquinas" block would tie together the dishes that already exist on the carta.
8. **Logo / wordmark.** The site currently uses a typographic wordmark ("Cal Soci."). Swap in a real logo SVG in `.nav__brand` and the footer `.footer__brand` if one exists.

---

## Tech notes

- Pure HTML + CSS + one small JS file. No framework, no build, no npm install.
- Google Fonts loaded over the CDN. Safe to self-host later.
- Semantic HTML, skip-links not needed (simple one-page flow + one internal page).
- Responsive at `680px` (tablet) and `980px` (desktop), plus a tuning breakpoint at `1200px`.
- Tested structurally against mobile-first CSS Grid patterns. Degrades to no-JS (reveals show, drawer is not opened, tabs still link as anchors).

---

## File tree

```
.
├── index.html
├── menu.html
├── README.md
└── assets
    ├── css/styles.css
    └── js/main.js
```

That's it. Open, pitch, iterate.
