export const navItems = [
  { label: '首页', target: 'hero' },
  { label: '关于', target: 'about' },
  { label: '项目', target: 'projects' },
  { label: '技术栈', target: 'stack' },
  { label: '联系', target: 'contact' },
];

export const animationPresets = {
  heroReveal: { className: 'is-visible', threshold: 0.2 },
  fadeUp: { className: 'is-visible', threshold: 0.18 },
  staggerCards: { className: 'is-visible', threshold: 0.18 },
};

export const sections = [
  { id: 'hero', animation: 'heroReveal' },
  { id: 'about', animation: 'fadeUp' },
  { id: 'projects', animation: 'staggerCards' },
  { id: 'stack', animation: 'fadeUp' },
  { id: 'contact', animation: 'fadeUp' },
];
