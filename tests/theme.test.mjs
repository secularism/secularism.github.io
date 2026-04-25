import test from 'node:test';
import assert from 'node:assert/strict';

import {
  applyTheme,
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

test('applyTheme writes CSS-supported theme names', () => {
  const attrs = new Map();
  const root = {
    setAttribute(name, value) {
      attrs.set(name, value);
    },
  };

  applyTheme(root, 'dark');
  assert.equal(attrs.get('data-mode'), 'dark');
  assert.equal(attrs.get('data-theme'), 'dark');

  applyTheme(root, 'light');
  assert.equal(attrs.get('data-mode'), 'light');
  assert.equal(attrs.get('data-theme'), 'light');
});
