# Homepage Shell Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page GitHub Pages personal homepage shell with theme switching, anchor navigation, mock content, and explicit animation extension hooks.

**Architecture:** Replace the current compiled artifact entry with a semantic static shell. Keep logic in small browser ESM modules so theme, navigation, and future animation configuration can evolve independently. Use CSS custom properties for dual-theme support and add `data-*` hooks for later scroll animation work.

**Tech Stack:** HTML5, CSS custom properties, browser ESM JavaScript, Node built-in test runner

---

## File Map

- Create: `docs/superpowers/specs/2026-04-23-homepage-redesign-design.md`
- Create: `docs/superpowers/plans/2026-04-23-homepage-shell.md`
- Create: `.gitignore`
- Create: `styles/site.css`
- Create: `scripts/data.js`
- Create: `scripts/theme.js`
- Create: `scripts/navigation.js`
- Create: `scripts/app.js`
- Create: `tests/theme.test.mjs`
- Create: `tests/data.test.mjs`
- Modify: `index.html`
- Modify: `README.md`

### Task 1: Define testable homepage metadata

**Files:**
- Create: `tests/data.test.mjs`
- Create: `scripts/data.js`

- [ ] **Step 1: Write the failing test**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { navItems, sections, animationPresets } from '../scripts/data.js';

test('nav items point to known sections', () => {
  const sectionIds = new Set(sections.map((section) => section.id));
  for (const item of navItems) {
    assert.ok(sectionIds.has(item.target));
  }
});

test('all sections expose future animation hooks', () => {
  for (const section of sections) {
    assert.equal(typeof section.animation, 'string');
    assert.ok(animationPresets[section.animation]);
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/data.test.mjs`
Expected: FAIL because `scripts/data.js` does not exist yet

- [ ] **Step 3: Write minimal implementation**

```js
export const navItems = [
  { label: '首页', target: 'hero' },
  { label: '关于', target: 'about' },
  { label: '项目', target: 'projects' },
  { label: '技术栈', target: 'stack' },
  { label: '联系', target: 'contact' },
];

export const animationPresets = {
  heroReveal: { enterClass: 'is-visible' },
  fadeUp: { enterClass: 'is-visible' },
  staggerCards: { enterClass: 'is-visible' },
};

export const sections = [
  { id: 'hero', animation: 'heroReveal' },
  { id: 'about', animation: 'fadeUp' },
  { id: 'projects', animation: 'staggerCards' },
  { id: 'stack', animation: 'fadeUp' },
  { id: 'contact', animation: 'fadeUp' },
];
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/data.test.mjs`
Expected: PASS

### Task 2: Define theme behavior with tests first

**Files:**
- Create: `tests/theme.test.mjs`
- Create: `scripts/theme.js`

- [ ] **Step 1: Write the failing test**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveInitialTheme,
  nextTheme,
  THEME_STORAGE_KEY,
} from '../scripts/theme.js';

test('resolveInitialTheme prefers stored theme', () => {
  const storage = { getItem: () => 'light' };
  const media = { matches: false };
  assert.equal(resolveInitialTheme(storage, media), 'light');
});

test('resolveInitialTheme falls back to dark default', () => {
  const storage = { getItem: () => null };
  const media = { matches: false };
  assert.equal(resolveInitialTheme(storage, media), 'dark');
});

test('nextTheme toggles between dark and light', () => {
  assert.equal(nextTheme('dark'), 'light');
  assert.equal(nextTheme('light'), 'dark');
});

test('storage key is stable', () => {
  assert.equal(THEME_STORAGE_KEY, 'homepage-theme');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/theme.test.mjs`
Expected: FAIL because `scripts/theme.js` does not exist yet

- [ ] **Step 3: Write minimal implementation**

```js
export const THEME_STORAGE_KEY = 'homepage-theme';

export function resolveInitialTheme(storage, mediaQueryList) {
  const storedTheme = storage?.getItem?.(THEME_STORAGE_KEY);
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }
  return mediaQueryList?.matches ? 'dark' : 'dark';
}

export function nextTheme(currentTheme) {
  return currentTheme === 'light' ? 'dark' : 'light';
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/theme.test.mjs`
Expected: PASS

### Task 3: Build the homepage shell and wire interactions

**Files:**
- Modify: `index.html`
- Create: `styles/site.css`
- Create: `scripts/navigation.js`
- Create: `scripts/app.js`
- Modify: `README.md`
- Create: `.gitignore`

- [ ] **Step 1: Replace the current entry HTML with semantic single-page sections**

```html
<body>
  <div class="page-shell" data-theme="dark">
    <header class="site-header">...</header>
    <main>
      <section id="hero" data-section="hero" data-animate="heroReveal">...</section>
      <section id="about" data-section="about" data-animate="fadeUp">...</section>
      <section id="projects" data-section="projects" data-animate="staggerCards">...</section>
      <section id="stack" data-section="stack" data-animate="fadeUp">...</section>
      <section id="contact" data-section="contact" data-animate="fadeUp">...</section>
    </main>
  </div>
  <script type="module" src="./scripts/app.js"></script>
</body>
```

- [ ] **Step 2: Add theme-aware layout and future animation hooks**

```css
[data-theme='dark'] { --bg: #070a10; --panel: rgba(255,255,255,.06); }
[data-theme='light'] { --bg: #f5f7fb; --panel: rgba(255,255,255,.78); }
[data-animate] { opacity: .001; transform: translateY(24px); }
[data-animate].is-visible { opacity: 1; transform: none; }
[data-motion='card-tilt'] { transform-style: preserve-3d; }
```

- [ ] **Step 3: Add navigation and theme runtime**

```js
import { sections, navItems } from './data.js';
import { createThemeController } from './theme.js';
import { setupScrollSpy, setupSmoothAnchors } from './navigation.js';

const theme = createThemeController(document);
theme.mount(document.querySelector('[data-theme-toggle]'));
setupSmoothAnchors(document);
setupScrollSpy(document, sections);
```

- [ ] **Step 4: Document local editing and deployment notes**

```md
# secularism.github.io

Static single-page personal homepage for GitHub Pages.

## Development

- Edit `index.html`, `styles/site.css`, and files under `scripts/`
- Run tests with `node --test`
- Deploy by pushing the static files in the repository root
```

- [ ] **Step 5: Run verification**

Run: `node --test`
Expected: PASS for all logic tests

## Self-Review

- Spec coverage: theme switching, anchor navigation, mock content, static deployment, and animation hooks are all covered by the three tasks above.
- Placeholder scan: no TODO/TBD placeholders remain in the plan steps.
- Type consistency: section ids, animation preset names, and theme values stay consistent across tasks.
