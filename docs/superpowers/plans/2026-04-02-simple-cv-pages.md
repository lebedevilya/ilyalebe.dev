# Simple CV Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the over-abstracted CV variants system with four standalone Astro pages: `/cv`, `/cv_backend`, `/cv_fullstack`, and `/cv_pm`.

**Architecture:** Remove the shared CV data layer, shared CV renderer, and dynamic variant route. Restore `src/pages/cv.astro` as a standalone page and create three additional standalone page files by duplicating and editing page-level content directly. Keep `TimeLine.astro` only if it remains the simplest useful building block.

**Tech Stack:** Astro 3, TypeScript, TailwindCSS, Astro file-based routing

---

## File Structure

- Modify: `src/pages/cv.astro`
  - Restore as a standalone page containing the general CV directly.
- Create: `src/pages/cv_backend.astro`
  - Standalone backend-focused CV page.
- Create: `src/pages/cv_fullstack.astro`
  - Standalone fullstack-focused CV page.
- Create: `src/pages/cv_pm.astro`
  - Standalone PM-focused CV page with `Technical Product Manager` headline.
- Modify: `src/components/cv/TimeLine.astro`
  - Keep or restore the simplest correct version for standalone page usage.
- Delete: `src/data/cv.ts`
  - Remove shared CV data abstraction.
- Delete: `src/components/cv/CVPage.astro`
  - Remove shared CV renderer abstraction.
- Delete: `src/pages/cv/[variant].astro`
  - Remove dynamic variant routing.

## Verification Strategy

This repo does not have page-level route tests. Verification for this work is:

- `ASTRO_TELEMETRY_DISABLED=1 npm run build`
- Confirm generated output includes:
  - `dist/cv/index.html`
  - `dist/cv_backend/index.html`
  - `dist/cv_fullstack/index.html`
  - `dist/cv_pm/index.html`
- Confirm removed routes/files are gone from the built output and source tree.
- Manually inspect generated HTML for the intended page headlines and route presence.

### Task 1: Remove The Shared CV Abstraction Layer

**Files:**
- Delete: `src/data/cv.ts`
- Delete: `src/components/cv/CVPage.astro`
- Delete: `src/pages/cv/[variant].astro`
- Modify: `src/pages/cv.astro`
- Modify: `src/components/cv/TimeLine.astro`

- [ ] **Step 1: Restore `src/pages/cv.astro` to standalone page markup**

Use the pre-refactor version from commit `5436ca4` as the base.

Key shape:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import TimeLineElement from "../components/cv/TimeLine.astro";
---

<BaseLayout title="Resume" sideBarActiveItemID="cv">
  <!-- standalone CV content -->
</BaseLayout>
```

- [ ] **Step 2: Remove the data-driven imports and shared renderer wiring**

`src/pages/cv.astro` must no longer import:

```astro
import CVPage from "../components/cv/CVPage.astro";
import { getCVVariant } from "../data/cv";
```

- [ ] **Step 3: Delete the abstraction files**

Remove:

```text
src/data/cv.ts
src/components/cv/CVPage.astro
src/pages/cv/[variant].astro
```

- [ ] **Step 4: Settle `src/components/cv/TimeLine.astro`**

Choose the simpler correct version for standalone page usage. If the original page markup needs the old wrapper shape, restore it. If the current `div` wrapper is valid and works cleanly with the standalone pages, keep it.

- [ ] **Step 5: Run build verification**

Run: `ASTRO_TELEMETRY_DISABLED=1 npm run build`

Expected:
- Build passes.
- Only `/cv` remains among CV routes at this point.

- [ ] **Step 6: Commit**

```bash
git add src/pages/cv.astro src/components/cv/TimeLine.astro
git rm src/data/cv.ts src/components/cv/CVPage.astro 'src/pages/cv/[variant].astro'
git commit -m "refactor: remove cv abstraction layer"
```

### Task 2: Add The Backend And Fullstack Standalone CV Pages

**Files:**
- Create: `src/pages/cv_backend.astro`
- Create: `src/pages/cv_fullstack.astro`
- Reference: `src/pages/cv.astro`

- [ ] **Step 1: Create `src/pages/cv_backend.astro` from the general CV page**

Use `src/pages/cv.astro` as the template. Keep the page standalone.

Required route header:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import TimeLineElement from "../components/cv/TimeLine.astro";
---
```

- [ ] **Step 2: Edit backend-specific copy**

Adjust headline, profile, and selected bullets to emphasize:

- Ruby on Rails backend systems
- PostgreSQL
- async systems
- integrations
- reliability
- infrastructure-heavy execution

- [ ] **Step 3: Create `src/pages/cv_fullstack.astro` from the general CV page**

Keep the page fully standalone with duplicated markup where needed.

- [ ] **Step 4: Edit fullstack-specific copy**

Adjust headline, profile, and selected bullets to emphasize:

- end-to-end product delivery
- Rails + Hotwire
- user-facing flows
- internal tooling
- shipping business features quickly

- [ ] **Step 5: Run build verification**

Run: `ASTRO_TELEMETRY_DISABLED=1 npm run build`

Expected:
- Build passes.
- Generated output includes:
  - `dist/cv/index.html`
  - `dist/cv_backend/index.html`
  - `dist/cv_fullstack/index.html`

- [ ] **Step 6: Commit**

```bash
git add src/pages/cv_backend.astro src/pages/cv_fullstack.astro
git commit -m "feat: add backend and fullstack cv pages"
```

### Task 3: Add The PM Standalone CV Page

**Files:**
- Create: `src/pages/cv_pm.astro`
- Reference: `src/pages/cv.astro`

- [ ] **Step 1: Create `src/pages/cv_pm.astro` from the general CV page**

Keep the file standalone with direct page markup.

- [ ] **Step 2: Set the PM headline**

Use exactly:

```text
Technical Product Manager
```

- [ ] **Step 3: Rewrite profile and selected evidence honestly**

Focus the page on:

- product discovery
- roadmap ownership
- prioritization
- ops-heavy workflows
- cross-functional execution
- technical fluency in infrastructure-heavy systems
- domain credibility across Web3 infra, validator operations, payments infra, and compliance-heavy systems

Do not invent a pure PM career.

- [ ] **Step 4: Adjust selected experience bullets**

Rewrite only the bullets needed to support the PM positioning. Keep the claims grounded in actual founder/operator/technical product work.

- [ ] **Step 5: Run build verification**

Run: `ASTRO_TELEMETRY_DISABLED=1 npm run build`

Expected:
- Build passes.
- Generated output includes `dist/cv_pm/index.html`.

- [ ] **Step 6: Commit**

```bash
git add src/pages/cv_pm.astro
git commit -m "feat: add pm cv page"
```

### Task 4: Final Verification And Cleanup

**Files:**
- Review: `src/pages/cv.astro`
- Review: `src/pages/cv_backend.astro`
- Review: `src/pages/cv_fullstack.astro`
- Review: `src/pages/cv_pm.astro`
- Review: `src/components/cv/TimeLine.astro`

- [ ] **Step 1: Run a fresh production build**

Run: `ASTRO_TELEMETRY_DISABLED=1 npm run build`

Expected:
- PASS

- [ ] **Step 2: Verify expected generated routes**

Run:

```bash
find dist -maxdepth 2 -type f | sort | rg 'dist/cv(/index.html)?|dist/cv_backend/index.html|dist/cv_fullstack/index.html|dist/cv_pm/index.html'
```

Expected:
- `dist/cv/index.html`
- `dist/cv_backend/index.html`
- `dist/cv_fullstack/index.html`
- `dist/cv_pm/index.html`

- [ ] **Step 3: Verify removed abstraction paths are gone**

Run:

```bash
test ! -e src/data/cv.ts
test ! -e src/components/cv/CVPage.astro
test ! -e src/pages/cv/[variant].astro
```

Expected:
- all commands succeed

- [ ] **Step 4: Sanity-check the page positioning**

Inspect generated HTML or preview output and verify:
- `/cv` is general
- `/cv_backend` is backend-focused
- `/cv_fullstack` is fullstack-focused
- `/cv_pm` uses `Technical Product Manager` and reads as truthful technical product positioning

- [ ] **Step 5: Commit final cleanup if needed**

```bash
git add src/pages/cv.astro src/pages/cv_backend.astro src/pages/cv_fullstack.astro src/pages/cv_pm.astro src/components/cv/TimeLine.astro
git commit -m "fix: finalize simple cv pages"
```
