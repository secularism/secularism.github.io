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
