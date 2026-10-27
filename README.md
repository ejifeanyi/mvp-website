# MVP offer website

The landing page for the fixed-price MVP packages, built from the Figma design
("MVP Build Packages: Landing Page"). Next.js (App Router) and TypeScript. No CSS framework.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck
```

## Where things live

| What you want to change | File |
|---|---|
| Any wording, price, package feature, booking link | `src/content.ts` |
| Colors, fonts, spacing, layout | `src/app/globals.css` (design tokens at the top) |
| Page sections | `src/components/*.tsx` |
| Page title and description for search and sharing | `src/content.ts` (`site.title`, `site.description`) |

Colors match the Figma tokens: ink `#16204A`, cobalt `#3A57F5`, paper `#F5F7FB`,
mist `#DFE5F3`, signal `#19A974`, slate `#4A5578`. Fonts are Bricolage Grotesque (headlines) and
Instrument Sans (body), loaded from the npm packages `@fontsource-variable/*`, so no request is made to Google Fonts.

## Deploy

Push to GitHub and import the repo on Vercel. No environment variables are needed.

## Before you share it

- Check the prices and the "within 24 hours" promise in `src/content.ts`.
- Add a favicon and a share image (`public/`, and `openGraph.images` in `src/app/layout.tsx`).
- Add your case study page and link it from the proof section when it is ready.
# mvp-website
