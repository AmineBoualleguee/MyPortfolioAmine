# Amine Bouallegue — Portfolio

Personal portfolio site. Software & Cloud Engineer — DevOps, AI/LLM systems, data engineering and full-stack development. Sousse, Tunisia.

**[amin.bouallegue2002@gmail.com](mailto:amin.bouallegue2002@gmail.com)** · [LinkedIn](https://linkedin.com/in/amine-bouallegue) · [GitHub](https://github.com/AmineBoualleguee)

## What this is

A single self-contained `index.html` — no framework, no build step, no dependencies. Everything ships in one file: styles, scripts, the portrait (embedded as a data URI) and the favicon (inline SVG). The only external requests are the two Google Fonts families.

To work on it, open `index.html` in a browser. To deploy it, serve the file.

```
index.html                 the whole site
Amine_Bouallegue_CV.pdf    CV, linked from the résumé panel
```

## Sections

- **Hero** — intro, contact channels, résumé panel
- **Focus** — four specializations (DevOps & Cloud, AI & LLM, Data Engineering, Full-Stack), each filters the project log
- **Projects** — 16 projects, filterable by specialization, each opening a full breakdown
- **Skills** — 11 groups covering the whole stack
- **Journey** — experience, education and certifications
- **Contact** — direct channels plus a form that composes a message in the visitor's own mail client

## Details

- Light and dark themes, following the visitor's system setting with a manual override that persists
- Responsive from 375px up
- Keyboard-navigable throughout: focus states, a skip link, modals with focus trapping and Escape to close
- Respects `prefers-reduced-motion`
- The résumé panel prints cleanly to PDF

## Deploying to GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / `root`. The site is then served at `https://amineboualleguee.github.io/MyPortfolioAmine/`.

## Design

Editorial treatment on a cream ground: Cormorant Garamond italic for the display name, Plus Jakarta Sans for everything else, with terracotta, electric blue and lime as accents. Projects are laid out as full-width editorial rows with typographic cover tiles keyed to their category.
