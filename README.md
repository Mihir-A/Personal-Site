# Mihir's Portfolio

Personal site built with Next.js and Tailwind CSS to showcase projects, skills,
and contact info.

## Highlights
- Responsive, single-page layout with animated hero and project cards
- Light/dark mode toggle with CSS variable theming
- Content driven from `src/app/page.tsx` for quick edits

## Tech Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Local Development
1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open `http://localhost:3000`

## Scripts
- `npm run dev` - start the dev server (Turbopack)
- `npm run build` - production build
- `npm run start` - run the production server
- `npm run lint` - lint the codebase

## Customize
- Update content and sections in `src/app/page.tsx`
- Adjust theme colors and animations in `src/app/globals.css`
- Edit metadata like the tab title in `src/app/layout.tsx`
- Replace images in `public/` and update their references

## Deployment
- Build and run locally: `npm run build` then `npm run start`
- Deploy on Vercel or any Node-compatible host
