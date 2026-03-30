# CV Variants Design

## Context

The site currently exposes a single hardcoded CV page at [`src/pages/cv.astro`](/Users/ilyalebedev/projects/ilyalebe.dev/src/pages/cv.astro). The requirement is to support multiple CV variants for different roles such as backend and fullstack while preserving one shared structure and keeping URLs easy to understand and share.

## Goals

- Keep `/cv` as the default CV URL.
- Add semantic role-based CV URLs such as `/cv/backend` and `/cv/fullstack`.
- Reuse one shared layout and rendering path for all CV variants.
- Centralize shared content and allow targeted text overrides per variant.
- Keep the first implementation intentionally small and easy to edit.

## Non-Goals

- No numeric routes such as `/cv1`, `/cv2`.
- No separate page files per variant with duplicated markup.
- No PDF export or downloadable variant files in this pass.
- No CV switcher UI, analytics, or CMS/editor workflow in this pass.

## Routing

### Default Route

- `/cv` renders the `general` CV variant.

### Variant Routes

- `/cv/[variant]` renders role-specific variants.
- Initial variants:
  - `/cv/backend`
  - `/cv/fullstack`

### Invalid Routes

- Unknown variant slugs must return 404.
- The variant route must not silently fall back to the default CV because that would hide mistakes in shared links and make maintenance harder.

## Data Model

Use a single typed data module at `src/data/cv.ts`.

### Why This Approach

- The site is small and the content is structured.
- Variants mostly share the same sections and only differ in emphasis and copy.
- A content collection would add setup overhead without solving a real problem yet.

### Shape

The module should export:

- One shared base CV object that holds common structure and content.
- A map of variants keyed by slug, including `general`, `backend`, and `fullstack`.
- A variant list or helper that can be reused by Astro static path generation.

The data should stay explicit and plain. Do not build a mini templating language or an overly abstract override system. A small amount of duplication is acceptable if it keeps the content readable.

### Fields Expected To Vary

- Headline
- Profile summary
- Selected experience bullet wording
- Project emphasis
- Skills ordering or wording

## Rendering

### Shared Renderer

Extract the current CV page markup into a shared component, expected at `src/components/cv/CVPage.astro`.

Responsibilities:

- Receive one fully resolved CV object as input.
- Render the existing section structure consistently for every variant.
- Reuse the existing timeline component where appropriate.

### Page Entrypoints

- `src/pages/cv.astro`
  - Loads the `general` variant and renders the shared CV component.
- `src/pages/cv/[variant].astro`
  - Uses Astro static paths for known variants.
  - Loads the requested variant and renders the shared CV component.

## Content Strategy

Shared structure stays fixed across variants:

- Personal info
- Contact
- Profile
- Experience
- Education & Programs
- Selected Projects
- Core Skills

Variant customization should be constrained to copy and emphasis, not layout divergence. That keeps maintenance cheap and prevents version drift.

## Error Handling

- Invalid or missing variant lookups in the dynamic route should produce a 404.
- Variant lookup logic should fail loudly during development if a declared static path has no corresponding data entry.

## Verification

Implementation should be considered complete only after:

- Astro build passes.
- `/cv`, `/cv/backend`, and `/cv/fullstack` are generated successfully.
- Manual sanity check confirms variant-specific text differences appear in the intended sections while shared sections still render correctly.

## Implementation Scope For First Pass

1. Extract current general CV content into structured data.
2. Introduce the shared CV renderer component.
3. Keep `/cv` working as the default route.
4. Add `/cv/backend` and `/cv/fullstack`.
5. Keep the current visual design unless the refactor requires small cleanup for maintainability.

## Risks And Guardrails

### Risk: Over-Abstraction

Trying to model every possible text override or section permutation will slow down edits and make the data harder to maintain.

Guardrail:

- Prefer plain objects and explicit variant content over generic transformation logic.

### Risk: Route Drift

Hardcoding route slugs separately from the data source can create broken links or dead routes.

Guardrail:

- Generate variant routes from the same source of truth used for rendering.

### Risk: Markup Duplication

Keeping multiple page files with copied CV markup will cause the variants to drift over time.

Guardrail:

- Route all variants through one shared renderer component.
