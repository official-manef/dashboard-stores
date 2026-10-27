# Dashboard Stores — design direction

## What this is

A widget dashboard shell: a sidebar, a grid that will hold configurable widgets, and a developer panel for editing widget configuration. Everything it stores lives in this browser. There is no account, no backend and no data source.

## Direction

A workbench, not a product page. Grey ground, hairline borders, small caps for section labels, monospace only where a value is machine output (an endpoint, a JSON config, a storage key). Density is the point: the sidebar and the dev panel are meant to be readable side by side without either one shouting. The reference point is a browser devtools pane that someone laid out on purpose.

## Palette

| token | value | use |
|---|---|---|
| `--background` | `0 0% 100%` (`#ffffff`) | page ground, light |
| `--foreground` | `0 0% 3.9%` (`#0a0a0a`) | body text, 19.8:1 on `--background` |
| `--muted-foreground` | `0 0% 45.1%` (`#737373`) | secondary text, 4.74:1 on `--background` |
| `--primary` | `0 0% 9%` (`#171717`) | filled buttons; `#fafafa` on it is 17.18:1 |
| `--background` (dark) | `0 0% 3.9%` (`#0a0a0a`) | page ground, dark (the default on `/dashboard`) |
| `--foreground` (dark) | `0 0% 98%` (`#fafafa`) | body text, 18.97:1 on dark ground |
| `--muted-foreground` (dark) | `0 0% 63.9%` (`#a3a3a3`) | secondary text, 7.85:1 on dark ground |

`--muted-foreground` on `--muted` (`#737373` on `#f5f5f5`) is 4.35:1, so secondary text sits on the page ground, never on a muted panel.

Chart series colours come from `--chart-1` to `--chart-5`, which are shadcn defaults and are only referenced by the (unbuilt) chart renderer.

Every colour in the code comes from this table. A literal hex in a component is a bug.

## Type

- Display and body: Inter via `next/font/google`. It is the face the shadcn components were designed against; the dashboard is dense UI, not a brand surface, and a display face here would compete with the numbers.
- Mono: the platform stack via `font-mono`, used only for endpoint strings, JSON config and storage keys.
- Scale: `text-xl` 20px header title, `text-lg` 18px panel and card titles, `text-sm` 14px body and controls, `text-xs` 12px metadata and section labels. Nothing below 12px.

## Dial

```
ENERGY  1   /* quiet tool surface: no hero, no gradient, no illustration */
RHYTHM  2   /* sidebar + header + grid, one break where the dev panel floats */
MOTION  1   /* focus and hover only, plus the panel's open/close transition */
```

Per surface: `dashboard: ENERGY 1 / RHYTHM 2 / MOTION 1`.

## Motion

The sidebar width, the dev panel size and the Radix switch/accordion transitions. Nothing animates without a user action, so no reduced-motion guard is required today. If a widget ever gains an auto-refresh animation, it needs a `prefers-reduced-motion` guard in the same commit.

## Allowed

- A floating developer panel over the grid, because editing widget config is a second task done alongside reading widgets, not a page of its own.
- Monospace for machine values only.
- An honest empty state in place of a widget that has nothing to show.
- Sections of the sidebar that are absent rather than greyed out, when the route does not exist.

## Forbidden

- `href="#"`. A nav item either has a route or does not exist.
- A default endpoint, a default record count, a "last synced" string or a `Connected` label invented in a widget.
- An avatar or display name presented as the signed-in user when nobody is signed in.
- A legend over no chart.
- Fabricated social proof, statistics or compliance claims anywhere in the UI.
- Text below 12px.
- Em dash in shipped copy.

## Where it lives

`src/app/globals.css` defines the tokens under `@layer base`; `tailwind.config.ts` maps them to utility names. `src/components/ui/` is shadcn output, kept as generated.
