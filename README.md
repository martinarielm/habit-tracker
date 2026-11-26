# Habit Tracker

A simple habit-tracking prototype built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Current state

- Shows three sample habits with checkboxes and a completed-habits count.
- Displays the browser's current date in Argentine Spanish (`es-AR`).
- Loads mock habit data with a simulated one-second delay and a loading message.
- Checkbox changes live in React state and reset when the page reloads.

The habit list currently uses the fixed demo date `2026-11-26`, independently of the date shown in the header. There is no database, authentication, or habit creation/editing yet.

## Run locally

Requires Node.js 20.9 or later and npm. No environment variables or external services are required.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build after building |

There is no automated test suite configured. The layout uses Google fonts through `next/font/google`, so building may require network access to download them.

## Main files

- `app/page.tsx`: home page and loading boundary.
- `app/components/HabitList/`: server-side habit loading and interactive checklist.
- `app/components/TodayDate.tsx`: browser date display.
- `app/lib/data.ts`: sample habits, completions, and mock data loader.
- `app/types.ts`: shared habit types.
- `app/globals.css`: global styles and Tailwind setup.
