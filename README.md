# Cal Soci — Web concept

Redesign proposal for **Cal Soci**, the Menorcan tavern in Sant Antoni, Barcelona.
A static, mobile-first site intended as a visual pitch for the owners.

- **Name:** Cal Soci · Taverna menorquina
- **Owners:** Lucho (Luxo) and Miqui (Miquel) — both from Ciutadella, Menorca
- **Address:** C. de Viladomat 27, 08015 Barcelona (Sant Antoni · Metro Poble Sec L3)
- **Phone:** 930 29 89 12
- **Instagram:** [@cal.soci](https://www.instagram.com/cal.soci/)
- **Hours:** Tue–Thu 19:00–02:30 · Fri–Sat 19:00–03:00 · closed Sun & Mon

---

## Run locally

No build step. Three options:

```bash
# Option 1 — Python (built-in on macOS/Linux)
python3 -m http.server 8080

# Option 2 — Node
npx serve .

# Option 3 — just open index.html in a browser
open index.html
```

For the best demo, **preview on a real phone**. Or use the public preview link below.

### Preview without local setup

The site can be opened straight from the GitHub branch via raw.githack:

- Home: https://raw.githack.com/filippo1999dinosauro/filippo1/claude/cal-soci-website-design-2AYJX/index.html
- Carta: https://raw.githack.com/filippo1999dinosauro/filippo1/claude/cal-soci-website-design-2AYJX/menu.html

---

## Pages

- `index.html` — Home (hero, identity, signature dishes, "la nit" experience moments, gallery, contact/reservation)
- `menu.html` — Carta (sticky category tabs, seven sections of real Menorcan dishes)
- `assets/css/styles.css` — full design system
- `assets/js/main.js` — nav scroll-state, mobile drawer, scroll-reveal, menu tab scroll-spy

---

## Design direction

- **Palette** — warm paper, cream, deep ink, terracotta accent. Aligns with the "fishermen's pub of Ciutadella" aesthetic Cal Soci was inspired by — wood, candles, no chrome.
- **Typography** — *Fraunces* (editorial serif) + *Inter* (clean sans), Google Fonts.
- **Layout** — generous spacing, asymmetric grid, ruled dividers, tabular prices.
- **Voice** — Spanish primary, with natural Catalan / Menorcan terms (*trinxat amb cuixot*, *mandonguilles amb sípia*, *pomada*, *La nit*) — exactly the way the owners speak.
- **Motion** — subtle: nav shrink, fade-up reveals, hover image-pan. Honors `prefers-reduced-motion`.
- **Mobile-first** — designed for a phone demo; tablet (≥ 680px) and desktop (≥ 980px) expand from there.

---

## What is real vs. what's still placeholder

The site was rewritten using **real research** from public press coverage of Cal Soci (Time Out Barcelona, Menorca Info, Local Love Barcelona, Sluurpy, Tripadvisor). Owners' Instagram is restricted from automated fetch, so the visual identity could not be pulled directly.

### ✅ Real (from public sources)

- **Identity & positioning** — "the (only) Menorcan tavern in Barcelona", "more than a club, more than a bar", "a parenthesis from the rush".
- **Founders' story** — Lucho and Miqui from Ciutadella, opened ~2022 post-COVID, Miqui trained in 2-Michelin kitchens, Lucho came from El Balear.
- **Concept** — fishermen's-pub of Ciutadella, late-night cooking, inclusive menu, mission to spread Menorcan cuisine.
- **Hours** — Tue–Thu 19:00–02:30, Fri–Sat 19:00–03:00, closed Sun & Mon.
- **Address, phone, metro stop, Instagram handle.**
- **Signature dishes** named on the menu page — `bacallà amb sobrassada i mel`, `mandonguilles amb sípia`, `trinxat amb cuixot`, `pilotes amb tomàquet`, `costelles laquades`, `meloso de ternera`, `musclos amb mantega i sàlvia`, `formatges de Menorca`, `embotits de l'illa` (cuixot, sobrasada, camot), `tàperes silvestres`, `sobrassada amb bolets`, `arròs de cap de setmana`, `greixonera`, `licor de figues de moro`, `pomada`, `gin Xoriguer`. All confirmed from press.
- **Price point** — "good feast for ~25 €" (per Time Out), reflected in the carta's overall range.
- **Vermut on weekends only** — confirmed.

### ⚠️ Placeholder (must validate with owners before live)

- **Specific prices** in the carta. Press never publishes them. The numbers are realistic Sant Antoni 2024 ranges; treat as comps, not facts. Owner sends real prices and we drop them in.
- **Photography** — Unsplash placeholders, picked to match the actual category (cod with sobrasada, cuttlefish meatballs, cheese boards, pomada). Each has a typographic fallback if the URL ever breaks.
- **Reservation form** — UI demo only. Submit shows an inline confirmation message. Hook to email, WhatsApp (`wa.me/34...`) or a booking provider when ready.
- **A few small descriptive lines** for dishes (e.g. "crujientes por fuera, salsa brava de la casa") — written in keeping with the house voice but without a verbatim source.

### ❌ Nothing invented

No fake awards, no fake reviews, no fake press quotes, no fake chef pedigree (the press already confirmed it), no fake opening date, no fake history.

---

## What would still improve the site with more real materials

In order of impact:

1. **Real photography of Cal Soci.** A half-day shoot would replace every Unsplash placeholder. The brief, the design, and the press all describe the same thing — wood, low light, plates at the centre of a long table, late-night atmosphere, hands sharing pomada. Once those photos are in, the site goes from "very good demo" to "ready to publish."
2. **The actual carta and prices.** The dish names are right. The prices are placeholders. Drop in the printed PDF and it's done.
3. **A short paragraph from Lucho or Miqui in their own voice.** The "De Ciutadella a Sant Antoni" story is faithful to the press but second-hand. Two real quotes lift it.
4. **Logo / wordmark.** The site uses a typographic Cal Soci wordmark with a terracotta dot. If a real logo exists (Diana Mateo Design appears to be the brand designer), swap it into `.nav__brand` and `.footer__brand`.
5. **Reservation flow.** Pick the destination — email, WhatsApp number, or booking provider (Cover Manager, TheFork). Form markup stays; only the submit handler changes.
6. **Real Instagram embed or feed.** Currently the site links to `@cal.soci`; an embedded feed grid on the home would make the gallery section come alive without a photo shoot.

---

## Tech notes

- Pure HTML + CSS + one small JS file. No framework, no build, no `npm install`.
- Google Fonts CDN, safe to self-host later.
- Semantic HTML, `prefers-reduced-motion` respected, graceful image fallbacks.
- Tested structurally against mobile-first CSS Grid patterns. Works without JS (reveals visible, drawer not interactive, tabs still link).

## Sources used in research

- Time Out Barcelona — *La única taberna menorquina de Barcelona está en Sant Antoni*
- Menorca Info — *La taverna Cal Soci, el gust de Menorca a Barcelona de la mà de dos ciutadellencs*
- Local Love Barcelona — Cal Soci entry
- Time Out Barcelona — Cal Soci venue page
- Tripadvisor / OpenTable / Sluurpy — review aggregates and rating

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
