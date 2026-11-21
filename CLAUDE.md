# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static site for **ARN – Associação Educacional e Cultural Risale-i Nur**, a non-profit in
São Paulo (Ipiranga), Brazil — `risaleinur.org.br`. All copy is Brazilian Portuguese
(`pt-BR`). Built with **Astro 6**, TypeScript strict, no UI framework, plain CSS, deploys
to Netlify. Same conventions as `../mesquita-jp-site`.

The project brief (goal, verified facts, page requirements) is in `brand.md`.
The design source is the claude.ai Design canvas "ARN – Risale-i Nur"
(https://claude.ai/artifact/QnuyKXpR5cPHfWke2dGDTk): page "1 · Marca" (logo, colours,
type, usage) and "2 · Website" (home + `/feira` mobile page). The canvas' logo and colours
are a reinterpretation and are **superseded**: the site now uses the original logo (see
Logos) and its colours. Layout and type still follow the canvas.

The site is in **template stage**: board names, documents, email and fair stand details
have not been supplied yet. Everything provisional is marked
`TODO` in `src/config.ts`.

## Commands

- `npm run dev` — `localhost:4321`
- `npm run build` — static build to `./dist/`
- `npm run preview`

Node ≥ 22.12. There are no tests and no linter. `npm run build` is the check, and it
type-checks the `.astro` frontmatter. `astro check` would need `@astrojs/check`, which is
not installed. Netlify builds with `npm run build` → `dist/`, and `netlify.toml` 301s
`www.` to the apex domain.

## Architecture

**All content lives in `src/config.ts`.** Components only read from it. Unconfirmed data is
an empty string / `null` / `[]`, never an example value — each block degrades on its own:
empty `galeria` → "em breve" note; `photo: null` → labelled placeholder (`Foto.astro`);
`documentos[].file: null` → that document is not listed; no board names → no Diretoria
line; empty `contact.street` / `email` / `mapsEmbed` → those lines/the map are omitted.

Adding photos: put files in `public/fotos/` and add `{ src, alt, width, height }` objects
(type `Photo`) to `hero.photo`, `sobre.photo`, `feira.photo` or `galeria`.
Documents: PDFs in `public/docs/`, set `file: '/docs/x.pdf'`.

**Hero** (`Hero.astro`): `hero.photo` full-bleed under a `--floresta` veil (text in white,
yellow eyebrow/button), then a "estante" card with covers from `livros`, picked by title
in `hero.estante.titulos` (middle one enlarged; empty list → no card). The card sits half
over the photo, half over white. The current photo is only 960px wide; replace it with a
≥1920px landscape shot when the association supplies one.

**Tokens** are in `BaseLayout.astro` `:root`, taken from the original logo: green
#2E9666, yellow #F2C066, navy #364570 (`--azul`).
`--verde` is for the symbol/fills only (3.7:1) — text, links and buttons on white use
`--verde-escuro` (#1E7A50, 5.3:1). Yellow is never text on white; yellow icons on light
use `--amarelo-texto`. Fonts: Montserrat (titles, menu, buttons, labels) + Inter (body).

**Faixa** (`Faixa.astro`) is the green·yellow·blue signature stripe: page top, under
section titles (`width="120px"`), card bottoms, footer.

**Institutional data** (CNPJ + Receita link, legal nature, founding date, status, and
diretoria/documentos when filled in) lives in `Footer.astro`. There is no separate
section for it, by the client's choice.

**Logos** in `public/`: `logo-horizontal.svg` (header), `logo-horizontal-escuro.svg`
(footer / dark bg), `logo-vertical.svg`, `simbolo.svg`, `favicon.svg`. There is no vector
original. These were vectorised (potrace) from a straight-on photo of the sign at the
headquarters, after perspective correction. The symbol was mirrored about its axis so it is
exactly symmetric. The colours were sampled from the photo and are approximate. The
vertical version matches the sign. The horizontal lockup (symbol + text block at equal
height) was composed from the same parts and does not exist on the sign. If the
association ever supplies the original file (AI/PDF/SVG), replace these. PNG icons and
`og-image.png` were generated from the SVGs with sharp. There's no script for this in the
repo. `sharp` is already in `node_modules` as an Astro dependency, so a one-off Node script
works.

**Book-fair banner** (`Header.astro`): rendered `hidden`, shown by a small script only
between `feira.showFrom` and `feira.end`, compared in `America/Sao_Paulo` in the browser
(a static build would freeze the decision on deploy day). `/feira` is the QR-code target
and stays online after the fair because printed QR codes keep pointing at it. `/feira` is a
standalone mobile page: it does not use `Header`/`Footer`, and it has its own logo, footer
(CNPJ + address) and styles inside `feira.astro`. After `feira.end` its own script hides
`[data-durante]` ("Na feira" block, fair title) and shows `[data-depois]` (`feira.depois`
copy). Without JS it shows the fair version. SEO/OG meta, canonical URL and fonts come from
`BaseLayout` props (`title`, `description`).

Sections alternate `--papel` / white backgrounds; keep the order in `index.astro`. Section
ids (`#sobre`, `#atividades`, `#horarios`, `#galeria`, `#livros`, `#contato`) are linked from the header
as `/#id` so they work from `/feira` too.

**Prayer times** (`Horarios.astro`, data in `oracao` in `config.ts`) are fetched in the
browser from the public Aladhan API, same as `../mesquita-jp-site` `PrayerTimes.astro`:
the day, the highlight and the "próxima oração" countdown use `America/Sao_Paulo`, one day
is cached in `localStorage` (`pt_<dd-mm-yyyy>_<method>`), and a failed fetch keeps the
`--:--` placeholders and shows `#pt-error`. ARN is not a mosque: no iqamah, and the copy
says these are city times, not opening hours. The section is a dark `--floresta` band so
it can sit between Atividades and Galeria without breaking the papel/white alternation.
Arabic prayer names use Amiri, loaded in `BaseLayout` with a `text=` subset of just those
glyphs. If you add Arabic text, extend that subset.

Mobile nav is CSS-only (hidden checkbox `#nav-toggle`). Icons are inline SVG in
`Icon.astro` (add to the `paths` map).

## Conventions

- pt-BR copy. Religious content sober and accurate — don't invent quotes, facts,
  activities or people; ask.
- Component styles stay in the component; only tokens/reset/utilities
  (`.container`, `.section`, `.btn`, `.eyebrow`, `.card`, `.empty-note`) in `BaseLayout`.
