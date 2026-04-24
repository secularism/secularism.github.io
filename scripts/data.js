export const navItems = [
  { label: '首页', target: 'hero' },
  { label: '关于', target: 'about' },
  { label: '项目', target: 'projects' },
  { label: '技术栈', target: 'stack' },
  { label: '联系', target: 'contact' },
];

export const animationPresets = {
  heroReveal: { className: 'is-visible', threshold: 0.25 },
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

export const heroStats = [
  {
    label: 'Focus',
    value: 'Frontend',
    copy: '以界面体验、工程化和可维护性为核心的开发者定位。',
  },
  {
    label: 'Workflow',
    value: 'Single Page',
    copy: '信息密度高但阅读路径清晰，适合简历场景快速浏览。',
  },
  {
    label: 'Style',
    value: 'Future Minimal',
    copy: '暗色光晕与浅色玻璃双主题共用同一套结构骨架。',
  },
  {
    label: 'Next',
    value: 'Motion Ready',
    copy: '已预留滚动显现、卡片翻转、分段动效等扩展挂点。',
  },
];

export const profile = {
  name: 'Lin Secular',
  role: 'Frontend Developer · Product-minded Builder',
  titleLines: ['Minimal Future', 'Portfolio Shell'],
  description:
    '这是一个适合放在简历中的个人主页骨架：首屏建立记忆点，中段展示项目和技术栈，底部清晰给出联系入口。当前内容使用 mock 数据，后续可以无缝替换成你的真实信息。',
  tags: ['Vue-ready', 'GitHub Pages', 'Motion Hooks', 'Mock-first'],
  primaryAction: { label: '查看项目', href: '#projects' },
  secondaryAction: { label: '联系我', href: '#contact' },
  tertiaryAction: { label: 'GitHub', href: 'https://github.com/' },
};

export const about = {
  intro:
    '我偏好用克制、稳定、可演进的方式做前端页面。首版先把结构、主题系统和信息层级搭稳，后续再逐步加上滚动动画、卡片翻转和更丰富的视觉表达。',
  story:
    '这个版本故意把布局边界、卡片层级、锚点导航和主题变量全部拆清楚。这样当你未来想加入滚动驱动动画时，不需要推倒重做页面结构，只要沿着现有的 data hook 和模块接口增强即可。',
  highlights: ['简历友好', '单页滚动', '双主题切换', '静态部署优先'],
};

export const projects = [
  {
    title: 'Minimal Portfolio',
    summary: '单页个人主页模板，强调首屏氛围、项目入口和联系人信息的清晰呈现。',
    stack: ['HTML', 'CSS Variables', 'ES Modules'],
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Live Demo', href: '#hero' },
    ],
    motion: 'card-tilt',
  },
  {
    title: 'Dashboard Concept',
    summary: '模拟一个数据可视化后台的视觉概念，用于展示布局能力和卡片式信息组织。',
    stack: ['Layout System', 'Responsive', 'UI Design'],
    links: [
      { label: 'Case Study', href: '#about' },
      { label: 'Preview', href: '#projects' },
    ],
    motion: 'card-tilt',
  },
  {
    title: 'Motion-ready Cards',
    summary: '为后续滚动翻转、顺序显现、浮层位移等动效保留结构挂点的卡片组件集合。',
    stack: ['Interaction', 'Animation Hooks', 'Progressive Enhancement'],
    links: [
      { label: 'Roadmap', href: '#stack' },
      { label: 'Contact', href: '#contact' },
    ],
    motion: 'card-tilt',
  },
];

export const stackGroups = [
  {
    title: 'Frontend',
    summary: '聚焦界面搭建、状态表达、组件结构与响应式体验。',
    items: ['Vue / React 思维', '模块化样式', '语义化结构', '可维护交互'],
  },
  {
    title: 'Engineering',
    summary: '优先保证项目结构稳定，便于后续扩展与上线部署。',
    items: ['GitHub Pages', '静态发布', '构建准备', '模块拆分'],
  },
  {
    title: 'Motion Hooks',
    summary: '首版保留动画扩展点，为第二阶段体验优化做准备。',
    items: ['Intersection Observer', 'data-motion 标记', '分段进入动画', '卡片翻转预留'],
  },
  {
    title: 'Collaboration',
    summary: '让内容替换、视觉微调和后续增强都更容易协作完成。',
    items: ['Mock 数据替换', '变量化主题', '渐进增强', '清晰边界'],
  },
];

export const contact = {
  summary:
    '如果你是从简历点进来的，这个区域应该是最终的转化入口：快速知道如何联系我、去哪里看更多作品、以及是否适合继续沟通。',
  links: [
    { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
    { label: 'GitHub', value: 'github.com/example', href: 'https://github.com/' },
    { label: 'Blog', value: 'your-blog.example', href: '#hero' },
  ],
};
