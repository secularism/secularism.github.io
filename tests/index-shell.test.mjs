import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const indexHtml = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('theme toggle has visible fallback label in html', () => {
  assert.match(indexHtml, /data-theme-toggle[^>]*>[\s\S]*?(切换主题|浅色|暗色)[\s\S]*?<\/button>/);
});

test('navigation has static fallback links in html', () => {
  assert.match(indexHtml, /href="#hero"[\s\S]*首页/);
  assert.match(indexHtml, /href="#about"[\s\S]*关于/);
  assert.match(indexHtml, /href="#projects"[\s\S]*项目/);
});

test('hero contains static fallback copy in html', () => {
  assert.match(indexHtml, /Minimal Future/);
  assert.match(indexHtml, /Portfolio Shell/);
});

test('index includes inline theme fallback script for file preview', () => {
  assert.match(indexHtml, /function mountInlineThemeFallback\(\)/);
  assert.match(indexHtml, /button\.onclick = \(\) =>/);
});
