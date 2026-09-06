# Hello Atlas (hi)

A small, interactive field guide of greetings from around the world — a React + TypeScript single-page app with quizzes and visual components for exploring greetings.

Live demo: https://hcshahriar.github.io/hi

> Note: the live demo link is a placeholder. Replace it with your deployed site (Vercel / Netlify / GitHub Pages) when available.

## Features

- Browse 30+ curated greetings with contextual notes and time zones
- Interactive “Hello Wall”, quizzes and visualizations
- Smooth UI with Framer Motion animations and TailwindCSS
- Optional Supabase integration (client included)

## Tech stack

- React 18 + TypeScript (Vite)
- TailwindCSS, Framer Motion, @dnd-kit
- Data: `src/data/greetings.ts`

## Quick start

1. Clone the repo

   git clone https://github.com/hcshahriar/hi.git
   cd hi

2. Install dependencies

   npm install

3. Run development server

   npm run dev

4. Build for production

   npm run build

5. Typecheck

   npm run typecheck

Notes:
- Vite dev server is configured to run on port 3000 (see `vite.config.js`).
- TypeScript is strict and `noEmit` is enabled in `tsconfig.json`.

## Project structure

- `src/`
  - `main.tsx` — app bootstrap
  - `App.tsx` — routes and main layout
  - `components/` — UI components (GreetingIndex, HelloWall, Quiz, etc.)
  - `data/greetings.ts` — greetings content dataset
  - `index.css` — global styles (Tailwind)

## Configuration & environment

- If you enable Supabase features, set the following environment variables before running:
  - `VITE_SUPABASE_URL` — your Supabase URL
  - `VITE_SUPABASE_ANON_KEY` — your Supabase anon key

(Using the `VITE_` prefix makes these values available to the client when using Vite.)

## Contributing

Contributions welcome — open issues for bugs or feature requests and submit pull requests for fixes. Please include tests or a clear manual test plan for UI changes.

## License

Add a license (e.g. MIT) or keep it private. If you want, I can add an MIT license file for you.

## Contact

Maintainer: hcshahriar — https://github.com/hcshahriar
