# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Dev server (ng serve)
pnpm build            # Production build → dist/
pnpm start            # Run SSR server (node dist/.../server.mjs)
pnpm lint             # oxlint (JS/TS)
pnpm lint:fix         # oxlint with auto-fix
pnpm fmt              # oxfmt formatting
pnpm stylelint:fix    # CSS linting with auto-fix
```

Pre-commit hooks run `lint:fix`, `fmt`, and `stylelint:fix` automatically. Commits follow Angular conventional commits (enforced by commitlint).

## Architecture

Single-page Angular 21 landing page with SSR via Fastify (port 4000). No lazy loading — one route (`""`) renders the `Home` component which composes all sections in order.

```
src/app/
├── app.ts / app.routes.ts / app.config.ts   Root setup, SSR hydration, scroll restoration
├── kanbano/
│   ├── home.ts                              Composes all sections
│   ├── services/
│   │   ├── user-theme.service.ts            Light/dark theme, localStorage + prefers-color-scheme
│   │   └── theme-observer.service.ts        IntersectionObserver → updates theme per section on scroll
│   ├── directives/section-theme.directive.ts
│   ├── components/layout/                   header, footer, nav (desktop + mobile)
│   ├── components/utilities/               button, check-item, cta-actions
│   ├── hero-banner/                        anime.js timeline
│   ├── functionality/                      Most complex section — nested workspace/task/participants subsections, each with picture cards, SVG icons, and decorative arrows
│   ├── preview/
│   ├── pricing/
│   ├── testimonials/                       Swiper carousel
│   └── data-protection/
└── styles/
    ├── main.css                            @layer imports: reset, base, layout, components, modules, utilities
    ├── base/                               reset.css, colors.css (OKLch vars), typography.css, spacing.css
    └── layout/container.css
```

## Key Patterns

**Theming** — `UserThemeService` exposes a `theme()` signal. Components call `inject(UserThemeService)` and use `computed(() => themeService.theme() === 'dark')` to switch assets/classes. The `ThemeObserverService` updates the active theme as the user scrolls past sections.

**Functionality section** — Icon/arrow components use `display: contents` on `:host` and apply all positioning directly to the inner `svg`. Picture card components (`workspace-view`, `workspace-create`, `workspace-empty`, etc.) use `display: contents` on `:host` with a `<figure>` wrapper that carries positioning, `box-shadow`, and `position: relative` (serving as the containing block for absolutely-positioned sibling arrows).

**CSS component budget** — 4 kB warning / 8 kB error per component stylesheet. Keep styles lean.

**Component selector prefix** — `kanbano-lp-` for components, `kanbanoDirective` for directives.

## CSS Conventions

- CSS nesting with `& .child` — no BEM, no redundant resets (global reset already handles margins, box-sizing, etc.)
- Media queries: `@media (width >= Xem)` nested inside rules
- Colors: OKLch via `--kanbano-*` custom properties defined in `styles/base/colors.css`
- Z-index scale: `--kanbano-z-*` variables from `spacing.css` (overlay=10, header=1000, modal=9000)
- Theming via `[data-theme="light"]` / `[data-theme="dark"]` attribute on `<html>`

## TypeScript & Angular Standards

**TypeScript**

- Strict type checking — avoid `any`, use `unknown` when type is uncertain
- Prefer type inference when the type is obvious

**Angular**

- Standalone components only — do NOT set `standalone: true` (default in Angular v20+)
- Do NOT use `@HostBinding` / `@HostListener` — use the `host` object in `@Component` / `@Directive` instead
- Use `NgOptimizedImage` for all static images (does not work for inline base64)
- `ChangeDetectionStrategy.OnPush` on every component
- `input()` / `output()` functions instead of decorators
- `inject()` instead of constructor injection
- `computed()` for derived state — never `mutate()` on signals, use `update()` or `set()`
- Native control flow (`@if`, `@for`, `@switch`) — never `*ngIf` / `*ngFor` / `*ngSwitch`
- No `ngClass` → use `class` bindings; no `ngStyle` → use `style` bindings
- No arrow functions in templates
- Reactive forms over template-driven forms
- External templates/styles use paths relative to the `.ts` file

**Accessibility**

- Must pass all AXE checks and meet WCAG AA minimums (focus management, color contrast, ARIA attributes)
