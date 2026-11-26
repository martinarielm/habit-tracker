# Working on Habit Tracker

## Project scope

This is a small habit-tracking prototype. Keep changes focused and easy to understand. Do not add dependencies, persistence, authentication, or new architecture unless the task calls for them.

The stack is Next.js 16.4.6 (App Router), React 19.3.0, TypeScript with strict mode, and Tailwind CSS 4.3.3. Check `package.json` for current versions and scripts. Use npm and keep `package-lock.json` in sync when changing dependencies.

## Project map and behavior

- `app/page.tsx` composes the home page and the Suspense loading fallback.
- `app/components/HabitList/HabitList.tsx` is an async Server Component that loads habits.
- `app/components/HabitList/CheckList.tsx` is a Client Component that owns checkbox state and the completion count.
- `app/components/TodayDate.tsx` displays the browser date using `es-AR` formatting.
- `app/lib/data.ts` contains mock data and a simulated one-second fetch delay.
- `app/types.ts` contains shared domain types.
- `app/layout.tsx` and `app/globals.css` define the root layout, fonts, and global styles.

The list currently loads the fixed date `2026-11-26`; the header shows today's date. Checkbox changes are not persisted. Treat these as current prototype limitations, and update the README when the behavior changes.

## Editing conventions

- Follow the surrounding TypeScript/TSX style: two-space indentation, double quotes, and semicolons.
- Reuse shared types and keep TypeScript strict; avoid `any`.
- Keep data loading in Server Components and interactive state in small Client Components.
- Use the existing `@/` alias for root-relative imports where appropriate.
- Preserve accessible checkbox labels and semantic HTML.
- Use the existing Tailwind/global CSS setup. Inspect `next.config.ts` before changing build configuration; it enables Cache Components, partial prefetching, and the Tailwind Turbopack loader.
- Do not edit generated output such as `.next/`, `next-env.d.ts`, or `node_modules/`.
- Preserve unrelated user changes and keep documentation aligned with implemented features.

## Documentation lookup

Use Context7 for library, framework, SDK, API, CLI, or cloud-service syntax, configuration, setup, migrations, and library-specific debugging, even for familiar tools. Start with `resolve-library-id`, choose the best relevant official match, then use `query-docs` for one concept at a time. Pass the installed version when supported. If the user supplies an exact library ID, resolution can be skipped.

Context7 is not needed for general programming concepts, business logic, or refactoring/review that does not depend on library APIs. For Next.js work, also read the relevant bundled guide under `node_modules/next/dist/docs/`; these local guides match the installed version. If documentation is unavailable, report that limitation rather than guessing about version-specific APIs.

## Validation

- For code changes, run `npm run lint` and `npm run build`; report failures and distinguish existing issues from regressions.
- For checklist changes, check that all three sample habits render, toggling updates the count, and reloading restores mock completion state.
- There is no automated test suite or test script. Do not claim tests passed or introduce a test framework for a small unrelated change.
- For documentation-only changes, verify commands and paths against the repository and run `git diff --check`; an application build is not required.
- Builds may need network access because the layout uses `next/font/google`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
