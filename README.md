# Dashboard Stores

A widget dashboard shell in Next.js. It has one working route, `/dashboard`, which renders a sidebar, an empty widget grid and a developer panel for editing widget configuration. Everything it stores lives in the browser's localStorage. There is no backend, no account and no data source.

## Status

Read this before trusting any screen.

- `/dashboard` renders. The widget grid is empty because no widgets are stored.
- `/` redirects to `/dashboard`. It used to render an empty div.
- The sidebar lists only `/dashboard`. The History, Starred, Settings, Models, Documentation and Projects entries pointed at `#` and have been removed.
- The widget marketplace (`src/components/dashboard/WidgetMarketplace.tsx`) exists as a component but no route renders it.
- No test suite. `bun run build`, `bun run typecheck` and `bun run lint` are the checks.

## Stack

Read from `package.json`.

- Next.js 14.2.23 (App Router), React 18
- TypeScript 5 (`strict`), Tailwind CSS 3
- shadcn/ui on Radix primitives
- `next-themes` for theming. `react-dnd` for the (unused) drag layer. `react-hook-form`, `stripe`, `@supabase/*` and `tempo-devtools` are installed but not imported by anything in `src/`
- bun, with `bun.lock` as the only lockfile

## Run

```sh
bun install
cp .env.example .env.local   # optional; only NEXT_PUBLIC_TEMPO is read
bun run dev
```

Then open <http://localhost:3000/dashboard>. `/` redirects there.

Production:

```sh
bun run build
bun run start
```

## Scripts

| what | command |
|---|---|
| dev | `bun run dev` |
| build | `bun run build` |
| start | `bun run start` |
| typecheck | `bun run typecheck` |
| env check | `bun run env:check` |

There is no `lint` script (no ESLint config or dependency is installed) and no test script.

## Layout

- `src/app/`: `page.tsx` (redirect), `dashboard/page.tsx`, `layout.tsx`, `globals.css`
- `src/components/dashboard/`: `DashboardLayout`, `Sidebar`, `WidgetGrid`, `DevTools`, `WidgetMarketplace`, `WidgetSearch`
- `src/components/widget-editor/`: `WidgetEditor`, `WidgetTester`, `CodeEditor`
- `src/components/ui/`: shadcn/ui output, generated
- `src/lib/context/`: `DashboardContext`, `ThemeContext`
- `src/lib/hooks/`: `useLocalStorage`, `useWidgetConfig`, `useWidgetState`, `useWidgetStorage`
- `src/widgets/`: five widgets and the registry in `index.tsx`
- `scripts/env-check.mjs`: env name diff
- `docs/`: widget development guide and menu widget guide

## Env

One name is read by the code: `NEXT_PUBLIC_TEMPO`, in `src/components/tempo-init.tsx` and `next.config.js`. It switches on the Tempo devtools overlay and the SWC plugin. Leave it unset locally.

`bun run env:check` fails if the code reads a name `.env.example` does not declare.

## Design direction

`DESIGN.md` holds the palette with computed contrast ratios, the type scale and the ENERGY/RHYTHM/MOTION dials. Read it before any visual change.

## What is not built

- Widget persistence beyond this browser's localStorage.
- Any chart renderer. `AnalyticsWidget` says so rather than drawing a fake series.
- Any API connection. `DataDisplayWidget` shows what you configure and nothing by default.
- Authentication. There is no user, so the sidebar shows no profile.
- Any test.