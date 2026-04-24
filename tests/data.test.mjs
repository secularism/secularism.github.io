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
