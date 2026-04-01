# Simple CV Pages Design

## Context

The previous CV variants implementation introduced a shared data file, shared renderer component, and a dynamic `/cv/[variant]` route. That approach is more abstract than this site needs. The goal now is to replace it with simple standalone page files that are easy to edit directly.

## Goals

- Keep the general CV at `/cv`.
- Add three standalone CV pages:
  - `/cv_backend`
  - `/cv_fullstack`
  - `/cv_pm`
- Remove the shared CV abstraction layer.
- Make each CV page independently editable, even if that means duplicated markup.
- Keep the implementation honest and simple.

## Non-Goals

- No dynamic CV routing.
- No `src/data/cv.ts`.
- No shared CV page renderer component.
- No attempt to deduplicate CV content through a custom abstraction.
- No UI switcher or redirect behavior between CV pages.

## Routing

The site should expose exactly these four CV routes:

- `/cv`
- `/cv_backend`
- `/cv_fullstack`
- `/cv_pm`

Each route should map to its own page file under `src/pages/`.

## File Structure

### Keep

- `src/pages/cv.astro`
- `src/components/cv/TimeLine.astro`

### Add

- `src/pages/cv_backend.astro`
- `src/pages/cv_fullstack.astro`
- `src/pages/cv_pm.astro`

### Remove

- `src/data/cv.ts`
- `src/components/cv/CVPage.astro`
- `src/pages/cv/[variant].astro`

## Content Strategy

### General CV

`/cv` should remain the broad engineering version and stay closest to the original CV page.

### Backend CV

`/cv_backend` should emphasize:

- Ruby on Rails backend systems
- PostgreSQL
- asynchronous processing
- integrations
- production reliability
- infrastructure-heavy execution

### Fullstack CV

`/cv_fullstack` should emphasize:

- end-to-end product delivery
- Rails + Hotwire
- user-facing flows
- internal tooling
- shipping business features quickly

### PM CV

`/cv_pm` should use the headline:

- `Technical Product Manager`

It should position the candidate truthfully as a technical product/operator profile, not as a fabricated pure PM career. The page should emphasize:

- product discovery
- roadmap ownership
- prioritization
- operational workflows
- cross-functional execution
- technical fluency in infrastructure-heavy products
- applicable domain credibility across Web3 infrastructure, validator operations, payments infrastructure, and compliance-heavy systems

## Implementation Approach

- Restore `src/pages/cv.astro` to a standalone page implementation instead of routing through shared data or shared rendering.
- Use the current general CV page as the base for the other three standalone pages.
- Duplicate markup intentionally where needed.
- Edit copy directly in each page file rather than introducing new abstractions.

## TimeLine Component

The current `src/components/cv/TimeLine.astro` should be reviewed during implementation.

- If the original pre-refactor version is needed for markup parity, restore it.
- If the current version is valid and works cleanly with standalone page markup, keep it.

The implementation should choose the simpler correct version rather than preserving change history for its own sake.

## Verification

Implementation is complete only when:

- `ASTRO_TELEMETRY_DISABLED=1 npm run build` passes.
- Generated output contains:
  - `dist/cv/index.html`
  - `dist/cv_backend/index.html`
  - `dist/cv_fullstack/index.html`
  - `dist/cv_pm/index.html`
- The removed abstraction files are no longer part of the implementation.
- Manual sanity check confirms each page has the intended positioning.

## Risks And Guardrails

### Risk: Reintroducing Abstraction

The easiest way to fail this redesign is to sneak the old abstraction back in through a “small helper” or shared renderer.

Guardrail:

- Keep all CV pages as direct standalone Astro pages.

### Risk: PM Page Becomes Fake

A generic PM rewrite would look dishonest and weaken the application.

Guardrail:

- Keep `/cv_pm` grounded in actual founder, infrastructure, and product execution work.

### Risk: Duplicate Layout Drift

Standalone pages can drift over time.

Guardrail:

- Accept that trade-off explicitly because simplicity and editability matter more here than perfect deduplication.
