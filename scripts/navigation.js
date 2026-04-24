export function setupSmoothAnchors(doc = document) {
  const links = doc.querySelectorAll('[data-anchor-link]');

  for (const link of links) {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');

      if (!href?.startsWith('#')) {
        return;
      }

      const target = doc.querySelector(href);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

export function setupScrollSpy(doc = document, sections = []) {
  const navLinks = new Map();

  for (const link of doc.querySelectorAll('[data-nav-target]')) {
    navLinks.set(link.dataset.navTarget, link);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (!visibleEntry) {
        return;
      }

      for (const [target, link] of navLinks.entries()) {
        link.classList.toggle('is-active', target === visibleEntry.target.id);
      }
    },
    {
      rootMargin: '-20% 0px -55% 0px',
      threshold: [0.2, 0.35, 0.6],
    },
  );

  for (const section of sections) {
    const element = doc.getElementById(section.id);
    if (element) {
      observer.observe(element);
    }
  }

  return observer;
}

export function setupRevealObserver(doc = document) {
  const targets = doc.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.18,
    },
  );

  for (const target of targets) {
    observer.observe(target);
  }

  return observer;
}
