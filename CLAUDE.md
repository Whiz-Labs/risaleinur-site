# CLAUDE.md

## Project

Static site for **ARN – Associação Educacional e Cultural Risale-i Nur**, a non-profit in
São Paulo (Ipiranga), Brazil — `risaleinur.org.br`. All copy is Brazilian Portuguese
(`pt-BR`). Built with **Astro 6**, TypeScript strict, no UI framework, plain CSS, deploys
to Netlify. Same conventions as `../mesquita-jp-site`.

The design source is the claude.ai Design canvas "ARN – Risale-i Nur"
(https://claude.ai/artifact/QnuyKXpR5cPHfWke2dGDTk): page "1 · Marca" (logo, colours,
type, usage) and "2 · Website" (home + `/feira` mobile page).

The site is in **template stage**: photos, street address, board names, documents, email,
map and fair stand details have not been supplied yet. Everything provisional is marked
`TODO` in `src/config.ts`.

## Commands

- `npm run dev` — `localhost:4321`
- `npm run build` — static build to `./dist/`
- `npm run preview`

## Architecture

**All content lives in `src/config.ts`.** Components only read from it. Unconfirmed data is
an empty string / `null` / `[]`, never an example value — each block degrades on its own:
empty `galeria` → "em breve" note; `photo: null` → labelled placeholder (`Foto.astro`);
`documentos[].file: null` → "em breve" tag; no board names → Diretoria card hidden;
empty `contact.street` / `email` / `mapsEmbed` → those lines/the map are omitted.

Adding photos: put files in `public/fotos/` and add `{ src, alt, width, height }` objects
(type `Photo`) to `hero.photo`, `sobre.photo`, `feira.photo` or `galeria`.
Documents: PDFs in `public/docs/`, set `file: '/docs/x.pdf'`.

**Tokens** are in `BaseLayout.astro` `:root`, taken from the canvas' Cores board.
`--verde` (#14A84B) is for the symbol/fills only — text, links and buttons on white use
`--verde-escuro` (#0B7A38, 5.4:1). Yellow is never text on white; yellow icons on light
use `--amarelo-texto`. Fonts: Montserrat (titles, menu, buttons, labels) + Inter (body).

**Faixa** (`Faixa.astro`) is the green·yellow·blue signature stripe: page top, under
section titles (`width="120px"`), card bottoms, footer.

**Logos** in `public/`: `logo-horizontal.svg` (header), `logo-horizontal-escuro.svg`
(footer / dark bg), `logo-vertical.svg`, `simbolo.svg`, `favicon.svg`. PNG icons and
`og-image.png` were generated from those SVGs with sharp — regenerate if the logo changes.

**Book-fair banner** (`Header.astro`): rendered `hidden`, shown by a small script only
between `feira.showFrom` and `feira.end`, compared in `America/Sao_Paulo` in the browser
(a static build would freeze the decision on deploy day). `/feira` is the QR-code target
and stays online after the fair because printed QR codes keep pointing at it.

Sections alternate `--papel` / white backgrounds; keep the order in `index.astro`. Section
ids (`#sobre`, `#atividades`, `#dados`, `#galeria`, `#contato`) are linked from the header
as `/#id` so they work from `/feira` too.

Mobile nav is CSS-only (hidden checkbox `#nav-toggle`). Icons are inline SVG in
`Icon.astro` (add to the `paths` map).

## Conventions

- pt-BR copy. Religious content sober and accurate — don't invent quotes, facts,
  activities or people; ask.
- Component styles stay in the component; only tokens/reset/utilities
  (`.container`, `.section`, `.btn`, `.eyebrow`, `.card`, `.empty-note`) in `BaseLayout`.
