# Tailwind Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the current homepage into a simpler, more responsive GitHub Pages personal site using Tailwind CSS and a light UI component layer, while preserving theme switching and adding restrained motion.

**Architecture:** Keep the site as a static GitHub Pages homepage rooted at `index.html` so deployment stays compatible with the current repository. Replace the hand-written CSS system with a Tailwind CLI pipeline and selectively adopt daisyUI component primitives for buttons, nav, cards, and toggles, then layer custom motion and layout classes on top.

**Tech Stack:** Static HTML, Tailwind CSS CLI, daisyUI plugin, vanilla ESM JavaScript, Node test runner

---

## File Map

- Create: `docs/superpowers/plans/2026-04-25-tailwind-homepage-redesign.md`
- Create: `src/tailwind.css`
- Create: `assets/favicon.svg`
- Modify: `package.json`
- Modify: `index.html`
- Modify: `scripts/app.js`
- Modify: `scripts/data.js`
- Modify: `scripts/theme.js`
- Modify: `README.md`
- Modify: `.gitignore`
- Delete or stop referencing: `styles/site.css`
- Test: `tests/index-shell.test.mjs`
- Test: `tests/theme.test.mjs`

### Task 1: Lock the new shell contract with tests

**Files:**
- Modify: `tests/index-shell.test.mjs`
- Modify: `tests/theme.test.mjs`

- [ ] **Step 1: Write failing assertions for the new title, favicon, and Tailwind build artifact**

Add checks that the HTML includes:
- `<title>secularism</title>`
- a favicon path pointing to `assets/favicon.svg`
- a stylesheet path pointing to the Tailwind build output
- a theme toggle label that still exists without module JS

- [ ] **Step 2: Run the focused tests to confirm they fail**

Run: `node --test tests/index-shell.test.mjs tests/theme.test.mjs`

Expected:
- FAIL because the current HTML still references the old title
- FAIL because the favicon is still `favicon.ico`
- FAIL because the Tailwind build output is not wired yet

- [ ] **Step 3: Keep the tests minimal and deterministic**

Use static string / regex assertions only. Do not test appearance. Test only shell contract and fallback behavior.

- [ ] **Step 4: Re-run once the test file edits are saved**

Run: `node --test tests/index-shell.test.mjs tests/theme.test.mjs`

Expected:
- still FAIL, but now for the intended contract mismatches only

### Task 2: Introduce Tailwind + daisyUI build pipeline

**Files:**
- Modify: `package.json`
- Create: `src/tailwind.css`
- Modify: `.gitignore`

- [ ] **Step 1: Add Tailwind CLI dependencies**

Install:
- `tailwindcss`
- `@tailwindcss/cli`
- `daisyui`

- [ ] **Step 2: Add build scripts**

Update `package.json` with scripts similar to:
- `build:css`
- `build`
- keep `test`

- [ ] **Step 3: Create the Tailwind entry stylesheet**

In `src/tailwind.css`, import Tailwind and daisyUI:

```css
@import "tailwindcss";
@plugin "daisyui";
```

Then add project-specific custom layers for:
- base colors
- animation utilities
- section motion helpers
- subtle background treatment

- [ ] **Step 4: Ensure generated assets are tracked correctly**

Keep source files in repo.
Ignore only dependencies and temporary build outputs that should not be committed.

### Task 3: Rebuild the homepage markup and component structure

**Files:**
- Modify: `index.html`
- Modify: `scripts/data.js`
- Modify: `scripts/app.js`
- Modify: `scripts/theme.js`
- Create: `assets/favicon.svg`
- Stop referencing: `styles/site.css`

- [ ] **Step 1: Replace the old title and favicon**

Set:
- title to `secularism`
- favicon to a simple custom SVG in `assets/favicon.svg`

- [ ] **Step 2: Replace the current page shell with Tailwind-first markup**

Rebuild the header, hero, about, project, stack, and contact sections using:
- responsive container classes
- fewer decorative wrappers
- more semantic spacing
- simpler visual hierarchy

- [ ] **Step 3: Use daisyUI selectively**

Adopt daisyUI primitives only where they help:
- buttons
- cards
- navbar / menu structure
- toggle / switch styling

Avoid full daisyUI page styling so the final look stays custom and restrained.

- [ ] **Step 4: Preserve the current single-page data-driven architecture**

Keep mock content in `scripts/data.js`.
Keep `scripts/app.js` responsible for:
- nav population
- section population
- footer year
- progressive enhancement hooks

- [ ] **Step 5: Keep theme switching compatible with direct file preview**

Maintain:
- inline fallback theme switching
- module-enhanced theme logic
- `localStorage` persistence

### Task 4: Add restrained responsive motion and polish

**Files:**
- Modify: `src/tailwind.css`
- Modify: `index.html`
- Modify: `scripts/app.js`

- [ ] **Step 1: Implement restrained hover and scroll motion**

Add:
- button lift on hover
- card border / shadow transition
- fade-up section reveal
- staggered project-card entry

- [ ] **Step 2: Add subtle background behavior**

Use:
- a very light background gradient
- gentle opacity / transform shifts tied to scroll or section visibility

Do not add:
- heavy glow blobs
- particle effects
- dramatic 3D motion

- [ ] **Step 3: Verify responsive breakpoints**

Check structure for:
- mobile single-column flow
- tablet relaxed two-column transitions where useful
- desktop balanced grid layout

### Task 5: Build, verify, and document

**Files:**
- Modify: `README.md`
- Modify: `tests/index-shell.test.mjs`
- Modify: `tests/theme.test.mjs`

- [ ] **Step 1: Run the focused tests**

Run: `node --test tests/index-shell.test.mjs tests/theme.test.mjs`

Expected: PASS

- [ ] **Step 2: Build Tailwind CSS**

Run: `npm run build:css`

Expected:
- generated CSS output exists
- `index.html` references the generated stylesheet

- [ ] **Step 3: Run the full project verification**

Run: `node --test`

Expected: PASS

- [ ] **Step 4: Update README**

Document:
- Tailwind build command
- test command
- root homepage deployment model

## Self-Review

- Spec coverage: title, favicon, Tailwind, UI framework usage, responsiveness, and restrained motion are all mapped to tasks above.
- Placeholder scan: no TODO/TBD placeholders remain in the implementation steps.
- Type consistency: theme storage key, file paths, and single-page section structure remain aligned with the existing site shell.
