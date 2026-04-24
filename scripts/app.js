import {
  about,
  contact,
  heroStats,
  navItems,
  profile,
  projects,
  stackGroups,
  sections,
} from './data.js';
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
          <a class="site-nav__link" href="#${item.target}" data-anchor-link data-nav-target="${item.target}">
            ${item.label}
          </a>
        </li>
      `,
    )
    .join('');
}

function renderHero() {
  const title = document.querySelector('[data-hero-title]');
  const description = document.querySelector('[data-hero-description]');
  const role = document.querySelector('[data-hero-role]');
  const tags = document.querySelector('[data-hero-tags]');
  const primaryAction = document.querySelector('[data-hero-primary]');
  const secondaryAction = document.querySelector('[data-hero-secondary]');
  const tertiaryAction = document.querySelector('[data-hero-tertiary]');
  const stats = document.querySelector('[data-hero-stats]');

  if (title) {
    title.innerHTML = profile.titleLines.map((line) => `<span>${line}</span>`).join('');
  }

  if (description) {
    description.textContent = profile.description;
  }

  if (role) {
    role.textContent = `${profile.name} · ${profile.role}`;
  }

  if (tags) {
    tags.innerHTML = profile.tags.map((tag) => `<span class="pill">${tag}</span>`).join('');
  }

  if (primaryAction) {
    primaryAction.href = profile.primaryAction.href;
    primaryAction.textContent = profile.primaryAction.label;
  }

  if (secondaryAction) {
    secondaryAction.href = profile.secondaryAction.href;
    secondaryAction.textContent = profile.secondaryAction.label;
  }

  if (tertiaryAction) {
    tertiaryAction.href = profile.tertiaryAction.href;
    tertiaryAction.textContent = profile.tertiaryAction.label;
  }

  if (stats) {
    stats.innerHTML = heroStats
      .map(
        (item) => `
          <article class="hero__metric" data-motion="card-tilt">
            <span class="metric-label">${item.label}</span>
            <strong class="metric-value">${item.value}</strong>
            <p class="metric-copy">${item.copy}</p>
          </article>
        `,
      )
      .join('');
  }
}

function renderAbout() {
  const intro = document.querySelector('[data-about-intro]');
  const story = document.querySelector('[data-about-story]');
  const highlights = document.querySelector('[data-about-highlights]');

  if (intro) {
    intro.textContent = about.intro;
  }

  if (story) {
    story.textContent = about.story;
  }

  if (highlights) {
    highlights.innerHTML = about.highlights.map((item) => `<li>${item}</li>`).join('');
  }
}

function renderProjects() {
  const grid = document.querySelector('[data-project-grid]');

  if (!grid) {
    return;
  }

  grid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card" data-motion="${project.motion}" data-animate="fadeUp">
          <div class="project-card__header">
            <h3 class="project-card__title">${project.title}</h3>
            <span class="pill">精选</span>
          </div>
          <p class="project-card__summary">${project.summary}</p>
          <div class="project-card__tags">
            ${project.stack.map((item) => `<span class="project-card__tag">${item}</span>`).join('')}
          </div>
          <div class="project-card__links">
            ${project.links.map((link) => `<a href="${link.href}">${link.label}</a>`).join(' · ')}
          </div>
        </article>
      `,
    )
    .join('');
}

function renderStack() {
  const grid = document.querySelector('[data-stack-grid]');

  if (!grid) {
    return;
  }

  grid.innerHTML = stackGroups
    .map(
      (group) => `
        <article class="stack-card" data-motion="card-tilt" data-animate="fadeUp">
          <div class="stack-card__header">
            <h3 class="stack-card__title">${group.title}</h3>
          </div>
          <p class="stack-card__summary">${group.summary}</p>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      `,
    )
    .join('');
}

function renderContact() {
  const summary = document.querySelector('[data-contact-summary]');
  const list = document.querySelector('[data-contact-list]');

  if (summary) {
    summary.textContent = contact.summary;
  }

  if (list) {
    list.innerHTML = contact.links
      .map(
        (item) => `
          <a class="pill" href="${item.href}">
            ${item.label} · ${item.value}
          </a>
        `,
      )
      .join('');
  }
}

function mountFooterYear() {
  const year = document.querySelector('[data-current-year]');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function init() {
  document.body.classList.add('is-enhanced');

  renderNav();
  renderHero();
  renderAbout();
  renderProjects();
  renderStack();
  renderContact();
  mountFooterYear();

  const themeController = createThemeController({
    root: document.body,
  });

  themeController.mount(document.querySelector('[data-theme-toggle]'));

  setupSmoothAnchors(document);
  setupScrollSpy(document, sections);
  setupRevealObserver(document);
}

init();
