# Pure Insights — Luxury Interior Design Website

An ultra-premium, single-page marketing site for **Pure Insights — Interior
Designing & Architecture**. White base with gold & bronze accents, editorial
serif/sans typography, and subtle scroll-driven animations.

## Tech
- **Vite + React + TypeScript** — fast, static output for Hostinger
- **Tailwind CSS** — the luxury design system
- **Framer Motion** — subtle reveal, parallax & marquee animations
- **Lucide** — line icons

## Commands
```bash
npm install     # install dependencies
npm run dev     # local dev server → http://localhost:5173
npm run build   # production build → dist/
npm run preview # preview the production build
```

## Adding your photos
Drop real images into **`public/images/`** using the filenames listed in
[`public/images/README.md`](public/images/README.md). Missing images keep an
elegant gold placeholder automatically — nothing breaks.

## Editing content
All text (services, team, projects, testimonials, contact, goals) lives in one
file: [`src/data/site.ts`](src/data/site.ts). Edit there — no need to touch the
components.

## Structure
```
src/
  data/site.ts        ← all copy & contact details
  components/         ← Navbar, Reveal, Figure, ui, Chrome
  sections/           ← Hero, About, Vision, Services, Process, Founder,
                         Team, Portfolio, Projects, Clients, Testimonials,
                         Goals, Contact, Footer
  App.tsx             ← assembles the page
```

## Deploy
See [`DEPLOYMENT.md`](DEPLOYMENT.md) — build, then upload the contents of
`dist/` to Hostinger's `public_html`.
