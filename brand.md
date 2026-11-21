# ARN – risaleinur.org.br

## What this is
Institutional website for **ARN – Associação Educacional e Cultural Risale-i Nur**, a
registered non-profit association in São Paulo. Built with **Astro** (static output).
All site copy is in **Portuguese (pt-BR)**.

## Goal
ARN plans to exhibit at the **Bienal do Livro Rio 2027 (3–12 Sep 2027)**. The site
must show visitors (and the fair's organizers) that ARN is a **real, registered,
active association**: who they are, what they do, where they are, how to reach them.
Trust comes from facts, real photos and clear contact info, not marketing copy.
Tone: warm, serious, education/reading/culture first.

## Verified facts
- Razão social: Associação Educacional e Cultural Risale-i Nur (short: ARN)
- CNPJ: 44.386.978/0001-09 · Situação: Ativa · Natureza jurídica: Associação Privada
- Founded: 21/10/2021
- Address: Rua da Imprensa, nº 373 – Vila São José (Ipiranga), São Paulo – SP, CEP 04265-000, Brasil
- WhatsApp: (11) 94185-5590 → https://wa.me/5511941855590
- Instagram: @livrosagradoalcorao (verify exact handle)
- E-mail: TBD (contato@risaleinur.org.br is a placeholder)
- Open: Sundays, 10h–18h30 (Programa de Domingo)

## Pages
1. `/` – single-page home, sections in order:
   - Header (logo + anchor nav + "Contato" button)
   - Hero: "Associação sem fins lucrativos", headline, 2 CTAs, line "Desde 2021 · São Paulo – SP · Domingos 10h–18h30", photo
   - Quem somos (short text + facade photo)
   - Atividades: 4 cards (Aulas de Risale-i Nur, Aulas para crianças, Convivência, Esporte e lazer) + "Programa de Domingo" schedule
   - Galeria (6–8 real photos)
   - Onde estamos + contato (address, hours, WhatsApp/Instagram/e-mail, Google Maps embed)
   - Footer with address + contacts and the institutional data (CNPJ + Receita Federal link, founding date, legal nature, status; board/documents OPTIONAL, render only if data exists) — no separate section
2. `/feira` – mobile-first landing page for the QR code at the fair stand:
   welcome message, big WhatsApp button, Instagram, link to home, fair info, short institutional card.
   Must stay online after the fair (printed QR codes), content switches to a generic welcome.

## Fair banner
Thin dark-green strip above the header linking to `/feira`
("Estaremos na Bienal do Livro Rio · …").
<!-- TODO: the original text was cut off here. Current implementation: shown only
     between feira.showFrom and feira.end (America/Sao_Paulo, checked in the browser). -->

## Design source
claude.ai Design canvas "ARN – Risale-i Nur":
https://claude.ai/artifact/QnuyKXpR5cPHfWke2dGDTk
(page "1 · Marca": logo, colours, type, usage; page "2 · Website": home + `/feira`).
The canvas logo was a reinterpretation; the site uses the original logo (vectorised from the
association's PNG) and its colours: green #06A757, yellow #FEC820, navy #04287C.
