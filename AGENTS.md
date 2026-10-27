# dashboard-stores

A store of dashboard widgets: each widget has a config, a display component and an editor, assembled on a grid.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS with shadcn-style primitives in `src/components/ui/`
- npm, `package-lock.json` is the only lockfile

`package.json` has no `name` field. That is a known gap, not a signal that this is a monorepo.

## Commands

| what | command |
|---|---|
| install | `npm ci` |
| dev | `npm run dev` |
| build | `npm run build` |
| typecheck | `npm run typecheck` |
| env check | `npm run env:check` |

There is no lint script and no test script. Do not write a command that assumes they exist.

## Layout

- `src/app/page.tsx` — redirects to `/dashboard`
- `src/app/dashboard/` — the grid surface
- `src/components/dashboard/` — `DashboardLayout`, `WidgetGrid`
- `src/widgets/` — one file per widget; a widget exports its config, display and editor
- `src/components/widget-editor/` — the add/edit flow
- `src/lib/hooks/`, `src/lib/context/` — state and persistence

## Env

Copy `.env.example` to `.env.local`. `npm run env:check` fails when the lists diverge.
`NEXT_PUBLIC_TEMPO` is read by `src/components/tempo-init.tsx`.

## Design direction

`DESIGN.md` is the source of truth for visual work.

## Guardrails

- Every interactive element has a real behaviour or it is removed. No `href="#"`, no nav item without a destination.
- No invented content. A widget with no configured endpoint renders an empty state naming what is missing. It must never print `Connected` beside `api.example.com`, and never display a fabricated record count or sync time.
- Every widget has three states: loading, empty, error.
- The signed-in user comes from the session. A hardcoded `shadcn` / `m@example.com` avatar is a bug.
- Never delete or overwrite without an explicit instruction from Rahman.
- Secrets never enter the repo.

## Verify a change

`npm run build && npm run typecheck && npm run env:check`
