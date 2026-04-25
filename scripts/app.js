import { navItems, sections } from './data.js';
import { setupRevealObserver, setupScrollSpy, setupSmoothAnchors } from './navigation.js';
import { createThemeController } from './theme.js';

function renderNav() {
  const nav = document.querySelector('[data-nav-list]');

  if (!nav) {
    return;
  }

  nav.innerHTML = navItems
    .map(
      (item) => `
        <li>
          <a class="nav-link" href="#${item.target}" data-anchor-link data-nav-target="${item.target}">
            ${item.label}
          </a>
        </li>
      `,
    )
    .join('');
}

function mountFooterYear() {
  const year = document.querySelector('[data-current-year]');

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function mountBackgroundMotion() {
  const root = document.documentElement;

  const updateShift = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    root.style.setProperty('--bg-shift', `${Math.min(scrollY * 0.08, 32)}px`);
  };

  updateShift();
  window.addEventListener('scroll', updateShift, { passive: true });
}

function init() {
  document.documentElement.classList.add('is-enhanced');

  renderNav();
  mountFooterYear();
  mountBackgroundMotion();

  const themeController = createThemeController({
    root: document.documentElement,
  });

  themeController.mount(document.querySelector('[data-theme-toggle]'));

  setupSmoothAnchors(document);
  setupScrollSpy(document, sections);
  setupRevealObserver(document);
}

init();
