export const THEME_STORAGE_KEY = 'homepage-theme';

export function resolveInitialTheme(storage, mediaQueryList) {
  const storedTheme = storage?.getItem?.(THEME_STORAGE_KEY);

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  if (mediaQueryList?.matches) {
    return 'dark';
  }

  return 'dark';
}

export function nextTheme(currentTheme) {
  return currentTheme === 'light' ? 'dark' : 'light';
}

export function applyTheme(root, theme) {
  root?.setAttribute?.('data-theme', theme);
  return theme;
}

export function createThemeController({
  root = document.body,
  storage = window.localStorage,
  mediaQueryList = window.matchMedia?.('(prefers-color-scheme: dark)'),
} = {}) {
  let currentTheme = resolveInitialTheme(storage, mediaQueryList);

  function syncButton(button) {
    if (!button) return;
    button.dataset.theme = currentTheme;
    button.setAttribute('aria-pressed', String(currentTheme === 'light'));
    const label = button.querySelector('[data-theme-label]');

    if (label) {
      label.textContent = currentTheme === 'dark' ? '浅色' : '暗色';
    } else {
      button.textContent = currentTheme === 'dark' ? '切换浅色' : '切换暗色';
    }
  }

  function setTheme(theme, button) {
    currentTheme = applyTheme(root, theme);
    storage?.setItem?.(THEME_STORAGE_KEY, currentTheme);
    syncButton(button);
    return currentTheme;
  }

  return {
    mount(button) {
      if (button?.dataset.inlineThemeReady === 'true') {
        button.onclick = null;
      }
      setTheme(currentTheme, button);
      button?.addEventListener?.('click', () => {
        setTheme(nextTheme(currentTheme), button);
      });
    },
    getTheme() {
      return currentTheme;
    },
  };
}
